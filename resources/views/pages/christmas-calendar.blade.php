@extends("layout")
@section("content")
    @if(strtotime('2022/01/02 00:00:00') < time())
        <div class="christmas-calendar-not-logged challenge-passed color-white">
            <section class="container text-center">
                <div class="row">
                    <div class="col-xs-12">
                        <h1 class="lato-black fs-38 fs-xs-25 padding-bottom-15 padding-top-15 padding-top-xs-30 max-width-600 margin-0-auto line-height-46">Dentacoin Holiday<br>CALENDAR CHALLENGE 2021 IS OVER!</h1>
                        <p class="fs-22 fs-xs-20 lato-regular padding-bottom-xs-25">
                            @if(time() < strtotime('2022/01/21 00:00:00'))
                                We will pick 10 winners on January 21, 2022.
                            @else
                                We picked 10 winners on January 21, 2022.
                            @endif
                        </p>
                    </div>
                </div>
            </section>
            <section class="presents-list padding-top-40">
                <img src="/assets/images/christmas-calendar-campaign/dentist-christmas.png" class="dentist" alt="Dentist" itemprop="contentUrl"/>
                <picture itemscope="" itemtype="http://schema.org/ImageObject" class="presents">
                    <source media="(max-width: 768px)" srcset="/assets/images/christmas-calendar-campaign/mobile-prizes-img.png">
                    <source media="(max-width: 992px)" srcset="/assets/images/christmas-calendar-campaign/tablet-prizes-img.png">
                    <img src="/assets/images/christmas-calendar-campaign/holiday-calendar-2021-not-logged-prizes.png" alt="Presents list" itemprop="contentUrl"/>
                </picture>
                <img src="/assets/images/christmas-calendar-campaign/user-christmas-2021.png" class="user" alt="User" itemprop="contentUrl"/>
                <div class="padding-bottom-50 padding-top-sm-30 padding-top-xs-30 text-center">
                    <a href="javascript:void(0);" class="open-dentacoin-gateway patient-login">
                        <figure itemscope="" itemtype="http://schema.org/ImageObject">
                            <img src="/assets/images/christmas-calendar-campaign/join-btn.svg" class="max-width-250 max-width-xs-300" alt="Join button" itemprop="contentUrl"/>
                        </figure>
                    </a>
                </div>
            </section>
            <section class="container tasks-section padding-top-50 padding-bottom-100 text-center">
                <div class="row">
                    <div class="col-xs-12">
                        <p class="fs-22 fs-xs-20 padding-bottom-30 lato-regular max-width-470 margin-0-auto">
                            @if(time() < strtotime('2022/01/21 00:00:00'))
                                The winners will be announced first in our Telegram group. Join now and stay tuned for the winners announcement.
                            @else
                                See the winners in our Telegram group and be the first to know about future raffles!
                            @endif
                        </p>
                        <a href="https://t.me/dentacoin" target="_blank">
                            <figure itemscope="" itemtype="http://schema.org/ImageObject">
                                <img src="/assets/images/christmas-calendar-campaign/see-winners-in-dentacoin-telegram.png" class="" alt="Join dentacoin telegram button" itemprop="contentUrl"/>
                            </figure>
                        </a>
                    </div>
                </div>
            </section>
            <section>
                <picture itemscope="" itemtype="http://schema.org/ImageObject">
                    <img src="/assets/images/christmas-calendar-campaign/not-registered-trees-and-presents-footer.png" class="width-100" alt="Trees and presents" itemprop="contentUrl"/>
                </picture>
            </section>
        </div>
    @else
        <div class="christmas-calendar-not-logged color-white">
            <section class="container text-center">
                <div class="row">
                    <div class="col-xs-12">
                        <h1 class="lato-black fs-38 fs-xs-25 padding-bottom-15 padding-top-15 padding-top-xs-30 max-width-600 margin-0-auto">Join Dentacoin Holiday CALENDAR CHALLENGE 2021</h1>
                        <p class="fs-22 fs-xs-20 lato-regular">Unlock a new surprise every day and spin the wheel every Friday for a special prize!</p>
                        <p class="fs-22 fs-xs-20 lato-regular">Be consistent and increase your chances to win the <br><span class="lato-black">RAFFLE PRIZES on January, 21:</span></p>
                    </div>
                </div>
            </section>
            <section class="presents-list padding-top-40">
                <img src="/assets/images/christmas-calendar-campaign/dentist-christmas.png" class="dentist" alt="Dentist" itemprop="contentUrl"/>
                <picture itemscope="" itemtype="http://schema.org/ImageObject" class="presents">
                    <source media="(max-width: 768px)" srcset="/assets/images/christmas-calendar-campaign/mobile-prizes-img.png">
                    <source media="(max-width: 992px)" srcset="/assets/images/christmas-calendar-campaign/tablet-prizes-img.png">
                    <img src="/assets/images/christmas-calendar-campaign/holiday-calendar-2021-not-logged-prizes.png" alt="Presents list" itemprop="contentUrl"/>
                </picture>
                <img src="/assets/images/christmas-calendar-campaign/user-christmas-2021.png" class="user" alt="User" itemprop="contentUrl"/>
                <div class="padding-bottom-50 padding-top-sm-30 padding-top-xs-30 text-center">
                    <a href="javascript:void(0);" class="open-dentacoin-gateway patient-login">
                        <figure itemscope="" itemtype="http://schema.org/ImageObject">
                            <img src="/assets/images/christmas-calendar-campaign/join-btn.svg" class="max-width-250 max-width-xs-300" alt="Join button" itemprop="contentUrl"/>
                        </figure>
                    </a>
                </div>
            </section>
            <section class="container tasks-section">
                <div class="row">
                    <div class="col-xs-12 col-lg-10 col-lg-offset-1 box-background">
                        <div class="row fs-0 position-relative">
                            @for($i = 1; $i <= 31; $i+=1)
                                @if($i == 31)
                                    <a href="javascript:void(0);" class="col-xs-6 col-sm-4 col-md-2 padding-left-15 padding-right-15 padding-bottom-30 inline-block padding-left-xs-10 padding-right-xs-10 padding-bottom-xs-15 open-dentacoin-gateway patient-login show-on-mobile show-xs dots"><span></span><span></span><span></span></a>
                                @endif
                                <a href="javascript:void(0);" class="col-xs-6 col-sm-4 col-md-2 padding-left-15 padding-right-15 padding-bottom-30 inline-block padding-left-xs-10 padding-right-xs-10 padding-bottom-xs-15 open-dentacoin-gateway patient-login @if($i > 4 && $i < 31) hide-xs @endif">
                                    <div class="wrapper">
                                        <div class="present__pane">
                                            <h2 class="present__date">{{$i}}</h2>
                                        </div>
                                        <div class="present__content">
                                            <figure itemscope="" itemtype="http://schema.org/ImageObject">
                                                <img src="/assets/images/christmas-calendar-campaign/present.png" class="width-100" alt="Present" itemprop="contentUrl"/>
                                            </figure>
                                        </div>
                                    </div>
                                </a>
                            @endfor
                            <a href="{{route('holiday-calendar-terms')}}" target="_blank" class="text-decoration-underline padding-right-15 padding-right-xs-0 fs-18 terms-link">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="santa-section">
                <picture itemscope="" itemtype="http://schema.org/ImageObject">
                    <img src="/assets/images/christmas-calendar-campaign/not-registered-trees-and-presents-footer.png" class="width-100" alt="Trees and presents" itemprop="contentUrl"/>
                </picture>
            </section>
        </div>
    @endif
@endsection