jQuery(document).ready(function()   {
    addHTMLEditor();
    initDataTable();
});

function initDataTable()    {
    if ($('table.table.table-without-reorder').length > 0) {
        if ($('table.table.table-without-reorder').hasClass('media-table'))  {
            $('table.table.table-without-reorder.media-table').DataTable().on('draw.dt', function (){
                var pagination_id = null;
                if ($(this).attr('data-id-in-action') != undefined) {
                    pagination_id = $(this).attr('data-id-in-action');
                }
                var close_button;
                if ($(this).attr('data-close-btn') == 'false')   {
                    close_button = false;
                } else if ($(this).attr('data-close-btn') == 'true')   {
                    close_button = true;
                }
                useMediaEvent(pagination_id, close_button);
            });
        } else if ($('table.table.table-without-reorder').hasClass('holiday-calendar-participants'))  {
            $('table.table.table-without-reorder').DataTable({
                ordering: true,
                order: [],
                columnDefs: [{
                    orderable: false,
                    targets: 'no-sort'
                }],
                aaSorting: []
            });
        } else {
            $('table.table.table-without-reorder').DataTable({
                sort: false
            });
        }
    } else if ($('table.table.table-with-reorder').length > 0) {
        var table = $('table.table.table-with-reorder').DataTable({
            rowReorder: true
        });
        $('table.table.table-with-reorder').addClass('sortable');
        table.on('row-reorder', function(e, diff, edit) {
            var order_object = {};
            for(let i = 0, len = diff.length; i < len; i+=1) {
                order_object[$(diff[i].node).data('id')] = diff[i].newPosition;
            }
            $.ajax({
                type: 'POST',
                url: SITE_URL + '/'+$('table.table.table-with-reorder').attr('data-action')+'/update-order',
                data: {
                    'order_object' : order_object
                },
                dataType: 'json',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (response) {
                    if (response.success)    {
                        basic.showAlert(response.success);
                    }
                }
            });
        });
    }
}

function addHTMLEditor(){
    if ($('.ckeditor-init').length > 0)   {
        $('.ckeditor-init').each(function() {
            var options = $.extend({
                    height: 350,
                    allowedContent: true,
                    disallowedContent: 'script',
                    contentsCss : ['/dist/css/front-libs-style.css', '/assets/css/style.css', '/assets/libs/dentacoin-package/css/styles-big-hub.css']
                }, {on: {
                        pluginsLoaded: function() {
                            var editor = this,
                                config = editor.config;
                            config.removeButtons = 'Image';

                            //registering command to call the callery
                            editor.addCommand("openGalleryCommand", {
                                exec: function() {
                                    openMedia(null, null, null, editor);
                                }
                            });

                            //adding button to the ckeditor which interrupts with command
                            editor.ui.addButton("GalleryButton", {
                                label: "Gallery",
                                command: "openGalleryCommand",
                                toolbar: "insert",
                                icon: "/assets/images/logo.svg"
                            });
                        }, instanceReady: function() {
                            // Use line breaks for block elements, tables, and lists.
                            var dtd = CKEDITOR.dtd;
                            for ( var e in CKEDITOR.tools.extend( {}, dtd.$nonBodyContent, dtd.$block, dtd.$listItem, dtd.$tableContent ) ) {
                                this.dataProcessor.writer.setRules( e, {
                                    indent: true,
                                });
                            }
                        }
                    }},
                options);
            CKEDITOR.replace($(this).attr('id'), options);
        });
    }
}

//opening media popup with all the images in the DB
function openMedia(id, close_btn, type, editor)    {
    var data = {};
    if (id === undefined) {
        id = null;
    }
    if (close_btn === undefined) {
        close_btn = false;
    }
    if (type === undefined) {
        type = null;
    } else {
        data['type'] = type;
    }
    if (editor === undefined) {
        editor = null;
    }
    $.ajax({
        type: 'POST',
        url: SITE_URL + '/media/open',
        data: data,
        dataType: 'json',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function (response) {
            if (response.success) {
                basic.showDialog(response.success, 'media-popup');
                initDataTable();
                $('table.table.table-without-reorder.media-table').attr('data-id-in-action', id).attr('data-close-btn', close_btn);
                saveImageAltsEvent();
                initUploadMediaLogic();
                useMediaEvent(id, close_btn, editor);
            }
        }
    });
}

//on click append image to post before saving the post
function useMediaEvent(id, close_btn, editor) {
    $('.media-popup .use-media').click(function()   {
        var type = $(this).attr('data-type');
        if (editor != null)  {
            if (type == 'file') {
                editor.insertHtml('<a href="'+$(this).closest('tr').attr('data-src')+'">'+$(this).closest('tr').attr('data-src')+'</a>');
            } else if (type == 'image')   {
                editor.insertHtml('<img class="small-image" src="'+$(this).closest('tr').attr('data-src')+'"/>');
            }
        } else {
            if (type == 'file')  {
                if (id != null)	{
                    $('.media[data-id="'+id+'"] .image-visualization').html('<a href="'+$(this).closest('tr').attr('data-src')+'">'+$(this).closest('tr').attr('data-src')+'</a>');
                    $('.media[data-id="'+id+'"] input.hidden-input-image').val($(this).closest('tr').attr('data-id'));
                    $('.media[data-id="'+id+'"] input.hidden-input-url').val($(this).closest('tr').attr('data-src'));
                    if (close_btn) {
                        $('.media[data-id="'+id+'"] .image-visualization').append('<span class="inline-block-top remove-image"><i class="fa fa-times" aria-hidden="true"></i></span>');
                    }
                } else {
                    $('.image-visualization').html('<a href="'+$(this).closest('tr').attr('data-src')+'">'+$(this).closest('tr').attr('data-src')+'</a>');
                    $('input.hidden-input-image').val($(this).closest('tr').attr('data-id'));
                    $('input.hidden-input-url').val($(this).closest('tr').attr('data-src'));
                    if (close_btn) {
                        $('.image-visualization').append('<span class="inline-block-top remove-image"><i class="fa fa-times" aria-hidden="true"></i></span>');
                    }
                }
            } else if (type == 'image')    {
                if (id != null)	{
                    $('.media[data-id="'+id+'"] .image-visualization').html('<img class="small-image" src="'+$(this).closest('tr').attr('data-src')+'"/>');
                    $('.media[data-id="'+id+'"] input.hidden-input-image').val($(this).closest('tr').attr('data-id'));
                } else {
                    $('.image-visualization').html('<img class="small-image" src="'+$(this).closest('tr').attr('data-src')+'"/>');
                    $('input.hidden-input-image').val($(this).closest('tr').attr('data-id'));
                }
                if (close_btn) {
                    if (id != null)	{
                        $('.media[data-id="'+id+'"] .image-visualization').append('<span class="inline-block-top remove-image"><i class="fa fa-times" aria-hidden="true"></i></span>');
                    } else {
                        $('.image-visualization').append('<span class="inline-block-top remove-image"><i class="fa fa-times" aria-hidden="true"></i></span>');
                    }
                }
            }
        }
        basic.closeDialog();
    });
}

