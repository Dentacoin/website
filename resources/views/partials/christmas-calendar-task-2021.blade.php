@php($dayId = date('j', strtotime($task->date)))
<div class="popup-header">
    <figure itemscope="" itemtype="http://schema.org/ImageObject" class="text-center">
        @if ($task['type'] == 'spinning-wheel')
            <img src="/assets/images/christmas-calendar-campaign/lottery-task-header.png" alt="" itemprop="contentUrl"/>
        @else
            <img src="/assets/images/christmas-calendar-campaign/tasks-pop-up-header-img.png" alt="" itemprop="contentUrl"/>
        @endif
    </figure>
    <div class="lines-and-day">
        <div class="lines">
            <div class="big-blue-line"></div>
        </div>
        <div class="day">
            <img src="/assets/images/christmas-calendar-campaign/date-box-snow.png" class="day-snow" alt="Snow" itemprop="contentUrl"/>
            DEC {{$dayId}}
        </div>
    </div>
</div>
<div class="popup-body" data-task-id="{{$dayId}}">
    <a href="javascript:void(0);" class="custom-close">×</a>
    @if ($type == 'task')
        <form enctype="multipart/form-data">
            <div class="padding-bottom-15 padding-top-25 fs-0 text-center-xs">
                <div class="inline-block task-present">
                    <figure itemscope="" itemtype="http://schema.org/ImageObject">
                        @if ($task['type'] == 'dcn-reward')
                            <img src="/assets/images/christmas-calendar-campaign/dentacoins.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                            <figcaption class="color-white lato-bold padding-top-5">{{$task['value']}} DCN</figcaption>
                        @elseif ($task['type'] == 'ticket-reward')
                            <img src="/assets/images/christmas-calendar-campaign/ticket.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                            <figcaption class="color-white lato-bold padding-top-5">
                                @if ((int)$task['value'] > 1)
                                    +{{$task['value']}} raffle tickets
                                @else
                                    +{{$task['value']}} raffle ticket
                                @endif
                            </figcaption>
                        @elseif ($task['type'] == 'face-sticker')
                            <img src="/assets/images/christmas-calendar-campaign/christmas-sticker.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                            <figcaption class="color-white lato-bold padding-top-5">Face sticker</figcaption>
                        @elseif ($task['type'] == 'season-oral-guide')
                            <img src="/assets/images/christmas-calendar-campaign/christmas-pdf.png" class="width-100" alt="Season's oral health guide" itemprop="contentUrl"/>
                            <figcaption class="color-white lato-bold padding-top-5">Season's oral health guide</figcaption>
                        @elseif ($task['type'] == 'custom-holiday-card')
                            <img src="/assets/images/christmas-calendar-campaign/christmas-card-gift.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                            <figcaption class="color-white lato-bold padding-top-5">Holiday card</figcaption>
                        @elseif ($task['type'] == 'treasure-piece-1')
                            <img src="/assets/images/christmas-calendar-campaign/treasure-piece-1.png" class="width-100" alt="" itemprop="contentUrl"/>
                            <figcaption class="color-white lato-bold padding-top-5">Treasure piece</figcaption>
                        @elseif ($task['type'] == 'treasure-piece-2')
                            <img src="/assets/images/christmas-calendar-campaign/treasure-piece-2.png" class="width-100" alt="" itemprop="contentUrl"/>
                            <figcaption class="color-white lato-bold padding-top-5">Treasure piece</figcaption>
                        @elseif ($task['type'] == 'treasure-piece-3')
                            <img src="/assets/images/christmas-calendar-campaign/treasure-piece-3.png" class="width-100" alt="" itemprop="contentUrl"/>
                            <figcaption class="color-white lato-bold padding-top-5">Treasure piece</figcaption>
                        @elseif ($task['type'] == 'oral-health-tips-and-tricks')
                            <img src="/assets/images/christmas-calendar-campaign/tips-and-tricks-pdf.png" class="width-100" alt="" itemprop="contentUrl"/>
                            <figcaption class="color-white lato-bold padding-top-5 fs-14">Oral Health Tips and Tricks</figcaption>
                        @elseif ($task['type'] == 'jaws-calendar')
                            <img src="/assets/images/christmas-calendar-campaign/jaws-calendar.png" class="width-100" alt="" itemprop="contentUrl"/>
                            <figcaption class="color-white lato-bold padding-top-5 fs-14">Kid's Oral Care Planner</figcaption>
                        @elseif ($task['type'] == 'dcn-wallpaper')
                            <img src="/assets/images/christmas-calendar-campaign/dcn-wallpaper.png" class="width-100" alt="" itemprop="contentUrl"/>
                            <figcaption class="color-white lato-bold padding-top-5">Dentacoin wallpaper</figcaption>
                        @elseif ($task['type'] == 'dcn-2022-calendar')
                            <img src="/assets/images/christmas-calendar-campaign/dcn-2022-calendar.png" class="width-100" alt="" itemprop="contentUrl"/>
                            <figcaption class="color-white lato-bold padding-top-5 fs-14">Dentacoin 2022 Weekly Planner</figcaption>
                        @elseif ($task['type'] == 'dental-horoscope')
                            <img src="/assets/images/christmas-calendar-campaign/dental-horoscope.png" class="width-100" alt="" itemprop="contentUrl"/>
                            <figcaption class="color-white lato-bold padding-top-5">Dental Horoscope</figcaption>
                        @elseif ($task['type'] == 'spinning-wheel')
                            <img src="/assets/images/christmas-calendar-campaign/registered-user-wheel.png" class="width-100" alt="" itemprop="contentUrl"/>
                        @endif
                    </figure>
                </div>
                <div class="task-name inline-block lato-black fs-26 fs-xs-20 line-height-30 padding-left-20 padding-left-xs-0">{!! $task->task !!}</div>
            </div>
            <div class="task-body">
                @switch($dayId)
                    @case(1)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold">SHARE this post on your Facebook profile:</div>
                            <a href="https://www.facebook.com/dentacoin/videos/305617304758861/" class="long-text-link color-christmas-calendar-red" target="_blank">https://www.facebook.com/dentacoin/videos/305617304758861/</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-15"><span class="color-christmas-calendar-red">OR:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-15">RETWEET this tweet on your Twitter profile:</div>
                            <a href="https://twitter.com/dentacoin/status/1465946405802057733" class="long-text-link color-christmas-calendar-red" target="_blank">https://twitter.com/dentacoin/status/1465946405802057733</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="padding-bottom-15">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Link to your post/ tweet:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-15"><span class="color-christmas-calendar-red">OR:</span></div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                    @case(2)
                    <div>
                        <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span></div>
                        <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10">Find Dentacoin’s video on Youtube, go to “Comments” and post a comment sharing with us what is your favorite thing about Dentacoin. Text comment is required.</div>
                        <a href="https://www.youtube.com/watch?v=sblWhuc3amQ" class="white-red-btn" target="_blank">VIDEO HERE</a>
                        <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                        <div class="upload-btn-parent">
                            <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                            <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                        </div>
                    </div>
                        @break
                    @case(3)
                        @if (isset($finishedTask) && !empty($finishedTask) && $finishedTask->took_custom_reward == 0)
                            <div class="current-task-body from-mid padding-bottom-50" data-finishedTask="{{$finishedTask->id}}" data-task_id="{{$finishedTask->task_id}}" data-rewards="{{$rewards}}"></div>
                        @else
                            <div class="current-task-body from-beginning padding-bottom-50">
                                <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span> Invite 5 friends to join Dentacoin Holiday challenge.</div>
                                <div class="padding-bottom-20">
                                    <div class="padding-bottom-15">
                                        <div class="custom-google-label-style module max-width-300 max-width-xs-120 inline-block">
                                            <label for="names_1">Name:</label>
                                            <input type="text" id="names_1" name="names[]" maxlength="100" class="full-rounded required form-field"/>
                                        </div>
                                        <div class="custom-google-label-style module max-width-300 max-width-xs-120 inline-block margin-left-10">
                                            <label for="emails_1">Email:</label>
                                            <input type="text" id="emails_1" name="emails[]" maxlength="100" class="full-rounded required form-field"/>
                                        </div>
                                    </div>
                                    <div class="padding-bottom-15">
                                        <div class="custom-google-label-style module max-width-300 max-width-xs-120 inline-block">
                                            <label for="names_2">Name:</label>
                                            <input type="text" id="names_2" name="names[]" maxlength="100" class="full-rounded required form-field"/>
                                        </div>
                                        <div class="custom-google-label-style module max-width-300 max-width-xs-120 inline-block margin-left-10">
                                            <label for="emails_2">Email:</label>
                                            <input type="text" id="emails_2" name="emails[]" maxlength="100" class="full-rounded required form-field"/>
                                        </div>
                                    </div>
                                    <div class="padding-bottom-15">
                                        <div class="custom-google-label-style module max-width-300 max-width-xs-120 inline-block">
                                            <label for="names_3">Name:</label>
                                            <input type="text" id="names_3" name="names[]" maxlength="100" class="full-rounded required form-field"/>
                                        </div>
                                        <div class="custom-google-label-style module max-width-300 max-width-xs-120 inline-block margin-left-10">
                                            <label for="emails_3">Email:</label>
                                            <input type="text" id="emails_3" name="emails[]" maxlength="100" class="full-rounded required form-field"/>
                                        </div>
                                    </div>
                                    <div class="padding-bottom-15">
                                        <div class="custom-google-label-style module max-width-300 max-width-xs-120 inline-block">
                                            <label for="names_4">Name:</label>
                                            <input type="text" id="names_4" name="names[]" maxlength="100" class="full-rounded required form-field"/>
                                        </div>
                                        <div class="custom-google-label-style module max-width-300 max-width-xs-120 inline-block margin-left-10">
                                            <label for="emails_4">Email:</label>
                                            <input type="text" id="emails_4" name="emails[]" maxlength="100" class="full-rounded required form-field"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="custom-google-label-style module max-width-300 max-width-xs-120 inline-block">
                                            <label for="names_5">Name:</label>
                                            <input type="text" id="names_5" name="names[]" maxlength="100" class="full-rounded required form-field"/>
                                        </div>
                                        <div class="custom-google-label-style module max-width-300 max-width-xs-120 inline-block margin-left-10">
                                            <label for="emails_5">Email:</label>
                                            <input type="text" id="emails_5" name="emails[]" maxlength="100" class="full-rounded required form-field"/>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0);" class="white-red-btn send-invites">SEND INVITES</a>
                            </div>
                        @endif
                        @break
                    @case(4)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10 padding-top-15">Invite your dentist or leave them a review at Trusted Reviews. Only real entries will be rewarded after a thorough verification.</div>
                            <div class="padding-top-15">
                                <a href="https://reviews.dentacoin.com/?popup=invite-new-dentist-popup" target="_blank" class="white-red-btn">INVITE NOW</a>
                            </div>
                            <div class="padding-top-25 fs-14">If you are a dentist and you want to invite a colleague, please send us their name, address, and website at <a href="mailto:business@dentacoin.com" class="color-christmas-calendar-red">business@dentacoin.com</a>.</div>
                        </div>
                        @break
                    @case(5)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span> Find DentaVox on Google Play or App Store and post your review. Text comment is required.</div>
                            <div>
                                <a href="https://play.google.com/store/apps/details?id=com.dentacoin.dentavox&hl=en" target="_blank" class="max-width-150 max-width-xs-120 width-100 inline-block"><img src="/assets/images/google-store-button.svg" alt="Google play button"/></a>
                                <a href="https://apps.apple.com/us/app/dentavox-surveys/id1538575449/" target="_blank" class="max-width-150 max-width-xs-120 width-100 inline-block margin-left-10"><img src="/assets/images/apple-store-button.svg" alt="App store button"/></a>
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                    @case(6)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-20"><span class="color-christmas-calendar-red">• STEP 1:</span> Today we ask you what content you want to see from Dentacoin in 2022? Follow the link and vote in Dentacoin’s special poll to share your opinion.</div>
                            <div class="fs-18 fs-xs-16 lato-bold">VOTE in Telegram poll here:</div>
                            <a href="https://t.me/dentacoin/428712" class="long-text-link color-christmas-calendar-red" target="_blank">https://t.me/dentacoin/428712</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-15"><span class="color-christmas-calendar-red">OR:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-15">VOTE in Twitter poll here:</div>
                            <a href="https://twitter.com/dentacoin/status/1469323326732615681" class="long-text-link color-christmas-calendar-red" target="_blank">https://twitter.com/dentacoin/status/1469323326732615681</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="padding-bottom-15">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Link to your post/ tweet:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-15"><span class="color-christmas-calendar-red">OR:</span></div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                    @case(7)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span> Find Dentacoin official profile on TikTok and follow us for fun and engaging content:</div>
                            <div><a href="https://www.tiktok.com/@dentacoin" target="_blank" class="white-red-btn inline-block">FOLLOW NOW</a></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                    @case(8)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span> Find Dentacoin on Etherscan, go to the “Comments” tab and post a review. Text comment is required.</div>
                            <div><a href="https://etherscan.io/token/0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6#comments" target="_blank" class="white-red-btn inline-block">POST HERE</a></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                    @case(9)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10 padding-top-15">Share with us which is your favorite Jaws of Battle card in the text field below.</div>
                            <div class="fs-16 fs-xs-14 padding-bottom-10 padding-top-15 text-center">Haven't tried Jaws of Battle yet? Download here:</div>
                            <div class="padding-bottom-20 text-center">
                                <a href="https://play.google.com/store/apps/details?id=com.DentaCare.JawsOfBattle&hl=en_US" target="_blank" class="max-width-150 max-width-xs-120 width-100 inline-block"><img src="/assets/images/google-store-button.svg" alt="Google play button"/></a>
                                <a href="https://apps.apple.com/au/app/dentacare-jaws-of-battle/id1478090870" target="_blank" class="max-width-150 max-width-xs-120 width-100 inline-block margin-left-10"><img src="/assets/images/apple-store-button.svg" alt="App store button"/></a>
                            </div>
                            <textarea name="text_proof" rows="4" maxlength="1000"></textarea>
                        </div>
                        @break
                    @case(10)
                        @if (isset($finishedTask) && !empty($finishedTask) && $finishedTask->took_custom_reward == 0)
                            <div class="current-task-body from-mid padding-bottom-50" data-finishedTask="{{$finishedTask->id}}" data-task_id="{{$finishedTask->task_id}}" data-rewards="{{$rewards}}"></div>
                        @else
                            <div class="current-task-body from-beginning padding-bottom-50">
                                <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span> Answer 5 questions about our team to get the secret code which unlocks the wheel.</div>
                                <div><a href="https://forms.gle/Qzx19y79SZ3iR4Lq5" target="_blank" class="white-red-btn inline-block">TAKE QUIZ</a></div>
                                <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Get the secret code after completing the quiz and fill it in the field below:</div>
                                <div class="padding-bottom-15">
                                    <div class="custom-google-label-style module max-width-400">
                                        <label for="text_proof">Quiz secret code:</label>
                                        <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                    </div>
                                </div>
                                <div class="padding-top-30 text-center">
                                    <a href="javascript:void(0);" class="white-red-btn next-step">NEXT STEP</a>
                                </div>
                            </div>
                        @endif
                        @break
                    @case(11)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span> Go to <a href="https://coinmarketcap.com/" class="color-christmas-calendar-red text-decoration-underline" target="_blank">Coinmarketcap</a> and type "Dentacoin" in the Search field. Then scroll down on the Overview page, find "How do you feel about Dentacoin today?" and give your vote.</div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                    @case(12)
                        <input type="file" id="upload-avatar"/>
                        <input type="hidden" name="year" value="{{$year}}"/>
                        <input type="hidden" name="avatar" />
                        <input type="hidden" name="background_scale" value="1"/>
                        <input type="hidden" name="avatar-border" id="avatar-border"/>
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span> Share with us your dental wish for Santa Claus! We will make sure to read them all and send them to the Dentist Santa Claus!</div>
                            <textarea name="text_proof" rows="4" maxlength="1000"></textarea>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Let’s prepare  your custom sticker!</div>
                            <div class="fs-16 padding-bottom-25">Attach a portrait photo and choose a character:</div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-offset-1 col-sm-10 upload-image">
                                    <div class="rotate">
                                        <img src="/assets/images/christmas-calendar-campaign/rotate.png"/>
                                    </div>
                                    <div class="rotation fs-0">
                                        <div class="up-triangle"><img src="/assets/images/christmas-calendar-campaign/triangle.png"/></div>
                                        <div class="left-triangle inline-block"><img src="/assets/images/christmas-calendar-campaign/left-triangle.png"/></div>
                                        <label class="photo inline-block" for="upload-avatar">
                                            <div class="avatar">
                                                <img src="/assets/images/christmas-calendar-campaign/upload-photo.png"/>
                                            </div>
                                            <div class="border"></div>
                                        </label>
                                        <div class="right-triangle inline-block"><img src="/assets/images/christmas-calendar-campaign/left-triangle.png"/></div>
                                        <div class="down-triangle"><img src="/assets/images/christmas-calendar-campaign/triangle.png"/></div>
                                    </div>
                                    <div class="zoom-scroll-container">
                                        <div class="wrapper">
                                            <span class="scroll"></span>
                                        </div>
                                    </div>
                                    <div class="legend">Select a photo, move it with the arrow keys, rotate it with the button, zoom in / out with the slider.<div>Max size 2MB.</div></div>
                                </div>
                            </div>
                            <div class="text-center fs-18 padding-top-20 gender-radio-btns">
                                <input type="radio" name="character-type" id="character-type-male" value="male"/> <label class="fs-18 lato-bold" for="character-type-male">Male character</label>
                                <br class="show-xs">
                                <input type="radio" name="character-type" id="character-type-female" class="margin-left-15" value="female"/> <label class="fs-18 lato-bold" for="character-type-female">Female character</label>
                            </div>
                        </div>
                        @break
                    @case(13)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold">Find Dentacoin’s theme filter on Instagram and take a Christmas photo with it. Spread the Christmas mood around.</div>
                            <div class="color-christmas-calendar-red text-decoration-underline padding-bottom-10">Important: This can only be done from a mobile device because filters only work on the phone version of Instagram.</div>
                            <div><a href="https://www.instagram.com/ar/608889983767787" target="_blank" class="white-red-btn inline-block">FIND FILTER HERE</a></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                    @case(14)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span></div>
                            <div class="fs-16">
                                1.Go to <a href="https://dentavox.dentacoin.com/" target="_blank" class="lato-bold color-christmas-calendar-red">DentaVox website</a> and find your favorite survey.<br>
                                2. Share a Facebook or Twitter post of this survey and tag a friend who can relate to the topic.<br>
                                3. Attach a screenshot of your post.
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                    @case(15)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span></div>
                            <div class="fs-16">
                                1. Go to Instagram and take a photo/video/boomerang of yourself or your Christmas decorations.<br>
                                2. Then go to Stickers:<br>
                                <div class="text-center padding-top-10 padding-bottom-10">
                                    <img src="/assets/images/christmas-calendar-campaign/phone2.png" class="margin-left-5 margin-right-5 margin-bottom-10 max-width-200 width-100 max-width-xs-120" alt="" itemprop="contentUrl"/>
                                    <img src="/assets/images/christmas-calendar-campaign/phone1.png" class="margin-left-5 margin-right-5 margin-bottom-10 max-width-200 width-100 max-width-xs-120" alt="" itemprop="contentUrl"/>
                                </div>
                                3. Save your festive picture and submit it below.
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit your photo after:</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach your festive Instagram photo</label></button>
                            </div>
                        </div>
                        @break
                    @case(16)
                        <div class="puzzle-task padding-top-30 padding-bottom-30">
                            <div class="puzzle-container" id="puzzle-container" data-pieces-count="{{$piece_count}}">
                                @for($i = 0; $i < $piece_count; $i+=1)
                                    <div id="div{{$i}}" class='empty-square' style='width: {{$piece_width}}px; height: {{$piece_height}}px;border: 1px solid #aaaaaa;display: inline-block;' ondrop='drop(event, this)' ondragover='allowDrop(event)'></div>
                                @endfor
                            </div>
                            <div class="puzzle-scroll">
                                <div id="square-container">
                                    {!! $piecesHtml !!}
                                </div>
                            </div>
                            <script>
                                /*var el = document.getElementsByClassName('draggable-square');
                                for (var i = 0, len = el.length; i < len; i+=1) {
                                    el[i].addEventListener("touchstart", drag, false);
                                    el[i].addEventListener("touchend", drop, false);
                                    el[i].addEventListener("touchleave", drop, false);
                                    el[i].addEventListener("touchmove", allowDrop, false);
                                }

                                function handleStart() {
                                    console.log('handleStart');
                                }

                                function handleEnd() {
                                    console.log('handleEnd');
                                }

                                function handleCancel() {
                                    console.log('handleCancel');
                                }

                                function handleMove() {
                                    console.log('handleMove');
                                }*/

                                console.log('==== TEST ====');
                                function allowDrop(ev) {
                                    console.log('allowDrop');
                                    ev.preventDefault();
                                }

                                function drag(ev) {
                                    console.log('drag');
                                    ev.dataTransfer.setData('text', ev.target.id);
                                }

                                function drop(ev, el) {
                                    console.log(ev, el, 'ev, el');
                                    console.log(ev.pageX , ev.pageY, 'drop');
                                    console.log(document.elementFromPoint(ev.pageX , ev.pageY), 'drop');
                                    ev.preventDefault();
                                    var drag_element_id = ev.dataTransfer.getData('text');
                                    if (ev.target.id.indexOf('div') != -1) {
                                        $("#" + drag_element_id).data("parent", ev.target.id);
                                    } else{
                                        $drag_child = $('#' + drag_element_id);
                                        $second_child = $('#' + ev.target.id).parent().children().last();
                                        //$(document).ready(function () {

                                        if ($drag_child.data('parent') == null)    {
                                            $drag_child.data('parent', $second_child.parent().attr('id'));
                                            $second_child.data('parent', null);
                                            $("#square-container").append($('#' + ev.target.id));
                                        } else {
                                            //Assign second child data to new variable
                                            var temp_child_data = $second_child.data('parent');

                                            //Changing the last child datas value
                                            $second_child.data('parent', $drag_child.parent().attr('id'));
                                            $drag_child.data('parent', temp_child_data);

                                            //Appending the first child to the draggable child parent
                                            $('#' + $second_child.data('parent')).append($second_child);
                                        }
                                    }

                                    var data = ev.dataTransfer.getData('text');
                                    el.appendChild(document.getElementById(data));
                                }
                            </script>
                        </div>
                        @break
                    @case(17)
                        @if (isset($finishedTask) && !empty($finishedTask) && $finishedTask->took_custom_reward == 0)
                            <div class="current-task-body from-mid padding-bottom-50" data-finishedTask="{{$finishedTask->id}}" data-task_id="{{$finishedTask->task_id}}" data-rewards="{{$rewards}}"></div>
                        @else
                            <div class="current-task-body from-beginning padding-bottom-50">
                                <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span> Cast your vote for the Top Dentist of 2021 from the list of nominees and claim your daily prize.</div>
                                <div><a href="https://forms.gle/6Zd7c6yw9yaMZo5f9" target="_blank" class="white-red-btn inline-block vote-now fs-22">VOTE NOW</a></div>
                                <div class="padding-top-50 text-center">
                                    <a href="javascript:void(0);" class="white-red-btn next-step fs-18">NEXT STEP</a>
                                </div>
                            </div>
                        @endif
                        @break
                    @case(18)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10">Go to <a href="https://dentacoin.com/users" target="_blank" class="color-christmas-calendar-red lato-bold text-decoration-underline">Dentacoin website</a> and find the hidden treasure sticker <img src="/assets/images/christmas-calendar-campaign/hidden-present3.png" width="25" class="margin-left-5 margin-right-5" alt="" itemprop="contentUrl"/>. Make sure you check all sections, the treasure could be anywhere! Type the word or number you see next to the treasure sticker in the text field below.</div>
                            <div class="padding-bottom-15">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Your answer:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                        </div>
                        @break
                    @case(19)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span> Find Dentacoin on <a href="https://www.coingecko.com/en" class="color-christmas-calendar-red text-decoration-underline" target="_blank">Coingecko</a> through the search bar. Go to the Overview section and click the thumbs up/down icon to share <span class="color-christmas-calendar-red">“How do you feel about Dentacoin today?”</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                    @case(20)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span> Answer 6 simple questions about Dentacoin to unlock your daily prize.</div>
                            <div>Clue: If you are uncertain about the right answer for some questions, don’t worry! We got your back. Simply go to dentacoin.com.</div>
                            <div class="padding-bottom-10">By going through the website you should be able to find the answers to most of these questions :)</div>
                            <div><a href="https://forms.gle/GjntKhw5VS1g4HK4A" target="_blank" class="white-red-btn inline-block">TAKE QUIZ</a></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Get the secret code after completing the quiz and fill it in the field below:</div>
                            <div class="padding-bottom-15">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Quiz secret code:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                        </div>
                        @break
                    @case(21)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold">SHARE this post on your Facebook profile:</div>
                            <a href="https://www.facebook.com/dentacoin/posts/1400636743672718" class="long-text-link color-christmas-calendar-red" target="_blank">https://www.facebook.com/dentacoin/posts/1400636743672718</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-15"><span class="color-christmas-calendar-red">OR:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-15">RETWEET this tweet on your Twitter profile:</div>
                            <a href="https://twitter.com/dentacoin/status/1471027349953130502" class="long-text-link color-christmas-calendar-red" target="_blank">https://twitter.com/dentacoin/status/1471027349953130502</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="padding-bottom-15">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Link to your post/ tweet:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-15"><span class="color-christmas-calendar-red">OR:</span></div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                    @case(22)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-20"><span class="color-christmas-calendar-red">• STEP 1:</span> Follow the link and vote in Dentacoin’s special poll to share your opinion.</div>
                            <div class="fs-18 fs-xs-16 lato-bold">VOTE in Facebook poll here:</div>
                            <a href="https://www.facebook.com/dentacoin/posts/1403844000018659" class="color-christmas-calendar-red" target="_blank">https://www.facebook.com/dentacoin/posts/1403844000018659</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-20">VOTE in Twitter poll here:</div>
                            <a href="https://twitter.com/dentacoin/status/1472835566936985603" class="color-christmas-calendar-red" target="_blank">https://twitter.com/dentacoin/status/1472835566936985603</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-20">VOTE in Telegram poll here:</div>
                            <a href="https://t.me/dentacoin/431278" class="color-christmas-calendar-red" target="_blank">https://t.me/dentacoin/431278</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                    @case(23)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10">Go to <a href="https://dentacoin.com/traders" target="_blank" class="color-christmas-calendar-red lato-bold text-decoration-underline">Dentacoin website</a> and find the hidden treasure sticker <img src="/assets/images/christmas-calendar-campaign/hidden-present.png" width="25" class="margin-left-5 margin-right-5" alt="" itemprop="contentUrl"/>. Make sure you check all sections, the treasure could be anywhere! Type the word or number you see next to the treasure sticker in the text field below.</div>
                            <div class="padding-bottom-15">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Your answer:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                        </div>
                        @break
                    @case(24)
                        @if (isset($finishedTask) && !empty($finishedTask) && $finishedTask->took_custom_reward == 0)
                            <div class="current-task-body from-mid padding-bottom-50" data-finishedTask="{{$finishedTask->id}}" data-task_id="{{$finishedTask->task_id}}" data-rewards="{{$rewards}}"></div>
                        @else
                            <div class="current-task-body from-beginning padding-bottom-50">
                                <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span> Complete our survey:</div>
                                <div class="padding-bottom-50 text-center">
                                    <a href="https://dentavox.dentacoin.com/en/paid-dental-surveys/oral-care-holidays/" class="white-red-btn fs-22" target="_blank">TAKE SURVEY</a>
                                    <div class="fs-16 fs-xs-14 padding-top-10">If you’ve already completed this survey in the past, just proceed to next step.</div>
                                </div>
                                <div class="padding-top-20">
                                    <a href="javascript:void(0);" class="white-red-btn next-step">NEXT STEP</a>
                                </div>
                            </div>
                        @endif
                        @break
                    @case(25)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold">SHARE DentaVox’s “Oral Care During the Holidays” survey.</div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-10">Copy the link and share on FACEBOOK, TWITTER or INSTAGRAM:</div>
                            <a href="https://dentavox.dentacoin.com/en/paid-dental-surveys/oral-care-holidays/" class="long-text-link color-christmas-calendar-red" target="_blank">https://dentavox.dentacoin.com/en/paid-dental-surveys/oral-care-holidays/</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="padding-bottom-15">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Link to your post/ tweet:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-15"><span class="color-christmas-calendar-red">OR:</span></div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                    @case(26)
                        <div class="puzzle-task padding-top-30 padding-bottom-30">
                            <div class="puzzle-container" id="puzzle-container" data-pieces-count="{{$piece_count}}">
                                @for($i = 0; $i < $piece_count; $i+=1)
                                    <div id="div{{$i}}" class='empty-square' style='width: {{$piece_width}}px; height: {{$piece_height}}px;border: 1px solid #aaaaaa;display: inline-block;' ondrop='drop(event, this)' ondragover='allowDrop(event)'></div>
                                @endfor
                            </div>
                            <div class="puzzle-scroll">
                                <div id="square-container">
                                    {!! $piecesHtml !!}
                                </div>
                            </div>
                            <script>
                                function allowDrop(ev) {
                                    ev.preventDefault();
                                }

                                function drag(ev) {
                                    ev.dataTransfer.setData('text', ev.target.id);
                                }

                                function drop(ev, el) {
                                    ev.preventDefault();
                                    var drag_element_id = ev.dataTransfer.getData('text');
                                    if (ev.target.id.indexOf('div') != -1) {
                                        $("#" + drag_element_id).data("parent", ev.target.id);
                                    } else{
                                        $drag_child = $('#' + drag_element_id);
                                        $second_child = $('#' + ev.target.id).parent().children().last();
                                        //$(document).ready(function () {

                                        if ($drag_child.data('parent') == null)    {
                                            $drag_child.data('parent', $second_child.parent().attr('id'));
                                            $second_child.data('parent', null);
                                            $("#square-container").append($('#' + ev.target.id));
                                        } else {
                                            //Assign second child data to new variable
                                            var temp_child_data = $second_child.data('parent');

                                            //Changing the last child datas value
                                            $second_child.data('parent', $drag_child.parent().attr('id'));
                                            $drag_child.data('parent', temp_child_data);

                                            //Appending the first child to the draggable child parent
                                            $('#' + $second_child.data('parent')).append($second_child);
                                        }
                                    }

                                    var data = ev.dataTransfer.getData('text');
                                    el.appendChild(document.getElementById(data));
                                }
                            </script>
                        </div>
                        @break
                    @case(27)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold">Follow the links to Facebook or Twitter and share our latest Optimism update with your friends. Share on Facebook:</div>
                            <a href="https://www.facebook.com/dentacoin/posts/1400238520379207" class="long-text-link color-christmas-calendar-red" target="_blank">https://www.facebook.com/dentacoin/posts/1400238520379207</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-15"><span class="color-christmas-calendar-red">OR:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-15">Share on Twitter:</div>
                            <a href="https://twitter.com/dentacoin/status/1473311731900469252" class="long-text-link color-christmas-calendar-red" target="_blank">https://twitter.com/dentacoin/status/1473311731900469252</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="padding-bottom-15">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Link to your post/ tweet:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-15"><span class="color-christmas-calendar-red">OR:</span></div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                    @case(28)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10">Go to <a href="https://dentacoin.com/users" target="_blank" class="color-christmas-calendar-red lato-bold text-decoration-underline">Dentacoin website</a> and find the hidden treasure sticker <img src="/assets/images/christmas-calendar-campaign/hidden-present2.png" width="25" class="margin-left-5 margin-right-5" alt="" itemprop="contentUrl"/>. Make sure you check all sections, the treasure could be anywhere! Type the word or number you see next to the treasure sticker in the text field below.</div>
                            <div class="padding-bottom-15">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Your answer:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                        </div>
                        @break
                    @case(29)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span> Cover the requirements:</div>
                            <div class="fs-16">
                                1. Post on Facebook/ Twitter/ Instagram what have you learned from Dentacoin in 2022! We can’t wait to read all of your answers!<br>
                                2. Make the post public<br>
                                3. Tag Dentacoin’s official account on social media
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-40 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="padding-bottom-15">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Link to your post/ tweet:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-15"><span class="color-christmas-calendar-red">OR:</span></div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                    @case(30)
                        <div class="padding-top-50 padding-bottom-50 text-center">
                            <a href="https://dentavox.dentacoin.com/en/paid-dental-surveys/oral-health-summary-2021" class="white-red-btn fs-22" target="_blank">TAKE SURVEY</a>
                            <div class="fs-16 fs-xs-14 padding-top-10">If you’ve already completed this survey in the past, just submit the task as completed.</div>
                        </div>
                        @break
                    @case(31)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10 padding-top-15">Submit in the text field what is the dental new year’s resolution that you make!</div>
                            <textarea name="text_proof" rows="4" maxlength="1000"></textarea>
                        </div>
                        @break

                    @default
                    <div class="text-center padding-top-50 padding-bottom-50 padding-left-20 padding-right-20 padding-left-10 padding-right-10 fs-20 lato-black">Something went wrong, please try again or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a> with description of the problem.</div>
                @endswitch
            </div>
            @if ($task['type'] != 'spinning-wheel')
                <div class="padding-top-40 padding-bottom-20 text-center">
                    <button>
                        <img src="/assets/images/christmas-calendar-campaign/submit-btn-present.svg" class="submit-btn" alt="Submit button" itemprop="contentUrl"/>
                    </button>
                </div>
            @endif
            <div class="lato-bold fs-12 padding-bottom-20 text-center">All DCN daily rewards will be gradually unlocked for withdrawal in the period Jan  4 - 22, 2021.<br> Other gifts are sent via email within 5 days after the task is completed. All tasks are subject to manual approval. Improper entries will be disqualified and prizes will not be granted. Only users who have submitted proofs for their tasks get rewards and participate in the raffle. All posts, likes and follows must remain at least until the raffle is finished.</div>
        </form>
    @elseif ($type == 'congrats')
        @php($presentName = 'Missing')
        @if ($dayId == 31)
            @php($subtitle = 'YOU’VE COMPLETED ALL TASKS!')
            @php($btnText = 'STAY TUNED FOR RAFFLE WINNERS')
        @else
            @php($subtitle = 'YOUR DAILY REWARD:')
            @php($btnText = 'SEE YOU TOMORROW!')
        @endif
        <div class="text-center padding-top-50 padding-bottom-50 padding-left-20 padding-right-20">
            <h2 class="fs-50 fs-xs-32 lato-black">CONGRATS!</h2>
            <div class="fs-20 fs-xs-18 lato-bold color-christmas-calendar-red padding-bottom-30 padding-top-10">{{$subtitle}}</div>
            <figure itemscope="" itemtype="http://schema.org/ImageObject" class="text-center max-width-150 margin-0-auto task-present-tile">
                @if ($task['type'] == 'dcn-reward')
                    <img src="/assets/images/christmas-calendar-campaign/dentacoins.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @php($presentName = $task['value'] . ' DCN')
                @elseif ($task['type'] == 'ticket-reward')
                    <img src="/assets/images/christmas-calendar-campaign/ticket.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @if ((int)$task['value'] > 1)
                        @php($presentName = $task['value'] . ' raffle tickets')
                    @else
                        @php($presentName = $task['value'] . ' raffle ticket')
                    @endif
                @elseif ($task['type'] == 'face-sticker')
                    <a href="https://christmas-calendar-api.dentacoin.com/assets/uploads/face-stickers/2021/{{$coredbData->slug}}.png" target="_blank" download>
                        <img src="/assets/images/christmas-calendar-campaign/christmas-sticker.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    </a>
                    @php($presentName = 'Face sticker')
                @elseif ($task['type'] == 'season-oral-guide')
                    <a href="{{URL::asset('assets/docs/seasons-oral-health-guide.pdf')}}" target="_blank" download>
                        <img src="/assets/images/christmas-calendar-campaign/christmas-pdf.png" class="width-100" alt="Season's Oral Health Guide" itemprop="contentUrl"/>
                    </a>
                    @php($presentName = 'Season\'s Oral Health Guide')
                @elseif ($task['type'] == 'custom-holiday-card')
                    <a href="https://christmas-calendar-api.dentacoin.com/assets/uploads/holiday-cards/2021/{{$coredbData->slug}}.png" target="_blank" download>
                        <img src="/assets/images/christmas-calendar-campaign/christmas-card-gift.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    </a>
                    @php($presentName = 'Holiday card')
                @elseif ($task['type'] == 'treasure-piece-1')
                    <img src="/assets/images/christmas-calendar-campaign/treasure-piece-1.png" class="width-100" alt="" itemprop="contentUrl"/>
                    @php($presentName = 'You have unlocked a special item! This is the first piece out of a three part special item that will unlock a hidden treasure. Only after you have collected all three pieces will you receive access to your big prize!<div class="lato-regular fs-14 padding-top-20">* Please keep in mind that only after you have unlocked all three of the treasures will you be granted the whole prize.</div>')
                @elseif ($task['type'] == 'treasure-piece-2')
                    <img src="/assets/images/christmas-calendar-campaign/treasure-piece-2.png" class="width-100" alt="" itemprop="contentUrl"/>
                    @php($presentName = 'You have unlocked a special item! This is the second piece out of a three part special item that will unlock a hidden treasure. Only after you have collected all three pieces will you receive access to your big prize!<div class="lato-regular fs-14 padding-top-20">* Please keep in mind that only after you have unlocked all three of the treasures will you be granted the whole prize.</div>')
                @elseif ($task['type'] == 'treasure-piece-3')
                    <img src="/assets/images/christmas-calendar-campaign/dv-vip-pass-icon.png" class="width-100" alt="" itemprop="contentUrl"/>
                    @php($presentName = 'Daily VIP pass for DentaVox <div class="lato-regular fs-14 padding-top-20">You\'ve collected all three pieces of the hidden treasure and successfully unlocked the reward!</div>')
                @elseif ($task['type'] == 'oral-health-tips-and-tricks')
                    <a href="/assets/images/christmas-calendar-campaign/oral-health-tips-and-tricks.pdf" target="_blank" download>
                        <img src="/assets/images/christmas-calendar-campaign/tips-and-tricks-pdf.png" class="width-100" alt="" itemprop="contentUrl"/>
                    </a>
                    @php($presentName = 'Oral Health Tips and Tricks')
                @elseif ($task['type'] == 'jaws-calendar')
                    <a href="/assets/images/christmas-calendar-campaign/weekly-planner-jaws-of-battle.pdf" target="_blank" download>
                        <img src="/assets/images/christmas-calendar-campaign/jaws-calendar.png" class="width-100" alt="" itemprop="contentUrl"/>
                    </a>
                    @php($presentName = 'Kid\'s Oral Care Planner')
                @elseif ($task['type'] == 'dcn-wallpaper')
                    <a href="/assets/images/christmas-calendar-campaign/DCN-wallpaper-reward.png" target="_blank" download>
                        <img src="/assets/images/christmas-calendar-campaign/dcn-wallpaper.png" class="width-100" alt="" itemprop="contentUrl"/>
                    </a>
                    @php($presentName = 'Dentacoin wallpaper')
                @elseif ($task['type'] == 'dcn-2022-calendar')
                    <a href="/assets/images/christmas-calendar-campaign/weekly-planner-dcn.pdf" target="_blank" download>
                        <img src="/assets/images/christmas-calendar-campaign/dcn-2022-calendar.png" class="width-100" alt="" itemprop="contentUrl"/>
                    </a>
                    @php($presentName = 'Dentacoin 2022 Weekly Planner')
                @elseif ($task['type'] == 'dental-horoscope')
                    <a href="/assets/images/christmas-calendar-campaign/Zodiac-Dentacoin-calendar-2021.pdf" target="_blank" download>
                        <img src="/assets/images/christmas-calendar-campaign/dental-horoscope.png" class="width-100" alt="" itemprop="contentUrl"/>
                    </a>
                    @php($presentName = 'Dental Horoscope')
                @elseif ($task['type'] == 'spinning-wheel')
                    @if ($finishedTask->custom_reward_type == 'dcn-reward')
                        @php($presentName = $finishedTask->custom_reward_value . ' DCN')
                        <img src="/assets/images/christmas-calendar-campaign/dentacoins.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @elseif ($finishedTask->custom_reward_type == 'ticket-reward')
                        @php($presentName = $finishedTask->custom_reward_value . ' raffle tickets')
                        <img src="/assets/images/christmas-calendar-campaign/ticket.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @elseif ($finishedTask->custom_reward_type == 'dv-pass')
                        @php($presentName = 'Daily VIP pass for DentaVox')
                        <img src="/assets/images/christmas-calendar-campaign/dv-vip-pass-icon.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @endif
                @endif
            </figure>
            <div class="fs-18 lato-bold padding-top-10">{!! $presentName !!}</div>
            @if (in_array($dayId, [6, 9, 12, 15, 26, 30, 31]))
                @if ($dayId == 12)
                    @php($btnLink = 'https://christmas-calendar-api.dentacoin.com/assets/uploads/face-stickers/2021/'.$coredbData->slug.'.png')
                    @php($btnLabel = 'DOWNLOAD')
                    @php($actionType = 'download')
                @elseif ($dayId == 15)
                    @php($btnLink = 'https://christmas-calendar-api.dentacoin.com/assets/uploads/holiday-cards/2021/'.$coredbData->slug.'.png')
                    @php($btnLabel = 'DOWNLOAD')
                    @php($actionType = 'download')
                @elseif ($dayId == 6)
                    @php($btnLink = URL::asset('assets/images/christmas-calendar-campaign/oral-health-tips-and-tricks.pdf'))
                    @php($btnLabel = 'DOWNLOAD')
                    @php($actionType = 'download')
                @elseif ($dayId == 9)
                    @php($btnLink = URL::asset('assets/images/christmas-calendar-campaign/weekly-planner-jaws-of-battle.pdf'))
                    @php($btnLabel = 'DOWNLOAD')
                    @php($actionType = 'download')
                @elseif ($dayId == 26)
                    @php($btnLink = URL::asset('assets/images/christmas-calendar-campaign/DCN-wallpaper-reward.png'))
                    @php($btnLabel = 'DOWNLOAD')
                    @php($actionType = 'download')
                @elseif ($dayId == 30)
                    @php($btnLink = URL::asset('assets/images/christmas-calendar-campaign/weekly-planner-dcn.pdf'))
                    @php($btnLabel = 'DOWNLOAD')
                    @php($actionType = 'download')
                @elseif ($dayId == 31)
                    @php($btnLink = URL::asset('assets/images/christmas-calendar-campaign/Zodiac-Dentacoin-calendar-2021.pdf'))
                    @php($btnLabel = 'DOWNLOAD')
                    @php($actionType = 'download')
                @endif
                <div class="row padding-top-30">
                    <div class="col-xs-12 col-sm-6 text-right text-center-xs"><a href="{{$btnLink}}" target="_blank" @if ($actionType == 'download') download @endif class="red-white-btn width-100 max-width-210 max-width-xs-220 inline-block text-center fs-20 padding-top-15 padding-bottom-15 padding-left-20 padding-right-20">{{$btnLabel}}</a></div>
                    <div class="col-xs-12 col-sm-6 text-left text-center-xs padding-top-xs-15"><button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150 max-width-xs-220 fs-20 padding-top-15 padding-bottom-15 padding-left-20 padding-right-20">CLOSE</button></div>
                </div>
            @else
                <button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-280 margin-top-30 fs-20 padding-top-15 padding-bottom-15 padding-left-20 padding-right-20">{{$btnText}}</button>
            @endif
        </div>
    @elseif ($type == 'already-completed')
        @php($presentName = 'Missing')
        <div class="text-center padding-top-50 padding-bottom-50 padding-left-20 padding-right-20">
            <h2 class="fs-50 fs-xs-32 lato-black">COMPLETED</h2>
            <div class="fs-20 fs-xs-18 lato-bold color-christmas-calendar-red padding-bottom-20">You are one step closer to the big prizes!</div>
            <figure itemscope="" itemtype="http://schema.org/ImageObject" class="text-center margin-0-auto task-present-tile">
                @if ($task['type'] == 'dcn-reward')
                    <img src="/assets/images/christmas-calendar-campaign/dentacoins.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @php($presentName = $task['value'] . ' DCN')
                @elseif ($task['type'] == 'ticket-reward')
                    <img src="/assets/images/christmas-calendar-campaign/ticket.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @if ((int)$task['value'] > 1)
                        @php($presentName = $task['value'] . ' raffle tickets')
                    @else
                        @php($presentName = $task['value'] . ' raffle ticket')
                    @endif
                @elseif ($task['type'] == 'face-sticker')
                    <a href="https://christmas-calendar-api.dentacoin.com/assets/uploads/face-stickers/2021/{{$coredbData->slug}}.png" target="_blank" download>
                        <img src="/assets/images/christmas-calendar-campaign/christmas-sticker.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    </a>
                    @php($presentName = 'Face sticker')
                @elseif ($task['type'] == 'season-oral-guide')
                    <a href="{{URL::asset('assets/docs/seasons-oral-health-guide.pdf')}}" target="_blank" download>
                        <img src="/assets/images/christmas-calendar-campaign/christmas-pdf.png" class="width-100" alt="Season's Oral Health Guide" itemprop="contentUrl"/>
                    </a>
                    @php($presentName = 'Season\'s Oral Health Guide')
                @elseif ($task['type'] == 'custom-holiday-card')
                    <a href="https://christmas-calendar-api.dentacoin.com/assets/uploads/holiday-cards/2021/{{$coredbData->slug}}.png" target="_blank" download>
                        <img src="/assets/images/christmas-calendar-campaign/christmas-card-gift.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    </a>
                    @php($presentName = 'Holiday card')
                @elseif ($task['type'] == 'treasure-piece-1')
                    <img src="/assets/images/christmas-calendar-campaign/treasure-piece-1.png" class="width-100" alt="" itemprop="contentUrl"/>
                    @php($presentName = 'Treasure piece <i class="fa fa-info-circle fs-20 margin-left-5 margin-right-5 color-christmas-calendar-red" aria-hidden="true" data-toggle="tooltip" title="This is one out of a three pieces that will unlock a hidden treasure. Only after you have collected all three pieces will you receive access to your big prize!"></i>')
                @elseif ($task['type'] == 'treasure-piece-2')
                    <img src="/assets/images/christmas-calendar-campaign/treasure-piece-2.png" class="width-100" alt="" itemprop="contentUrl"/>
                    @php($presentName = 'Second Treasure piece <i class="fa fa-info-circle fs-20 margin-left-5 margin-right-5 color-christmas-calendar-red" aria-hidden="true" data-toggle="tooltip" title="This is one out of a three pieces that will unlock a hidden treasure. Only after you have collected all three pieces will you receive access to your big prize!"></i>')
                @elseif ($task['type'] == 'treasure-piece-3')
                    <img src="/assets/images/christmas-calendar-campaign/dv-vip-pass-icon.png" class="width-100" alt="" itemprop="contentUrl"/>
                    @php($presentName = 'Daily VIP pass for DentaVox <div class="lato-regular fs-14 padding-top-20">You\'ve collected all three pieces of the hidden treasure and successfully unlocked the reward!</div>')
                @elseif ($task['type'] == 'oral-health-tips-and-tricks')
                    <a href="/assets/images/christmas-calendar-campaign/oral-health-tips-and-tricks.pdf" target="_blank" download>
                        <img src="/assets/images/christmas-calendar-campaign/tips-and-tricks-pdf.png" class="width-100" alt="" itemprop="contentUrl"/>
                    </a>
                    @php($presentName = 'Oral Health Tips and Tricks')
                @elseif ($task['type'] == 'jaws-calendar')
                    <a href="/assets/images/christmas-calendar-campaign/weekly-planner-jaws-of-battle.pdf" target="_blank" download>
                        <img src="/assets/images/christmas-calendar-campaign/jaws-calendar.png" class="width-100" alt="" itemprop="contentUrl"/>
                    </a>
                    @php($presentName = 'Kid\'s Oral Care Planner')
                @elseif ($task['type'] == 'dcn-wallpaper')
                    <a href="/assets/images/christmas-calendar-campaign/DCN-wallpaper-reward.png" target="_blank" download>
                        <img src="/assets/images/christmas-calendar-campaign/dcn-wallpaper.png" class="width-100" alt="" itemprop="contentUrl"/>
                    </a>
                    @php($presentName = 'Dentacoin wallpaper')
                @elseif ($task['type'] == 'dcn-2022-calendar')
                    <a href="/assets/images/christmas-calendar-campaign/weekly-planner-dcn.pdf" target="_blank" download>
                        <img src="/assets/images/christmas-calendar-campaign/dcn-2022-calendar.png" class="width-100" alt="" itemprop="contentUrl"/>
                    </a>
                    @php($presentName = 'Dentacoin 2022 Weekly Planner')
                @elseif ($task['type'] == 'dental-horoscope')
                    <a href="/assets/images/christmas-calendar-campaign/Zodiac-Dentacoin-calendar-2021.pdf" target="_blank" download>
                        <img src="/assets/images/christmas-calendar-campaign/dental-horoscope.png" class="width-100" alt="" itemprop="contentUrl"/>
                    </a>
                    @php($presentName = 'Dental Horoscope')
                @elseif ($task['type'] == 'spinning-wheel')
                    @if ($finishedTask->custom_reward_type == 'dcn-reward')
                        @php($presentName = $finishedTask->custom_reward_value . ' DCN')
                        <img src="/assets/images/christmas-calendar-campaign/dentacoins.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @elseif ($finishedTask->custom_reward_type == 'ticket-reward')
                        @php($presentName = $finishedTask->custom_reward_value . ' raffle tickets')
                        <img src="/assets/images/christmas-calendar-campaign/ticket.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @elseif ($finishedTask->custom_reward_type == 'dv-pass')
                        @php($presentName = 'Daily VIP pass for DentaVox')
                        <img src="/assets/images/christmas-calendar-campaign/dv-vip-pass-icon.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @endif
                @endif
            </figure>
            <div class="fs-18 lato-bold padding-top-10">{!! $presentName !!}</div>
            @if (in_array($dayId, [6, 9, 12, 15, 26, 30, 31]))
                @if ($dayId == 12)
                    @php($btnLink = 'https://christmas-calendar-api.dentacoin.com/assets/uploads/face-stickers/2021/'.$coredbData->slug.'.png')
                    @php($btnLabel = 'DOWNLOAD')
                    @php($actionType = 'download')
                @elseif ($dayId == 15)
                    @php($btnLink = 'https://christmas-calendar-api.dentacoin.com/assets/uploads/holiday-cards/2021/'.$coredbData->slug.'.png')
                    @php($btnLabel = 'DOWNLOAD')
                    @php($actionType = 'download')
                @elseif ($dayId == 6)
                    @php($btnLink = URL::asset('assets/images/christmas-calendar-campaign/oral-health-tips-and-tricks.pdf'))
                    @php($btnLabel = 'DOWNLOAD')
                    @php($actionType = 'download')
                @elseif ($dayId == 9)
                    @php($btnLink = URL::asset('assets/images/christmas-calendar-campaign/weekly-planner-jaws-of-battle.pdf'))
                    @php($btnLabel = 'DOWNLOAD')
                    @php($actionType = 'download')
                @elseif ($dayId == 26)
                    @php($btnLink = URL::asset('assets/images/christmas-calendar-campaign/DCN-wallpaper-reward.png'))
                    @php($btnLabel = 'DOWNLOAD')
                    @php($actionType = 'download')
                @elseif ($dayId == 30)
                    @php($btnLink = URL::asset('assets/images/christmas-calendar-campaign/weekly-planner-dcn.pdf'))
                    @php($btnLabel = 'DOWNLOAD')
                    @php($actionType = 'download')
                @elseif ($dayId == 31)
                    @php($btnLink = URL::asset('assets/images/christmas-calendar-campaign/Zodiac-Dentacoin-calendar-2021.pdf'))
                    @php($btnLabel = 'DOWNLOAD')
                    @php($actionType = 'download')
                @endif
                <div class="row padding-top-30">
                    <div class="col-xs-12 col-sm-6 text-right text-center-xs"><a href="{{$btnLink}}" target="_blank" @if ($actionType == 'download') download @endif class="red-white-btn width-100 max-width-210 max-width-xs-220 inline-block text-center fs-20  padding-top-15 padding-bottom-15 padding-left-20 padding-right-20">{{$btnLabel}}</a></div>
                    <div class="col-xs-12 col-sm-6 text-left text-center-xs padding-top-xs-15"><button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150 max-width-xs-220 fs-20 padding-top-15 padding-bottom-15 padding-left-20 padding-right-20">CLOSE</button></div>
                </div>
            @else
                <button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150 margin-top-30 fs-20 padding-top-15 padding-bottom-15 padding-left-20 padding-right-20">CLOSE</button>
            @endif
        </div>
    @elseif ($type == 'not-active-yet')
        <div class="text-center padding-top-50 padding-bottom-50 padding-left-20 padding-right-20">
            <h2 class="fs-50 fs-xs-32 lato-black">Hey, no hurries!</h2>
            <div class="fs-20 fs-xs-18 lato-bold color-christmas-calendar-red padding-bottom-30 padding-top-10">This present is not active yet. Please kindly wait until {{date('d F Y', strtotime($task->date))}}.</div>
            <button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150">OK</button>
        </div>
    @elseif ($type == 'no-hurries')
        <div class="text-center padding-top-50 padding-bottom-50 padding-left-20 padding-right-20">
            <h2 class="fs-50 fs-xs-32 lato-black">Hey, no hurries!</h2>
            <div class="fs-20 fs-xs-18 lato-bold color-christmas-calendar-red padding-bottom-30 padding-top-10">You must complete all previous tasks.</div>
            <button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150">OK</button>
        </div>
    @elseif ($type == 'campaign-expired')
        <div class="text-center padding-top-50 padding-bottom-50 padding-left-20 padding-right-20">
            <h2 class="fs-50 fs-xs-32 lato-black">Holiday Challenge is over.</h2>
            <div class="fs-20 fs-xs-18 lato-bold color-christmas-calendar-red padding-bottom-30 padding-top-10">RAFFLE WINNERS WILL BE ANNOUNCED ON JAN 21 2022.</div>
            <button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150">OK</button>
        </div>
    @endif
        <div class="bottom-snow padding-bottom-50"><img src="/assets/images/christmas-calendar-campaign/bottom-pop-up-snow.png" class="width-100"></div>
</div>