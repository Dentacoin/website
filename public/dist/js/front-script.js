<<<<<<< HEAD
var basic={cookies:{set:function(e,t){null==e&&(e="cookieLaw"),null==t&&(t=1);var o=new Date;o.setTime(o.getTime()+864e7);var a="expires="+o.toUTCString();document.cookie=e+"="+t+"; "+a+";domain=.dentacoin.com;path=/;secure","cookieLaw"==e&&$(".cookies_popup").slideUp()},erase:function(e){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"},get:function(e){if(null==e)e="cookieLaw";e+="=";for(var t=document.cookie.split(";"),o=0;o<t.length;o++){for(var a=t[o];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(e))return a.substring(e.length,a.length)}return""}},fixBodyModal:function(){$(".modal-dialog").length>0&&!$("body").hasClass("modal-open")&&$("body").addClass("modal-open")},fixZIndexBackdrop:function(){if(jQuery(".bootbox").length>1){var e=jQuery(".bootbox").eq(jQuery(".bootbox").length-2).css("z-index");jQuery(".bootbox").last().css({"z-index":e+2}).next(".modal-backdrop").css({"z-index":e+1})}},showAlert:function(e,t,o){basic.realShowDialog(e,"alert",t,null,null,o)},showConfirm:function(e,t,o,a){basic.realShowDialog(e,"confirm",t,o,null,a)},showDialog:function(e,t,o,a,n){void 0===o&&(o=null),void 0===n&&(n=null),basic.realShowDialog(e,"dialog",t,n,o,a)},realShowDialog:function(message,dialog_type,class_name,params,type,vertical_center){void 0===class_name&&(class_name=""),void 0===type&&(type=null),void 0===vertical_center&&(vertical_center=null);var atrs={message:message,animate:!1,show:!1,className:class_name};if("confirm"==dialog_type&&null!=params&&null==params.buttons&&(atrs.buttons={confirm:{label:"Yes",className:"btn-success"},cancel:{label:"No",className:"btn-danger"}}),null!=params)for(var key in params)console.log(key,"key"),atrs[key]=params[key],console.log(key,"key"),console.log(params[key],"params[key]");var dialog=eval("bootbox."+dialog_type)(atrs);dialog.on("hidden.bs.modal",function(){basic.fixBodyModal(),null!=type&&("media-inquries"==type?$(".press-center-container .subtitle .open-form").focus():$('.single-application figure[data-slug="'+type+'"]').parent().focus())}),dialog.on("shown.bs.modal",function(){null!=vertical_center&&basic.verticalAlignModal(),basic.fixZIndexBackdrop()}),dialog.modal("show")},verticalAlignModal:function(e){$("body .modal-dialog").each(function(){$(this).css("margin-top",Math.max(20,($(window).height()-$(this).height())/2))})},closeDialog:function(){bootbox.hideAll()},validateEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},validatePhone:function(e){return/^[\d\.\-]+$/.test(e)},validateUrl:function(e){return!!new RegExp("((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)},hasNumber:function(e){return/\d/.test(e)},hasLowerCase:function(e){return/[a-z]/.test(e)},hasUpperCase:function(e){return/[A-Z]/.test(e)},validatePassword:function(e){return e.trim().length>=8&&e.trim().length<=30&&basic.hasLowerCase(e)&&basic.hasUpperCase(e)&&basic.hasNumber(e)},isInViewport:function(e,t){if(null!=t)var o=$(e).offset().top+t;else o=$(e).offset().top;var a=o+$(e).outerHeight(),n=$(window).scrollTop(),i=n+$(window).height();return a>n&&o<i},isMobile:function(){var e=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(e=!0),e},getMobileOperatingSystem:function(){var e=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(e)?"Windows Phone":/android/i.test(e)?"Android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"iOS":/(Mac|iPhone|iPod|iPad)/.test(e)&&!window.MSStream?"Mac":"unknown"},addCsrfTokenToAllAjax:function(){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}})},isJsonString:function(e){try{JSON.parse(e)}catch(e){return!1}return!0},bytesToMegabytes:function(e){return e/Math.pow(1024,2)},property_exists:function(e,t){return!!e&&hasOwnProperty.call(e,t)},getGETParameters:function(){var e=window.location.search.substr(1);return null!=e&&""!=e?basic.transformToAssocArray(e):{}},transformToAssocArray:function(e){for(var t={},o=e.split("&"),a=0,n=o.length;a<n;a+=1){var i=o[a].split("=");t[i[0]]=i[1]}return t},stopMaliciousInspect:function(){document.addEventListener("contextmenu",function(e){e.preventDefault()}),document.onkeydown=function(e){return 123!=event.keyCode&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="I".charCodeAt(0))&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="C".charCodeAt(0))&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="J".charCodeAt(0))&&((!e.ctrlKey||e.keyCode!="U".charCodeAt(0))&&void 0))))}},customValidateWalletAddress:function(){return/^(0x){1}[0-9a-fA-F]{40}$/i.test(address)},initCustomCheckboxes:function(e,t){null==typeof e?e="":e+=" ",null==t&&(t="prepend");for(var o=0,a=jQuery(e+".custom-checkbox-style").length;o<a;o+=1)jQuery(e+".custom-checkbox-style").eq(o).hasClass("already-custom-style")||(jQuery(e+".custom-checkbox-style").eq(o).find('input[type="checkbox"]').is(":checked")?"prepend"==t?jQuery(e+".custom-checkbox-style").eq(o).prepend('<label for="'+jQuery(e+".custom-checkbox-style").eq(o).find('input[type="checkbox"]').attr("id")+'" class="custom-checkbox">✓</label>'):"append"==t&&jQuery(e+".custom-checkbox-style").eq(o).append('<label for="'+jQuery(e+".custom-checkbox-style").eq(o).find('input[type="checkbox"]').attr("id")+'" class="custom-checkbox">✓</label>'):jQuery(e+".custom-checkbox-style").eq(o).prepend('<label for="'+jQuery(e+".custom-checkbox-style").eq(o).find('input[type="checkbox"]').attr("id")+'" class="custom-checkbox"></label>'),jQuery(e+".custom-checkbox-style").eq(o).addClass("already-custom-style"));jQuery(e+".custom-checkbox-style .custom-checkbox-input").unbind("change").on("change",function(){if(!jQuery(this).closest(".custom-checkbox-style").hasClass("predefined")&&(jQuery(this).is(":checked")?jQuery(this).closest(e+".custom-checkbox-style").find(".custom-checkbox").html("✓"):jQuery(this).closest(e+".custom-checkbox-style").find(".custom-checkbox").html(""),null!=jQuery(this).attr("data-radio-group")))for(var t=0,o=jQuery('[data-radio-group="'+jQuery(this).attr("data-radio-group")+'"]').length;t<o;t+=1)jQuery(this).is(jQuery('[data-radio-group="'+jQuery(this).attr("data-radio-group")+'"]').eq(t))||(jQuery('[data-radio-group="'+jQuery(this).attr("data-radio-group")+'"]').eq(t).prop("checked",!1),jQuery('[data-radio-group="'+jQuery(this).attr("data-radio-group")+'"]').eq(t).closest(e+".custom-checkbox-style").find(".custom-checkbox").html(""))})},dynamicSortArrayByKey:function(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(o,a){return(o[e]<a[e]?-1:o[e]>a[e]?1:0)*t}}};

console.log('Don\'t touch the code. Or do ... ¯\\_(ツ)_/¯');

var allowedImagesExtensions = ['png', 'jpg', 'jpeg'];
var allowedDocumentExtensions = ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'odt', 'rtf'];
var get_params = basic.getGETParameters();
var loadedLibs = {};
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var christmasCalendarYear = 2020;

$(window).on('load', function () {
    if (($('body').hasClass('home') && !$('body').hasClass('logged-in')) || ($('body').hasClass('logged-in') && $('body').hasClass('foundation'))) {
        var current_url = new URL(window.location.href);
        if (current_url.searchParams.get('application') != null) {
            scrollToSectionAnimation('two', null, true);

            setTimeout(function () {
                $('.dentacoin-ecosystem .single-application figure[data-slug="' + current_url.searchParams.get('application') + '"]').click();
            }, 500)
        } else if (current_url.searchParams.get('payment') != null && current_url.searchParams.get('payment') == 'bidali-gift-cards') {
            $('html').animate({
                scrollTop: $('.wallet-app-and-gif').offset().top
            }, {
                duration: 500,
                complete: function () {
                    setTimeout(function () {
                        $('#bidali-init-btn').click();
                    }, 1000);
                }
            });
        } else if (current_url.searchParams.get('section') != null && current_url.searchParams.get('section') == 'buy-dentacoin') {
            $('html').animate({
                scrollTop: $('.buy-dentacoin').offset().top
            }, {
                duration: 500
            });
        }
    }

    if ($('body.corporate-design').length > 0) {
        var drawCorporateDesignLine = false;
        $('body').addClass('overflow-hidden');
        if ($(window).width() > 768) {
            drawCorporateDesignLine = true;
        }
        $('body').removeClass('overflow-hidden');

        if (drawCorporateDesignLine) {
            drawNavToBottomSectionLine();
        }
    }
});

$(window).on('scroll', function () {
    projectData.general_logic.data.loadDeferResources();
});

$(window).on('resize', function () {
    if ($('body').hasClass('testimonials')) {
        //TESTIMONIALS
        initListingPageLine();
    } else if ($('body').hasClass('press-center')) {
        //PRESS CENTER
        initListingPageLine();
    } else if ($('body.careers.allow-draw-lines').length > 0) {
        //CAREERSdentacoin-ecosystem
        drawHeaderToFirstSectionLine();
    } else if ($('body.corporate-design').length > 0) {
        //CORPORATE DESIGN
        var drawCorporateDesignLine = false;
        $('body').addClass('overflow-hidden');
        if ($(window).width() > 768) {
            drawCorporateDesignLine = true;
        }
        $('body').removeClass('overflow-hidden');

        if (drawCorporateDesignLine) {
            drawNavToBottomSectionLine();
        }
    }
});

// ==================== PAGES ====================

var projectData = {
    pages: {
        not_logged_in: function () {
            projectData.pages.data.homepage();
            projectData.pages.data.users(true);
            projectData.pages.data.dentists(true);
            projectData.pages.data.traders(true);
            projectData.pages.data.testimonials();
            projectData.pages.data.corporateDesign();
            projectData.pages.data.claimDentacoin();
            projectData.pages.data.careers();
            projectData.pages.data.team();
            projectData.pages.data.pressCenter();
            projectData.pages.data.howToCreateWallet();
        },
        logged_in: function() {
            projectData.pages.data.homepage();
            projectData.pages.data.users(true);
            projectData.pages.data.dentists(true);
            projectData.pages.data.traders(true);
            projectData.pages.data.testimonials();
            projectData.pages.data.corporateDesign();
            projectData.pages.data.careers();
            projectData.pages.data.team();
            projectData.pages.data.pressCenter();
            projectData.pages.data.howToCreateWallet();
            projectData.pages.data.christmasCalendar();
        },
        data: {
            homepage: async function() {
                if ($('body').hasClass('home') || ($('body').hasClass('foundation') && $('body').hasClass('logged-in'))) {
                    projectData.general_logic.data.showLoader();

                    $('.blank-container').height($(window).height());

                    setTimeout(async function() {
                        var usersPageData = '';
                        var dentistsPageData = '';
                        var tradersPageData = '';

                        var takeHomepageDataResponse = await projectData.requests.takeHomepageData();
                        console.log(takeHomepageDataResponse, 'takeHomepageDataResponse');

                        if (takeHomepageDataResponse.success) {
                            projectData.general_logic.data.hideLoader();
                            projectData.general_logic.data.showStickyHomepageNav();

                            usersPageData = takeHomepageDataResponse.data.usersPageData;
                            dentistsPageData = takeHomepageDataResponse.data.dentistsPageData;
                            tradersPageData = takeHomepageDataResponse.data.tradersPageData;

                            $('.call-users-page').click(function() {
                                if ($('.hide-homepage-data').length && !$('.hide-homepage-data').hasClass('hide')) {
                                    $('.hide-homepage-data').addClass('hide');
                                    $('.hide-on-users-category-selected').removeClass('hide');
                                }
                                projectData.general_logic.data.slideInUsersContent(usersPageData);
                            });

                            $('.call-dentists-page').click(function() {
                                if ($('.hide-homepage-data').length && !$('.hide-homepage-data').hasClass('hide')) {
                                    $('.hide-homepage-data').addClass('hide');
                                    $('.hide-on-users-category-selected').removeClass('hide');
                                }
                                projectData.general_logic.data.slideInDentistsContent(dentistsPageData);
                            });

                            $('.call-traders-page').click(function() {
                                if ($('.hide-homepage-data').length && !$('.hide-homepage-data').hasClass('hide')) {
                                    $('.hide-homepage-data').addClass('hide');
                                    $('.hide-on-users-category-selected').removeClass('hide');
                                }
                                projectData.general_logic.data.slideInTradersContent(tradersPageData);
                            });
                        } else {
                            $('.section-homepage-nav .single-element a').click(function() {
                                basic.closeDialog();
                                basic.showAlert('Something went wrong. Please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a> with description of the problem.', '', true);
                            });
                        }
                    }, 2000);
                }
            },
            users: async function(bodyClassCheck) {
                if (bodyClassCheck != undefined) {
                    if (!$('body').hasClass('users')) {
                        return false;
                    }
                }

                $('.blank-container').height($(window).height());

                projectData.general_logic.data.setChangeableVideos();

                // adjust header to black style
                $('header .white-black-btn').removeClass('white-black-btn').addClass('black-white-btn');
                $('header .logo-container img').attr('src', ' /assets/images/logo.svg');
                if ($('.color-white-on-page-switch').length) {
                    $('.color-white-on-page-switch').addClass('color-white');
                }

                // remove footer black style
                if ($('footer').hasClass('black-style')) {
                    $('footer').removeClass('black-style');
                    for (var i = 0, len = $('.socials ul li a img').length; i < len; i+=1) {
                        var currentSocial = $('.socials ul li a img').eq(i);
                        currentSocial.attr('src', currentSocial.attr('data-default-src')).attr('alt', currentSocial.attr('data-default-alt'));
                    }
                }

                // add intro section animation
                $('.section-wait-until-user-page .hidden-picture img').addClass('animated');

                projectData.general_logic.data.hideStickyHomepageNav();
                projectData.general_logic.data.showStickySubpagesNav();

                if ($('#append-big-hub-dentacoin').length) {
                    var bigHubInit = true;
                    // if on load the view is scrolled to the twitter section
                    if (basic.isInViewport($('#append-big-hub-dentacoin'))) {
                        bigHubInit = false;
                        initBigHub();
                    }

                    $(window).on('scroll', function() {
                        if (bigHubInit && basic.isInViewport($('#append-big-hub-dentacoin'))) {
                            bigHubInit = false;
                            initBigHub();
                        }
                    });
                    
                    async function initBigHub() {
                        if (!hasOwnProperty.call(loadedLibs, 'bigHubStyle')) {
                            if (isFirefox) {
                                $('head').append('<link rel="stylesheet" type="text/css" href="/assets/libs/dentacoin-package/css/styles-big-hub.css?v='+new Date().getTime()+'"/>');
                            } else {
                                $('head').append('<link rel="preload" as="style" onload="this.rel=\'stylesheet\'" type="text/css" href="/assets/libs/dentacoin-package/css/styles-big-hub.css?v='+new Date().getTime()+'"/>');
                            }
                            loadedLibs.bigHubStyle = true;
                        }

                        if (!hasOwnProperty.call(loadedLibs, 'dentacoinPackageJs')) {
                            await $.getScript('/assets/libs/dentacoin-package/js/init.js?v='+new Date().getTime(), function() {});
                            loadedLibs.dentacoinPackageJs = true;
                        }

                        var bigHubParams = {
                            'element_id_to_append' : 'append-big-hub-dentacoin',
                            'type_hub' : 'dentacoin',
                            'local_environment' : 'https://dentacoin.com'
                        };

                        dcnHub.initBigHub(bigHubParams);
                    }
                }

                $('body').addClass('overflow-hidden');
                if ($(window).width() < 767) {
                    $('.class-video-container').html('<div class="black-border-left margin-top-20 padding-left-10"><h3 class="fs-22 lato-black">PATIENTS</h3><div class="fs-18">Earn rewards for reviews, surveys, better oral hygiene and reduce your dental costs!</div></div><figure class="padding-top-15 padding-bottom-15 text-center" itemscope="" itemtype="http://schema.org/ImageObject"><img alt="Patient dentist triangle" class="max-width-400 width-100 margin-0-auto" src="/assets/uploads/dentacoin-dentist-patient-ecosystem.png" itemprop="contentUrl"></figure><div class="black-border-right padding-right-10 text-right"><h3 class="fs-22 lato-black">DENTISTS</h3><div class="fs-18">Earn rewards for reviews, surveys, better oral hygiene and reduce your dental costs!</div></div><figure class="padding-top-25 padding-bottom-10 text-center" itemscope="" itemtype="http://schema.org/ImageObject"><img alt="Dentacoin currency" class="max-width-80 width-100 margin-0-auto" src="/assets/uploads/dcn-coin.svg" itemprop="contentUrl"><figcaption class="fs-18"><span class="display-block fs-22 lato-black padding-bottom-5">Dentacoin Currency</span>An Ethereum-based utility token, used for rewards, payments, and exchange within and beyond the  dental industry.</figcaption></figure><figure class="padding-top-25 padding-bottom-10 text-center" itemscope="" itemtype="http://schema.org/ImageObject"><img alt="Dentacoin Apps" class="max-width-80 width-100 margin-0-auto" src="/assets/uploads/dcn-phone-apps.svg" itemprop="contentUrl"><figcaption class="fs-18"><span class="display-block fs-22 lato-black padding-bottom-5">Dentacoin Apps</span>Promoting better oral health and rewarding users for submitting feedback, taking surveys, maintaining oral hygiene.</figcaption></figure><figure class="padding-top-25 padding-bottom-10 text-center" itemscope="" itemtype="http://schema.org/ImageObject"><img alt="Dentacoin Assurance" class="max-width-80 width-100 margin-0-auto" src="/assets/uploads/dcn-assurance.svg" itemprop="contentUrl"><figcaption class="fs-18"><span class="display-block fs-22 lato-black padding-bottom-5">Dentacoin Assurance</span>The first smart contract-based dental assurance plan, focused on prevention and paid exclusively in DCN currency.</figcaption></figure>');
                } else {
                    var videoPlayed = false;
                    $(window).on('scroll', function () {
                        if ($('.patient-dentist-triangle-video').length) {
                            if (basic.isInViewport($('.patient-dentist-triangle-video'), 200) && !videoPlayed) {
                                videoPlayed = true;

                                var videoFormat = 'webm';
                                if (basic.getMobileOperatingSystem() == 'iOS' || basic.getMobileOperatingSystem() == 'Mac') {
                                    videoFormat = 'mp4';

                                    $('.patient-dentist-triangle-video [itemprop="contentURL"]').attr('href', 'https://dentacoin.com/assets/uploads/patient-dentist-triangle-animation.'+videoFormat+'"');
                                }

                                var videoAttr = 'muted="muted" autoplay';
                                if (basic.getMobileOperatingSystem() == 'iOS') {
                                    videoAttr += ' playsinline';
                                }

                                $('.patient-dentist-triangle-video').prepend('<video '+videoAttr+'><source src="/assets/uploads/patient-dentist-triangle-animation.'+videoFormat+'" type="video/'+videoFormat+'"> Your browser does not support HTML5 video.</video>');
                            }
                        }
                    });
                }
                $('body').removeClass('overflow-hidden');

                await projectData.general_logic.data.videoExpressionsSlider('users');
                await projectData.general_logic.data.userExpressionsSlider('users');

                var mapVisible = false;
                function loadMap() {
                    if ($('.section-google-map.module').length) {
                        if (basic.isInViewport($('.section-google-map.module'), 200) && !mapVisible) {
                            console.log('LOAD MAP');
                            mapVisible = true;

                            projectData.general_logic.data.dentacoinGoogleMap();
                        }
                    }
                }

                $(window).unbind('scroll', loadMap);
                $(window).bind('scroll', loadMap);
            },
            dentists: async function(bodyClassCheck) {
                if (bodyClassCheck != undefined) {
                    if (!$('body').hasClass('dentists')) {
                        return false;
                    }
                }

                $('.blank-container').height($(window).height());

                projectData.general_logic.data.setChangeableVideos();

                // add intro section animation
                $('.section-the-era-dentist-page .hidden-picture img').addClass('animated');

                // adjust header to white style
                $('header .black-white-btn').removeClass('black-white-btn').addClass('white-black-btn');
                $('header .logo-container img').attr('src', ' /assets/images/logo.svg');
                if ($('.color-white-on-page-switch').length && $('.color-white-on-page-switch').hasClass('color-white')) {
                    $('.color-white-on-page-switch').removeClass('color-white');
                }

                // adjust footer to white style
                if ($('footer').hasClass('black-style')) {
                    $('footer').removeClass('black-style');
                    for (var i = 0, len = $('.socials ul li a img').length; i < len; i+=1) {
                        var currentSocial = $('.socials ul li a img').eq(i);
                        if (currentSocial.attr('src')) {
                            // means scroll reached footer and socials are already loaded
                            currentSocial.attr('src', currentSocial.attr('data-default-src')).attr('alt', currentSocial.attr('data-default-alt'));
                        } else {
                            currentSocial.attr('data-defer-src', currentSocial.attr('data-default-src')).attr('alt', currentSocial.attr('data-default-alt'));
                        }
                    }
                }

                projectData.general_logic.data.hideStickyHomepageNav();
                projectData.general_logic.data.showStickySubpagesNav();

                if ($('.benefits-row').length && $('.benefits-row video').length) {
                    var videosPlayed = false;
                    $(window).on('scroll', function () {
                        if ($('.benefits-row').length) {
                            if (basic.isInViewport($('.benefits-row'), 200) && !videosPlayed) {
                                videosPlayed = true;

                                for (var i = 0, len = $('.benefits-row video').length; i < len; i+=1) {
                                    $('.benefits-row video').get(i).play();
                                }

                                $('.section-list-with-benefits-dentists-page .white-purple-btn.with-white-arrow').addClass('animated');
                                setTimeout(function() {
                                    $('.section-list-with-benefits-dentists-page .white-purple-btn.with-white-arrow').removeClass('animated').addClass('hover-effect');
                                }, 2000);
                            }
                        }
                    });
                }

                await projectData.general_logic.data.videoExpressionsSlider('dentists');
                await projectData.general_logic.data.userExpressionsSlider('dentists');

                var mapVisible = false;
                function loadMap() {
                    if ($('.section-google-map.module').length) {
                        if (basic.isInViewport($('.section-google-map.module'), 200) && !mapVisible) {
                            console.log('LOAD MAP');
                            mapVisible = true;

                            projectData.general_logic.data.dentacoinGoogleMap();
                        }
                    }
                }

                $(window).unbind('scroll', loadMap);
                $(window).bind('scroll', loadMap);
            },
            traders: async function(bodyClassCheck) {
                if (bodyClassCheck != undefined) {
                    if (!$('body').hasClass('traders')) {
                        return false;
                    }
                }

                $('.blank-container').height($(window).height());

                projectData.general_logic.data.setChangeableVideos();

                // if exchange bullets exist bind them logic to show/ hide exchanges
                /*if ($('.exchanges-bullets').length) {
                    $('.exchanges-bullets a').click(function() {
                        $('.exchanges-bullets a').removeClass('active');
                        $(this).addClass('active');

                        $('.mobile-exchanges .mobile-extra-row').removeClass('active');
                        $('.mobile-exchanges .mobile-extra-row[data-bullet="'+$(this).attr('data-bullet')+'"]').addClass('active');
                    });
                }*/

                if ($('.mobile-exchanges').length) {
                    // load slick lib
                    if (!hasOwnProperty.call(loadedLibs, 'slick')) {
                        if (isFirefox) {
                            $('head').append('<link rel="stylesheet" type="text/css" href="/dist/libs/slick/slick.min.css"/>');
                        } else {
                            $('head').append('<link rel="preload" as="style" onload="this.rel=\'stylesheet\'" type="text/css" href="/dist/libs/slick/slick.min.css"/>');
                        }
                        await $.getScript('/dist/libs/slick/slick.min.js', function() {});
                        console.log('slick loaded');
                        loadedLibs.slick = true;
                    }

                    $('.mobile-exchanges .slider-row').slick({
                        slidesToShow: 1,
                        infinite: true,
                        arrows: true,
                        dots: true,
                        adaptiveHeight: true
                    });
                }

                // add intro section animation
                $('.section-bringing-blockchain-solutions-trader-page .trader').addClass('animated');
                $('.section-bringing-blockchain-solutions-trader-page .trader-animated-background').addClass('animated');

                // adjust header to black style
                $('header .white-black-btn').removeClass('white-black-btn').addClass('black-white-btn');
                $('header .logo-container img').attr('src', '//dentacoin.com/assets/images/rounded-logo-white.svg');
                if ($('.color-white-on-page-switch').length) {
                    $('.color-white-on-page-switch').addClass('color-white');
                }

                // adjust footer to black style
                $('footer').addClass('black-style');
                for (var i = 0, len = $('.socials ul li a img').length; i < len; i+=1) {
                    var currentSocial = $('.socials ul li a img').eq(i);
                    if (currentSocial.attr('src')) {
                        // means scroll reached footer and socials are already loaded
                        currentSocial.attr('src', currentSocial.attr('data-black-style-src')).attr('alt', currentSocial.attr('data-black-style-alt'));
                    } else {
                        currentSocial.attr('data-defer-src', currentSocial.attr('data-black-style-src')).attr('alt', currentSocial.attr('data-black-style-alt'));
                    }
                }

                if (basic.isMobile()) {
                    if (basic.getMobileOperatingSystem() == 'iOS') {
                        $('.app-store-btn').fadeIn(500);
                    } else  if (basic.getMobileOperatingSystem() == 'Android') {
                        $('.google-play-btn').fadeIn(500);
                    }
                } else {
                    $('.app-store-btn').fadeIn(500);
                    $('.google-play-btn').fadeIn(500);
                }

                var twitterInit = true;
                // if on load the view is scrolled to the twitter section
                if (basic.isInViewport($('.section-latest-twitter-data'))) {
                    twitterInit = false;
                    initTwitterLatestTweets();
                }

                $(window).on('scroll', function() {
                    if (twitterInit && basic.isInViewport($('.section-latest-twitter-data'))) {
                        twitterInit = false;
                        initTwitterLatestTweets();
                    }
                });

                async function initTwitterLatestTweets() {
                    await $.getScript('//platform.twitter.com/widgets.js');

                    // add styles for latest twitter tweets iframe
                    var twitterStyleInterval = setInterval(function() {
                        if ($('iframe.twitter-timeline').length) {
                            $('body').addClass('overflow-hidden');
                            if ($(window).width() < 767) {
                                $('iframe.twitter-timeline').contents().find('head').append('<style>.timeline-Header, .timeline-Footer{display:none}.timeline-Widget{max-width: none !important;}.timeline-TweetList{font-size: 0;position:relative;}li.timeline-TweetList-tweet {display: inline-block;vertical-align: top;width:100%}.SandboxRoot.env-bp-970 .timeline-Tweet-text {font-size: 16px !important; line-height: 22px !important;font-weight: 300;}.timeline-TweetList-tweet:nth-of-type(2){top: 0;position: absolute;left: 100%;background: white;--moz-transition: 0.3s;-ms-transition: 0.3s;transition: 0.3s;z-index:50;}.timeline-TweetList-tweet:nth-of-type(3){top: 0;position: absolute;left: 100%;background: white;--moz-transition: 0.3s;-ms-transition: 0.3s;transition: 0.3s;z-index:100;}</style>');

                                $('iframe.twitter-timeline').height('auto');

                                $('.tweets-iframe-container').append('<div class="tweet-bullets padding-top-10 padding-bottom-15"><a href="javascript:void(0);" class="inline-block first active"></a><a href="javascript:void(0);" class="inline-block second"></a><a href="javascript:void(0);" class="inline-block third"></a></div>');

                                $('.tweet-bullets a').click(function() {
                                    $('.tweet-bullets a').removeClass('active');
                                    $(this).addClass('active');

                                    if ($(this).hasClass('first')) {
                                        $('iframe.twitter-timeline').contents().find('head').append('<style>.timeline-TweetList-tweet:nth-of-type(2){left: 100% !important}.timeline-TweetList-tweet:nth-of-type(3){left: 100% !important}</style>');
                                    } else if ($(this).hasClass('second')) {
                                        $('iframe.twitter-timeline').contents().find('head').append('<style>.timeline-TweetList-tweet:nth-of-type(2){left: 0 !important}.timeline-TweetList-tweet:nth-of-type(3){left: 100% !important}</style>');
                                    } else if ($(this).hasClass('third')) {
                                        $('iframe.twitter-timeline').contents().find('head').append('<style>.timeline-TweetList-tweet:nth-of-type(2){left: 100% !important}.timeline-TweetList-tweet:nth-of-type(3){left: 0 !important}</style>');
                                    }

                                    $('iframe.twitter-timeline').height('auto');
                                });
                            } else {
                                $('iframe.twitter-timeline').height('auto').contents().find('head').append('<style>.timeline-Header, .timeline-Footer{display:none}.timeline-Widget{max-width: none !important;}.timeline-TweetList{font-size: 0;}li.timeline-TweetList-tweet {display: inline-block;vertical-align: top;width:33.33333%}.SandboxRoot.env-bp-970 .timeline-Tweet-text {font-size: 16px !important; line-height: 22px !important;font-weight: 300;}</style>');
                            }
                            $('body').removeClass('overflow-hidden');

                            clearInterval(twitterStyleInterval);
                        }
                    }, 500);
                }

                // add roadmap show logic
                if ($('.section-dentacoin-roadmap').length) {
                    $('.single-year-content.active').fadeIn(500);

                    $('.section-dentacoin-roadmap .years-line a').click(function() {
                        $('.section-dentacoin-roadmap .years-line a').removeClass('active');
                        $(this).addClass('active');

                        $('.single-year-content').hide();
                        $('.single-year-content[data-year="'+$(this).attr('data-year')+'"]').fadeIn(500);

                        projectData.general_logic.data.loadDeferResources();
                    });
                }

                $(window).on('scroll', function() {
                    // animate everything you need to know section
                    if ($('.section-everything-you-need-to-know .middle-animated-subsection').length) {
                        if (basic.isInViewport($('.section-everything-you-need-to-know .middle-animated-subsection'), $(window).height() / 2) && !$('.section-everything-you-need-to-know .middle-animated-subsection').hasClass('fade-in-animation')) {
                            $('.section-everything-you-need-to-know .middle-animated-subsection').addClass('fade-in-animation');
                            $('.section-everything-you-need-to-know .left-animated-border').addClass('add-animation');
                            $('.section-everything-you-need-to-know .right-animated-border').addClass('add-animation');
                        }
                    }

                    // animate wallet section
                    if ($('.section-wallet .laptop').length) {
                        if (basic.isInViewport($('.section-wallet .laptop'), $(window).height() / 2) && !$('.section-wallet .laptop').hasClass('animated')) {
                            $('.section-wallet .laptop').addClass('animated');
                            $('.section-wallet .phone').addClass('animated');
                        }
                    }
                });

                projectData.general_logic.data.hideStickyHomepageNav();
                projectData.general_logic.data.showStickySubpagesNav();
            },
            testimonials: function() {
                if ($('body').hasClass('testimonials')) {
                    var testimonial_icons_listing_page = ['avatar-icon-1.svg', 'avatar-icon-2.svg'];
                    for (var i = 0; i < $('.list .single .image.no-avatar').length; i += 1) {
                        $('.list .single .image.no-avatar').eq(i).css({'background-image': 'url(/assets/images/' + testimonial_icons_listing_page[Math.floor(Math.random() * testimonial_icons_listing_page.length)] + ')'});
                    }

                    $('svg.svg-with-lines').height($(document).height());

                    // LINE GOING UNDER TESTIMONIAL AVATARS
                    initListingPageLine();
                }
            },
            corporateDesign: function() {
                if ($('body').hasClass('corporate-design')) {
                    $('.clickable-squares-row .square').click(function () {
                        $(this).closest('.clickable-squares-row').find('.square').removeClass('active');
                        $(this).addClass('active');

                        if (!$(this).find('img').attr('src')) {
                            $(this).find('img').attr('src', $(this).find('img').attr('data-defer-src'));
                        }
                    });
                }
            },
            claimDentacoin: function() {
                if ($('body').hasClass('claim-dentacoin')) {
                    var redeemExecute = true;
                    $('.redeem-dcn').click(function () {
                        if (redeemExecute) {
                            redeemExecute = false;
                            $('#wallet-address').closest('.field-parent').find('.error-handle').remove();

                            var errors = false;
                            if ($('#wallet-address').val().trim().length != 42 || !basic.customValidateWalletAddress($('#wallet-address').val().trim())) {
                                customErrorHandle($('#wallet-address').closest('.field-parent'), 'Please enter valid Wallet Address.');
                                errors = true;
                                redeemExecute = true;
                            }

                            if (!errors) {
                                projectData.general_logic.data.showLoader();
                                setTimeout(function () {
                                    $.ajax({
                                        type: 'POST',
                                        url: 'https://external-payment-server.dentacoin.com/withdraw-by-key',
                                        dataType: 'json',
                                        data: {
                                            key: get_params['withdraw-key'],
                                            walletAddress: $('#wallet-address').val().trim()
                                        },
                                        success: function (response) {
                                            projectData.general_logic.data.hideLoader();
                                            redeemExecute = true;

                                            if (response.success) {
                                                $('.changeable-on-success').html('<div class="success-handle margin-bottom-50 margin-top-30 fs-18">Your transaction is being processed... <b><a href="https://etherscan.io/tx/' + response.transactionHash + '" target="_blank" style="color: #3c763d; text-decoration: underline;">CHECK STATUS</a></b></div>.');
                                            } else {
                                                basic.showAlert('Something went wrong. Please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a> with description of the problem.', '', true);
                                            }
                                        }
                                    });
                                }, 2000);
                            }
                        }
                    });
                }
            },
            careers: function() {
                if ($('body').hasClass('careers')) {
                    if ($('.scroll-to-job-offers').length) {
                        $('.scroll-to-job-offers').click(function()  {
                            $('html, body').animate({'scrollTop': $('.open-job-positions-title .logo-over-line').offset().top}, 300);
                        });
                    }

                    if ($('.single-job-offer-container').length) {
                        // init buttons style
                        styleUploadButton(function(thisInput) {
                            $(thisInput).closest('.upload-btn-parent').find('.error-handle').remove();

                            readURL(thisInput, 2, allowedDocumentExtensions, function(e, filename) {
                                $(thisInput).closest('.button-row').find('.file-name').html('<span class="text-decoration-underline padding-right-10 inline-block">'+filename+'</span><a href="javascript:void(0);" class="remove-file inline-block">×</a>');

                                $('.remove-file').unbind().click(function() {
                                    $(this).closest('.button-row').find('input[type="file"]').val('');
                                    $(this).closest('.button-row').find('.file-name').html('');
                                });
                            });
                        }, 'bright-blue-white-btn');

                        basic.initCustomCheckboxes('.single-job-offer-container');

                        //handle apply from submission
                        $('.apply-for-position form').on('submit', async function (event) {
                            event.preventDefault();
                            var this_form_native = this;
                            var this_form = $(this_form_native);
                            var errors = false;
                            this_form.find('.error-handle').remove();

                            var check_captcha_response = await checkCaptcha(this_form.find('#captcha').val().trim());

                            for (var i = 0, len = this_form.find('input[type="text"].required').length; i < len; i+=1) {
                                if (this_form.find('input[type="text"].required').eq(i).val().trim() == '') {
                                    customErrorHandle(this_form.find('input[type="text"].required').eq(i).closest('.field-parent'), 'This field is required.');
                                    errors = true;
                                } else if (this_form.find('input[type="text"].required').eq(i).attr('name') == 'email' && !basic.validateEmail(this_form.find('input[type="text"].required').eq(i).val().trim())) {
                                    customErrorHandle(this_form.find('input[type="text"].required').eq(i).closest('.field-parent'), 'Please use valid email address.');
                                    errors = true;
                                } else if (this_form.find('input[type="text"].required').eq(i).attr('name') == 'captcha' && check_captcha_response.error) {
                                    customErrorHandle(this_form.find('input[type="text"].required').eq(i).closest('.field-parent'), 'Please enter correct captcha.');
                                    errors = true;
                                }
                            }

                            if (!this_form.find('#privacy-policy').is(':checked')) {
                                customErrorHandle(this_form.find('#privacy-policy').closest('.form-row'), this_form.find('#privacy-policy').closest('.form-row').attr('data-valid-message'));
                                errors = true;
                            }

                            if (!errors) {
                                this_form_native.submit();
                            } else {
                                $('html, body').animate({'scrollTop': $('.below-apply-for-position').offset().top}, 300);
                            }
                        });
                    }
                }
            },
            team: async function() {
                if ($('body').hasClass('team')) {
                    // load slick lib
                    if (!hasOwnProperty.call(loadedLibs, 'slick')) {
                        if (isFirefox) {
                            $('head').append('<link rel="stylesheet" type="text/css" href="/dist/libs/slick/slick.min.css"/>');
                        } else {
                            $('head').append('<link rel="preload" as="style" onload="this.rel=\'stylesheet\'" type="text/css" href="/dist/libs/slick/slick.min.css"/>');
                        }
                        await $.getScript('/dist/libs/slick/slick.min.js', function() {});
                        console.log('slick loaded');
                        loadedLibs.slick = true;
                    }

                    $('.team-container .advisors .advisors-slider').slick({
                        slidesToShow: 3,
                        autoplay: true,
                        autoplaySpeed: 8000,
                        responsive: [
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 2
                                }
                            }, {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    adaptiveHeight: true
                                }
                            }
                        ]
                    });

                    //bind click event for show more advisors
                    $('.team-container .more-advisors .read-more a').click(function () {
                        $(this).closest('.more-advisors').find('.list').slideDown(300);
                        $(this).closest('.read-more').slideUp(300);
                    });
                }
            },
            pressCenter: function() {
                if ($('body').hasClass('press-center')) {
                    // PRESS CENTER
                    initListingPageLine();

                    if ($('.open-form').length > 0) {
                        $('.open-form').click(function () {
                            $.ajax({
                                type: 'POST',
                                url: HOME_URL + '/press-center-popup',
                                dataType: 'json',
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                success: function (response) {
                                    if (response.success) {
                                        basic.closeDialog();
                                        basic.showDialog(response.success, 'media-inquries', 'media-inquries');

                                        initCaptchaRefreshEvent();

                                        basic.initCustomCheckboxes('.bootbox.media-inquries');

                                        $('.selectpicker').selectpicker('refresh');

                                        $('.bootbox.media-inquries select[name="reason"]').on('change', function () {
                                            $('.bootbox.media-inquries .waiting-for-action').html('');
                                            if ($(this).find('option:selected').attr('data-action') == 'newsletter-register') {
                                                $('.bootbox.media-inquries .waiting-for-action').html('<input type="hidden" name="answer" value="Manual email register to newletter receivers list."/>');
                                            } else if ($(this).find('option:selected').attr('data-action') == 'long-text') {
                                                $('.bootbox.media-inquries .waiting-for-action').html('<div class="padding-bottom-15 field-parent"><textarea placeholder="' + $(this).find('option:selected').attr('data-title') + '" rows="3" name="answer" maxlength="3000" class="required"></textarea></div>');
                                            } else if ($(this).find('option:selected').attr('data-action') == 'long-text-and-attachments') {
                                                $('.bootbox.media-inquries .waiting-for-action').html('<div class="padding-bottom-15 field-parent"><textarea placeholder="' + $(this).find('option:selected').attr('data-title') + '" rows="3" name="answer" class="padding-bottom-10 required" maxlength="3000"></textarea></div><div class="padding-bottom-10 text-center-xs button-row fs-0 upload-btn-parent"><div class="upload-file module inline-block" data-label="Attach file (media package)"><input type="file" name="media-package" id="media-package" class="upload-input" accept=".pdf,.doc,.docx,.ppt,.pptx,.odt,.rtf,.xls,.xlsx"></div><div class="file-text inline-block"><div class="types">File types allowed: .pdf,.doc,.docx,.ppt,.pptx,.odt,.rtf,.xls,.xlsx up to 5MB</div><div class="file-name lato-bold"></div></div></div><div class="padding-bottom-15 text-center-xs button-row fs-0 upload-btn-parent"><div class="upload-file module inline-block" data-label="Attach file (individual offer, if present)"><input type="file" name="individual-offer" id="individual-offer" class="upload-input" accept=".pdf,.doc,.docx,.ppt,.pptx,.odt,.rtf,.xls,.xlsx"></div><div class="file-text inline-block"><div class="types">File types allowed: .pdf,.doc,.docx,.ppt,.pptx,.odt,.rtf,.xls,.xlsx up to 5MB</div><div class="file-name lato-bold"></div></div></div>');

                                                styleUploadButton(function(thisInput) {
                                                    $(thisInput).closest('.upload-btn-parent').find('.error-handle').remove();

                                                    readURL(thisInput, 5, ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'odt', 'rtf', 'xls', 'xlsx'], function(e, filename) {
                                                        $(thisInput).closest('.button-row').find('.file-name').html('<span class="text-decoration-underline padding-right-10 inline-block">'+filename+'</span><a href="javascript:void(0);" class="remove-file inline-block">×</a>');

                                                        $('.remove-file').unbind().click(function() {
                                                            $(this).closest('.button-row').find('input[type="file"]').val('');
                                                            $(this).closest('.button-row').find('.file-name').html('');
                                                        });
                                                    });
                                                }, 'bright-blue-white-btn');

                                                //ADD CUSTOM EVENTS ON ENTER OR SPACE CLICK FOR accessibility
                                                $('.bootbox.media-inquries #media-package button').keypress(function (event) {
                                                    if (event.keyCode == 13 || event.keyCode == 0 || event.keyCode == 32) {
                                                        document.getElementById('file-media-package').click();
                                                    }
                                                });
                                                $('.bootbox.media-inquries #individual-offer button').keypress(function (event) {
                                                    if (event.keyCode == 13 || event.keyCode == 0 || event.keyCode == 32) {
                                                        document.getElementById('file-individual-offer').click();
                                                    }
                                                });
                                            }
                                        });

                                        $('.bootbox.media-inquries form').on('submit', async function (event) {
                                            event.preventDefault();
                                            var this_form_native = this;
                                            var this_form = $(this_form_native);
                                            var errors = false;
                                            this_form.find('.error-handle').remove();

                                            var check_captcha_response = await checkCaptcha(this_form.find('#captcha').val().trim());

                                            for (var i = 0, len = this_form.find('.required').length; i < len; i+=1) {
                                                if (this_form.find('.required').eq(i).val().trim() == '') {
                                                    customErrorHandle(this_form.find('.required').eq(i).closest('.field-parent'), 'This field is required.');
                                                    errors = true;
                                                } else if (this_form.find('.required').eq(i).attr('name') == 'email' && !basic.validateEmail(this_form.find('.required').eq(i).val().trim())) {
                                                    customErrorHandle(this_form.find('.required').eq(i).closest('.field-parent'), 'Please use valid email address.');
                                                    errors = true;
                                                } else if (this_form.find('.required').eq(i).attr('name') == 'captcha' && check_captcha_response.error) {
                                                    customErrorHandle(this_form.find('.required').eq(i).closest('.field-parent'), 'Please enter correct captcha.');
                                                    errors = true;
                                                }
                                            }

                                            if (this_form.find('select.required-select').val().trim() == '') {
                                                customErrorHandle(this_form.find('select.required-select').closest('.field-parent'), 'This field is required.');
                                                errors = true;
                                            }

                                            if (!this_form.find('#privacy-policy').is(':checked')) {
                                                customErrorHandle(this_form.find('#privacy-policy').closest('.field-parent'), this_form.find('#privacy-policy').closest('.field-parent').attr('data-valid-message'));
                                                errors = true;
                                            }

                                            if (!errors) {
                                                this_form_native.submit();
                                            }
                                        });
                                    }
                                }
                            });
                        });
                    }
                }
            },
            howToCreateWallet: function() {
                if ($('body').hasClass('how-to-create-wallet')) {
                    var wallet_video_time_watched = 0;
                    var wallet_video_timer;

                    $('video.wallet-instructions-video').on('play', function () {
                        wallet_video_timer = setInterval(function () {
                            wallet_video_time_watched += 1;
                        }, 1000);
                    });

                    $('video.wallet-instructions-video').on('pause', function () {
                        clearInterval(wallet_video_timer);
                        projectData.events.fireGoogleAnalyticsEvent('Video', 'Play', 'How to Create a Wallet Demo', wallet_video_time_watched);
                    });

                    if ($('.section-wallet-questions .question').length > 0) {
                        $('.section-wallet-questions .question').click(function () {
                            $(this).toggleClass('active');
                            $(this).closest('li').find('.question-content').toggle(300);
                        });
                    }
                }
            },
            christmasCalendar: function() {
                if ($('body').hasClass('christmas-calendar')) {
                    // CHRISTMAS CALENDAR
                    $(document).on('click', '.custom-close-bootbox', function() {
                        basic.closeDialog();
                    });

                    if ($('.move-footer-above').length) {
                        $('footer').css({'margin-top' : '-30px'});
                    }

                    if (Date.now() > Math.floor(new Date(2020, 12, 1, 23, 59, 59, 0).getTime())) {
                        initTasksEvent();
                    } else {
                        console.log('! initTasksEvent');
                        if (basic.cookies.get('agreed_with_christmas_calendar_rules') != '1') {
                            $('.tasks-section .camping-custom-popups.rules').html('<div class="popup-wrapper"><h2 class="lato-black fs-25 text-center padding-bottom-20 padding-top-15">SIMPLE RULES:</h2><ul class="lato-regular fs-18 line-height-30"><li><span class="lato-black">31 days = 31 gifts:</span> Unlock a new task every day, complete it and get various rewards!</li><li><span class="lato-black">Complete tasks every day and your DCN rewards will be doubled at the end of the challenge.</span></li><li><span class="lato-black">31 days = 31 tickets:</span> Don’t miss a day and increase your chances to win!</li><li><span class="lato-black">Missed a day?</span> You can catch up with the daily tasks and gifts, but you’ll have one ticket less and your DCN rewards will not be doubled at the end.</li><li>All DCN daily rewards will be gradually unlocked for withdrawal in the period <span class="lato-black">Jan 1-15, 2021.</span></li><li>Other gifts are sent via email <span class="lato-black">within 5 days after</span> the task is completed.</li><li>Only users who have <span class="lato-black">submitted proofs</span> for their tasks get rewards and participate in the raffle.</li><li>All posts, likes and follows <span class="lato-black">must remain</span> at least until the raffle is finished.</li><li><span class="lato-black">Check the raffle winners on January 11, 2021 - first in our Telegram group!</span></li></ul><div class="padding-top-20 padding-bottom-20 max-width-400 margin-0-auto checkboxes"><div class="padding-bottom-10 padding-top-15"><div class="checkbox-wrapper"><input id="christmas-calendar-terms" type="checkbox"/></div><label class="fs-18 padding-left-5" for="christmas-calendar-terms">I read and agree to the <a href="/holiday-calendar-terms" target="_blank" class="color-christmas-calendar-red">Terms & Conditions</a></label></div><div class="padding-bottom-10"><div class="checkbox-wrapper"><input id="christmas-calendar-privacy-policy" type="checkbox"/></div><label class="fs-18 padding-left-5" for="christmas-calendar-privacy-policy">I read and agree to the <a href="/privacy-policy" target="_blank" class="color-christmas-calendar-red">Privacy Policy</a></label></div><div><div class="checkbox-wrapper"><input id="christmas-calendar-years" type="checkbox"/></div><label class="fs-18 padding-left-5" for="christmas-calendar-years">I confirm that I am eighteen (18) years of age or older.</label></div></div><div class="padding-bottom-20 text-center"><a href="javascript:void(0);" class="accept-christmas-calendar-rules"><figure itemscope="" itemtype="http://schema.org/ImageObject"><img src="/assets/images/christmas-calendar-campaign/ready-btn-present.svg" class="width-100 max-width-220" alt="Popup button" itemprop="contentUrl"/></figure></a></div></div>');

                            $('html, body').animate({scrollTop: $('.camping-custom-popups.rules').offset().top}, 300);

                            $('.tasks-section .camping-custom-popups.rules .popup-wrapper .accept-christmas-calendar-rules').click(function() {
                                if (!$('.camping-custom-popups.rules #christmas-calendar-terms').is(':checked')) {
                                    basic.showAlert('Please agree to the Terms & Conditions.', '', true);
                                } else if (!$('.camping-custom-popups.rules #christmas-calendar-privacy-policy').is(':checked')) {
                                    basic.showAlert('Please agree to the Privacy Policy.', '', true);
                                } else if (!$('.camping-custom-popups.rules #christmas-calendar-years').is(':checked')) {
                                    basic.showAlert('Please confirm that you are eighteen (18) years of age or older.', '', true);
                                } else {
                                    basic.cookies.set('agreed_with_christmas_calendar_rules', '1');

                                    $('.tasks-section .camping-custom-popups.rules').html('');
                                    checkChristmasCalendarSocialEngagement();
                                }
                            });
                        } else {
                            checkChristmasCalendarSocialEngagement();
                        }

                        function checkChristmasCalendarSocialEngagement() {
                            if (basic.cookies.get('christmas_calendar_social_engagement') != '1') {
                                $('.tasks-section .camping-custom-popups.socials').show();
                                $('html, body').animate({scrollTop: $('.camping-custom-popups.socials').offset().top}, 300);

                                $('.christmas-calendar-get-started').click(function() {
                                    basic.cookies.set('christmas_calendar_social_engagement', '1');
                                    $('.blurred-section').removeClass('active');
                                    $('.tasks-section .camping-custom-popups.socials').hide();
                                    initTasksEvent();
                                });
                            } else {
                                $('.blurred-section').removeClass('active');
                                initTasksEvent();
                            }
                        }
                    }

                    function initTasksEvent() {
                        console.log('initTasksEvent');
                        $('.tasks-section .single-task').click(function() {
                            var this_btn = $(this);
                            if (this_btn.hasClass('double-reward') && !this_btn.find('wrapper').hasClass('opened')) {
                                basic.closeDialog();
                                basic.showDialog('<div class="popup-header"><figure itemscope="" itemtype="http://schema.org/ImageObject" class="text-center"><img src="/assets/images/christmas-calendar-campaign/popup-gifts-header.png" alt="Dentacoins" itemprop="contentUrl"/></figure><div class="lines-and-day"><div class="lines"><div class="small-red-line"></div><div class="small-yellow-line"></div><div class="big-red-line"></div><div class="small-yellow-line"></div><div class="small-red-line"></div></div></div></div><div class="popup-body"><div class="text-center padding-top-50 padding-bottom-50 padding-left-20 padding-right-20"><h2 class="fs-50 fs-xs-32 lato-black">DOUBLE REWARDS</h2><div class="fs-20 fs-xs-18 lato-bold color-christmas-calendar-red padding-bottom-20">IF YOU COMPLETE ALL 31 TASKS ON THE EXACT DATE</div><figure itemscope="" itemtype="http://schema.org/ImageObject" class="text-center max-width-150 margin-0-auto task-present-tile"><img src="/assets/images/christmas-calendar-campaign/double-reward.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/></figure><button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150 margin-top-30">CLOSE</button></div></div>', 'response-popup', null);
                            } else if (this_btn.hasClass('disqualified')) {
                                var disqualifiedText = 'DISQUALIFIED';
                                var disqualifiedImage = this_btn.find('img').attr('src');
                                if (this_btn.attr('data-type') == 'dcn-reward' || this_btn.attr('data-type') == 'ticket-reward') {
                                    disqualifiedText = 'Your daily prize has been taken out of your balance.';
                                }

                                basic.closeDialog();
                                basic.showDialog('<div class="popup-header"><figure itemscope="" itemtype="http://schema.org/ImageObject" class="text-center"><img src="/assets/images/christmas-calendar-campaign/popup-gifts-header.png" alt="Dentacoins" itemprop="contentUrl"/></figure><div class="lines-and-day"><div class="lines"><div class="small-red-line"></div><div class="small-yellow-line"></div><div class="big-red-line"></div><div class="small-yellow-line"></div><div class="small-red-line"></div></div></div></div><div class="popup-body"><div class="text-center padding-top-50 padding-bottom-50 padding-left-20 padding-right-20"><h2 class="fs-50 fs-xs-32 lato-black">DISQUALIFIED</h2><div class="fs-20 fs-xs-18 lato-bold color-christmas-calendar-red padding-bottom-20">You haven\'t completed the task as required.</div><figure itemscope="" itemtype="http://schema.org/ImageObject" class="text-center max-width-150 margin-0-auto task-present-tile"><img src="'+disqualifiedImage+'" class="width-100" alt="Dentacoins" itemprop="contentUrl"/></figure><div class="fs-18 lato-bold padding-top-10">'+disqualifiedText+'</div><button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150 margin-top-30">CLOSE</button></div></div>', 'response-popup', null);
                            } else {
                                $.ajax({
                                    type: 'POST',
                                    url: '/holiday-calendar/'+christmasCalendarYear+'/get-task-popup/' + this_btn.attr('data-task'),
                                    dataType: 'json',
                                    headers: {
                                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                    },
                                    success: function (response) {
                                        if (response.success) {
                                            basic.closeDialog();
                                            basic.showDialog(response.success, 'christmas-calendar-task', null);

                                            if (this_btn.attr('data-day-id') == '1') {
                                                // face sticker generation task
                                                var vertical_step = 0;
                                                var horizontal_step = 0;
                                                var interval_arrows;
                                                var rotation = 0;
                                                var avatar_border = 0;

                                                $('.task-body [name="character-type"]').on('change', function() {
                                                    if ($(this).val() == 'male') {
                                                        avatar_border = 1;
                                                    } else if ($(this).val() == 'female') {
                                                        avatar_border = 2;
                                                    }

                                                    $('.task-body .upload-image .border').html('<img src="https://christmas-calendar-api.dentacoin.com/assets/images/'+response.year+'/border-'+avatar_border+'.png"/>');
                                                });

                                                $('.christmas-calendar-task #upload-avatar').change(function () {
                                                    var input = this;
                                                    readURL(input, 2, allowedImagesExtensions, function() {
                                                        if (input.files && input.files[0]) {
                                                            var reader = new FileReader();
                                                            reader.onload = function (e) {

                                                                var image = new Image();
                                                                image.src = e.target.result;
                                                                image.onload = function () {
                                                                    // access image size here
                                                                    var background_size = "";
                                                                    var image_ratio = this.width / this.height;
                                                                    if (image_ratio >= 1) {
                                                                        background_size = "100% " + (100 / image_ratio) + "%";
                                                                    } else {
                                                                        background_size = (100 * image_ratio) + "% 100%";
                                                                    }

                                                                    $(".christmas-calendar-task .avatar img").hide();
                                                                    $(".christmas-calendar-task .avatar").css("background-image", "url(" + e.target.result + ")");
                                                                    $(".christmas-calendar-task .avatar").css("background-size", background_size);
                                                                    $(".christmas-calendar-task .avatar").data("ratio", image_ratio).data("w", this.width).data("h", this.height);
                                                                    $(".christmas-calendar-task .avatar").addClass("avatar-selected");

                                                                    fixGameImageSquare();

                                                                    //set file input
                                                                    $("form input[name='avatar']").val(e.target.result);

                                                                    resetImageStuff();
                                                                }
                                                            }
                                                            reader.readAsDataURL(input.files[0]);
                                                        }
                                                    }, function() {
                                                        basic.showAlert('Max file size must be 2MB and allowed file formats are png, jpg, jpeg.', '', true);
                                                        return false;
                                                    });
                                                });

                                                function fixGameImageSquare() {
                                                    //setting width and height, because we are replacing the image with background
                                                    $(".upload-image .avatar").height($(".upload-image .avatar").width());
                                                }

                                                function resetImageStuff() {
                                                    $(".zoom-scroll-container .wrapper").slider("value", 1);
                                                    $(".popup-body form input[name='background_scale']").val(1);
                                                    vertical_step = horizontal_step = 0;
                                                    changeAvatarOffset();
                                                    resetRotation();
                                                }

                                                function resetRotation() {
                                                    rotation = 0;
                                                    $(".upload-image .rotation").css({
                                                        "transform": "rotate(" + rotation + "deg)",
                                                        "-webkit-transform": "rotate(" + rotation + "deg)",
                                                        "-moz-transform": "(" + rotation + "deg)",
                                                        "-ms-transform": "rotate(" + rotation + "deg)"
                                                    });
                                                    $(".upload-image .rotation .border").css({
                                                        "transform": "rotate(-" + rotation + "deg)",
                                                        "-webkit-transform": "rotate(-" + rotation + "deg)",
                                                        "-moz-transform": "(-" + rotation + "deg)",
                                                        "-ms-transform": "rotate(-" + rotation + "deg)"
                                                    });
                                                }

                                                function changeAvatarOffset() {
                                                    $(".popup-body .upload-image .photo .avatar.avatar-selected").css({"background-position": "calc(50% - " + horizontal_step + "px) calc(50% - " + vertical_step + "px)"});
                                                }

                                                function rotateImage() {
                                                    if ($(".avatar img").is(":hidden")) {
                                                        rotation += 90;
                                                        if (rotation == 360) {
                                                            rotation = 0;
                                                        }
                                                        $(".upload-image .rotation").css({
                                                            "transform": "rotate(" + rotation + "deg)",
                                                            "-webkit-transform": "rotate(" + rotation + "deg)",
                                                            "-moz-transform": "(" + rotation + "deg)",
                                                            "-ms-transform": "rotate(" + rotation + "deg)"
                                                        });
                                                        $(".upload-image .rotation .border").css({
                                                            "transform": "rotate(-" + rotation + "deg)",
                                                            "-webkit-transform": "rotate(-" + rotation + "deg)",
                                                            "-moz-transform": "(-" + rotation + "deg)",
                                                            "-ms-transform": "rotate(-" + rotation + "deg)"
                                                        });
                                                    }
                                                }
                                                function moveArrow(direction, step) {
                                                    var new_step;
                                                    var avatar_rad;
                                                    if (direction == "vertical") {
                                                        new_step = vertical_step + step;
                                                        avatar_rad = parseInt($(".popup-body .upload-image .photo .avatar").data("h")) / 2;
                                                    } else {
                                                        new_step = horizontal_step + step;
                                                        avatar_rad = parseInt($(".popup-body .upload-image .photo .avatar").data("w")) / 2;
                                                    }
                                                    if (new_step > -avatar_rad && new_step < avatar_rad) {
                                                        if (direction == "vertical") {
                                                            vertical_step += step;
                                                        } else {
                                                            horizontal_step += step;
                                                        }
                                                        changeAvatarOffset();
                                                    } else {
                                                        clearInterval(interval_arrows);
                                                    }
                                                }

                                                $(".popup-body .up-triangle img").mousedown(function () {
                                                    if ($(".avatar img").is(":hidden")) {
                                                        if (interval_arrows != undefined) {
                                                            clearInterval(interval_arrows);
                                                        }
                                                        moveArrow("vertical", 10);
                                                        interval_arrows = setInterval(function () {
                                                            moveArrow("vertical", 10);
                                                        }, 100);
                                                    }
                                                });

                                                $(document).mouseup(function () {
                                                    if (interval_arrows != undefined) {
                                                        clearInterval(interval_arrows);
                                                    }
                                                });

                                                $(".popup-body .down-triangle img").mousedown(function () {
                                                    if ($(".avatar img").is(":hidden")) {
                                                        if (interval_arrows != undefined) {
                                                            clearInterval(interval_arrows);
                                                        }
                                                        moveArrow("vertical", -10);
                                                        interval_arrows = setInterval(function () {
                                                            moveArrow("vertical", -10);
                                                        }, 100);
                                                    }
                                                });

                                                $(".popup-body .left-triangle img").mousedown(function () {
                                                    if ($(".avatar img").is(":hidden")) {
                                                        if (interval_arrows != undefined) {
                                                            clearInterval(interval_arrows);
                                                        }
                                                        moveArrow("horizontal", 10);
                                                        interval_arrows = setInterval(function () {
                                                            moveArrow("horizontal", 10);
                                                        }, 100);
                                                    }
                                                });


                                                $(".popup-body .right-triangle img").mousedown(function () {
                                                    if ($(".avatar img").is(":hidden")) {
                                                        if (interval_arrows != undefined) {
                                                            clearInterval(interval_arrows);
                                                        }
                                                        moveArrow("horizontal", -10);
                                                        interval_arrows = setInterval(function () {
                                                            moveArrow("horizontal", -10);
                                                        }, 100);
                                                    }
                                                });

                                                $(".popup-body .rotate").click(function () {
                                                    rotateImage();
                                                });

                                                $(".zoom-scroll-container .wrapper").slider({
                                                    value: 1,
                                                    min: 0.5,
                                                    max: 1.5,
                                                    step: 0.1,
                                                    slide: function (event, ui) {
                                                        $(".popup-body form input[name='background_scale']").val(ui.value);

                                                        var image_ratio = $(".avatar").data("ratio");
                                                        var background_size;
                                                        if (image_ratio >= 1) {
                                                            background_size = (ui.value * 100) + "% " + (ui.value * 100 / image_ratio) + "%";
                                                        } else {
                                                            background_size = (ui.value * 100 * image_ratio) + "% " + (ui.value * 100) + "%";
                                                        }

                                                        $(".avatar").css("background-size", background_size);
                                                    }
                                                });


                                                $('.popup-body form').on('submit', function(event) {
                                                    event.preventDefault();
                                                    var form = $(this);

                                                    var textProofArray = [];
                                                    for (var i = 0, len = $('[name="text_proof[]"]').length; i < len; i+=1) {
                                                        if ($('[name="text_proof[]"]').eq(i).val().trim() == '' || !basic.validateEmail($('[name="text_proof[]"]').eq(i).val().trim())) {
                                                            basic.showAlert('Please enter valid emails of your friends.', '', true);
                                                            return false;
                                                        } else {
                                                            textProofArray.push($('[name="text_proof[]"]').eq(i).val().trim());
                                                        }
                                                    }

                                                    if (avatar_border != 1 && avatar_border != 2) {
                                                        basic.showAlert('Please select character gender.', '', true);
                                                    } else if (form.find('[name="avatar"]').val() == '') {
                                                        basic.showAlert('Please upload your photo.', '', true);
                                                    } else {
                                                        projectData.general_logic.data.showLoader();

                                                        var post_data = {
                                                            'avatar' : form.find('[name="avatar"]').val(),
                                                            'year' : form.find('[name="year"]').val(),
                                                            'background_scale' : form.find('[name="background_scale"]').val(),
                                                            'avatar-border' : avatar_border,
                                                            'horizontal_step' : horizontal_step,
                                                            'vertical_step' : vertical_step,
                                                            'size' : $('.upload-image .avatar').width(),
                                                            'rotation' : rotation
                                                        };

                                                        $.ajax({
                                                            type: 'POST',
                                                            url: '/holiday-calendar/'+christmasCalendarYear+'/complete-task/' + this_btn.attr('data-task'),
                                                            dataType: 'json',
                                                            data: {
                                                                'text_proof' : textProofArray
                                                            },
                                                            headers: {
                                                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                                            },
                                                            success: function (response) {
                                                                if (response.success) {
                                                                    post_data['user_slug'] = response.data;
                                                                    $.ajax({
                                                                        type: 'POST',
                                                                        url: 'https://christmas-calendar-api.dentacoin.com/generate-face-sticker',
                                                                        dataType: 'json',
                                                                        data: post_data,
                                                                        success: function (imageGenerationResponse) {
                                                                            projectData.general_logic.data.hideLoader();
                                                                            if (imageGenerationResponse.success) {
                                                                                if (response.dcnAmount) {
                                                                                    $('.user-dcn-amount').html(response.dcnAmount);
                                                                                }
                                                                                if (response.ticketAmount) {
                                                                                    $('.user-ticket-amount').html(response.ticketAmount);
                                                                                }
                                                                                if (response.bonusTickets) {
                                                                                    $('.user-bonus-ticket-amount').html(response.bonusTickets);
                                                                                }

                                                                                this_btn.find('.wrapper').addClass('opened');
                                                                                this_btn.find('.present__content').append('<i class="fa fa-check check-icon" aria-hidden="true"></i>');

                                                                                basic.closeDialog();
                                                                                basic.showDialog(response.success, 'response-popup', null);
                                                                                //window.open('https://christmas-calendar-api.dentacoin.com/assets/uploads/face-stickers/' + imageGenerationResponse.data, '_blank');
                                                                            } else {
                                                                                basic.showAlert('Something went wrong. Please try again later or write a message to admin@dentacoin.com with description of the problem.', '', true);
                                                                            }
                                                                        }
                                                                    });
                                                                } else if (response.error) {
                                                                    projectData.general_logic.data.hideLoader();
                                                                    if (response.technicalError) {
                                                                        basic.showAlert(response.error, '', null);
                                                                    } else {
                                                                        basic.showDialog(response.error, 'response-popup', null);
                                                                    }
                                                                }
                                                            }
                                                        });
                                                    }
                                                });
                                            } else if (['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '25', '26', '28', '29', '30', '31'].indexOf(this_btn.attr('data-day-id')) > -1) {
                                                $('.popup-body form').on('submit', function(event) {
                                                    event.preventDefault();
                                                    var form = $(this);
                                                    var this_form = this;

                                                    if (['6', '12', '15', '25', '30'].indexOf(this_btn.attr('data-day-id')) > -1) {
                                                        var warningReminderAboutTaskValidation = {};
                                                        warningReminderAboutTaskValidation.callback = function (result) {
                                                            if (result) {
                                                                submitFormForMostTasks(form, this_form, this_btn.attr('data-day-id'));
                                                            }
                                                        };
                                                        basic.showConfirm('<div class="fs-20 lato-bold text-center padding-bottom-20">WARNING</div><div class="fs-16 text-center padding-bottom-20">All entries are subject to manual approval. If your entry does not meet the requirements, you will be disqualified from today\'s task.</div><div class="fs-16 text-center padding-bottom-20">Are you sure you want to submit the task?</div>', '', warningReminderAboutTaskValidation, true);
                                                    } else {
                                                        submitFormForMostTasks(form, this_form, this_btn.attr('data-day-id'));
                                                    }
                                                });

                                                function submitFormForMostTasks(form, this_form, task_id) {
                                                    completeTask(form, this_form, this_btn, new FormData($(this_form)[0]), function(response) {
                                                        projectData.general_logic.data.hideLoader();
                                                        if (response.dcnAmount) {
                                                            $('.user-dcn-amount').html(response.dcnAmount);
                                                        }
                                                        if (response.ticketAmount) {
                                                            $('.user-ticket-amount').html(response.ticketAmount);
                                                        }
                                                        if (response.bonusTickets) {
                                                            $('.user-bonus-ticket-amount').html(response.bonusTickets);
                                                        }

                                                        this_btn.find('.wrapper').addClass('opened');
                                                        this_btn.find('.present__content').append('<i class="fa fa-check check-icon" aria-hidden="true"></i>');

                                                        if (response.doubleAmount) {
                                                            $('.single-task.double-reward .present__content').append('<i class="fa fa-check check-icon" aria-hidden="true"></i>');
                                                        }

                                                        basic.closeDialog();
                                                        basic.showDialog(response.success, 'response-popup', null);
                                                    }, task_id);
                                                }
                                            } else if (['27'].indexOf(this_btn.attr('data-day-id')) > -1) {
                                                // newsletter registration task
                                                $('.newsletter-register form').on('submit', function(event)  {
                                                    var this_form = this;
                                                    var form = $(this_form);
                                                    var error = false;
                                                    if (!basic.validateEmail(form.find('input[type="email"]').val().trim()))    {
                                                        error = true;
                                                    } else if (!form.find('#newsletter-privacy-policy-id').is(':checked'))  {
                                                        error = true;
                                                    }

                                                    if (!error) {
                                                        completeTask(form, this_form, this_btn, new FormData($(form)[0]), function(response) {
                                                            projectData.general_logic.data.hideLoader();
                                                            if (response.dcnAmount) {
                                                                $('.user-dcn-amount').html(response.dcnAmount);
                                                            }
                                                            if (response.ticketAmount) {
                                                                $('.user-ticket-amount').html(response.ticketAmount);
                                                            }
                                                            if (response.bonusTickets) {
                                                                $('.user-bonus-ticket-amount').html(response.bonusTickets);
                                                            }

                                                            this_btn.find('.wrapper').addClass('opened');
                                                            this_btn.find('.present__content').append('<i class="fa fa-check check-icon" aria-hidden="true"></i>');

                                                            basic.closeDialog();
                                                            basic.showDialog(response.success, 'response-popup', null);
                                                        });

                                                        fireGoogleAnalyticsEvent('Subscription', 'Sign-up', 'Newsletter');
                                                    }
                                                });
                                            } else if (['24'].indexOf(this_btn.attr('data-day-id')) > -1) {
                                                // holiday card generation task
                                                $('.popup-body form').on('submit', function(event) {
                                                    event.preventDefault();
                                                    var form = $(this);
                                                    var this_form = this;

                                                    completeTask(form, this_form, this_btn, new FormData($(this_form)[0]), function(response) {
                                                        var post_data = {};
                                                        post_data['user_slug'] = response.data;
                                                        post_data['year'] = response.year;
                                                        $.ajax({
                                                            type: 'POST',
                                                            url: 'https://christmas-calendar-api.dentacoin.com/generate-holiday-card',
                                                            dataType: 'json',
                                                            data: post_data,
                                                            success: function (imageGenerationResponse) {
                                                                projectData.general_logic.data.hideLoader();
                                                                if (imageGenerationResponse.success) {
                                                                    if (imageGenerationResponse.dcnAmount) {
                                                                        $('.user-dcn-amount').html(imageGenerationResponse.dcnAmount);
                                                                    }
                                                                    if (imageGenerationResponse.ticketAmount) {
                                                                        $('.user-ticket-amount').html(imageGenerationResponse.ticketAmount);
                                                                    }
                                                                    if (imageGenerationResponse.bonusTickets) {
                                                                        $('.user-bonus-ticket-amount').html(imageGenerationResponse.bonusTickets);
                                                                    }

                                                                    this_btn.find('.wrapper').addClass('opened');
                                                                    this_btn.find('.present__content').append('<i class="fa fa-check check-icon" aria-hidden="true"></i>');

                                                                    basic.closeDialog();
                                                                    basic.showDialog(response.success, 'response-popup', null);
                                                                    //window.open('https://christmas-calendar-api.dentacoin.com/assets/uploads/face-stickers/' + imageGenerationResponse.data, '_blank');
                                                                } else {
                                                                    basic.showAlert('Something went wrong. Please try again later or write a message to admin@dentacoin.com with description of the problem.', '', true);
                                                                }
                                                            }
                                                        });
                                                    });
                                                });
                                            }

                                            var screenshotProofsLength = $('.screenshot_proof').length;
                                            //my_file_image.txt
                                            if (screenshotProofsLength > 0) {
                                                for (var i = 0; i < screenshotProofsLength; i+= 1) {
                                                    $('.screenshot_proof').eq(i).on('change', function() {
                                                        $(this).parent().find('.filename').remove();
                                                        $(this).parent().append('<div class="fs-14 filename">'+$(this)[0].files[0].name+'</div>');
                                                    });
                                                }
                                            }

                                            function completeTask(form, this_form, this_btn, data, callback, task_id) {
                                                $('.task-error').remove();

                                                function proceedWithTaskFinishing() {
                                                    projectData.general_logic.data.showLoader();
                                                    setTimeout(function() {
                                                        $.ajax({
                                                            type: 'POST',
                                                            url: '/holiday-calendar/'+christmasCalendarYear+'/complete-task/' + this_btn.attr('data-task'),
                                                            data: data,
                                                            async: false,
                                                            processData: false,
                                                            contentType: false,
                                                            dataType: 'json',
                                                            headers: {
                                                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                                            },
                                                            success: function (response) {
                                                                if (response.success) {
                                                                    callback(response);
                                                                } else if (response.error) {
                                                                    projectData.general_logic.data.hideLoader();
                                                                    if (response.technicalError) {
                                                                        basic.showAlert(response.error, '', null);
                                                                    } else {
                                                                        basic.showDialog(response.error, 'response-popup', null);
                                                                    }
                                                                }
                                                            }
                                                        });
                                                    });
                                                }

                                                if (task_id != undefined && task_id == '3') {
                                                    // for this task text and screenshot proof are not both requires, just one of them
                                                    if ((form.find('[name="text_proof"]').length && form.find('[name="text_proof"]').val().trim() == '') && form.find('.screenshot_proof').val().trim() == '') {
                                                        basic.showAlert('Please submit proof. You need to link your post/ tweet or attach a screenshot.', '', true);
                                                        return false;
                                                    } else if (form.find('.screenshot_proof').val().trim() != '') {
                                                        readURL(this_form.querySelectorAll('.screenshot_proof')[0], 2, allowedImagesExtensions, function() {

                                                            proceedWithTaskFinishing();
                                                        }, function () {
                                                            basic.showAlert('Max file size must be 2MB and allowed file formats are png, jpg, jpeg.', '', true);
                                                            return false;
                                                        });
                                                    } else {
                                                        proceedWithTaskFinishing();
                                                    }
                                                } else {
                                                    if (form.find('[name="text_proof"]').length && form.find('[name="text_proof"]').val().trim() == '') {
                                                        basic.showAlert('Please submit proof. Otherwise, you may be disqualified.', '', true);
                                                        return false;
                                                    } else if (screenshotProofsLength) {
                                                        if (screenshotProofsLength > 1) {
                                                            for (var i = 0; i < screenshotProofsLength; i+= 1) {
                                                                if (!error) {
                                                                    if (form.find('.screenshot_proof').eq(i).val().trim() == '') {
                                                                        basic.showAlert('Please attach all screenshots. Otherwise, you will not receive your reward.', '', true);
                                                                        return false;
                                                                    } else {
                                                                        readURL(this_form.querySelectorAll('.screenshot_proof')[i], 2, allowedImagesExtensions, function() {
                                                                            if (i == screenshotProofsLength - 1) {
                                                                                proceedWithTaskFinishing();
                                                                            }
                                                                        }, function () {
                                                                            basic.showAlert('Max file size must be 2MB and allowed file formats are png, jpg, jpeg.', '', true);
                                                                            return false;
                                                                        });
                                                                    }
                                                                }
                                                            }
                                                        } else {
                                                            if (form.find('.screenshot_proof').val().trim() == '') {
                                                                basic.showAlert('Please attach a screenshot. Otherwise, you will not receive your reward.', '', true);
                                                                return false;
                                                            } else {
                                                                readURL(this_form.querySelectorAll('.screenshot_proof')[0], 2, allowedImagesExtensions, function() {

                                                                    proceedWithTaskFinishing();
                                                                }, function () {
                                                                    basic.showAlert('Max file size must be 2MB and allowed file formats are png, jpg, jpeg.', '', true);
                                                                    return false;
                                                                });
                                                            }
                                                        }
                                                    } else {
                                                        proceedWithTaskFinishing();
                                                    }
                                                }
                                            }
                                        } else if (response.error) {
                                            basic.showDialog(response.error, 'response-popup', null);
                                        }
                                    }
                                });
                            }
                        });
                    }
                }
            },
            partnerNetwork: function() {
                if ($('body').hasClass('partner-network')) {
                    // PARTNER NETWORK
                    initMap();
                }
            },
            berlinRoundtable: async function() {
                if ($('body').hasClass('berlin-roundtable')) {
                    // BERLIN ROUNDTABLE

                    // load slick lib
                    if (!hasOwnProperty.call(loadedLibs, 'slick')) {
                        if (isFirefox) {
                            $('head').append('<link rel="stylesheet" type="text/css" href="/dist/libs/slick/slick.min.css"/>');
                        } else {
                            $('head').append('<link rel="preload" as="style" onload="this.rel=\'stylesheet\'" type="text/css" href="/dist/libs/slick/slick.min.css"/>');
                        }
                        await $.getScript('/dist/libs/slick/slick.min.js', function() {});
                        console.log('slick loaded');
                        loadedLibs.slick = true;
                    }

                    $(document).on('click', '.reserve-your-spot', function() {
                        $('html, body').animate({'scrollTop': $('.reserve-your-spot-form').offset().top }, 300);
                    });

                    $('select[name="company-profile"]').on('change', function() {
                        if ($(this).find('option:selected').val() == 'Other:') {
                            $('.camping-select-result').html('<div class="padding-bottom-20 field-parent"><textarea id="please-specify" name="please-specify" placeholder="Please specify" rows="3" maxlength="3000" class="required form-field"></textarea></div>');
                        } else {
                            $('.camping-select-result').html('');
                        }
                    });

                    var init_form = true;
                    $('form.reserve-your-spot-form').on('submit', async function(event) {
                        var this_form = $(this);
                        event.preventDefault();
                        if (init_form) {
                            //clear prev errors
                            if (this_form.find('.error-handle').length) {
                                this_form.find('.error-handle').remove();
                            }

                            var form_fields = this_form.find('.form-field.required');
                            var submit_form = true;
                            for (var i = 0, len = form_fields.length; i < len; i += 1) {
                                if (form_fields.eq(i).is('select')) {
                                    if (form_fields.eq(i).val() == 'disabled') {
                                        customErrorHandle(form_fields.eq(i).closest('.field-parent'), 'Please choose from list.');
                                        submit_form = false;
                                    }
                                } else {
                                    if (form_fields.eq(i).attr('type') == 'email' && !basic.validateEmail(form_fields.eq(i).val().trim())) {
                                        customErrorHandle(form_fields.eq(i).closest('.field-parent'), 'Please use valid email address.');
                                        submit_form = false;
                                    }

                                    if (form_fields.eq(i).val().trim() == '') {
                                        customErrorHandle(form_fields.eq(i).closest('.field-parent'), 'This field is required.');
                                        submit_form = false;
                                    }
                                }
                            }

                            var check_captcha_response = await checkCaptcha(this_form.find('#register-captcha').val().trim());
                            if (check_captcha_response.error) {
                                customErrorHandle(this_form.find('#register-captcha').closest('.field-parent'), 'Please enter correct captcha.');
                                submit_form = false;
                            }

                            if (submit_form && init_form) {
                                init_form = false;
                                projectData.general_logic.data.showLoader();
                                setTimeout(async function() {
                                    $.ajax({
                                        type: 'POST',
                                        url: '/submit-berlin-roundtable-form',
                                        dataType: 'json',
                                        data: this_form.serialize(),
                                        headers: {
                                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                        },
                                        success: function (response) {
                                            if (response.success) {
                                                init_form = true;
                                                basic.showAlert(response.success);
                                                $('form.reserve-your-spot-form input.required, form.reserve-your-spot-form textarea.required').val('');
                                                $('.refresh-captcha').click();
                                                projectData.general_logic.data.hideLoader();
                                            }
                                        }
                                    });
                                }, 1000);
                            }
                        }
                    });

                    if ($('.attendees-slider').length) {
                        $('.attendees-slider').slick({
                            slidesToShow: 1,
                            infinite: true,
                            arrows: true,
                            dots: false
                        });
                    }
                }
            }
        }
    },
    general_logic: {
        not_logged_in: function() {
            projectData.general_logic.data.gateway();
            projectData.general_logic.data.cookie();
        },
        logged_in: function() {
            projectData.general_logic.data.miniHub();
            projectData.general_logic.data.cookie();
        },
        data: {
            loadDeferResources: function() {
                for (var i = 0, len = jQuery('[data-defer-src]').length; i < len; i += 1) {
                    var elementInViewport = jQuery('[data-defer-src]').eq(i);

                    if (basic.isInViewport(elementInViewport) && jQuery('[data-defer-src]').eq(i).attr('src') == undefined) {
                        jQuery('[data-defer-src]').eq(i).attr('src', jQuery('[data-defer-src]').eq(i).attr('data-defer-src'));
                    }
                }
            },
            gateway: function() {
                if (typeof(dcnGateway) != 'undefined') {
                    dcnGateway.init({
                        'platform': 'dev.dentacoin',
                        'environment' : 'staging',
                        /*'platform': 'dentacoin',*/
                        'forgotten_password_link': 'https://account.dentacoin.com/forgotten-password',
                        'callback' : function() {
                            console.log('INITIATED')
                        }
                    });

                    $(document).on('dentistAuthSuccessResponse', async function (event) {
                        console.log('dentistAuthSuccessResponse');
                        window.location.href = window.location.href + '?cross-login=true';
                    });

                    $(document).on('patientAuthSuccessResponse', async function (event) {
                        console.log('patientAuthSuccessResponse');
                        window.location.href = window.location.href + '?cross-login=true';
                    });
                }
            },
            cookie: async function() {
                console.log('cookie');
                if (basic.cookies.get('performance_cookies') == '' && basic.cookies.get('performance_cookies') == '' && basic.cookies.get('performance_cookies') == '' && basic.cookies.get('performance_cookies') == '' && !$('body').hasClass('dentacoin-map-iframe')) {
                    if (!hasOwnProperty.call(loadedLibs, 'dentacoinPackageJs')) {
                        await $.getScript('/assets/libs/dentacoin-package/js/init.js?v='+new Date().getTime(), function() {});
                        console.log('dentacoinPackageJs loaded');
                        loadedLibs.dentacoinPackageJs = true;
                    }

                    if (!hasOwnProperty.call(loadedLibs, 'dentacoinCookieCss')) {
                        if (isFirefox) {
                            $('head').append('<link rel="stylesheet" type="text/css" href="/assets/libs/dentacoin-package/css/style-cookie.css?v='+new Date().getTime()+'"/>');
                        } else {
                            $('head').append('<link rel="preload" as="style" onload="this.rel=\'stylesheet\'" type="text/css" href="/assets/libs/dentacoin-package/css/style-cookie.css?v='+new Date().getTime()+'"/>');
                        }
                        console.log('dentacoinCookieCss loaded');
                        loadedLibs.dentacoinCookieCss = true;
                    }

                    console.log(typeof(dcnCookie), 'typeof(dcnCookie)');
                    if (typeof(dcnCookie) != 'undefined') {
                        dcnCookie.init({
                            'google_app_id': 'UA-97167262-1',
                            'fb_app_id': '2366034370318681'
                        });
                    }
                }
            },
            showLoader: function() {
                if (!$('.camping-loader').hasClass('loaded')) {
                    $('.camping-loader').html('<div class="response-layer"><div class="wrapper"><picture itemscope="" itemtype="http://schema.org/ImageObject"><source media="(max-width: 768px)" srcset="/assets/uploads/dcn-flipping-coin-logo-loader-v3-mobile.gif"><img itemprop="contentUrl" src="/assets/uploads/dcn-flipping-coin-logo-loader-v3_desktop.gif" class="max-width-250 max-width-xs-200" alt="Loader"></picture></div></div>').addClass('loaded');
                    $('.camping-loader .response-layer').show();
                } else {
                    $('.camping-loader .response-layer').show();
                }
            },
            hideLoader: function() {
                $('.camping-loader .response-layer').hide();
            },
            initTooltips: function() {
                if ($('[data-toggle="tooltip"]').length) {
                    $('[data-toggle="tooltip"]').tooltip();
                }
            },
            handlePushStateRedirects: function() {
                if (window.location.href.includes('users')) {
                    window.location.href = HOME_URL + '/users';
                } else if (window.location.href.includes('dentists')) {
                    window.location.href = HOME_URL + '/dentists';
                } else if (window.location.href.includes('traders')) {
                    window.location.href = HOME_URL + '/traders';
                } else if (window.location.href.includes(HOME_URL)) {
                    window.location.href = HOME_URL;
                }
            },
            miniHub: async function() {
                if (!hasOwnProperty.call(loadedLibs, 'dentacoinPackageJs')) {
                    await $.getScript('/assets/libs/dentacoin-package/js/init.js?v='+new Date().getTime(), function() {});
                    loadedLibs.dentacoinPackageJs = true;
                }

                // /assets/libs/dentacoin-package/js/init.js?v=
                var miniHubParams = {
                    'element_id_to_bind': 'header-avatar',
                    'platform': 'dentacoin',
                    'log_out_link': 'https://dentacoin.com/user-logout'
                };

                if ($('body').hasClass('logged-patient')) {
                    miniHubParams.type_hub = 'mini-hub-patients';
                    if ($('body').hasClass('home')) {
                        miniHubParams.without_apps = true;
                    }
                } else if ($('body').hasClass('logged-dentist')) {
                    miniHubParams.type_hub = 'mini-hub-dentists';
                    if ($('body').hasClass('home')) {
                        miniHubParams.without_apps = true;
                    }
                }

                dcnHub.initMiniHub(miniHubParams);
            },
            videoExpressionsSlider: async function(type) {
                if ($('.module.video-expressions-slider[data-type="'+type+'"]').length) {
                    // load slick lib
                    if (!hasOwnProperty.call(loadedLibs, 'slick')) {
                        if (isFirefox) {
                            $('head').append('<link rel="stylesheet" type="text/css" href="/dist/libs/slick/slick.min.css"/>');
                        } else {
                            $('head').append('<link rel="preload" as="style" onload="this.rel=\'stylesheet\'" type="text/css" href="/dist/libs/slick/slick.min.css"/>');
                        }
                        await $.getScript('/dist/libs/slick/slick.min.js', function() {});
                        console.log('slick loaded');
                        loadedLibs.slick = true;
                    }

                    // add youtube API
                    var tag = document.createElement('script');
                    tag.src = "https://www.youtube.com/iframe_api";
                    var firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                    $('.module.video-expressions-slider[data-type="'+type+'"]').slick({
                        slidesToShow: 3,
                        responsive: [
                            {
                                breakpoint: 767,
                                settings: {
                                    slidesToShow: 1,
                                }
                            }
                        ]
                    });

                    var xsScreen = false;
                    $('body').addClass('overflow-hidden');
                    if ($(window).width() < 767) {
                        xsScreen = true;
                    }
                    $('body').removeClass('overflow-hidden');

                    if (!xsScreen) {
                        $('.module.video-expressions-slider[data-type="'+type+'"] .slick-current').next().next().addClass('after-middle');
                        $('.module.video-expressions-slider[data-type="'+type+'"] .slick-current').next().addClass('middle-slide');
                        $('.module.video-expressions-slider[data-type="'+type+'"] .slick-current').addClass('before-middle');
                    }

                    var clearIframesOnSlickChange = true;
                    $('.module.video-expressions-slider[data-type="'+type+'"]').on('afterChange', function(event, slick, currentSlide, nextSlide) {

                        if ($('.module.video-expressions-slider[data-type="'+type+'"] .slide-wrapper iframe').length) {
                            $('.module.video-expressions-slider[data-type="'+type+'"] .slide-wrapper iframe').remove();
                            $('.module.video-expressions-slider[data-type="'+type+'"] .single-slide .video-thumb').removeClass('visibility-hidden');
                        }

                        if (!xsScreen) {
                            $('.module.video-expressions-slider[data-type="' + type + '"] .slick-slide').removeClass('middle-slide after-middle before-middle');
                            $('.module.video-expressions-slider[data-type="' + type + '"] .slick-current').next().next().addClass('after-middle');
                            $('.module.video-expressions-slider[data-type="' + type + '"] .slick-current').next().addClass('middle-slide');
                            $('.module.video-expressions-slider[data-type="' + type + '"] .slick-current').addClass('before-middle');
                        }

                        if (clearIframesOnSlickChange) {
                            $('.module.video-expressions-slider[data-type="'+type+'"] .slide-wrapper iframe').remove();
                            $('.module.video-expressions-slider[data-type="'+type+'"] .single-slide .video-thumb').removeClass('visibility-hidden');
                        } else {
                            clearIframesOnSlickChange = true;
                        }

                        if ($('.module.video-expressions-slider[data-type="'+type+'"] .slick-active.middle-slide').find('.youtube-play-button').attr('data-play') == 'true') {
                            playYTVideo($('.module.video-expressions-slider[data-type="'+type+'"] .slick-active.middle-slide').find('.youtube-play-button'), $('.module.video-expressions-slider[data-type="'+type+'"] .slick-active.middle-slide').attr('data-video-id'));
                            $('.module.video-expressions-slider[data-type="'+type+'"] .youtube-play-button').removeAttr('data-play');
                        }
                    });

                    $('.module.video-expressions-slider[data-type="'+type+'"] .youtube-play-button').click(function() {
                        console.log('clicked');
                        $('.module.video-expressions-slider[data-type="'+type+'"] .youtube-play-button').removeAttr('data-play');
                        $('.module.video-expressions-slider[data-type="'+type+'"] .youtube-play-button[data-id="'+$(this).attr('data-id')+'"]').attr('data-play', 'true');
                        var videoId = $(this).closest('.single-slide').attr('data-video-id');
                        console.log(videoId, 'videoId');
                        clearIframesOnSlickChange = false;

                        $('.module.video-expressions-slider[data-type="'+type+'"] .slide-wrapper iframe').remove();
                        $('.module.video-expressions-slider[data-type="'+type+'"] .single-slide .video-thumb').removeClass('visibility-hidden');

                        console.log(xsScreen, 'xsScreen');
                        if (xsScreen) {
                            playYTVideo($(this), videoId);
                        } else {
                            if ($(this).closest('.slick-slide').hasClass('middle-slide')) {
                                // play video
                                playYTVideo($('.middle-slide .youtube-play-button'), videoId);
                            } else {
                                // make slide active and play video
                                $('.module.video-expressions-slider[data-type="'+type+'"]').slick('slickGoTo', $(this).closest('.slick-slide').prev().attr('data-slick-index'));
                                // playYTVideo($('.middle-slide .youtube-play-button'));
                            }
                        }
                    });

                    function playYTVideo(el, videoId) {
                        console.log(el, 'playYTVideo');
                        el.closest('.slide-wrapper').append('<div id="main-video-player"></div>');
                        el.closest('.single-slide').find('.video-thumb').addClass('visibility-hidden');

                        var playerEvents = {};

                        playerEvents.onReady = onPlayerReady;

                        new YT.Player('main-video-player', {
                            videoId: videoId,
                            events: playerEvents
                        });

                        function onPlayerReady(event) {
                            if (!xsScreen) {
                                $('iframe#main-video-player').height($('iframe#main-video-player').closest('.single-slide').find('.video-thumb figure img').height());
                            }
                            event.target.playVideo();
                        }
                    }
                }
            },
            userExpressionsSlider: async function(type) {
                if ($('.user-expressions-slider[data-type="'+type+'"]').length) {
                    // load slick lib
                    if (!hasOwnProperty.call(loadedLibs, 'slick')) {
                        if (isFirefox) {
                            $('head').append('<link rel="stylesheet" type="text/css" href="/dist/libs/slick/slick.min.css"/>');
                        } else {
                            $('head').append('<link rel="preload" as="style" onload="this.rel=\'stylesheet\'" type="text/css" href="/dist/libs/slick/slick.min.css"/>');
                        }
                        await $.getScript('/dist/libs/slick/slick.min.js', function() {});
                        console.log('slick loaded');
                        loadedLibs.slick = true;
                    }

                    $('.user-expressions-slider[data-type="'+type+'"]').slick({
                        slidesToShow: 3,
                        infinite: true,
                        dots: true,
                        arrows: false,
                        adaptiveHeight: true,
                        responsive: [
                            {
                                breakpoint: 1800,
                                settings: {
                                    slidesToShow: 2,
                                }
                            },
                            {
                                breakpoint: 767,
                                settings: {
                                    slidesToShow: 1,
                                }
                            }
                        ]
                    });

                    var xsScreen = false;
                    $('body').addClass('overflow-hidden');
                    if ($(window).width() < 767) {
                        xsScreen = true;
                    }
                    $('body').removeClass('overflow-hidden');

                    if (!xsScreen) {
                        setupUserExpressionsSlidesSameHeight();

                        $('.user-expressions-slider[data-type="'+type+'"]').on('afterChange', function(event, slick, currentSlide, nextSlide) {
                            $('.user-expressions-slider[data-type="'+type+'"] .slick-list .slick-active .user-expression-text').outerHeight('auto');

                            setupUserExpressionsSlidesSameHeight();
                        });

                        function setupUserExpressionsSlidesSameHeight() {
                            var height = 0;
                            for (var i = 0, len = $('.user-expressions-slider[data-type="'+type+'"] .slick-list .slick-active').length; i < len; i+=1) {
                                if ($('.user-expressions-slider[data-type="'+type+'"] .slick-list .slick-active').eq(i).find('.user-expression-text').outerHeight() > height) {
                                    height = $('.user-expressions-slider[data-type="'+type+'"] .slick-list .slick-active').eq(i).find('.user-expression-text').outerHeight();
                                }
                            }

                            $('.user-expressions-slider[data-type="'+type+'"] .slick-list .slick-active .user-expression-text').animate({height: height}, 300);

                            // update slick list height
                            var slickListHeight = 0;
                            for (var i = 0, len = $('.user-expressions-slider[data-type="'+type+'"] .slick-list .slick-active').length; i < len; i+=1) {
                                if ($('.user-expressions-slider[data-type="'+type+'"] .slick-list .slick-active').eq(i).outerHeight() > slickListHeight) {
                                    slickListHeight = $('.user-expressions-slider[data-type="'+type+'"] .slick-list .slick-active').eq(i).outerHeight();
                                }
                            }
                            $('.user-expressions-slider[data-type="'+type+'"] .slick-list').animate({height: slickListHeight}, 500);
                        }
                    }
                }
            },
            setChangeableVideos: function() {
                for (var i = 0, len = $('.changeable-video').length; i < len; i+=1) {
                    if (!$('.changeable-video').eq(i).find('video').length) {
                        var videoAttr = $('.changeable-video').eq(i).attr('data-video-attributes');
                        var videoClass = $('.changeable-video').eq(i).attr('data-video-class');
                        if (videoClass != undefined) {
                            videoClass = 'class="'+videoClass+'"';
                        } else {
                            videoClass = '';
                        }

                        if (basic.getMobileOperatingSystem() == 'iOS' || basic.getMobileOperatingSystem() == 'Mac') {
                            if (basic.getMobileOperatingSystem() == 'iOS') {
                                videoAttr += ' playsinline';
                            }

                            $('.changeable-video').eq(i).prepend('<video '+videoAttr+' '+videoClass+'><source src="'+$('.changeable-video').eq(i).attr('data-mp4')+'" type="video/mp4">Your browser does not support HTML5 video.</video>');
                            $('.changeable-video').eq(i).find('link[itemprop="contentURL"]').attr('href', $('.changeable-video').eq(i).attr('data-mp4'));
                        } else {
                            $('.changeable-video').eq(i).prepend('<video '+videoAttr+' '+videoClass+'><source src="'+$('.changeable-video').eq(i).attr('data-webm')+'" type="video/webm">Your browser does not support HTML5 video.</video>');
                            $('.changeable-video').eq(i).find('link[itemprop="contentURL"]').attr('href', $('.changeable-video').eq(i).attr('data-webm'));
                        }
                    }
                }
            },
            async dentacoinGoogleMap() {
                if (!hasOwnProperty.call(loadedLibs, 'googleMap')) {
                    await $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCaVeHq_LOhQndssbmw-aDnlMwUG73yCdk&libraries=places&language=en', function() {});
                    await $.getScript('/dist/js/init-map.min.js', function() {});
                    console.log('googleMap loaded');
                    loadedLibs.googleMap = true;
                }

                if (basic.getMobileOperatingSystem() == 'Mac') {
                    $('.section-google-map').addClass('safari-browser');
                }

                var mapHtml = await projectData.requests.getMapHtml();
                if (mapHtml.success) {
                    $('.section-google-map.module .map-container').html(mapHtml.data);
                    projectData.general_logic.data.hideLoader();

                    $('.selectpicker').selectpicker();
                    projectData.general_logic.data.initTooltips();

                    var locationsOnInit = JSON.parse($('.google-map-box').attr('data-locations'));
                    var lastMapData = {
                        initialLat: undefined,
                        initialLng: undefined,
                        initialZoom: undefined,
                        filter_country: undefined,
                        location_id_and_source_pairs: [],
                        categories: $('.selectpicker.location-types').val()
                    };

                    initMap(locationsOnInit, lastMapData);

                    basic.initCustomCheckboxes('.google-map-and-bottom-filters', 'append');

                    var listBottomExtraHtml = '<li><div class="invite-text padding-left-15 padding-right-15 padding-top-15 padding-bottom-25"><div class="color-white lato-black fs-28 fs-sm-22 fs-xs-20 padding-bottom-15">CAN\'T FIND YOUR DENTIST?<div class="fs-20 lato-regular">Add as many dentists as you like and get rewarded for every real entry!</div></div><div><a href="https://reviews.dentacoin.com/?popup=invite-new-dentist-popup" target="_blank" class="bright-blue-white-btn with-border fs-xs-16">INVITE DENTIST</a></div></div></li>';

                    // on map infowindow click
                    $(document).on('click', '.map-infowindow button', function(event) {
                        $('body').addClass('overflow-hidden');
                        if ($(window).width() < 992) {
                            showLocationsListOnMobile($('.show-locations-list'));

                            $('html, body').animate({'scrollTop': $('.map-container').offset().top }, 300);
                        } else {
                            event.preventDefault();
                        }
                        $('body').removeClass('overflow-hidden');
                    });

                    $('.show-locations-list').click(function() {
                        if (!$(this).parent().hasClass('list-shown')) {
                            showLocationsListOnMobile($(this));
                        } else {
                            $('.hide-on-map-open').removeClass('hide');
                            $(this).removeClass('with-map-pin').addClass('with-list-icon').html(' SEE RESULTS IN LIST');
                            $('.google-map-and-bottom-filters').removeClass('padding-bottom-80');
                            $(this).parent().removeClass('list-shown');

                            $('.subpages-sticky-nav').removeClass('hide');
                            $('.picker-and-map .google-map-box').fadeIn(500);
                            $('.picker-and-map .left-picker').hide();
                            $('.locations-list .invite-text').hide();

                            $('html, body').animate({'scrollTop': $('.section-google-map.module').offset().top }, 300);

                            notifyParentForMapHeight();
                        }

                        $('html, body').animate({'scrollTop': $('.map-container').offset().top }, 300);
                    });

                    // used for mobile devices to switch from map to results list with continents, countries, locations, etc
                    function showLocationsListOnMobile(el) {
                        $('.hide-on-map-open').addClass('hide');
                        el.parent().addClass('list-shown');
                        el.addClass('with-map-pin').removeClass('with-list-icon').html(' GO BACK TO MAP');

                        $('.google-map-and-bottom-filters').addClass('padding-bottom-80');

                        $('.subpages-sticky-nav').addClass('hide');
                        $('.picker-and-map .google-map-box').hide();
                        $('.picker-and-map .left-picker').fadeIn(500);
                        $('.locations-list .invite-text').fadeIn();

                        $('body').addClass('overflow-hidden');
                        if ($(window).width() < 992) {
                            // scroll to open location everytime on list showing, because the scrolling doesn't work when element is with display none
                            if ($('.single-location.toggled').length) {
                                $('.results-list').scrollTop(0);
                                $('.results-list').scrollTop($('.single-location.toggled').position().top - 15);
                            }
                        }
                        $('body').removeClass('overflow-hidden');

                        notifyParentForMapHeight();
                    }

                    var locationsCountsArr = [];
                    // set continent count BY adding the countries locations for THIS continent
                    for (var i = 0, len = $('.single-continent').length; i < len; i+=1) {
                        var currentContinentLocationsCount = 0;
                        for (var y = 0, leny = $('.single-continent').eq(i).find('.country-list-parent').length; y < leny; y+=1) {
                            if ($('.single-continent').eq(i).find('.country-list-parent').eq(y).find('[data-locations-count]').length) {
                                currentContinentLocationsCount += parseInt($('.single-continent').eq(i).find('.country-list-parent').eq(y).find('[data-locations-count]').attr('data-locations-count'));
                            }
                        }

                        if (currentContinentLocationsCount == 0) {
                            continue;
                        } else {
                            $('.single-continent').eq(i).find('> a').append('<span class="lato-bold inline-block locations-count fs-18 fs-xs-14">('+currentContinentLocationsCount+' locations)</span>');
                        }

                        locationsCountsArr.push({'count' : currentContinentLocationsCount, 'location_id' : $('.single-continent').eq(i).find('> a').attr('data-continent-id')});
                    }

                    // reorder the continents list by count from bigger to smallest count
                    var orderedLocationsCountsArr = locationsCountsArr.sort(basic.dynamicSortArrayByKey('count'));
                    orderedLocationsCountsArr.reverse();
                    var reorderedCountriesListHtml = '';
                    for (var i = 0, len = orderedLocationsCountsArr.length; i < len; i+=1) {
                        reorderedCountriesListHtml += $('.continent-name[data-continent-id='+orderedLocationsCountsArr[i].location_id+']').parent().get(0).outerHTML;
                    }
                    $('.continents-list ul').html(reorderedCountriesListHtml);

                    // set results list max-height
                    $('body').addClass('overflow-hidden');
                    if ($(window).width() > 992) {
                        $('.results-list').css({'max-height' : ($('.google-map-and-bottom-filters').height() - $('.left-picker .inner-gray-line').height()) + 'px'});

                        console.log($('.google-map-and-bottom-filters').height(), '$(\'.google-map-and-bottom-filters\').height()');
                        console.log($('.left-picker .inner-gray-line').height(), '$(\'.left-picker .inner-gray-line\').height()');
                    }
                    $('body').removeClass('overflow-hidden');

                    var locationTypesValueOnInit = $('.selectpicker.location-types').val();
                    $('.selectpicker.location-types').on('change', function() {
                        var thisValue = $(this).val();
                        proceedWithOnLocationsTypeChange(thisValue);

                        // google analytics check which option was checked or unchecked
                        if ($(this).val().length > locationTypesValueOnInit.length) {
                            // some option has been checked
                            var tempArr = $(this).val();
                            for (var i = 0, len = $(this).val().length; i < len; i+=1) {
                                if (locationTypesValueOnInit.includes($(this).val()[i])) {
                                    var index = tempArr.indexOf($(this).val()[i]);
                                    tempArr.splice(index, 1);
                                }
                            }
                            console.log(tempArr, 'this has beeen checked');

                            projectData.events.fireGoogleAnalyticsEvent('Map', 'Check type filter', $('.location-types option[value="'+tempArr+'"]').html());

                            locationTypesValueOnInit = $(this).val();
                        } else {
                            // some option has been unchecked
                            for (var i = 0, len = locationTypesValueOnInit.length; i < len; i+=1) {
                                if (!$(this).val().includes(locationTypesValueOnInit[i])) {
                                    projectData.events.fireGoogleAnalyticsEvent('Map', 'Uncheck type filter', $('.location-types option[value="'+locationTypesValueOnInit[i]+'"]').html());
                                    break;
                                }
                            }
                            locationTypesValueOnInit = $(this).val();
                        }

                        return false;
                    });


                    function proceedWithOnLocationsTypeChange(thisValue) {
                        // update bottom filter checkboxes
                        $('.right-side-filters input[type="checkbox"]').prop('checked', false);
                        $('.right-side-filters .custom-checkbox').html('');
                        if (thisValue.length > 0) {
                            for (var i = 0; i < thisValue.length; i += 1) {
                                if ($('.right-side-filters input[type="checkbox"]#' + thisValue[i]).length) {
                                    $('.right-side-filters input[type="checkbox"]#' + thisValue[i]).prop('checked', true);
                                    $('.right-side-filters input[type="checkbox"]#' + thisValue[i]).parent().find('.custom-checkbox').html('✓');
                                }
                            }
                        }

                        // dont allow users to filter only category-5
                        if (thisValue.includes('category-5') && !thisValue.includes('category-1')) {
                            thisValue.push('category-1');
                        }

                        $('.right-side-filters input[type="checkbox"]').prop('checked', true);
                        updateTopLocationsSelectOnBottomFilterChange(thisValue);
                    }

                    // this event is fired in 2 cases:
                    // - when someone click a marker pin right on the map
                    // - when someone select location right from the select dropdown with locations
                    $(document).on('showLocationInList', async function (event) {
                        if (event.response_data) {
                            if ($('.results-list .continents-list').hasClass('hide')) {
                                $('.custom-search-list').addClass('hide');
                                $('.continents-list, .results-nav').removeClass('hide');

                                $('.locations-splitted-by-category .filter-option-inner-inner').removeClass('fs-0').find('.custom-label').remove();
                            }

                            console.log(event.response_data, 'event.response_data');

                            var initialZoom = undefined;
                            if (event.response_data.zoom) {
                                initialZoom = event.response_data.zoom;
                            }

                            var centerCity = undefined;
                            if (event.response_data.center_by_average_coordinates) {
                                centerCity = event.response_data.center_by_average_coordinates;
                            }

                            var listAlreadyLoaded = false;
                            var disallowAlreadyLoaded = false;
                            for (var i = 0, len = $('.locations-category-list').length; i < len; i+=1) {
                                if ($('.locations-category-list').eq(i).find('li').length > 0) {
                                    listAlreadyLoaded = true;
                                    break;
                                }
                            }

                            if (event.response_data.disallowAlreadyLoaded) {
                                disallowAlreadyLoaded = true;
                            }

                            // if trying to request location which is visible on the map, but from different country and not visible in the results list
                            if ($('.country-list-parent.open-item > a').length && event.response_data.country_code != $('.country-list-parent.open-item > a').attr('data-country-code')) {
                                disallowAlreadyLoaded = true;
                            }

                            if (listAlreadyLoaded && !disallowAlreadyLoaded) {
                                $('.locations-list .single-location').removeClass('toggled');
                                $('.results-list').scrollTop(0);

                                if (event.response_data.id && event.response_data.source) {
                                    $('.locations-list .single-location a[data-location-id="'+event.response_data.id+'"][data-location-source="'+event.response_data.source+'"]').closest('.single-location').addClass('toggled');
                                    $('.results-list').scrollTop($('.locations-list .single-location a[data-location-id="'+event.response_data.id+'"][data-location-source="'+event.response_data.source+'"]').closest('.single-location').position().top - 15);
                                }
                            } else {
                                // close countries
                                $('.results-list .shown').removeClass('shown');
                                $('.results-list .countries-nav').addClass('shown');
                                $('.countries-list .country-list-parent').removeClass('hide open-item');

                                // close continents
                                $('.continents-list > ul > li').removeClass('hide open-item');
                                $('.results-list .shown').removeClass('shown');
                                $('.results-list .continents-nav').addClass('shown');

                                for (var i = 0, len = $('.continents-list .single-continent').length; i < len; i+=1) {
                                    if (JSON.parse($('.continents-list .single-continent').eq(i).find('> a').attr('data-country-codes')).includes(event.response_data.country_code)) {
                                        $('.continents-list .single-continent').addClass('hide');
                                        $('.continents-list .single-continent').eq(i).addClass('open-item');

                                        for (var y = 0, leny = $('.single-continent.open-item .countries-list li').length; y < leny; y+=1) {
                                            if ($('.single-continent.open-item .countries-list li').eq(y).find('> a').attr('data-country-code') == event.response_data.country_code) {
                                                $('.continents-list .single-continent').eq(i).find('.country-list-parent').addClass('hide');
                                                $('.countries-list a[data-country-code="'+event.response_data.country_code+'"]').closest('.country-list-parent').addClass('open-item');

                                                var city = undefined;
                                                if (event.response_data.city) {
                                                    city = event.response_data.city;
                                                }

                                                if (event.response_data.id && event.response_data.source && event.response_data.content) {
                                                    lastMapData = {
                                                        initialLat: event.response_data.lat,
                                                        initialLng: event.response_data.lng,
                                                        initialZoom: initialZoom,
                                                        filter_country: event.response_data.country_code,
                                                        location_id_and_source_pairs: [[parseInt(event.response_data.id), event.response_data.source]],
                                                        categories: $('.selectpicker.location-types').val(),
                                                        campForZoomChange: true,
                                                        filter_city: city,
                                                        location_content: event.response_data.content,
                                                        center_by_average_coordinates: centerCity
                                                    };

                                                    initMap(locationsOnInit, lastMapData);
                                                } else {
                                                    lastMapData = {
                                                        initialLat: event.response_data.lat,
                                                        initialLng: event.response_data.lng,
                                                        initialZoom: initialZoom,
                                                        filter_country: event.response_data.country_code,
                                                        location_id_and_source_pairs: [],
                                                        categories: $('.selectpicker.location-types').val(),
                                                        campForZoomChange: true,
                                                        filter_city: city,
                                                        center_by_average_coordinates: centerCity,
                                                    };

                                                    initMap(locationsOnInit, lastMapData);
                                                }

                                                await buildCountryLocationsList($('.countries-list a[data-country-code="'+event.response_data.country_code+'"]').parent().find('.locations-category-list'), event.response_data.country_code, $('.countries-list a[data-country-code="'+event.response_data.country_code+'"]'));

                                                if (event.response_data.response_type == 'single-location') {
                                                    $('.locations-category-list .category-toggle-button').removeClass('hide');
                                                    $('.locations-category-list .locations-list .single-location').removeClass('hide');

                                                    $('.picker-and-map .picker-value span').html(1);
                                                    var thisLocation = $('.locations-list .toggle-location-tile[data-location-id="'+event.response_data.id+'"][data-location-source="'+event.response_data.source+'"]');
                                                    thisLocation.closest('.locations-category-list').find('.category-toggle-button').addClass('hide');
                                                    thisLocation.closest('.locations-category-list').find('.locations-list .single-location').addClass('hide');

                                                    thisLocation.closest('.single-location').removeClass('hide');
                                                    thisLocation.closest('.locations-list').parent().find('.category-toggle-button').removeClass('hide');
                                                } else if (event.response_data.response_type == 'city') {
                                                    $('.locations-category-list .category-toggle-button').removeClass('hide');
                                                    $('.locations-category-list .locations-list .single-location').removeClass('hide');

                                                    var locationsInThisCity = $('.locations-list .toggle-location-tile[data-city="'+event.response_data.city+'"]');
                                                    if (locationsInThisCity.length) {
                                                        $('.picker-and-map .picker-value span').html(locationsInThisCity.length);
                                                        $('.locations-category-list .category-toggle-button').addClass('hide');
                                                        $('.locations-category-list .locations-list .single-location').addClass('hide');

                                                        for (var i = 0, len = locationsInThisCity.length; i < len; i+=1) {
                                                            locationsInThisCity.eq(i).closest('.single-location').removeClass('hide');
                                                            locationsInThisCity.eq(i).closest('.locations-list').parent().find('.category-toggle-button').removeClass('hide');
                                                        }
                                                    }

                                                    // creating one more step in the "GO BACK" order. With this step when you have selected city from the dropdown and when you click the back arrow you are going to the same country, but with all locations unfiltered by city and then you can proceed to go back to the continent.
                                                    $('.picker-label .go-back-to-countries').addClass('hide');
                                                    $('.picker-label').append('<a href="javascript:void(0);" class="go-back-to-country"><img src="/assets/uploads/back-map-arrow.svg" alt="Red left arrow" class="margin-right-5 inline-block"> <span class="inline-block">'+event.response_data.city+'</span></a>');
                                                    $('.picker-label .go-back-to-country').click(function() {
                                                        $(this).remove();
                                                        $('.picker-label .go-back-to-countries').removeClass('hide');
                                                        $('.picker-value span').html($('.countries-list a[data-country-code="'+event.response_data.country_code+'"]').parent().find('.locations-list .single-location').length);
                                                        $('.countries-list a[data-country-code="'+event.response_data.country_code+'"]').parent().find('.locations-list .single-location').removeClass('hide');
                                                    });
                                                }

                                                $('.locations-list .single-location').removeClass('toggled');

                                                $('.results-list').scrollTop(0);

                                                if (event.response_data.id && event.response_data.source) {
                                                    $('.locations-list .single-location a[data-location-id="'+event.response_data.id+'"][data-location-source="'+event.response_data.source+'"]').closest('.single-location').addClass('toggled');
                                                    $('.results-list').scrollTop($('.locations-list .single-location a[data-location-id="'+event.response_data.id+'"][data-location-source="'+event.response_data.source+'"]').closest('.single-location').position().top - 15);
                                                }
                                                break;
                                            }
                                        }

                                        break;
                                    }
                                }
                            }
                        }
                    });

                    $(document).on('keyup', function (event) {
                        console.log('SEARCH');
                        if ($(event.target).is('.locations-splitted-by-category .bs-searchbox .form-control')) {
                            $('.locations-splitted-by-category .dropdown-menu .active').removeClass('selected active');
                            if (event.which == 13) {
                                event.preventDefault();

                                var currentLocationsTypesFilter = $('select.location-types').val();
                                if (currentLocationsTypesFilter.includes('category-5') && !currentLocationsTypesFilter.includes('category-1')) {
                                    currentLocationsTypesFilter.push('category-1');
                                }

                                var searchKeyword = $('.locations-splitted-by-category .bs-searchbox .form-control').val().trim();
                                if (searchKeyword != '') {
                                    console.log(searchKeyword, 'searchKeyword');
                                    projectData.events.fireGoogleAnalyticsEvent('Map', 'Search', searchKeyword);

                                    var searchHtml = '';
                                    var location_id_and_source_pairs = [];
                                    for (var i = 0, len = locationsOnInit.length; i < len; i+=1) {
                                        // search by name, city and country_name
                                        if (((locationsOnInit[i].name != null && locationsOnInit[i].name != undefined && locationsOnInit[i].name.toLowerCase().includes(searchKeyword.toLowerCase())) || (locationsOnInit[i].city != null && locationsOnInit[i].city != undefined && locationsOnInit[i].city.toLowerCase().includes(searchKeyword.toLowerCase())) || (locationsOnInit[i].country_name != null && locationsOnInit[i].country_name != undefined && locationsOnInit[i].country_name.toLowerCase().includes(searchKeyword.toLowerCase()))) && currentLocationsTypesFilter.includes(locationsOnInit[i].category)) {
                                            searchHtml += buildSingleLocationTile(locationsOnInit[i].avatar_url, locationsOnInit[i].name, locationsOnInit[i].address, locationsOnInit[i].is_partner, locationsOnInit[i].city, locationsOnInit[i].phone, locationsOnInit[i].website, locationsOnInit[i].top_dentist_month, locationsOnInit[i].avg_rating, locationsOnInit[i].ratings, locationsOnInit[i].trp_public_profile_link, locationsOnInit[i].country_name, locationsOnInit[i].id, locationsOnInit[i].source, locationsOnInit[i].lat, locationsOnInit[i].lng);

                                            location_id_and_source_pairs.push([locationsOnInit[i].id, locationsOnInit[i].source]);
                                        }
                                    }

                                    if (searchHtml != '') {
                                        $('.continents-list, .results-nav').addClass('hide');
                                        $('.custom-search-list').html('<ul>'+searchHtml+listBottomExtraHtml+'</ul>').removeClass('hide');
                                        $('.picker-and-map .picker-value').html('<span class="lato-black">'+location_id_and_source_pairs.length+'</span> Results');

                                        initMap(locationsOnInit, {
                                            location_id_and_source_pairs: location_id_and_source_pairs,
                                            center_by_average_coordinates: true,
                                            type: 'custom-search'
                                        });
                                    } else {
                                        $('.continents-list, .results-nav').addClass('hide');
                                        $('.picker-and-map .picker-value').html('<span class="lato-black">0</span> Results');
                                        $('.custom-search-list').html('<div class="padding-top-30 padding-left-20 padding-right-20 text-center fs-20 lato-bold">No locations found for this search keyword.</div>').removeClass('hide');
                                    }

                                    $('.locations-splitted-by-category .filter-option-inner-inner .custom-label').remove();
                                    $('.locations-splitted-by-category .filter-option-inner-inner').addClass('fs-0').append('<div class="custom-label color-black fs-16">'+searchKeyword+'</div>');

                                    $('.picker-and-map .picker-label').html('<a href="javascript:void(0);" class="go-back-to-continents remove-custom-search-list"><img src="/assets/uploads/back-map-arrow.svg" alt="Red left arrow" class="margin-right-5 inline-block"/> <span class="inline-block">Back to list</span></a>');

                                    $('.go-back-to-continents.remove-custom-search-list').click(function() {
                                        $('.custom-search-list').addClass('hide');
                                        $('.continents-list, .results-nav').removeClass('hide');

                                        $('.locations-splitted-by-category .filter-option-inner-inner').removeClass('fs-0').find('.custom-label').remove();
                                    });

                                    $('.locations-splitted-by-category .bootstrap-select').removeClass('open');
                                }
                            }
                        }
                    });

                    $('.selectpicker.locations').on('change', function() {
                        var thisValue = $(this).val().trim();

                        if ($(this).find('option:selected').hasClass('option-type')) {
                            // LOCATION
                            $.event.trigger({
                                type: 'showLocationInList',
                                time: new Date(),
                                response_data: {
                                    'country_code' : $(this).find('option:selected').attr('data-country-code'),
                                    'id' : $(this).find('option:selected').attr('data-id'),
                                    'source' : thisValue,
                                    'zoom' : 15,
                                    'lat' : $(this).find('option:selected').attr('data-lat'),
                                    'lng' : $(this).find('option:selected').attr('data-lng'),
                                    'disallowAlreadyLoaded' : true,
                                    'content' : '<div class="map-infowindow"><button>'+$(this).find('option:selected').html().trim()+'</button></div>',
                                    'response_type' : 'single-location'
                                }
                            });
                        } else if ($(this).find('option:selected').hasClass('city-type')) {
                            // CITY
                            var eventData = {
                                'country_code' : $(this).find('option:selected').attr('data-country-code'),
                                'city' : $(this).find('option:selected').attr('data-city'),
                                'zoom' : 7,
                                'disallowAlreadyLoaded' : true,
                                'center_by_average_coordinates' : true,
                                'response_type' : 'city'
                            };

                            $.event.trigger({
                                type: 'showLocationInList',
                                time: new Date(),
                                response_data: eventData
                            });
                        } else if ($(this).find('option:selected').hasClass('country-type')) {
                            // COUNTRY
                            var eventData = {
                                'country_code' : $(this).find('option:selected').attr('data-country-code'),
                                'zoom' : 5,
                                'disallowAlreadyLoaded' : true
                            };

                            if ($(this).find('option:selected').attr('data-centroid-lat') != undefined) {
                                eventData.lat = $(this).find('option:selected').attr('data-centroid-lat');
                            }
                            if ($(this).find('option:selected').attr('data-centroid-lng') != undefined) {
                                eventData.lng = $(this).find('option:selected').attr('data-centroid-lng');
                            }

                            $.event.trigger({
                                type: 'showLocationInList',
                                time: new Date(),
                                response_data: eventData
                            });
                        }
                    });

                    $('.locations-splitted-by-category .bs-searchbox input').on('change keyup focusout paste', function() {
                        if ($(this).val().trim() != '') {
                            $(this).closest('.dropdown-menu').find('.inner').show();
                        } else {
                            $(this).closest('.dropdown-menu').find('.inner').hide();
                        }
                    });

                    // =================== CONTINENTS LOGIC ====================
                    $('.continents-list > ul > li > a').click(async function() {
                        // MAKE REQUEST TO QUERY ALL LOCATIONS ONLY FOR THIS CONTINENT
                        projectData.events.fireGoogleAnalyticsEvent('Map', 'Continent', $(this).find('.element-name').html());

                        $('.continents-list > ul > li').addClass('hide');

                        $(this).closest('li').addClass('open-item');
                        $('.results-list .shown').removeClass('shown');
                        $('.results-list .countries-nav').addClass('shown');

                        $('.dentacoin-stats-category-label span').html('in ' + $(this).find('.element-name').html());

                        if ($('.locations-category-list .locations-list .single-location.hide').length) {
                            $('.locations-category-list .locations-list .single-location').removeClass('hide');
                        }

                        if ($('.continents-list .single-continent .country-list-parent.hide').length) {
                            $('.continents-list .single-continent .country-list-parent.hide').removeClass('hide');
                        }

                        if ($('.continents-list .single-continent .country-list-parent.open-item').length) {
                            $('.continents-list .single-continent .country-list-parent.open-item').removeClass('open-item');
                        }

                        $('.picker-and-map .picker-label').html('<a href="javascript:void(0);" class="go-back-to-continents"><img src="/assets/uploads/back-map-arrow.svg" alt="Red left arrow" class="margin-right-5 inline-block"/> <span class="inline-block">'+$(this).find('.element-name').html().trim()).attr('data-last-continent', $(this).find('.element-name').html().trim()+'</span></a>');

                        $('.results-list').scrollTop(0);

                        lastMapData = {
                            filter_country: JSON.parse($('.single-continent.open-item > a').attr('data-country-codes')),
                            location_id_and_source_pairs: [],
                            categories: $('.selectpicker.location-types').val(),
                            campForZoomChange: true,
                            initialLat: undefined,
                            initialLng: undefined,
                            initialZoom: undefined
                        };

                        initMap(locationsOnInit, lastMapData);

                        updateContinentData($(this).attr('data-country-codes'));
                    });

                    async function updateContinentData(codes) {
                        if (codes != undefined && basic.isJsonString(codes)) {
                            var continentCountriesCodes = codes;

                            // request to update the locations count in the gray header line
                            var currentContinentLocationsCount = await projectData.requests.getMapData({action: 'get-continent-stats', data: continentCountriesCodes});
                            if (currentContinentLocationsCount.success) {
                                $('.picker-and-map .picker-value').html('<span class="lato-black">'+currentContinentLocationsCount.data+'</span> Results').attr('data-last-continent', currentContinentLocationsCount.data);
                            }

                            // make request to update partners, non partners and users stats at the bottom
                            var combinedCountByMultipleCountry = await projectData.requests.getMapData({action: 'combined-count-by-multiple-country', data: continentCountriesCodes});
                            if (combinedCountByMultipleCountry.success) {
                                if ($('.changeable-stats .partners').length) {
                                    $('.changeable-stats .partners span').html(combinedCountByMultipleCountry.data['partners']);
                                    $('.changeable-stats .partners').attr('data-last-continent', combinedCountByMultipleCountry.data['partners']);
                                }
                                if ($('.changeable-stats .non-partners').length) {
                                    $('.changeable-stats .non-partners span').html(combinedCountByMultipleCountry.data['non_partners']);
                                    $('.changeable-stats .non-partners').attr('data-last-continent', combinedCountByMultipleCountry.data['non_partners'])
                                }
                                if ($('.changeable-stats .users').length) {
                                    $('.changeable-stats .users span').html(combinedCountByMultipleCountry.data['patients']);
                                    $('.changeable-stats .users').attr('data-last-continent', combinedCountByMultipleCountry.data['patients']);
                                }
                            }
                        }
                    }

                    $(document).on('click', '.go-back-to-continents', function() {
                        $('.continents-list > ul > li').removeClass('hide open-item');

                        $('.results-list .shown').removeClass('shown');
                        $('.results-list .continents-nav').addClass('shown');

                        $('.dentacoin-stats-category-label span').html('Worldwide');
                        $('.picker-and-map .picker-label').html('Worldwide');

                        $('.results-list').scrollTop(0);

                        lastMapData = {
                            categories: $('.selectpicker.location-types').val(),
                            filter_country: undefined,
                            location_id_and_source_pairs: [],
                            campForZoomChange: undefined,
                            initialLat: undefined,
                            initialLng: undefined,
                            initialZoom: undefined
                        };

                        initMap(locationsOnInit, lastMapData);

                        if ($('.picker-and-map .picker-value').attr('data-worldwide') != '') {
                            $('.picker-and-map .picker-value').html('<span class="lato-black">'+$('.picker-and-map .picker-value').attr('data-worldwide')+'</span> Results');
                        }

                        if ($('.changeable-stats .partners').length) {
                            $('.changeable-stats .partners span').html($('.changeable-stats .partners').attr('data-worldwide'));
                        }

                        if ($('.changeable-stats .non-partners').length) {
                            $('.changeable-stats .non-partners span').html($('.changeable-stats .non-partners').attr('data-worldwide'));
                        }

                        if ($('.changeable-stats .users').length) {
                            $('.changeable-stats .users span').html($('.changeable-stats .users').attr('data-worldwide'));
                        }
                    });
                    // =================== /CONTINENTS LOGIC ===================

                    // =================== COUNTRIES LOGIC ====================
                    async function buildCountryLocationsList(list, code, thisBtn) {
                        projectData.general_logic.data.showLoader();
                        var totalLocationsCountByCountry = 0;

                        // Partner Dental Practices
                        var currentCountryPartnersData = await projectData.requests.getMapData({action: 'all-partners-data-by-country', data: code});
                        if (currentCountryPartnersData.success && currentCountryPartnersData.data.length > 0) {
                            // checking if visibility allowed by bottom category filter
                            var iconClass = 'fa-minus-circle';
                            var parentElementClass = '';
                            if (!$('.right-side-filters #category-1').is(':checked') && !$('.right-side-filters #category-5').is(':checked')) {
                                iconClass = 'fa-plus-circle';
                                parentElementClass = 'closed';
                            }

                            var tooltipHtml = '';
                            if (currentCountryPartnersData.description != null && currentCountryPartnersData.description != undefined) {
                                tooltipHtml = 'data-toggle="tooltip" title="'+currentCountryPartnersData.description+'"';
                            }

                            var bindPartnersCategoryHtml = '<li class="'+parentElementClass+' category-label" data-name="'+currentCountryPartnersData.name+'"><a href="javascript:void(0);" class="category-toggle-button partners fs-20 fs-xs-18" '+tooltipHtml+'><span><i class="fa '+iconClass+'" aria-hidden="true"></i> '+currentCountryPartnersData.name+'</span></a><ul class="locations-list">';
                            for (var i = 0, len = currentCountryPartnersData.data.length; i < len; i+=1) {
                                bindPartnersCategoryHtml += buildSingleLocationTile(currentCountryPartnersData.data[i].avatar_url, currentCountryPartnersData.data[i].name, currentCountryPartnersData.data[i].address, currentCountryPartnersData.data[i].is_partner, currentCountryPartnersData.data[i].city_name, currentCountryPartnersData.data[i].phone, currentCountryPartnersData.data[i].website, currentCountryPartnersData.data[i].top_dentist_month, currentCountryPartnersData.data[i].avg_rating, currentCountryPartnersData.data[i].ratings, currentCountryPartnersData.data[i].trp_public_profile_link, thisBtn.find('.element-name').html(), currentCountryPartnersData.data[i].id, 'core-db', currentCountryPartnersData.data[i].lat, currentCountryPartnersData.data[i].lon);
                            }

                            bindPartnersCategoryHtml+='</ul></li>';
                            list.append(bindPartnersCategoryHtml);
                        }

                        // Partner Dental Labs, Partner Dental Suppliers, Other Industry Partners
                        var getLabsSuppliersAndIndustryPartnersData = await projectData.requests.getLabsSuppliersAndIndustryPartners({'country-code' : code});
                        if (getLabsSuppliersAndIndustryPartnersData.success) {
                            // Partner Dental Labs
                            if (getLabsSuppliersAndIndustryPartnersData.data.labs.data.length > 0) {
                                // checking if visibility allowed by bottom category filter
                                var iconClass = 'fa-minus-circle';
                                var parentElementClass = '';
                                if (!$('.right-side-filters #category-2').is(':checked')) {
                                    iconClass = 'fa-plus-circle';
                                    parentElementClass = 'closed';
                                }

                                var tooltipHtml = '';
                                if (getLabsSuppliersAndIndustryPartnersData.data.labs.description != null && getLabsSuppliersAndIndustryPartnersData.data.labs.description != undefined) {
                                    tooltipHtml = 'data-toggle="tooltip" title="'+getLabsSuppliersAndIndustryPartnersData.data.labs.description+'"';
                                }

                                totalLocationsCountByCountry += getLabsSuppliersAndIndustryPartnersData.data.labs.data.length;
                                var bindLabsCategoryHtml = '<li class="'+parentElementClass+' category-label" data-name="'+getLabsSuppliersAndIndustryPartnersData.data.labs.name+'"><a href="javascript:void(0);" class="category-toggle-button labs fs-20 fs-xs-18" '+tooltipHtml+'><span><i class="fa '+iconClass+'" aria-hidden="true"></i> '+getLabsSuppliersAndIndustryPartnersData.data.labs.name+'</span></a><ul class="locations-list">';
                                for (var i = 0, len = getLabsSuppliersAndIndustryPartnersData.data.labs.data.length; i < len; i+=1) {
                                    bindLabsCategoryHtml += buildSingleLocationTile('//dentacoin.com/assets/uploads/' + getLabsSuppliersAndIndustryPartnersData.data.labs.data[i].clinic_media, getLabsSuppliersAndIndustryPartnersData.data.labs.data[i].clinic_name, getLabsSuppliersAndIndustryPartnersData.data.labs.data[i].address, null, null, null, getLabsSuppliersAndIndustryPartnersData.data.labs.data[i].clinic_link, null, null, null, null, thisBtn.find('.element-name').html(), getLabsSuppliersAndIndustryPartnersData.data.labs.data[i].id, 'dentacoin-db', getLabsSuppliersAndIndustryPartnersData.data.labs.data[i].lat, getLabsSuppliersAndIndustryPartnersData.data.labs.data[i].lng);
                                }

                                bindLabsCategoryHtml+='</ul></li>';
                                list.append(bindLabsCategoryHtml);
                            }

                            // Partner Dental Suppliers
                            if (getLabsSuppliersAndIndustryPartnersData.data.suppliers.data.length > 0) {
                                // checking if visibility allowed by bottom category filter
                                var iconClass = 'fa-minus-circle';
                                var parentElementClass = '';
                                if (!$('.right-side-filters #category-3').is(':checked')) {
                                    iconClass = 'fa-plus-circle';
                                    parentElementClass = 'closed';
                                }

                                var tooltipHtml = '';
                                if (getLabsSuppliersAndIndustryPartnersData.data.suppliers.description != null && getLabsSuppliersAndIndustryPartnersData.data.suppliers.description != undefined) {
                                    tooltipHtml = 'data-toggle="tooltip" title="'+getLabsSuppliersAndIndustryPartnersData.data.suppliers.description+'"';
                                }

                                totalLocationsCountByCountry += getLabsSuppliersAndIndustryPartnersData.data.suppliers.data.length;
                                var bindSuppliersCategoryHtml = '<li class="'+parentElementClass+' category-label" data-name="'+getLabsSuppliersAndIndustryPartnersData.data.suppliers.name+'"><a href="javascript:void(0);" class="category-toggle-button suppliers fs-20 fs-xs-18" '+tooltipHtml+'><span><i class="fa '+iconClass+'" aria-hidden="true"></i> '+getLabsSuppliersAndIndustryPartnersData.data.suppliers.name+'</span></a><ul class="locations-list">';
                                for (var i = 0, len = getLabsSuppliersAndIndustryPartnersData.data.suppliers.data.length; i < len; i+=1) {
                                    bindSuppliersCategoryHtml += buildSingleLocationTile('//dentacoin.com/assets/uploads/' + getLabsSuppliersAndIndustryPartnersData.data.suppliers.data[i].clinic_media, getLabsSuppliersAndIndustryPartnersData.data.suppliers.data[i].clinic_name, getLabsSuppliersAndIndustryPartnersData.data.suppliers.data[i].address, null, null, null, getLabsSuppliersAndIndustryPartnersData.data.suppliers.data[i].clinic_link, null, null, null, null, thisBtn.find('.element-name').html(), getLabsSuppliersAndIndustryPartnersData.data.suppliers.data[i].id, 'dentacoin-db', getLabsSuppliersAndIndustryPartnersData.data.suppliers.data[i].lat, getLabsSuppliersAndIndustryPartnersData.data.suppliers.data[i].lng);
                                }

                                bindSuppliersCategoryHtml+='</ul></li>';
                                list.append(bindSuppliersCategoryHtml);
                            }

                            // Other Industry Partners
                            if (getLabsSuppliersAndIndustryPartnersData.data.industryPartners.data.length > 0) {
                                // checking if visibility allowed by bottom category filter
                                var iconClass = 'fa-minus-circle';
                                var parentElementClass = '';
                                if (!$('.right-side-filters #category-4').is(':checked')) {
                                    iconClass = 'fa-plus-circle';
                                    parentElementClass = 'closed';
                                }

                                var tooltipHtml = '';
                                if (getLabsSuppliersAndIndustryPartnersData.data.industryPartners.description != null && getLabsSuppliersAndIndustryPartnersData.data.industryPartners.description != undefined) {
                                    tooltipHtml = 'data-toggle="tooltip" title="'+getLabsSuppliersAndIndustryPartnersData.data.industryPartners.description+'"';
                                }

                                totalLocationsCountByCountry += getLabsSuppliersAndIndustryPartnersData.data.industryPartners.data.length;
                                var bindIndustryPartnersCategoryHtml = '<li class="'+parentElementClass+' category-label" data-name="'+getLabsSuppliersAndIndustryPartnersData.data.industryPartners.name+'"><a href="javascript:void(0);" class="category-toggle-button industryPartners fs-20 fs-xs-18" '+tooltipHtml+'><span><i class="fa '+iconClass+'" aria-hidden="true"></i> '+getLabsSuppliersAndIndustryPartnersData.data.industryPartners.name+'</span></a><ul class="locations-list">';
                                for (var i = 0, len = getLabsSuppliersAndIndustryPartnersData.data.industryPartners.data.length; i < len; i+=1) {
                                    bindIndustryPartnersCategoryHtml += buildSingleLocationTile('//dentacoin.com/assets/uploads/' + getLabsSuppliersAndIndustryPartnersData.data.industryPartners.data[i].clinic_media, getLabsSuppliersAndIndustryPartnersData.data.industryPartners.data[i].clinic_name, getLabsSuppliersAndIndustryPartnersData.data.industryPartners.data[i].address, null, null, null, getLabsSuppliersAndIndustryPartnersData.data.industryPartners.data[i].clinic_link, null, null, null, null, thisBtn.find('.element-name').html(), getLabsSuppliersAndIndustryPartnersData.data.industryPartners.data[i].id, 'dentacoin-db', getLabsSuppliersAndIndustryPartnersData.data.industryPartners.data[i].lat, getLabsSuppliersAndIndustryPartnersData.data.industryPartners.data[i].lng);
                                }

                                bindIndustryPartnersCategoryHtml+='</ul></li>';
                                list.append(bindIndustryPartnersCategoryHtml);
                            }
                        }

                        // All Registered Dental Practices
                        var currentCountryNonPartnersData = await projectData.requests.getMapData({action: 'all-non-partners-data-by-country', data: code});
                        if (currentCountryNonPartnersData.success && currentCountryNonPartnersData.data.length > 0) {
                            // checking if visibility allowed by bottom category filter
                            var iconClass = 'fa-minus-circle';
                            var parentElementClass = '';
                            if (!$('.right-side-filters #category-5').is(':checked')) {
                                iconClass = 'fa-plus-circle';
                                parentElementClass = 'closed';
                            }

                            var tooltipHtml = '';
                            if (currentCountryNonPartnersData.description != null && currentCountryNonPartnersData.description != undefined) {
                                tooltipHtml = 'data-toggle="tooltip" title="'+currentCountryNonPartnersData.description+'"';
                            }

                            var bindNonPartnersCategoryHtml = '<li class="'+parentElementClass+' category-label" data-name="'+currentCountryNonPartnersData.name+'"><a href="javascript:void(0);" class="category-toggle-button non-partners fs-20 fs-xs-18" '+tooltipHtml+'><span><i class="fa '+iconClass+'" aria-hidden="true"></i> Other registered dental practices</span></a><ul class="locations-list">';
                            for (var i = 0, len = currentCountryNonPartnersData.data.length; i < len; i+=1) {
                                bindNonPartnersCategoryHtml += buildSingleLocationTile(currentCountryNonPartnersData.data[i].avatar_url, currentCountryNonPartnersData.data[i].name, currentCountryNonPartnersData.data[i].address, currentCountryNonPartnersData.data[i].is_partner, currentCountryNonPartnersData.data[i].city_name, currentCountryNonPartnersData.data[i].phone, currentCountryNonPartnersData.data[i].website, currentCountryNonPartnersData.data[i].top_dentist_month, currentCountryNonPartnersData.data[i].avg_rating, currentCountryNonPartnersData.data[i].ratings, currentCountryNonPartnersData.data[i].trp_public_profile_link, thisBtn.find('.element-name').html(), currentCountryNonPartnersData.data[i].id, 'core-db', currentCountryNonPartnersData.data[i].lat, currentCountryNonPartnersData.data[i].lon);
                            }

                            bindNonPartnersCategoryHtml+='</ul></li>';
                            list.append(bindNonPartnersCategoryHtml);
                        }

                        list.append(listBottomExtraHtml);
                        projectData.general_logic.data.initTooltips();

                        // make request to select all locations DATA for this country FOR THE MAP
                        var currentCountryLocationsData = await projectData.requests.getMapData({action: 'all-partners-and-non-partners-data-by-country', data: code});
                        if (currentCountryLocationsData.success) {
                            totalLocationsCountByCountry += currentCountryLocationsData.data.length;

                            $('.dentacoin-stats-category-label span').html('in ' + thisBtn.find('.element-name').html());
                            $('.picker-and-map .picker-label').html('<a href="javascript:void(0);" class="go-back-to-countries"><img src="/assets/uploads/back-map-arrow.svg" alt="Red left arrow" class="margin-right-5 inline-block"/> <span class="inline-block">'+thisBtn.find('.element-name').html().trim()+'</span></a>');
                            $('.picker-and-map .picker-value').html('<span class="lato-black">'+totalLocationsCountByCountry+'</span> Results');

                            for (var i = 0, len = currentCountryLocationsData.data.length; i < len; i+=1) {
                                // console.log(currentCountryLocationsData.data[i], 'THIS WILL BE USED TO BE SHOWN ON THE MAP');
                            }
                        }

                        $('.results-list').scrollTop(0);

                        if (thisBtn.parent().find('.locations-category-list li').length == 0) {
                            thisBtn.parent().find('.locations-category-list').html('<div class="fs-18 padding-top-20 padding-bottom-20 text-center">No locations found.</div>');
                        } else {
                            // toggle category button hide/ show logic
                            $('.locations-category-list .category-toggle-button').click(function() {
                                $(this).closest('li').toggleClass('closed');

                                if ($(this).find('i').hasClass('fa-minus-circle')) {
                                    $(this).find('i').removeClass('fa-minus-circle').addClass('fa-plus-circle');

                                    if ($(this).hasClass('partners')) {
                                        // uncheck category-1
                                        updateTopAndBottomLocationTypesFilters('category-1', false);
                                    } else if ($(this).hasClass('labs')) {
                                        // check category-2
                                        updateTopAndBottomLocationTypesFilters('category-2', false);
                                    } else if ($(this).hasClass('suppliers')) {
                                        // check category-3
                                        updateTopAndBottomLocationTypesFilters('category-3', false);
                                    } else if ($(this).hasClass('industryPartners')) {
                                        // check category-4
                                        updateTopAndBottomLocationTypesFilters('category-4', false);
                                    } else if ($(this).hasClass('non-partners')) {
                                        // check category-5
                                        updateTopAndBottomLocationTypesFilters('category-5', false);
                                    }

                                    $('.selectpicker.location-types').selectpicker('refresh');
                                } else {
                                    $(this).find('i').removeClass('fa-plus-circle').addClass('fa-minus-circle');

                                    if ($(this).hasClass('partners')) {
                                        // check category-1
                                        updateTopAndBottomLocationTypesFilters('category-1', true);
                                    } else if ($(this).hasClass('labs')) {
                                        // check category-2
                                        updateTopAndBottomLocationTypesFilters('category-2', true);
                                    } else if ($(this).hasClass('suppliers')) {
                                        // check category-3
                                        updateTopAndBottomLocationTypesFilters('category-3', true);
                                    } else if ($(this).hasClass('industryPartners')) {
                                        // check category-4
                                        updateTopAndBottomLocationTypesFilters('category-4', true);
                                    } else if ($(this).hasClass('non-partners')) {
                                        // check category-5
                                        updateTopAndBottomLocationTypesFilters('category-5', true);
                                    }

                                    $('.selectpicker.location-types').selectpicker('refresh');
                                }

                                // updating lastMapData categories
                                lastMapData.categories = $('.selectpicker.location-types').val();
                                initMap(locationsOnInit, {
                                    initialLat: lastMapData.initialLat,
                                    initialLng: lastMapData.initialLng,
                                    initialZoom: lastMapData.initialZoom,
                                    filter_country: lastMapData.filter_country,
                                    location_id_and_source_pairs: [[parseInt(lastMapData.location_id), lastMapData.location_source]],
                                    categories: lastMapData.categories,
                                    campForZoomChange: true
                                });
                            });

                            function updateTopAndBottomLocationTypesFilters(category_id, bool) {
                                $('select.location-types option[value="'+category_id+'"]').prop('selected', bool);

                                $('.right-side-filters input[type="checkbox"]#'+category_id).prop('checked', bool);
                                if (bool) {
                                    $('.right-side-filters input[type="checkbox"]#'+category_id).parent().find('.custom-checkbox').html('✓');
                                } else {
                                    $('.right-side-filters input[type="checkbox"]#'+category_id).parent().find('.custom-checkbox').html('');
                                }
                            }
                        }

                        $('.results-list .shown').removeClass('shown');
                        $('.results-list .locations-nav').addClass('shown');

                        $('.continents-list .single-continent .country-list-parent').addClass('hide');
                        thisBtn.parent().removeClass('hide').addClass('open-item');

                        // make request to select all partners COUNT for this country
                        var combinedCountByCountry = await projectData.requests.getMapData({action: 'combined-count-by-country', data: code});
                        if (combinedCountByCountry.success) {
                            if ($('.changeable-stats .partners').length) {
                                $('.changeable-stats .partners span').html(combinedCountByCountry.data['partners']);
                            }
                            if ($('.changeable-stats .non-partners').length) {
                                $('.changeable-stats .non-partners span').html(combinedCountByCountry.data['non_partners']);
                            }
                            if ($('.changeable-stats .users').length) {
                                $('.changeable-stats .users span').html(combinedCountByCountry.data['patients']);
                            }
                        }

                        projectData.general_logic.data.hideLoader();
                    }

                    // toggle bottom filter hide/ show logic
                    $('.right-side-filters input[type="checkbox"]').on('change', function() {
                        var thisCheckbox = $(this);
                        switch(thisCheckbox.attr('id')) {
                            case 'category-1':
                                if (thisCheckbox.is(':checked')) {
                                    projectData.events.fireGoogleAnalyticsEvent('Map', 'Check type filter', thisCheckbox.attr('data-name'));
                                    $('select.location-types option[value="'+thisCheckbox.attr('id')+'"]').prop('selected', true);
                                } else {
                                    projectData.events.fireGoogleAnalyticsEvent('Map', 'Uncheck type filter', thisCheckbox.attr('data-name'));
                                    $('select.location-types option[value="'+thisCheckbox.attr('id')+'"]').prop('selected', false);
                                }

                                var topFilterValue = $('.selectpicker.location-types').val();
                                if (topFilterValue.includes('category-5') && !topFilterValue.includes('category-1')) {
                                    topFilterValue.push('category-1');
                                }

                                updateTopLocationsSelectOnBottomFilterChange(topFilterValue);

                                $('.selectpicker.location-types').selectpicker('refresh');

                                break;
                            case 'category-2':
                                if (thisCheckbox.is(':checked')) {
                                    projectData.events.fireGoogleAnalyticsEvent('Map', 'Check type filter', thisCheckbox.attr('data-name'));
                                    $('select.location-types option[value="'+thisCheckbox.attr('id')+'"]').prop('selected', true);
                                } else {
                                    projectData.events.fireGoogleAnalyticsEvent('Map', 'Uncheck type filter', thisCheckbox.attr('data-name'))
                                    $('select.location-types option[value="'+thisCheckbox.attr('id')+'"]').prop('selected', false);
                                }

                                updateTopLocationsSelectOnBottomFilterChange($('.selectpicker.location-types').val());

                                $('.selectpicker.location-types').selectpicker('refresh');

                                break;
                            case 'category-3':
                                if (thisCheckbox.is(':checked')) {
                                    projectData.events.fireGoogleAnalyticsEvent('Map', 'Check type filter', thisCheckbox.attr('data-name'));
                                    $('select.location-types option[value="'+thisCheckbox.attr('id')+'"]').prop('selected', true);
                                } else {
                                    projectData.events.fireGoogleAnalyticsEvent('Map', 'Uncheck type filter', thisCheckbox.attr('data-name'))
                                    $('select.location-types option[value="'+thisCheckbox.attr('id')+'"]').prop('selected', false);
                                }

                                updateTopLocationsSelectOnBottomFilterChange($('.selectpicker.location-types').val());

                                $('.selectpicker.location-types').selectpicker('refresh');

                                break;
                            case 'category-4':
                                if (thisCheckbox.is(':checked')) {
                                    projectData.events.fireGoogleAnalyticsEvent('Map', 'Check type filter', thisCheckbox.attr('data-name'));
                                    $('select.location-types option[value="'+thisCheckbox.attr('id')+'"]').prop('selected', true);
                                } else {
                                    projectData.events.fireGoogleAnalyticsEvent('Map', 'Uncheck type filter', thisCheckbox.attr('data-name'))
                                    $('select.location-types option[value="'+thisCheckbox.attr('id')+'"]').prop('selected', false);
                                }

                                updateTopLocationsSelectOnBottomFilterChange($('.selectpicker.location-types').val());

                                $('.selectpicker.location-types').selectpicker('refresh');

                                break;
                            case 'category-5':
                                if (thisCheckbox.is(':checked')) {
                                    projectData.events.fireGoogleAnalyticsEvent('Map', 'Check type filter', thisCheckbox.attr('data-name'));
                                    $('select.location-types option[value="'+thisCheckbox.attr('id')+'"]').prop('selected', true);
                                } else {
                                    projectData.events.fireGoogleAnalyticsEvent('Map', 'Uncheck type filter', thisCheckbox.attr('data-name'))
                                    $('select.location-types option[value="'+thisCheckbox.attr('id')+'"]').prop('selected', false);
                                }

                                updateTopLocationsSelectOnBottomFilterChange($('.selectpicker.location-types').val());
                                $('.selectpicker.location-types').selectpicker('refresh');

                                break;
                        }
                    });

                    function updateTopLocationsSelectOnBottomFilterChange(valuesArray) {
                        // refresh locations selectpicker
                        if (Object.keys(JSON.parse($('.locations-style').attr('data-groups-html'))).length > 0) {
                            $('select.selectpicker.locations').html('');
                            var newLocationsSelectHtml = '';
                            Object.keys(JSON.parse($('.locations-style').attr('data-groups-html'))).forEach(function(key,index) {
                                newLocationsSelectHtml += JSON.parse($('.locations-style').attr('data-groups-html'))[key];
                            });
                            $('select.selectpicker.locations').html('<option value="">Show All Locations</option>' + newLocationsSelectHtml);
                        }

                        if (valuesArray.length > 0) {
                            $('select.selectpicker.locations optgroup.optgroup-for-types').addClass('to-remove');

                            $('.category-toggle-button').parent().addClass('closed');
                            $('.category-toggle-button i').removeClass('fa-minus-circle').addClass('fa-plus-circle');

                            // filter
                            for (var i = 0, len = $('select.selectpicker.locations optgroup.optgroup-for-types').length; i < len; i+=1) {
                                for (var y = 0; y < valuesArray.length; y+=1) {
                                    if ($('select.selectpicker.locations optgroup.optgroup-for-types').eq(i).hasClass(valuesArray[y])) {
                                        $('select.selectpicker.locations optgroup.optgroup-for-types').eq(i).removeClass('to-remove');

                                        switch(valuesArray[y]) {
                                            case 'category-1':
                                                $('.category-toggle-button.partners').parent().removeClass('closed');
                                                $('.category-toggle-button.partners i').removeClass('fa-plus-circle').addClass('fa-minus-circle');

                                                break;
                                            case 'category-2':
                                                $('.category-toggle-button.labs').parent().removeClass('closed');
                                                $('.category-toggle-button.labs i').removeClass('fa-plus-circle').addClass('fa-minus-circle');

                                                break;
                                            case 'category-3':
                                                $('.category-toggle-button.suppliers').parent().removeClass('closed');
                                                $('.category-toggle-button.suppliers i').removeClass('fa-plus-circle').addClass('fa-minus-circle');

                                                break;
                                            case 'category-4':
                                                $('.category-toggle-button.industryPartners').parent().removeClass('closed');
                                                $('.category-toggle-button.industryPartners i').removeClass('fa-plus-circle').addClass('fa-minus-circle');

                                                break;
                                            case 'category-5':
                                                $('.category-toggle-button.non-partners').parent().removeClass('closed');
                                                $('.category-toggle-button.non-partners i').removeClass('fa-plus-circle').addClass('fa-minus-circle');

                                                break;
                                        }
                                        break;
                                    }
                                }
                            }

                            $('select.selectpicker.locations optgroup.optgroup-for-types.to-remove').remove();
                        } else {
                            $('select.selectpicker.locations optgroup.optgroup-for-types').addClass('to-remove');
                        }

                        $('.selectpicker.locations').selectpicker('refresh');

                        // updating lastMapData categories
                        lastMapData.categories = $('.selectpicker.location-types').val();

                        var location_id_and_source_pairs = [];
                        if (lastMapData.location_id != undefined && lastMapData.location_source != undefined) {
                            location_id_and_source_pairs = [[parseInt(lastMapData.location_id), lastMapData.location_source]];
                        }
                        initMap(locationsOnInit, {
                            initialLat: lastMapData.initialLat,
                            initialLng: lastMapData.initialLng,
                            initialZoom: lastMapData.initialZoom,
                            filter_country: lastMapData.filter_country,
                            location_id_and_source_pairs: location_id_and_source_pairs,
                            categories: lastMapData.categories,
                            campForZoomChange: true
                        });
                    }

                    $('.countries-list > li > a').click(async function() {
                        var thisBtn = $(this);
                        thisBtn.parent().find('.locations-category-list').html('');

                        projectData.events.fireGoogleAnalyticsEvent('Map', 'Country', thisBtn.find('.element-name').html().trim());

                        lastMapData = {
                            initialLat: thisBtn.attr('data-country-centroid-lat'),
                            initialLng: thisBtn.attr('data-country-centroid-lng'),
                            initialZoom: 4,
                            filter_country: $(this).attr('data-country-code'),
                            categories: $('.selectpicker.location-types').val(),
                            campForZoomChange: true,
                            location_id_and_source_pairs: [],
                            center_by_average_coordinates: true
                        };

                        initMap(locationsOnInit, lastMapData);

                        buildCountryLocationsList(thisBtn.parent().find('.locations-category-list'), $(this).attr('data-country-code'), thisBtn);
                    });

                    function buildSingleLocationTile(avatar_url, name, address, is_partner, city_name, phone, website, top_dentist_month, avg_rating, ratings, trp_public_profile_link, country, location_id, location_source, lat, lng) {
                        var partnerHtml = '';
                        if (is_partner) {
                            partnerHtml = '<div class="is-partner fs-14 lato-bold padding-top-5"><span><figure itemscope="" itemtype="http://schema.org/ImageObject" class="inline-block margin-right-5 max-width-20"><img src="/assets/images/logo.svg" class="width-100" alt="Dentacoin logo"></figure><span class="inline-block">Partner</span></span></div>';
                        }

                        var trpStatsHtml = '<div class="trp-stats padding-top-5">';
                        if (avg_rating != undefined) {
                            trpStatsHtml += '<div class="stars inline-block margin-right-5"><div class="active-stars" style="width: '+avg_rating / 5 * 100+'%"></div></div>'
                        }

                        if (ratings != undefined && ratings != null) {
                            trpStatsHtml += ' <span class="inline-block fs-14 base-on-x-reviews">(based on '+ratings+' reviews)</span> ';
                        }

                        if (trp_public_profile_link != null && trp_public_profile_link != undefined) {
                            trpStatsHtml += ' <a href="'+trp_public_profile_link+'" target="_blank" class="fs-26 inline-block margin-left-5"><i class="fa fa-external-link" aria-hidden="true"></i></a>';
                        }

                        trpStatsHtml += '</div>';

                        var visibleAddress = '';
                        if (city_name != null && city_name != undefined) {
                            visibleAddress = city_name + ', ' + country;
                        } else {
                            visibleAddress = country;
                        }

                        var hiddenContent = '<div class="fs-16 hidden-content padding-top-5">';

                        // remove urls from the address, because some address are saved with urls in the DB
                        if (address != null && address != undefined) {
                            address = address.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
                            hiddenContent += '<div><img src="/assets/images/map-results-location-pin.svg" alt="Location icon" class="width-100 max-width-20 inline-block"/> '+address+'</div>';
                        }

                        if (phone != null && phone != undefined) {
                            hiddenContent += '<div><img src="/assets/images/map-results-phone.svg" alt="Phone icon" class="width-100 max-width-20 inline-block"/> <a href="tel:'+phone+'">'+phone+'</a></div>';
                        }

                        if (website != null && website != undefined) {
                            hiddenContent += '<div><img src="/assets/images/map-results-website-icon.svg" alt="Website icon" class="width-100 max-width-20 inline-block"/> <a href="'+website+'" target="_blank">Visit website</a></div>';
                        }

                        if (top_dentist_month) {
                            hiddenContent += '<div><img src="/assets/images/top-dentists-badge.png" alt="Top dentist badge icon" class="width-100 max-width-20 inline-block"/> Top Dentist</div>';
                        }

                        hiddenContent += '</div>';

                        return '<li class="fs-0 single-location"><figure itemscope="" itemtype="http://schema.org/ImageObject" class="inline-block"><img src="'+avatar_url+'" alt="Location logo" itemprop="contentUrl"/></figure><div class="right-location-content inline-block padding-left-10"><h3 class="fs-26 fs-xs-20 fs-sm-22 lato-black color-black">'+name+'</h3>'+trpStatsHtml+'<div class="fs-16 color-black padding-top-5 padding-bottom-5">'+visibleAddress+'</div>'+partnerHtml+hiddenContent+'<div class="text-right padding-top-10"><a href="javascript:void(0);" class="toggle-location-tile" data-city="'+city_name+'" data-location-id="'+location_id+'" data-location-source="'+location_source+'" data-lat="'+lat+'" data-lng="'+lng+'" data-name="'+name.replace(/"/g, "&quot;")+'"><img src="/assets/images/down-arrow.svg"/></a></div></div></li>';
                    }

                    // on location tile open and close
                    $(document).on('click', '.single-location', function() {
                        var arrowBtn = $(this).find('.toggle-location-tile');

                        for (var i = 0, len = $('.toggle-location-tile').length; i < len; i+=1) {
                            if (!$('.toggle-location-tile').eq(i).is(arrowBtn)) {
                                $('.toggle-location-tile').eq(i).closest('.single-location').removeClass('toggled');
                            }
                        }

                        $(this).toggleClass('toggled');

                        if ($(this).hasClass('toggled')) {
                            projectData.events.fireGoogleAnalyticsEvent('Map', $(this).closest('.category-label').attr('data-name'), arrowBtn.attr('data-name').trim());

                            lastMapData = {
                                initialLat: arrowBtn.attr('data-lat'),
                                initialLng: arrowBtn.attr('data-lng'),
                                initialZoom: 15,
                                filter_country: undefined,
                                location_id_and_source_pairs: [[parseInt(arrowBtn.attr('data-location-id')), arrowBtn.attr('data-location-source')]],
                                categories: $('.selectpicker.location-types').val(),
                                campForZoomChange: true,
                                location_content: '<div class="map-infowindow"><button>'+arrowBtn.attr('data-name')+'</button></div>'
                            };

                            initMap(locationsOnInit, lastMapData);
                        } else {
                            lastMapData = {
                                initialLat: $('.country-list-parent.open-item > a').attr('data-country-centroid-lat'),
                                initialLng: $('.country-list-parent.open-item > a').attr('data-country-centroid-lng'),
                                initialZoom: 4,
                                filter_country: $('.country-list-parent.open-item > a').attr('data-country-code'),
                                location_id_and_source_pairs: [],
                                categories: $('.selectpicker.location-types').val(),
                                campForZoomChange: true,
                                location_content: '<div class="map-infowindow"><button>'+arrowBtn.attr('data-name')+'</button></div>',
                                center_by_average_coordinates: true
                            };
                            initMap(locationsOnInit, lastMapData);
                        }
                    });

                    $(document).on('click', '.go-back-to-countries', function() {
                        if ($('.locations-category-list .category-toggle-button').length) {
                            $('.locations-category-list .category-toggle-button.hide').removeClass('hide')
                        }

                        if ($('.locations-category-list .locations-list .single-location.hide').length) {
                            $('.locations-category-list .locations-list .single-location').removeClass('hide');
                        }

                        $('.selectpicker.locations option').eq(0).prop('selected', true);
                        $('.selectpicker.locations').selectpicker('refresh');

                        if ($('.picker-and-map .picker-label').attr('data-last-continent') == undefined || $('.single-continent.open-item > a .element-name').html() != $('.picker-and-map .picker-label').attr('data-last-continent')) {
                            var continentName = $('.single-continent.open-item > a .element-name').html();
                            console.log(continentName, 'set continent name');
                            $('.dentacoin-stats-category-label span').html('in ' + continentName);
                            $('.picker-and-map .picker-label').html('<a href="javascript:void(0);" class="go-back-to-continents"><img src="/assets/uploads/back-map-arrow.svg" alt="Red left arrow" class="margin-right-5 inline-block"/> <span class="inline-block">'+continentName+'</span></a>');

                            $('.single-continent.open-item > a .element-name').attr('data-last-continent', continentName);

                            updateContinentData($('.single-continent.open-item > a').attr('data-country-codes'));
                        } else {
                            $('.dentacoin-stats-category-label span').html($('.picker-and-map .picker-label').attr('data-last-continent'));

                            $('.picker-and-map .picker-label').html('<a href="javascript:void(0);" class="go-back-to-continents"><img src="/assets/uploads/back-map-arrow.svg" alt="Red left arrow" class="margin-right-5 inline-block"/> <span class="inline-block">'+$('.picker-and-map .picker-label').attr('data-last-continent')+'</span></a>');
                        }


                        if ($('.picker-and-map .picker-value').attr('data-last-continent') != '') {
                            $('.picker-and-map .picker-value').html('<span class="lato-black">'+$('.picker-and-map .picker-value').attr('data-last-continent')+'</span> Results');
                        }

                        lastMapData = {
                            initialLat: undefined,
                            initialLng: undefined,
                            initialZoom: undefined,
                            filter_country: JSON.parse($('.single-continent.open-item > a').attr('data-country-codes')),
                            location_id_and_source_pairs: [],
                            categories: $('.selectpicker.location-types').val(),
                            campForZoomChange: true
                        };
                        initMap(locationsOnInit, lastMapData);

                        $('.results-list .shown').removeClass('shown');
                        $('.results-list .countries-nav').addClass('shown');

                        $('.locations-category-list').html('');
                        $('.results-list').scrollTop(0);

                        $('.countries-list .country-list-parent').removeClass('hide open-item');


                        if ($('.changeable-stats .partners').length) {
                            $('.changeable-stats .partners span').html($('.changeable-stats .partners').attr('data-last-continent'));
                        }

                        if ($('.changeable-stats .non-partners').length) {
                            $('.changeable-stats .non-partners span').html($('.changeable-stats .non-partners').attr('data-last-continent'));
                        }

                        if ($('.changeable-stats .users').length) {
                            $('.changeable-stats .users span').html($('.changeable-stats .users').attr('data-last-continent'));
                        }
                    });
                    // =================== /COUNTRIES LOGIC ===================

                    function notifyParentForMapHeight() {
                        if ($('body').hasClass('dentacoin-map-iframe')) {
                            console.log($('.section-google-map.module .map-container').height(), 'event height');
                            window.parent.postMessage(
                                {
                                    event_id: 'iframe_size_event',
                                    data: {
                                        height: $('.section-google-map.module .map-container').height()
                                    }
                                },
                                "*"
                            );
                        }
                    }
                    notifyParentForMapHeight();
                }
            },
            showStickyHomepageNav() {
                if ($('.homepage-sticky-nav').length) {
                    $('.homepage-sticky-nav').fadeIn(500);
                }
            },
            hideStickyHomepageNav() {
                if ($('.homepage-sticky-nav').length) {
                    $('.homepage-sticky-nav').remove();
                }
            },
            showStickySubpagesNav() {
                if (!$('.subpages-sticky-nav').length) {
                    $('body').append('<div class="subpages-sticky-nav text-center fs-0"><a href="javascript:void(0);" data-type="users" class="inline-block"><span class="element-icon inline-block"></span><span class="inline-block padding-left-10 fs-24 fs-xs-20 padding-left-xs-0 lato-bold label-content">USERS</span></a><a href="javascript:void(0);" data-type="dentists" class="inline-block"><span class="element-icon inline-block"></span><span class="inline-block padding-left-10 fs-24 fs-xs-20 padding-left-xs-0 lato-bold label-content">DENTISTS</span></a><a href="javascript:void(0);" data-type="traders" class="inline-block"><span class="element-icon inline-block"></span><span class="inline-block padding-left-10 fs-24 fs-xs-20 padding-left-xs-0 lato-bold label-content">TRADERS</span></a></div>');

                    if (location.href.indexOf('users') >= 0) {
                        $('.subpages-sticky-nav [data-type="users"]').addClass('active');
                    } else if (location.href.indexOf('dentists') >= 0) {
                        $('.subpages-sticky-nav [data-type="dentists"]').addClass('active');
                    } else if (location.href.indexOf('traders') >= 0) {
                        $('.subpages-sticky-nav [data-type="traders"]').addClass('active');
                    }

                    $('.subpages-sticky-nav [data-type="users"]').click(function() {
                        var currentPage = $('.subpages-sticky-nav a.active').attr('data-type');
                        $('.subpages-sticky-nav a').removeClass('active');
                        $(this).addClass('active');

                        switch(currentPage) {
                            case 'dentists':
                                projectData.general_logic.data.slideOutDentistsContent(async function() {
                                    projectData.general_logic.data.showLoader();
                                    var takeHomepageDataResponse = await projectData.requests.takeHomepageData({type: 'users'});

                                    if (takeHomepageDataResponse.success) {
                                        projectData.general_logic.data.hideLoader();
                                        projectData.general_logic.data.slideInUsersContent(takeHomepageDataResponse.data.usersPageData);
                                    }
                                });
                                break;
                            case 'traders':
                                projectData.general_logic.data.slideOutTradersContent(async function() {
                                    projectData.general_logic.data.showLoader();
                                    var takeHomepageDataResponse = await projectData.requests.takeHomepageData({type: 'users'});

                                    if (takeHomepageDataResponse.success) {
                                        projectData.general_logic.data.hideLoader();
                                        projectData.general_logic.data.slideInUsersContent(takeHomepageDataResponse.data.usersPageData);
                                    }
                                });
                                break;
                        }
                    });

                    $('.subpages-sticky-nav [data-type="dentists"]').click(function() {
                        var currentPage = $('.subpages-sticky-nav a.active').attr('data-type');
                        $('.subpages-sticky-nav a').removeClass('active');
                        $(this).addClass('active');

                        switch(currentPage) {
                            case 'users':
                                projectData.general_logic.data.slideOutUsersContent(async function() {
                                    projectData.general_logic.data.showLoader();
                                    var takeHomepageDataResponse = await projectData.requests.takeHomepageData({type: 'dentists'});

                                    if (takeHomepageDataResponse.success) {
                                        projectData.general_logic.data.hideLoader();
                                        projectData.general_logic.data.slideInDentistsContent(takeHomepageDataResponse.data.dentistsPageData);
                                    }
                                });
                                break;
                            case 'traders':
                                projectData.general_logic.data.slideOutTradersContent(async function() {
                                    projectData.general_logic.data.showLoader();
                                    var takeHomepageDataResponse = await projectData.requests.takeHomepageData({type: 'dentists'});

                                    if (takeHomepageDataResponse.success) {
                                        projectData.general_logic.data.hideLoader();
                                        projectData.general_logic.data.slideInDentistsContent(takeHomepageDataResponse.data.dentistsPageData);
                                    }
                                });
                                break;
                        }
                    });

                    $('.subpages-sticky-nav [data-type="traders"]').click(function() {
                        var currentPage = $('.subpages-sticky-nav a.active').attr('data-type');
                        $('.subpages-sticky-nav a').removeClass('active');
                        $(this).addClass('active');

                        switch(currentPage) {
                            case 'users':
                                projectData.general_logic.data.slideOutUsersContent(async function() {
                                    var takeHomepageDataResponse = await projectData.requests.takeHomepageData({type: 'traders'});

                                    if (takeHomepageDataResponse.success) {
                                        projectData.general_logic.data.slideInTradersContent(takeHomepageDataResponse.data.tradersPageData);
                                    }
                                });
                                break;
                            case 'dentists':
                                projectData.general_logic.data.slideOutDentistsContent(async function() {
                                    var takeHomepageDataResponse = await projectData.requests.takeHomepageData({type: 'traders'});

                                    if (takeHomepageDataResponse.success) {
                                        projectData.general_logic.data.slideInTradersContent(takeHomepageDataResponse.data.tradersPageData);
                                    }
                                });
                                break;
                        }
                    });

                    $('.subpages-sticky-nav').fadeIn(500);
                }
            },
            hideStickySubpagesNav: function() {
                console.log($('.subpages-sticky-nav').length, 'hideStickySubpagesNav');
                if ($('.subpages-sticky-nav').length) {
                    $('.subpages-sticky-nav').remove();
                }
            },
            slideInUsersContent: function(usersPageData) {
                // doing this fix, because brower back arrow is not working via pushState
                window.removeEventListener('popstate', projectData.general_logic.data.handlePushStateRedirects);
                window.addEventListener('popstate', projectData.general_logic.data.handlePushStateRedirects);

                window.scrollTo(0, 0);

                history.pushState({data: 'users'},'', HOME_URL + '/users');
                $('.hidden-users-page-content').css({'display' : 'block'}).html(usersPageData).animate({'left' : '0', 'opacity' : 1}, 750, function() {
                    $('.hide-on-users-category-selected').addClass('hide');
                    $('.hidden-users-page-content').addClass('position-static');

                    projectData.pages.data.users();
                });
            },
            slideOutUsersContent: function(callback) {
                window.scrollTo(0, 0);

                $('.hide-on-users-category-selected').removeClass('hide');
                $('.hidden-users-page-content').removeClass('position-static').animate({'left' : '-100%', 'opacity' : 0}, 1000, function() {
                    $('.hidden-users-page-content').hide().html('');
                    callback();
                });
            },
            slideInDentistsContent: function(dentistsPageData) {
                // doing this fix, because brower back arrow is not working via pushState
                window.removeEventListener('popstate', projectData.general_logic.data.handlePushStateRedirects);
                window.addEventListener('popstate', projectData.general_logic.data.handlePushStateRedirects);

                window.scrollTo(0, 0);

                history.pushState({data: 'dentists'},'', HOME_URL + '/dentists');
                $('.hidden-dentists-page-content').css({'display' : 'block'}).html(dentistsPageData).animate({'top' : $('header').outerHeight(), 'opacity' : 1}, 750, function() {
                    $('.hide-on-users-category-selected').addClass('hide');
                    $('.hidden-dentists-page-content').addClass('position-static');

                    projectData.pages.data.dentists();
                });
            },
            slideOutDentistsContent: function(callback) {
                window.scrollTo(0, 0);

                $('.hide-on-users-category-selected').removeClass('hide');
                $('.hidden-dentists-page-content').removeClass('position-static').animate({'top' : $('.hidden-dentists-page-content').height() + 'px', 'opacity' : 0}, 750, function() {
                    $('.hidden-dentists-page-content').hide().html('');
                    callback();
                });
            },
            slideInTradersContent: function(tradersPageData) {
                // doing this fix, because brower back arrow is not working via pushState
                window.removeEventListener('popstate', projectData.general_logic.data.handlePushStateRedirects);
                window.addEventListener('popstate', projectData.general_logic.data.handlePushStateRedirects);

                window.scrollTo(0, 0);

                history.pushState({data: 'traders'},'', HOME_URL + '/traders');
                $('.hidden-traders-page-content').css({'display' : 'block'}).html(tradersPageData).animate({'right' : '0', 'opacity' : 1}, 750, function() {
                    $('.hide-on-users-category-selected').addClass('hide');
                    $('.hidden-traders-page-content').addClass('position-static');

                    projectData.pages.data.traders();
                });
            },
            slideOutTradersContent: function(callback) {
                window.scrollTo(0, 0);

                $('.hide-on-users-category-selected').removeClass('hide');
                $('.hidden-traders-page-content').removeClass('position-static').animate({'right' : '-100%', 'opacity' : 0}, 750, function() {
                    $('.hidden-traders-page-content').hide().html('');
                    callback();
                });
            },
        }
    },
    requests: {
        takeHomepageData: async function(data) {
            var ajaxData = {
                type: 'POST',
                url: HOME_URL + '/take-homepage-data',
                dataType: 'json',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            };

            if (data != undefined) {
                ajaxData.data = data;
            }

            return await $.ajax(ajaxData);
        },
        getMapHtml: async function() {
            return await $.ajax({
                type: 'POST',
                url: HOME_URL + '/get-map-html',
                dataType: 'json',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
        },
        getMapData: async function(data) {
            return await $.ajax({
                type: 'POST',
                url: HOME_URL + '/get-map-data',
                dataType: 'json',
                data: data,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
        },
        getLabsSuppliersAndIndustryPartners: async function(data) {
            return await $.ajax({
                type: 'POST',
                url: HOME_URL + '/get-labs-suppliers-and-industry-partners',
                dataType: 'json',
                data: data,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
        }
    },
    events: {
        eventTrackers: function() {
            $(document).on('click', '.company-intro-gtag-event', function() {
                projectData.events.fireGoogleAnalyticsEvent('Assets', 'Download', 'Intro');
            });
            $(document).on('click', '.factsheet-gtag-event', function() {
                projectData.events.fireGoogleAnalyticsEvent('Assets', 'Download', 'EN Factsheet');
            });
            $(document).on('click', '.factsheet-de-gtag-event', function() {
                projectData.events.fireGoogleAnalyticsEvent('Assets', 'Download', 'DE Factsheet');
            });

            $(document).on('click', '.dentist-page-see-how-it-works-gtag-event', function() {
                projectData.events.fireGoogleAnalyticsEvent('Dentist page', 'Click', 'How it works');
            });

            $(document).on('click', '.traders-page-exchange-click-gtag-event', function() {
                projectData.events.fireGoogleAnalyticsEvent('Exchange', 'Main', $(this).closest('.single-exchange').attr('data-exchange-name'));
            });

            $(document).on('click', '.traders-page-exchange-pair-click-gtag-event', function() {
                projectData.events.fireGoogleAnalyticsEvent('Exchange', 'Pair', $(this).closest('.single-exchange').attr('data-exchange-name'));
            });

            $(document).on('click', '.traders-page-dentacoin-intro-click-gtag-event', function() {
                projectData.events.fireGoogleAnalyticsEvent('Assets', 'Download', 'Intro');
            });

            $(document).on('click', '.traders-page-whitepaper-click-gtag-event', function() {
                projectData.events.fireGoogleAnalyticsEvent('Assets', 'Download', 'Whitepaper');
            });

            $(document).on('click', '.traders-page-cmc-click-gtag-event', function() {
                projectData.events.fireGoogleAnalyticsEvent('Link', 'Click', 'CMC');
            });
        },
        fireGoogleAnalyticsEvent: function (category, action, label, value) {
            var event_obj = {
                'event_action': action,
                'event_category': category,
                'event_label': label
            };

            if (value != undefined) {
                event_obj.value = value;
            }

            if (typeof(gtag) != 'undefined') {
                gtag('event', label, event_obj);
            }
        }
    }
};

//load images after website load
projectData.general_logic.data.loadDeferResources();

if ($('body').hasClass('logged-in')) {
    projectData.pages.logged_in();
    projectData.general_logic.logged_in();
} else {
    projectData.pages.not_logged_in();
    projectData.general_logic.not_logged_in();
}

projectData.events.eventTrackers();

function drawHeaderToFirstSectionLine() {
    //FIRST LINE
    $('line.first').attr('x1', $('header .first-dot').offset().left);
    $('line.first').attr('y1', $('header .first-dot').offset().top);
    $('line.first').attr('x2', $('.second-dot').offset().left);
    $('line.first').attr('y2', $('.second-dot').offset().top + $('.second-dot').height() - 1);

    //SECOND LINE
    $('line.second').attr('x1', $('.second-dot').offset().left);
    $('line.second').attr('y1', $('.second-dot').offset().top + $('.second-dot').height() - 1);
    $('line.second').attr('x2', $('.third-dot').offset().left);
    $('line.second').attr('y2', $('.third-dot').offset().top + $('.third-dot').height() - 1);
}

function drawNavToBottomSectionLine() {
    $('line.third').attr('x1', $('.nav-to-bottom-first-dot').offset().left);
    $('line.third').attr('y1', $('.nav-to-bottom-first-dot').offset().top + $('.nav-to-bottom-first-dot').height());
    $('line.third').attr('x2', $('.nav-to-bottom-second-dot').offset().left);
    $('line.third').attr('y2', $('.nav-to-bottom-second-dot').offset().top + $('.nav-to-bottom-second-dot').height());

    $('line.fourth').attr('x1', $('.nav-to-bottom-second-dot').offset().left);
    $('line.fourth').attr('y1', $('.nav-to-bottom-second-dot').offset().top + $('.nav-to-bottom-second-dot').height());
    $('line.fourth').attr('x2', $('.nav-to-bottom-third-dot').offset().left);
    $('line.fourth').attr('y2', $('.nav-to-bottom-third-dot').offset().top);

    $('line.fifth').attr('x1', $('.nav-to-bottom-third-dot').offset().left);
    $('line.fifth').attr('y1', $('.nav-to-bottom-third-dot').offset().top);
    $('line.fifth').attr('x2', $('.nav-to-bottom-fourth-dot').offset().left);
    $('line.fifth').attr('y2', $('.nav-to-bottom-fourth-dot').offset().top);
}

function initListingPageLine() {
    $('line.first').attr('x1', $('.list .single .first-dot').offset().left + $('.list .single .first-dot').width() / 2);
    $('line.first').attr('x2', $('.list .single .last-dot').offset().left + $('.list .single .last-dot').width() / 2);
    $('line.first').attr('y1', $('.list .single .first-dot').offset().top);
    $('line.first').attr('y2', $('.list .single .last-dot').offset().top);
}

// to be edited
function styleUploadButton(callbackOnChange, buttonClass) {
    if ($('.upload-file.module').length) {
        for (var i = 0, len = $('.upload-file.module').length; i < len; i+=1) {
            var thisFileUpload = $('.upload-file.module').eq(i);
            var thisFileInput = thisFileUpload.find('.upload-input');
            $('.upload-file.module').eq(i).append('<button type="button"><label for="'+thisFileInput.attr('name')+'" class="'+buttonClass+'">'+$('.upload-file.module').eq(i).attr('data-label')+'</label></button>');
            thisFileInput.on('change', function() {
                callbackOnChange(this);
            });
        }
    }
}

// ==================== /PAGES ====================

if ($('.newsletter-register').length) {
    basic.initCustomCheckboxes('.newsletter-register');

    $('.newsletter-register form').on('submit', function (event) {
        event.preventDefault();
        var this_form_native = this;
        var this_form = $(this_form_native);

        var error = false;
        this_form.find('.error-handle').remove();

        if (!basic.validateEmail(this_form.find('input[type="email"]').val().trim())) {
            error = true;
            customErrorHandle(this_form.find('input[type="email"]').closest('.newsletter-field'), this_form.find('input[type="email"]').closest('.newsletter-field').attr('data-valid-message'));
        }

        if (!this_form.find('#newsletter-privacy-policy').is(':checked')) {
            error = true;
            customErrorHandle(this_form.find('#newsletter-privacy-policy').closest('.newsletter-field'), this_form.find('#newsletter-privacy-policy').closest('.newsletter-field').attr('data-valid-message'));
        }

        if (!error) {
            projectData.events.fireGoogleAnalyticsEvent('Subscribe', 'Subscribe', 'Newsletter');
            fbq('track', 'Newsletter');

            this_form_native.submit();

            $('.newsletter-register form .custom-checkbox').html('');
            $('.newsletter-register form #newsletter-privacy-policy').prop('checked', false);
            this_form.find('input[type="email"]').val('');
            $('.newsletter-register .form-container').append('<div class="alert alert-success fs-16 margin-top-10">Thank you for signing up.</div>');
        }
    });
}

function hidePopupOnBackdropClick() {
    $(document).on('click', '.bootbox', function () {
        var classname = event.target.className;
        classname = classname.replace(/ /g, '.');

        if (classname.indexOf('christmas-calendar-task') === -1) {
            if (classname && !$('.' + classname).parents('.modal-dialog').length) {
                if ($('.bootbox.login-signin-popup').length) {
                    $('.hidden-login-form').html(hidden_popup_content);
                }
                bootbox.hideAll();
            }
        }
    });
}

hidePopupOnBackdropClick();

function initCaptchaRefreshEvent() {
//refreshing captcha on trying to log in admin
    if ($('.refresh-captcha').length > 0) {
        $('.refresh-captcha').click(function () {
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
}
initCaptchaRefreshEvent();

//INIT LOGIC FOR ALL STEPS
function customErrorHandle(el, string) {
    el.append('<div class="error-handle">' + string + '</div>');
}

// reading file and check size and extension
function readURL(input, megaBytesLimit, allowedImagesExtensions, callback, failed_callback) {
    if (input.files && input.files[0]) {
        var filename = input.files[0].name;

        // check file size
        if (megaBytesLimit < basic.bytesToMegabytes(input.files[0].size)) {
            if (failed_callback != undefined) {
                failed_callback();
            }

            $(input).closest('.upload-btn-parent').append('<div class="error-handle">The file you selected is large. Max size: ' + megaBytesLimit + 'MB.</div>');
            return false;
        } else {
            //check file extension
            if (jQuery.inArray(filename.split('.').pop().toLowerCase(), allowedImagesExtensions) !== -1) {
                if (callback != undefined) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        callback(e, filename);
                    };
                    reader.readAsDataURL(input.files[0]);
                }
            } else {
                if (failed_callback != undefined) {
                    failed_callback();
                }

                var allowedExtensionsHtml = '';
                var firstLoop = true;
                for (var i = 0, len = allowedImagesExtensions.length; i < len; i += 1) {
                    if (firstLoop) {
                        firstLoop = false;
                        allowedExtensionsHtml += allowedImagesExtensions[i];
                    } else {
                        allowedExtensionsHtml += ', ' + allowedImagesExtensions[i];
                    }
                }

                $(input).closest('.upload-btn-parent').append('<div class="error-handle">Please select file in ' + allowedExtensionsHtml + ' format.</div>');
                return false;
            }
        }
    }
}

async function checkCaptcha(captcha) {
    return await $.ajax({
        type: 'POST',
        url: '/check-captcha',
        dataType: 'json',
        data: {
            captcha: captcha
        },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
}

function bindGoogleAlikeButtonsEvents() {
    //google alike style for label/placeholders
    $('body').on('click', '.custom-google-label-style label', function () {
        $(this).addClass('active-label');
        if ($('.custom-google-label-style').attr('data-input-colorful-border') == 'true') {
            $(this).parent().find('input').addClass('blue-green-border');
        }
    });

    $('body').on('keyup change focusout', '.custom-google-label-style input', function () {
        var value = $(this).val().trim();
        if (value.length) {
            $(this).closest('.custom-google-label-style').find('label').addClass('active-label');
            if ($(this).closest('.custom-google-label-style').attr('data-input-colorful-border') == 'true') {
                $(this).addClass('blue-green-border');
            }
        } else {
            $(this).closest('.custom-google-label-style').find('label').removeClass('active-label');
            if ($(this).closest('.custom-google-label-style').attr('data-input-colorful-border') == 'true') {
                $(this).removeClass('blue-green-border');
            }
        }
    });
}

bindGoogleAlikeButtonsEvents();

if ($('.bottom-fixed-promo-banner').length) {
    $('.bottom-fixed-promo-banner .close-banner').click(function() {
        $('footer').removeClass('extra-bottom-padding');
        $('.bottom-fixed-promo-banner').remove();

        var now = new Date();
        var time = now.getTime();
        time += 7200 * 1000;
        now.setTime(time);
        document.cookie = 'hide-holiday-calendar-banner=1; expires=' + now.toUTCString() + ';domain=dentacoin.com;path=/;';
    });
}
=======
var basic={cookies:{set:function(e,t){null==e&&(e="cookieLaw"),null==t&&(t=1);var a=new Date;a.setTime(a.getTime()+864e7);var s="expires="+a.toUTCString();document.cookie=e+"="+t+"; "+s+";domain=.dentacoin.com;path=/;secure","cookieLaw"==e&&$(".cookies_popup").slideUp()},erase:function(e){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"},get:function(e){null==e&&(e="cookieLaw"),e+="=";for(var t=document.cookie.split(";"),a=0;a<t.length;a++){for(var s=t[a];" "==s.charAt(0);)s=s.substring(1);if(0==s.indexOf(e))return s.substring(e.length,s.length)}return""}},fixBodyModal:function(){$(".modal-dialog").length>0&&!$("body").hasClass("modal-open")&&$("body").addClass("modal-open")},fixZIndexBackdrop:function(){if(jQuery(".bootbox").length>1){var e=jQuery(".bootbox").eq(jQuery(".bootbox").length-2).css("z-index");jQuery(".bootbox").last().css({"z-index":e+2}).next(".modal-backdrop").css({"z-index":e+1})}},showAlert:function(e,t,a){basic.realShowDialog(e,"alert",t,null,null,a)},showConfirm:function(e,t,a,s){basic.realShowDialog(e,"confirm",t,a,null,s)},showDialog:function(e,t,a,s,i){void 0===a&&(a=null),void 0===i&&(i=null),basic.realShowDialog(e,"dialog",t,i,a,s)},realShowDialog:function(message,dialog_type,class_name,params,type,vertical_center){void 0===class_name&&(class_name=""),void 0===type&&(type=null),void 0===vertical_center&&(vertical_center=null);var atrs={message:message,animate:!1,show:!1,className:class_name};if("confirm"==dialog_type&&null!=params&&null==params.buttons&&(atrs.buttons={confirm:{label:"Yes",className:"btn-success"},cancel:{label:"No",className:"btn-danger"}}),null!=params)for(var key in params)console.log(key,"key"),atrs[key]=params[key],console.log(key,"key"),console.log(params[key],"params[key]");var dialog=eval("bootbox."+dialog_type)(atrs);dialog.on("hidden.bs.modal",function(){basic.fixBodyModal(),null!=type&&("media-inquries"==type?$(".press-center-container .subtitle .open-form").focus():$('.single-application figure[data-slug="'+type+'"]').parent().focus())}),dialog.on("shown.bs.modal",function(){null!=vertical_center&&basic.verticalAlignModal(),basic.fixZIndexBackdrop()}),dialog.modal("show")},verticalAlignModal:function(e){$("body .modal-dialog").each(function(){$(this).css("margin-top",Math.max(20,($(window).height()-$(this).height())/2))})},closeDialog:function(){bootbox.hideAll()},validateEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},validatePhone:function(e){return/^[\d\.\-]+$/.test(e)},validateUrl:function(e){return!!new RegExp("((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)},hasNumber:function(e){return/\d/.test(e)},hasLowerCase:function(e){return/[a-z]/.test(e)},hasUpperCase:function(e){return/[A-Z]/.test(e)},validatePassword:function(e){return e.trim().length>=8&&e.trim().length<=30&&basic.hasLowerCase(e)&&basic.hasUpperCase(e)&&basic.hasNumber(e)},isInViewport:function(e,t){if(null!=t)var a=$(e).offset().top+t;else a=$(e).offset().top;var s=a+$(e).outerHeight(),i=$(window).scrollTop(),o=i+$(window).height();return s>i&&a<o},isMobile:function(){var e=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(e=!0),e},getMobileOperatingSystem:function(){var e=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(e)?"Windows Phone":/android/i.test(e)?"Android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"iOS":/(Mac|iPhone|iPod|iPad)/.test(e)&&!window.MSStream?"Mac":"unknown"},addCsrfTokenToAllAjax:function(){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}})},isJsonString:function(e){try{JSON.parse(e)}catch(e){return!1}return!0},bytesToMegabytes:function(e){return e/Math.pow(1024,2)},property_exists:function(e,t){return!!e&&hasOwnProperty.call(e,t)},getGETParameters:function(){var e=window.location.search.substr(1);return null!=e&&""!=e?basic.transformToAssocArray(e):{}},transformToAssocArray:function(e){for(var t={},a=e.split("&"),s=0,i=a.length;s<i;s+=1){var o=a[s].split("=");t[o[0]]=o[1]}return t},stopMaliciousInspect:function(){document.addEventListener("contextmenu",function(e){e.preventDefault()}),document.onkeydown=function(e){return 123!=event.keyCode&&(!e.ctrlKey||!e.shiftKey||e.keyCode!="I".charCodeAt(0))&&(!e.ctrlKey||!e.shiftKey||e.keyCode!="C".charCodeAt(0))&&(!e.ctrlKey||!e.shiftKey||e.keyCode!="J".charCodeAt(0))&&(!e.ctrlKey||e.keyCode!="U".charCodeAt(0))&&void 0}},customValidateWalletAddress:function(){return/^(0x){1}[0-9a-fA-F]{40}$/i.test(address)},initCustomCheckboxes:function(e,t){null==typeof e?e="":e+=" ",null==t&&(t="prepend");for(var a=0,s=jQuery(e+".custom-checkbox-style").length;a<s;a+=1)jQuery(e+".custom-checkbox-style").eq(a).hasClass("already-custom-style")||(jQuery(e+".custom-checkbox-style").eq(a).find('input[type="checkbox"]').is(":checked")?"prepend"==t?jQuery(e+".custom-checkbox-style").eq(a).prepend('<label for="'+jQuery(e+".custom-checkbox-style").eq(a).find('input[type="checkbox"]').attr("id")+'" class="custom-checkbox">✓</label>'):"append"==t&&jQuery(e+".custom-checkbox-style").eq(a).append('<label for="'+jQuery(e+".custom-checkbox-style").eq(a).find('input[type="checkbox"]').attr("id")+'" class="custom-checkbox">✓</label>'):jQuery(e+".custom-checkbox-style").eq(a).prepend('<label for="'+jQuery(e+".custom-checkbox-style").eq(a).find('input[type="checkbox"]').attr("id")+'" class="custom-checkbox"></label>'),jQuery(e+".custom-checkbox-style").eq(a).addClass("already-custom-style"));jQuery(e+".custom-checkbox-style .custom-checkbox-input").unbind("change").on("change",function(){if(!jQuery(this).closest(".custom-checkbox-style").hasClass("predefined")&&(jQuery(this).is(":checked")?jQuery(this).closest(e+".custom-checkbox-style").find(".custom-checkbox").html("✓"):jQuery(this).closest(e+".custom-checkbox-style").find(".custom-checkbox").html(""),null!=jQuery(this).attr("data-radio-group")))for(var t=0,a=jQuery('[data-radio-group="'+jQuery(this).attr("data-radio-group")+'"]').length;t<a;t+=1)jQuery(this).is(jQuery('[data-radio-group="'+jQuery(this).attr("data-radio-group")+'"]').eq(t))||(jQuery('[data-radio-group="'+jQuery(this).attr("data-radio-group")+'"]').eq(t).prop("checked",!1),jQuery('[data-radio-group="'+jQuery(this).attr("data-radio-group")+'"]').eq(t).closest(e+".custom-checkbox-style").find(".custom-checkbox").html(""))})},dynamicSortArrayByKey:function(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(a,s){return(a[e]<s[e]?-1:a[e]>s[e]?1:0)*t}}};console.log("Don't touch the code. Or do ... ¯\\_(ツ)_/¯");var allowedImagesExtensions=["png","jpg","jpeg"],allowedDocumentExtensions=["pdf","doc","docx","ppt","pptx","odt","rtf"],get_params=basic.getGETParameters(),loadedLibs={},isFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,christmasCalendarYear=2020;$(window).on("load",function(){if($("body").hasClass("home")&&!$("body").hasClass("logged-in")||$("body").hasClass("logged-in")&&$("body").hasClass("foundation")){var e=new URL(window.location.href);null!=e.searchParams.get("application")?(scrollToSectionAnimation("two",null,!0),setTimeout(function(){$('.dentacoin-ecosystem .single-application figure[data-slug="'+e.searchParams.get("application")+'"]').click()},500)):null!=e.searchParams.get("payment")&&"bidali-gift-cards"==e.searchParams.get("payment")?$("html").animate({scrollTop:$(".wallet-app-and-gif").offset().top},{duration:500,complete:function(){setTimeout(function(){$("#bidali-init-btn").click()},1e3)}}):null!=e.searchParams.get("section")&&"buy-dentacoin"==e.searchParams.get("section")&&$("html").animate({scrollTop:$(".buy-dentacoin").offset().top},{duration:500})}if($("body.corporate-design").length>0){var t=!1;$("body").addClass("overflow-hidden"),$(window).width()>768&&(t=!0),$("body").removeClass("overflow-hidden"),t&&drawNavToBottomSectionLine()}}),$(window).on("scroll",function(){projectData.general_logic.data.loadDeferResources()}),$(window).on("resize",function(){if($("body").hasClass("testimonials"))initListingPageLine();else if($("body").hasClass("press-center"))initListingPageLine();else if($("body.careers.allow-draw-lines").length>0)drawHeaderToFirstSectionLine();else if($("body.corporate-design").length>0){var e=!1;$("body").addClass("overflow-hidden"),$(window).width()>768&&(e=!0),$("body").removeClass("overflow-hidden"),e&&drawNavToBottomSectionLine()}});var projectData={pages:{not_logged_in:function(){projectData.pages.data.homepage(),projectData.pages.data.users(!0),projectData.pages.data.dentists(!0),projectData.pages.data.traders(!0),projectData.pages.data.testimonials(),projectData.pages.data.corporateDesign(),projectData.pages.data.claimDentacoin(),projectData.pages.data.careers(),projectData.pages.data.team(),projectData.pages.data.pressCenter(),projectData.pages.data.howToCreateWallet()},logged_in:function(){projectData.pages.data.homepage(),projectData.pages.data.users(!0),projectData.pages.data.dentists(!0),projectData.pages.data.traders(!0),projectData.pages.data.testimonials(),projectData.pages.data.corporateDesign(),projectData.pages.data.careers(),projectData.pages.data.team(),projectData.pages.data.pressCenter(),projectData.pages.data.howToCreateWallet(),projectData.pages.data.christmasCalendar()},data:{homepage:async function(){($("body").hasClass("home")||$("body").hasClass("foundation")&&$("body").hasClass("logged-in"))&&(projectData.general_logic.data.showLoader(),$(".blank-container").height($(window).height()),setTimeout(async function(){var e="",t="",a="",s=await projectData.requests.takeHomepageData();console.log(s,"takeHomepageDataResponse"),s.success?(projectData.general_logic.data.hideLoader(),projectData.general_logic.data.showStickyHomepageNav(),e=s.data.usersPageData,t=s.data.dentistsPageData,a=s.data.tradersPageData,$(".call-users-page").click(function(){$(".hide-homepage-data").length&&!$(".hide-homepage-data").hasClass("hide")&&($(".hide-homepage-data").addClass("hide"),$(".hide-on-users-category-selected").removeClass("hide")),projectData.general_logic.data.slideInUsersContent(e)}),$(".call-dentists-page").click(function(){$(".hide-homepage-data").length&&!$(".hide-homepage-data").hasClass("hide")&&($(".hide-homepage-data").addClass("hide"),$(".hide-on-users-category-selected").removeClass("hide")),projectData.general_logic.data.slideInDentistsContent(t)}),$(".call-traders-page").click(function(){$(".hide-homepage-data").length&&!$(".hide-homepage-data").hasClass("hide")&&($(".hide-homepage-data").addClass("hide"),$(".hide-on-users-category-selected").removeClass("hide")),projectData.general_logic.data.slideInTradersContent(a)})):$(".section-homepage-nav .single-element a").click(function(){basic.closeDialog(),basic.showAlert('Something went wrong. Please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a> with description of the problem.',"",!0)})},2e3))},users:async function(e){if(null!=e&&!$("body").hasClass("users"))return!1;if($(".blank-container").height($(window).height()),projectData.general_logic.data.setChangeableVideos(),$("header .white-black-btn").removeClass("white-black-btn").addClass("black-white-btn"),$("header .logo-container img").attr("src"," /assets/images/logo.svg"),$(".color-white-on-page-switch").length&&$(".color-white-on-page-switch").addClass("color-white"),$("footer").hasClass("black-style")){$("footer").removeClass("black-style");for(var t=0,a=$(".socials ul li a img").length;t<a;t+=1){var s=$(".socials ul li a img").eq(t);s.attr("src",s.attr("data-default-src")).attr("alt",s.attr("data-default-alt"))}}if($(".section-wait-until-user-page .hidden-picture img").addClass("animated"),projectData.general_logic.data.hideStickyHomepageNav(),projectData.general_logic.data.showStickySubpagesNav(),$("#append-big-hub-dentacoin").length){var i=!0;async function o(){hasOwnProperty.call(loadedLibs,"bigHubStyle")||(isFirefox?$("head").append('<link rel="stylesheet" type="text/css" href="/assets/libs/dentacoin-package/css/styles-big-hub.css?v='+(new Date).getTime()+'"/>'):$("head").append('<link rel="preload" as="style" onload="this.rel=\'stylesheet\'" type="text/css" href="/assets/libs/dentacoin-package/css/styles-big-hub.css?v='+(new Date).getTime()+'"/>'),loadedLibs.bigHubStyle=!0),hasOwnProperty.call(loadedLibs,"dentacoinPackageJs")||(await $.getScript("/assets/libs/dentacoin-package/js/init.js?v="+(new Date).getTime(),function(){}),loadedLibs.dentacoinPackageJs=!0);dcnHub.initBigHub({element_id_to_append:"append-big-hub-dentacoin",type_hub:"dentacoin",local_environment:"https://dentacoin.com"})}basic.isInViewport($("#append-big-hub-dentacoin"))&&(i=!1,o()),$(window).on("scroll",function(){i&&basic.isInViewport($("#append-big-hub-dentacoin"))&&(i=!1,o())})}if($("body").addClass("overflow-hidden"),$(window).width()<767)$(".class-video-container").html('<div class="black-border-left margin-top-20 padding-left-10"><h3 class="fs-22 lato-black">PATIENTS</h3><div class="fs-18">Earn rewards for reviews, surveys, better oral hygiene and reduce your dental costs!</div></div><figure class="padding-top-15 padding-bottom-15 text-center" itemscope="" itemtype="http://schema.org/ImageObject"><img alt="Patient dentist triangle" class="max-width-400 width-100 margin-0-auto" src="/assets/uploads/dentacoin-dentist-patient-ecosystem.png" itemprop="contentUrl"></figure><div class="black-border-right padding-right-10 text-right"><h3 class="fs-22 lato-black">DENTISTS</h3><div class="fs-18">Earn rewards for reviews, surveys, better oral hygiene and reduce your dental costs!</div></div><figure class="padding-top-25 padding-bottom-10 text-center" itemscope="" itemtype="http://schema.org/ImageObject"><img alt="Dentacoin currency" class="max-width-80 width-100 margin-0-auto" src="/assets/uploads/dcn-coin.svg" itemprop="contentUrl"><figcaption class="fs-18"><span class="display-block fs-22 lato-black padding-bottom-5">Dentacoin Currency</span>An Ethereum-based utility token, used for rewards, payments, and exchange within and beyond the  dental industry.</figcaption></figure><figure class="padding-top-25 padding-bottom-10 text-center" itemscope="" itemtype="http://schema.org/ImageObject"><img alt="Dentacoin Apps" class="max-width-80 width-100 margin-0-auto" src="/assets/uploads/dcn-phone-apps.svg" itemprop="contentUrl"><figcaption class="fs-18"><span class="display-block fs-22 lato-black padding-bottom-5">Dentacoin Apps</span>Promoting better oral health and rewarding users for submitting feedback, taking surveys, maintaining oral hygiene.</figcaption></figure><figure class="padding-top-25 padding-bottom-10 text-center" itemscope="" itemtype="http://schema.org/ImageObject"><img alt="Dentacoin Assurance" class="max-width-80 width-100 margin-0-auto" src="/assets/uploads/dcn-assurance.svg" itemprop="contentUrl"><figcaption class="fs-18"><span class="display-block fs-22 lato-black padding-bottom-5">Dentacoin Assurance</span>The first smart contract-based dental assurance plan, focused on prevention and paid exclusively in DCN currency.</figcaption></figure>');else{var n=!1;$(window).on("scroll",function(){if($(".patient-dentist-triangle-video").length&&basic.isInViewport($(".patient-dentist-triangle-video"),200)&&!n){n=!0;var e="webm";"iOS"!=basic.getMobileOperatingSystem()&&"Mac"!=basic.getMobileOperatingSystem()||(e="mp4",$('.patient-dentist-triangle-video [itemprop="contentURL"]').attr("href","https://dentacoin.com/assets/uploads/patient-dentist-triangle-animation."+e+'"'));var t='muted="muted" autoplay';"iOS"==basic.getMobileOperatingSystem()&&(t+=" playsinline"),$(".patient-dentist-triangle-video").prepend("<video "+t+'><source src="/assets/uploads/patient-dentist-triangle-animation.'+e+'" type="video/'+e+'"> Your browser does not support HTML5 video.</video>')}})}$("body").removeClass("overflow-hidden"),await projectData.general_logic.data.videoExpressionsSlider("users"),await projectData.general_logic.data.userExpressionsSlider("users");var l=!1;function r(){$(".section-google-map.module").length&&basic.isInViewport($(".section-google-map.module"),200)&&!l&&(console.log("LOAD MAP"),l=!0,projectData.general_logic.data.dentacoinGoogleMap())}$(window).unbind("scroll",r),$(window).bind("scroll",r)},dentists:async function(e){if(null!=e&&!$("body").hasClass("dentists"))return!1;if($(".blank-container").height($(window).height()),projectData.general_logic.data.setChangeableVideos(),$(".section-the-era-dentist-page .hidden-picture img").addClass("animated"),$("header .black-white-btn").removeClass("black-white-btn").addClass("white-black-btn"),$("header .logo-container img").attr("src"," /assets/images/logo.svg"),$(".color-white-on-page-switch").length&&$(".color-white-on-page-switch").hasClass("color-white")&&$(".color-white-on-page-switch").removeClass("color-white"),$("footer").hasClass("black-style")){$("footer").removeClass("black-style");for(var t=0,a=$(".socials ul li a img").length;t<a;t+=1){var s=$(".socials ul li a img").eq(t);s.attr("src")?s.attr("src",s.attr("data-default-src")).attr("alt",s.attr("data-default-alt")):s.attr("data-defer-src",s.attr("data-default-src")).attr("alt",s.attr("data-default-alt"))}}if(projectData.general_logic.data.hideStickyHomepageNav(),projectData.general_logic.data.showStickySubpagesNav(),$(".benefits-row").length&&$(".benefits-row video").length){var i=!1;$(window).on("scroll",function(){if($(".benefits-row").length&&basic.isInViewport($(".benefits-row"),200)&&!i){i=!0;for(var e=0,t=$(".benefits-row video").length;e<t;e+=1)$(".benefits-row video").get(e).play();$(".section-list-with-benefits-dentists-page .white-purple-btn.with-white-arrow").addClass("animated"),setTimeout(function(){$(".section-list-with-benefits-dentists-page .white-purple-btn.with-white-arrow").removeClass("animated").addClass("hover-effect")},2e3)}})}await projectData.general_logic.data.videoExpressionsSlider("dentists"),await projectData.general_logic.data.userExpressionsSlider("dentists");var o=!1;function n(){$(".section-google-map.module").length&&basic.isInViewport($(".section-google-map.module"),200)&&!o&&(console.log("LOAD MAP"),o=!0,projectData.general_logic.data.dentacoinGoogleMap())}$(window).unbind("scroll",n),$(window).bind("scroll",n)},traders:async function(e){if(null!=e&&!$("body").hasClass("traders"))return!1;$(".blank-container").height($(window).height()),projectData.general_logic.data.setChangeableVideos(),$(".mobile-exchanges").length&&(hasOwnProperty.call(loadedLibs,"slick")||(isFirefox?$("head").append('<link rel="stylesheet" type="text/css" href="/dist/libs/slick/slick.min.css"/>'):$("head").append('<link rel="preload" as="style" onload="this.rel=\'stylesheet\'" type="text/css" href="/dist/libs/slick/slick.min.css"/>'),await $.getScript("/dist/libs/slick/slick.min.js",function(){}),console.log("slick loaded"),loadedLibs.slick=!0),$(".mobile-exchanges .slider-row").slick({slidesToShow:1,infinite:!0,arrows:!0,dots:!0,adaptiveHeight:!0})),$(".section-bringing-blockchain-solutions-trader-page .trader").addClass("animated"),$(".section-bringing-blockchain-solutions-trader-page .trader-animated-background").addClass("animated"),$("header .white-black-btn").removeClass("white-black-btn").addClass("black-white-btn"),$("header .logo-container img").attr("src","//dentacoin.com/assets/images/rounded-logo-white.svg"),$(".color-white-on-page-switch").length&&$(".color-white-on-page-switch").addClass("color-white"),$("footer").addClass("black-style");for(var t=0,a=$(".socials ul li a img").length;t<a;t+=1){var s=$(".socials ul li a img").eq(t);s.attr("src")?s.attr("src",s.attr("data-black-style-src")).attr("alt",s.attr("data-black-style-alt")):s.attr("data-defer-src",s.attr("data-black-style-src")).attr("alt",s.attr("data-black-style-alt"))}basic.isMobile()?"iOS"==basic.getMobileOperatingSystem()?$(".app-store-btn").fadeIn(500):"Android"==basic.getMobileOperatingSystem()&&$(".google-play-btn").fadeIn(500):($(".app-store-btn").fadeIn(500),$(".google-play-btn").fadeIn(500));var i=!0;async function o(){await $.getScript("//platform.twitter.com/widgets.js");var e=setInterval(function(){$("iframe.twitter-timeline").length&&($("body").addClass("overflow-hidden"),$(window).width()<767?($("iframe.twitter-timeline").contents().find("head").append("<style>.timeline-Header, .timeline-Footer{display:none}.timeline-Widget{max-width: none !important;}.timeline-TweetList{font-size: 0;position:relative;}li.timeline-TweetList-tweet {display: inline-block;vertical-align: top;width:100%}.SandboxRoot.env-bp-970 .timeline-Tweet-text {font-size: 16px !important; line-height: 22px !important;font-weight: 300;}.timeline-TweetList-tweet:nth-of-type(2){top: 0;position: absolute;left: 100%;background: white;--moz-transition: 0.3s;-ms-transition: 0.3s;transition: 0.3s;z-index:50;}.timeline-TweetList-tweet:nth-of-type(3){top: 0;position: absolute;left: 100%;background: white;--moz-transition: 0.3s;-ms-transition: 0.3s;transition: 0.3s;z-index:100;}</style>"),$("iframe.twitter-timeline").height("auto"),$(".tweets-iframe-container").append('<div class="tweet-bullets padding-top-10 padding-bottom-15"><a href="javascript:void(0);" class="inline-block first active"></a><a href="javascript:void(0);" class="inline-block second"></a><a href="javascript:void(0);" class="inline-block third"></a></div>'),$(".tweet-bullets a").click(function(){$(".tweet-bullets a").removeClass("active"),$(this).addClass("active"),$(this).hasClass("first")?$("iframe.twitter-timeline").contents().find("head").append("<style>.timeline-TweetList-tweet:nth-of-type(2){left: 100% !important}.timeline-TweetList-tweet:nth-of-type(3){left: 100% !important}</style>"):$(this).hasClass("second")?$("iframe.twitter-timeline").contents().find("head").append("<style>.timeline-TweetList-tweet:nth-of-type(2){left: 0 !important}.timeline-TweetList-tweet:nth-of-type(3){left: 100% !important}</style>"):$(this).hasClass("third")&&$("iframe.twitter-timeline").contents().find("head").append("<style>.timeline-TweetList-tweet:nth-of-type(2){left: 100% !important}.timeline-TweetList-tweet:nth-of-type(3){left: 0 !important}</style>"),$("iframe.twitter-timeline").height("auto")})):$("iframe.twitter-timeline").height("auto").contents().find("head").append("<style>.timeline-Header, .timeline-Footer{display:none}.timeline-Widget{max-width: none !important;}.timeline-TweetList{font-size: 0;}li.timeline-TweetList-tweet {display: inline-block;vertical-align: top;width:33.33333%}.SandboxRoot.env-bp-970 .timeline-Tweet-text {font-size: 16px !important; line-height: 22px !important;font-weight: 300;}</style>"),$("body").removeClass("overflow-hidden"),clearInterval(e))},500)}basic.isInViewport($(".section-latest-twitter-data"))&&(i=!1,o()),$(window).on("scroll",function(){i&&basic.isInViewport($(".section-latest-twitter-data"))&&(i=!1,o())}),$(".section-dentacoin-roadmap").length&&($(".single-year-content.active").fadeIn(500),$(".section-dentacoin-roadmap .years-line a").click(function(){$(".section-dentacoin-roadmap .years-line a").removeClass("active"),$(this).addClass("active"),$(".single-year-content").hide(),$('.single-year-content[data-year="'+$(this).attr("data-year")+'"]').fadeIn(500),projectData.general_logic.data.loadDeferResources()})),$(window).on("scroll",function(){$(".section-everything-you-need-to-know .middle-animated-subsection").length&&basic.isInViewport($(".section-everything-you-need-to-know .middle-animated-subsection"),$(window).height()/2)&&!$(".section-everything-you-need-to-know .middle-animated-subsection").hasClass("fade-in-animation")&&($(".section-everything-you-need-to-know .middle-animated-subsection").addClass("fade-in-animation"),$(".section-everything-you-need-to-know .left-animated-border").addClass("add-animation"),$(".section-everything-you-need-to-know .right-animated-border").addClass("add-animation")),$(".section-wallet .laptop").length&&basic.isInViewport($(".section-wallet .laptop"),$(window).height()/2)&&!$(".section-wallet .laptop").hasClass("animated")&&($(".section-wallet .laptop").addClass("animated"),$(".section-wallet .phone").addClass("animated"))}),projectData.general_logic.data.hideStickyHomepageNav(),projectData.general_logic.data.showStickySubpagesNav()},testimonials:function(){if($("body").hasClass("testimonials")){for(var e=["avatar-icon-1.svg","avatar-icon-2.svg"],t=0;t<$(".list .single .image.no-avatar").length;t+=1)$(".list .single .image.no-avatar").eq(t).css({"background-image":"url(/assets/images/"+e[Math.floor(Math.random()*e.length)]+")"});$("svg.svg-with-lines").height($(document).height()),initListingPageLine()}},corporateDesign:function(){$("body").hasClass("corporate-design")&&$(".clickable-squares-row .square").click(function(){$(this).closest(".clickable-squares-row").find(".square").removeClass("active"),$(this).addClass("active"),$(this).find("img").attr("src")||$(this).find("img").attr("src",$(this).find("img").attr("data-defer-src"))})},claimDentacoin:function(){if($("body").hasClass("claim-dentacoin")){var e=!0;$(".redeem-dcn").click(function(){if(e){e=!1,$("#wallet-address").closest(".field-parent").find(".error-handle").remove();var t=!1;42==$("#wallet-address").val().trim().length&&basic.customValidateWalletAddress($("#wallet-address").val().trim())||(customErrorHandle($("#wallet-address").closest(".field-parent"),"Please enter valid Wallet Address."),t=!0,e=!0),t||(projectData.general_logic.data.showLoader(),setTimeout(function(){$.ajax({type:"POST",url:"https://external-payment-server.dentacoin.com/withdraw-by-key",dataType:"json",data:{key:get_params["withdraw-key"],walletAddress:$("#wallet-address").val().trim()},success:function(t){projectData.general_logic.data.hideLoader(),e=!0,t.success?$(".changeable-on-success").html('<div class="success-handle margin-bottom-50 margin-top-30 fs-18">Your transaction is being processed... <b><a href="https://etherscan.io/tx/'+t.transactionHash+'" target="_blank" style="color: #3c763d; text-decoration: underline;">CHECK STATUS</a></b></div>.'):basic.showAlert('Something went wrong. Please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a> with description of the problem.',"",!0)}})},2e3))}})}},careers:function(){$("body").hasClass("careers")&&($(".scroll-to-job-offers").length&&$(".scroll-to-job-offers").click(function(){$("html, body").animate({scrollTop:$(".open-job-positions-title .logo-over-line").offset().top},300)}),$(".single-job-offer-container").length&&(styleUploadButton(function(e){$(e).closest(".upload-btn-parent").find(".error-handle").remove(),readURL(e,2,allowedDocumentExtensions,function(t,a){$(e).closest(".button-row").find(".file-name").html('<span class="text-decoration-underline padding-right-10 inline-block">'+a+'</span><a href="javascript:void(0);" class="remove-file inline-block">×</a>'),$(".remove-file").unbind().click(function(){$(this).closest(".button-row").find('input[type="file"]').val(""),$(this).closest(".button-row").find(".file-name").html("")})})},"bright-blue-white-btn"),basic.initCustomCheckboxes(".single-job-offer-container"),$(".apply-for-position form").on("submit",async function(e){e.preventDefault();var t=$(this),a=!1;t.find(".error-handle").remove();for(var s=await checkCaptcha(t.find("#captcha").val().trim()),i=0,o=t.find('input[type="text"].required').length;i<o;i+=1)""==t.find('input[type="text"].required').eq(i).val().trim()?(customErrorHandle(t.find('input[type="text"].required').eq(i).closest(".field-parent"),"This field is required."),a=!0):"email"!=t.find('input[type="text"].required').eq(i).attr("name")||basic.validateEmail(t.find('input[type="text"].required').eq(i).val().trim())?"captcha"==t.find('input[type="text"].required').eq(i).attr("name")&&s.error&&(customErrorHandle(t.find('input[type="text"].required').eq(i).closest(".field-parent"),"Please enter correct captcha."),a=!0):(customErrorHandle(t.find('input[type="text"].required').eq(i).closest(".field-parent"),"Please use valid email address."),a=!0);t.find("#privacy-policy").is(":checked")||(customErrorHandle(t.find("#privacy-policy").closest(".form-row"),t.find("#privacy-policy").closest(".form-row").attr("data-valid-message")),a=!0),a?$("html, body").animate({scrollTop:$(".below-apply-for-position").offset().top},300):this.submit()})))},team:async function(){$("body").hasClass("team")&&(hasOwnProperty.call(loadedLibs,"slick")||(isFirefox?$("head").append('<link rel="stylesheet" type="text/css" href="/dist/libs/slick/slick.min.css"/>'):$("head").append('<link rel="preload" as="style" onload="this.rel=\'stylesheet\'" type="text/css" href="/dist/libs/slick/slick.min.css"/>'),await $.getScript("/dist/libs/slick/slick.min.js",function(){}),console.log("slick loaded"),loadedLibs.slick=!0),$(".team-container .advisors .advisors-slider").slick({slidesToShow:3,autoplay:!0,autoplaySpeed:8e3,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1,adaptiveHeight:!0}}]}),$(".team-container .more-advisors .read-more a").click(function(){$(this).closest(".more-advisors").find(".list").slideDown(300),$(this).closest(".read-more").slideUp(300)}))},pressCenter:function(){$("body").hasClass("press-center")&&(initListingPageLine(),$(".open-form").length>0&&$(".open-form").click(function(){$.ajax({type:"POST",url:HOME_URL+"/press-center-popup",dataType:"json",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){e.success&&(basic.closeDialog(),basic.showDialog(e.success,"media-inquries","media-inquries"),initCaptchaRefreshEvent(),basic.initCustomCheckboxes(".bootbox.media-inquries"),$(".selectpicker").selectpicker("refresh"),$('.bootbox.media-inquries select[name="reason"]').on("change",function(){$(".bootbox.media-inquries .waiting-for-action").html(""),"newsletter-register"==$(this).find("option:selected").attr("data-action")?$(".bootbox.media-inquries .waiting-for-action").html('<input type="hidden" name="answer" value="Manual email register to newletter receivers list."/>'):"long-text"==$(this).find("option:selected").attr("data-action")?$(".bootbox.media-inquries .waiting-for-action").html('<div class="padding-bottom-15 field-parent"><textarea placeholder="'+$(this).find("option:selected").attr("data-title")+'" rows="3" name="answer" maxlength="3000" class="required"></textarea></div>'):"long-text-and-attachments"==$(this).find("option:selected").attr("data-action")&&($(".bootbox.media-inquries .waiting-for-action").html('<div class="padding-bottom-15 field-parent"><textarea placeholder="'+$(this).find("option:selected").attr("data-title")+'" rows="3" name="answer" class="padding-bottom-10 required" maxlength="3000"></textarea></div><div class="padding-bottom-10 text-center-xs button-row fs-0 upload-btn-parent"><div class="upload-file module inline-block" data-label="Attach file (media package)"><input type="file" name="media-package" id="media-package" class="upload-input" accept=".pdf,.doc,.docx,.ppt,.pptx,.odt,.rtf,.xls,.xlsx"></div><div class="file-text inline-block"><div class="types">File types allowed: .pdf,.doc,.docx,.ppt,.pptx,.odt,.rtf,.xls,.xlsx up to 5MB</div><div class="file-name lato-bold"></div></div></div><div class="padding-bottom-15 text-center-xs button-row fs-0 upload-btn-parent"><div class="upload-file module inline-block" data-label="Attach file (individual offer, if present)"><input type="file" name="individual-offer" id="individual-offer" class="upload-input" accept=".pdf,.doc,.docx,.ppt,.pptx,.odt,.rtf,.xls,.xlsx"></div><div class="file-text inline-block"><div class="types">File types allowed: .pdf,.doc,.docx,.ppt,.pptx,.odt,.rtf,.xls,.xlsx up to 5MB</div><div class="file-name lato-bold"></div></div></div>'),styleUploadButton(function(e){$(e).closest(".upload-btn-parent").find(".error-handle").remove(),readURL(e,5,["pdf","doc","docx","ppt","pptx","odt","rtf","xls","xlsx"],function(t,a){$(e).closest(".button-row").find(".file-name").html('<span class="text-decoration-underline padding-right-10 inline-block">'+a+'</span><a href="javascript:void(0);" class="remove-file inline-block">×</a>'),$(".remove-file").unbind().click(function(){$(this).closest(".button-row").find('input[type="file"]').val(""),$(this).closest(".button-row").find(".file-name").html("")})})},"bright-blue-white-btn"),$(".bootbox.media-inquries #media-package button").keypress(function(e){13!=e.keyCode&&0!=e.keyCode&&32!=e.keyCode||document.getElementById("file-media-package").click()}),$(".bootbox.media-inquries #individual-offer button").keypress(function(e){13!=e.keyCode&&0!=e.keyCode&&32!=e.keyCode||document.getElementById("file-individual-offer").click()}))}),$(".bootbox.media-inquries form").on("submit",async function(e){e.preventDefault();var t=$(this),a=!1;t.find(".error-handle").remove();for(var s=await checkCaptcha(t.find("#captcha").val().trim()),i=0,o=t.find(".required").length;i<o;i+=1)""==t.find(".required").eq(i).val().trim()?(customErrorHandle(t.find(".required").eq(i).closest(".field-parent"),"This field is required."),a=!0):"email"!=t.find(".required").eq(i).attr("name")||basic.validateEmail(t.find(".required").eq(i).val().trim())?"captcha"==t.find(".required").eq(i).attr("name")&&s.error&&(customErrorHandle(t.find(".required").eq(i).closest(".field-parent"),"Please enter correct captcha."),a=!0):(customErrorHandle(t.find(".required").eq(i).closest(".field-parent"),"Please use valid email address."),a=!0);""==t.find("select.required-select").val().trim()&&(customErrorHandle(t.find("select.required-select").closest(".field-parent"),"This field is required."),a=!0),t.find("#privacy-policy").is(":checked")||(customErrorHandle(t.find("#privacy-policy").closest(".field-parent"),t.find("#privacy-policy").closest(".field-parent").attr("data-valid-message")),a=!0),a||this.submit()}))}})}))},howToCreateWallet:function(){if($("body").hasClass("how-to-create-wallet")){var e,t=0;$("video.wallet-instructions-video").on("play",function(){e=setInterval(function(){t+=1},1e3)}),$("video.wallet-instructions-video").on("pause",function(){clearInterval(e),projectData.events.fireGoogleAnalyticsEvent("Video","Play","How to Create a Wallet Demo",t)}),$(".section-wallet-questions .question").length>0&&$(".section-wallet-questions .question").click(function(){$(this).toggleClass("active"),$(this).closest("li").find(".question-content").toggle(300)})}},christmasCalendar:function(){if($("body").hasClass("christmas-calendar")){if($(document).on("click",".custom-close-bootbox",function(){basic.closeDialog()}),$(".move-footer-above").length&&$("footer").css({"margin-top":"-30px"}),Date.now()>Math.floor(new Date(2020,12,1,23,59,59,0).getTime()))t();else{function e(){"1"!=basic.cookies.get("christmas_calendar_social_engagement")?($(".tasks-section .camping-custom-popups.socials").show(),$("html, body").animate({scrollTop:$(".camping-custom-popups.socials").offset().top},300),$(".christmas-calendar-get-started").click(function(){basic.cookies.set("christmas_calendar_social_engagement","1"),$(".blurred-section").removeClass("active"),$(".tasks-section .camping-custom-popups.socials").hide(),t()})):($(".blurred-section").removeClass("active"),t())}console.log("! initTasksEvent"),"1"!=basic.cookies.get("agreed_with_christmas_calendar_rules")?($(".tasks-section .camping-custom-popups.rules").html('<div class="popup-wrapper"><h2 class="lato-black fs-25 text-center padding-bottom-20 padding-top-15">SIMPLE RULES:</h2><ul class="lato-regular fs-18 line-height-30"><li><span class="lato-black">31 days = 31 gifts:</span> Unlock a new task every day, complete it and get various rewards!</li><li><span class="lato-black">Complete tasks every day and your DCN rewards will be doubled at the end of the challenge.</span></li><li><span class="lato-black">31 days = 31 tickets:</span> Don’t miss a day and increase your chances to win!</li><li><span class="lato-black">Missed a day?</span> You can catch up with the daily tasks and gifts, but you’ll have one ticket less and your DCN rewards will not be doubled at the end.</li><li>All DCN daily rewards will be gradually unlocked for withdrawal in the period <span class="lato-black">Jan 1-15, 2021.</span></li><li>Other gifts are sent via email <span class="lato-black">within 5 days after</span> the task is completed.</li><li>Only users who have <span class="lato-black">submitted proofs</span> for their tasks get rewards and participate in the raffle.</li><li>All posts, likes and follows <span class="lato-black">must remain</span> at least until the raffle is finished.</li><li><span class="lato-black">Check the raffle winners on January 11, 2021 - first in our Telegram group!</span></li></ul><div class="padding-top-20 padding-bottom-20 max-width-400 margin-0-auto checkboxes"><div class="padding-bottom-10 padding-top-15"><div class="checkbox-wrapper"><input id="christmas-calendar-terms" type="checkbox"/></div><label class="fs-18 padding-left-5" for="christmas-calendar-terms">I read and agree to the <a href="/holiday-calendar-terms" target="_blank" class="color-christmas-calendar-red">Terms & Conditions</a></label></div><div class="padding-bottom-10"><div class="checkbox-wrapper"><input id="christmas-calendar-privacy-policy" type="checkbox"/></div><label class="fs-18 padding-left-5" for="christmas-calendar-privacy-policy">I read and agree to the <a href="/privacy-policy" target="_blank" class="color-christmas-calendar-red">Privacy Policy</a></label></div><div><div class="checkbox-wrapper"><input id="christmas-calendar-years" type="checkbox"/></div><label class="fs-18 padding-left-5" for="christmas-calendar-years">I confirm that I am eighteen (18) years of age or older.</label></div></div><div class="padding-bottom-20 text-center"><a href="javascript:void(0);" class="accept-christmas-calendar-rules"><figure itemscope="" itemtype="http://schema.org/ImageObject"><img src="/assets/images/christmas-calendar-campaign/ready-btn-present.svg" class="width-100 max-width-220" alt="Popup button" itemprop="contentUrl"/></figure></a></div></div>'),$("html, body").animate({scrollTop:$(".camping-custom-popups.rules").offset().top},300),$(".tasks-section .camping-custom-popups.rules .popup-wrapper .accept-christmas-calendar-rules").click(function(){$(".camping-custom-popups.rules #christmas-calendar-terms").is(":checked")?$(".camping-custom-popups.rules #christmas-calendar-privacy-policy").is(":checked")?$(".camping-custom-popups.rules #christmas-calendar-years").is(":checked")?(basic.cookies.set("agreed_with_christmas_calendar_rules","1"),$(".tasks-section .camping-custom-popups.rules").html(""),e()):basic.showAlert("Please confirm that you are eighteen (18) years of age or older.","",!0):basic.showAlert("Please agree to the Privacy Policy.","",!0):basic.showAlert("Please agree to the Terms & Conditions.","",!0)})):e()}function t(){console.log("initTasksEvent"),$(".tasks-section .single-task").click(function(){var e=$(this);if(e.hasClass("double-reward")&&!e.find("wrapper").hasClass("opened"))basic.closeDialog(),basic.showDialog('<div class="popup-header"><figure itemscope="" itemtype="http://schema.org/ImageObject" class="text-center"><img src="/assets/images/christmas-calendar-campaign/popup-gifts-header.png" alt="Dentacoins" itemprop="contentUrl"/></figure><div class="lines-and-day"><div class="lines"><div class="small-red-line"></div><div class="small-yellow-line"></div><div class="big-red-line"></div><div class="small-yellow-line"></div><div class="small-red-line"></div></div></div></div><div class="popup-body"><div class="text-center padding-top-50 padding-bottom-50 padding-left-20 padding-right-20"><h2 class="fs-50 fs-xs-32 lato-black">DOUBLE REWARDS</h2><div class="fs-20 fs-xs-18 lato-bold color-christmas-calendar-red padding-bottom-20">IF YOU COMPLETE ALL 31 TASKS ON THE EXACT DATE</div><figure itemscope="" itemtype="http://schema.org/ImageObject" class="text-center max-width-150 margin-0-auto task-present-tile"><img src="/assets/images/christmas-calendar-campaign/double-reward.png" class="width-100" alt="Dentacoins" itemprop="contentUrl"/></figure><button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150 margin-top-30">CLOSE</button></div></div>',"response-popup",null);else if(e.hasClass("disqualified")){var t="DISQUALIFIED",a=e.find("img").attr("src");"dcn-reward"!=e.attr("data-type")&&"ticket-reward"!=e.attr("data-type")||(t="Your daily prize has been taken out of your balance."),basic.closeDialog(),basic.showDialog('<div class="popup-header"><figure itemscope="" itemtype="http://schema.org/ImageObject" class="text-center"><img src="/assets/images/christmas-calendar-campaign/popup-gifts-header.png" alt="Dentacoins" itemprop="contentUrl"/></figure><div class="lines-and-day"><div class="lines"><div class="small-red-line"></div><div class="small-yellow-line"></div><div class="big-red-line"></div><div class="small-yellow-line"></div><div class="small-red-line"></div></div></div></div><div class="popup-body"><div class="text-center padding-top-50 padding-bottom-50 padding-left-20 padding-right-20"><h2 class="fs-50 fs-xs-32 lato-black">DISQUALIFIED</h2><div class="fs-20 fs-xs-18 lato-bold color-christmas-calendar-red padding-bottom-20">You haven\'t completed the task as required.</div><figure itemscope="" itemtype="http://schema.org/ImageObject" class="text-center max-width-150 margin-0-auto task-present-tile"><img src="'+a+'" class="width-100" alt="Dentacoins" itemprop="contentUrl"/></figure><div class="fs-18 lato-bold padding-top-10">'+t+'</div><button type="button" class="white-red-btn custom-close-bootbox width-100 max-width-150 margin-top-30">CLOSE</button></div></div>',"response-popup",null)}else $.ajax({type:"POST",url:"/holiday-calendar/"+christmasCalendarYear+"/get-task-popup/"+e.attr("data-task"),dataType:"json",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(t){if(t.success){if(basic.closeDialog(),basic.showDialog(t.success,"christmas-calendar-task",null),"1"==e.attr("data-day-id")){var a,s=0,i=0,o=0,n=0;function l(){$(".popup-body .upload-image .photo .avatar.avatar-selected").css({"background-position":"calc(50% - "+i+"px) calc(50% - "+s+"px)"})}function r(e,t){var o,n;"vertical"==e?(o=s+t,n=parseInt($(".popup-body .upload-image .photo .avatar").data("h"))/2):(o=i+t,n=parseInt($(".popup-body .upload-image .photo .avatar").data("w"))/2),o>-n&&o<n?("vertical"==e?s+=t:i+=t,l()):clearInterval(a)}$('.task-body [name="character-type"]').on("change",function(){"male"==$(this).val()?n=1:"female"==$(this).val()&&(n=2),$(".task-body .upload-image .border").html('<img src="https://christmas-calendar-api.dentacoin.com/assets/images/'+t.year+"/border-"+n+'.png"/>')}),$(".christmas-calendar-task #upload-avatar").change(function(){var e=this;readURL(e,2,allowedImagesExtensions,function(){if(e.files&&e.files[0]){var t=new FileReader;t.onload=function(e){var t=new Image;t.src=e.target.result,t.onload=function(){var t="",a=this.width/this.height;t=a>=1?"100% "+100/a+"%":100*a+"% 100%",$(".christmas-calendar-task .avatar img").hide(),$(".christmas-calendar-task .avatar").css("background-image","url("+e.target.result+")"),$(".christmas-calendar-task .avatar").css("background-size",t),$(".christmas-calendar-task .avatar").data("ratio",a).data("w",this.width).data("h",this.height),$(".christmas-calendar-task .avatar").addClass("avatar-selected"),$(".upload-image .avatar").height($(".upload-image .avatar").width()),$("form input[name='avatar']").val(e.target.result),$(".zoom-scroll-container .wrapper").slider("value",1),$(".popup-body form input[name='background_scale']").val(1),s=i=0,l(),o=0,$(".upload-image .rotation").css({transform:"rotate("+o+"deg)","-webkit-transform":"rotate("+o+"deg)","-moz-transform":"("+o+"deg)","-ms-transform":"rotate("+o+"deg)"}),$(".upload-image .rotation .border").css({transform:"rotate(-"+o+"deg)","-webkit-transform":"rotate(-"+o+"deg)","-moz-transform":"(-"+o+"deg)","-ms-transform":"rotate(-"+o+"deg)"})}},t.readAsDataURL(e.files[0])}},function(){return basic.showAlert("Max file size must be 2MB and allowed file formats are png, jpg, jpeg.","",!0),!1})}),$(".popup-body .up-triangle img").mousedown(function(){$(".avatar img").is(":hidden")&&(null!=a&&clearInterval(a),r("vertical",10),a=setInterval(function(){r("vertical",10)},100))}),$(document).mouseup(function(){null!=a&&clearInterval(a)}),$(".popup-body .down-triangle img").mousedown(function(){$(".avatar img").is(":hidden")&&(null!=a&&clearInterval(a),r("vertical",-10),a=setInterval(function(){r("vertical",-10)},100))}),$(".popup-body .left-triangle img").mousedown(function(){$(".avatar img").is(":hidden")&&(null!=a&&clearInterval(a),r("horizontal",10),a=setInterval(function(){r("horizontal",10)},100))}),$(".popup-body .right-triangle img").mousedown(function(){$(".avatar img").is(":hidden")&&(null!=a&&clearInterval(a),r("horizontal",-10),a=setInterval(function(){r("horizontal",-10)},100))}),$(".popup-body .rotate").click(function(){$(".avatar img").is(":hidden")&&(360==(o+=90)&&(o=0),$(".upload-image .rotation").css({transform:"rotate("+o+"deg)","-webkit-transform":"rotate("+o+"deg)","-moz-transform":"("+o+"deg)","-ms-transform":"rotate("+o+"deg)"}),$(".upload-image .rotation .border").css({transform:"rotate(-"+o+"deg)","-webkit-transform":"rotate(-"+o+"deg)","-moz-transform":"(-"+o+"deg)","-ms-transform":"rotate(-"+o+"deg)"}))}),$(".zoom-scroll-container .wrapper").slider({value:1,min:.5,max:1.5,step:.1,slide:function(e,t){$(".popup-body form input[name='background_scale']").val(t.value);var a,s=$(".avatar").data("ratio");a=s>=1?100*t.value+"% "+100*t.value/s+"%":100*t.value*s+"% "+100*t.value+"%",$(".avatar").css("background-size",a)}}),$(".popup-body form").on("submit",function(t){t.preventDefault();for(var a=$(this),l=[],r=0,c=$('[name="text_proof[]"]').length;r<c;r+=1){if(""==$('[name="text_proof[]"]').eq(r).val().trim()||!basic.validateEmail($('[name="text_proof[]"]').eq(r).val().trim()))return basic.showAlert("Please enter valid emails of your friends.","",!0),!1;l.push($('[name="text_proof[]"]').eq(r).val().trim())}if(1!=n&&2!=n)basic.showAlert("Please select character gender.","",!0);else if(""==a.find('[name="avatar"]').val())basic.showAlert("Please upload your photo.","",!0);else{projectData.general_logic.data.showLoader();var d={avatar:a.find('[name="avatar"]').val(),year:a.find('[name="year"]').val(),background_scale:a.find('[name="background_scale"]').val(),"avatar-border":n,horizontal_step:i,vertical_step:s,size:$(".upload-image .avatar").width(),rotation:o};$.ajax({type:"POST",url:"/holiday-calendar/"+christmasCalendarYear+"/complete-task/"+e.attr("data-task"),dataType:"json",data:{text_proof:l},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(t){t.success?(d.user_slug=t.data,$.ajax({type:"POST",url:"https://christmas-calendar-api.dentacoin.com/generate-face-sticker",dataType:"json",data:d,success:function(a){projectData.general_logic.data.hideLoader(),a.success?(t.dcnAmount&&$(".user-dcn-amount").html(t.dcnAmount),t.ticketAmount&&$(".user-ticket-amount").html(t.ticketAmount),t.bonusTickets&&$(".user-bonus-ticket-amount").html(t.bonusTickets),e.find(".wrapper").addClass("opened"),e.find(".present__content").append('<i class="fa fa-check check-icon" aria-hidden="true"></i>'),basic.closeDialog(),basic.showDialog(t.success,"response-popup",null)):basic.showAlert("Something went wrong. Please try again later or write a message to admin@dentacoin.com with description of the problem.","",!0)}})):t.error&&(projectData.general_logic.data.hideLoader(),t.technicalError?basic.showAlert(t.error,"",null):basic.showDialog(t.error,"response-popup",null))}})}})}else if(["2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","25","26","28","29","30","31"].indexOf(e.attr("data-day-id"))>-1){function c(t,a,s){u(t,a,e,new FormData($(a)[0]),function(t){projectData.general_logic.data.hideLoader(),t.dcnAmount&&$(".user-dcn-amount").html(t.dcnAmount),t.ticketAmount&&$(".user-ticket-amount").html(t.ticketAmount),t.bonusTickets&&$(".user-bonus-ticket-amount").html(t.bonusTickets),e.find(".wrapper").addClass("opened"),e.find(".present__content").append('<i class="fa fa-check check-icon" aria-hidden="true"></i>'),t.doubleAmount&&$(".single-task.double-reward .present__content").append('<i class="fa fa-check check-icon" aria-hidden="true"></i>'),basic.closeDialog(),basic.showDialog(t.success,"response-popup",null)},s)}$(".popup-body form").on("submit",function(t){t.preventDefault();var a=$(this),s=this;if(["6","12","15","25","30"].indexOf(e.attr("data-day-id"))>-1){var i={callback:function(t){t&&c(a,s,e.attr("data-day-id"))}};basic.showConfirm('<div class="fs-20 lato-bold text-center padding-bottom-20">WARNING</div><div class="fs-16 text-center padding-bottom-20">All entries are subject to manual approval. If your entry does not meet the requirements, you will be disqualified from today\'s task.</div><div class="fs-16 text-center padding-bottom-20">Are you sure you want to submit the task?</div>',"",i,!0)}else c(a,s,e.attr("data-day-id"))})}else["27"].indexOf(e.attr("data-day-id"))>-1?$(".newsletter-register form").on("submit",function(t){var a=$(this),s=!1;basic.validateEmail(a.find('input[type="email"]').val().trim())&&a.find("#newsletter-privacy-policy-id").is(":checked")||(s=!0),s||(u(a,this,e,new FormData($(a)[0]),function(t){projectData.general_logic.data.hideLoader(),t.dcnAmount&&$(".user-dcn-amount").html(t.dcnAmount),t.ticketAmount&&$(".user-ticket-amount").html(t.ticketAmount),t.bonusTickets&&$(".user-bonus-ticket-amount").html(t.bonusTickets),e.find(".wrapper").addClass("opened"),e.find(".present__content").append('<i class="fa fa-check check-icon" aria-hidden="true"></i>'),basic.closeDialog(),basic.showDialog(t.success,"response-popup",null)}),fireGoogleAnalyticsEvent("Subscription","Sign-up","Newsletter"))}):["24"].indexOf(e.attr("data-day-id"))>-1&&$(".popup-body form").on("submit",function(t){t.preventDefault();u($(this),this,e,new FormData($(this)[0]),function(t){var a={};a.user_slug=t.data,a.year=t.year,$.ajax({type:"POST",url:"https://christmas-calendar-api.dentacoin.com/generate-holiday-card",dataType:"json",data:a,success:function(a){projectData.general_logic.data.hideLoader(),a.success?(a.dcnAmount&&$(".user-dcn-amount").html(a.dcnAmount),a.ticketAmount&&$(".user-ticket-amount").html(a.ticketAmount),a.bonusTickets&&$(".user-bonus-ticket-amount").html(a.bonusTickets),e.find(".wrapper").addClass("opened"),e.find(".present__content").append('<i class="fa fa-check check-icon" aria-hidden="true"></i>'),basic.closeDialog(),basic.showDialog(t.success,"response-popup",null)):basic.showAlert("Something went wrong. Please try again later or write a message to admin@dentacoin.com with description of the problem.","",!0)}})})});var d=$(".screenshot_proof").length;if(d>0)for(var p=0;p<d;p+=1)$(".screenshot_proof").eq(p).on("change",function(){$(this).parent().find(".filename").remove(),$(this).parent().append('<div class="fs-14 filename">'+$(this)[0].files[0].name+"</div>")});function u(e,t,a,s,i,o){function n(){projectData.general_logic.data.showLoader(),setTimeout(function(){$.ajax({type:"POST",url:"/holiday-calendar/"+christmasCalendarYear+"/complete-task/"+a.attr("data-task"),data:s,async:!1,processData:!1,contentType:!1,dataType:"json",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){e.success?i(e):e.error&&(projectData.general_logic.data.hideLoader(),e.technicalError?basic.showAlert(e.error,"",null):basic.showDialog(e.error,"response-popup",null))}})})}if($(".task-error").remove(),null!=o&&"3"==o){if(e.find('[name="text_proof"]').length&&""==e.find('[name="text_proof"]').val().trim()&&""==e.find(".screenshot_proof").val().trim())return basic.showAlert("Please submit proof. You need to link your post/ tweet or attach a screenshot.","",!0),!1;""!=e.find(".screenshot_proof").val().trim()?readURL(t.querySelectorAll(".screenshot_proof")[0],2,allowedImagesExtensions,function(){n()},function(){return basic.showAlert("Max file size must be 2MB and allowed file formats are png, jpg, jpeg.","",!0),!1}):n()}else{if(e.find('[name="text_proof"]').length&&""==e.find('[name="text_proof"]').val().trim())return basic.showAlert("Please submit proof. Otherwise, you may be disqualified.","",!0),!1;if(d)if(d>1){for(var l=0;l<d;l+=1)if(!error){if(""==e.find(".screenshot_proof").eq(l).val().trim())return basic.showAlert("Please attach all screenshots. Otherwise, you will not receive your reward.","",!0),!1;readURL(t.querySelectorAll(".screenshot_proof")[l],2,allowedImagesExtensions,function(){l==d-1&&n()},function(){return basic.showAlert("Max file size must be 2MB and allowed file formats are png, jpg, jpeg.","",!0),!1})}}else{if(""==e.find(".screenshot_proof").val().trim())return basic.showAlert("Please attach a screenshot. Otherwise, you will not receive your reward.","",!0),!1;readURL(t.querySelectorAll(".screenshot_proof")[0],2,allowedImagesExtensions,function(){n()},function(){return basic.showAlert("Max file size must be 2MB and allowed file formats are png, jpg, jpeg.","",!0),!1})}else n()}}}else t.error&&basic.showDialog(t.error,"response-popup",null)}})})}}},partnerNetwork:function(){$("body").hasClass("partner-network")&&initMap()},berlinRoundtable:async function(){if($("body").hasClass("berlin-roundtable")){hasOwnProperty.call(loadedLibs,"slick")||(isFirefox?$("head").append('<link rel="stylesheet" type="text/css" href="/dist/libs/slick/slick.min.css"/>'):$("head").append('<link rel="preload" as="style" onload="this.rel=\'stylesheet\'" type="text/css" href="/dist/libs/slick/slick.min.css"/>'),await $.getScript("/dist/libs/slick/slick.min.js",function(){}),console.log("slick loaded"),loadedLibs.slick=!0),$(document).on("click",".reserve-your-spot",function(){$("html, body").animate({scrollTop:$(".reserve-your-spot-form").offset().top},300)}),$('select[name="company-profile"]').on("change",function(){"Other:"==$(this).find("option:selected").val()?$(".camping-select-result").html('<div class="padding-bottom-20 field-parent"><textarea id="please-specify" name="please-specify" placeholder="Please specify" rows="3" maxlength="3000" class="required form-field"></textarea></div>'):$(".camping-select-result").html("")});var e=!0;$("form.reserve-your-spot-form").on("submit",async function(t){var a=$(this);if(t.preventDefault(),e){a.find(".error-handle").length&&a.find(".error-handle").remove();for(var s=a.find(".form-field.required"),i=!0,o=0,n=s.length;o<n;o+=1)s.eq(o).is("select")?"disabled"==s.eq(o).val()&&(customErrorHandle(s.eq(o).closest(".field-parent"),"Please choose from list."),i=!1):("email"!=s.eq(o).attr("type")||basic.validateEmail(s.eq(o).val().trim())||(customErrorHandle(s.eq(o).closest(".field-parent"),"Please use valid email address."),i=!1),""==s.eq(o).val().trim()&&(customErrorHandle(s.eq(o).closest(".field-parent"),"This field is required."),i=!1));(await checkCaptcha(a.find("#register-captcha").val().trim())).error&&(customErrorHandle(a.find("#register-captcha").closest(".field-parent"),"Please enter correct captcha."),i=!1),i&&e&&(e=!1,projectData.general_logic.data.showLoader(),setTimeout(async function(){$.ajax({type:"POST",url:"/submit-berlin-roundtable-form",dataType:"json",data:a.serialize(),headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(t){t.success&&(e=!0,basic.showAlert(t.success),$("form.reserve-your-spot-form input.required, form.reserve-your-spot-form textarea.required").val(""),$(".refresh-captcha").click(),projectData.general_logic.data.hideLoader())}})},1e3))}}),$(".attendees-slider").length&&$(".attendees-slider").slick({slidesToShow:1,infinite:!0,arrows:!0,dots:!1})}}}},general_logic:{not_logged_in:function(){projectData.general_logic.data.gateway(),projectData.general_logic.data.cookie()},logged_in:function(){projectData.general_logic.data.miniHub(),projectData.general_logic.data.cookie()},data:{loadDeferResources:function(){for(var e=0,t=jQuery("[data-defer-src]").length;e<t;e+=1){var a=jQuery("[data-defer-src]").eq(e);basic.isInViewport(a)&&null==jQuery("[data-defer-src]").eq(e).attr("src")&&jQuery("[data-defer-src]").eq(e).attr("src",jQuery("[data-defer-src]").eq(e).attr("data-defer-src"))}},gateway:function(){"undefined"!=typeof dcnGateway&&(dcnGateway.init({platform:"dentacoin",forgotten_password_link:"https://account.dentacoin.com/forgotten-password",callback:function(){console.log("INITIATED")}}),$(document).on("dentistAuthSuccessResponse",async function(e){console.log("dentistAuthSuccessResponse"),window.location.href=window.location.href+"?cross-login=true"}),$(document).on("patientAuthSuccessResponse",async function(e){console.log("patientAuthSuccessResponse"),window.location.href=window.location.href+"?cross-login=true"}))},cookie:async function(){console.log("cookie"),""!=basic.cookies.get("performance_cookies")||""!=basic.cookies.get("performance_cookies")||""!=basic.cookies.get("performance_cookies")||""!=basic.cookies.get("performance_cookies")||$("body").hasClass("dentacoin-map-iframe")||(hasOwnProperty.call(loadedLibs,"dentacoinPackageJs")||(await $.getScript("/assets/libs/dentacoin-package/js/init.js?v="+(new Date).getTime(),function(){}),console.log("dentacoinPackageJs loaded"),loadedLibs.dentacoinPackageJs=!0),hasOwnProperty.call(loadedLibs,"dentacoinCookieCss")||(isFirefox?$("head").append('<link rel="stylesheet" type="text/css" href="/assets/libs/dentacoin-package/css/style-cookie.css?v='+(new Date).getTime()+'"/>'):$("head").append('<link rel="preload" as="style" onload="this.rel=\'stylesheet\'" type="text/css" href="/assets/libs/dentacoin-package/css/style-cookie.css?v='+(new Date).getTime()+'"/>'),console.log("dentacoinCookieCss loaded"),loadedLibs.dentacoinCookieCss=!0),console.log(typeof dcnCookie,"typeof(dcnCookie)"),"undefined"!=typeof dcnCookie&&dcnCookie.init({google_app_id:"UA-97167262-1",fb_app_id:"2366034370318681"}))},showLoader:function(){$(".camping-loader").hasClass("loaded")?$(".camping-loader .response-layer").show():($(".camping-loader").html('<div class="response-layer"><div class="wrapper"><picture itemscope="" itemtype="http://schema.org/ImageObject"><source media="(max-width: 768px)" srcset="/assets/uploads/dcn-flipping-coin-logo-loader-v3-mobile.gif"><img itemprop="contentUrl" src="/assets/uploads/dcn-flipping-coin-logo-loader-v3_desktop.gif" class="max-width-250 max-width-xs-200" alt="Loader"></picture></div></div>').addClass("loaded"),$(".camping-loader .response-layer").show())},hideLoader:function(){$(".camping-loader .response-layer").hide()},initTooltips:function(){$('[data-toggle="tooltip"]').length&&$('[data-toggle="tooltip"]').tooltip()},handlePushStateRedirects:function(){window.location.href.includes("users")?window.location.href=HOME_URL+"/users":window.location.href.includes("dentists")?window.location.href=HOME_URL+"/dentists":window.location.href.includes("traders")?window.location.href=HOME_URL+"/traders":window.location.href.includes(HOME_URL)&&(window.location.href=HOME_URL)},miniHub:async function(){hasOwnProperty.call(loadedLibs,"dentacoinPackageJs")||(await $.getScript("/assets/libs/dentacoin-package/js/init.js?v="+(new Date).getTime(),function(){}),loadedLibs.dentacoinPackageJs=!0);var e={element_id_to_bind:"header-avatar",platform:"dentacoin",log_out_link:"https://dentacoin.com/user-logout"};$("body").hasClass("logged-patient")?(e.type_hub="mini-hub-patients",$("body").hasClass("home")&&(e.without_apps=!0)):$("body").hasClass("logged-dentist")&&(e.type_hub="mini-hub-dentists",$("body").hasClass("home")&&(e.without_apps=!0)),dcnHub.initMiniHub(e)},videoExpressionsSlider:async function(e){if($('.module.video-expressions-slider[data-type="'+e+'"]').length){hasOwnProperty.call(loadedLibs,"slick")||(isFirefox?$("head").append('<link rel="stylesheet" type="text/css" href="/dist/libs/slick/slick.min.css"/>'):$("head").append('<link rel="preload" as="style" onload="this.rel=\'stylesheet\'" type="text/css" href="/dist/libs/slick/slick.min.css"/>'),await $.getScript("/dist/libs/slick/slick.min.js",function(){}),console.log("slick loaded"),loadedLibs.slick=!0);var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a),$('.module.video-expressions-slider[data-type="'+e+'"]').slick({slidesToShow:3,responsive:[{breakpoint:767,settings:{slidesToShow:1}}]});var s=!1;$("body").addClass("overflow-hidden"),$(window).width()<767&&(s=!0),$("body").removeClass("overflow-hidden"),s||($('.module.video-expressions-slider[data-type="'+e+'"] .slick-current').next().next().addClass("after-middle"),$('.module.video-expressions-slider[data-type="'+e+'"] .slick-current').next().addClass("middle-slide"),$('.module.video-expressions-slider[data-type="'+e+'"] .slick-current').addClass("before-middle"));var i=!0;function o(e,t){console.log(e,"playYTVideo"),e.closest(".slide-wrapper").append('<div id="main-video-player"></div>'),e.closest(".single-slide").find(".video-thumb").addClass("visibility-hidden");var a={};a.onReady=function(e){s||$("iframe#main-video-player").height($("iframe#main-video-player").closest(".single-slide").find(".video-thumb figure img").height());e.target.playVideo()},new YT.Player("main-video-player",{videoId:t,events:a})}$('.module.video-expressions-slider[data-type="'+e+'"]').on("afterChange",function(t,a,n,l){$('.module.video-expressions-slider[data-type="'+e+'"] .slide-wrapper iframe').length&&($('.module.video-expressions-slider[data-type="'+e+'"] .slide-wrapper iframe').remove(),$('.module.video-expressions-slider[data-type="'+e+'"] .single-slide .video-thumb').removeClass("visibility-hidden")),s||($('.module.video-expressions-slider[data-type="'+e+'"] .slick-slide').removeClass("middle-slide after-middle before-middle"),$('.module.video-expressions-slider[data-type="'+e+'"] .slick-current').next().next().addClass("after-middle"),$('.module.video-expressions-slider[data-type="'+e+'"] .slick-current').next().addClass("middle-slide"),$('.module.video-expressions-slider[data-type="'+e+'"] .slick-current').addClass("before-middle")),i?($('.module.video-expressions-slider[data-type="'+e+'"] .slide-wrapper iframe').remove(),$('.module.video-expressions-slider[data-type="'+e+'"] .single-slide .video-thumb').removeClass("visibility-hidden")):i=!0,"true"==$('.module.video-expressions-slider[data-type="'+e+'"] .slick-active.middle-slide').find(".youtube-play-button").attr("data-play")&&(o($('.module.video-expressions-slider[data-type="'+e+'"] .slick-active.middle-slide').find(".youtube-play-button"),$('.module.video-expressions-slider[data-type="'+e+'"] .slick-active.middle-slide').attr("data-video-id")),$('.module.video-expressions-slider[data-type="'+e+'"] .youtube-play-button').removeAttr("data-play"))}),$('.module.video-expressions-slider[data-type="'+e+'"] .youtube-play-button').click(function(){console.log("clicked"),$('.module.video-expressions-slider[data-type="'+e+'"] .youtube-play-button').removeAttr("data-play"),$('.module.video-expressions-slider[data-type="'+e+'"] .youtube-play-button[data-id="'+$(this).attr("data-id")+'"]').attr("data-play","true");var t=$(this).closest(".single-slide").attr("data-video-id");console.log(t,"videoId"),i=!1,$('.module.video-expressions-slider[data-type="'+e+'"] .slide-wrapper iframe').remove(),$('.module.video-expressions-slider[data-type="'+e+'"] .single-slide .video-thumb').removeClass("visibility-hidden"),console.log(s,"xsScreen"),s?o($(this),t):$(this).closest(".slick-slide").hasClass("middle-slide")?o($(".middle-slide .youtube-play-button"),t):$('.module.video-expressions-slider[data-type="'+e+'"]').slick("slickGoTo",$(this).closest(".slick-slide").prev().attr("data-slick-index"))})}},userExpressionsSlider:async function(e){if($('.user-expressions-slider[data-type="'+e+'"]').length){hasOwnProperty.call(loadedLibs,"slick")||(isFirefox?$("head").append('<link rel="stylesheet" type="text/css" href="/dist/libs/slick/slick.min.css"/>'):$("head").append('<link rel="preload" as="style" onload="this.rel=\'stylesheet\'" type="text/css" href="/dist/libs/slick/slick.min.css"/>'),await $.getScript("/dist/libs/slick/slick.min.js",function(){}),console.log("slick loaded"),loadedLibs.slick=!0),$('.user-expressions-slider[data-type="'+e+'"]').slick({slidesToShow:3,infinite:!0,dots:!0,arrows:!1,adaptiveHeight:!0,responsive:[{breakpoint:1800,settings:{slidesToShow:2}},{breakpoint:767,settings:{slidesToShow:1}}]});var t=!1;if($("body").addClass("overflow-hidden"),$(window).width()<767&&(t=!0),$("body").removeClass("overflow-hidden"),!t){function a(){for(var t=0,a=0,s=$('.user-expressions-slider[data-type="'+e+'"] .slick-list .slick-active').length;a<s;a+=1)$('.user-expressions-slider[data-type="'+e+'"] .slick-list .slick-active').eq(a).find(".user-expression-text").outerHeight()>t&&(t=$('.user-expressions-slider[data-type="'+e+'"] .slick-list .slick-active').eq(a).find(".user-expression-text").outerHeight());$('.user-expressions-slider[data-type="'+e+'"] .slick-list .slick-active .user-expression-text').animate({height:t},300);var i=0;for(a=0,s=$('.user-expressions-slider[data-type="'+e+'"] .slick-list .slick-active').length;a<s;a+=1)$('.user-expressions-slider[data-type="'+e+'"] .slick-list .slick-active').eq(a).outerHeight()>i&&(i=$('.user-expressions-slider[data-type="'+e+'"] .slick-list .slick-active').eq(a).outerHeight());$('.user-expressions-slider[data-type="'+e+'"] .slick-list').animate({height:i},500)}a(),$('.user-expressions-slider[data-type="'+e+'"]').on("afterChange",function(t,s,i,o){$('.user-expressions-slider[data-type="'+e+'"] .slick-list .slick-active .user-expression-text').outerHeight("auto"),a()})}}},setChangeableVideos:function(){for(var e=0,t=$(".changeable-video").length;e<t;e+=1)if(!$(".changeable-video").eq(e).find("video").length){var a=$(".changeable-video").eq(e).attr("data-video-attributes"),s=$(".changeable-video").eq(e).attr("data-video-class");s=null!=s?'class="'+s+'"':"","iOS"==basic.getMobileOperatingSystem()||"Mac"==basic.getMobileOperatingSystem()?("iOS"==basic.getMobileOperatingSystem()&&(a+=" playsinline"),$(".changeable-video").eq(e).prepend("<video "+a+" "+s+'><source src="'+$(".changeable-video").eq(e).attr("data-mp4")+'" type="video/mp4">Your browser does not support HTML5 video.</video>'),$(".changeable-video").eq(e).find('link[itemprop="contentURL"]').attr("href",$(".changeable-video").eq(e).attr("data-mp4"))):($(".changeable-video").eq(e).prepend("<video "+a+" "+s+'><source src="'+$(".changeable-video").eq(e).attr("data-webm")+'" type="video/webm">Your browser does not support HTML5 video.</video>'),$(".changeable-video").eq(e).find('link[itemprop="contentURL"]').attr("href",$(".changeable-video").eq(e).attr("data-webm")))}},async dentacoinGoogleMap(){hasOwnProperty.call(loadedLibs,"googleMap")||(await $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCaVeHq_LOhQndssbmw-aDnlMwUG73yCdk&libraries=places&language=en",function(){}),await $.getScript("/dist/js/init-map.min.js",function(){}),console.log("googleMap loaded"),loadedLibs.googleMap=!0),"Mac"==basic.getMobileOperatingSystem()&&$(".section-google-map").addClass("safari-browser");var e=await projectData.requests.getMapHtml();if(e.success){$(".section-google-map.module .map-container").html(e.data),projectData.general_logic.data.hideLoader(),$(".selectpicker").selectpicker(),projectData.general_logic.data.initTooltips();var t=JSON.parse($(".google-map-box").attr("data-locations")),a={initialLat:void 0,initialLng:void 0,initialZoom:void 0,filter_country:void 0,location_id_and_source_pairs:[],categories:$(".selectpicker.location-types").val()};initMap(t,a),basic.initCustomCheckboxes(".google-map-and-bottom-filters","append");var s='<li><div class="invite-text padding-left-15 padding-right-15 padding-top-15 padding-bottom-25"><div class="color-white lato-black fs-28 fs-sm-22 fs-xs-20 padding-bottom-15">CAN\'T FIND YOUR DENTIST?<div class="fs-20 lato-regular">Add as many dentists as you like and get rewarded for every real entry!</div></div><div><a href="https://reviews.dentacoin.com/?popup=invite-new-dentist-popup" target="_blank" class="bright-blue-white-btn with-border fs-xs-16">INVITE DENTIST</a></div></div></li>';function i(e){$(".hide-on-map-open").addClass("hide"),e.parent().addClass("list-shown"),e.addClass("with-map-pin").removeClass("with-list-icon").html(" GO BACK TO MAP"),$(".google-map-and-bottom-filters").addClass("padding-bottom-80"),$(".subpages-sticky-nav").addClass("hide"),$(".picker-and-map .google-map-box").hide(),$(".picker-and-map .left-picker").fadeIn(500),$(".locations-list .invite-text").fadeIn(),$("body").addClass("overflow-hidden"),$(window).width()<992&&$(".single-location.toggled").length&&($(".results-list").scrollTop(0),$(".results-list").scrollTop($(".single-location.toggled").position().top-15)),$("body").removeClass("overflow-hidden"),b()}$(document).on("click",".map-infowindow button",function(e){$("body").addClass("overflow-hidden"),$(window).width()<992?(i($(".show-locations-list")),$("html, body").animate({scrollTop:$(".map-container").offset().top},300)):e.preventDefault(),$("body").removeClass("overflow-hidden")}),$(".show-locations-list").click(function(){$(this).parent().hasClass("list-shown")?($(".hide-on-map-open").removeClass("hide"),$(this).removeClass("with-map-pin").addClass("with-list-icon").html(" SEE RESULTS IN LIST"),$(".google-map-and-bottom-filters").removeClass("padding-bottom-80"),$(this).parent().removeClass("list-shown"),$(".subpages-sticky-nav").removeClass("hide"),$(".picker-and-map .google-map-box").fadeIn(500),$(".picker-and-map .left-picker").hide(),$(".locations-list .invite-text").hide(),$("html, body").animate({scrollTop:$(".section-google-map.module").offset().top},300),b()):i($(this)),$("html, body").animate({scrollTop:$(".map-container").offset().top},300)});for(var o=[],n=0,l=$(".single-continent").length;n<l;n+=1){for(var r=0,c=0,d=$(".single-continent").eq(n).find(".country-list-parent").length;c<d;c+=1)$(".single-continent").eq(n).find(".country-list-parent").eq(c).find("[data-locations-count]").length&&(r+=parseInt($(".single-continent").eq(n).find(".country-list-parent").eq(c).find("[data-locations-count]").attr("data-locations-count")));0!=r&&($(".single-continent").eq(n).find("> a").append('<span class="lato-bold inline-block locations-count fs-18 fs-xs-14">('+r+" locations)</span>"),o.push({count:r,location_id:$(".single-continent").eq(n).find("> a").attr("data-continent-id")}))}var p=o.sort(basic.dynamicSortArrayByKey("count"));p.reverse();var u="";for(n=0,l=p.length;n<l;n+=1)u+=$(".continent-name[data-continent-id="+p[n].location_id+"]").parent().get(0).outerHTML;$(".continents-list ul").html(u),$("body").addClass("overflow-hidden"),$(window).width()>992&&($(".results-list").css({"max-height":$(".google-map-and-bottom-filters").height()-$(".left-picker .inner-gray-line").height()+"px"}),console.log($(".google-map-and-bottom-filters").height(),"$('.google-map-and-bottom-filters').height()"),console.log($(".left-picker .inner-gray-line").height(),"$('.left-picker .inner-gray-line').height()")),$("body").removeClass("overflow-hidden");var g=$(".selectpicker.location-types").val();async function h(e){if(null!=e&&basic.isJsonString(e)){var t=e,a=await projectData.requests.getMapData({action:"get-continent-stats",data:t});a.success&&$(".picker-and-map .picker-value").html('<span class="lato-black">'+a.data+"</span> Results").attr("data-last-continent",a.data);var s=await projectData.requests.getMapData({action:"combined-count-by-multiple-country",data:t});s.success&&($(".changeable-stats .partners").length&&($(".changeable-stats .partners span").html(s.data.partners),$(".changeable-stats .partners").attr("data-last-continent",s.data.partners)),$(".changeable-stats .non-partners").length&&($(".changeable-stats .non-partners span").html(s.data.non_partners),$(".changeable-stats .non-partners").attr("data-last-continent",s.data.non_partners)),$(".changeable-stats .users").length&&($(".changeable-stats .users span").html(s.data.patients),$(".changeable-stats .users").attr("data-last-continent",s.data.patients)))}}async function m(e,i,o){projectData.general_logic.data.showLoader();var n=0,l=await projectData.requests.getMapData({action:"all-partners-data-by-country",data:i});if(l.success&&l.data.length>0){var r="fa-minus-circle",c="";$(".right-side-filters #category-1").is(":checked")||$(".right-side-filters #category-5").is(":checked")||(r="fa-plus-circle",c="closed");var d="";null!=l.description&&null!=l.description&&(d='data-toggle="tooltip" title="'+l.description+'"');for(var p='<li class="'+c+' category-label" data-name="'+l.name+'"><a href="javascript:void(0);" class="category-toggle-button partners fs-20 fs-xs-18" '+d+'><span><i class="fa '+r+'" aria-hidden="true"></i> '+l.name+'</span></a><ul class="locations-list">',u=0,g=l.data.length;u<g;u+=1)p+=v(l.data[u].avatar_url,l.data[u].name,l.data[u].address,l.data[u].is_partner,l.data[u].city_name,l.data[u].phone,l.data[u].website,l.data[u].top_dentist_month,l.data[u].avg_rating,l.data[u].ratings,l.data[u].trp_public_profile_link,o.find(".element-name").html(),l.data[u].id,"core-db",l.data[u].lat,l.data[u].lon);p+="</ul></li>",e.append(p)}var h=await projectData.requests.getLabsSuppliersAndIndustryPartners({"country-code":i});if(h.success){if(h.data.labs.data.length>0){r="fa-minus-circle",c="";$(".right-side-filters #category-2").is(":checked")||(r="fa-plus-circle",c="closed");d="";null!=h.data.labs.description&&null!=h.data.labs.description&&(d='data-toggle="tooltip" title="'+h.data.labs.description+'"'),n+=h.data.labs.data.length;var m='<li class="'+c+' category-label" data-name="'+h.data.labs.name+'"><a href="javascript:void(0);" class="category-toggle-button labs fs-20 fs-xs-18" '+d+'><span><i class="fa '+r+'" aria-hidden="true"></i> '+h.data.labs.name+'</span></a><ul class="locations-list">';for(u=0,g=h.data.labs.data.length;u<g;u+=1)m+=v("//dentacoin.com/assets/uploads/"+h.data.labs.data[u].clinic_media,h.data.labs.data[u].clinic_name,h.data.labs.data[u].address,null,null,null,h.data.labs.data[u].clinic_link,null,null,null,null,o.find(".element-name").html(),h.data.labs.data[u].id,"dentacoin-db",h.data.labs.data[u].lat,h.data.labs.data[u].lng);m+="</ul></li>",e.append(m)}if(h.data.suppliers.data.length>0){r="fa-minus-circle",c="";$(".right-side-filters #category-3").is(":checked")||(r="fa-plus-circle",c="closed");d="";null!=h.data.suppliers.description&&null!=h.data.suppliers.description&&(d='data-toggle="tooltip" title="'+h.data.suppliers.description+'"'),n+=h.data.suppliers.data.length;var f='<li class="'+c+' category-label" data-name="'+h.data.suppliers.name+'"><a href="javascript:void(0);" class="category-toggle-button suppliers fs-20 fs-xs-18" '+d+'><span><i class="fa '+r+'" aria-hidden="true"></i> '+h.data.suppliers.name+'</span></a><ul class="locations-list">';for(u=0,g=h.data.suppliers.data.length;u<g;u+=1)f+=v("//dentacoin.com/assets/uploads/"+h.data.suppliers.data[u].clinic_media,h.data.suppliers.data[u].clinic_name,h.data.suppliers.data[u].address,null,null,null,h.data.suppliers.data[u].clinic_link,null,null,null,null,o.find(".element-name").html(),h.data.suppliers.data[u].id,"dentacoin-db",h.data.suppliers.data[u].lat,h.data.suppliers.data[u].lng);f+="</ul></li>",e.append(f)}if(h.data.industryPartners.data.length>0){r="fa-minus-circle",c="";$(".right-side-filters #category-4").is(":checked")||(r="fa-plus-circle",c="closed");d="";null!=h.data.industryPartners.description&&null!=h.data.industryPartners.description&&(d='data-toggle="tooltip" title="'+h.data.industryPartners.description+'"'),n+=h.data.industryPartners.data.length;var b='<li class="'+c+' category-label" data-name="'+h.data.industryPartners.name+'"><a href="javascript:void(0);" class="category-toggle-button industryPartners fs-20 fs-xs-18" '+d+'><span><i class="fa '+r+'" aria-hidden="true"></i> '+h.data.industryPartners.name+'</span></a><ul class="locations-list">';for(u=0,g=h.data.industryPartners.data.length;u<g;u+=1)b+=v("//dentacoin.com/assets/uploads/"+h.data.industryPartners.data[u].clinic_media,h.data.industryPartners.data[u].clinic_name,h.data.industryPartners.data[u].address,null,null,null,h.data.industryPartners.data[u].clinic_link,null,null,null,null,o.find(".element-name").html(),h.data.industryPartners.data[u].id,"dentacoin-db",h.data.industryPartners.data[u].lat,h.data.industryPartners.data[u].lng);b+="</ul></li>",e.append(b)}}var y=await projectData.requests.getMapData({action:"all-non-partners-data-by-country",data:i});if(y.success&&y.data.length>0){r="fa-minus-circle",c="";$(".right-side-filters #category-5").is(":checked")||(r="fa-plus-circle",c="closed");d="";null!=y.description&&null!=y.description&&(d='data-toggle="tooltip" title="'+y.description+'"');var w='<li class="'+c+' category-label" data-name="'+y.name+'"><a href="javascript:void(0);" class="category-toggle-button non-partners fs-20 fs-xs-18" '+d+'><span><i class="fa '+r+'" aria-hidden="true"></i> Other registered dental practices</span></a><ul class="locations-list">';for(u=0,g=y.data.length;u<g;u+=1)w+=v(y.data[u].avatar_url,y.data[u].name,y.data[u].address,y.data[u].is_partner,y.data[u].city_name,y.data[u].phone,y.data[u].website,y.data[u].top_dentist_month,y.data[u].avg_rating,y.data[u].ratings,y.data[u].trp_public_profile_link,o.find(".element-name").html(),y.data[u].id,"core-db",y.data[u].lat,y.data[u].lon);w+="</ul></li>",e.append(w)}e.append(s),projectData.general_logic.data.initTooltips();var k=await projectData.requests.getMapData({action:"all-partners-and-non-partners-data-by-country",data:i});if(k.success){n+=k.data.length,$(".dentacoin-stats-category-label span").html("in "+o.find(".element-name").html()),$(".picker-and-map .picker-label").html('<a href="javascript:void(0);" class="go-back-to-countries"><img src="/assets/uploads/back-map-arrow.svg" alt="Red left arrow" class="margin-right-5 inline-block"/> <span class="inline-block">'+o.find(".element-name").html().trim()+"</span></a>"),$(".picker-and-map .picker-value").html('<span class="lato-black">'+n+"</span> Results");for(u=0,g=k.data.length;u<g;u+=1);}if($(".results-list").scrollTop(0),0==o.parent().find(".locations-category-list li").length)o.parent().find(".locations-category-list").html('<div class="fs-18 padding-top-20 padding-bottom-20 text-center">No locations found.</div>');else{function C(e,t){$('select.location-types option[value="'+e+'"]').prop("selected",t),$('.right-side-filters input[type="checkbox"]#'+e).prop("checked",t),t?$('.right-side-filters input[type="checkbox"]#'+e).parent().find(".custom-checkbox").html("✓"):$('.right-side-filters input[type="checkbox"]#'+e).parent().find(".custom-checkbox").html("")}$(".locations-category-list .category-toggle-button").click(function(){$(this).closest("li").toggleClass("closed"),$(this).find("i").hasClass("fa-minus-circle")?($(this).find("i").removeClass("fa-minus-circle").addClass("fa-plus-circle"),$(this).hasClass("partners")?C("category-1",!1):$(this).hasClass("labs")?C("category-2",!1):$(this).hasClass("suppliers")?C("category-3",!1):$(this).hasClass("industryPartners")?C("category-4",!1):$(this).hasClass("non-partners")&&C("category-5",!1),$(".selectpicker.location-types").selectpicker("refresh")):($(this).find("i").removeClass("fa-plus-circle").addClass("fa-minus-circle"),$(this).hasClass("partners")?C("category-1",!0):$(this).hasClass("labs")?C("category-2",!0):$(this).hasClass("suppliers")?C("category-3",!0):$(this).hasClass("industryPartners")?C("category-4",!0):$(this).hasClass("non-partners")&&C("category-5",!0),$(".selectpicker.location-types").selectpicker("refresh")),a.categories=$(".selectpicker.location-types").val(),initMap(t,{initialLat:a.initialLat,initialLng:a.initialLng,initialZoom:a.initialZoom,filter_country:a.filter_country,location_id_and_source_pairs:[[parseInt(a.location_id),a.location_source]],categories:a.categories,campForZoomChange:!0})})}$(".results-list .shown").removeClass("shown"),$(".results-list .locations-nav").addClass("shown"),$(".continents-list .single-continent .country-list-parent").addClass("hide"),o.parent().removeClass("hide").addClass("open-item");var _=await projectData.requests.getMapData({action:"combined-count-by-country",data:i});_.success&&($(".changeable-stats .partners").length&&$(".changeable-stats .partners span").html(_.data.partners),$(".changeable-stats .non-partners").length&&$(".changeable-stats .non-partners span").html(_.data.non_partners),$(".changeable-stats .users").length&&$(".changeable-stats .users span").html(_.data.patients)),projectData.general_logic.data.hideLoader()}function f(e){if(Object.keys(JSON.parse($(".locations-style").attr("data-groups-html"))).length>0){$("select.selectpicker.locations").html("");var s="";Object.keys(JSON.parse($(".locations-style").attr("data-groups-html"))).forEach(function(e,t){s+=JSON.parse($(".locations-style").attr("data-groups-html"))[e]}),$("select.selectpicker.locations").html('<option value="">Show All Locations</option>'+s)}if(e.length>0){$("select.selectpicker.locations optgroup.optgroup-for-types").addClass("to-remove"),$(".category-toggle-button").parent().addClass("closed"),$(".category-toggle-button i").removeClass("fa-minus-circle").addClass("fa-plus-circle");for(var i=0,o=$("select.selectpicker.locations optgroup.optgroup-for-types").length;i<o;i+=1)for(var n=0;n<e.length;n+=1)if($("select.selectpicker.locations optgroup.optgroup-for-types").eq(i).hasClass(e[n])){switch($("select.selectpicker.locations optgroup.optgroup-for-types").eq(i).removeClass("to-remove"),e[n]){case"category-1":$(".category-toggle-button.partners").parent().removeClass("closed"),$(".category-toggle-button.partners i").removeClass("fa-plus-circle").addClass("fa-minus-circle");break;case"category-2":$(".category-toggle-button.labs").parent().removeClass("closed"),$(".category-toggle-button.labs i").removeClass("fa-plus-circle").addClass("fa-minus-circle");break;case"category-3":$(".category-toggle-button.suppliers").parent().removeClass("closed"),$(".category-toggle-button.suppliers i").removeClass("fa-plus-circle").addClass("fa-minus-circle");break;case"category-4":$(".category-toggle-button.industryPartners").parent().removeClass("closed"),$(".category-toggle-button.industryPartners i").removeClass("fa-plus-circle").addClass("fa-minus-circle");break;case"category-5":$(".category-toggle-button.non-partners").parent().removeClass("closed"),$(".category-toggle-button.non-partners i").removeClass("fa-plus-circle").addClass("fa-minus-circle")}break}$("select.selectpicker.locations optgroup.optgroup-for-types.to-remove").remove()}else $("select.selectpicker.locations optgroup.optgroup-for-types").addClass("to-remove");$(".selectpicker.locations").selectpicker("refresh"),a.categories=$(".selectpicker.location-types").val();var l=[];null!=a.location_id&&null!=a.location_source&&(l=[[parseInt(a.location_id),a.location_source]]),initMap(t,{initialLat:a.initialLat,initialLng:a.initialLng,initialZoom:a.initialZoom,filter_country:a.filter_country,location_id_and_source_pairs:l,categories:a.categories,campForZoomChange:!0})}function v(e,t,a,s,i,o,n,l,r,c,d,p,u,g,h,m){var f="";s&&(f='<div class="is-partner fs-14 lato-bold padding-top-5"><span><figure itemscope="" itemtype="http://schema.org/ImageObject" class="inline-block margin-right-5 max-width-20"><img src="/assets/images/logo.svg" class="width-100" alt="Dentacoin logo"></figure><span class="inline-block">Partner</span></span></div>');var v='<div class="trp-stats padding-top-5">';null!=r&&(v+='<div class="stars inline-block margin-right-5"><div class="active-stars" style="width: '+r/5*100+'%"></div></div>'),null!=c&&null!=c&&(v+=' <span class="inline-block fs-14 base-on-x-reviews">(based on '+c+" reviews)</span> "),null!=d&&null!=d&&(v+=' <a href="'+d+'" target="_blank" class="fs-26 inline-block margin-left-5"><i class="fa fa-external-link" aria-hidden="true"></i></a>'),v+="</div>";var b="";b=null!=i&&null!=i?i+", "+p:p;var y='<div class="fs-16 hidden-content padding-top-5">';return null!=a&&null!=a&&(y+='<div><img src="/assets/images/map-results-location-pin.svg" alt="Location icon" class="width-100 max-width-20 inline-block"/> '+(a=a.replace(/(?:https?|ftp):\/\/[\n\S]+/g,""))+"</div>"),null!=o&&null!=o&&(y+='<div><img src="/assets/images/map-results-phone.svg" alt="Phone icon" class="width-100 max-width-20 inline-block"/> <a href="tel:'+o+'">'+o+"</a></div>"),null!=n&&null!=n&&(y+='<div><img src="/assets/images/map-results-website-icon.svg" alt="Website icon" class="width-100 max-width-20 inline-block"/> <a href="'+n+'" target="_blank">Visit website</a></div>'),l&&(y+='<div><img src="/assets/images/top-dentists-badge.png" alt="Top dentist badge icon" class="width-100 max-width-20 inline-block"/> Top Dentist</div>'),'<li class="fs-0 single-location"><figure itemscope="" itemtype="http://schema.org/ImageObject" class="inline-block"><img src="'+e+'" alt="Location logo" itemprop="contentUrl"/></figure><div class="right-location-content inline-block padding-left-10"><h3 class="fs-26 fs-xs-20 fs-sm-22 lato-black color-black">'+t+"</h3>"+v+'<div class="fs-16 color-black padding-top-5 padding-bottom-5">'+b+"</div>"+f+(y+="</div>")+'<div class="text-right padding-top-10"><a href="javascript:void(0);" class="toggle-location-tile" data-city="'+i+'" data-location-id="'+u+'" data-location-source="'+g+'" data-lat="'+h+'" data-lng="'+m+'" data-name="'+t.replace(/"/g,"&quot;")+'"><img src="/assets/images/down-arrow.svg"/></a></div></div></li>'}function b(){$("body").hasClass("dentacoin-map-iframe")&&(console.log($(".section-google-map.module .map-container").height(),"event height"),window.parent.postMessage({event_id:"iframe_size_event",data:{height:$(".section-google-map.module .map-container").height()}},"*"))}$(".selectpicker.location-types").on("change",function(){if(function(e){if($('.right-side-filters input[type="checkbox"]').prop("checked",!1),$(".right-side-filters .custom-checkbox").html(""),e.length>0)for(var t=0;t<e.length;t+=1)$('.right-side-filters input[type="checkbox"]#'+e[t]).length&&($('.right-side-filters input[type="checkbox"]#'+e[t]).prop("checked",!0),$('.right-side-filters input[type="checkbox"]#'+e[t]).parent().find(".custom-checkbox").html("✓"));e.includes("category-5")&&!e.includes("category-1")&&e.push("category-1");$('.right-side-filters input[type="checkbox"]').prop("checked",!0),f(e)}($(this).val()),$(this).val().length>g.length){for(var e=$(this).val(),t=0,a=$(this).val().length;t<a;t+=1)if(g.includes($(this).val()[t])){var s=e.indexOf($(this).val()[t]);e.splice(s,1)}console.log(e,"this has beeen checked"),projectData.events.fireGoogleAnalyticsEvent("Map","Check type filter",$('.location-types option[value="'+e+'"]').html()),g=$(this).val()}else{for(t=0,a=g.length;t<a;t+=1)if(!$(this).val().includes(g[t])){projectData.events.fireGoogleAnalyticsEvent("Map","Uncheck type filter",$('.location-types option[value="'+g[t]+'"]').html());break}g=$(this).val()}return!1}),$(document).on("showLocationInList",async function(e){if(e.response_data){$(".results-list .continents-list").hasClass("hide")&&($(".custom-search-list").addClass("hide"),$(".continents-list, .results-nav").removeClass("hide"),$(".locations-splitted-by-category .filter-option-inner-inner").removeClass("fs-0").find(".custom-label").remove()),console.log(e.response_data,"event.response_data");var s=void 0;e.response_data.zoom&&(s=e.response_data.zoom);var i=void 0;e.response_data.center_by_average_coordinates&&(i=e.response_data.center_by_average_coordinates);for(var o=!1,n=!1,l=0,r=$(".locations-category-list").length;l<r;l+=1)if($(".locations-category-list").eq(l).find("li").length>0){o=!0;break}if(e.response_data.disallowAlreadyLoaded&&(n=!0),$(".country-list-parent.open-item > a").length&&e.response_data.country_code!=$(".country-list-parent.open-item > a").attr("data-country-code")&&(n=!0),o&&!n)$(".locations-list .single-location").removeClass("toggled"),$(".results-list").scrollTop(0),e.response_data.id&&e.response_data.source&&($('.locations-list .single-location a[data-location-id="'+e.response_data.id+'"][data-location-source="'+e.response_data.source+'"]').closest(".single-location").addClass("toggled"),$(".results-list").scrollTop($('.locations-list .single-location a[data-location-id="'+e.response_data.id+'"][data-location-source="'+e.response_data.source+'"]').closest(".single-location").position().top-15));else{$(".results-list .shown").removeClass("shown"),$(".results-list .countries-nav").addClass("shown"),$(".countries-list .country-list-parent").removeClass("hide open-item"),$(".continents-list > ul > li").removeClass("hide open-item"),$(".results-list .shown").removeClass("shown"),$(".results-list .continents-nav").addClass("shown");for(l=0,r=$(".continents-list .single-continent").length;l<r;l+=1)if(JSON.parse($(".continents-list .single-continent").eq(l).find("> a").attr("data-country-codes")).includes(e.response_data.country_code)){$(".continents-list .single-continent").addClass("hide"),$(".continents-list .single-continent").eq(l).addClass("open-item");for(var c=0,d=$(".single-continent.open-item .countries-list li").length;c<d;c+=1)if($(".single-continent.open-item .countries-list li").eq(c).find("> a").attr("data-country-code")==e.response_data.country_code){$(".continents-list .single-continent").eq(l).find(".country-list-parent").addClass("hide"),$('.countries-list a[data-country-code="'+e.response_data.country_code+'"]').closest(".country-list-parent").addClass("open-item");var p=void 0;if(e.response_data.city&&(p=e.response_data.city),e.response_data.id&&e.response_data.source&&e.response_data.content?(a={initialLat:e.response_data.lat,initialLng:e.response_data.lng,initialZoom:s,filter_country:e.response_data.country_code,location_id_and_source_pairs:[[parseInt(e.response_data.id),e.response_data.source]],categories:$(".selectpicker.location-types").val(),campForZoomChange:!0,filter_city:p,location_content:e.response_data.content,center_by_average_coordinates:i},initMap(t,a)):(a={initialLat:e.response_data.lat,initialLng:e.response_data.lng,initialZoom:s,filter_country:e.response_data.country_code,location_id_and_source_pairs:[],categories:$(".selectpicker.location-types").val(),campForZoomChange:!0,filter_city:p,center_by_average_coordinates:i},initMap(t,a)),await m($('.countries-list a[data-country-code="'+e.response_data.country_code+'"]').parent().find(".locations-category-list"),e.response_data.country_code,$('.countries-list a[data-country-code="'+e.response_data.country_code+'"]')),"single-location"==e.response_data.response_type){$(".locations-category-list .category-toggle-button").removeClass("hide"),$(".locations-category-list .locations-list .single-location").removeClass("hide"),$(".picker-and-map .picker-value span").html(1);var u=$('.locations-list .toggle-location-tile[data-location-id="'+e.response_data.id+'"][data-location-source="'+e.response_data.source+'"]');u.closest(".locations-category-list").find(".category-toggle-button").addClass("hide"),u.closest(".locations-category-list").find(".locations-list .single-location").addClass("hide"),u.closest(".single-location").removeClass("hide"),u.closest(".locations-list").parent().find(".category-toggle-button").removeClass("hide")}else if("city"==e.response_data.response_type){$(".locations-category-list .category-toggle-button").removeClass("hide"),$(".locations-category-list .locations-list .single-location").removeClass("hide");var g=$('.locations-list .toggle-location-tile[data-city="'+e.response_data.city+'"]');if(g.length){$(".picker-and-map .picker-value span").html(g.length),$(".locations-category-list .category-toggle-button").addClass("hide"),$(".locations-category-list .locations-list .single-location").addClass("hide");for(l=0,r=g.length;l<r;l+=1)g.eq(l).closest(".single-location").removeClass("hide"),g.eq(l).closest(".locations-list").parent().find(".category-toggle-button").removeClass("hide")}$(".picker-label .go-back-to-countries").addClass("hide"),$(".picker-label").append('<a href="javascript:void(0);" class="go-back-to-country"><img src="/assets/uploads/back-map-arrow.svg" alt="Red left arrow" class="margin-right-5 inline-block"> <span class="inline-block">'+e.response_data.city+"</span></a>"),$(".picker-label .go-back-to-country").click(function(){$(this).remove(),$(".picker-label .go-back-to-countries").removeClass("hide"),$(".picker-value span").html($('.countries-list a[data-country-code="'+e.response_data.country_code+'"]').parent().find(".locations-list .single-location").length),$('.countries-list a[data-country-code="'+e.response_data.country_code+'"]').parent().find(".locations-list .single-location").removeClass("hide")})}$(".locations-list .single-location").removeClass("toggled"),$(".results-list").scrollTop(0),e.response_data.id&&e.response_data.source&&($('.locations-list .single-location a[data-location-id="'+e.response_data.id+'"][data-location-source="'+e.response_data.source+'"]').closest(".single-location").addClass("toggled"),$(".results-list").scrollTop($('.locations-list .single-location a[data-location-id="'+e.response_data.id+'"][data-location-source="'+e.response_data.source+'"]').closest(".single-location").position().top-15));break}break}}}}),$(document).on("keyup",function(e){if(console.log("SEARCH"),$(e.target).is(".locations-splitted-by-category .bs-searchbox .form-control")&&($(".locations-splitted-by-category .dropdown-menu .active").removeClass("selected active"),13==e.which)){e.preventDefault();var a=$("select.location-types").val();a.includes("category-5")&&!a.includes("category-1")&&a.push("category-1");var i=$(".locations-splitted-by-category .bs-searchbox .form-control").val().trim();if(""!=i){console.log(i,"searchKeyword"),projectData.events.fireGoogleAnalyticsEvent("Map","Search",i);for(var o="",n=[],l=0,r=t.length;l<r;l+=1)(null!=t[l].name&&null!=t[l].name&&t[l].name.toLowerCase().includes(i.toLowerCase())||null!=t[l].city&&null!=t[l].city&&t[l].city.toLowerCase().includes(i.toLowerCase())||null!=t[l].country_name&&null!=t[l].country_name&&t[l].country_name.toLowerCase().includes(i.toLowerCase()))&&a.includes(t[l].category)&&(o+=v(t[l].avatar_url,t[l].name,t[l].address,t[l].is_partner,t[l].city,t[l].phone,t[l].website,t[l].top_dentist_month,t[l].avg_rating,t[l].ratings,t[l].trp_public_profile_link,t[l].country_name,t[l].id,t[l].source,t[l].lat,t[l].lng),n.push([t[l].id,t[l].source]));""!=o?($(".continents-list, .results-nav").addClass("hide"),$(".custom-search-list").html("<ul>"+o+s+"</ul>").removeClass("hide"),$(".picker-and-map .picker-value").html('<span class="lato-black">'+n.length+"</span> Results"),initMap(t,{location_id_and_source_pairs:n,center_by_average_coordinates:!0,type:"custom-search"})):($(".continents-list, .results-nav").addClass("hide"),$(".picker-and-map .picker-value").html('<span class="lato-black">0</span> Results'),$(".custom-search-list").html('<div class="padding-top-30 padding-left-20 padding-right-20 text-center fs-20 lato-bold">No locations found for this search keyword.</div>').removeClass("hide")),$(".locations-splitted-by-category .filter-option-inner-inner .custom-label").remove(),$(".locations-splitted-by-category .filter-option-inner-inner").addClass("fs-0").append('<div class="custom-label color-black fs-16">'+i+"</div>"),$(".picker-and-map .picker-label").html('<a href="javascript:void(0);" class="go-back-to-continents remove-custom-search-list"><img src="/assets/uploads/back-map-arrow.svg" alt="Red left arrow" class="margin-right-5 inline-block"/> <span class="inline-block">Back to list</span></a>'),$(".go-back-to-continents.remove-custom-search-list").click(function(){$(".custom-search-list").addClass("hide"),$(".continents-list, .results-nav").removeClass("hide"),$(".locations-splitted-by-category .filter-option-inner-inner").removeClass("fs-0").find(".custom-label").remove()}),$(".locations-splitted-by-category .bootstrap-select").removeClass("open")}}}),$(".selectpicker.locations").on("change",function(){var e=$(this).val().trim();if($(this).find("option:selected").hasClass("option-type"))$.event.trigger({type:"showLocationInList",time:new Date,response_data:{country_code:$(this).find("option:selected").attr("data-country-code"),id:$(this).find("option:selected").attr("data-id"),source:e,zoom:15,lat:$(this).find("option:selected").attr("data-lat"),lng:$(this).find("option:selected").attr("data-lng"),disallowAlreadyLoaded:!0,content:'<div class="map-infowindow"><button>'+$(this).find("option:selected").html().trim()+"</button></div>",response_type:"single-location"}});else if($(this).find("option:selected").hasClass("city-type")){var t={country_code:$(this).find("option:selected").attr("data-country-code"),city:$(this).find("option:selected").attr("data-city"),zoom:7,disallowAlreadyLoaded:!0,center_by_average_coordinates:!0,response_type:"city"};$.event.trigger({type:"showLocationInList",time:new Date,response_data:t})}else if($(this).find("option:selected").hasClass("country-type")){t={country_code:$(this).find("option:selected").attr("data-country-code"),zoom:5,disallowAlreadyLoaded:!0};null!=$(this).find("option:selected").attr("data-centroid-lat")&&(t.lat=$(this).find("option:selected").attr("data-centroid-lat")),null!=$(this).find("option:selected").attr("data-centroid-lng")&&(t.lng=$(this).find("option:selected").attr("data-centroid-lng")),$.event.trigger({type:"showLocationInList",time:new Date,response_data:t})}}),$(".locations-splitted-by-category .bs-searchbox input").on("change keyup focusout paste",function(){""!=$(this).val().trim()?$(this).closest(".dropdown-menu").find(".inner").show():$(this).closest(".dropdown-menu").find(".inner").hide()}),$(".continents-list > ul > li > a").click(async function(){projectData.events.fireGoogleAnalyticsEvent("Map","Continent",$(this).find(".element-name").html()),$(".continents-list > ul > li").addClass("hide"),$(this).closest("li").addClass("open-item"),$(".results-list .shown").removeClass("shown"),$(".results-list .countries-nav").addClass("shown"),$(".dentacoin-stats-category-label span").html("in "+$(this).find(".element-name").html()),$(".locations-category-list .locations-list .single-location.hide").length&&$(".locations-category-list .locations-list .single-location").removeClass("hide"),$(".continents-list .single-continent .country-list-parent.hide").length&&$(".continents-list .single-continent .country-list-parent.hide").removeClass("hide"),$(".continents-list .single-continent .country-list-parent.open-item").length&&$(".continents-list .single-continent .country-list-parent.open-item").removeClass("open-item"),$(".picker-and-map .picker-label").html('<a href="javascript:void(0);" class="go-back-to-continents"><img src="/assets/uploads/back-map-arrow.svg" alt="Red left arrow" class="margin-right-5 inline-block"/> <span class="inline-block">'+$(this).find(".element-name").html().trim()).attr("data-last-continent",$(this).find(".element-name").html().trim()+"</span></a>"),$(".results-list").scrollTop(0),a={filter_country:JSON.parse($(".single-continent.open-item > a").attr("data-country-codes")),location_id_and_source_pairs:[],categories:$(".selectpicker.location-types").val(),campForZoomChange:!0,initialLat:void 0,initialLng:void 0,initialZoom:void 0},initMap(t,a),h($(this).attr("data-country-codes"))}),$(document).on("click",".go-back-to-continents",function(){$(".continents-list > ul > li").removeClass("hide open-item"),$(".results-list .shown").removeClass("shown"),$(".results-list .continents-nav").addClass("shown"),$(".dentacoin-stats-category-label span").html("Worldwide"),$(".picker-and-map .picker-label").html("Worldwide"),$(".results-list").scrollTop(0),a={categories:$(".selectpicker.location-types").val(),filter_country:void 0,location_id_and_source_pairs:[],campForZoomChange:void 0,initialLat:void 0,initialLng:void 0,initialZoom:void 0},initMap(t,a),""!=$(".picker-and-map .picker-value").attr("data-worldwide")&&$(".picker-and-map .picker-value").html('<span class="lato-black">'+$(".picker-and-map .picker-value").attr("data-worldwide")+"</span> Results"),$(".changeable-stats .partners").length&&$(".changeable-stats .partners span").html($(".changeable-stats .partners").attr("data-worldwide")),$(".changeable-stats .non-partners").length&&$(".changeable-stats .non-partners span").html($(".changeable-stats .non-partners").attr("data-worldwide")),$(".changeable-stats .users").length&&$(".changeable-stats .users span").html($(".changeable-stats .users").attr("data-worldwide"))}),$('.right-side-filters input[type="checkbox"]').on("change",function(){var e=$(this);switch(e.attr("id")){case"category-1":e.is(":checked")?(projectData.events.fireGoogleAnalyticsEvent("Map","Check type filter",e.attr("data-name")),$('select.location-types option[value="'+e.attr("id")+'"]').prop("selected",!0)):(projectData.events.fireGoogleAnalyticsEvent("Map","Uncheck type filter",e.attr("data-name")),$('select.location-types option[value="'+e.attr("id")+'"]').prop("selected",!1));var t=$(".selectpicker.location-types").val();t.includes("category-5")&&!t.includes("category-1")&&t.push("category-1"),f(t),$(".selectpicker.location-types").selectpicker("refresh");break;case"category-2":case"category-3":case"category-4":case"category-5":e.is(":checked")?(projectData.events.fireGoogleAnalyticsEvent("Map","Check type filter",e.attr("data-name")),$('select.location-types option[value="'+e.attr("id")+'"]').prop("selected",!0)):(projectData.events.fireGoogleAnalyticsEvent("Map","Uncheck type filter",e.attr("data-name")),$('select.location-types option[value="'+e.attr("id")+'"]').prop("selected",!1)),f($(".selectpicker.location-types").val()),$(".selectpicker.location-types").selectpicker("refresh")}}),$(".countries-list > li > a").click(async function(){var e=$(this);e.parent().find(".locations-category-list").html(""),projectData.events.fireGoogleAnalyticsEvent("Map","Country",e.find(".element-name").html().trim()),a={initialLat:e.attr("data-country-centroid-lat"),initialLng:e.attr("data-country-centroid-lng"),initialZoom:4,filter_country:$(this).attr("data-country-code"),categories:$(".selectpicker.location-types").val(),campForZoomChange:!0,location_id_and_source_pairs:[],center_by_average_coordinates:!0},initMap(t,a),m(e.parent().find(".locations-category-list"),$(this).attr("data-country-code"),e)}),$(document).on("click",".single-location",function(){for(var e=$(this).find(".toggle-location-tile"),s=0,i=$(".toggle-location-tile").length;s<i;s+=1)$(".toggle-location-tile").eq(s).is(e)||$(".toggle-location-tile").eq(s).closest(".single-location").removeClass("toggled");$(this).toggleClass("toggled"),$(this).hasClass("toggled")?(projectData.events.fireGoogleAnalyticsEvent("Map",$(this).closest(".category-label").attr("data-name"),e.attr("data-name").trim()),a={initialLat:e.attr("data-lat"),initialLng:e.attr("data-lng"),initialZoom:15,filter_country:void 0,location_id_and_source_pairs:[[parseInt(e.attr("data-location-id")),e.attr("data-location-source")]],categories:$(".selectpicker.location-types").val(),campForZoomChange:!0,location_content:'<div class="map-infowindow"><button>'+e.attr("data-name")+"</button></div>"},initMap(t,a)):(a={initialLat:$(".country-list-parent.open-item > a").attr("data-country-centroid-lat"),initialLng:$(".country-list-parent.open-item > a").attr("data-country-centroid-lng"),initialZoom:4,filter_country:$(".country-list-parent.open-item > a").attr("data-country-code"),location_id_and_source_pairs:[],categories:$(".selectpicker.location-types").val(),campForZoomChange:!0,location_content:'<div class="map-infowindow"><button>'+e.attr("data-name")+"</button></div>",center_by_average_coordinates:!0},initMap(t,a))}),$(document).on("click",".go-back-to-countries",function(){if($(".locations-category-list .category-toggle-button").length&&$(".locations-category-list .category-toggle-button.hide").removeClass("hide"),$(".locations-category-list .locations-list .single-location.hide").length&&$(".locations-category-list .locations-list .single-location").removeClass("hide"),$(".selectpicker.locations option").eq(0).prop("selected",!0),$(".selectpicker.locations").selectpicker("refresh"),null==$(".picker-and-map .picker-label").attr("data-last-continent")||$(".single-continent.open-item > a .element-name").html()!=$(".picker-and-map .picker-label").attr("data-last-continent")){var e=$(".single-continent.open-item > a .element-name").html();console.log(e,"set continent name"),$(".dentacoin-stats-category-label span").html("in "+e),$(".picker-and-map .picker-label").html('<a href="javascript:void(0);" class="go-back-to-continents"><img src="/assets/uploads/back-map-arrow.svg" alt="Red left arrow" class="margin-right-5 inline-block"/> <span class="inline-block">'+e+"</span></a>"),$(".single-continent.open-item > a .element-name").attr("data-last-continent",e),h($(".single-continent.open-item > a").attr("data-country-codes"))}else $(".dentacoin-stats-category-label span").html($(".picker-and-map .picker-label").attr("data-last-continent")),$(".picker-and-map .picker-label").html('<a href="javascript:void(0);" class="go-back-to-continents"><img src="/assets/uploads/back-map-arrow.svg" alt="Red left arrow" class="margin-right-5 inline-block"/> <span class="inline-block">'+$(".picker-and-map .picker-label").attr("data-last-continent")+"</span></a>");""!=$(".picker-and-map .picker-value").attr("data-last-continent")&&$(".picker-and-map .picker-value").html('<span class="lato-black">'+$(".picker-and-map .picker-value").attr("data-last-continent")+"</span> Results"),a={initialLat:void 0,initialLng:void 0,initialZoom:void 0,filter_country:JSON.parse($(".single-continent.open-item > a").attr("data-country-codes")),location_id_and_source_pairs:[],categories:$(".selectpicker.location-types").val(),campForZoomChange:!0},initMap(t,a),$(".results-list .shown").removeClass("shown"),$(".results-list .countries-nav").addClass("shown"),$(".locations-category-list").html(""),$(".results-list").scrollTop(0),$(".countries-list .country-list-parent").removeClass("hide open-item"),$(".changeable-stats .partners").length&&$(".changeable-stats .partners span").html($(".changeable-stats .partners").attr("data-last-continent")),$(".changeable-stats .non-partners").length&&$(".changeable-stats .non-partners span").html($(".changeable-stats .non-partners").attr("data-last-continent")),$(".changeable-stats .users").length&&$(".changeable-stats .users span").html($(".changeable-stats .users").attr("data-last-continent"))}),b()}},showStickyHomepageNav(){$(".homepage-sticky-nav").length&&$(".homepage-sticky-nav").fadeIn(500)},hideStickyHomepageNav(){$(".homepage-sticky-nav").length&&$(".homepage-sticky-nav").remove()},showStickySubpagesNav(){$(".subpages-sticky-nav").length||($("body").append('<div class="subpages-sticky-nav text-center fs-0"><a href="javascript:void(0);" data-type="users" class="inline-block"><span class="element-icon inline-block"></span><span class="inline-block padding-left-10 fs-24 fs-xs-20 padding-left-xs-0 lato-bold label-content">USERS</span></a><a href="javascript:void(0);" data-type="dentists" class="inline-block"><span class="element-icon inline-block"></span><span class="inline-block padding-left-10 fs-24 fs-xs-20 padding-left-xs-0 lato-bold label-content">DENTISTS</span></a><a href="javascript:void(0);" data-type="traders" class="inline-block"><span class="element-icon inline-block"></span><span class="inline-block padding-left-10 fs-24 fs-xs-20 padding-left-xs-0 lato-bold label-content">TRADERS</span></a></div>'),location.href.indexOf("users")>=0?$('.subpages-sticky-nav [data-type="users"]').addClass("active"):location.href.indexOf("dentists")>=0?$('.subpages-sticky-nav [data-type="dentists"]').addClass("active"):location.href.indexOf("traders")>=0&&$('.subpages-sticky-nav [data-type="traders"]').addClass("active"),$('.subpages-sticky-nav [data-type="users"]').click(function(){var e=$(".subpages-sticky-nav a.active").attr("data-type");switch($(".subpages-sticky-nav a").removeClass("active"),$(this).addClass("active"),e){case"dentists":projectData.general_logic.data.slideOutDentistsContent(async function(){projectData.general_logic.data.showLoader();var e=await projectData.requests.takeHomepageData({type:"users"});e.success&&(projectData.general_logic.data.hideLoader(),projectData.general_logic.data.slideInUsersContent(e.data.usersPageData))});break;case"traders":projectData.general_logic.data.slideOutTradersContent(async function(){projectData.general_logic.data.showLoader();var e=await projectData.requests.takeHomepageData({type:"users"});e.success&&(projectData.general_logic.data.hideLoader(),projectData.general_logic.data.slideInUsersContent(e.data.usersPageData))})}}),$('.subpages-sticky-nav [data-type="dentists"]').click(function(){var e=$(".subpages-sticky-nav a.active").attr("data-type");switch($(".subpages-sticky-nav a").removeClass("active"),$(this).addClass("active"),e){case"users":projectData.general_logic.data.slideOutUsersContent(async function(){projectData.general_logic.data.showLoader();var e=await projectData.requests.takeHomepageData({type:"dentists"});e.success&&(projectData.general_logic.data.hideLoader(),projectData.general_logic.data.slideInDentistsContent(e.data.dentistsPageData))});break;case"traders":projectData.general_logic.data.slideOutTradersContent(async function(){projectData.general_logic.data.showLoader();var e=await projectData.requests.takeHomepageData({type:"dentists"});e.success&&(projectData.general_logic.data.hideLoader(),projectData.general_logic.data.slideInDentistsContent(e.data.dentistsPageData))})}}),$('.subpages-sticky-nav [data-type="traders"]').click(function(){var e=$(".subpages-sticky-nav a.active").attr("data-type");switch($(".subpages-sticky-nav a").removeClass("active"),$(this).addClass("active"),e){case"users":projectData.general_logic.data.slideOutUsersContent(async function(){var e=await projectData.requests.takeHomepageData({type:"traders"});e.success&&projectData.general_logic.data.slideInTradersContent(e.data.tradersPageData)});break;case"dentists":projectData.general_logic.data.slideOutDentistsContent(async function(){var e=await projectData.requests.takeHomepageData({type:"traders"});e.success&&projectData.general_logic.data.slideInTradersContent(e.data.tradersPageData)})}}),$(".subpages-sticky-nav").fadeIn(500))},hideStickySubpagesNav:function(){console.log($(".subpages-sticky-nav").length,"hideStickySubpagesNav"),$(".subpages-sticky-nav").length&&$(".subpages-sticky-nav").remove()},slideInUsersContent:function(e){window.removeEventListener("popstate",projectData.general_logic.data.handlePushStateRedirects),window.addEventListener("popstate",projectData.general_logic.data.handlePushStateRedirects),window.scrollTo(0,0),history.pushState({data:"users"},"",HOME_URL+"/users"),$(".hidden-users-page-content").css({display:"block"}).html(e).animate({left:"0",opacity:1},750,function(){$(".hide-on-users-category-selected").addClass("hide"),$(".hidden-users-page-content").addClass("position-static"),projectData.pages.data.users()})},slideOutUsersContent:function(e){window.scrollTo(0,0),$(".hide-on-users-category-selected").removeClass("hide"),$(".hidden-users-page-content").removeClass("position-static").animate({left:"-100%",opacity:0},1e3,function(){$(".hidden-users-page-content").hide().html(""),e()})},slideInDentistsContent:function(e){window.removeEventListener("popstate",projectData.general_logic.data.handlePushStateRedirects),window.addEventListener("popstate",projectData.general_logic.data.handlePushStateRedirects),window.scrollTo(0,0),history.pushState({data:"dentists"},"",HOME_URL+"/dentists"),$(".hidden-dentists-page-content").css({display:"block"}).html(e).animate({top:$("header").outerHeight(),opacity:1},750,function(){$(".hide-on-users-category-selected").addClass("hide"),$(".hidden-dentists-page-content").addClass("position-static"),projectData.pages.data.dentists()})},slideOutDentistsContent:function(e){window.scrollTo(0,0),$(".hide-on-users-category-selected").removeClass("hide"),$(".hidden-dentists-page-content").removeClass("position-static").animate({top:$(".hidden-dentists-page-content").height()+"px",opacity:0},750,function(){$(".hidden-dentists-page-content").hide().html(""),e()})},slideInTradersContent:function(e){window.removeEventListener("popstate",projectData.general_logic.data.handlePushStateRedirects),window.addEventListener("popstate",projectData.general_logic.data.handlePushStateRedirects),window.scrollTo(0,0),history.pushState({data:"traders"},"",HOME_URL+"/traders"),$(".hidden-traders-page-content").css({display:"block"}).html(e).animate({right:"0",opacity:1},750,function(){$(".hide-on-users-category-selected").addClass("hide"),$(".hidden-traders-page-content").addClass("position-static"),projectData.pages.data.traders()})},slideOutTradersContent:function(e){window.scrollTo(0,0),$(".hide-on-users-category-selected").removeClass("hide"),$(".hidden-traders-page-content").removeClass("position-static").animate({right:"-100%",opacity:0},750,function(){$(".hidden-traders-page-content").hide().html(""),e()})}}},requests:{takeHomepageData:async function(e){var t={type:"POST",url:HOME_URL+"/take-homepage-data",dataType:"json",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}};return null!=e&&(t.data=e),await $.ajax(t)},getMapHtml:async function(){return await $.ajax({type:"POST",url:HOME_URL+"/get-map-html",dataType:"json",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}})},getMapData:async function(e){return await $.ajax({type:"POST",url:HOME_URL+"/get-map-data",dataType:"json",data:e,headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}})},getLabsSuppliersAndIndustryPartners:async function(e){return await $.ajax({type:"POST",url:HOME_URL+"/get-labs-suppliers-and-industry-partners",dataType:"json",data:e,headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}})}},events:{eventTrackers:function(){$(document).on("click",".company-intro-gtag-event",function(){projectData.events.fireGoogleAnalyticsEvent("Assets","Download","Intro")}),$(document).on("click",".factsheet-gtag-event",function(){projectData.events.fireGoogleAnalyticsEvent("Assets","Download","EN Factsheet")}),$(document).on("click",".factsheet-de-gtag-event",function(){projectData.events.fireGoogleAnalyticsEvent("Assets","Download","DE Factsheet")}),$(document).on("click",".dentist-page-see-how-it-works-gtag-event",function(){projectData.events.fireGoogleAnalyticsEvent("Dentist page","Click","How it works")}),$(document).on("click",".traders-page-exchange-click-gtag-event",function(){projectData.events.fireGoogleAnalyticsEvent("Exchange","Main",$(this).closest(".single-exchange").attr("data-exchange-name"))}),$(document).on("click",".traders-page-exchange-pair-click-gtag-event",function(){projectData.events.fireGoogleAnalyticsEvent("Exchange","Pair",$(this).closest(".single-exchange").attr("data-exchange-name"))}),$(document).on("click",".traders-page-dentacoin-intro-click-gtag-event",function(){projectData.events.fireGoogleAnalyticsEvent("Assets","Download","Intro")}),$(document).on("click",".traders-page-whitepaper-click-gtag-event",function(){projectData.events.fireGoogleAnalyticsEvent("Assets","Download","Whitepaper")}),$(document).on("click",".traders-page-cmc-click-gtag-event",function(){projectData.events.fireGoogleAnalyticsEvent("Link","Click","CMC")})},fireGoogleAnalyticsEvent:function(e,t,a,s){var i={event_action:t,event_category:e,event_label:a};null!=s&&(i.value=s),"undefined"!=typeof gtag&&gtag("event",a,i)}}};function drawHeaderToFirstSectionLine(){$("line.first").attr("x1",$("header .first-dot").offset().left),$("line.first").attr("y1",$("header .first-dot").offset().top),$("line.first").attr("x2",$(".second-dot").offset().left),$("line.first").attr("y2",$(".second-dot").offset().top+$(".second-dot").height()-1),$("line.second").attr("x1",$(".second-dot").offset().left),$("line.second").attr("y1",$(".second-dot").offset().top+$(".second-dot").height()-1),$("line.second").attr("x2",$(".third-dot").offset().left),$("line.second").attr("y2",$(".third-dot").offset().top+$(".third-dot").height()-1)}function drawNavToBottomSectionLine(){$("line.third").attr("x1",$(".nav-to-bottom-first-dot").offset().left),$("line.third").attr("y1",$(".nav-to-bottom-first-dot").offset().top+$(".nav-to-bottom-first-dot").height()),$("line.third").attr("x2",$(".nav-to-bottom-second-dot").offset().left),$("line.third").attr("y2",$(".nav-to-bottom-second-dot").offset().top+$(".nav-to-bottom-second-dot").height()),$("line.fourth").attr("x1",$(".nav-to-bottom-second-dot").offset().left),$("line.fourth").attr("y1",$(".nav-to-bottom-second-dot").offset().top+$(".nav-to-bottom-second-dot").height()),$("line.fourth").attr("x2",$(".nav-to-bottom-third-dot").offset().left),$("line.fourth").attr("y2",$(".nav-to-bottom-third-dot").offset().top),$("line.fifth").attr("x1",$(".nav-to-bottom-third-dot").offset().left),$("line.fifth").attr("y1",$(".nav-to-bottom-third-dot").offset().top),$("line.fifth").attr("x2",$(".nav-to-bottom-fourth-dot").offset().left),$("line.fifth").attr("y2",$(".nav-to-bottom-fourth-dot").offset().top)}function initListingPageLine(){$("line.first").attr("x1",$(".list .single .first-dot").offset().left+$(".list .single .first-dot").width()/2),$("line.first").attr("x2",$(".list .single .last-dot").offset().left+$(".list .single .last-dot").width()/2),$("line.first").attr("y1",$(".list .single .first-dot").offset().top),$("line.first").attr("y2",$(".list .single .last-dot").offset().top)}function styleUploadButton(e,t){if($(".upload-file.module").length)for(var a=0,s=$(".upload-file.module").length;a<s;a+=1){var i=$(".upload-file.module").eq(a).find(".upload-input");$(".upload-file.module").eq(a).append('<button type="button"><label for="'+i.attr("name")+'" class="'+t+'">'+$(".upload-file.module").eq(a).attr("data-label")+"</label></button>"),i.on("change",function(){e(this)})}}function hidePopupOnBackdropClick(){$(document).on("click",".bootbox",function(){var e=event.target.className;-1===(e=e.replace(/ /g,".")).indexOf("christmas-calendar-task")&&e&&!$("."+e).parents(".modal-dialog").length&&($(".bootbox.login-signin-popup").length&&$(".hidden-login-form").html(hidden_popup_content),bootbox.hideAll())})}function initCaptchaRefreshEvent(){$(".refresh-captcha").length>0&&$(".refresh-captcha").click(function(){$.ajax({type:"GET",url:"/refresh-captcha",dataType:"json",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){$(".captcha-container span").html(e.captcha)}})})}function customErrorHandle(e,t){e.append('<div class="error-handle">'+t+"</div>")}function readURL(e,t,a,s,i){if(e.files&&e.files[0]){var o=e.files[0].name;if(t<basic.bytesToMegabytes(e.files[0].size))return null!=i&&i(),$(e).closest(".upload-btn-parent").append('<div class="error-handle">The file you selected is large. Max size: '+t+"MB.</div>"),!1;if(-1===jQuery.inArray(o.split(".").pop().toLowerCase(),a)){null!=i&&i();for(var n="",l=!0,r=0,c=a.length;r<c;r+=1)l?(l=!1,n+=a[r]):n+=", "+a[r];return $(e).closest(".upload-btn-parent").append('<div class="error-handle">Please select file in '+n+" format.</div>"),!1}if(null!=s){var d=new FileReader;d.onload=function(e){s(e,o)},d.readAsDataURL(e.files[0])}}}async function checkCaptcha(e){return await $.ajax({type:"POST",url:"/check-captcha",dataType:"json",data:{captcha:e},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}})}function bindGoogleAlikeButtonsEvents(){$("body").on("click",".custom-google-label-style label",function(){$(this).addClass("active-label"),"true"==$(".custom-google-label-style").attr("data-input-colorful-border")&&$(this).parent().find("input").addClass("blue-green-border")}),$("body").on("keyup change focusout",".custom-google-label-style input",function(){$(this).val().trim().length?($(this).closest(".custom-google-label-style").find("label").addClass("active-label"),"true"==$(this).closest(".custom-google-label-style").attr("data-input-colorful-border")&&$(this).addClass("blue-green-border")):($(this).closest(".custom-google-label-style").find("label").removeClass("active-label"),"true"==$(this).closest(".custom-google-label-style").attr("data-input-colorful-border")&&$(this).removeClass("blue-green-border"))})}projectData.general_logic.data.loadDeferResources(),$("body").hasClass("logged-in")?(projectData.pages.logged_in(),projectData.general_logic.logged_in()):(projectData.pages.not_logged_in(),projectData.general_logic.not_logged_in()),projectData.events.eventTrackers(),$(".newsletter-register").length&&(basic.initCustomCheckboxes(".newsletter-register"),$(".newsletter-register form").on("submit",function(e){e.preventDefault();var t=$(this),a=!1;t.find(".error-handle").remove(),basic.validateEmail(t.find('input[type="email"]').val().trim())||(a=!0,customErrorHandle(t.find('input[type="email"]').closest(".newsletter-field"),t.find('input[type="email"]').closest(".newsletter-field").attr("data-valid-message"))),t.find("#newsletter-privacy-policy").is(":checked")||(a=!0,customErrorHandle(t.find("#newsletter-privacy-policy").closest(".newsletter-field"),t.find("#newsletter-privacy-policy").closest(".newsletter-field").attr("data-valid-message"))),a||(projectData.events.fireGoogleAnalyticsEvent("Subscribe","Subscribe","Newsletter"),fbq("track","Newsletter"),this.submit(),$(".newsletter-register form .custom-checkbox").html(""),$(".newsletter-register form #newsletter-privacy-policy").prop("checked",!1),t.find('input[type="email"]').val(""),$(".newsletter-register .form-container").append('<div class="alert alert-success fs-16 margin-top-10">Thank you for signing up.</div>'))})),hidePopupOnBackdropClick(),initCaptchaRefreshEvent(),bindGoogleAlikeButtonsEvents(),$(".bottom-fixed-promo-banner").length&&$(".bottom-fixed-promo-banner .close-banner").click(function(){$("footer").removeClass("extra-bottom-padding"),$(".bottom-fixed-promo-banner").remove();var e=new Date,t=e.getTime();t+=72e5,e.setTime(t),document.cookie="hide-holiday-calendar-banner=1; expires="+e.toUTCString()+";domain=dentacoin.com;path=/;"});
>>>>>>> master
