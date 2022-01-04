@php($dcnStatsCombinedData = (new \App\Http\Controllers\APIRequestsController())->getMapData(array('action' => 'combined-count-data')))
@php($dcnSubscribers = (new \App\Http\Controllers\APIRequestsController())->getDCNSubscribers())
@php($dcnTransactions = (new \App\Http\Controllers\APIRequestsController())->getDCNTransactionsCount())
@php($labs = (new \App\Http\Controllers\DentacoinMapController())->getDentacoinLocations(2))
@php($suppliers = (new \App\Http\Controllers\DentacoinMapController())->getDentacoinLocations(3))
@php($industryPartners = (new \App\Http\Controllers\DentacoinMapController())->getDentacoinLocations(4))
@if ($dcnStatsCombinedData && property_exists($dcnStatsCombinedData, 'success') && $dcnStatsCombinedData->success)
    @php($dentistsCount = $dcnStatsCombinedData->data->non_partners + $dcnStatsCombinedData->data->partners)
    @php($usersCount = substr($dcnStatsCombinedData->data->patients + $dcnSubscribers, 0, -3) . 'K+')
    @php($locations = sizeof($labs) + sizeof($suppliers) + sizeof($industryPartners) + $dcnStatsCombinedData->data->partners)
@else
    @php($dentistsCount = '2285')
    @php($usersCount = '317K+')
    @php($locations = sizeof($labs) + sizeof($suppliers) + sizeof($industryPartners))
@endif
@if ($dcnTransactions && property_exists($dcnTransactions, 'success') && $dcnTransactions->success)
    @php($dcnTransactionsCount = substr($dcnTransactions->success, 0, -3) . 'K+')
@else
    @php($dcnTransactionsCount = '290K+')
@endif
<div class="container">
    <div class="row fs-0 text-center">
        <div class="col-xs-12 color-black">
            <div class="single inline-block-top">
                <figure class="text-center" itemscope="" itemtype="http://schema.org/ImageObject">
                    <img alt="Dentacoin Dentists icon" class="max-width-60 margin-bottom-5" data-defer-src="/assets/uploads/stats1.svg" itemprop="contentUrl">
                </figure>
                <div class="fs-40 fs-lg-30 fs-md-30 fs-sm-30 fs-xs-22 lato-black padding-top-10">{{$dentistsCount}}</div>
                <div class="fs-20 fs-xs-18 padding-bottom-xs-25">Dentacoin Dentists</div>
            </div>
            <div class="single inline-block-top">
                <figure class="text-center" itemscope="" itemtype="http://schema.org/ImageObject">
                    <img alt="Partner Locations icon" class="max-width-50" data-defer-src="/assets/uploads/stats2.svg" itemprop="contentUrl">
                </figure>
                <div class="fs-40 fs-lg-30 fs-md-30 fs-sm-30 fs-xs-22 lato-black padding-top-10">{{$locations}}</div>
                <div class="fs-20 fs-xs-18 padding-bottom-xs-25">Partner Locations Accepting DCN</div>
            </div>
            <div class="single inline-block-top">
                <figure class="text-center" itemscope="" itemtype="http://schema.org/ImageObject">
                    <img alt="Active Users &amp; Subscribers icon" class="max-width-80 margin-bottom-20" data-defer-src="/assets/uploads/stats3.svg" itemprop="contentUrl">
                </figure>
                <div class="fs-40 fs-lg-30 fs-md-30 fs-sm-30 fs-xs-22 lato-black padding-top-10">{{$usersCount}}</div>
                <div class="fs-20 fs-xs-18 padding-bottom-xs-25">Active Users &amp; Subscribers</div>
            </div>
            <div class="single inline-block-top">
                <figure class="text-center" itemscope="" itemtype="http://schema.org/ImageObject">
                    <img alt="Transactions icon" class="max-width-60 margin-bottom-10" data-defer-src="/assets/uploads/stats4.svg" itemprop="contentUrl">
                </figure>
                <div class="fs-40 fs-lg-30 fs-md-30 fs-sm-30 fs-xs-22 lato-black padding-top-10">{{$dcnTransactionsCount}}</div>
                <div class="fs-20 fs-xs-18 ">Transactions in DCN currency</div>
            </div>
        </div>
    </div>
</div>