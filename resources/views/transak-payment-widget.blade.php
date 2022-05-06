<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
    <meta charset="utf-8" />
    <title>Transak Payment Widget</title>
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
            walletAddress: '',
            email: '',
            widgetHeight: '625px',
            widgetWidth: '500px'
        };

        if (hasOwnProperty.call(get_params, 'network')) {
            defaultValues.network = get_params.network;
        }

        if (hasOwnProperty.call(get_params, 'fiatAmount')) {
            defaultValues.fiatAmount = parseInt(get_params.fiatAmount);
        }

        if (hasOwnProperty.call(get_params, 'widgetHeight') && hasOwnProperty.call(get_params, 'widgetWidth')) {
            defaultValues.widgetHeight = get_params.widgetHeight;
            defaultValues.widgetWidth = get_params.widgetWidth;
        }

        // atm our users can use Transak only for ETH purchases
        /*if (hasOwnProperty.call(get_params, 'cryptoCurrencyCode')) {
            defaultValues.cryptoCurrencyCode = get_params.cryptoCurrencyCode;
        }*/

        if (hasOwnProperty.call(get_params, 'walletAddress') && basic.customValidateWalletAddress(get_params.walletAddress)) {
            defaultValues.walletAddress = get_params.walletAddress;
        }

        if (hasOwnProperty.call(get_params, 'email') && basic.validateEmail(get_params.email)) {
            defaultValues.email = get_params.email;
        }
        console.log(defaultValues, 'defaultValues');

        function launchTransak() {
            var transakParams = {
                apiKey: 'ca55ce43-0421-4c7e-a89b-93ebda818cc8',  // Your API Key
                environment: 'PRODUCTION', // STAGING/PRODUCTION
                hostURL: window.location.origin,
                widgetHeight: defaultValues.widgetHeight,
                widgetWidth: defaultValues.widgetWidth,
                themeColor: '#00afe1', // App theme color
                fiatCurrency: 'USD', // If you want to limit fiat selection eg 'USD'
                paymentMethod: 'sepa_bank_transfer',
                defaultPaymentMethod: 'credit_debit_card',
                network: defaultValues.network,
                fiatAmount: defaultValues.fiatAmount,
                cryptoCurrencyCode: defaultValues.cryptoCurrencyCode,
                walletAddress: defaultValues.walletAddress
            };
            console.log(transakParams, 'transakParams');
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