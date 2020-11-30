<!DOCTYPE html>
<html>
<head>
    <title>Dentacoin Civic Login</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <link rel="stylesheet" type="text/css" href="https://hosted-sip.civic.com/css/civic-modal.min.css?v={{time()}}"/>
    <style>
        html, body {
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body>
    <script type="text/javascript" src="https://hosted-sip.civic.com/js/civic.sip.min.js?v={{time()}}"></script>
    <script type="text/javascript">
        var civicId = '{{ getenv("CIVIC_APP_ID") }}';
        var civicSip = new civic.sip({appId: civicId});
        civicSip.signup({
            style: 'popup',
            scopeRequest: civicSip.ScopeRequests.BASIC_SIGNUP
        });
    </script>
</body>
</html>