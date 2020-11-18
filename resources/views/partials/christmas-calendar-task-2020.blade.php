@php($dayId = date('j', strtotime($task->date)))
<div class="popup-header">
    <figure itemscope="" itemtype="http://schema.org/ImageObject" class="text-center">
        <img src="/assets/images/christmas-calendar-campaign/popup-gifts-header.png" alt="Dentacoins" itemprop="contentUrl"/>
    </figure>
    <div class="lines-and-day">
        <div class="lines">
            <div class="small-red-line"></div>
            <div class="small-yellow-line"></div>
            <div class="big-red-line"></div>
            <div class="small-yellow-line"></div>
            <div class="small-red-line"></div>
        </div>
        <div class="day">DEC {{$dayId}}</div>
    </div>
</div>
<div class="popup-body">
    @if($type == 'task')
        @if($dayId == 27)
            <div class="newsletter-register">
                <form action="https://dentacoin.us16.list-manage.com/subscribe/post?u=61ace7d2b009198ca373cb213&amp;id=993df5967d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                    <div class="padding-bottom-15 padding-top-25 fs-0 text-center-xs">
                        <div class="inline-block task-present">
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
                                @elseif($task['type'] == 'season-oral-guide')
                                    <img src="/assets/images/christmas-calendar-campaign/christmas-pdf.png" class="width-100" alt="Seasons oral health guide" itemprop="contentUrl"/>
                                    <figcaption class="color-white lato-bold padding-top-5">Seasons oral health guide</figcaption>
                                @elseif($task['type'] == 'kids-brushing-calendar')
                                    <img src="/assets/images/christmas-calendar-campaign/christmas-kids-brushing-calendar.png" class="width-100" alt="Kid's  brushing calendar" itemprop="contentUrl"/>
                                    <figcaption class="color-white lato-bold padding-top-5">Kid's  brushing calendar</figcaption>
                                @elseif($task['type'] == 'kids-oral-care-calendar')
                                    <img src="/assets/images/christmas-calendar-campaign/christmas-kids-dental-book.png" class="width-100" alt="Kid's oral care calendar" itemprop="contentUrl"/>
                                    <figcaption class="color-white lato-bold padding-top-5">Kid's oral care calendar</figcaption>
                                @elseif($task['type'] == 'ebook-by-dr-trino-nuno')
                                    <img src="/assets/images/christmas-calendar-campaign/book-gift.png" class="width-100" alt="Ebook by Dr. Trino Nuno" itemprop="contentUrl"/>
                                    <figcaption class="color-white lato-bold padding-top-5">Ebook by Dr. Trino Nuno</figcaption>
                                @elseif($task['type'] == 'custom-holiday-card')
                                    <img src="/assets/images/christmas-calendar-campaign/christmas-card-gift.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                    <figcaption class="color-white lato-bold padding-top-5">Holiday card</figcaption>
                                @endif
                            </figure>
                        </div>
                        <div class="task-name inline-block lato-black fs-26 fs-xs-20 line-height-30 padding-left-20 padding-left-xs-0">{!! $task->task !!}</div>
                    </div>
                    <div class="text-center">
                        <div id="mc_embed_signup">
                            <div id="mc_embed_signup_scroll">
                                <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
                                <input type="hidden" name="b_61ace7d2b009198ca373cb213_993df5967d" tabindex="-1" value="">
                                <div class="clear btn-container"><input type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                            </div>
                            <div class="checkbox-row"><input type="checkbox" required id="newsletter-privacy-policy"/><label for="newsletter-privacy-policy">I agree with <a href="/privacy-policy" target="_blank">Privacy Policy</a></label></div>
                        </div>
                    </div>
                    <div class="lato-bold fs-12 padding-bottom-20 padding-top-40 text-center">All DCN daily rewards will be gradually unlocked for withdrawal in the period Jan 1-15, 2020.<br> Other gifts are sent via email within 5 days after the task is completed. All tasks are subject to manual approval. Improper entries will be disqualified and prizes will not be granted. Only users who have submitted proofs for their tasks get rewards and participate in the raffle. All posts, likes and follows must remain at least until the raffle is finished. Terms & Conditions</div>
                </form>
            </div>
        @else
            <form enctype="multipart/form-data">
                <div class="padding-bottom-15 padding-top-25 fs-0 text-center-xs">
                    <div class="inline-block task-present">
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
                            @elseif($task['type'] == 'season-oral-guide')
                                <img src="/assets/images/christmas-calendar-campaign/christmas-pdf.png" class="width-100" alt="Seasons oral health guide" itemprop="contentUrl"/>
                                <figcaption class="color-white lato-bold padding-top-5">Seasons oral health guide</figcaption>
                            @elseif($task['type'] == 'kids-brushing-calendar')
                                <img src="/assets/images/christmas-calendar-campaign/christmas-kids-brushing-calendar.png" class="width-100" alt="Kid's  brushing calendar" itemprop="contentUrl"/>
                                <figcaption class="color-white lato-bold padding-top-5">Kid's  brushing calendar</figcaption>
                            @elseif($task['type'] == 'kids-oral-care-calendar')
                                <img src="/assets/images/christmas-calendar-campaign/christmas-kids-dental-book.png" class="width-100" alt="Kid's oral care calendar" itemprop="contentUrl"/>
                                <figcaption class="color-white lato-bold padding-top-5">Kid's oral care calendar</figcaption>
                            @elseif($task['type'] == 'ebook-by-dr-trino-nuno')
                                <img src="/assets/images/christmas-calendar-campaign/book-gift.png" class="width-100" alt="Ebook by Dr. Trino Nuno" itemprop="contentUrl"/>
                                <figcaption class="color-white lato-bold padding-top-5">Ebook by Dr. Trino Nuno</figcaption>
                            @elseif($task['type'] == 'custom-holiday-card')
                                <img src="/assets/images/christmas-calendar-campaign/christmas-card-gift.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                                <figcaption class="color-white lato-bold padding-top-5">Holiday card</figcaption>
                            @endif
                        </figure>
                    </div>
                    <div class="task-name inline-block lato-black fs-26 fs-xs-20 line-height-30 padding-left-20 padding-left-xs-0">{!! $task->task !!}</div>
                </div>
                <div class="task-body">
                    @switch($dayId)
                        @case(1)
                        <input type="file" id="upload-avatar"/>
                        <input type="hidden" name="year" value="{{$year}}"/>
                        <input type="hidden" name="avatar" />
                        <input type="hidden" name="background_scale" value="1"/>
                        <input type="hidden" name="avatar-border" id="avatar-border"/>
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span> Join the official Telegram group of Dentacoin: <a href="https://t.me/dentacoin" class="color-christmas-calendar-red" target="_blank">https://t.me/dentacoin</a>.</div>
                            <div class="padding-bottom-20">
                                <a href="https://t.me/dentacoin" target="_blank" class="inline-block">
                                    <figure itemscope="" itemtype="http://schema.org/ImageObject">
                                        <img src="/assets/images/christmas-calendar-campaign/join-now.svg" class="width-100 max-width-150" alt="Join now Dentacoin telegram group" itemprop="contentUrl"/>
                                    </figure>
                                </a>
                                <div class="inline-block link-text fs-16 lato-regular padding-left-10 padding-left-xs-0 padding-top-xs-10">Don’t have Telegram yet? <a href="https://telegram.org/" target="_blank" class="color-christmas-calendar-red">Get it here.</a></div>
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="padding-bottom-20">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="telegram-username">Telegram username:</label>
                                    <input type="text" id="telegram-username" name="proof-text" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 3:</span> Let’s prepare  your custom sticker!</div>
                            <div class="fs-16 padding-bottom-10">Attach a portrait photo and choose a character:</div>
                            <div class="text-center fs-16 padding-bottom-20 gender-radio-btns">
                                <input type="radio" name="character-type" id="character-type-male" value="male"/> <label class="fs-16 lato-bold" for="character-type-male">Male character</label>
                                <input type="radio" name="character-type" id="character-type-female" class="margin-left-15" value="female"/> <label class="fs-16 lato-bold" for="character-type-female">Female character</label>
                            </div>
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
                                    <div class="legend">Select a photo, move it with the arrow keys, rotate it with the button, zoom in / out with the slider.<div>Max size 2MB.</div></div>
                                    <div class="zoom-scroll-container">
                                        <div class="wrapper">
                                            <span class="scroll"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @break
                        @case(2)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10 padding-top-15">We know the Tooth Fairy is a real global star. But how is it in your country? Share your favorite teeth-related tradition here:</div>
                            <textarea name="text_proof" rows="4" maxlength="1000"></textarea>
                        </div>
                        @break
                        @case(3)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10">SHARE this post on your Facebook profile:</div>
                            <a href="https://www.facebook.com/pg/dentacoin/samplepost/" class="color-christmas-calendar-red" target="_blank">https://www.facebook.com/pg/dentacoin/samplepost/</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-15"><span class="color-christmas-calendar-red">OR:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-15 padding-bottom-10">RETWEET this tweet on your Twitter profile:</div>
                            <a href="https://www.twitter.com/pg/dentacoin/samplepost/" class="color-christmas-calendar-red" target="_blank">https://www.twitter.com/pg/dentacoin/samplepost/</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-30 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task</div>
                            <div class="padding-bottom-20">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Link to your post/ tweet:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                        @case(4)
                        <div>
                            @php($userData = (new \App\Http\Controllers\APIRequestsController())->getUserData(session('logged_user')['id']))
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10 padding-top-15">Answer 8 simple questions to unlock your daily prize.</div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYywGTZGh4VClVzl2HKYXgA_s6AyX0oUdBVHjAIkXWP-4c0g/viewform?entry.1162335218={{$userData->email}}" class="white-red-btn" target="_blank">TAKE QUIZ</a>
                        </div>
                        @break
                        @case(5)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10">Visit Dentacoin’s profile on Google Maps and post a recommendation. Text comment is required.</div>
                            <a href="https://goo.gl/maps/C9t4UEaEcQJPsrSBA" class="white-red-btn" target="_blank">POST NOW</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-30 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task</div>
                            <div class="padding-bottom-20">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Link to your post/ tweet:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                        @case(6)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span> Join the official Announcements channel of Dentacoin: <a href="https://t.me/Dentacoin_Official" class="color-christmas-calendar-red" target="_blank">https://t.me/Dentacoin_Official</a>.</div>
                            <div class="padding-bottom-20">
                                <a href="https://t.me/dentacoin" target="_blank" class="inline-block">
                                    <figure itemscope="" itemtype="http://schema.org/ImageObject">
                                        <img src="/assets/images/christmas-calendar-campaign/join-now.svg" class="width-100 max-width-150" alt="Join now Dentacoin telegram group" itemprop="contentUrl"/>
                                    </figure>
                                </a>
                                <div class="inline-block link-text fs-16 lato-regular padding-left-10 padding-left-xs-0 padding-top-xs-10">Don’t have Telegram yet? <a href="https://telegram.org/" target="_blank" class="color-christmas-calendar-red">Get it here.</a></div>
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="padding-bottom-20">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="telegram-username">Your Telegram username:</label>
                                    <input type="text" id="telegram-username" name="proof-text" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                        </div>
                        @break
                        @case(7)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10">SHARE this post on your Facebook profile:</div>
                            <a href="https://www.facebook.com/pg/dentacoin/samplepost/" class="color-christmas-calendar-red" target="_blank">https://www.facebook.com/pg/dentacoin/samplepost/</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-15"><span class="color-christmas-calendar-red">OR:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-15 padding-bottom-10">RETWEET this tweet on your Twitter profile:</div>
                            <a href="https://www.twitter.com/pg/dentacoin/samplepost/" class="color-christmas-calendar-red" target="_blank">https://www.twitter.com/pg/dentacoin/samplepost/</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-30 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task</div>
                            <div class="padding-bottom-20">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Link to your post/ tweet:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                        @case(8)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span> Find DentaVox Surveys on Facebook, go to the “Reviews” tab and post a recommendation. Text comment is required.</div>
                            <div>
                                <a href="https://www.facebook.com/dentavox.dentacoin/reviews/" class="white-red-btn" target="_blank">POST NOW</a>
                            </div>

                            <div class="fs-18 fs-xs-16 lato-bold padding-top-30 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                        @case(9)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span> Find Dentacoin on Coingecko through the search bar. Go to the Overview section and click the thumbs up/down icon to share “How do you feel about Dentacoin today?”</div>
                            <div>
                                <a href="https://www.coingecko.com/en" class="white-red-btn" target="_blank">VOTE NOW</a>
                            </div>

                            <div class="fs-18 fs-xs-16 lato-bold padding-top-30 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                        @case(10)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 1:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10">SHARE this post on your Facebook profile:</div>
                            <a href="https://www.facebook.com/dentacoin.trusted.reviews/posts/479024519389142" class="color-christmas-calendar-red" target="_blank">https://www.facebook.com/dentacoin.trusted.reviews/posts/479024519389142</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-15"><span class="color-christmas-calendar-red">OR:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-15 padding-bottom-10">RETWEET this tweet on your Twitter profile:</div>
                            <a href="https://twitter.com/dentacoin/status/1202612625881882624" class="color-christmas-calendar-red" target="_blank">https://twitter.com/dentacoin/status/1202612625881882624</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-30 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task</div>
                            <div class="padding-bottom-20">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Link to your post/ tweet:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                        @case(11)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10 padding-top-15">How do you envision prophylactic oral care in the future? Will innovations make it easier to maintain proper oral hygiene? Can regular checkups be replaced by issue detecting sensors in your mouth? Just follow your imagination and share your thoughts.</div>
                            <textarea name="text_proof" rows="4" maxlength="1000"></textarea>
                        </div>
                        @break
                        @case(12)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10 padding-top-15">Invite your dentist or another dentist nearby to join Trusted Reviews by filling out the form below. Only real entries will be rewarded after a thorough verification. </div>
                            <div class="padding-top-15">
                                <a href="https://reviews.dentacoin.com/?popup=invite-new-dentist-popup" target="_blank" class="white-red-btn">INVITE NOW</a>
                            </div>
                            <div class="padding-top-10 fs-14">If you are a dentist and you want to invite a colleague, please send us their name, address, and website at <a href="mailto:business@dentacoin.com" class="color-christmas-calendar-red">business@dentacoin.com</a>.</div>
                        </div>
                        @break
                        @case(13)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-20"><span class="color-christmas-calendar-red">• STEP 1:</span> Find Dentacoin official profile on Instagram and follow</div>
                            <a href="https://www.instagram.com/dentacoin_official/" class="white-red-btn" target="_blank">FOLLOW NOW</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-20 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                        @case(14)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-20"><span class="color-christmas-calendar-red">• STEP 1:</span> Download Dentacare: Jaws of Battle game</div>
                            <div>
                                <a href="https://play.google.com/store/apps/details?id=com.DentaCare.JawsOfBattle&hl=en" target="_blank" class="max-width-150 max-width-xs-120 width-100 inline-block"><img src="/assets/images/google-store-button.svg" alt="Google play button"/></a>
                                <a href="https://testflight.apple.com/join/hOg8An1t" target="_blank" class="max-width-150 max-width-xs-120 width-100 inline-block margin-left-10"><img src="/assets/images/apple-store-button.svg" alt="App store button"/></a>
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-20 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot of the screen after the battle</label></button>
                            </div>
                        </div>
                        @break
                        @case(15)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10 padding-top-15">Go to “My Account”, tab “Invite Friends”, and choose the preferred way to invite friends.</div>
                            <div class="padding-top-15">
                                <a href="https://account.dentacoin.com/invite" target="_blank" class="white-red-btn">INVITE NOW</a>
                            </div>
                        </div>
                        @break
                        @case(16)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-20"><span class="color-christmas-calendar-red">• STEP 1:</span> Find Dentacare: Jaws of Battle and leave a review.</div>
                            <div class="fs-18 fs-xs-16 padding-bottom-10">For Google Play: Go to My apps in Google Play, click Reviews, scroll to Dentacare Jaws of Battle, and post your review.  Text comment is required.</div>
                            <div class="fs-18 fs-xs-16 padding-bottom-20">For App Store, follow the link in the button bellow.</div>
                            <div>
                                <a href="https://play.google.com/store/apps/details?id=com.DentaCare.JawsOfBattle&hl=en" target="_blank" class="max-width-150 max-width-xs-120 width-100 inline-block"><img src="/assets/images/google-store-button.svg" alt="Google play button"/></a>
                                <a href="https://testflight.apple.com/join/hOg8An1t" target="_blank" class="max-width-150 max-width-xs-120 width-100 inline-block margin-left-10"><img src="/assets/images/apple-store-button.svg" alt="App store button"/></a>
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-20 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                        @case(17)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-20"><span class="color-christmas-calendar-red">• STEP 1:</span> Download Dentacare - Health Training App</div>
                            <div>
                                <a href="https://play.google.com/store/apps/details?id=com.dentacoin.dentacare&hl=en" target="_blank" class="max-width-150 max-width-xs-120 width-100 inline-block"><img src="/assets/images/google-store-button.svg" alt="Google play button"/></a>
                                <a href="https://apps.apple.com/us/app/dentacare-health-training/id1274148338" target="_blank" class="max-width-150 max-width-xs-120 width-100 inline-block margin-left-10"><img src="/assets/images/apple-store-button.svg" alt="App store button"/></a>
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-20 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot of the screen after brushing teeth</label></button>
                            </div>
                        </div>
                        @break
                        @case(18)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-20"><span class="color-christmas-calendar-red">• STEP 1:</span> Find Dentacare - Health Training on Google Play or App Store and post your review. Text comment is required.</div>
                            <div class="fs-18 fs-xs-16 padding-bottom-10">For Google Play: Go to My apps in Google Play, click Reviews, scroll to Dentacare Jaws of Battle, and post your review.  Text comment is required.</div>
                            <div class="fs-18 fs-xs-16 padding-bottom-20">For App Store, follow the link in the button bellow.</div>
                            <div>
                                <a href="https://play.google.com/store/apps/details?id=com.dentacoin.dentacare&hl=en" target="_blank" class="max-width-150 max-width-xs-120 width-100 inline-block"><img src="/assets/images/google-store-button.svg" alt="Google play button"/></a>
                                <a href="https://apps.apple.com/us/app/dentacare-health-training/id1274148338" target="_blank" class="max-width-150 max-width-xs-120 width-100 inline-block margin-left-10"><img src="/assets/images/apple-store-button.svg" alt="App store button"/></a>
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-20 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                        @case(19)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-20"><span class="color-christmas-calendar-red">• STEP 1:</span> Join the official Facebook group of Dentacoin: <a href="https://www.facebook.com/groups/dentacoin.official/" target="_blank" class="color-christmas-calendar-red">https://www.facebook.com/groups/dentacoin.official/</a>.</div>
                            <a href="https://www.facebook.com/groups/dentacoin.official/" class="white-red-btn" target="_blank">JOIN NOW</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-30 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="padding-bottom-20 padding-top-15">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Your Facebook name:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                        </div>
                        @break
                        @case(20)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10 padding-top-15">Christmas, New Year, Divali, Easter… Every holiday comes with tasty meals, and some of them are harmful to your teeth!</div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10 padding-top-15">Share what’s the holiday food you can’t resist even if not tooth-friendly!</div>
                            <textarea name="text_proof" rows="4" maxlength="1000"></textarea>
                        </div>
                        @break
                        @case(21)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-20"><span class="color-christmas-calendar-red">• STEP 1:</span> Cover the requirements:</div>
                            <div class="fs-16">
                                1. Make a photo/ video/ boomerang of yourself with a holiday motive (Christmas three, any decoration, drawing, etc.) and a big smile.<br>
                                2. Post it on Facebook/ Twitter/ Instagram with a message: <span class="lato-bold color-christmas-calendar-red">A smile is for sharing.</span> and make the post public.<br>
                                3. Tag Dentacoin’s official account on this social network and add hashtags: #Dentacoin2020
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-20 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="padding-bottom-20">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Link to your post:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                        @case(22)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10 padding-top-15">Share with us what is the best thing about Dentacoin for you, other than rewards!<div class="fs-14 color-christmas-calendar-red padding-bottom-20">Answers related to rewards will be disqualified.</div></div>
                            <textarea name="text_proof" rows="4" maxlength="1000"></textarea>
                        </div>
                        @break
                        @case(23)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-20"><span class="color-christmas-calendar-red">• STEP 1:</span> Visit Dentacoin’s profile on Trustpilot and share your opinion. Text comment is required.</div>
                            <a href="https://www.trustpilot.com/review/dentacoin.com" class="white-red-btn" target="_blank">POST NOW</a>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-20 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task</div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                        @case(24)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-20">STEP 1: Donate to an organisation of your choosing, join a social campaign in your community or just do something good for someone. We don’t need any proof. Just share what you did:</div>
                            <textarea name="text_proof" rows="4" maxlength="1000"></textarea>
                        </div>
                        @break
                        @case(25)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-20">Holidays spice up our life but do they come at a price? Do they affect our oral hygiene negatively? How does your oral health do during the holidays? What do you do if you have a problem? Share in DentaVox holiday survey “Oral Care During Holidays”!</div>
                            <a href="https://dentavox.dentacoin.com/" class="white-red-btn" target="_blank">TAKE SURVEY</a>
                        </div>
                        @break
                        @case(26)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10 padding-top-15">Dream big! What product would you like to see from Dentacoin in the next 5 years? <div class="fs-14 color-christmas-calendar-red">Answers related to price, exchange platforms and supply will be disqualified.</div></div>
                            <textarea name="text_proof" rows="4" maxlength="1000"></textarea>
                        </div>
                        @break
                        @case(28)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-20"><span class="color-christmas-calendar-red">• STEP 1:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10">SHARE this post on your Facebook profile: <a href="https://www.facebook.com/dentacare.jaws/samplepost/" target="_blank" class="color-christmas-calendar-red">https://www.facebook.com/dentacare.jaws/samplepost/</a></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-15"><span class="color-christmas-calendar-red">OR:</span></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-15 padding-bottom-10">RETWEET this tweet on your Twitter profile: <a href="https://www.twitter.com/dentacoin/samplepost/" target="_blank" class="color-christmas-calendar-red">https://www.twitter.com/dentacoin/samplepost/</a></div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-20 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="padding-bottom-20">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Link to your post/ tweet:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break
                        @case(29)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-10 padding-top-15">Finish the sentence: “I love to use Dentacoin because ...”</div>
                            <div class="padding-bottom-20">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Your sentence:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                        </div>
                        @break
                        @case(30)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-20">Holidays spice up our life, but do they come at a price? Do they affect our oral hygiene negatively? How does your oral health do during the holidays? What do you do if you have a problem? Share in DentaVox holiday survey “Oral Care During Holidays”!</div>
                            <a href="https://dentavox.dentacoin.com/" class="white-red-btn" target="_blank">TAKE SURVEY</a>
                        </div>
                        @break
                        @case(31)
                        <div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-bottom-20"><span class="color-christmas-calendar-red">• STEP 1:</span> Cover the requirements:
                                <div class="fs-16">1. Post on Facebook/ Twitter/ Instagram what’s one thing you promise yourself to do better next year in terms of oral care.</div>
                                <div class="fs-16">2. Make the post public.</div>
                                <div class="fs-16">3. Tag Dentacoin’s official account on this social network and add hashtags: #Dentacoin2021resolutions</div>
                            </div>
                            <div class="fs-18 fs-xs-16 lato-bold padding-top-20 padding-bottom-10"><span class="color-christmas-calendar-red">• STEP 2:</span> Submit proof after completing the task:</div>
                            <div class="padding-bottom-20">
                                <div class="custom-google-label-style module max-width-400">
                                    <label for="text_proof">Link to your post:</label>
                                    <input type="text" id="text_proof" name="text_proof" maxlength="1000" class="full-rounded required form-field"/>
                                </div>
                            </div>
                            <div class="upload-btn-parent">
                                <input type="file" class="hide screenshot_proof" id="screenshot_proof" name="screenshot_proof"/>
                                <button type="button" class="white-red-btn padding-top-0 padding-bottom-0 padding-left-0 padding-right-0"><label for="screenshot_proof" class="margin-bottom-0 inline-block padding-top-5 padding-bottom-5 padding-left-15 padding-right-15">Attach a screenshot</label></button>
                            </div>
                        </div>
                        @break

                        @default
                        <div class="text-center padding-top-50 padding-bottom-50 padding-left-20 padding-right-20 padding-left-10 padding-right-10 fs-20 lato-black">Something went wrong, please try again or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a> with description of the problem.</div>
                    @endswitch
                </div>
                <div class="padding-top-40 padding-bottom-10 text-center">
                    <button>
                        <img src="/assets/images/christmas-calendar-campaign/submit-btn-present.svg" class="submit-btn" alt="Submit button" itemprop="contentUrl"/>
                    </button>
                </div>
                <div class="lato-bold fs-12 padding-bottom-20 text-center">All DCN daily rewards will be gradually unlocked for withdrawal in the period Jan 1-15, 2020.<br> Other gifts are sent via email within 5 days after the task is completed. All tasks are subject to manual approval. Improper entries will be disqualified and prizes will not be granted. Only users who have submitted proofs for their tasks get rewards and participate in the raffle. All posts, likes and follows must remain at least until the raffle is finished. Terms & Conditions</div>
            </form>
        @endif
    @elseif($type == 'congrats')
        @if($dayId == 31)
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
                @if($task['type'] == 'dcn-reward')
                    <img src="/assets/images/christmas-calendar-campaign/dentacoins.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @php($presentName = $task['value'] . 'DCN')
                @elseif($task['type'] == 'ticket-reward')
                    <img src="/assets/images/christmas-calendar-campaign/ticket.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @if((int)$task['value'] > 1)
                        @php($presentName = $task['value'] . ' raffle tickets')
                    @else
                        @php($presentName = $task['value'] . ' raffle ticket')
                    @endif
                @elseif($task['type'] == 'face-sticker')
                    <img src="/assets/images/christmas-calendar-campaign/christmas-sticker.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @php($presentName = 'Face sticker')
                @elseif($task['type'] == 'facebook-holiday-frame')
                    <img src="/assets/images/christmas-calendar-campaign/christmas-fb-frame.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @php($presentName = 'Facebook frame')
                @elseif($task['type'] == 'free-oracle-health-guide')
                    <img src="/assets/images/christmas-calendar-campaign/christmas-pdf.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @php($presentName = 'Oral health guide')
                @elseif($task['type'] == 'season-oral-guide')
                    <img src="/assets/images/christmas-calendar-campaign/christmas-pdf.png" class="width-100" alt="Seasons oral health guide" itemprop="contentUrl"/>
                @elseif($task['type'] == 'kids-brushing-calendar')
                    <img src="/assets/images/christmas-calendar-campaign/christmas-kids-brushing-calendar.png" class="width-100" alt="Kid's  brushing calendar" itemprop="contentUrl"/>
                @elseif($task['type'] == 'kids-oral-care-calendar')
                    <img src="/assets/images/christmas-calendar-campaign/christmas-kids-dental-book.png" class="width-100" alt="Kid's oral care calendar" itemprop="contentUrl"/>
                @elseif($task['type'] == 'ebook-by-dr-trino-nuno')
                    <img src="/assets/images/christmas-calendar-campaign/book-gift.png" class="width-100" alt="Ebook by Dr. Trino Nuno" itemprop="contentUrl"/>
                @elseif($task['type'] == 'custom-holiday-card')
                    <img src="/assets/images/christmas-calendar-campaign/christmas-card-gift.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @php($presentName = 'Holiday card')
                @endif
            </figure>
            <div class="fs-18 lato-bold padding-top-10">{{$presentName}}</div>
            @if ($year == 2019)
                @if(in_array($dayId, [1, 8, 16, 24]))
                    @if($dayId == 1)
                        @php($btnLink = 'https://christmas-calendar-api.dentacoin.com/assets/uploads/face-stickers/2020/'.$coredbData->slug.'.png')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @elseif($dayId == 8)
                        @php($btnLink = 'https://www.facebook.com/profilepicframes/?selected_overlay_id=431397017465500')
                        @php($btnLabel = 'HOLIDAY FRAME')
                        @php($actionType = 'external-link')
                    @elseif($dayId == 16)
                        @php($btnLink = 'https://christmas-calendar-api.dentacoin.com/assets/uploads/holiday-cards/2020/'.$coredbData->slug.'.png')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @elseif($dayId == 24)
                        @php($btnLink = 'https://dentacoin.com/assets/docs/dentacoin-oral-health-guide-2020.pdf')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @endif

                    <div class="row padding-top-30">
                        <div class="col-xs-12 col-sm-6 text-right text-center-xs"><a href="{{$btnLink}}" target="_blank" @if($actionType == 'download') download @endif class="red-white-btn width-100 max-width-150 inline-block text-center">{{$btnLabel}}</a></div>
                        <div class="col-xs-12 col-sm-6 text-left text-center-xs padding-top-xs-15"><button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150">CLOSE</button></div>
                    </div>
                @else
                    <button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-280 margin-top-30">{{$btnText}}</button>
                @endif
            @elseif ($year == 2020)
                @if(in_array($dayId, [1, 4, 11, 14, 21, 28]))
                    @if($dayId == 1)
                        @php($btnLink = 'https://christmas-calendar-api.dentacoin.com/assets/uploads/face-stickers/2020/'.$coredbData->slug.'.png')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @elseif($dayId == 4)
                        @php($btnLink = 'https://www.facebook.com')
                        @php($btnLabel = 'HOLIDAY FRAME')
                        @php($actionType = 'external-link')
                    @elseif($dayId == 11)
                        @php($btnLink = ROOT . 'public' . DS . 'assets' . DS . 'docs' . DS . 'oral-microbiome.pdf')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @elseif($dayId == 14)
                        @php($btnLink = ROOT . 'public' . DS . 'assets' . DS . 'docs' . DS . 'kids-oral-care-calendar.pdf')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @elseif($dayId == 21)
                        @php($btnLink = ROOT . 'public' . DS . 'assets' . DS . 'docs' . DS . 'oral-health-tips.pdf')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @elseif($dayId == 24)
                        @php($btnLink = 'https://christmas-calendar-api.dentacoin.com/assets/uploads/holiday-cards/2020/'.$coredbData->slug.'.png')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @elseif($dayId == 28)
                        @php($btnLink = ROOT . 'public' . DS . 'assets' . DS . 'docs' . DS . 'jaws-of-battle-brushing-calendar.pdf')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @endif

                    <div class="row padding-top-30">
                        <div class="col-xs-12 col-sm-6 text-right text-center-xs"><a href="{{$btnLink}}" target="_blank" @if($actionType == 'download') download @endif class="red-white-btn width-100 max-width-150 inline-block text-center">{{$btnLabel}}</a></div>
                        <div class="col-xs-12 col-sm-6 text-left text-center-xs padding-top-xs-15"><button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150">CLOSE</button></div>
                    </div>
                @else
                    <button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-280 margin-top-30">{{$btnText}}</button>
                @endif
            @endif
        </div>
    @elseif($type == 'already-completed')
        <div class="text-center padding-top-50 padding-bottom-50 padding-left-20 padding-right-20">
            <h2 class="fs-50 fs-xs-32 lato-black">COMPLETED</h2>
            <div class="fs-20 fs-xs-18 lato-bold color-christmas-calendar-red padding-bottom-20">You are one step closer to the big prizes!</div>
            <figure itemscope="" itemtype="http://schema.org/ImageObject" class="text-center margin-0-auto task-present-tile">
                @if($task['type'] == 'dcn-reward')
                    <img src="/assets/images/christmas-calendar-campaign/dentacoins.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @php($presentName = $task['value'] . 'DCN')
                @elseif($task['type'] == 'ticket-reward')
                    <img src="/assets/images/christmas-calendar-campaign/ticket.svg" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @if((int)$task['value'] > 1)
                        @php($presentName = $task['value'] . ' raffle tickets')
                    @else
                        @php($presentName = $task['value'] . ' raffle ticket')
                    @endif
                @elseif($task['type'] == 'face-sticker')
                    <img src="/assets/images/christmas-calendar-campaign/christmas-sticker.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @php($presentName = 'Face sticker')
                @elseif($task['type'] == 'facebook-holiday-frame')
                    <img src="/assets/images/christmas-calendar-campaign/christmas-fb-frame.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @php($presentName = 'Facebook frame')
                @elseif($task['type'] == 'free-oracle-health-guide')
                    <img src="/assets/images/christmas-calendar-campaign/christmas-pdf.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @php($presentName = 'Oral health guide')
                @elseif($task['type'] == 'season-oral-guide')
                    <img src="/assets/images/christmas-calendar-campaign/christmas-pdf.png" class="width-100" alt="Seasons oral health guide" itemprop="contentUrl"/>
                @elseif($task['type'] == 'kids-brushing-calendar')
                    <img src="/assets/images/christmas-calendar-campaign/christmas-kids-brushing-calendar.png" class="width-100" alt="Kid's  brushing calendar" itemprop="contentUrl"/>
                @elseif($task['type'] == 'kids-oral-care-calendar')
                    <img src="/assets/images/christmas-calendar-campaign/christmas-kids-dental-book.png" class="width-100" alt="Kid's oral care calendar" itemprop="contentUrl"/>
                @elseif($task['type'] == 'ebook-by-dr-trino-nuno')
                    <img src="/assets/images/christmas-calendar-campaign/book-gift.png" class="width-100" alt="Ebook by Dr. Trino Nuno" itemprop="contentUrl"/>
                @elseif($task['type'] == 'custom-holiday-card')
                    <img src="/assets/images/christmas-calendar-campaign/christmas-card-gift.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/>
                    @php($presentName = 'Holiday card')
                @endif
            </figure>
            <div class="fs-18 lato-bold padding-top-10">{{$presentName}}</div>
            @if ($year == 2019)
                @if(in_array($dayId, [1, 8, 16, 24]))
                    @if($dayId == 1)
                        @php($btnLink = 'https://christmas-calendar-api.dentacoin.com/assets/uploads/face-stickers/2020/'.$coredbData->slug.'.png')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @elseif($dayId == 8)
                        @php($btnLink = 'https://www.facebook.com/profilepicframes/?selected_overlay_id=431397017465500')
                        @php($btnLabel = 'HOLIDAY FRAME')
                        @php($actionType = 'external-link')
                    @elseif($dayId == 16)
                        @php($btnLink = 'https://christmas-calendar-api.dentacoin.com/assets/uploads/holiday-cards/2020/'.$coredbData->slug.'.png')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @elseif($dayId == 24)
                        @php($btnLink = 'https://dentacoin.com/assets/docs/dentacoin-oral-health-guide-2020.pdf')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @endif

                    <div class="row padding-top-30">
                        <div class="col-xs-12 col-sm-6 text-right text-center-xs"><a href="{{$btnLink}}" target="_blank" @if($actionType == 'download') download @endif class="red-white-btn width-100 max-width-150 inline-block text-center">{{$btnLabel}}</a></div>
                        <div class="col-xs-12 col-sm-6 text-left text-center-xs padding-top-xs-15"><button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150">CLOSE</button></div>
                    </div>
                @else
                    <button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-280 margin-top-30">{{$btnText}}</button>
                @endif
            @elseif ($year == 2020)
                @if(in_array($dayId, [1, 4, 11, 14, 21, 28]))
                    @if($dayId == 1)
                        @php($btnLink = 'https://christmas-calendar-api.dentacoin.com/assets/uploads/face-stickers/2020/'.$coredbData->slug.'.png')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @elseif($dayId == 4)
                        @php($btnLink = 'https://www.facebook.com')
                        @php($btnLabel = 'HOLIDAY FRAME')
                        @php($actionType = 'external-link')
                    @elseif($dayId == 11)
                        @php($btnLink = ROOT . 'public' . DS . 'assets' . DS . 'docs' . DS . 'oral-microbiome.pdf')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @elseif($dayId == 14)
                        @php($btnLink = ROOT . 'public' . DS . 'assets' . DS . 'docs' . DS . 'kids-oral-care-calendar.pdf')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @elseif($dayId == 21)
                        @php($btnLink = ROOT . 'public' . DS . 'assets' . DS . 'docs' . DS . 'oral-health-tips.pdf')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @elseif($dayId == 24)
                        @php($btnLink = 'https://christmas-calendar-api.dentacoin.com/assets/uploads/holiday-cards/2020/'.$coredbData->slug.'.png')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @elseif($dayId == 28)
                        @php($btnLink = ROOT . 'public' . DS . 'assets' . DS . 'docs' . DS . 'jaws-of-battle-brushing-calendar.pdf')
                        @php($btnLabel = 'DOWNLOAD')
                        @php($actionType = 'download')
                    @endif

                    <div class="row padding-top-30">
                        <div class="col-xs-12 col-sm-6 text-right text-center-xs"><a href="{{$btnLink}}" target="_blank" @if($actionType == 'download') download @endif class="red-white-btn width-100 max-width-150 inline-block text-center">{{$btnLabel}}</a></div>
                        <div class="col-xs-12 col-sm-6 text-left text-center-xs padding-top-xs-15"><button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150">CLOSE</button></div>
                    </div>
                @else
                    <button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150 margin-top-30">CLOSE</button>
                @endif
            @endif
        </div>
    @elseif($type == 'not-active-yet')
        <div class="text-center padding-top-50 padding-bottom-50 padding-left-20 padding-right-20">
            <h2 class="fs-50 fs-xs-32 lato-black">Hey, no hurries!</h2>
            <div class="fs-20 fs-xs-18 lato-bold color-christmas-calendar-red padding-bottom-30 padding-top-10">This present is not active yet. Please kindly wait until {{date('d F Y', strtotime($task->date))}}.</div>
            <button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150">OK</button>
        </div>
    @elseif($type == 'no-hurries')
        <div class="text-center padding-top-50 padding-bottom-50 padding-left-20 padding-right-20">
            <h2 class="fs-50 fs-xs-32 lato-black">Hey, no hurries!</h2>
            <div class="fs-20 fs-xs-18 lato-bold color-christmas-calendar-red padding-bottom-30 padding-top-10">You must complete all previous tasks.</div>
            <button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150">OK</button>
        </div>
    @elseif($type == 'campaign-expired')
        <div class="text-center padding-top-50 padding-bottom-50 padding-left-20 padding-right-20">
            <h2 class="fs-50 fs-xs-32 lato-black">Holiday Challenge is over.</h2>
            <div class="fs-20 fs-xs-18 lato-bold color-christmas-calendar-red padding-bottom-30 padding-top-10">RAFFLE WINNERS WILL BE ANOUNCED ON JAN 10 2020.</div>
            <button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150">OK</button>
        </div>
    @endif
</div>