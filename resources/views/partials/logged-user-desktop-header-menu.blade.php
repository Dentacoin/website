<div class="col-xs-9 logged-user-right-nav inline-block text-right @if(!empty($class)) {{$class}} @endif @if(Route::current()->getName() != 'home') with-hub @endif">
    @php($user_data = (new \App\Http\Controllers\APIRequestsController())->getUserData(session('logged_user')['id']))
    <div class="inline-block hidden-box-hover">
        <a href="javascript:void(0)">
            <span>{{$user_data->name}}</span>
            <figure itemscope="" itemtype="http://schema.org/ImageObject" class="inline-block">
                @if(!empty($user_data->thumbnail_url))
                    <img alt="" itemprop="contentUrl" src="{{$user_data->thumbnail_url}}"/>
                @else
                    <img alt="" itemprop="contentUrl" src="/assets/images/avatar-icon.svg"/>
                @endif
            </figure>
        </a>
        <span class="up-arrow">▲</span>
        <div class="hidden-box">
            @if(!empty(Route::current()))
                @if(Route::current()->getName() != 'home')
                    <div class="hidden-box-hub container-fluid">
                        <div class="row close-btn">
                            <div class="col-xs-12"><a href="javascript:void(0)">Close <span>X</span></a></div>
                        </div>
                        <div class="row">
                            @foreach((new \App\Http\Controllers\HomeController())->getApplications() as $application)
                                <a @if(!empty($application->link)) href="{{$application->link}}" target="_blank" @else href="javascript:alert('Coming soon!');" @endif class="col-md-3 col-xs-4 inline-block-top application" data-platform="{{$application->title}}">
                                    <figure class="text-center" itemtype="http://schema.org/ImageObject">
                                        @if($application->logo)
                                            <img src="{{URL::asset('assets/uploads/'.$application->logo->name) }}" itemprop="contentUrl" @if(!empty($application->logo->alt)) alt="{{$application->logo->alt}}" @endif/>
                                        @endif
                                        <figcaption class="color-white fs-14 fs-xs-20 padding-bottom-15">{{$application->title}}</figcaption>
                                    </figure>
                                </a>
                            @endforeach
                        </div>
                    </div>
                @endif
            @endif
            <div class="container-fluid text-center hidden-box-footer">
                <div class="row">
                    <div class="col-xs-6 inline-block">
                        <a href="{{ route('user-logout') }}" class="logout"><i class="fa fa-power-off" aria-hidden="true"></i> Log out</a>
                    </div>
                    <div class="col-xs-6 inline-block">
                        {{--<a href="{{ route('my-profile') }}" class="fs-16 white-blue-rounded-btn">My account</a>--}}
                        <a href="//account.dentacoin.com?platform=dentacoin" class="fs-16 white-blue-rounded-btn">My account</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>