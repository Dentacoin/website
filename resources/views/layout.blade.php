<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <link rel="shortcut icon" href="{{URL::asset('assets/images/favicon.png') }}" type="image/x-icon" />
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
    <meta property="og:image" content="{{URL::asset('assets/uploads/dentacoin-facebook-thumb.jpg') }}"/>
    <style>

    </style>
    <link rel="stylesheet" type="text/css" href="/dist/css/front-libs-style.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/style.css">
    <script>
        var HOME_URL = '{{ route("home") }}';
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-97167262-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-97167262-1');
    </script>
</head>
<body data-current="one" class="@if(!empty(Route::current())) {{Route::current()->getName()}} @else class-404 @endif">
<svg class="svg-with-lines">
        <line class="first" x1="0" y1="0" x2="0" y2="0"/>
        <line class="second" x1="0" y1="0" x2="0" y2="0"/>
        <line class="third" x1="0" y1="0" x2="0" y2="0"/>
        <line class="fourth" x1="0" y1="0" x2="0" y2="0"/>
        <line class="fifth" x1="0" y1="0" x2="0" y2="0"/>
        <line class="sixth" x1="0" y1="0" x2="0" y2="0"/>
        <line class="seventh" x1="0" y1="0" x2="0" y2="0"/>
        <line class="eighth" x1="0" y1="0" x2="0" y2="0"/>
        <line class="ninth" x1="0" y1="0" x2="0" y2="0"/>
        <line class="tenth" x1="0" y1="0" x2="0" y2="0"/>
        <line class="eleventh" x1="0" y1="0" x2="0" y2="0"/>
        <line class="twelfth" x1="0" y1="0" x2="0" y2="0"/>
        <line class="thirteenth" x1="0" y1="0" x2="0" y2="0"/>
        <line class="fourteenth" x1="0" y1="0" x2="0" y2="0"/>
        <line class="fifteenth" x1="0" y1="0" x2="0" y2="0"/>
        <line class="sixteenth" x1="0" y1="0" x2="0" y2="0"/>
        <line class="seventeenth" x1="0" y1="0" x2="0" y2="0"/>
        <line class="eighteenth" x1="0" y1="0" x2="0" y2="0"/>
        <line class="nineteenth" x1="0" y1="0" x2="0" y2="0"/>
        <line class="twentieth" x1="0" y1="0" x2="0" y2="0"/>
    </svg>
    <header class="container">
        <div class="row">
            <figure itemscope="" itemtype="http://schema.org/Organization" class="col-xs-12 logo-container">
                <a itemprop="url" href="{{ route('home') }}" @if(!empty(Route::current())) @if(Route::current()->getName() == "home") tabindex="=-1" @endif @endif><img src="{{URL::asset('assets/images/logo.svg') }}" itemprop="logo" alt="Dentacoin logo"/></a>
            </figure>
        </div>
    </header>
    <main>@yield("content")</main>
    <footer>
        <div class="container">
            <div class="row">
                <h2 class="col-xs-12 section-title">JOIN DENTACOIN COMMUNITY</h2>
            </div>
            @include('partials.newsletter-registration')
            @if(!empty($socials))
                <div class="row socials">
                    <div class="col-xs-12" itemscope="" itemtype="http://schema.org/Organization">
                        <link itemprop="url" href="{{ route('home') }}">
                        <ul>
                            @foreach($socials as $social)
                                <li class="inline-block">
                                    <a itemprop="sameAs" target="_blank" href="{{$social->link}}">
                                        <figure itemscope="" itemtype="http://schema.org/ImageObject">
                                            <img src="{{URL::asset('assets/uploads/'.$social->media->name) }}"  @if(!empty($social->media->alt)) alt="{{$social->media->alt}}" @endif  itemprop="contentUrl"/>
                                        </figure>
                                    </a>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            @endif
            <div class="row menu">
                <nav class="col-xs-12">
                    <ul itemscope="" itemtype="http://schema.org/SiteNavigationElement">
                        <li class="inline-block"><a target="_blank" itemprop="url" href="https://blog.dentacoin.com/"><span itemprop="name">Blog</span></a></li>
                        <li class="inline-block separator">|</li>
                        <li class="inline-block"><a itemprop="url" href="{{route('press-center', ['page' => 1])}}"><span itemprop="name">Press center</span></a></li>
                        <li class="inline-block separator">|</li>
                        <li class="inline-block"><a target="_blank" itemprop="url" href="{{URL::asset('assets/docs/whitepaper.pdf') }}"><span itemprop="name">Whitepaper</span></a></li>
                        <li class="inline-block separator">|</li>
                        <li class="inline-block"><a target="_blank" itemprop="url" href="{{ route('privacy-policy') }}"><span itemprop="name">Privacy Policy</span></a></li>
                    </ul>
                </nav>
            </div>
            <div class="row media-inquiries">
                <div class="col-xs-12">
                    For media inquiries, please contact us at <a href="mailto:press@dentacoin.com">press@dentacoin.com</a>
                </div>
            </div>
            <div class="row all-rights">
                <div class="col-xs-12">
                    <div>© 2018 Dentacoin Foundation. All rights reserved. </div>
                    {{--<div>Wim Duisenbergplantsoen 31, 6221 SE Maastricht, The Netherlands</div>--}}
                    <div><a href="{{URL::asset('assets/docs/dentacoin-foundation.pdf') }}" target="_blank">Verify Dentacoin Foundation</a></div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Zendesk Widget script -->
    <script>/*<![CDATA[*/window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(e){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var e=this.createElement("script");n&&(this.domain=n),e.id="js-iframe-async",e.src="https://assets.zendesk.com/embeddable_framework/main.js",this.t=+new Date,this.zendeskHost="dentacoin.zendesk.com",this.zEQueue=a,this.body.appendChild(e)},o.write('<body onload="document._l();">'),o.close()}();
        /*]]>*/</script>
    <!-- End of Zendesk Widget script -->
    <script src="/assets/js/basic.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBd5xOHXvqHKf8ulbL8hEhFA4kb7H6u6D4" type="text/javascript"></script>
    <script src="/dist/js/front-libs-script.js"></script>
    @yield("script_block")
    {{--<script src="/dist/js/front-script.js"></script>--}}
<script src="/assets/js/markerclusterer-v2.js"></script>
<script src="/assets/js/google-map.js"></script>
<script src="/assets/js/index.js"></script>
</body>
</html>