<section class="section-the-era-dentist-page">
    <div class="absolute-content padding-bottom-50 padding-bottom-xs-25 text-center-xs">
        <h2 class="fs-50 fs-md-40 fs-sm-30 color-black lato-black users-title padding-bottom-lgll-20 hide-xs">DENTISTS</h2>
        <h3 class="fs-50 fs-md-40 fs-sm-30 fs-xs-22 lato-black color-black padding-top-10 padding-bottom-25">The era of “drill-and-fill” dentistry is over.</h3>
        <div class="fs-24 fs-md-22 fs-sm-18 fs-xs-18 color-black lato-bold">Join 1,826 dentists who boost patient loyalty and get paid for prevention!</div>
    </div>
    @php($arrWithPossibilities = array ('male', 'female'))
    @if ($arrWithPossibilities[rand(0, count($arrWithPossibilities) - 1)] == 'male')
        <picture itemscope="" itemtype="http://schema.org/ImageObject" class="hidden-picture">
            <source media="(max-width: 992px)" srcset="/assets/uploads/man-dentist-mobile-img.png">
            <source media="(max-width: 1366px)" srcset="/assets/uploads/man-dentist-1366-img.png">
            <img alt="Male user" itemprop="contentUrl" src="/assets/uploads/man-dentist-1920-img.png">
        </picture>
    @else
        <picture itemscope="" itemtype="http://schema.org/ImageObject" class="hidden-picture">
            <source media="(max-width: 992px)" srcset="/assets/uploads/woman-dentist-mobile-img.png">
            <source media="(max-width: 1366px)" srcset="/assets/uploads/woman-dentist-1366-img.png">
            <img alt="Female user" itemprop="contentUrl" src="/assets/uploads/woman-dentist-1920-img.png">
        </picture>
    @endif
