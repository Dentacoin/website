const {config_variable} = require('./config');
const Web3 = require('../../../node_modules/web3');
const ethers = require('../../../node_modules/ethers');
const optimismContracts = require('../../../node_modules/@eth-optimism/contracts');
const web3_l2_provider = new Web3(new Web3.providers.HttpProvider('https://mainnet.optimism.io'));
const ethers_l2_provider = new ethers.providers.JsonRpcProvider(
    'https://mainnet.optimism.io'
);

async function init() {
    const L2DCNContract = new web3_l2_provider.eth.Contract(config_variable.l2.abi_definitions.dcn_contract_abi, config_variable.l2.addresses.dcn_contract_address);
    var gasPrice = parseInt(await web3_l2_provider.eth.getGasPrice());
    console.log(gasPrice, 'gasPrice');

    var gasLimitForL2DCNTransfer = await L2DCNContract.methods.transfer('0x3976d5b90cfa0a0cc4d62983455ff6a6909f0f18', 5000).estimateGas({
        from: '0x3976d5b90cfa0a0cc4d62983455ff6a6909f0f18'
    });

    var gasLimitForL2ETHTransfer = await web3_l2_provider.eth.estimateGas({
        to: '0x3976d5b90cfa0a0cc4d62983455ff6a6909f0f18'
    });

    console.log(web3_l2_provider.utils.fromWei((gasPrice * gasLimitForL2DCNTransfer).toString()), 'L2 FEE FOR DCN TRANSFER');
    console.log(web3_l2_provider.utils.fromWei((gasPrice * gasLimitForL2ETHTransfer).toString()), 'L2 FEE FOR ETH TRANSFER');

    const GasPriceOracle = optimismContracts.getContractFactory('OVM_GasPriceOracle').attach(optimismContracts.predeploys.OVM_GasPriceOracle).connect(ethers_l2_provider);
    const L1FeeDCNTransfer = await GasPriceOracle.getL1Fee(
        ethers.utils.serializeTransaction({
            data: L2DCNContract.methods.transfer('0x3976d5b90cfa0a0cc4d62983455ff6a6909f0f18', 5000).encodeABI(),
            to: config_variable.l2.addresses.dcn_contract_address,
            gasPrice: web3_l2_provider.utils.toHex(gasPrice),
            gasLimit: gasLimitForL2DCNTransfer
        })
    );
    console.log(L1FeeDCNTransfer.toString(), 'L1 FEE FOR DCN TRANSFER');

    const L1FeeETHTransfer = await GasPriceOracle.getL1Fee(
        ethers.utils.serializeTransaction({
            to: '0x3976d5b90cfa0a0cc4d62983455ff6a6909f0f18',
            gasPrice: web3_l2_provider.utils.toHex(gasPrice),
            gasLimit: gasLimitForL2ETHTransfer,
            value: 100000000000
        })
    );

    var totalFeeForDCNTransferInWei = ((gasPrice * gasLimitForL2DCNTransfer) + parseInt(L1FeeDCNTransfer.toString()));
    totalFeeForDCNTransferInWei = parseInt(totalFeeForDCNTransferInWei + (totalFeeForDCNTransferInWei * 0.05));
    var totalFeeForETHTransferInWei = ((gasPrice * gasLimitForL2ETHTransfer) + parseInt(L1FeeETHTransfer.toString()));
    totalFeeForETHTransferInWei = parseInt(totalFeeForETHTransferInWei + (totalFeeForETHTransferInWei * 0.05));

    document.getElementById('dcn-transfer-fee').innerHTML = web3_l2_provider.utils.fromWei(totalFeeForDCNTransferInWei.toString());
    document.getElementById('eth-transfer-fee').innerHTML = web3_l2_provider.utils.fromWei(totalFeeForETHTransferInWei.toString());

    $.ajax({
        type: 'GET',
        url: 'https://api.coingecko.com/api/v3/coins/ethereum',
        dataType: 'json',
        success: function (response) {
            document.getElementById('dcn-transfer-fee-in-usd').innerHTML = '( ' + (web3_l2_provider.utils.fromWei(totalFeeForDCNTransferInWei.toString()) * response.market_data.current_price.usd).toFixed(2) + '$ )';
            document.getElementById('eth-transfer-fee-in-usd').innerHTML = '( ' + (web3_l2_provider.utils.fromWei(totalFeeForETHTransferInWei.toString()) * response.market_data.current_price.usd).toFixed(2) + '$ )';
        }
    });
}
init();