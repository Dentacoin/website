<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <script src="https://global.transak.com/sdk/v1.1/widget.js" async></script>
</head>

<body>
<script>
    var defaultValues = {
        network: 'optimism', // ethereum or optimism
        fiatAmount: '100',
        cryptoCurrencyCode: 'ETH'
    };

    function launchTransak() {
        let transak = new TransakSDK.default({
            apiKey: 'ca55ce43-0421-4c7e-a89b-93ebda818cc8',  // Your API Key
            environment: 'PRODUCTION', // STAGING/PRODUCTION
            hostURL: window.location.origin,
            widgetHeight: '625px',
            widgetWidth: '500px',
            themeColor: '#00afe1', // App theme color
            fiatCurrency: 'USD', // If you want to limit fiat selection eg 'USD'
            defaultPaymentMethod: 'credit_debit_card',
            network: 'optimism', // ethereum or optimism
            fiatAmount: '500',
            cryptoCurrencyCode: 'ETH',
            walletAddress: '0xC0c583DaC82Dd59dCE26e00aE6b7Fd272Ca01bEa'
        });
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
        launchTransak()
    }
</script>
</body>

</html>