<div class="dcn-big-hub">
    <div class="info-section">
        <a href="javascript:void(0)" class="close-application">×</a>
        <figure class="logo"><img></figure>
        <div class="video-and-html-holder">
            <div class="left-arrow text-left inline-block">
                <a href="javascript:void(0);" class="inline-block">
                    <figure class="wrapper" itemscope="" itemtype="http://schema.org/ImageObject">
                        <img src="{{URL::asset('assets/images/red-left-arrow.svg') }}" itemprop="contentUrl" alt="Red left arrow"/>
                    </figure>
                </a>
            </div>
            <div class="content inline-block">
                <div class="video-content"></div>
                <div class="title-and-html">
                    <h3 class="title lato-bold"></h3>
                    <div class="html-content"></div>
                </div>
                <div class="extra-html-content"></div>
            </div>
            <div class="right-arrow text-right inline-block">
                <a href="javascript:void(0);" class="inline-block">
                    <figure class="wrapper" itemscope="" itemtype="http://schema.org/ImageObject">
                        <img src="{{URL::asset('assets/images/red-right-arrow.svg') }}" itemprop="contentUrl" alt="Red right arrow"/>
                    </figure>
                </a>
            </div>
        </div>
    </div>
    <div class="app-list @if (!empty($hubType)) @if ($hubType == 'dentists') dark-blue-background @else light-blue-background @endif @endif">{{--
        <div>
            <h3 class="rotated-text">{{$hubTitleParam}}</h3>
        </div>--}}
        <div class="list-wrapper">
            @foreach ($hubElements as $hubElement)
                @if ($hubElement->type == 'folder' && empty($hubElement->children))
                    @continue
                @endif

                @if ($hubElement->type == 'link')
                    <button class="single-application link" data-video="{{$hubElement->video_link}}" data-platform="{{$hubElement->slug}}" @if ($hubElement->media_name) data-image="{{URL::asset('assets/uploads/'.$hubElement->media_name) }}" data-image-alt="@if ($hubElement->alt){{$hubElement->alt}}@endif" @endif data-title="{{$hubElement->title}}" data-html="{{ json_encode($hubElement->html) }}" @if ($hubElement->slug == 'dentacoin-blog') @if (!empty($latest_blog_articles)) data-articles="{{json_encode($latest_blog_articles)}}" @endif @endif>
                        <figure class="wrapper" itemscope="" itemtype="http://schema.org/ImageObject">
                            @if ($hubElement->media_name)
                                <img data-defer-src="{{URL::asset('assets/uploads/'.$hubElement->media_name) }}" itemprop="contentUrl" @if (!empty($hubElement->alt)) alt="{{$hubElement->alt}}" @endif/>
                            @endif
                            <figcaption class="hub-element-title">{{$hubElement->title}}</figcaption>
                        </figure>
                    </button>
                @elseif ($hubElement->type == 'folder')
                    <button class="single-application folder">
                        @if (!empty($hubElement->media_name))
                            <figure class="wrapper" itemscope="" itemtype="http://schema.org/ImageObject">
                                @if (!empty($hubElement->media_name))
                                    <img data-defer-src="{{URL::asset('assets/uploads/'.$hubElement->media_name) }}" itemprop="contentUrl" @if (!empty($hubElement->alt)) alt="{{$hubElement->alt}}" @endif/>
                                @endif
                                <figcaption class="hub-element-title">{{$hubElement->title}}</figcaption>
                            </figure>
                        @else
                            <div class="hub-folder">
                                <div class="apps-in-folder-list">
                                    @foreach($hubElement->children as $child)
                                        <img data-defer-src="//dentacoin.com/assets/uploads/{{$child->media_name}}" alt="{{$child->alt}}"/>
                                    @endforeach
                                </div>
                            </div>
                            <div class="hub-element-title">{{$hubElement->title}}</div>
                        @endif
                    </button>
                @endif
            @endforeach
        </div>
    </div>
</div>