//removing image from posts listing pages
function removeImage()  {
    $(document).on('click', '.remove-image', function()    {
        $(this).closest('.media').find('.hidden-input-image').val('');
        $(this).closest('.media').find('.image-visualization').html('');
    });
}
removeImage();

function deleteMedia() {
    $(document).on('click', '.delete-media', function()    {
        var this_btn = $(this);
        if (confirm('Are you sure you want to delete this resource?')) {
            $.ajax({
                type: 'POST',
                url: SITE_URL + '/media/delete/'+this_btn.closest('tr').attr('data-id'),
                dataType: 'json',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (response) {
                    if (response.success)    {
                        basic.showAlert(response.success, '', true);
                        this_btn.closest('tr').remove();
                    } else if (response.error) {
                        basic.showAlert(response.error, '', true);
                    }
                }
            });
        }
    });
}
deleteMedia();

//saving image alts on media listing pages
function saveImageAltsEvent()   {
    if ($('.save-image-alts').length > 0)    {
        $('.save-image-alts').click(function()  {
            var alts_object = {};
            for(let i = 0, len = $('.media-table tbody tr').length; i < len; i+=1)  {
                if ($('.media-table tbody tr').eq(i).find('.alt-attribute').val() != undefined && $('.media-table tbody tr').eq(i).find('.alt-attribute').val() != null) {
                    alts_object[$('.media-table tbody tr').eq(i).attr('data-id')] = $('.media-table tbody tr').eq(i).find('.alt-attribute').val().trim();
                }
            }
            $.ajax({
                type: 'POST',
                url: SITE_URL + '/media/update-media-alts',
                data: {
                    'alts_object' : alts_object
                },
                dataType: 'json',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (response) {
                    if (response.success)    {
                        basic.showAlert(response.success);
                    }
                }
            });
        });
    }
}
saveImageAltsEvent();

//refreshing captcha on trying to log in admin
if ($('.refresh-captcha').length > 0)    {
    $('.refresh-captcha').click(function()  {
        $.ajax({
            type: 'GET',
            url: '/refresh-captcha',
            dataType: 'json',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (response) {
                $('.captcha-container span').html(response.captcha);
            }
        });
    });
}

function generateUrl(str)  {
    var str_arr = str.toLowerCase().split('');
    var cyr = [
        'а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п', 'р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я',' ','_'
    ];
    var lat = [
        'a','b','v','g','d','e','io','zh','z','i','y','k','l','m','n','o','p', 'r','s','t','u','f','h','ts','ch','sh','sht','a','i','y','e','yu','ya', '-', '-'
    ];
    for(var i = 0; i < str_arr.length; i+=1)  {
        for(var y = 0; y < cyr.length; y+=1)    {
            if (str_arr[i] == cyr[y])    {
                str_arr[i] = lat[y];
            }
        }
    }
    return str_arr.join('').replace(/-+/g, '-');
}

if ($('.datepicker').length > 0) {
    $('.datepicker').datepicker({
        format: 'dd-mm-yyyy',
        startDate: '-3d'
    });
}