</section>
<section class="section-list-with-benefits-dentists-page container-fluid padding-top-30 padding-top-xs-50 padding-top-lgll-50 padding-bottom-20 text-center">
    <div class="row">
        <div class="col-xs-12 padding-bottom-50 padding-bottom-xs-20 color-black">
            <h3 class="fs-30 fs-sm-24 fs-xs-20 padding-bottom-lgll-10 lato-bold">SET UP A FREE ACCOUNT:</h3>
            <h2 class="fs-50 fs-sm-40 fs-xs-26 fs-lgll-65 lato-black">YOUR BENEFITS</h2>
        </div>
    </div>
    <div class="row benefits-row">
        <div class="col-xs-12 text-center fs-0"><div class="single-benefit inline-block-top"><div itemprop="video" itemscope="" itemtype="http://schema.org/VideoObject" class="video max-width-220 margin-0-auto"><video muted="muted" {{--autoplay}--}}><source src="/assets/uploads/dentists-circle-icon1.mp4" type="video/mp4"> Your browser does not support HTML5 video.</video><meta itemprop="name" content="Dentacoin Benefit Video"><meta itemprop="description" content="Happier and healthier patients"><meta itemprop="uploadDate" content="2020-08-30T08:00:00+08:00"><meta itemprop="thumbnailUrl" content="https://dentacoin.com/assets/uploads/video-poster.png"><link itemprop="contentURL" href="https://dentacoin.com/assets/uploads/dentists-circle-icon1.mp4"></div><div class="fs-20 fs-sm-16 fs-xs-18 lato-bold padding-top-10 color-black">Happier and healthier patients</div></div><div class="single-benefit inline-block-top"><div itemprop="video" itemscope="" itemtype="http://schema.org/VideoObject" class="video max-width-220 margin-0-auto"><video muted="muted" {{--autoplay--}}><source src="/assets/uploads/dentists-circle-icon2.mp4" type="video/mp4"> Your browser does not support HTML5 video.</video><meta itemprop="name" content="Dentacoin Benefit Video"><meta itemprop="description" content="Improved online presence and search rank"><meta itemprop="uploadDate" content="2020-08-30T08:00:00+08:00"><meta itemprop="thumbnailUrl" content="https://dentacoin.com/assets/uploads/video-poster.png"><link itemprop="contentURL" href="https://dentacoin.com/assets/uploads/dentists-circle-icon2.mp4"></div><div class="fs-20 fs-sm-16 fs-xs-18 lato-bold padding-top-10 color-black">Improved online presence and search rank</div></div><div class="single-benefit inline-block-top"><div itemprop="video" itemscope="" itemtype="http://schema.org/VideoObject" class="video max-width-220 margin-0-auto"><video muted="muted" {{--autoplay--}}><source src="/assets/uploads/dentists-circle-icon3.mp4" type="video/mp4"> Your browser does not support HTML5 video.</video><meta itemprop="name" content="Dentacoin Benefit Video"><meta itemprop="description" content="Additional income and innovative payments"><meta itemprop="uploadDate" content="2020-08-30T08:00:00+08:00"><meta itemprop="thumbnailUrl" content="https://dentacoin.com/assets/uploads/video-poster.png"><link itemprop="contentURL" href="https://dentacoin.com/assets/uploads/dentists-circle-icon3.mp4"></div><div class="fs-20 fs-sm-16 fs-xs-18 lato-bold padding-top-10 color-black">Additional income and innovative payments</div></div><div class="single-benefit inline-block-top"><div itemprop="video" itemscope="" itemtype="http://schema.org/VideoObject" class="video max-width-220 margin-0-auto"><video muted="muted" {{--autoplay--}}><source src="/assets/uploads/dentists-circle-icon4.mp4" type="video/mp4"> Your browser does not support HTML5 video.</video><meta itemprop="name" content="Dentacoin Benefit Video"><meta itemprop="description" content="Market overview via free DentaVox stats"><meta itemprop="uploadDate" content="2020-08-30T08:00:00+08:00"><meta itemprop="thumbnailUrl" content="https://dentacoin.com/assets/uploads/video-poster.png"><link itemprop="contentURL" href="https://dentacoin.com/assets/uploads/dentists-circle-icon4.mp4"></div><div class="fs-20 fs-sm-16 fs-xs-18 lato-bold padding-top-10 color-black">Market overview via free DentaVox stats</div></div><div class="single-benefit inline-block-top"><div itemprop="video" itemscope="" itemtype="http://schema.org/VideoObject" class="video max-width-220 margin-0-auto"><video muted="muted" {{--autoplay--}}><source src="/assets/uploads/dentists-circle-icon5.mp4" type="video/mp4"> Your browser does not support HTML5 video.</video><meta itemprop="name" content="Dentacoin Benefit Video"><meta itemprop="description" content="Valuable feedback via Trusted Reviews"><meta itemprop="uploadDate" content="2020-08-30T08:00:00+08:00"><meta itemprop="thumbnailUrl" content="https://dentacoin.com/assets/uploads/video-poster.png"><link itemprop="contentURL" href="https://dentacoin.com/assets/uploads/dentists-circle-icon5.mp4"></div><div class="fs-20 fs-sm-16 fs-xs-18 lato-bold padding-top-10 color-black">Valuable feedback via Trusted Reviews</div></div></div>
    </div>
    <div class="row">
        <div class="col-xs-12 text-center padding-top-70 padding-top-lgll-100 padding-top-xs-10 padding-bottom-50 padding-bottom-xs-10">
            <a href="//dentists.dentacoin.com" class="white-purple-btn-with-arrow fs-xs-16 padding-left-20 padding-right-60" target="_blank">SEE HOW IT WORKS</a>
        </div>
    </div>
</section>
<section class="section-users-expressions padding-left-40 padding-right-40 padding-left-xs-0 padding-right-xs-0">
    @include('partials.video-expressions', array('video_expressions' => $video_expressions, 'type' => 'dentists', 'title' => 'SUCCESS STORIES:'))
</section>
<section class="section-users-text-expressions">
    @include('partials.user-expressions', array('user_expressions' => $user_expressions, 'type' => 'dentists'))
</section>
<section class="module section-dentacoin-stats padding-top-70 padding-bottom-50">
    @include('partials.dentacoin-stats')
</section>