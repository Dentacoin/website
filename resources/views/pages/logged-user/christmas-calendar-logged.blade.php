@extends("layout")
@section("content")
    @if(strtotime('2021/01/02 00:00:00') < time())
        <div class="christmas-calendar-logged">
            <section class="container text-center">
                <div class="row">
                    <div class="col-xs-12">
                        <h1 class="lato-black fs-38 fs-xs-25 padding-bottom-15 padding-top-15 padding-top-xs-30 max-width-600 margin-0-auto line-height-46">Dentacoin Holiday<br>CALENDAR CHALLENGE 2020 IS OVER!</h1>
                        <p class="fs-22 fs-xs-20 lato-regular padding-bottom-xs-25">We picked 10 big winners on January 10, 2020:</p>
                    </div>
                </div>
            </section>
            <section class="presents-list padding-top-40">
                <img src="/assets/images/christmas-calendar-campaign/dentist-christmas.png" class="dentist" alt="Dentist" itemprop="contentUrl"/>
                <picture itemscope="" itemtype="http://schema.org/ImageObject" class="presents padding-bottom-30">
                    <img src="/assets/images/christmas-calendar-campaign/holiday-calendar-2020-prizes.png" alt="Presents list" itemprop="contentUrl"/>
                </picture>
                <img src="/assets/images/christmas-calendar-campaign/user-christmas.png" class="user" alt="User" itemprop="contentUrl"/>
            </section>
            <section class="container tasks-section padding-top-50 padding-bottom-100 text-center">
                <div class="row">
                    <div class="col-xs-12">
                        <p class="fs-22 fs-xs-20 padding-bottom-30 lato-regular max-width-470 margin-0-auto">See the winners in our Telegram group and be the first to know about future raffles!</p>
                        <a href="https://t.me/dentacoin/255508" target="_blank">
                            <figure itemscope="" itemtype="http://schema.org/ImageObject">
                                <img src="/assets/images/christmas-calendar-campaign/see-winners-in-dentacoin-telegram.png" class="" alt="Join dentacoin telegram button" itemprop="contentUrl"/>
                            </figure>
                        </a>
                    </div>
                </div>
            </section>
            <section class="container text-center padding-top-45 padding-bottom-45 christmas-calendar-campaign-stats margin-bottom-15">
                <div class="row fs-0">
                    <div class="col-xs-12 col-md-4 single-stat inline-block-bottom">
                        <figure class="inline-block" itemscope="" itemtype="http://schema.org/ImageObject">
                            <img src="/assets/images/christmas-calendar-campaign/ticket.svg" alt="Ticket" itemprop="contentUrl" class="width-100"/>
                        </figure>
                        <div class="inline-block lato-bold fs-16 fs-xs-14 stats-text"><span class="user-bonus-ticket-amount">{{$bonusTickets}}</span>/31 daily raffle tickets</div>
                    </div>
                    <div class="col-xs-12 col-md-4 single-stat inline-block-bottom">
                        <figure class="inline-block" itemscope="" itemtype="http://schema.org/ImageObject">
                            <img src="/assets/images/christmas-calendar-campaign/bonus-ticket.svg" alt="Bonus ticket" itemprop="contentUrl" class="width-100"/>
                        </figure>
                        <div class="inline-block lato-bold fs-16 fs-xs-14 stats-text"><span class="user-ticket-amount">{{$ticketAmount}}</span>/81 bonus tickets for tasks</div>
                    </div>
                    <div class="col-xs-12 col-md-4 single-stat inline-block-bottom">
                        <figure class="inline-block" itemscope="" itemtype="http://schema.org/ImageObject">
                            <img src="/assets/images/christmas-calendar-campaign/dentacoins.svg" alt="Dentacoins" itemprop="contentUrl" class="width-100"/>
                        </figure>
                        <div class="inline-block lato-bold fs-16 fs-xs-14 stats-text"><span class="user-dcn-amount">@if((int)$bonusTickets == 31) {{(int)$dcnAmount*2}} @else {{$dcnAmount}} @endif</span>/210,000 Dentacoin (DCN)</div>
                    </div>
                </div>
            </section>
            <section class="container tasks-section">
                <div class="row">
                    <div class="col-xs-12 col-lg-10 col-lg-offset-1 set-width-limit">
                        <div class="row fs-0 position-relative">
                            @foreach($tasks as $task)
                                <a href="javascript:void(0);" class="single-task col-xs-4 col-sm-2 padding-left-xs-15 padding-right-xs-15 padding-left-10 padding-right-10 padding-bottom-30 padding-bottom-xs-25 inline-block @if((new \App\Http\Controllers\ChristmasCalendarController())->checkIfTaskIsDisqualified($task['id'], $participant->id, $year)) disqualified @endif" data-task="{{$task['id']}}" data-day-id="{{date('j', strtotime($task['date']))}}" data-type="{{$task['type']}}">
                                    <div class="wrapper @if((new \App\Http\Controllers\ChristmasCalendarController())->checkIfTaskIsAlreadyFinished($task['id'], $participant->id, $year)) opened @endif">
                                        <div class="present__pane">
                                            <h2 class="present__date">{{date('j', strtotime($task['date']))}}</h2>
                                        </div>
                                        <div class="present__content">
                                            <figure itemscope="" itemtype="http://schema.org/ImageObject">
                                                @if($task['type'] == 'dcn-reward')
                                                    <img src="/assets/images/christmas-calendar-campaign/dentacoins.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">{{$task['value']}} DCN</figcaption>
                                                @elseif($task['type'] == 'ticket-reward')
                                                    <img src="/assets/images/christmas-calendar-campaign/ticket.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">
                                                        @if((int)$task['value'] > 1)
                                                            +{{$task['value']}} raffle tickets
                                                        @else
                                                            +{{$task['value']}} raffle ticket
                                                        @endif
                                                    </figcaption>
                                                @elseif($task['type'] == 'face-sticker')
                                                    <img src="/assets/images/christmas-calendar-campaign/christmas-sticker.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Face sticker</figcaption>
                                                @elseif($task['type'] == 'facebook-holiday-frame')
                                                    <img src="/assets/images/christmas-calendar-campaign/christmas-fb-frame.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Facebook frame</figcaption>
                                                @elseif($task['type'] == 'free-oracle-health-guide')
                                                    <img src="/assets/images/christmas-calendar-campaign/christmas-pdf.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Oral health guide</figcaption>
                                                @elseif($task['type'] == 'custom-holiday-card')
                                                    <img src="/assets/images/christmas-calendar-campaign/christmas-card-gift.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Holiday card</figcaption>
                                                @endif
                                            </figure>
                                            @if((new \App\Http\Controllers\ChristmasCalendarController())->checkIfTaskIsDisqualified($task['id'], $participant->id, $year))
                                                <i class="fa fa-times check-icon red" aria-hidden="true"></i>
                                            @elseif((new \App\Http\Controllers\ChristmasCalendarController())->checkIfTaskIsAlreadyFinished($task['id'], $participant->id, $year))
                                                <i class="fa fa-check check-icon" aria-hidden="true"></i>
                                            @endif
                                        </div>
                                    </div>
                                </a>
                            @endforeach
                            <a href="javascript:void(0);" class="single-task double-reward col-xs-4 col-sm-2 padding-left-xs-15 padding-right-xs-15 padding-left-10 padding-right-10 padding-bottom-30 padding-bottom-xs-25 inline-block">
                                <div class="wrapper opened">
                                    <div class="present__pane"></div>
                                    <div class="present__content">
                                        <figure itemscope="" itemtype="http://schema.org/ImageObject">
                                            <img src="/assets/images/christmas-calendar-campaign/double-reward.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                        </figure>
                                        @if((int)$bonusTickets == 31) <i class="fa fa-check check-icon" aria-hidden="true"></i> @endif
                                    </div>
                                </div>
                            </a>
                            <a href="{{route('holiday-calendar-terms')}}" target="_blank" class="text-decoration-underline padding-right-15 padding-right-xs-0 fs-18 terms-link">Terms &  Conditions</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="padding-top-50">
                <picture itemscope="" itemtype="http://schema.org/ImageObject">
                    <source media="(max-width: 768px)" srcset="/assets/images/christmas-calendar-campaign/footer-presents-mobile.png" />
                    <img src="/assets/images/christmas-calendar-campaign/footer-presents.png" class="width-100" alt="Santa flying in the sky" itemprop="contentUrl"/>
                </picture>
            </section>
        </div>
    @else
        <div class="christmas-calendar-logged">
            <section class="container text-center">
                <div class="row">
                    <div class="col-xs-12">
                        <h1 class="lato-black fs-38 fs-xs-24 padding-bottom-15 padding-top-15 max-width-600 margin-0-auto">Join Dentacoin Holiday CALENDAR CHALLENGE 2020</h1>
                        <p class="fs-22 fs-xs-20 lato-regular padding-bottom-30">Unlock a new surprise every day from December 1 to 31!</p>
                    </div>
                </div>
            </section>
            <section class="container-fluid text-center padding-top-45 padding-bottom-45 christmas-calendar-campaign-stats margin-bottom-15">
                <div class="row fs-0">
                    <div class="col-xs-12 col-md-4 single-stat inline-block-bottom">
                        <figure class="inline-block" itemscope="" itemtype="http://schema.org/ImageObject">
                            <img src="/assets/images/christmas-calendar-campaign/ticket.svg" alt="Ticket" itemprop="contentUrl" class="width-100"/>
                        </figure>
                        <div class="inline-block lato-bold fs-16 fs-xs-14 stats-text"><span class="user-bonus-ticket-amount">{{$bonusTickets}}</span>/31 daily raffle tickets</div>
                    </div>
                    <div class="col-xs-12 col-md-4 single-stat inline-block-bottom">
                        <figure class="inline-block" itemscope="" itemtype="http://schema.org/ImageObject">
                            <img src="/assets/images/christmas-calendar-campaign/bonus-ticket.svg" alt="Bonus ticket" itemprop="contentUrl" class="width-100"/>
                        </figure>
                        <div class="inline-block lato-bold fs-16 fs-xs-14 stats-text"><span class="user-ticket-amount">{{$ticketAmount}}</span>/81 bonus tickets for tasks</div>
                    </div>
                    <div class="col-xs-12 col-md-4 single-stat inline-block-bottom">
                        <figure class="inline-block" itemscope="" itemtype="http://schema.org/ImageObject">
                            <img src="/assets/images/christmas-calendar-campaign/dentacoins.svg" alt="Dentacoins" itemprop="contentUrl" class="width-100"/>
                        </figure>
                        <div class="inline-block lato-bold fs-16 fs-xs-14 stats-text"><span class="user-dcn-amount">@if((int)$bonusTickets == 31) {{(int)$dcnAmount*2}} @else {{$dcnAmount}} @endif</span>/210,000 Dentacoin (DCN)</div>
                    </div>
                </div>
            </section>
            <section class="container tasks-section">
                <div class="row camping-custom-popups rules"></div>
                @if(!empty($social_engagement_cookie))
                    <div class="row camping-custom-popups socials"><div class="popup-wrapper"><h2 class="lato-black fs-25 text-center padding-bottom-20 padding-top-35">BEFORE YOU START:</h2><div class="fs-18 text-center lato-regular">01. Follow us on Twitter</div><div class="text-center padding-top-15 padding-bottom-35"><a class="twitter-follow-button" href="https://twitter.com/dentacoin" data-size="large" data-show-screen-name="true" data-show-count="true">Follow</a></div><div class="fs-18 text-center lato-regular">02. Like our Facebook pages: </div><div class="facebook-buttons text-center padding-top-15 padding-bottom-35"><div class="single-facebook-btn inline-block text-center"><div class="fb-like" data-href="https://www.facebook.com/dentacoin/" data-width="" data-layout="box_count" data-action="like" data-size="small" data-show-faces="true" data-share="false"></div><div class="fs-14 padding-top-5">Dentacoin</div></div><div class="single-facebook-btn inline-block text-center"><div class="fb-like" data-href="https://www.facebook.com/dentacare.dentacoin/" data-width="" data-layout="box_count" data-action="like" data-size="small" data-show-faces="true" data-share="false"></div><div class="fs-14 padding-top-5">Dentacare</div></div><div class="single-facebook-btn inline-block text-center"><div class="fb-like" data-href="https://www.facebook.com/DentaVox-1578351428897849/" data-width="" data-layout="box_count" data-action="like" data-size="small" data-show-faces="true" data-share="false"></div><div class="fs-14 padding-top-5">Dentavox</div></div><div class="single-facebook-btn inline-block text-center"><div class="fb-like" data-href="https://www.facebook.com/dentacoin.trusted.reviews/" data-width="" data-layout="box_count" data-action="like" data-size="small" data-show-faces="true" data-share="false"></div><div class="fs-14 padding-top-5">Trusted Reviews</div></div></div><div class="padding-bottom-20 text-center"><a href="javascript:void(0);" class="christmas-calendar-get-started white-red-btn padding-left-30 padding-right-30">GET STARTED</a></div></div></div>
                @endif
                <div class="row blurred-section active">
                    <div class="col-xs-12 col-lg-8 col-lg-offset-2 set-width-limit">
                        <div class="row fs-0 position-relative">
                            @foreach($tasks as $task)
                                <a href="javascript:void(0);" class="single-task col-xs-4 col-sm-2 padding-left-xs-15 padding-right-xs-15 padding-left-10 padding-right-10 padding-bottom-30 padding-bottom-xs-25 inline-block @if((new \App\Http\Controllers\ChristmasCalendarController())->checkIfTaskIsDisqualified($task['id'], $participant->id, $year)) disqualified @endif" data-task="{{$task['id']}}" data-day-id="{{date('j', strtotime($task['date']))}}" data-type="{{$task['type']}}">
                                    <div class="wrapper @if((new \App\Http\Controllers\ChristmasCalendarController())->checkIfTaskIsAlreadyFinished($task['id'], $participant->id, $year)) opened @endif">
                                        <div class="present__pane">
                                            <h2 class="present__date">{{date('j', strtotime($task['date']))}}</h2>
                                        </div>
                                        <div class="present__content">
                                            <figure itemscope="" itemtype="http://schema.org/ImageObject">
                                                @if($task['type'] == 'dcn-reward')
                                                    <img src="/assets/images/christmas-calendar-campaign/dentacoins.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">{{$task['value']}} DCN</figcaption>
                                                @elseif($task['type'] == 'ticket-reward')
                                                    <img src="/assets/images/christmas-calendar-campaign/ticket.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">
                                                        @if((int)$task['value'] > 1)
                                                            +{{$task['value']}} raffle tickets
                                                        @else
                                                            +{{$task['value']}} raffle ticket
                                                        @endif
                                                    </figcaption>
                                                @elseif($task['type'] == 'face-sticker')
                                                    <img src="/assets/images/christmas-calendar-campaign/christmas-sticker.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Face sticker</figcaption>
                                                @elseif($task['type'] == 'facebook-holiday-frame')
                                                    <img src="/assets/images/christmas-calendar-campaign/christmas-fb-frame.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Facebook frame</figcaption>
                                                @elseif($task['type'] == 'free-oracle-health-guide')
                                                    <img src="/assets/images/christmas-calendar-campaign/christmas-pdf.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Oral health guide</figcaption>
                                                @elseif($task['type'] == 'custom-holiday-card')
                                                    <img src="/assets/images/christmas-calendar-campaign/christmas-card-gift.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Holiday card</figcaption>
                                                @endif
                                            </figure>
                                            @if((new \App\Http\Controllers\ChristmasCalendarController())->checkIfTaskIsDisqualified($task['id'], $participant->id, $year))
                                                <i class="fa fa-times check-icon red" aria-hidden="true"></i>
                                            @elseif((new \App\Http\Controllers\ChristmasCalendarController())->checkIfTaskIsAlreadyFinished($task['id'], $participant->id, $year))
                                                <i class="fa fa-check check-icon" aria-hidden="true"></i>
                                            @endif
                                        </div>
                                    </div>
                                </a>
                            @endforeach
                            <a href="javascript:void(0);" class="single-task double-reward col-xs-4 col-sm-2 padding-left-xs-15 padding-right-xs-15 padding-left-10 padding-right-10 padding-bottom-30 padding-bottom-xs-25 inline-block">
                                <div class="wrapper opened">
                                    <div class="present__pane"></div>
                                    <div class="present__content">
                                        <figure itemscope="" itemtype="http://schema.org/ImageObject">
                                            <img src="/assets/images/christmas-calendar-campaign/double-reward.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                        </figure>
                                        @if((int)$bonusTickets == 31) <i class="fa fa-check check-icon" aria-hidden="true"></i> @endif
                                    </div>
                                </div>
                            </a>
                            <a href="{{route('holiday-calendar-terms')}}" target="_blank" class="text-decoration-underline padding-right-15 padding-right-xs-0 fs-18 terms-link">Terms &  Conditions</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="presents-list padding-top-70">
                <p class="fs-22 fs-xs-20 lato-regular padding-bottom-30 text-center">We are picking 10 big winners on January 10, 2020:</p>
                <img src="/assets/images/christmas-calendar-campaign/dentist-christmas.png" class="dentist" alt="Dentist" itemprop="contentUrl"/>
                <picture itemscope="" itemtype="http://schema.org/ImageObject" class="presents padding-bottom-30">
                    <img src="/assets/images/christmas-calendar-campaign/holiday-calendar-2020-prizes.png" alt="Presents list" itemprop="contentUrl"/>
                </picture>
                <img src="/assets/images/christmas-calendar-campaign/user-christmas.png" class="user" alt="User" itemprop="contentUrl"/>
            </section>
            {{--<section class="santa-section blurred-section active">
                <picture itemscope="" itemtype="http://schema.org/ImageObject">
                    <source media="(max-width: 768px)" srcset="/assets/images/christmas-calendar-campaign/forest-mobile-768.png" />
                    <img src="/assets/images/christmas-calendar-campaign/forest-1400.png" class="width-100" alt="Forest" itemprop="contentUrl"/>
                </picture>
            </section>--}}
        </div>
        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0&appId=1906201509652855&autoLogAppEvents=1"></script>
        <script type="text/javascript" async src="https://platform.twitter.com/widgets.js"></script>
    @endif
@endsection