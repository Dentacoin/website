@extends("layout")

@section("content")
    <section class="changelly-container fs-0">
        <div class="container">
            <div class="row">
                <h1 class="col-xs-12 page-h1-title">CHANGELLY</h1>
            </div>
        </div>
        <div class="iframe-wrapper">
            <iframe src="https://changelly.com/widget/v1?auth=email&from=USD&to=DCN&merchant_id=e329f113040f&address=&amount=1&ref_id=e329f113040f&color=136584" class="changelly" scrolling="no" width="500">Can't load widget</iframe>
            <script type="text/javascript">
                var changellyModal = document.getElementById('changellyModal');
                var changellyButton = document.getElementById('changellyButton');
                var changellyCloseButton = document.getElementsByClassName('changellyModal-close')[0];
                changellyCloseButton.onclick = function() {
                    changellyModal.style.display = 'none';
                };
                changellyButton.onclick = function widgetClick(e) {
                    e.preventDefault();
                    changellyModal.style.display = 'block';
                };
            </script>
        </div>
    </section>
@endsection