function addLocationMap(edit) {
    if (edit === undefined) {
        edit = false;
    }

    Gmap = jQuery('.add-edit-location-map');
    Gmap.each(function () {
        var $this = jQuery(this),
            lat = '',
            lng = '',
            zoom = 1,
            scrollwheel = true,
            zoomcontrol = true,
            draggable = true,
            mapType = google.maps.MapTypeId.ROADMAP,
            title = '',
            contentString = '',
            dataZoom = 2,
            dataType = 'roadmap',
            dataScrollwheel = scrollwheel,
            dataZoomcontrol = $this.data('zoomcontrol'),
            dataHue = $this.data('hue'),
            dataTitle = $this.data('title'),
            dataContent = "";

        if (edit)    {
            var dataLat = $('input[type="number"][name="lat"]').val().trim();
            var dataLng = $('input[type="number"][name="lng"]').val().trim();
        } else {
            var dataLat = 42.7825182;
            var dataLng = 25.6929199;
        }


        if (dataZoom !== undefined && dataZoom !== false) {
            zoom = parseFloat(dataZoom);
        }
        if (dataScrollwheel !== undefined && dataScrollwheel !== null) {
            scrollwheel = dataScrollwheel;
        }
        if (dataZoomcontrol !== undefined && dataZoomcontrol !== null) {
            zoomcontrol = dataZoomcontrol;
        }
        if (dataType !== undefined && dataType !== false) {
            if (dataType == 'satellite') {
                mapType = google.maps.MapTypeId.SATELLITE;
            } else if (dataType == 'hybrid') {
                mapType = google.maps.MapTypeId.HYBRID;
            } else if (dataType == 'terrain') {
                mapType = google.maps.MapTypeId.TERRAIN;
            }
        }
        if (dataTitle !== undefined && dataTitle !== false) {
            title = dataTitle;
        }
        if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {
            draggable = true;
        }

        var styles = [{"featureType":"poi","elementType":"all","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"hue":"#000000"},{"saturation":0},{"lightness":-100},{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"transit","elementType":"labels","stylers":[{"hue":"#000000"},{"saturation":0},{"lightness":-100},{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbbbbb"},{"saturation":-100},{"lightness":26},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#dddddd"},{"saturation":-100},{"lightness":-3},{"visibility":"on"}]}];

        var mapOptions = {
            zoom: zoom,
            scrollwheel: scrollwheel,
            zoomControl: zoomcontrol,
            draggable: draggable,
            center: new google.maps.LatLng(dataLat, dataLng),
            mapTypeId: mapType,
            gestureHandling: 'greedy',
            styles: styles
        };

        var map = new google.maps.Map($this[0], mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(dataLat, dataLng),
            map: map,
            lat : dataLat,
            lng : dataLng,
            draggable : true
        });

        google.maps.event.addListener(marker, 'drag', function() {
            $('input[type="number"][name="lat"]').val(marker.position.lat().toFixed(5));
            $('input[type="number"][name="lng"]').val(marker.position.lng().toFixed(5));
        });
    });
}

if ($('.add-edit-menu-element select[name="type"]').length > 0) {
    $('.add-edit-menu-element select[name="type"]').on('change', function() {
        var type = $(this).val();
        $.ajax({
            type: 'POST',
            url: SITE_URL + '/menus/change-url-option',
            data: {
                'type' : type
            },
            dataType: 'json',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (response) {
                if (response.success) {
                    $('.add-edit-menu-element .type-result').html(response.success);
                }
            }
        });
    });
}

function initSkillsLogic()  {
    $('.skills-body').sortable();

    bindSingleSkillActions();

    $('.skills-section .btn-container button').click(function() {
        addSkillFromInput();
    });
}

function addSkillFromInput() {
    if ($('.skills-section input[type="text"]').val().trim() == '') {
        alert('Please enter skill in the field.');
        return false;
    } else {
        $('.skills-section .skills-body').append('<div class="single-skill"><div class="skill-text">'+$('.skills-section input[type="text"]').val().trim()+'<input type="hidden" name="skills[]" value="'+$('.skills-section input[type="text"]').val().trim()+'"/></div><div class="skill-action"><a href="javascript:void(0);" class="remove-skill"><i class="fa fa-times" aria-hidden="true"></i></a></div></div>');
        bindSingleSkillActions();
        $('.skills-section input[type="text"]').val('');
    }
}

function bindSingleSkillActions()   {
    $('.skills-body .single-skill .skill-action .remove-skill').click(function()    {
        $(this).closest('.single-skill').remove();
    });
}

function bindDontSubmitFormOnEnter()    {
    $('form').keydown(function(event){
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });

    $('.skills-section input[type="text"]').keydown(function(event){
        if (event.keyCode == 13) {
            addSkillFromInput();
        }
    });
}

function initUploadMediaLogic() {
    if ($('form#upload-media').length) {
        $('form#upload-media').submit(function(event) {
            $('.response-layer').addClass('show-this');
            event.preventDefault();
            var this_form = this;

            setTimeout(function() {
                $.ajax({
                    type: 'POST',
                    url: SITE_URL + '/media/ajax-upload',
                    data: new FormData($(this_form)[0]),
                    async: false,
                    processData: false,
                    contentType: false,
                    dataType: 'json',
                    success: function (response) {
                        if (response.success) {
                            basic.showAlert(response.success, '', true);

                            if ($('.media-table').length) {
                                $('.media-table tbody').prepend(response.html_with_images);

                                if ($('table.table.table-without-reorder.media-table').attr('data-id-in-action') != undefined) {
                                    useMediaEvent($('table.table.table-without-reorder.media-table').attr('data-id-in-action'), $('table.table.table-without-reorder.media-table').attr('data-close-btn'), null);
                                }
                            }
                        } else if (response.error) {
                            basic.showAlert(response.error, '', true);
                        }

                        $('.response-layer').removeClass('show-this');

                        $(this_form).find('input[name="images[]"]').val('');
                    }
                });
            }, 300);
        });
    }
}
initUploadMediaLogic();

if ($('.sortable-container.update-menu-children-order').length) {
    for(var i = 0, len = $('.sortable-container.update-menu-children-order').length; i < len; i+=1) {
        $('.sortable-container.update-menu-children-order').eq(i).sortable({
            stop: function() {
                var array_with_menu_chilren = {};
                for(var y = 0, len_y = $('.single-child').length; y < len_y; y+=1) {
                    array_with_menu_chilren[$('.single-child').eq(y).attr('data-id')] = parseInt($('.single-child').eq(y).index());
                }

                $.ajax({
                    type: 'POST',
                    url: SITE_URL + $('.sortable-container').attr('data-route-update-order'),
                    data: {
                        'order_object' : array_with_menu_chilren,
                        'binded_to' : $('.sortable-container').attr('data-binded-to')
                    },
                    dataType: 'json',
                    success: function (response) {
                        if (response.success)    {
                            basic.showAlert(response.success, '', true);
                        }
                    },
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
            }
        });
    }
}

var projectData = {
    pages: {
        logged_in: function () {
            projectData.pages.data.add_job_offer();
            projectData.pages.data.edit_job_offer();
            projectData.pages.data.additionals();
            projectData.pages.data.add_location();
            projectData.pages.data.edit_location();
            projectData.pages.data.add_edit_clinic();
            projectData.pages.data.add_edit_type_platform();
            projectData.pages.data.christmas_calendar_participant();
            projectData.pages.data.add_edit_available_buying_option();
            projectData.pages.data.add_edit_roadmap_year();
            projectData.pages.data.view_dcn_hub();
            projectData.pages.data.add_edit_dcn_hub_element();
            projectData.pages.data.add_application();
            projectData.pages.data.deposit();
            projectData.pages.data.withdraw();
        },
        data: {
            add_job_offer: async function () {
                if ($('body').hasClass('add-job-offer')) {
                    $('body.add-job-offer input[name="title"]').on('input', function() {
                        $('body.add-job-offer input[name="slug"]').val(generateUrl($(this).val().trim()));
                    });

                    initSkillsLogic();

                    bindDontSubmitFormOnEnter();
                }
            },
            edit_job_offer: async function () {
                if ($('body').hasClass('edit-job-offer'))    {
                    initSkillsLogic();

                    bindDontSubmitFormOnEnter();
                }
            },
            additionals: async function () {
                if ($('body').hasClass('additionals')) {
                    $('.remove-box').unbind().click(function()   {
                        $(this).closest('.custom-box').remove();
                    });

                    $('.add-new-api-endpoint').click(function() {
                        if ($('.new-api-endpoint-name').val().trim() == '' || $('.new-api-endpoint-value').val().trim() == '') {
                            basic.showAlert('Please enter name and value for API Endpoint.');
                        } else {
                            $('.appending-body').append('<div class="box"><div class="box-header with-border"><h3 class="box-title">'+$('.new-api-endpoint-name').val().trim()+'</h3><div class="box-tools pull-right"><button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="" data-original-title="Remove"><i class="fa fa-times"></i></button></div></div><div class="box-body"><div class="form-group"><input type="text" class="form-control" name="api-endpoints['+generateUrl($('.new-api-endpoint-name').val().trim())+'][data]" placeholder="Enter circulating supply" value="'+$('.new-api-endpoint-value').val().trim()+'"><input type="hidden" class="form-control" name="api-endpoints['+generateUrl($('.new-api-endpoint-name').val().trim())+'][name]" placeholder="Enter circulating supply" value="'+$('.new-api-endpoint-name').val().trim()+'"></div></div></div>');
                            $('.new-api-endpoint-name').val('');
                            $('.new-api-endpoint-value').val('');
                            $('.remove-box').unbind().click(function()   {
                                $(this).closest('.custom-box').remove();
                            });
                        }
                    });
                }
            },
            add_location: async function () {
                if ($('body').hasClass('add-location'))  {
                    addLocationMap();
                }
            },
            edit_location: async function () {
                if ($('body').hasClass('edit-location'))  {
                    addLocationMap(true);
                }
            },
            add_edit_clinic: async function () {
                if ($('body').hasClass('add-clinic') || $('body').hasClass('edit-clinic')) {
                    $('.add-edit-clinic #featured').change(function() {
                        if ($(this).is(':checked')) {
                            $('.add-edit-clinic .clinic-text').removeClass('hide');
                        } else {
                            $('.add-edit-clinic .clinic-text').addClass('hide');
                        }
                    });

                    $('select[name="type"]').on('change', function() {
                        $('select[name="subtype"] .subtype-option').addClass('hide');
                        $('select[name="subtype"] .subtype-option[data-type-id="'+$(this).val()+'"]').removeClass('hide');
                    });
                }
            },
            add_edit_type_platform: async function () {
                if ($('body').hasClass('add-type') || $('body').hasClass('edit-type') || $('body').hasClass('add-platform') || $('body').hasClass('edit-platform')) {
                    var color_picker_options = {
                        preferredFormat: "hex",
                        showInput: true,
                        clickoutFiresChange: true,
                        showButtons: false,
                        move: function(color) {
                            $('input[name="color"]').val(color.toHexString());
                        },
                        change: function(color) {
                            $('input[name="color"]').val(color.toHexString());
                        }
                    };

                    if ($('input[name="color"]').attr('data-color') != undefined) {
                        color_picker_options.color = $('input[name="color"]').attr('data-color');
                    }

                    $('input[name="color"]').spectrum(color_picker_options);
                }
            },
            christmas_calendar_participant: async function () {
                if ($('body').hasClass('view-christmas-calendar-participant')) {
                    $('.type-btns.show-all').click(function() {
                        $('.type-btns').removeClass('active-btn');
                        $(this).addClass('active-btn');

                        $('.tasks-table tbody tr').removeClass('hide');
                    });

                    $('.type-btns.type-not-passed').click(function() {
                        $('.type-btns').removeClass('active-btn');
                        $(this).addClass('active-btn');

                        $('.tasks-table tbody tr').addClass('hide');
                        $('.tasks-table tbody tr.type-not-passed').removeClass('hide');
                    });

                    $('.type-btns.type-disqualified-task').click(function() {
                        $('.type-btns').removeClass('active-btn');
                        $(this).addClass('active-btn');

                        $('.tasks-table tbody tr').addClass('hide');
                        $('.tasks-table tbody tr.type-disqualified-task').removeClass('hide');
                    });

                    $('.type-btns.type-passed-and-not-paid').click(function() {
                        $('.type-btns').removeClass('active-btn');
                        $(this).addClass('active-btn');

                        $('.tasks-table tbody tr').addClass('hide');
                        $('.tasks-table tbody tr.type-passed-and-not-paid').removeClass('hide');
                    });

                    $('.type-btns.type-passed-and-paid').click(function() {
                        $('.type-btns').removeClass('active-btn');
                        $(this).addClass('active-btn');

                        $('.tasks-table tbody tr').addClass('hide');
                        $('.tasks-table tbody tr.type-passed-and-paid').removeClass('hide');
                    });

                    $('.approve-user-calendar-participation').click(function() {
                        var thisBtn = $(this);
                        var approvedTasksLength = $('tr.passed-not-payed-task').length;
                        if (approvedTasksLength) {
                            var dcnAmount = 0;
                            var ticketAmount = 0;
                            var doubleReward = false;
                            var tasksToApprove = [];
                            for(var i = 0; i < approvedTasksLength; i+=1) {
                                if ($('tr.passed-not-payed-task').eq(i).attr('data-type') == 'dcn-reward') {
                                    dcnAmount += parseInt($('tr.passed-not-payed-task').eq(i).attr('data-value'));
                                } else if ($('tr.passed-not-payed-task').eq(i).attr('data-type') == 'ticket-reward') {
                                    ticketAmount += parseInt($('tr.passed-not-payed-task').eq(i).attr('data-value'));
                                }
                                tasksToApprove.push($('tr.passed-not-payed-task').eq(i).attr('data-id'));
                            }

                            var warningMsg = 'Are you sure you want to approve these user tasks? They make in total ' + dcnAmount + ' DCN and ' + ticketAmount + ' tickets.';

                            if ($('tr.passed-not-payed-task.on-time').length == 31) {
                                doubleReward = true;
                                warningMsg += ' This user has also completed all tasks in the tasks days so he will receive x2 DCN reward => ' + (dcnAmount*2) + ' DCN.';
                            }

                            var confirm_obj = {};
                            confirm_obj.callback = function (result) {
                                if (result) {
                                    $.ajax({
                                        type: 'POST',
                                        url: SITE_URL + '/christmas-calendar-participants/' + thisBtn.attr('data-year') + '/approve-tasks',
                                        data: {
                                            'tasksToApprove' : tasksToApprove,
                                            'participant' : $('table').attr('data-participant-id'),
                                            'doubleReward' : doubleReward
                                        },
                                        dataType: 'json',
                                        headers: {
                                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                        },
                                        success: function (response) {
                                            if (response.success) {
                                                basic.showAlert(response.success, '', true);

                                                $('.type-passed-and-not-paid').addClass('type-passed-and-paid').removeClass('type-passed-and-not-paid');
                                                $('tr.passed-not-payed-task').find('.reward-sent-td').html('<i class="fa fa-check text-success" aria-hidden="true"></i>').removeClass('passed-not-payed-task');
                                                $('tr.passed-not-payed-task').find('.actions').html('This task is already approved and reward has been sent.');
                                                $('tr.passed-not-payed-task').removeClass('passed-not-payed-task');
                                            } else if (response.error) {
                                                basic.showAlert(response.error, '', true);
                                            }
                                        }
                                    });
                                }
                            };
                            basic.showConfirm(warningMsg, '', confirm_obj, true);
                        } else {
                            basic.showAlert('This user has no tasks to approve.', '', true);
                        }
                    });

                    $(document).on('click', '.remove-disqualification', function() {
                        var thisBtn = $(this);

                        var confirm_obj = {};
                        confirm_obj.callback = function (result) {
                            if (result) {
                                $.ajax({
                                    type: 'POST',
                                    url: SITE_URL + '/christmas-calendar-participants/' + thisBtn.attr('data-year') + '/remove-disqualification/' + thisBtn.attr('data-passedTask'),
                                    dataType: 'json',
                                    headers: {
                                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                    },
                                    success: function (response) {
                                        if (response.success) {
                                            basic.showAlert('Disqualification has been removed successfully.', '', true);

                                            thisBtn.closest('tr').addClass('type-passed-and-not-paid').removeClass('type-disqualified-task');
                                            thisBtn.closest('tr').addClass('passed-and-not-disqualified passed-not-payed-task');
                                            thisBtn.closest('tr').removeClass('disqualified-task');

                                            thisBtn.closest('.disqualification-td').html('<a data-passedTask="'+thisBtn.attr('data-passedTask')+'" data-year="'+thisBtn.attr('data-year')+'" href="javascript:void(0);" class="btn background-orange-important disqualify-btn">Disqualify</a>');
                                        } else {
                                            basic.showAlert('Something went wrong.', '', true);
                                        }
                                    }
                                });
                            }
                        };
                        basic.showConfirm('Are you sure you want to remove this disqualification?', '', confirm_obj, true);
                    });

                    $(document).on('click', '.disqualify-btn', function() {
                        var thisBtn = $(this);

                        var confirm_obj = {};
                        confirm_obj.callback = function (result) {
                            if (result) {
                                $.ajax({
                                    type: 'POST',
                                    url: SITE_URL + '/christmas-calendar-participants/' + thisBtn.attr('data-year') + '/disqualify/' + thisBtn.attr('data-passedTask'),
                                    dataType: 'json',
                                    headers: {
                                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                    },
                                    success: function (response) {
                                        if (response.success) {
                                            basic.showAlert('Task has been disqualified successfully.', '', true);

                                            thisBtn.closest('tr').removeClass('type-passed-and-not-paid').addClass('type-disqualified-task');
                                            thisBtn.closest('tr').removeClass('passed-and-not-disqualified passed-not-payed-task');
                                            thisBtn.closest('tr').addClass('disqualified-task');
                                            thisBtn.closest('.disqualification-td').html('This task has been disqualified. <a href="javascript:void(0);" class="btn background-orange-important inline-block remove-disqualification" style="margin-top: 10px;" data-passedTask="'+thisBtn.attr('data-passedTask')+'" data-year="'+thisBtn.attr('data-year')+'">Remove disqualification</a>');
                                        } else {
                                            basic.showAlert('Something went wrong.', '', true);
                                        }
                                    }
                                });
                            }
                        };
                        basic.showConfirm('Are you sure you want to disqualify this user task?', '', confirm_obj, true);
                    });

                    $(document).on('click', '.delete-task', function() {
                        var thisBtn = $(this);

                        var confirm_obj = {};
                        confirm_obj.callback = function (result) {
                            if (result) {
                                $.ajax({
                                    type: 'POST',
                                    url: SITE_URL + '/christmas-calendar-participants/' + thisBtn.attr('data-year') + '/delete-christmas-task/' + thisBtn.attr('data-passedTask'),
                                    dataType: 'json',
                                    headers: {
                                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                    },
                                    success: function (response) {
                                        if (response.success) {
                                            basic.showAlert(response.data, '', true);

                                            thisBtn.closest('tr').find('.text-proof').html('User didn\'t finish this task yet.');
                                            thisBtn.closest('tr').find('.ss-proof').html('User didn\'t finish this task yet.');
                                            thisBtn.closest('tr').find('.disqualification-td').html('User didn\'t finish this task yet.');
                                            thisBtn.closest('tr').find('.actions').html('User didn\'t finish this task yet.');
                                        } else {
                                            basic.showAlert('Something went wrong.', '', true);
                                        }
                                    }
                                });
                            }
                        };
                        basic.showConfirm('Are you sure you want to delete this user task?', '', confirm_obj, true);
                    });
                }
            },
            add_edit_available_buying_option: async function () {
                if ($('body').hasClass('add-available-buying-option') || $('body').hasClass('edit-available-buying-option')) {
                    $('select[name="type"]').on('change', function() {
                        if ($(this).val() == 'exchange-platforms') {
                            $('.camping-for-exchange-platform-type').show();
                            $('[name="clear-exchange-pairs"]').val(false);
                        } else {
                            $('.camping-for-exchange-platform-type').hide();
                            $('[name="clear-exchange-pairs"]').val(true);
                        }
                    });

                    $(document).on('click', '.remove-pair', function() {
                        $(this).closest('.single-child').remove();

                        if ($('.sortable-container .single-child').length == 0) {
                            $('.no-pairs').removeClass('hide');
                            $('.sortable-container').addClass('hide');
                        }
                    });

                    $('.sortable-container').sortable();
                    $('.add-new-exchange-pair').click(function() {
                        if ($('.pair-title').val().trim() == '') {
                            basic.showDialog('Please enter pair title.', '', true);
                        } else {
                            var url = '';
                            if ($('.sortable-container').hasClass('hide')) {
                                $('.sortable-container').removeClass('hide');
                                $('.no-pairs').addClass('hide');
                            }

                            if ($('.pair-url').val().trim() != '') {
                                url = '<div><label>URL:</label> <a href="'+$('.pair-url').val().trim()+'" target="_blank">'+$('.pair-url').val().trim()+'</a></div>';
                            }

                            var time = (new Date()).getTime();

                            $('.sortable-container').append('<div class="single-child clearfix"><div style="float: left;"><div><label>Title:</label> '+$('.pair-title').val().trim()+'</div>'+url+'</div><div style="float: right;"><a href="javascript:void(0);" class="btn remove-pair">Remove</a><input type="hidden" name="pairs['+time+'][title]" value="'+$('.pair-title').val().trim()+'"/><input type="hidden" name="pairs['+time+'][url]" value="'+$('.pair-url').val().trim()+'"/></div></div>');

                            $('.pair-title').val('');
                            $('.pair-url').val('');
                        }
                    });
                }
            },
            add_edit_roadmap_year: async function () {
                if ($('body').hasClass('add-roadmap-year') || $('body').hasClass('edit-roadmap-year') || $('body').hasClass('edit-roadmap-year-event')) {
                    function initColorPicker() {
                        var color_picker_options = {
                            preferredFormat: "hex",
                            showInput: true,
                            clickoutFiresChange: true,
                            showButtons: false,
                            move: function(color) {
                                $('.event-color').val(color.toHexString());
                                if ($('[name="predefined-color"]').length) {
                                    $('[name="predefined-color"]').prop('checked', false);
                                }
                            },
                            change: function(color) {
                                $('.event-color').val(color.toHexString());
                                if ($('[name="predefined-color"]').length) {
                                    $('[name="predefined-color"]').prop('checked', false);
                                }
                            }
                        };

                        $('.event-color').spectrum(color_picker_options);
                    }

                    initColorPicker();

                    $(document).on('click', '.remove-event', function() {
                        $(this).closest('.single-child').remove();

                        if ($('.sortable-container .single-child').length == 0) {
                            $('.no-pairs').removeClass('hide');
                            $('.sortable-container').addClass('hide');
                        }
                    });

                    if ($('[name="predefined-color"]').length) {
                        $('[name="predefined-color"]').on('change', function() {
                            if ($(this).val() != '') {
                                $('.event-color').val($(this).val());

                                initColorPicker();
                            }
                        });
                    }

                    $('.clear-label-color').click(function() {
                        if ($('[name="predefined-color"]').length) {
                            $('[name="predefined-color"]').prop('checked', false);
                        }

                        $('.event-color').val('');
                        initColorPicker();
                    });

                    $('.sortable-container').sortable();
                    $('.add-new-roadmap-event').click(function() {
                        var roadmapEventTitle = CKEDITOR.instances['event-title'].getData().trim();

                        if (roadmapEventTitle == '') {
                            basic.showDialog('Please enter title.', '', true);
                        } else if (roadmapEventTitle.length > 1000) {
                            basic.showDialog('Please enter title within max length limit of 1000 symbols.', '', true);
                        } else if ($('.event-label').val().trim() != '' && $('.event-color').val().trim() == '') {
                            basic.showDialog('You have entered label value, but you did not select label color.', '', true);
                        } else if ($('.event-label').val().trim() == '' && $('.event-color').val().trim() != '') {
                            basic.showDialog('You have entered label color, but you did not select label value.', '', true);
                        } else {
                            if ($('.sortable-container').hasClass('hide')) {
                                $('.sortable-container').removeClass('hide');
                                $('.no-pairs').addClass('hide');
                            }

                            var time = (new Date()).getTime();
                            var eventLabel = '';
                            var eventLabelColor = '';
                            var eventChecked = '<div><label>Checked:</label> No</div>';
                            var eventBorder = '<div><label>Bottom border:</label> No</div>';
                            if ($('.event-label').val().trim() != '') {
                                eventLabel = '<div><label>Label:</label> '+$('.event-label').val().trim()+'</div><input type="hidden" name="events['+time+'][label]" value="'+$('.event-label').val().trim()+'"/>';
                            }

                            if ($('.event-color').val().trim() != '') {
                                eventLabelColor = '<div><label>Label color:</label> <span style="display: inline-block; width: 30px; height: 30px; background-color: '+$('.event-color').val().trim()+';"></span></div><input type="hidden" name="events['+time+'][color]" value="'+$('.event-color').val().trim()+'"/>';
                            }

                            if ($('.event-checked').is(':checked')) {
                                eventChecked = '<div><label>Checked:</label> Yes</div><input type="hidden" name="events['+time+'][checked]" value="true"/>';
                            }

                            if ($('.event-border').is(':checked')) {
                                eventBorder = '<div><label>Bottom border:</label> Yes</div><input type="hidden" name="events['+time+'][border]" value="true"/>';
                            }

                            if ($('.event-coin-burn').is(':checked')) {
                                eventBorder = '<div><label>Coin burn:</label> Yes</div><input type="hidden" name="events['+time+'][coin-burn]" value="true"/>';
                            }

                            $('.sortable-container').append('<div class="single-child clearfix"><div style="float: left;"><div><label>Title:</label> '+roadmapEventTitle+'</div>'+eventLabel+eventLabelColor+eventChecked+eventBorder+'</div><div style="float: right;"><a href="javascript:void(0);" class="btn remove-event">Remove</a><input type="hidden" name="events['+time+'][title]" class="event-'+time+'"/></div></div>');

                            $('.event-'+time).val(roadmapEventTitle);

                            CKEDITOR.instances['event-title'].setData('');
                            $('.event-label').val('');
                            $('.event-checked').prop('checked', false);
                            $('.event-border').prop('checked', false);
                            if ($('[name="predefined-color"]').length) {
                                $('[name="predefined-color"]').prop('checked', false);
                            }

                            $('.event-color').val('');
                            initColorPicker();
                        }
                    });
                }
            },
            view_dcn_hub: async function () {
                if ($('body').hasClass('view-dcn-hub'))   {
                    if ($('.add-hub-element').length) {
                        $('.add-hub-element').click(function() {
                            if ($('select.all-hub-elements option:selected').attr('value') != undefined) {
                                var selectedOption = $('select.all-hub-elements option:selected');
                                var imgHtml = '';
                                if (selectedOption.attr('data-image') != undefined) {
                                    imgHtml = '<img src="/assets/uploads/'+selectedOption.attr('data-image')+'" style="margin-right: 15px;width: 100px;"/>';
                                }

                                $.ajax({
                                    type: 'POST',
                                    url: SITE_URL + '/dcn-hub-elements/add-dcn-element-to-dcn-hub/'+$('select.all-hub-elements').attr('data-dcn-hub')+'/'+selectedOption.val(),
                                    dataType: 'json',
                                    headers: {
                                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                    },
                                    success: function (response) {
                                        if (response.success) {
                                            selectedOption.addClass('hide');
                                            $('.sortable-container').append('<div class="single-child" data-id="'+selectedOption.val()+'">'+imgHtml+selectedOption.html()+'<div style="float: right;"><a href="'+SITE_URL+'/dcn-hub-elements/edit/'+selectedOption.val()+'" target="_blank" class="btn">Edit</a> <a href="'+SITE_URL+'/dcn-hub-elements/remove-dcn-element-from-dcn-hub/'+$('select.all-hub-elements').attr('data-dcn-hub')+'/'+selectedOption.val()+'" onclick="return confirm(\'Are you sure you want to delete this resource?\')" class="btn">Remove</a></div></div>');

                                            var changedValue = false;
                                            for (var i = 0, len = $('select.all-hub-elements option[value]').length; i < len; i+=1) {
                                                if (!$('select.all-hub-elements option[value]').eq(i).hasClass('hide')) {
                                                    $('select.all-hub-elements').val($('select.all-hub-elements option[value]').eq(i).val());
                                                    changedValue = true;
                                                    break;
                                                }
                                            }

                                            if (!changedValue) {
                                                $('select.all-hub-elements').prop('selectedIndex', 0);
                                            }
                                        } else {
                                            basic.showAlert(response.error, '', true);
                                        }
                                    }
                                });
                            } else {
                                basic.showAlert('Please select hub element.', '', true);
                            }
                        });
                    }
                }
            },
            add_edit_dcn_hub_element: async function () {
                if ($('body').hasClass('add-dcn-hub-element') || $('body').hasClass('edit-dcn-hub-element'))   {
                    if ($('body').hasClass('add-dcn-hub-element')) {
                        $("input[name='title']").on('input', function()    {
                            $("input[name='slug']").val(generateUrl($(this).val()));
                        });
                    }

                    $("input[name='type']").on('change', function()    {
                        if ($(this).val() == 'folder') {
                            $('.if-folder-type').removeClass('hide');
                        } else {
                            $('.if-folder-type').addClass('hide');
                        }
                    });

                    $(document).on('click', '.remove-hub-element', function() {
                        $(this).closest('.single-child').remove();
                    });

                    $('.add-hub-element-to-folder').click(function() {
                        if ($('select.all-hub-elements option:selected').attr('value') != undefined) {
                            var selectedOption = $('select.all-hub-elements option:selected');
                            var imgHtml = '';
                            if (selectedOption.attr('data-image') != undefined) {
                                imgHtml = '<img src="/assets/uploads/'+selectedOption.attr('data-image')+'" style="margin-right: 15px;width: 100px;"/>';
                            }

                            if ($('.content').attr('data-post') != undefined) {
                                // if editing
                                $.ajax({
                                    type: 'POST',
                                    url: SITE_URL + '/dcn-hub-elements/add-dcn-element-to-folder/'+$('select.all-hub-elements').attr('data-dcn-folder')+'/'+selectedOption.val(),
                                    dataType: 'json',
                                    headers: {
                                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                    },
                                    success: function (response) {
                                        if (response.success) {
                                            selectedOption.addClass('hide');

                                            $('.sortable-container').append('<div class="single-child" data-id="'+selectedOption.val()+'">'+imgHtml+selectedOption.html()+'<div style="float: right;"><a href="'+SITE_URL+'/dcn-hub-elements/edit/'+selectedOption.val()+'" target="_blank" class="btn">Edit</a> <a href="'+SITE_URL+'/dcn-hub-elements/remove-dcn-element-from-folder/'+$('select.all-hub-elements').attr('data-dcn-folder')+'/'+selectedOption.val()+'" onclick="return confirm(\'Are you sure you want to delete this resource?\')" class="btn">Remove</a></div></div>');
                                        } else {
                                            basic.showAlert(response.error, '', true);
                                        }
                                    }
                                });
                            } else {
                                // if adding
                                $('.sortable-container').append('<div class="single-child" data-id="'+selectedOption.val()+'"><input type="hidden" name="sub_elements[]" value="'+selectedOption.val()+'"/>'+imgHtml+selectedOption.html()+'<div style="float: right;"><a href="'+SITE_URL+'/dcn-hub-elements/edit/'+selectedOption.val()+'" class="btn" target="_blank">Edit</a> <a href="javascript:void(0);" class="btn remove-hub-element">Remove</a></div></div>');
                            }
                        } else {
                            basic.showAlert('Please select hub element.', '', true);
                        }
                    });
                }
            },
            add_application: async function () {
                if ($('body').hasClass('add-application'))   {
                    $("input[name='title']").on('input', function()    {
                        $("input[name='slug']").val(generateUrl($(this).val()));
                    });
                }
            },
            deposit: async function () {
                if ($('body').hasClass('deposit'))   {
                    const {config_variable} = require('../config');
                    const ethers = require('../../../../node_modules/ethers');

                    if (window.ethereum) {
                        window.ethereum.on('chainChanged', function (chainId) {
                            if (parseInt(chainId, 16) == config_variable.l1.chain_id) {
                                initiateDepositPageLogic();
                            } else {
                                basic.showAlert('Before using this page please switch your MetaMask to L1 network.', '', true);
                            }
                        });

                        async function initiateDepositPageLogic() {
                            basic.closeDialog();
                            $('.response-layer').addClass('show-this');

                            var accountsOnEnable = await ethereum.request({method: 'eth_requestAccounts'});
                            if (accountsOnEnable.length) {
                                $('.connected-with').html('<i style="padding-bottom: 25px; display: block;">Connected with <b><a style="text-decoration: underline;" href="' + config_variable.etherscan_domain + '/address/' + accountsOnEnable[0] + '" target="_blank">' + accountsOnEnable[0] + '</a></b></i>');
                            }

                            const l1_provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
                            await l1_provider.send('eth_requestAccounts', []);
                            const l1Wallet = l1_provider.getSigner();

                            const factory__L1_ERC20 = new ethers.ContractFactory(config_variable.l1.abi_definitions.dcn_contract_abi, config_variable.l1.bytecodes.dcn_contract_bytecode);
                            const L1_ERC20 = new ethers.Contract(config_variable.l1.addresses.dcn_contract_address, factory__L1_ERC20.interface, l1Wallet);
                            const l1StandardBridgeArtifact = require(`../../../../node_modules/@eth-optimism/contracts/artifacts/contracts/L1/messaging/L1StandardBridge.sol/L1StandardBridge.json`);
                            const factory__L1StandardBridge = new ethers.ContractFactory(l1StandardBridgeArtifact.abi, l1StandardBridgeArtifact.bytecode);
                            const L1StandardBridge = factory__L1StandardBridge.connect(l1Wallet).attach(config_variable.l1.addresses.Proxy__OVM_L1StandardBridge);

                            $('.deposit-box .max-amount').html('Current L1 DCN balance: ' + await L1_ERC20.balanceOf(accountsOnEnable[0]));


                            async function initDepositHistory() {
                                var depositHistory = await L1StandardBridge.queryFilter(L1StandardBridge.filters.ERC20DepositInitiated(config_variable.l1.addresses.dcn_contract_address, config_variable.l2.addresses.dcn_contract_address, accountsOnEnable[0]));
                                if (depositHistory.length) {
                                    depositHistory.reverse();
                                    var depositHistoryHtml = '<div style="text-align: center; padding-bottom: 15px; font-size: 20px; font-weight: bold;">Deposit history</div><table class="table table-without-reorder table-bordered table-striped text-left"><thead><tr><th>Amount</th><th>Transaction hash</th></tr></thead><tbody>';
                                    for (var i = 0, len = depositHistory.length; i < len; i+=1) {
                                        depositHistoryHtml += '<tr><td>'+depositHistory[i].args._amount+' DCN</td><td><a href="'+config_variable.etherscan_domain+'/tx/'+depositHistory[i].transactionHash+'" target="_blank" class="btn">Etherscan</a></td></tr>';
                                    }
                                    depositHistoryHtml += '</table>';
                                    $('.deposit-history').html(depositHistoryHtml);
                                }
                            }
                            initDepositHistory();

                            var currentAllowance = parseInt(await L1_ERC20.allowance(accountsOnEnable[0], config_variable.l1.addresses.Proxy__OVM_L1StandardBridge));
                            $('.response-layer').removeClass('show-this');
                            if (currentAllowance > 0) {
                                $('.changeable-content').removeClass('hide');

                                $('.current-deposit').unbind().click(async function() {
                                    $('.response-layer').addClass('show-this');
                                    $('.changeable-content').addClass('hide');
                                    setTimeout(async function() {
                                        const tx2 = await L1StandardBridge.depositERC20(
                                            config_variable.l1.addresses.dcn_contract_address,
                                            config_variable.l2.addresses.dcn_contract_address,
                                            currentAllowance,
                                            2000000,
                                            '0x');
                                        await tx2.wait();
                                        basic.showAlert('Deposit transaction has been executed successfully! Tokens should be visible on L2 network soon ( as soon as the transaction receive over 50 block confirmations ). <a href="'+config_variable.etherscan_domain+'/tx/'+tx2.hash+'" target="_blank">Check transaction here.</a>', '', true);
                                        initDepositHistory();

                                        $('.deposit-box .max-amount').html('Current L1 DCN balance: ' + await L1_ERC20.balanceOf(accountsOnEnable[0]));
                                        depositL1DCNAction();
                                    }, 500);
                                });

                                $('.new-deposit').unbind().click(function() {
                                    $('.changeable-content').addClass('hide');

                                    depositL1DCNAction();
                                });
                            } else {
                                depositL1DCNAction();
                            }

                            function depositL1DCNAction() {
                                $('.deposit-box').removeClass('hide');
                                $('.deposit-btn').unbind().click(async function() {
                                    var currentL1DCNBalance = parseInt(await L1_ERC20.balanceOf(accountsOnEnable[0]));
                                    $('.deposit-box .max-amount').html('Current L1 DCN balance: ' + currentL1DCNBalance);

                                    var desiredAmountToDeposit = parseInt($('.l1-dcn-amount').val().trim());

                                    if (desiredAmountToDeposit > currentL1DCNBalance || desiredAmountToDeposit <= 10 || desiredAmountToDeposit == 0 || desiredAmountToDeposit == '') {
                                        basic.showAlert('Not enough L1 DCN balance in order to execute the deposit.', '', true);
                                    } else {
                                        $('.response-layer').addClass('show-this');
                                        setTimeout(async function() {
                                            const tx1 = await L1_ERC20.approve(config_variable.l1.addresses.Proxy__OVM_L1StandardBridge, desiredAmountToDeposit);
                                            await tx1.wait();
                                            console.log(tx1, 'tx1');
                                            $('.l1-dcn-amount').val('');

                                            var allowanceCheck = setInterval(async function() {
                                                console.log(parseInt(await L1_ERC20.allowance(accountsOnEnable[0], config_variable.l1.addresses.Proxy__OVM_L1StandardBridge)), 'allowance');
                                                if (parseInt(await L1_ERC20.allowance(accountsOnEnable[0], config_variable.l1.addresses.Proxy__OVM_L1StandardBridge)) == desiredAmountToDeposit) {
                                                    clearInterval(allowanceCheck);

                                                    const tx2 = await L1StandardBridge.depositERC20(
                                                        config_variable.l1.addresses.dcn_contract_address,
                                                        config_variable.l2.addresses.dcn_contract_address,
                                                        desiredAmountToDeposit,
                                                        2000000,
                                                        '0x');
                                                    await tx2.wait();
                                                    console.log(tx2, 'tx2');
                                                    
                                                    initDepositHistory();
                                                    $('.response-layer').removeClass('show-this');
                                                    basic.showAlert('Deposit transaction has been executed successfully! Tokens should be visible on L2 network soon ( as soon as the transaction receive over 50 block confirmations ). <a href="'+config_variable.etherscan_domain+'/tx/'+tx2.hash+'" target="_blank">Check transaction here.</a>', '', true);

                                                    $('.deposit-box .max-amount').html('Current L1 DCN balance: ' + await L1_ERC20.balanceOf(accountsOnEnable[0]));
                                                }
                                            }, 1000);
                                        }, 500);
                                    }
                                });
                            }
                        }

                        var chainId = await ethereum.request({method: 'eth_chainId'});
                        if (parseInt(chainId, 16) == config_variable.l1.chain_id) {
                            initiateDepositPageLogic();
                        } else {
                            basic.showAlert('Before using this page please switch your MetaMask to L1 network.', '', true);
                        }
                    } else {
                        basic.showAlert('Before using this page please download MetaMask and login into the extension.', '', true);
                    }
                }
            },
            withdraw: async function () {
                if ($('body').hasClass('withdraw'))   {
                    const {config_variable} = require('../config');
                    const ethers = require('../../../../node_modules/ethers');

                    if (window.ethereum) {
                        window.ethereum.on('chainChanged', function (chainId) {
                            if (parseInt(chainId, 16) == config_variable.l2.chain_id) {
                                initiateWithdrawPageLogic();
                            } else {
                                basic.showAlert('Before using this page please switch your MetaMask to L2 network.', '', true);
                            }
                        });

                        async function initiateWithdrawPageLogic() {
                            basic.closeDialog();
                            // $('.response-layer').addClass('show-this');

                            var accountsOnEnable = await ethereum.request({method: 'eth_requestAccounts'});
                            if (accountsOnEnable.length) {
                                $('.connected-with').html('<i style="padding-bottom: 25px; display: block;">Connected with <b><a style="text-decoration: underline;" href="' + config_variable.etherscan_domain + '/address/' + accountsOnEnable[0] + '" target="_blank">' + accountsOnEnable[0] + '</a></b></i>');
                            }

                            const l2_provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
                            await l2_provider.send('eth_requestAccounts', []);
                            const l2Wallet = l2_provider.getSigner();

                            const factory__L2_ERC20 = new ethers.ContractFactory(config_variable.l2.abi_definitions.dcn_contract_abi, config_variable.l2.bytecodes.dcn_contract_bytecode);
                            const L2_ERC20 = new ethers.Contract(config_variable.l2.addresses.dcn_contract_address, factory__L2_ERC20.interface, l2Wallet);
                            const l2StandardBridgeArtifact = require(`../../../../node_modules/@eth-optimism/contracts/artifacts/contracts/L2/messaging/L2StandardBridge.sol/L2StandardBridge.json`);
                            const factory__L2StandardBridge = new ethers.ContractFactory(l2StandardBridgeArtifact.abi, l2StandardBridgeArtifact.bytecode);
                            const L2StandardBridge = factory__L2StandardBridge.connect(l2Wallet).attach(config_variable.l2.addresses.OVM_L2StandardBridge_address);

                            $('.withdraw-box .max-amount').html('Current L2 DCN balance: ' + await L2_ERC20.balanceOf(accountsOnEnable[0]));
                            $('.withdraw-btn').click(async function() {
                                var currentL2DCNBalance = parseInt(await L2_ERC20.balanceOf(accountsOnEnable[0]));
                                $('.withdraw-box .max-amount').html('Current L2 DCN balance: ' + currentL2DCNBalance);

                                var desiredAmountToWithdraw = parseInt($('.l2-dcn-amount').val().trim());
                                if (desiredAmountToWithdraw > currentL2DCNBalance || desiredAmountToWithdraw <= 10 || desiredAmountToWithdraw == 0 || desiredAmountToWithdraw == '') {
                                    basic.showAlert('Not enough L2 DCN balance in order to execute the withdraw.', '', true);
                                } else {
                                    const tx3 = await L2StandardBridge.withdraw(
                                        config_variable.l2.addresses.dcn_contract_address,
                                        desiredAmountToWithdraw,
                                        2000000,
                                        '0x'
                                    );
                                    await tx3.wait();
                                    console.log(tx3, 'tx3');

                                    $('.l2-dcn-amount').val('');
                                    basic.showAlert('Withdrawing DCN2.0 to DCN takes about a week. This is the standard process on the Optimistic Ethereum mainnet. Track the status of your withdraw <a href="'+config_variable.optimism_etherscan_domain+'/messagerelayer?search='+tx3.hash+'" target="_blank" style="font-weight: bold; text-decoration: underline;">here</a>', '', true);
                                    $('.withdraw-box .max-amount').html('Current L2 DCN balance: ' + await L2_ERC20.balanceOf(accountsOnEnable[0]));
                                    initWithdrawHistory();
                                }
                            });

                            async function initWithdrawHistory() {
                                var withdrawHistory = await L2StandardBridge.queryFilter(L2StandardBridge.filters.WithdrawalInitiated(config_variable.l1.addresses.dcn_contract_address, config_variable.l2.addresses.dcn_contract_address, accountsOnEnable[0]));
                                if (withdrawHistory.length) {
                                    withdrawHistory.reverse();
                                    var withdrawHistoryHtml = '<div style="text-align: center; padding-bottom: 15px; font-size: 20px; font-weight: bold;">Withdraw history</div><table class="table table-without-reorder table-bordered table-striped text-left"><thead><tr><th>Amount</th><th>Transaction hash</th><th>Action</th></tr></thead><tbody>';
                                    for (var i = 0, len = withdrawHistory.length; i < len; i+=1) {
                                        withdrawHistoryHtml += '<tr><td>'+withdrawHistory[i].args._amount+' DCN</td><td><a href="'+config_variable.optimism_etherscan_domain+'/tx/'+withdrawHistory[i].transactionHash+'" target="_blank" class="btn">Etherscan</a></td><td><a href="'+config_variable.optimism_etherscan_domain+'/messagerelayer?search='+withdrawHistory[i].transactionHash+'" target="_blank" class="btn">Complete withdraw</a></td></tr>';
                                    }
                                    withdrawHistoryHtml += '</table>';
                                    $('.withdraw-history').html(withdrawHistoryHtml);
                                }
                            }
                            initWithdrawHistory();
                        }

                        var chainId = await ethereum.request({method: 'eth_chainId'});
                        if (parseInt(chainId, 16) == config_variable.l2.chain_id) {
                            initiateWithdrawPageLogic();
                        } else {
                            basic.showAlert('Before using this page please switch your MetaMask to L2 network.', '', true);
                        }
                    } else {
                        basic.showAlert('Before using this page please download MetaMask and login into the extension.', '', true);
                    }
                }
            }
        }
    }
};

if ($('body').hasClass('logged-in')) {
    projectData.pages.logged_in();
}