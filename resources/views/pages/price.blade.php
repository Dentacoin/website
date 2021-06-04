<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <link rel="shortcut icon" href="{{URL::asset('assets/images/favicon.png') }}" type="image/x-icon" />
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    @if(!empty($meta_data))
        <title>{{$meta_data->title}}</title>
        <meta name="description" content="{{$meta_data->description}}" />
        <meta name="keywords" content="{{$meta_data->keywords}}" />
        <meta property="og:url" content="{{Request::url()}}"/>
        <meta property="og:title" content="{{$meta_data->social_title}}"/>
        <meta property="og:description" content="{{$meta_data->social_description}}"/>
    @endif
    <meta name="p:domain_verify" content="dce2e29c27694ac250a2f58e6a8fa551"/>
    <style>

    </style>

    <link rel="stylesheet" type="text/css" href="/dist/css/front-libs-style.css?v=1.1.22">
    <link rel="stylesheet" type="text/css" href="/assets/css/style.css?v=1.1.22">
    <script>
        var HOME_URL = '{{ route("home") }}';
    </script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-97167262-1"></script>
    <script id="google-analytics-script">
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        @if(empty($_COOKIE['performance_cookies']))
        gtag('config', 'UA-97167262-1', {'anonymize_ip': true});
        @else
        gtag('config', 'UA-97167262-1');
        @endif
    </script>

    <!-- Facebook Pixel Code -->
    <script id="facebook-pixel-script">
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

        @if(empty($_COOKIE['marketing_cookies']))
        fbq('consent', 'revoke');
        @else
        fbq('consent', 'grant');
        @endif

        fbq('init', '2366034370318681');
        fbq('track', 'PageView');
    </script>
    <noscript>
        <img height="1" width="1" src="https://www.facebook.com/tr?id=2366034370318681&ev=PageView&noscript=1"/>
    </noscript>
    <!-- End Facebook Pixel Code -->
</head>
<body class="@if((new \App\Http\Controllers\UserController())->checkSession()) logged-in @if((new \App\Http\Controllers\UserController())->checkPatientSession()) logged-patient @elseif((new \App\Http\Controllers\UserController())->checkDentistSession()) logged-dentist @endif @endif @if(!empty(Route::current())) {{Route::current()->getName()}} @else class-404 @endif" data-environment="{{getenv('APP_ENVIRONMENT')}}">
    <section class="top-section text-center color-black padding-top-25">
        <figure itemscope="" itemtype="http://schema.org/ImageObject" class="dentacoin-logo">
            <img src="{{URL::asset('assets/uploads/text-logo.svg') }}" alt="Dentacoin logo" itemprop="contentUrl"/>
        </figure>
        <h1 class="fs-66 padding-top-10 padding-bottom-65">{{$subtitle}}</h1>
        <div class="shadowed-line padding-top-70 padding-bottom-70 lato-black fs-70">
            <div class="inline-block"><img src="{{URL::asset('assets/images/dcn-icon.svg') }}" alt="DCN icon" class="width-100 max-width-130 margin-right-10 inline-block"/> <span class="inline-block">1000 DCN</span></div>
            <div class="inline-block padding-left-15 padding-right-15">=</div>
            <div class="inline-block"><img src="{{URL::asset('assets/images/' . $icon) }}" alt="{{$currencyLabel}} icon" class="width-100 max-width-130 margin-right-10 inline-block"/> <span class="inline-block">{{number_format(1000 * $price, 4, '.', "")}} {{$currencyLabel}}</span></div>
        </div>
    </section>
    <footer class="text-center padding-top-50 padding-bottom-30 color-white">
        <div class="fs-20 lato-black padding-bottom-15">{{$accepted}}</div>
        <div class="fs-10">© 2021 Dentacoin Foundation. All rights reserved.</div>
    </footer>
</body>
</html>