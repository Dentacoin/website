<!DOCTYPE html>
<html>
<head>
    <title>Dentacoin Civic Login</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
    {{--<link rel="stylesheet" type="text/css" href="https://hosted-sip.civic.com/css/civic-modal.min.css?v={{time()}}"/>--}}
    <style>
        html, body {
            margin: 0;
            padding: 0;
        }
        .visual-hide {
            opacity: 0;
            font-size: 0;
        }
        .response-layer{background-color:rgba(255,255,255,0.7);width:100%;height:100%;position:fixed;top:0;left:0;z-index:1100}.response-layer .wrapper{text-align:center;padding-left:15px;padding-right:15px;font-size:20px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.response-layer .wrapper img{width:200px;margin-bottom:15px}
    </style>
</head>
@php($type = \Illuminate\Support\Facades\Input::get('type'))
@php($appType = \Illuminate\Support\Facades\Input::get('app-type'))
<body class="mobile-app-loaded @if(!empty($appType)) @if ($appType == 'dentavox') dentavox-app-loaded @endif  @endif">
    <a href="javascript:void(0)" class="civic-custom-btn type-login social-login-btn mobile-app visual-hide @if ($type == 'login') active @endif" data-url="{{getenv('API_DOMAIN')}}/api/login" data-platform="">{{ __('login-register.continue-with-civic') }}</a>
    <a href="javascript:void(0)" class="civic-custom-btn type-register social-login-btn mobile-app visual-hide @if ($type == 'register') active @endif" data-url="{{getenv('API_DOMAIN')}}/api/register" data-platform="">{{ __('login-register.continue-with-civic') }}</a>

    <div class="camping-loader"><div class="response-layer"><div class="wrapper"><picture itemscope="" itemtype="http://schema.org/ImageObject"><source media="(max-width: 768px)" srcset="/assets/uploads/dcn-flipping-coin-logo-loader-v3-mobile.gif"><img itemprop="contentUrl" src="/assets/uploads/dcn-flipping-coin-logo-loader-v3_desktop.gif" alt="Loader"></picture></div></div></div>

    <script src="/dist/js/front-libs-script.js?v={{time()}}"></script>
    <script type="text/javascript" src="https://dentacoin.com/assets/libs/civic-login/civic-combined-login.js?v={{time()}}"></script>
    <script type="text/javascript">
        function getGETParameters() {
            var prmstr = window.location.search.substr(1);
            return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
        }

        function transformToAssocArray(prmstr) {
            var params = {};
            var prmarr = prmstr.split("&");
            for (var i = 0, len = prmarr.length; i < len; i+=1) {
                var tmparr = prmarr[i].split("=");
                params[tmparr[0]] = tmparr[1];
            }
            return params;
        }

        var getParams = getGETParameters();
        if (!getParams.hasOwnProperty('uuid')) {
            $(document).on('civicLibLoaded', function() {
                if ($('.type-login').hasClass('active')) {
                    console.log('type-login clicked');
                    $('.type-login').click();
                }

                if ($('.type-register').hasClass('active')) {
                    console.log('type-register clicked');
                    $('.type-register').click();
                }
            });
        }
    </script>
</body>
</html>