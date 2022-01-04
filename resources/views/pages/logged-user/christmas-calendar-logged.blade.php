@extends("layout")
@section("content")
    @if(strtotime('2022/01/02 00:00:00') < time())
        <div class="christmas-calendar-logged">
            <section class="container text-center">
                <div class="row">
                    <div class="col-xs-12 color-white">
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
            <section class="presents-list margin-top-70 no-dentist-and-user-bottom">
                <img src="/assets/images/christmas-calendar-campaign/dentist-registered-screen.png" class="dentist" alt="Dentist" itemprop="contentUrl"/>
                <picture itemscope="" itemtype="http://schema.org/ImageObject" class="presents padding-bottom-130">
                    <source media="(max-width: 768px)" srcset="/assets/images/christmas-calendar-campaign/mobile-prizes-img.png">
                    <source media="(max-width: 992px)" srcset="/assets/images/christmas-calendar-campaign/tablet-prizes-img.png">
                    <img src="/assets/images/christmas-calendar-campaign/holiday-calendar-2021-not-logged-prizes.png" alt="Presents list" itemprop="contentUrl"/>
                </picture>
                <img src="/assets/images/christmas-calendar-campaign/woman-registered-screen.png" class="user" alt="User" itemprop="contentUrl"/>
            </section>
            <section class="container tasks-section padding-top-50 padding-bottom-100 text-center">
                <div class="row">
                    <div class="col-xs-12">
                        <p class="fs-22 fs-xs-20 padding-bottom-30 lato-regular max-width-470 margin-0-auto color-white">
                            @if(time() < strtotime('2022/01/11 00:00:00'))
                                The winners will be announced first in our Telegram group. Join now and stay tuned for the winners announcement.
                            @else
                                See the winners in our Telegram group and be the first to know about future raffles!
                            @endif
                        </p>
                        <a href="https://t.me/dentacoin/255508" target="_blank">
                            <figure itemscope="" itemtype="http://schema.org/ImageObject">
                                <img src="/assets/images/christmas-calendar-campaign/see-winners-in-dentacoin-telegram.png" class="" alt="Join dentacoin telegram button" itemprop="contentUrl"/>
                            </figure>
                        </a>
                    </div>
                </div>
            </section>
            <section class="container text-center padding-top-45 padding-bottom-45 christmas-calendar-campaign-stats margin-bottom-15">
                <img src="/assets/images/christmas-calendar-campaign/registered-user-upper-snow.png" class="snow-img" alt="Snow" itemprop="contentUrl"/>
                <div class="row fs-0">
                    <div class="col-xs-12 col-md-4 single-stat inline-block-bottom">
                        <figure class="inline-block" itemscope="" itemtype="http://schema.org/ImageObject">
                            <img src="/assets/images/christmas-calendar-campaign/ticket.svg" alt="Ticket" itemprop="contentUrl" class="width-100"/>
                        </figure>
                        <div class="inline-block fs-16 fs-xs-14 stats-text text-left"><div class="inline-block lato-bold fs-20 line-height-16"><span class="user-bonus-ticket-amount">{{$bonusTickets}}</span>/31</div><br> daily raffle tickets</div>
                    </div>
                    <div class="col-xs-12 col-md-4 single-stat inline-block-bottom">
                        <figure class="inline-block" itemscope="" itemtype="http://schema.org/ImageObject">
                            <img src="/assets/images/christmas-calendar-campaign/bonus-ticket.svg" alt="Bonus ticket" itemprop="contentUrl" class="width-100"/>
                        </figure>
                        <div class="inline-block fs-16 fs-xs-14 stats-text text-left"><div class="inline-block lato-bold fs-20 line-height-16"><span class="user-ticket-amount">{{$ticketAmount}}</span>/47</div><br> bonus tickets for tasks</div>
                    </div>
                    <div class="col-xs-12 col-md-4 single-stat inline-block-bottom">
                        <figure class="inline-block" itemscope="" itemtype="http://schema.org/ImageObject">
                            <img src="/assets/images/christmas-calendar-campaign/dentacoins.svg" alt="Dentacoins" itemprop="contentUrl" class="width-100"/>
                        </figure>
                        <div class="inline-block fs-16 fs-xs-14 stats-text text-left"><div class="inline-block lato-bold fs-20 line-height-16"><span class="user-dcn-amount">@if((int)$bonusTickets == 31) {{number_format((int)$dcnAmount*2, 0, '', ',')}} @else {{number_format($dcnAmount, 0, '', ',')}} @endif</span>/328,000</div><br> Dentacoin (DCN)</div>
                    </div>
                </div>
            </section>
            <section class="container tasks-section">
                <div class="row">
                    <div class="col-xs-12 col-lg-10 col-lg-offset-1 set-width-limit box-background">
                        <img src="/assets/images/christmas-calendar-campaign/registered-user-bottom-snow.png" class="snow-img" alt="Snow" itemprop="contentUrl"/>
                        @if (isset($timeLeftForNextSpinningWheel) && !empty($timeLeftForNextSpinningWheel))
                            <div class="spin-the-wheel-timer">
                                <img src="/assets/images/christmas-calendar-campaign/spinning-wheel-icon.png" alt="Spinning wheel" itemprop="contentUrl" class="inline-block"/>
                                <div class="next-to-img inline-block lato-bold color-white">
                                    <div>Spin the wheel in:</div>
                                    <div class="spinning-wheel-timer" data-time-left="{{$timeLeftForNextSpinningWheel}}"></div>
                                </div>
                            </div>
                        @endif
                        <div class="row fs-0 position-relative">
                            @foreach($tasks as $task)
                                @php($dayId = date('j', strtotime($task->date)))
                                <a href="javascript:void(0);" class="single-task col-xs-4 col-sm-2 padding-left-xs-15 padding-right-xs-15 padding-left-10 padding-right-10 padding-bottom-30 padding-bottom-xs-25 inline-block @if((new \App\Http\Controllers\ChristmasCalendarController())->checkIfTaskIsDisqualified($task['id'], $participant->id, $year)) disqualified @endif" data-task="{{$task['id']}}" data-day-id="{{date('j', strtotime($task['date']))}}" data-type="{{$task['type']}}">
                                    <div class="wrapper @if((new \App\Http\Controllers\ChristmasCalendarController())->checkIfTaskIsAlreadyFinished($task['id'], $participant->id, $year)) opened @endif">
                                        <div class="present__pane">
                                            @if($task['type'] == 'spinning-wheel')
                                                <span class="custom-number">{{$dayId}}</span>
                                                <img src="/assets/images/christmas-calendar-campaign/registered-user-wheel.png" class="user-wheel" alt="Spinning wheel" itemprop="contentUrl"/>
                                            @else
                                                <h2 class="present__date">{{$dayId}}</h2>
                                            @endif
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
                                                    <img src="/assets/images/christmas-calendar-campaign/christmas-sticker.png" class="width-100" alt="Face sticket" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Face sticker</figcaption>
                                                @elseif($task['type'] == 'free-oracle-health-guide')
                                                    <img src="/assets/images/christmas-calendar-campaign/christmas-pdf.png" class="width-100" alt="Oral health guide" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Oral health guide</figcaption>
                                                @elseif($task['type'] == 'season-oral-guide')
                                                    <img src="/assets/images/christmas-calendar-campaign/christmas-pdf.png" class="width-100" alt="Season's oral health guide" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Season's oral health guide</figcaption>
                                                @elseif($task['type'] == 'custom-holiday-card')
                                                    <img src="/assets/images/christmas-calendar-campaign/christmas-card-gift.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Holiday card</figcaption>
                                                @elseif($task['type'] == 'treasure-piece-1')
                                                    <img src="/assets/images/christmas-calendar-campaign/treasure-piece-1.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Treasure piece</figcaption>
                                                @elseif($task['type'] == 'treasure-piece-2')
                                                    <img src="/assets/images/christmas-calendar-campaign/treasure-piece-2.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Treasure piece</figcaption>
                                                @elseif($task['type'] == 'treasure-piece-3')
                                                    <img src="/assets/images/christmas-calendar-campaign/treasure-piece-3.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Treasure piece</figcaption>
                                                @elseif($task['type'] == 'oral-health-tips-and-tricks')
                                                    <img src="/assets/images/christmas-calendar-campaign/tips-and-tricks-pdf.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5 fs-14 fs-sm-11 fs-xs-9">Oral Health Tips and Tricks</figcaption>
                                                @elseif($task['type'] == 'jaws-calendar')
                                                    <img src="/assets/images/christmas-calendar-campaign/jaws-calendar.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5 fs-14 fs-sm-11 fs-xs-10">Kid's Oral Care Planner</figcaption>
                                                @elseif($task['type'] == 'dcn-wallpaper')
                                                    <img src="/assets/images/christmas-calendar-campaign/dcn-wallpaper.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Dentacoin wallpaper</figcaption>
                                                @elseif($task['type'] == 'dcn-2022-calendar')
                                                    <img src="/assets/images/christmas-calendar-campaign/dcn-2022-calendar.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5 fs-14 fs-sm-11 fs-xs-9">Dentacoin 2022 Weekly Planner</figcaption>
                                                @elseif($task['type'] == 'dental-horoscope')
                                                    <img src="/assets/images/christmas-calendar-campaign/dental-horoscope.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Dental Horoscope</figcaption>
                                                @elseif($task['type'] == 'spinning-wheel')
                                                    @php($finishedTask = (new \App\Http\Controllers\ChristmasCalendarController())->checkIfTaskIsAlreadyFinished($task['id'], $participant->id, $year))
                                                    @if (!empty($finishedTask) && !empty($finishedTask->custom_reward_type))
                                                        @if ($finishedTask->custom_reward_type == 'dcn-reward')
                                                            <img src="/assets/images/christmas-calendar-campaign/dentacoins.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                            <figcaption class="color-white lato-bold padding-top-5">{{$finishedTask->custom_reward_value}} DCN</figcaption>
                                                        @elseif ($finishedTask->custom_reward_type == 'ticket-reward')
                                                            <img src="/assets/images/christmas-calendar-campaign/ticket.svg" class="width-100" alt="" itemprop="contentUrl"/>
                                                            <figcaption class="color-white lato-bold padding-top-5">
                                                                +{{$finishedTask->custom_reward_value}} raffle tickets
                                                            </figcaption>
                                                        @elseif ($finishedTask->custom_reward_type == 'dv-pass')
                                                            <img src="/assets/images/christmas-calendar-campaign/dv-vip-pass-icon.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                            <figcaption class="color-white lato-bold padding-top-5 fs-14 fs-sm-11 fs-xs-10">Daily VIP pass for DentaVox</figcaption>
                                                        @endif
                                                    @else
                                                        <img src="/assets/images/christmas-calendar-campaign/registered-user-wheel.png" class="width-100" alt="Spinning wheel" itemprop="contentUrl"/>
                                                    @endif
                                                @endif
                                            </figure>
                                            @if($task['type'] == 'spinning-wheel')
                                                @php($finishedTask = (new \App\Http\Controllers\ChristmasCalendarController())->checkIfTaskIsAlreadyFinished($task['id'], $participant->id, $year))
                                                @if (empty($finishedTask) || empty($finishedTask->custom_reward_type))
                                                    <div class="custom-tooltip" data-toggle="tooltip" title="Spin the Wheel for a chance to win one of four big prizes. The Wheel is unlocked every Friday.">
                                                        <i class="fa fa-info-circle color-white fs-20" aria-hidden="true"></i>
                                                    </div>
                                                @endif
                                            @endif
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
                            <a href="{{route('holiday-calendar-terms')}}" target="_blank" class="text-decoration-underline padding-right-15 padding-right-xs-0 fs-18 terms-link">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="padding-top-50">
                <picture itemscope="" itemtype="http://schema.org/ImageObject">
                    <img src="/assets/images/christmas-calendar-campaign/not-registered-trees-and-presents-footer.png" class="width-100" alt="Trees and presents" itemprop="contentUrl"/>
                </picture>
            </section>
        </div>
    @else
        <div class="christmas-calendar-logged move-footer-above">
            <section class="container text-center">
                <div class="row">
                    <div class="col-xs-12 color-white">
                        <h1 class="lato-black fs-38 fs-xs-24 padding-bottom-15 padding-top-15 max-width-600 margin-0-auto">Join Dentacoin Holiday CALENDAR CHALLENGE 2021</h1>
                        <p class="fs-22 fs-xs-20 lato-regular padding-bottom-30">Unlock a new surprise every day from December 1 to 31 and spin the wheel every Friday!</p>
                    </div>
                </div>
            </section>
            <section class="container-fluid text-center padding-top-45 padding-bottom-45 christmas-calendar-campaign-stats margin-bottom-15">
                <img src="/assets/images/christmas-calendar-campaign/registered-user-upper-snow.png" class="snow-img" alt="Snow" itemprop="contentUrl"/>
                <div class="row fs-0">
                    <div class="col-xs-12 col-md-4 single-stat inline-block-bottom">
                        <figure class="inline-block" itemscope="" itemtype="http://schema.org/ImageObject">
                            <img src="/assets/images/christmas-calendar-campaign/ticket.svg" alt="Ticket" itemprop="contentUrl" class="width-100"/>
                        </figure>
                        <div class="inline-block fs-16 fs-xs-14 stats-text text-left"><div class="inline-block lato-bold fs-20 line-height-16"><span class="user-bonus-ticket-amount">{{$bonusTickets}}</span>/31</div><br> daily raffle tickets</div>
                    </div>
                    <div class="col-xs-12 col-md-4 single-stat inline-block-bottom">
                        <figure class="inline-block" itemscope="" itemtype="http://schema.org/ImageObject">
                            <img src="/assets/images/christmas-calendar-campaign/bonus-ticket.svg" alt="Bonus ticket" itemprop="contentUrl" class="width-100"/>
                        </figure>
                        <div class="inline-block fs-16 fs-xs-14 stats-text text-left"><div class="inline-block lato-bold fs-20 line-height-16"><span class="user-ticket-amount">{{$ticketAmount}}</span>/47</div><br> bonus tickets for tasks</div>
                    </div>
                    <div class="col-xs-12 col-md-4 single-stat inline-block-bottom">
                        <figure class="inline-block" itemscope="" itemtype="http://schema.org/ImageObject">
                            <img src="/assets/images/christmas-calendar-campaign/dentacoins.svg" alt="Dentacoins" itemprop="contentUrl" class="width-100"/>
                        </figure>
                        <div class="inline-block fs-16 fs-xs-14 stats-text text-left"><div class="inline-block lato-bold fs-20 line-height-16"><span class="user-dcn-amount">@if((int)$bonusTickets == 31) {{number_format((int)$dcnAmount*2, 0, '', ',')}} @else {{number_format($dcnAmount, 0, '', ',')}} @endif</span>/328,000</div><br> Dentacoin (DCN)</div>
                    </div>
                </div>
            </section>
            <section class="container tasks-section">
                <div class="row camping-custom-popups rules"></div>
                @if(!empty($social_engagement_cookie))
                    <div class="row camping-custom-popups socials"><div class="popup-wrapper"><h2 class="lato-black fs-25 text-center padding-bottom-20 padding-top-35">BEFORE YOU START:</h2><div class="fs-18 text-center lato-regular">01. Follow us on Twitter</div><div class="text-center padding-top-15 padding-bottom-25"><a class="twitter-follow-button" href="https://twitter.com/dentacoin" data-size="large" data-show-screen-name="true" data-show-count="true">Follow</a></div>
                            <div class="fs-18 text-center lato-regular">02. Like our Facebook pages: </div>
                            <div class="facebook-buttons text-center padding-top-5 padding-bottom-10">
                                <div class="single-facebook-btn inline-block text-center">
                                    {{--<div class="fb-like" data-href="https://www.facebook.com/dentacoin/" data-width="" data-layout="box_count" data-action="like" data-size="small" data-show-faces="true" data-share="false"></div>--}}
                                    <a href="https://www.facebook.com/dentacoin/" target="_blank" class="inline-block padding-left-10 padding-right-10 padding-top-5 padding-bottom-5 text-left color-white fs-18 lato-bold"><i class="fa fa-facebook-official inline-block fs-26 margin-right-10" aria-hidden="true"></i><span class="inline-block">LIKE</span></a>
                                    <div class="fs-14 padding-top-5">Dentacoin</div>
                                </div>
                                <div class="single-facebook-btn inline-block text-center">
                                    {{--<div class="fb-like" data-href="https://www.facebook.com/DentaVox-1578351428897849/" data-width="" data-layout="box_count" data-action="like" data-size="small" data-show-faces="true" data-share="false"></div>--}}
                                    <a href="https://www.facebook.com/DentaVox-1578351428897849/" target="_blank" class="inline-block padding-left-10 padding-right-10 padding-top-5 padding-bottom-5 text-left color-white fs-18 lato-bold"><i class="fa fa-facebook-official inline-block fs-26 margin-right-10" aria-hidden="true"></i><span class="inline-block">LIKE</span></a>
                                    <div class="fs-14 padding-top-5">DentaVox</div>
                                </div>
                                <div class="single-facebook-btn inline-block text-center">
                                   {{-- <div class="fb-like" data-href="https://www.facebook.com/dentacare.dentacoin/" data-width="" data-layout="box_count" data-action="like" data-size="small" data-show-faces="true" data-share="false"></div>--}}
                                    <a href="https://www.facebook.com/dentacare.dentacoin/" target="_blank" class="inline-block padding-left-10 padding-right-10 padding-top-5 padding-bottom-5 text-left color-white fs-18 lato-bold"><i class="fa fa-facebook-official inline-block fs-26 margin-right-10" aria-hidden="true"></i><span class="inline-block">LIKE</span></a>
                                    <div class="fs-14 padding-top-5">Dentacare</div>
                                </div>
                                <div class="single-facebook-btn inline-block text-center padding-left-10 padding-right-10">
                                    {{--<div class="fb-like" data-href="https://www.facebook.com/dentacoin.trusted.reviews/" data-width="" data-layout="box_count" data-action="like" data-size="small" data-show-faces="true" data-share="false"></div>--}}
                                    <a href="https://www.facebook.com/dentacoin.trusted.reviews/" target="_blank" class="inline-block padding-left-10 padding-right-10 padding-top-5 padding-bottom-5 text-left color-white fs-18 lato-bold"><i class="fa fa-facebook-official inline-block fs-26 margin-right-10" aria-hidden="true"></i><span class="inline-block">LIKE</span></a>
                                    <div class="fs-14 padding-top-5">Trusted Reviews</div>
                                </div>
                                <div class="single-facebook-btn inline-block text-center padding-left-10 padding-right-10">
                                    {{--<div class="fb-like" data-href="https://www.facebook.com/dentacare.jaws/" data-width="" data-layout="box_count" data-action="like" data-size="small" data-show-faces="true" data-share="false"></div>--}}
                                    <a href="https://www.facebook.com/dentacare.jaws/" target="_blank" class="inline-block padding-left-10 padding-right-10 padding-top-5 padding-bottom-5 text-left color-white fs-18 lato-bold"><i class="fa fa-facebook-official inline-block fs-26 margin-right-10" aria-hidden="true"></i><span class="inline-block">LIKE</span></a>
                                    <div class="fs-14 padding-top-5">Jaws of Battle</div>
                                </div>
                            </div>
                            <div class="fs-18 text-center lato-regular">03. Join our Telegram group: </div>
                            <div class="padding-top-15 padding-bottom-25 text-center"><a href="https://t.me/dentacoin" target="_blank" class="white-blue-btn padding-left-30 padding-right-30 inline-block">TELEGRAM</a></div>
                            <div class="fs-18 text-center lato-regular">04. Follow our Instagram page:</div>
                            <div class="padding-top-15 padding-bottom-50 text-center"><a href="https://www.instagram.com/dentacoin_official/" target="_blank" class="instagram-btn padding-left-30 padding-right-30 inline-block">INSTAGRAM</a></div>
                            <div class="padding-bottom-30 text-center"><a href="javascript:void(0);" class="christmas-calendar-get-started white-red-btn padding-left-30 padding-right-30 padding-top-15 padding-bottom-15 fs-20 inline-block">GET STARTED</a></div></div></div>
                @endif
                <div class="row blurred-section active">
                    <div class="col-xs-12 col-lg-10 col-lg-offset-1 set-width-limit box-background">
                        <img src="/assets/images/christmas-calendar-campaign/registered-user-bottom-snow.png" class="snow-img" alt="Snow" itemprop="contentUrl"/>
                        @if (isset($timeLeftForNextSpinningWheel) && !empty($timeLeftForNextSpinningWheel))
                            <div class="spin-the-wheel-timer">
                                <img src="/assets/images/christmas-calendar-campaign/spinning-wheel-icon.png" alt="Spinning wheel" itemprop="contentUrl" class="inline-block"/>
                                <div class="next-to-img inline-block lato-bold color-white">
                                    <div>Spin the wheel in:</div>
                                    <div class="spinning-wheel-timer" data-time-left="{{$timeLeftForNextSpinningWheel}}"></div>
                                </div>
                            </div>
                        @endif
                        <div class="row fs-0 position-relative">
                            @foreach($tasks as $task)
                                @php($dayId = date('j', strtotime($task->date)))
                                <a href="javascript:void(0);" class="single-task col-xs-4 col-sm-2 padding-left-xs-15 padding-right-xs-15 padding-left-10 padding-right-10 padding-bottom-30 padding-bottom-xs-25 inline-block @if((new \App\Http\Controllers\ChristmasCalendarController())->checkIfTaskIsDisqualified($task['id'], $participant->id, $year)) disqualified @endif" data-task="{{$task['id']}}" data-day-id="{{date('j', strtotime($task['date']))}}" data-type="{{$task['type']}}">
                                    <div class="wrapper @if((new \App\Http\Controllers\ChristmasCalendarController())->checkIfTaskIsAlreadyFinished($task['id'], $participant->id, $year)) opened @endif">
                                        <div class="present__pane">
                                            @if($task['type'] == 'spinning-wheel')
                                                <span class="custom-number">{{$dayId}}</span>
                                                <img src="/assets/images/christmas-calendar-campaign/registered-user-wheel.png" class="user-wheel" alt="Spinning wheel" itemprop="contentUrl"/>
                                            @else
                                                <h2 class="present__date">{{$dayId}}</h2>
                                            @endif
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
                                                    <img src="/assets/images/christmas-calendar-campaign/christmas-sticker.png" class="width-100" alt="Face sticket" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Face sticker</figcaption>
                                                @elseif($task['type'] == 'free-oracle-health-guide')
                                                    <img src="/assets/images/christmas-calendar-campaign/christmas-pdf.png" class="width-100" alt="Oral health guide" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Oral health guide</figcaption>
                                                @elseif($task['type'] == 'season-oral-guide')
                                                    <img src="/assets/images/christmas-calendar-campaign/christmas-pdf.png" class="width-100" alt="Season's oral health guide" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Season's oral health guide</figcaption>
                                                @elseif($task['type'] == 'custom-holiday-card')
                                                    <img src="/assets/images/christmas-calendar-campaign/christmas-card-gift.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Holiday card</figcaption>
                                                @elseif($task['type'] == 'treasure-piece-1')
                                                    <img src="/assets/images/christmas-calendar-campaign/treasure-piece-1.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Treasure piece</figcaption>
                                                @elseif($task['type'] == 'treasure-piece-2')
                                                    <img src="/assets/images/christmas-calendar-campaign/treasure-piece-2.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Treasure piece</figcaption>
                                                @elseif($task['type'] == 'treasure-piece-3')
                                                    <img src="/assets/images/christmas-calendar-campaign/treasure-piece-3.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Treasure piece</figcaption>
                                                @elseif($task['type'] == 'oral-health-tips-and-tricks')
                                                    <img src="/assets/images/christmas-calendar-campaign/tips-and-tricks-pdf.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5 fs-14 fs-sm-11 fs-xs-9">Oral Health Tips and Tricks</figcaption>
                                                @elseif($task['type'] == 'jaws-calendar')
                                                    <img src="/assets/images/christmas-calendar-campaign/jaws-calendar.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5 fs-14 fs-sm-11 fs-xs-10">Kid's Oral Care Planner</figcaption>
                                                @elseif($task['type'] == 'dcn-wallpaper')
                                                    <img src="/assets/images/christmas-calendar-campaign/dcn-wallpaper.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Dentacoin wallpaper</figcaption>
                                                @elseif($task['type'] == 'dcn-2022-calendar')
                                                    <img src="/assets/images/christmas-calendar-campaign/dcn-2022-calendar.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5 fs-14 fs-sm-11 fs-xs-9">Dentacoin 2022 Weekly Planner</figcaption>
                                                @elseif($task['type'] == 'dental-horoscope')
                                                    <img src="/assets/images/christmas-calendar-campaign/dental-horoscope.png" class="width-100" alt="" itemprop="contentUrl"/>
                                                    <figcaption class="color-white lato-bold padding-top-5">Dental Horoscope</figcaption>
                                                @elseif($task['type'] == 'spinning-wheel')
                                                    @php($finishedTask = (new \App\Http\Controllers\ChristmasCalendarController())->checkIfTaskIsAlreadyFinished($task['id'], $participant->id, $year))
                                                    @if (!empty($finishedTask) && !empty($finishedTask->custom_reward_type))
                                                        @if ($finishedTask->custom_reward_type == 'dcn-reward')
                                                            <img src="/assets/images/christmas-calendar-campaign/dentacoins.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                            <figcaption class="color-white lato-bold padding-top-5">{{$finishedTask->custom_reward_value}} DCN</figcaption>
                                                        @elseif ($finishedTask->custom_reward_type == 'ticket-reward')
                                                            <img src="/assets/images/christmas-calendar-campaign/ticket.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                            <figcaption class="color-white lato-bold padding-top-5">
                                                                +{{$finishedTask->custom_reward_value}} raffle tickets
                                                            </figcaption>
                                                        @elseif ($finishedTask->custom_reward_type == 'dv-pass')
                                                            <img src="/assets/images/christmas-calendar-campaign/dv-vip-pass-icon.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                                            <figcaption class="color-white lato-bold padding-top-5 fs-14 fs-sm-11 fs-xs-10">Daily VIP pass for DentaVox</figcaption>
                                                        @endif
                                                    @else
                                                        <img src="/assets/images/christmas-calendar-campaign/registered-user-wheel.png" class="width-100" alt="Spinning wheel" itemprop="contentUrl"/>
                                                    @endif
                                                @endif
                                            </figure>
                                            @if($task['type'] == 'spinning-wheel')
                                                @php($finishedTask = (new \App\Http\Controllers\ChristmasCalendarController())->checkIfTaskIsAlreadyFinished($task['id'], $participant->id, $year))
                                                @if (empty($finishedTask) || empty($finishedTask->custom_reward_type))
                                                    <div class="custom-tooltip" data-toggle="tooltip" title="Spin the Wheel for a chance to win one of four big prizes. The Wheel is unlocked every Friday.">
                                                        <i class="fa fa-info-circle color-white fs-20" aria-hidden="true"></i>
                                                    </div>
                                                @endif
                                            @endif
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
                            <a href="{{route('holiday-calendar-terms')}}" target="_blank" class="text-decoration-underline padding-right-15 padding-right-xs-0 fs-18 terms-link">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="presents-list margin-top-70 no-dentist-and-user-bottom">
                <p class="fs-22 fs-xs-20 lato-black padding-bottom-30 text-center padding-left-15 padding-right-15 color-white">We are picking 12 big winners on January 21, 2022:</p>
                <img src="/assets/images/christmas-calendar-campaign/dentist-registered-screen.png" class="dentist" alt="Dentist" itemprop="contentUrl"/>
                <picture itemscope="" itemtype="http://schema.org/ImageObject" class="presents padding-bottom-130">
                    <source media="(max-width: 768px)" srcset="/assets/images/christmas-calendar-campaign/mobile-prizes-img.png">
                    <source media="(max-width: 992px)" srcset="/assets/images/christmas-calendar-campaign/tablet-prizes-img.png">
                    <img src="/assets/images/christmas-calendar-campaign/holiday-calendar-2021-not-logged-prizes.png" alt="Presents list" itemprop="contentUrl"/>
                </picture>
                <img src="/assets/images/christmas-calendar-campaign/woman-registered-screen.png" class="user" alt="User" itemprop="contentUrl"/>
            </section>
            {{--<section class="santa-section blurred-section active">
                <picture itemscope="" itemtype="http://schema.org/ImageObject">
                    <source media="(max-width: 768px)" srcset="/assets/images/christmas-calendar-campaign/forest-mobile-768.png" />
                    <img src="/assets/images/christmas-calendar-campaign/forest-1400.png" class="width-100" alt="Forest" itemprop="contentUrl"/>
                </picture>
            </section>--}}
        </div>
        <div id="fb-root"></div>
        {{--<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0&appId=1906201509652855&autoLogAppEvents=1"></script>--}}
        <script type="text/javascript" async src="https://platform.twitter.com/widgets.js"></script>
    @endif
@endsection