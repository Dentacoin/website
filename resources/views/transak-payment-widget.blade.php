<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <script src="https://global.transak.com/sdk/v1.1/widget.js" async></script>
</head>
<body>
    <script src="/assets/js/basic.js"></script>
    <script>
        var get_params = basic.getGETParameters();
        var defaultValues = {
            network: 'optimism', // ethereum or optimism
            fiatAmount: 100,
            cryptoCurrencyCode: 'ETH',
            walletAddress: ''
        };

        if (hasOwnProperty.call(get_params, 'network')) {
            defaultValues.network = get_params.network;
        }

        if (hasOwnProperty.call(get_params, 'fiatAmount')) {
            defaultValues.fiatAmount = parseInt(get_params.fiatAmount);
        }

        // atm our users can use Transak only for ETH purchases
        /*if (hasOwnProperty.call(get_params, 'cryptoCurrencyCode')) {
            defaultValues.cryptoCurrencyCode = get_params.cryptoCurrencyCode;
        }*/

        if (hasOwnProperty.call(get_params, 'walletAddress') && basic.customValidateWalletAddress(get_params.walletAddress)) {
            defaultValues.walletAddress = get_params.walletAddress;
        }

        function launchTransak() {
            var transakParams = {
                apiKey: 'ca55ce43-0421-4c7e-a89b-93ebda818cc8',  // Your API Key
                environment: 'PRODUCTION', // STAGING/PRODUCTION
                hostURL: window.location.origin,
                widgetHeight: '625px',
                widgetWidth: '500px',
                themeColor: '#00afe1', // App theme color
                fiatCurrency: 'USD', // If you want to limit fiat selection eg 'USD'
                defaultPaymentMethod: 'credit_debit_card',
                network: defaultValues.network,
                fiatAmount: defaultValues.fiatAmount,
                cryptoCurrencyCode: defaultValues.cryptoCurrencyCode,
                walletAddress: defaultValues.walletAddress
            };
            let transak = new TransakSDK.default(transakParams);
            transak.init();

            // To get all the events
            transak
                .on(transak.ALL_EVENTS, (data) => {
                    console.log(data)
                });

            // This will trigger when the user marks payment is made.
            transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
                console.log(orderData);
                //transak.close();
            });
        }

        window.onload = function() {
            launchTransak();
        }
    </script>
</body>
</html>