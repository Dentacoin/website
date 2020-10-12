if (typeof jQuery == 'undefined') {
    // no jquery installed
    console.error('Dentacoin login gateway requires the usage of jQuery.');
} else {
    var fireAjax = true;

    var loadedSocialLibs = false;
    var loadedAddressSuggesterLib = false;
    var loadedGoogleMapLib = false;
    var gateway_croppie_instance;
    var allowedImagesExtensions = ['png', 'jpg', 'jpeg'];
    var apiDomain = 'https://api.dentacoin.com';
    var environment = 'live';
    var dcnGateway = {
        dcnGatewayRequests: {
            getPlatformsData: async function(callback) {
                $.ajax({
                    type: 'GET',
                    url: 'https://dentacoin.com/info/platforms',
                    dataType: 'json',
                    success: function(response) {
                        callback(response);
                    },
                    error: function() {
                        console.error('Request to dentacoin.com currently not working.');
                    }
                });

                /*if (fireAjax) {
                    fireAjax = false;

                    var ajaxCall = await $.ajax({
                        type: 'GET',
                        url: 'https://dentacoin.com/info/platforms',
                        dataType: 'json'
                    });

                    fireAjax = true;
                    return ajaxCall;
                }*/
            },
            getGatewayHtml: async function(data, callback) {
                await $.ajax({
                    type: 'POST',
                    url: 'https://dentacoin.com/dentacoin-login-gateway',
                    dataType: 'json',
                    data: data,
                    success: function(response) {
                        callback(response);
                    },
                    error: function() {
                        dcnGateway.utils.showPopup('Something went wrong with logging in, please try again a bit later. If the problem still appears please contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.', 'alert');
                    }
                });

                /*if (fireAjax) {
                    fireAjax = false;

                    var ajaxCall = await $.ajax({
                        type: 'POST',
                        url: 'https://dentacoin.com/dentacoin-login-gateway',
                        dataType: 'json',
                        data: data
                    });

                    fireAjax = true;
                    return ajaxCall;
                }*/
            },
            getUserCountry: async function() {
                if (fireAjax) {
                    fireAjax = false;

                    var ajaxCall = await $.ajax({
                        type: 'POST',
                        url: 'https://dentacoin.com/get-country-code',
                        dataType: 'json'
                    });

                    fireAjax = true;
                    return ajaxCall;
                }
            },
            checkIfFreeEmail: async function(data) {
                if (fireAjax) {
                    fireAjax = false;

                    var ajaxCall = await $.ajax({
                        type: 'POST',
                        url: apiDomain + '/api/check-email',
                        dataType: 'json',
                        data: data
                    });

                    fireAjax = true;
                    return ajaxCall;
                }
            },
            claimEmail: async function(data) {
                if (fireAjax) {
                    fireAjax = false;

                    var ajaxCall = await $.ajax({
                        type: 'POST',
                        url: apiDomain + '/api/claim-email',
                        dataType: 'json',
                        data: data
                    });

                    fireAjax = true;
                    return ajaxCall;
                }
            },
            editUserData: async function(data, token) {
                if (fireAjax) {
                    fireAjax = false;

                    var ajaxCall = await $.ajax({
                        type: 'POST',
                        url: apiDomain + '/api/user/',
                        dataType: 'json',
                        data: data,
                        headers: {
                            'Authorization' : 'Bearer ' + token
                        }
                    });

                    fireAjax = true;
                    return ajaxCall;
                }
            },
            saveIncompleteRegistration: async function(data) {
                if (fireAjax) {
                    fireAjax = false;

                    var ajaxCall = await $.ajax({
                        type: 'POST',
                        url: apiDomain + '/api/incomplete-registration/',
                        dataType: 'json',
                        data: data
                    });

                    fireAjax = true;
                    return ajaxCall;
                }
            },
            checkDentistAccount: async function (email, password, platform) {
                if (fireAjax) {
                    fireAjax = false;
                    var data = {
                        email: email,
                        password: password,
                        platform: platform
                    };

                    if (environment == 'staging') {
                        data.staging = true;
                    }

                    var ajaxCall = await $.ajax({
                        type: 'POST',
                        url: 'https://dentacoin.com/check-dentist-account',
                        dataType: 'json',
                        data: data
                    });

                    fireAjax = true;
                    return ajaxCall;
                }
            },
            checkPracticeEmail: async function (email, practiseEmail) {
                if (fireAjax) {
                    fireAjax = false;

                    var url = 'https://api.dentacoin.com/api/check-practice-email';
                    if (environment == 'staging') {
                        url = 'https://dev-api.dentacoin.com/api/check-practice-email';
                    }

                    var ajaxCall = await $.ajax({
                        type: 'POST',
                        url: url,
                        dataType: 'json',
                        data: {
                            email: email,
                            clinic_email: practiseEmail
                        }
                    });

                    fireAjax = true;
                    return ajaxCall;
                }
            },
            validatePhone: async function (phone, country_code) {
                if (fireAjax) {
                    fireAjax = false;

                    var ajaxCall = await $.ajax({
                        type: 'POST',
                        url: apiDomain + '/api/phone/',
                        dataType: 'json',
                        data: {
                            phone: phone,
                            country_code: country_code
                        }
                    });

                    fireAjax = true;
                    return ajaxCall;
                }
            },
            dentistRegistration: async function (data) {
                if (fireAjax) {
                    fireAjax = false;

                    var ajaxCall = await $.ajax({
                        type: 'POST',
                        url: 'https://dentacoin.com/dentacoin-login-gateway/handle-dentist-register',
                        dataType: 'json',
                        data: data
                    });

                    fireAjax = true;
                    return ajaxCall;
                }
            },
            dentistLogin: async function (data) {
                if (fireAjax) {
                    fireAjax = false;

                    var ajaxCall = await $.ajax({
                        type: 'POST',
                        url: 'https://dentacoin.com/dentacoin-login-gateway/handle-dentist-login',
                        dataType: 'json',
                        data: data
                    });

                    fireAjax = true;
                    return ajaxCall;
                }
            },
            getAfterDentistRegistrationPopup: async function (data) {
                if (fireAjax) {
                    fireAjax = false;

                    var ajaxCall = await $.ajax({
                        type: 'POST',
                        url: 'https://dentacoin.com/dentacoin-login-gateway/get-after-dentist-registration-popup',
                        dataType: 'json',
                        data: data
                    });

                    fireAjax = true;
                    return ajaxCall;
                }
            },
            enrichProfile: async function (data) {
                if (fireAjax) {
                    fireAjax = false;

                    var ajaxCall = await $.ajax({
                        type: 'POST',
                        url: 'https://dentacoin.com/dentacoin-login-gateway/handle-enrich-profile',
                        dataType: 'json',
                        data: data
                    });

                    fireAjax = true;
                    return ajaxCall;
                }
            },
            createUserSession: async function (url, data) {
                if (fireAjax) {
                    fireAjax = false;

                    var ajaxCall = await $.ajax({
                        type: 'POST',
                        url: url,
                        dataType: 'json',
                        data: data,
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    });

                    fireAjax = true;
                    return ajaxCall;
                }
            }
        },
        utils: {
            hasNumber: function(myString) {
                return /\d/.test(myString);
            },
            hasLowerCase: function(str) {
                return (/[a-z]/.test(str));
            },
            hasUpperCase: function(str) {
                return (/[A-Z]/.test(str));
            },
            validatePassword: function(password) {
                return password.trim().length >= 8 && password.trim().length <= 30 && dcnGateway.utils.hasLowerCase(password) && dcnGateway.utils.hasUpperCase(password) && dcnGateway.utils.hasNumber(password);
            },
            getGETParameters: function() {
                var prmstr = window.location.search.substr(1);
                return prmstr != null && prmstr != "" ? dcnGateway.utils.transformToAssocArray(prmstr) : {};
            },
            transformToAssocArray: function(prmstr) {
                var params = {};
                var prmarr = prmstr.split("&");
                for (var i = 0, len = prmarr.length; i < len; i+=1) {
                    var tmparr = prmarr[i].split("=");
                    params[tmparr[0]] = tmparr[1];
                }
                return params;
            },
            customErrorHandle: function(el, string) {
                el.append('<div class="error-handle">'+string+'</div>');
            },
            customSuccessHandle: function(el, string) {
                el.append('<div class="alert alert-success">'+string+'</div>');
            },
            fireGoogleAnalyticsEvent: function(category, action, label, value) {
                if (typeof(gtag) != 'undefined') {
                    var event_obj = {
                        'event_category': category,
                        'event_action' : action,
                        'event_label': label
                    };

                    if (value != undefined) {
                        event_obj.value = value;
                    }

                    gtag('event', label, event_obj);
                }
            },
            fireFacebookPixelEvent: function(label) {
                if (typeof(fbq) != 'undefined') {
                    fbq('track', label);
                }
            },
            validateUrl: function(url)   {
                var pattern = new RegExp(/*'^(https?:\\/\\/)?' +*/ // protocol
                    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
                    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
                return !!pattern.test(url);
            },
            validateEmail: function(email)   {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
            },
            showLoader: function(message) {
                if (message == undefined) {
                    message = 'Loading ...';
                }

                $('body').append('<div class="dentacoin-login-gateway-response-layer"><div class="dentacoin-login-gateway-response-layer-wrapper"><figure itemscope="" itemtype="http://schema.org/ImageObject"><img src="https://dentacoin.com/assets/images/loader.gif" alt="Loader"></figure><div class="dentacoin-login-gateway-response-message gateway-platform-color text-center dentacoin-login-gateway-fs-30">'+message+'</div></div></div>');
            },
            hideLoader: function() {
                $('.dentacoin-login-gateway-response-layer').hide();
            },
            showPopup: function(message, type, callback, data) {
                if (type == 'alert') {
                    var buttonHtml = '<button class="platform-button gateway-platform-background-color cancel-custom-popup">OK</button>';
                    if (data != undefined && hasOwnProperty.call(data, 'log_button')) {
                        buttonHtml = '<button class="platform-button gateway-platform-background-color cancel-custom-popup open-dentacoin-gateway patient-login">LOG IN</button>';
                    }

                    $('body').append('<div class="dentacoin-login-gateway-container"><div class="dentacoin-login-gateway-wrapper dcn-gateway-popup dentacoin-login-gateway-fs-18">'+message+'<div class="popup-buttons">'+buttonHtml+'</div></div></div>');

                    $('.cancel-custom-popup').click(function() {
                        $(this).closest('.dentacoin-login-gateway-container').remove();
                    });
                } else if (type == 'warning') {
                    $('body').append('<div class="dentacoin-login-gateway-container"><div class="dentacoin-login-gateway-wrapper dcn-gateway-popup dentacoin-login-gateway-fs-18">'+message+'<div class="popup-buttons"><button class="platform-button proceed-custom-popup green-button">YES</button><button class="platform-button cancel-custom-popup red-button">NO</button></div></div></div>');


                    $('.proceed-custom-popup').click(function() {
                        callback();
                        $(this).closest('.dentacoin-login-gateway-container').remove();
                    });

                    $('.cancel-custom-popup').click(function() {
                        $(this).closest('.dentacoin-login-gateway-container').remove();
                    });
                } else if (type == 'enrich-profile') {
                    $('body').addClass('dentacoin-login-gateway-overflow-hidden').append('<div class="dentacoin-login-gateway-container"><div class="dentacoin-login-gateway-wrapper enrich-profile">'+message+'</div></div>');

                    $('.cancel-custom-popup').click(function() {
                        $(this).closest('.dentacoin-login-gateway-container').remove();
                    });

                    $('form#enrich-profile').on('submit', async function(event) {
                        event.preventDefault();
                        var this_form = $(this);
                        this_form.find('.error-handle').remove();

                        if (this_form.find('#description').val().trim() == '') {
                            dcnGateway.utils.customErrorHandle(this_form.find('#description').closest('.form-row'), 'This field is required.');
                        } else {
                            var enrichProfileData = {
                                user: data.user,
                                description: this_form.find('#description').val().trim()
                            };

                            if (environment == 'staging') {
                                enrichProfileData.staging = true;
                            }

                            var enrichProfileResponse = await dcnGateway.dcnGatewayRequests.enrichProfile(enrichProfileData);
                            if (enrichProfileResponse.success) {
                                if (data.type == 'dentist') {
                                    dcnGateway.utils.fireGoogleAnalyticsEvent('DentistRegistration', 'ClickSave', 'DentDescr');
                                } else if (data.type == 'clinic') {
                                    dcnGateway.utils.fireGoogleAnalyticsEvent('DentistRegistration', 'ClickSave', 'ClinicDescr');
                                }

                                $('form#enrich-profile').addClass('padding-bottom-50').html('<div class="alert alert-success">'+enrichProfileResponse.data+'</div>')
                            } else if (enrichProfileResponse.error) {
                                dcnGateway.utils.hidePopup();
                                dcnGateway.utils.showPopup('Something went wrong, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.', 'alert');
                            } else {
                                dcnGateway.utils.hidePopup();
                                dcnGateway.utils.showPopup('Something went wrong, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.', 'alert');
                            }
                        }
                    });
                }
            },
            bytesToMegabytes: function(bytes) {
                return bytes / Math.pow(1024, 2);
            },
            readURL: function(input, megaBytesLimit, allowedImagesExtensions, callback, failedMaxSizeCallback, failedExtensionsCallback) {
                if (input.files && input.files[0]) {
                    var filename = input.files[0].name;

                    // check file size
                    if (megaBytesLimit < dcnGateway.utils.bytesToMegabytes(input.files[0].size)) {
                        if (failedMaxSizeCallback != undefined) {
                            failedMaxSizeCallback();
                        }
                        return false;
                    } else {
                        //check file extension
                        if (jQuery.inArray(filename.split('.').pop().toLowerCase(), allowedImagesExtensions) !== -1) {
                            if ($('.gateway-avatar.module .error-handle').length) {
                                $('.gateway-avatar.module .error-handle').remove();
                            }

                            if (callback != undefined) {
                                var reader = new FileReader();
                                reader.onload = function (e) {
                                    callback(e, filename);
                                };
                                reader.readAsDataURL(input.files[0]);
                            }
                        } else {
                            if (failedExtensionsCallback != undefined) {
                                failedExtensionsCallback();
                            }

                            /*var allowedExtensionsHtml = '';
                            var firstLoop = true;
                            for(var i = 0, len = allowedImagesExtensions.length; i < len; i+=1) {
                                if (firstLoop) {
                                    firstLoop = false;
                                    allowedExtensionsHtml += allowedImagesExtensions[i];
                                } else {
                                    allowedExtensionsHtml += ', ' + allowedImagesExtensions[i];
                                }
                            }

                            $(input).closest('.upload-btn-parent').append('<div class="error-handle task-error">'+$('.popup-body.translations').attr('data-translation-file-size-error')+allowedExtensionsHtml+' format.</div>');*/
                            return false;
                        }
                    }
                }
            },
            styleAvatarUploadButton: function() {
                if (jQuery('.upload-file.gateway-avatar').length) {
                    var inputs = document.querySelectorAll('.inputfile');
                    Array.prototype.forEach.call(inputs, function(input) {
                        var this_file_btn_parent = $(input).parent();
                        this_file_btn_parent.find('.btn-wrapper').append('<label for="custom-upload-avatar" role="button"><div class="inner"><i class="fa fa-plus" aria-hidden="true"></i><div class="inner-label">'+$('.popup-body.translations').attr('data-translation-add-profile-photo')+'</div></div></label>');

                        input.addEventListener('change', function(e) {
                            var this_input = $(this);
                            dcnGateway.utils.readURL(this, 2, allowedImagesExtensions, function(e, filename) {
                                if (filename != '' && filename != undefined) {
                                    $('.avatar-name').show().find('span').html(filename.slice(0, 20) + '...');
                                    $('.upload-label-btn').addClass('less-padding');
                                }

                                $('#gateway-cropper-container').addClass('width-and-height');
                                if (gateway_croppie_instance != undefined) {
                                    gateway_croppie_instance.croppie('destroy');
                                    $('#gateway-cropper-container').html('');
                                }

                                var croppieParams = {
                                    enableOrientation: true,
                                    enforceBoundary: false
                                };

                                if ($(window).width() < 768) {
                                    croppieParams.viewport = {
                                        width: 200,
                                        height: 200
                                    };
                                    croppieParams.boundary = {width: 200, height: 200};
                                } else {
                                    croppieParams.viewport = {
                                        width: 180,
                                        height: 180
                                    };
                                    croppieParams.boundary = {width: 180, height: 180};
                                }

                                gateway_croppie_instance = $('#gateway-cropper-container').croppie(croppieParams);

                                $('.destroy-croppie').unbind().click(function() {
                                    gateway_croppie_instance.croppie('destroy');
                                    $('#gateway-cropper-container').html('');
                                    $('#gateway-cropper-container').removeClass('width-and-height');
                                    $('.gateway-avatar.module .btn-wrapper').show();
                                    $('.avatar-name').hide();
                                    $('.dentist .form-register .step.fourth #custom-upload-avatar').val('');
                                });

                                $('.gateway-avatar.module .btn-wrapper').hide();

                                gateway_croppie_instance.croppie('bind', {
                                    url: e.target.result,
                                    zoom: 1
                                });

                                /*gateway_croppie_instance.croppie('bind', 'url').then(function(){
                                    gateway_croppie_instance.croppie('setZoom', 1);
                                });*/

                                $('#gateway-cropper-container').on('update.croppie', function(ev, cropData) {
                                    gateway_croppie_instance.croppie('result', {
                                        type: 'canvas',
                                        size: {width: 300, height: 300}
                                    }).then(function (src) {
                                        $('#hidden-image').val(src);
                                    });
                                });
                            }, function() {
                                this_input.val('');

                                $('.gateway-avatar.module').append('<div class="error-handle task-error">The file you selected is large. Max size: 2MB.</div>');
                            }, function() {
                                this_input.val('');

                                $('.gateway-avatar.module').append('<div class="error-handle task-error">Allowed file formats are only .png, .jpeg and .jpg.</div>');
                            });
                        });
                        // Firefox bug fix
                        input.addEventListener('focus', function(){ input.classList.add('has-focus'); });
                        input.addEventListener('blur', function(){ input.classList.remove('has-focus'); });
                    });
                }
            },
            cookies: {
                set: function(name, value) {
                    if(name == undefined){
                        name = "cookieLaw";
                    }
                    if(value == undefined){
                        value = 1;
                    }
                    var d = new Date();
                    d.setTime(d.getTime() + (100*24*60*60*1000));
                    var expires = "expires="+d.toUTCString();
                    document.cookie = name + "=" + value + "; " + expires + ";domain=.dentacoin.com;path=/;secure";
                },
                erase: function(name) {
                    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                },
                get: function(name) {
                    name = name + "=";
                    var ca = document.cookie.split(';');
                    for(var i=0; i<ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0)==' ') c = c.substring(1);
                        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
                    }
                    return "";
                }
            },
            initCustomCheckboxes: function() {
                for (var i = 0, len = $('.custom-checkbox-style').length; i < len; i+=1) {
                    if (!$('.custom-checkbox-style').eq(i).hasClass('already-custom-style')) {
                        $('.custom-checkbox-style').eq(i).prepend('<label for="'+$('.custom-checkbox-style').eq(i).find('input[type="checkbox"]').attr('id')+'" class="custom-checkbox"></label>');
                        $('.custom-checkbox-style').eq(i).addClass('already-custom-style');
                    }
                }

                $('.custom-checkbox-style .custom-checkbox-input').unbind('change').on('change', function() {
                    if ($(this).is(':checked')) {
                        $(this).closest('.custom-checkbox-style').find('.custom-checkbox').addClass('gateway-platform-background-color-important').html('✓');
                    } else {
                        $(this).closest('.custom-checkbox-style').find('.custom-checkbox').removeClass('gateway-platform-background-color-important').html('');
                    }

                    if ($(this).attr('data-radio-group') != undefined) {
                        for (var i = 0, len = $('[data-radio-group="'+$(this).attr('data-radio-group')+'"]').length; i < len; i+=1) {
                            if (!$(this).is($('[data-radio-group="'+$(this).attr('data-radio-group')+'"]').eq(i))) {
                                $('[data-radio-group="'+$(this).attr('data-radio-group')+'"]').eq(i).prop('checked', false);
                                $('[data-radio-group="'+$(this).attr('data-radio-group')+'"]').eq(i).closest('.custom-checkbox-style').find('.custom-checkbox').removeClass('gateway-platform-background-color-important').html('');
                            }
                        }
                    }
                });
            },
            hideGateway: function(removeEvents) {
                // remove popup
                $('.dentacoin-login-gateway-container').remove();
                $('body').removeClass('dentacoin-login-gateway-overflow-hidden');

                if (removeEvents != undefined && removeEvents == true) {
                    // reset the event listeners
                    $(document).off('civicCustomBtnClicked');
                    $(document).off('civicRead');
                    $(document).off('receivedFacebookToken');
                    $(document).off('facebookCustomBtnClicked');
                    $(document).off('cannotLoginBecauseOfMissingCookies');
                    $(document).off('noUserIdReceived');
                    $(document).off('noCoreDBApiConnection');
                    $(document).off('customCivicFbStopperTriggered');
                    $(document).off('registeredAccountMissingEmail');
                    $(document).off('patientProceedWithCreatingSession');
                    $(document).off('successfulFacebookPatientRegistration');
                    $(document).off('successfulFacebookPatientLogin');
                    $(document).off('successfulCivicPatientRegistration');
                    $(document).off('successfulCivicPatientLogin');
                    $(document).off('patientAuthErrorResponse');
                    $(document).off('dentistProceedWithCreatingSession');
                    $(document).off('noExternalLoginProviderConnection');
                    $(document).off('civicSipError');
                    $(document).off('getAfterDentistRegistrationPopupForDentist');
                    $(document).off('getAfterDentistRegistrationPopupForClinic');
                }
            },
            hidePopup: function() {
                // remove popup
                $('.dentacoin-login-gateway-container').remove();

                $('body').removeClass('dentacoin-login-gateway-overflow-hidden');
            }
        },
        init: async function(params) {
            var dentavoxCookie = dcnGateway.utils.cookies.get('first_test');
            var predefinedCountryId;
            if (dentavoxCookie != '') {
                predefinedCountryId = JSON.parse(decodeURIComponent(dentavoxCookie))['location'];
            }

            if ((typeof params !== 'object' && params === null) || (!hasOwnProperty.call(params, 'platform') || !hasOwnProperty.call(params, 'forgotten_password_link'))) {
                // false params
                console.error('False params passed to dentacoin login gateway.');
            } else {
                // check internet connection
                if (!navigator.onLine) {
                    console.error('Dentacoin login gateway requires internet connection.');
                    return false;
                }

                if (hasOwnProperty.call(params, 'environment') && params.environment == 'staging') {
                    apiDomain = 'https://dev-api.dentacoin.com';
                    environment = 'staging';
                }

                await dcnGateway.dcnGatewayRequests.getPlatformsData(async function(platformsData) {
                    var validPlatform = false;
                    var currentPlatformColor;
                    var currentPlatformDomain;

                    if (params.platform == 'urgent.dentavox' || params.platform == 'urgent.reviews') {
                        if (params.platform == 'urgent.dentavox') {
                            currentPlatformDomain = 'https://urgent.dentavox.dentacoin.com/';
                            params.platform = 'dentavox';
                        } else if (params.platform == 'urgent.reviews') {
                            currentPlatformDomain = 'https://urgent.reviews.dentacoin.com/';
                            params.platform = 'trusted-reviews';
                        }

                        for (var i = 0, len = platformsData.length; i < len; i+=1) {
                            if (platformsData[i].slug == 'dentavox') {
                                currentPlatformColor = platformsData[i].color;
                                break;
                            }
                        }
                        validPlatform = true;
                    } else {
                        for (var i = 0, len = platformsData.length; i < len; i+=1) {
                            if (platformsData[i].slug == params.platform) {
                                validPlatform = true;
                                currentPlatformColor = platformsData[i].color;
                                currentPlatformDomain = platformsData[i].link;
                                break;
                            }
                        }
                    }

                    // load platform styles
                    var platform_color_and_background = '<style class="platform-colors">.gateway-platform-fill{fill:'+currentPlatformColor+';}.gateway-platform-color{color:'+currentPlatformColor+';}.gateway-platform-color-important{color:'+currentPlatformColor+' !important;}.gateway-platform-background-color{background-color:'+currentPlatformColor+'}.gateway-platform-background-color-important{background-color:'+currentPlatformColor+' !important;}.gateway-platform-border-color{border-color:'+currentPlatformColor+';}.gateway-platform-border-color-important{border-color:'+currentPlatformColor+' !important;}.tooltip-label:after {border-top-color:'+currentPlatformColor+' !important;}</style>';
                    $('head').append(platform_color_and_background);

                    // load avatar cropper
                    $('head').append('<link rel="stylesheet" type="text/css" href="https://dentacoin.com/assets/libs/croppie/croppie.css"/>');
                    await $.getScript('https://dentacoin.com/assets/libs/croppie/croppie.min.js', function() {});

                    // platform parameter
                    if (!validPlatform) {
                        console.error('False \'platform\' parameter passed to dentacoin login gateway.');
                        return false;
                    }

                    // show login gateway by url
                    var getParams = dcnGateway.utils.getGETParameters();

                    async function showGateway(type, data) {
                        var gatewayData = {
                            'type' : type
                        };

                        if (data != undefined) {
                            gatewayData.data = data;
                        }

                        if (environment == 'staging') {
                            gatewayData.staging = true;
                        }

                        // if inviter in the URL pass it to the gateway
                        if (getParams.hasOwnProperty('inviter')) {
                            gatewayData.inviter = getParams.inviter;
                        }

                        // if inviteid in the URL pass it to the gateway
                        if (getParams.hasOwnProperty('inviteid')) {
                            gatewayData.inviteid = getParams.inviteid;
                        }

                        await dcnGateway.dcnGatewayRequests.getGatewayHtml(gatewayData, async function(gatewayHtml) {
                            if (gatewayHtml.success) {
                                if (!loadedSocialLibs) {
                                    console.log('Load external libraries.');
                                    // =============================================== CIVIC =======================================================
                                    await $.getScript('https://dentacoin.com/assets/libs/civic-login/civic-combined-login.js?v='+new Date().getTime(), function() {});

                                    // =============================================== FACEBOOK ====================================================
                                    await $.getScript('https://dentacoin.com/assets/libs/facebook-login/facebook-combined-login.js?v='+new Date().getTime(), function() {});
                                    loadedSocialLibs = true;
                                }

                                // hide previous gateways on showing
                                dcnGateway.utils.hideGateway(true);

                                $('body').addClass('dentacoin-login-gateway-overflow-hidden').append('<div class="dentacoin-login-gateway-container"><div class="dentacoin-login-gateway-wrapper">'+gatewayHtml.data+'</div></div>');

                                // setup platform
                                $('.patient .social-login-btn').attr('data-platform', params.platform);

                                // setup forgotten password link
                                $('.dentacoin-login-gateway-container .forgotten-password-link').attr('href', params.forgotten_password_link);

                                if (params.platform == 'assurance' || params.platform == 'trusted-reviews') {
                                    $('.popup-header-action a[data-type="patient"]').html($('.popup-header-action').attr('data-translation-patients'));
                                }

                                // init custom checkboxes style
                                dcnGateway.utils.initCustomCheckboxes();

                                // init custom inputs styles
                                $('body').on('click', '.custom-gateway-google-label-style label', function() {
                                    $(this).addClass('active-label gateway-platform-color-important');
                                    if ($('.custom-gateway-google-label-style').attr('data-input-colorful-border') == 'true') {
                                        $(this).parent().find('input').addClass('gateway-platform-border-color-important');
                                    }
                                });

                                // stop form submits on enter press
                                $('.dentacoin-login-gateway-container form#dentist-login, .dentacoin-login-gateway-container form#dentist-register').bind('keypress', function (e) {
                                    if (e.keyCode == 13) {
                                        $('.dentacoin-login-gateway-container .dentist .form-register .next-step').click();
                                        return false;
                                    }
                                });

                                $('body').on('keyup change focusout', '.custom-gateway-google-label-style input', function() {
                                    var value = $(this).val().trim();
                                    if (value.length) {
                                        $(this).closest('.custom-gateway-google-label-style').find('label').addClass('active-label gateway-platform-color-important');
                                        if ($(this).closest('.custom-gateway-google-label-style').attr('data-input-colorful-border') == 'true') {
                                            $(this).addClass('gateway-platform-border-color-important');
                                        }
                                    } else {
                                        $(this).closest('.custom-gateway-google-label-style').find('label').removeClass('active-label gateway-platform-color-important');
                                        if ($(this).closest('.custom-gateway-google-label-style').attr('data-input-colorful-border') == 'true') {
                                            $(this).removeClass('gateway-platform-border-color-important');
                                        }
                                    }
                                });

                                $('.dentacoin-login-gateway-container .popup-header-action a').click(function() {
                                    $('.dentacoin-login-gateway-container .popup-header-action a').removeClass('active gateway-platform-background-color-important');
                                    if ($(this).attr('data-type') == 'patient') {
                                        $(this).addClass('active gateway-platform-background-color-important');
                                    } else {
                                        $(this).addClass('active');
                                    }

                                    $('.dentacoin-login-gateway-container .popup-body > .inline-block').addClass('custom-hide');
                                    $('.dentacoin-login-gateway-container .popup-body .'+$(this).attr('data-type')).removeClass('custom-hide');
                                });

                                $('.dentacoin-login-gateway-container .call-sign-up').click(function() {
                                    $('.dentacoin-login-gateway-container .form-login').addClass('display-none');
                                    $('.dentacoin-login-gateway-container .form-register').removeClass('display-none');
                                });

                                $('.dentacoin-login-gateway-container .call-log-in').click(function() {
                                    $('.dentacoin-login-gateway-container .form-login').removeClass('display-none');
                                    $('.dentacoin-login-gateway-container .form-register').addClass('display-none');
                                });

                                // ====================== PATIENT LOGIN/ SIGNUP LOGIC ======================

                                $('.dentacoin-login-gateway-container .patient .form-register #privacy-policy-registration-patient').on('change', function() {
                                    if ($(this).is(':checked') && $('.dentacoin-login-gateway-container .patient .form-register #agree-over-eighteen').is(':checked')) {
                                        $('.dentacoin-login-gateway-container .patient .form-register .facebook-custom-btn').removeAttr('custom-stopper');
                                        $('.dentacoin-login-gateway-container .patient .form-register .civic-custom-btn').removeAttr('custom-stopper');
                                    } else {
                                        $('.dentacoin-login-gateway-container .patient .form-register .facebook-custom-btn').attr('custom-stopper', 'true');
                                        $('.dentacoin-login-gateway-container .patient .form-register .civic-custom-btn').attr('custom-stopper', 'true');
                                    }
                                });

                                $('.dentacoin-login-gateway-container .patient .form-register #agree-over-eighteen').on('change', function() {
                                    if ($(this).is(':checked') && $('.dentacoin-login-gateway-container .patient .form-register #privacy-policy-registration-patient').is(':checked')) {
                                        $('.dentacoin-login-gateway-container .patient .form-register .facebook-custom-btn').removeAttr('custom-stopper');
                                        $('.dentacoin-login-gateway-container .patient .form-register .civic-custom-btn').removeAttr('custom-stopper');
                                    } else {
                                        $('.dentacoin-login-gateway-container .patient .form-register .facebook-custom-btn').attr('custom-stopper', 'true');
                                        $('.dentacoin-login-gateway-container .patient .form-register .civic-custom-btn').attr('custom-stopper', 'true');
                                    }
                                });

                                $(document).on('civicCustomBtnClicked', function (event) {
                                    $('.dentacoin-login-gateway-container .patient .form-register .step-errors-holder').html('');
                                });

                                $(document).on('civicRead', async function (event) {
                                    dcnGateway.utils.hideGateway();
                                    dcnGateway.utils.showLoader('Receiving your details from Civic...');
                                });

                                $(document).on('receivedFacebookToken', async function (event) {
                                    dcnGateway.utils.hideGateway();
                                    dcnGateway.utils.showLoader('Receiving your details from Facebook...');
                                });

                                $(document).on('facebookCustomBtnClicked', function (event) {
                                    $('.dentacoin-login-gateway-container .patient .form-register .step-errors-holder').html('');
                                });

                                $(document).on('cannotLoginBecauseOfMissingCookies', function (event) {
                                    dcnGateway.utils.showPopup('Please accept the strictly necessary cookies in order to continue with logging in.', 'alert');
                                });

                                $(document).on('noUserIdReceived', function (event) {
                                    dcnGateway.utils.showPopup(event.message, 'alert');
                                });

                                $(document).on('noCoreDBApiConnection', function (event) {
                                    dcnGateway.utils.showPopup('Something went wrong, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.', 'alert');
                                });

                                $(document).on('customCivicFbStopperTriggered', function (event) {
                                    dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .patient .form-register .step-errors-holder'), 'Please confirm you\'re 18 years of age and agree with our Privacy Policy.');
                                });

                                $(document).on('registeredAccountMissingEmail', async function (event) {
                                    dcnGateway.utils.hideLoader();

                                    $('.login-section-title').html($('.popup-body.translations').attr('data-translation-update-email'));

                                    $('.dentacoin-login-gateway-container .patient .form-login .form-login-fields').hide();
                                    $('.dentacoin-login-gateway-container .patient .form-login').append('<div class="registered-user-without-email-parent"><div class="padding-bottom-10 field-parent"><div class="custom-gateway-google-label-style module" data-input-colorful-border="true"><label for="registered-patient-without-email">'+$('.popup-body.translations').attr('data-translation-email-field')+'</label><input class="full-rounded form-field" maxlength="100" type="email" id="registered-patient-without-email" /></div><div class="dentacoin-login-gateway-fs-14 light-gray-color padding-top-5">'+$('.popup-body.translations').attr('data-translation-please-add-email')+'</div></div><div class="patient-register-checkboxes padding-top-5"><div class="custom-checkbox-style"><input type="checkbox" class="custom-checkbox-input" id="privacy-policy-registered-user-without-email"/><label class="dentacoin-login-gateway-fs-15 custom-checkbox-label" for="privacy-policy-registered-user-without-email">'+$('.popup-body.translations').attr('data-translation-i-agree')+'<a href="//dentacoin.com/privacy-policy" target="_blank">'+$('.popup-body.translations').attr('data-translation-privacy-policy')+'</a></label></div></div><div class="text-right padding-top-15"><a href="javascript:void(0);" class="platform-button opposite gateway-platform-color-important dentacoin-login-gateway-fs-20 save-registered-patient-without-email inline-block">'+$('.popup-body.translations').attr('data-translation-continue')+'</a></div></div>');

                                    dcnGateway.utils.initCustomCheckboxes();

                                    $('.dentacoin-login-gateway-container .patient .form-login .save-registered-patient-without-email').click(async function() {
                                        $('.registered-user-without-email-parent .error-handle').remove();

                                        if ($('.dentacoin-login-gateway-container .patient .form-login #registered-patient-without-email').val().trim() == '' || !dcnGateway.utils.validateEmail($('.dentacoin-login-gateway-container .patient .form-login #registered-patient-without-email').val().trim())) {
                                            dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .patient .form-login #registered-patient-without-email').closest('.field-parent'), 'Please use valid email address.');
                                        } else if (!$('.dentacoin-login-gateway-container .patient .form-login #privacy-policy-registered-user-without-email').is(':checked')) {
                                            dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .patient .form-login #privacy-policy-registered-user-without-email').closest('.patient-register-checkboxes'), 'Please agree with our Privacy Policy.');
                                        } else {
                                            var editUserDataData = {
                                                email: $('.dentacoin-login-gateway-container .patient .form-login #registered-patient-without-email').val().trim()
                                            };
                                            var editUserDataResponse = await dcnGateway.dcnGatewayRequests.editUserData(editUserDataData, event.response_data.token);
                                            if (editUserDataResponse.success) {
                                                // on success save email to db
                                                $.event.trigger({
                                                    type: 'patientProceedWithCreatingSession',
                                                    response_data: event.response_data,
                                                    platform_type: event.platform_type,
                                                    time: new Date()
                                                });

                                                dcnGateway.utils.hideGateway(true);
                                            } else if (editUserDataResponse.errors) {
                                                var error_popup_html = '';
                                                for(var key in editUserDataResponse.errors) {
                                                    error_popup_html += editUserDataResponse.errors[key]+'<br>';
                                                }

                                                dcnGateway.utils.showPopup(error_popup_html, 'alert');
                                            } else {
                                                dcnGateway.utils.showPopup('Something went wrong, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.', 'alert');
                                            }
                                        }
                                    });
                                });

                                $(document).on('patientProceedWithCreatingSession', async function (event) {
                                    var ajaxLink = currentPlatformDomain + 'authenticate-user';
                                    if (hasOwnProperty.call(params, 'subplatform')) {
                                        ajaxLink = params.subplatform + 'authenticate-user';
                                    }

                                    var createPatientSessionResponse = await dcnGateway.dcnGatewayRequests.createUserSession(ajaxLink, {
                                        token: event.response_data.token,
                                        id: event.response_data.data.id,
                                        type: 'patient'
                                    });

                                    if (createPatientSessionResponse.success) {


                                        $.event.trigger({
                                            type: 'patientAuthSuccessResponse',
                                            response_data: event.response_data,
                                            platform_type: params.platform,
                                            time: new Date()
                                        });
                                    } else {
                                        dcnGateway.utils.hideLoader();
                                        dcnGateway.utils.showPopup('Something went wrong with the external login provider, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.', 'alert');
                                    }
                                });

                                $(document).on('successfulFacebookPatientLogin', async function (event) {
                                    dcnGateway.utils.fireGoogleAnalyticsEvent('PatientLogin', 'ClickFB', 'PatientLoginFB');
                                    dcnGateway.utils.fireFacebookPixelEvent('PatientLogin');
                                });

                                $(document).on('successfulFacebookPatientRegistration', async function (event) {
                                    dcnGateway.utils.fireGoogleAnalyticsEvent('PatientRegistration', 'ClickFB', 'PatientRegistrationFB');
                                    dcnGateway.utils.fireFacebookPixelEvent('PatientRegistration');
                                });

                                $(document).on('successfulCivicPatientLogin', async function (event) {
                                    dcnGateway.utils.fireGoogleAnalyticsEvent('PatientLogin', 'ClickCivic', 'PatientLoginCivic');
                                    dcnGateway.utils.fireFacebookPixelEvent('PatientLogin');
                                });

                                $(document).on('successfulCivicPatientRegistration', async function (event) {
                                    dcnGateway.utils.fireGoogleAnalyticsEvent('PatientRegistration', 'ClickCivic', ' PatientRegistrationCivic');
                                    dcnGateway.utils.fireFacebookPixelEvent('PatientRegistration');
                                });

                                $(document).on('dentistProceedWithCreatingSession', async function (event) {
                                    var ajaxLink = currentPlatformDomain + 'authenticate-user';
                                    if (hasOwnProperty.call(params, 'subplatform')) {
                                        ajaxLink = params.subplatform + 'authenticate-user';
                                    }

                                    var createDentistSessionResponse = await dcnGateway.dcnGatewayRequests.createUserSession(ajaxLink, {
                                        token: event.response_data.token,
                                        id: event.response_data.data.id,
                                        type: 'dentist'
                                    });

                                    if (createDentistSessionResponse.success) {
                                        $.event.trigger({
                                            type: 'dentistAuthSuccessResponse',
                                            response_data: event.response_data,
                                            platform_type: params.platform,
                                            time: new Date()
                                        });
                                    } else {
                                        dcnGateway.utils.hideLoader();
                                        dcnGateway.utils.showPopup('Something went wrong with the external login provider, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.', 'alert');
                                    }
                                });

                                $(document).on('dentistRegisterSuccessResponse', async function (event) {
                                    if (params.platform == 'trusted-reviews') {
                                        $.event.trigger({
                                            type: 'dentistRegisterSuccessResponseTrustedReviews',
                                            response_data: event.response_data,
                                            platform_type: params.platform,
                                            time: new Date()
                                        });
                                    } else {
                                        if (event.response_data.data.is_clinic) {
                                            $.event.trigger({
                                                type: 'getAfterDentistRegistrationPopupForClinic',
                                                time: new Date(),
                                                response_data: {
                                                    user: event.response_data.data.id
                                                }
                                            });
                                        } else {
                                            $.event.trigger({
                                                type: 'getAfterDentistRegistrationPopupForDentist',
                                                time: new Date(),
                                                response_data: {
                                                    user: event.response_data.data.id
                                                }
                                            });
                                        }
                                    }
                                });

                                $(document).on('getAfterDentistRegistrationPopupForDentist', async function (event) {
                                    var afterDentistRegistrationPopupForDentist = await dcnGateway.dcnGatewayRequests.getAfterDentistRegistrationPopup({
                                        'user-type': 'dentist'
                                    });

                                    if (afterDentistRegistrationPopupForDentist.success) {
                                        dcnGateway.utils.showPopup(afterDentistRegistrationPopupForDentist.data, 'enrich-profile', null, {
                                            user: event.response_data.user,
                                            type: 'dentist'
                                        });
                                    }
                                });

                                $(document).on('getAfterDentistRegistrationPopupForClinic', async function (event) {
                                    var afterDentistRegistrationPopupForClinic = await dcnGateway.dcnGatewayRequests.getAfterDentistRegistrationPopup({
                                        'user-type': 'clinic'
                                    });

                                    if (afterDentistRegistrationPopupForClinic.success) {
                                        dcnGateway.utils.showPopup(afterDentistRegistrationPopupForClinic.data, 'enrich-profile', null, {
                                            user: event.response_data.user,
                                            type: 'clinic'
                                        });
                                    }
                                });

                                $(document).on('patientAuthErrorResponse', function (event) {
                                    var error_popup_html = '';
                                    if (event.response_data.errors) {
                                        for(var key in event.response_data.errors) {
                                            error_popup_html += event.response_data.errors[key]+'<br>';
                                        }
                                    }

                                    var params = {};
                                    if (event.response_data.log_button) {
                                        params.log_button = true;
                                    }

                                    dcnGateway.utils.hideLoader();
                                    dcnGateway.utils.showPopup(error_popup_html, 'alert', null, params);
                                });

                                $(document).on('noExternalLoginProviderConnection', function (event) {
                                    dcnGateway.utils.hideLoader();
                                    dcnGateway.utils.showPopup('Something went wrong with the external login provider, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.', 'alert');
                                });

                                $(document).on('civicSipError', function (event) {
                                    dcnGateway.utils.hideLoader();
                                    dcnGateway.utils.showPopup('Something went wrong with the external login provider, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.', 'alert');
                                });

                                // ====================== /PATIENT LOGIN/ SIGNUP LOGIC ======================

                                // ====================== DENTIST LOGIN/ SIGNUP LOGIC ======================
                                //DENTIST LOGIN
                                $('.dentacoin-login-gateway-container form#dentist-login').on('submit', async function(event) {
                                    $('.dentist-login-errors').html('');

                                    var this_form_native = this;
                                    var this_form = $(this_form_native);
                                    event.preventDefault();

                                    if (dcnGateway.utils.cookies.get('strictly_necessary_policy') != '1') {
                                        dcnGateway.utils.showPopup('Please accept the strictly necessary cookies in order to continue with logging in.', 'alert');
                                    } else {
                                        //clear prev errors
                                        if ($('.dentacoin-login-gateway-container form#dentist-login .error-handle').length) {
                                            $('.dentacoin-login-gateway-container form#dentist-login .error-handle').remove();
                                        }

                                        var form_fields = this_form.find('.form-field');
                                        var submit_form = true;
                                        for(var i = 0, len = form_fields.length; i < len; i+=1) {
                                            if (form_fields.eq(i).attr('type') == 'email' && !dcnGateway.utils.validateEmail(form_fields.eq(i).val().trim())) {
                                                dcnGateway.utils.customErrorHandle(form_fields.eq(i).closest('.field-parent'), 'Please use valid email address.');
                                                submit_form = false;
                                            }

                                            if (form_fields.eq(i).val().trim() == '') {
                                                dcnGateway.utils.customErrorHandle(form_fields.eq(i).closest('.field-parent'), 'This field is required.');
                                                submit_form = false;
                                            }
                                        }

                                        if (submit_form) {
                                            //check if existing account
                                            var check_account_response = await dcnGateway.dcnGatewayRequests.checkDentistAccount($('.dentacoin-login-gateway-container form#dentist-login input[name="email"]').val().trim(), $('.dentacoin-login-gateway-container form#dentist-login input[name="password"]').val().trim(), params.platform);

                                            if (check_account_response.success && check_account_response.redirect_to != undefined) {
                                                window.location.replace(check_account_response.redirect_to);
                                                return false;
                                            }
                                        }

                                        if (submit_form && check_account_response.success) {
                                            dcnGateway.utils.fireGoogleAnalyticsEvent('DentistLogin', 'Click', 'DentistLogin');
                                            dcnGateway.utils.fireFacebookPixelEvent('DentistLogin');

                                            var dentistLoginParams = {
                                                'platform' : params.platform,
                                                'email' : $('.dentacoin-login-gateway-container form#dentist-login input[name="email"]').val().trim(),
                                                'password' : $('.dentacoin-login-gateway-container form#dentist-login input[name="password"]').val().trim()
                                            };

                                            if (environment == 'staging') {
                                                dentistLoginParams.staging = true;
                                            }

                                            var loggingDentistResponse = await dcnGateway.dcnGatewayRequests.dentistLogin(dentistLoginParams);

                                            if (loggingDentistResponse.success) {
                                                // if password is weak force dentist to update it
                                                if (!dcnGateway.utils.validatePassword($('.dentacoin-login-gateway-container form#dentist-login input[name="password"]').val().trim())) {
                                                    $('.dentist .form-login').html('<h2>'+$('.popup-body.translations').attr('data-translation-update-password')+'</h2><form method="POST" id="dentist-update-password"><div class="padding-bottom-10 field-parent"><div class="custom-gateway-google-label-style module" data-input-colorful-border="true"><label for="dentist-update-password-field">'+$('.popup-body.translations').attr('data-translation-password-field')+'</label><input class="full-rounded form-field required password" minlength="8" maxlength="30" type="password" id="dentist-update-password-field"/></div></div><div class="padding-bottom-20 field-parent"><div class="custom-gateway-google-label-style module" data-input-colorful-border="true"><label for="dentist-update-repeat-password-field">'+$('.popup-body.translations').attr('data-translation-repeat-password-field')+'</label><input class="full-rounded form-field required repeat-password" minlength="8" maxlength="30" type="password" id="dentist-update-repeat-password-field"/></div></div><div class="dentist-update-password-errors"></div><div class="btn-container text-center padding-top-20 padding-bottom-50"><input type="submit" value="'+$('.popup-body.translations').attr('data-translation-save')+'" class="platform-button gateway-platform-background-color-important dentacoin-login-gateway-fs-20"/></div></form>');

                                                    $('.dentist .form-login #dentist-update-password').on('submit', async function(event) {
                                                        var this_form_native = this;
                                                        var this_form = $(this_form_native);
                                                        var errors = false;
                                                        event.preventDefault();
                                                        $('.dentist .form-login #dentist-update-password .error-handle').remove();
                                                        var dentist_update_password_inputs = $('.dentist .form-login #dentist-update-password .form-field.required');

                                                        for(var i = 0, len = dentist_update_password_inputs.length; i < len; i+=1) {
                                                            if (dentist_update_password_inputs.eq(i).val().trim() == '') {
                                                                dcnGateway.utils.customErrorHandle(dentist_update_password_inputs.eq(i).closest('.field-parent'), 'This field is required.');
                                                                errors = true;
                                                            }
                                                        }

                                                        var password = $('.dentist .form-login #dentist-update-password #dentist-update-password-field').val().trim();

                                                        if (password != $('.dentist .form-login #dentist-update-password #dentist-update-repeat-password-field').val().trim()) {
                                                            dcnGateway.utils.customErrorHandle($('.dentist .form-login #dentist-update-password .dentist-update-password-errors'), 'Both passwords don\'t match.');
                                                            errors = true;
                                                        }

                                                        if (!dcnGateway.utils.validatePassword(password)) {
                                                            dcnGateway.utils.customErrorHandle($('.dentist .form-login #dentist-update-password .dentist-update-password-errors'), 'Password must contain between 8 and 30 symbols with at least one uppercase letter, one lowercase letter and a number or a special character.');
                                                            errors = true;
                                                        }

                                                        if (!errors) {
                                                            // update pass
                                                            var editUserDataData = {
                                                                'password': password,
                                                                'password-repeat': $('.dentist .form-login #dentist-update-password #dentist-update-repeat-password-field').val().trim()
                                                            };
                                                            var editUserDataResponse = await dcnGateway.dcnGatewayRequests.editUserData(editUserDataData, loggingDentistResponse.data.token);
                                                            if (editUserDataResponse.success) {
                                                                // on success save email to db
                                                                $.event.trigger({
                                                                    type: 'dentistProceedWithCreatingSession',
                                                                    response_data: loggingDentistResponse.data,
                                                                    platform_type: params.platform,
                                                                    time: new Date()
                                                                });

                                                                dcnGateway.utils.hideGateway(true);
                                                            } else if (editUserDataResponse.errors) {
                                                                var error_popup_html = '';
                                                                for(var key in editUserDataResponse.errors) {
                                                                    error_popup_html += editUserDataResponse.errors[key]+'<br>';
                                                                }

                                                                dcnGateway.utils.showPopup(error_popup_html, 'alert');
                                                            } else {
                                                                dcnGateway.utils.showPopup('Something went wrong, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.', 'alert');
                                                            }
                                                        }
                                                    });
                                                } else {
                                                    $.event.trigger({
                                                        type: 'dentistProceedWithCreatingSession',
                                                        response_data: loggingDentistResponse.data,
                                                        platform_type: params.platform,
                                                        time: new Date()
                                                    });

                                                    dcnGateway.utils.hideGateway(true);
                                                }
                                            } else if (loggingDentistResponse.error) {
                                                if (typeof(loggingDentistResponse.message) === 'object' && loggingDentistResponse.message !== null) {
                                                    var error_popup_html = '';
                                                    for(var key in loggingDentistResponse.message) {
                                                        error_popup_html += loggingDentistResponse.message[key]+'<br>';
                                                    }
                                                    $('.dentist-login-errors').html('<div class="error-handle">'+error_popup_html+'</div>');
                                                } else {
                                                    $('.dentist-login-errors').html('<div class="error-handle">'+loggingDentistResponse.message+'</div>');
                                                }
                                            } else {
                                                dcnGateway.utils.showPopup('Something went wrong, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.', 'alert');
                                            }
                                        } else if (submit_form && check_account_response.error) {
                                            dcnGateway.utils.customErrorHandle(this_form.find('input[name="password"]').closest('.field-parent'), check_account_response.message);
                                        }
                                    }
                                });

                                //DENTIST REGISTER
                                $('.dentacoin-login-gateway-container .dentist .form-register .prev-step').click(function() {
                                    var current_step = $('.dentacoin-login-gateway-container .dentist .form-register .step.visible');
                                    var current_prev_step = current_step.prev();
                                    current_step.removeClass('visible');
                                    if (current_prev_step.hasClass('first')) {
                                        $(this).hide();
                                    }
                                    current_prev_step.addClass('visible');

                                    $('.dentacoin-login-gateway-container .dentist .form-register .next-step').val('Next');
                                    $('.dentacoin-login-gateway-container .dentist .form-register .next-step').attr('data-current-step', current_prev_step.attr('data-step'));
                                });

                                $('.changeable-color-on-selected-value').on('change', function() {
                                    if ($(this).val() == '') {
                                        $(this).addClass('dcn-gateway-gray-color');
                                    } else {
                                        $(this).removeClass('dcn-gateway-gray-color');
                                    }
                                });

                                // change htmls based on the selected option
                                for (var i = 0, len = $('.dentacoin-login-gateway-container .changeable-html-based-on-user-type').length; i < len; i+=1) {
                                    if ($('.dentacoin-login-gateway-container .step.second .user-type-container [name="user-type"]').val() == 'dentist') {
                                        $('.dentacoin-login-gateway-container .changeable-html-based-on-user-type').eq(i).html($('.dentacoin-login-gateway-container .changeable-html-based-on-user-type').eq(i).attr('data-dentist'));
                                    } else {
                                        $('.dentacoin-login-gateway-container .changeable-html-based-on-user-type').eq(i).html($('.dentacoin-login-gateway-container .changeable-html-based-on-user-type').eq(i).attr('data-clinic'));
                                    }
                                }

                                // change htmls based on the selected option
                                for (var i = 0, len = $('.dentacoin-login-gateway-container .changeable-html-based-on-resolution').length; i < len; i+=1) {
                                    if ($(window).width() < 1200) {
                                        $('.dentacoin-login-gateway-container .changeable-html-based-on-resolution').eq(i).html($('.dentacoin-login-gateway-container .changeable-html-based-on-resolution').eq(i).attr('data-mobile'));
                                    } else {
                                        $('.dentacoin-login-gateway-container .changeable-html-based-on-resolution').eq(i).html($('.dentacoin-login-gateway-container .changeable-html-based-on-resolution').eq(i).attr('data-desktop'));
                                    }
                                }

                                //SECOND STEP INIT LOGIC
                                $('.dentacoin-login-gateway-container .step.second .user-type-container .user-type').click(function() {
                                    $('.dentacoin-login-gateway-container .step.second .show-on-user-type-first-change').show();
                                    $('.dentacoin-login-gateway-container .step.second .user-type-container .error-handle').hide();

                                    $('.dentacoin-login-gateway-container .step.second .user-type-container .user-type').removeClass('active');
                                    $('.dentacoin-login-gateway-container .step.second .user-type-container .custom-button').removeClass('gateway-platform-border-color-important');
                                    $('.dentacoin-login-gateway-container .step.second .user-type-container .custom-button .circle').removeClass('gateway-platform-background-color-important');
                                    $('.dentacoin-login-gateway-container .step.second .user-type-container .user-type-label').removeClass('gateway-platform-color');

                                    $(this).addClass('active');
                                    $(this).find('.custom-button .circle').addClass('gateway-platform-background-color-important');
                                    $(this).find('.custom-button').addClass('gateway-platform-border-color-important');
                                    $(this).find('.user-type-label').addClass('gateway-platform-color');
                                    $('.dentacoin-login-gateway-container .step.second .user-type-container [name="user-type"]').val($(this).attr('data-type'));

                                    // change htmls based on the selected option
                                    for (var i = 0, len = $('.dentacoin-login-gateway-container .changeable-html-based-on-user-type').length; i < len; i+=1) {
                                        if ($('.dentacoin-login-gateway-container .step.second .user-type-container [name="user-type"]').val() == 'dentist') {
                                            $('.dentacoin-login-gateway-container .changeable-html-based-on-user-type').eq(i).html($('.dentacoin-login-gateway-container .changeable-html-based-on-user-type').eq(i).attr('data-dentist'));
                                        } else {
                                            $('.dentacoin-login-gateway-container .changeable-html-based-on-user-type').eq(i).html($('.dentacoin-login-gateway-container .changeable-html-based-on-user-type').eq(i).attr('data-clinic'));
                                        }
                                    }

                                    // show addition fields only if dentist
                                    if ($('.dentacoin-login-gateway-container .step.second .user-type-container [name="user-type"]').val() == 'dentist') {
                                        $('.show-if-dentist').show();
                                        $('.show-if-clinic').hide();
                                        $('.show-if-clinic .to-be-required').removeClass('required');

                                        if ($('.dentacoin-login-gateway-container .step.second [name="dentist-type"]:checked').val() == undefined) {
                                            $('.show-if-dentist-type-selected').hide();
                                        }
                                    } else {
                                        $('.show-if-dentist').hide();
                                        $('.show-if-clinic').show();
                                        $('.show-if-dentist-type-selected').show();
                                        $('.show-if-clinic .to-be-required').addClass('required');
                                    }
                                });

                                $('.dentacoin-login-gateway-container .step.second select[name="clinic-member-job-title"]').on('change', function() {
                                    if ($(this).val() == 'other') {
                                        $(this).closest('.field-parent').append('<div class="custom-gateway-google-label-style module clinic-member-job-title-other-parent" data-input-colorful-border="true"><label for="clinic-member-job-title-other">'+$('.popup-body.translations').attr('data-translation-please-specify-field')+'</label><input class="full-rounded form-field required" name="clinic-member-job-title-other" maxlength="50" type="text" id="clinic-member-job-title-other"/></div>');

                                        $('.dentacoin-login-gateway-container .step.second .clinic-member-job-title-other-parent #clinic-member-job-title-other').focus();
                                        $('.dentacoin-login-gateway-container .step.second .clinic-member-job-title-other-parent label[for="clinic-member-job-title-other"]').addClass('active-label');
                                    } else {
                                        $(this).closest('.field-parent').find('.clinic-member-job-title-other-parent').remove();
                                    }
                                });

                                $('.dentacoin-login-gateway-container .step.second [name="dentist-type"]').on('change', function() {
                                    $('.dentacoin-login-gateway-container .step.second .show-if-dentist-type-selected').show();

                                    if ($(this).val() == 'work_at_practice') {
                                        $('.dentacoin-login-gateway-container .step.second .if-work-for-a-practice').html('<div class="padding-bottom-15 field-parent"><div class="custom-gateway-google-label-style module" data-input-colorful-border="true"><label for="practice-name">'+$('.popup-body.translations').attr('data-translation-practise-name-field')+'</label><input class="full-rounded form-field" name="practice-name" maxlength="255" type="text" id="practice-name"/></div></div><div class="padding-bottom-15 field-parent"><div class="custom-gateway-google-label-style module" data-input-colorful-border="true"><label for="practice-email">'+$('.popup-body.translations').attr('data-translation-official-email-field')+'</label><input class="full-rounded form-field" name="practice-email" maxlength="100" type="text" id="practice-email"/></div></div>');
                                    } else {
                                        $('.dentacoin-login-gateway-container .step.second .if-work-for-a-practice').html('');
                                    }
                                });

                                //THIRD STEP INIT LOGIC
                                $('.dentacoin-login-gateway-container #dentist-country').on('change', function() {
                                    $('.dentacoin-login-gateway-container .step.third .phone .country-code').html('+'+$(this).find('option:selected').attr('data-code'));
                                });

                                //FOURTH STEP INIT LOGIC
                                dcnGateway.utils.styleAvatarUploadButton();

                                function collectFirstAndSecondStepData() {
                                    var secondStepIncompleteRegistrationParams = {
                                        'platform' : params.platform,
                                        'email' : $('.dentacoin-login-gateway-container form#dentist-register #dentist-register-email').val().trim(),
                                        'password' : $('.dentacoin-login-gateway-container form#dentist-register #dentist-register-password').val().trim(),
                                        'name' : $('.dentacoin-login-gateway-container form#dentist-register #dentist-register-latin-name').val().trim(),
                                        'type' : $('.dentacoin-login-gateway-container .step.second .user-type-container [name="user-type"]').val()
                                    };

                                    if ($('.dentacoin-login-gateway-container form#dentist-register #dentist-register-alternative-name').val().trim() != '') {
                                        secondStepIncompleteRegistrationParams['name_alternative'] = $('.dentacoin-login-gateway-container form#dentist-register #dentist-register-alternative-name').val().trim();
                                    }

                                    if ($('.dentacoin-login-gateway-container .step.second .user-type-container [name="user-type"]').val() == 'dentist') {
                                        secondStepIncompleteRegistrationParams['title'] = $('.dentacoin-login-gateway-container form#dentist-register select[name="dentist-title"]').val().trim();
                                        secondStepIncompleteRegistrationParams['dentist_practice'] = $('.dentacoin-login-gateway-container .step.second [name="dentist-type"]:checked').val();

                                        if (secondStepIncompleteRegistrationParams['dentist_practice'] == 'work_at_practice') {
                                            secondStepIncompleteRegistrationParams['clinic_name'] = $('.dentacoin-login-gateway-container .step.second #practice-name').val().trim();
                                            secondStepIncompleteRegistrationParams['clinic_email'] = $('.dentacoin-login-gateway-container .step.second #practice-email').val().trim();
                                        }
                                    } else if ($('.dentacoin-login-gateway-container .step.second .user-type-container [name="user-type"]').val() == 'clinic') {
                                        secondStepIncompleteRegistrationParams['worker_name'] = $('.dentacoin-login-gateway-container .step.second #clinic-member-name').val().trim();
                                        secondStepIncompleteRegistrationParams['working_position'] = $('.dentacoin-login-gateway-container .step.second [name="clinic-member-job-title"]').val();

                                        if (secondStepIncompleteRegistrationParams['working_position'] == 'other') {
                                            secondStepIncompleteRegistrationParams['working_position_label'] = $('.dentacoin-login-gateway-container .step.second #clinic-member-job-title-other').val().trim();
                                        }
                                    }

                                    return secondStepIncompleteRegistrationParams;
                                }

                                var userCountryCode;

                                async function initThirdStepLogic() {
                                    if (predefinedCountryId != undefined) {
                                        $('.step.third #dentist-country option[data-id="'+predefinedCountryId+'"]').prop('selected', true)
                                        $('.step.third .country-code').html('+'+$('.step.third #dentist-country option[data-id="'+predefinedCountryId+'"]').attr('data-code'));
                                    } else {
                                        // get user country code
                                        userCountryCode = await dcnGateway.dcnGatewayRequests.getUserCountry();
                                        // setup current country in the dropdown and phone number
                                        if(userCountryCode.success) {
                                            $('.step.third #dentist-country').attr('data-current-user-country-code', userCountryCode.success);
                                            $('.step.third #dentist-country option[value="'+userCountryCode.success+'"]').prop('selected', true);
                                        }
                                        $('.step.third .country-code').html('+'+$('.step.third #dentist-country option[value="'+userCountryCode.success+'"]').attr('data-code'));
                                    }

                                    // ====================================== GOOGLE MAP LIB =============================================
                                    if ((!loadedGoogleMapLib && typeof google !== 'object') || (typeof google === 'object' && typeof google.maps !== 'object')) {
                                        await $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCaVeHq_LOhQndssbmw-aDnlMwUG73yCdk&libraries=places&language=en', function() {});
                                        // init Google address suggester
                                        loadedGoogleMapLib = false;
                                    }

                                    // ====================================== GOOGLE ADDRESS SUGGESTER =============================================
                                    if (!loadedAddressSuggesterLib) {
                                        await $.getScript('https://dentacoin.com/assets/js/address-combined-login.js?v='+new Date().getTime(), function() {});
                                        // init Google address suggester
                                        if (typeof initAddressSuggesters === 'function') {
                                            initAddressSuggesters();
                                        }
                                        loadedAddressSuggesterLib = false;
                                    }
                                }

                                async function initFourthStepLogic() {
                                    // ====================================== GOOGLE MAP LIB =============================================
                                    if ((!loadedGoogleMapLib && typeof google !== 'object') || (typeof google === 'object' && typeof google.maps !== 'object')) {
                                        await $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCaVeHq_LOhQndssbmw-aDnlMwUG73yCdk&libraries=places&language=en', function() {});
// init Google address suggester
                                        loadedGoogleMapLib = false;
                                    }

                                    // ====================================== GOOGLE ADDRESS SUGGESTER =============================================
                                    if (!loadedAddressSuggesterLib) {
                                        await $.getScript('https://dentacoin.com/assets/js/address-combined-login.js?v='+new Date().getTime(), function() {});
// init Google address suggester
                                        if (typeof initAddressSuggesters === 'function') {
                                            initAddressSuggesters();
                                        }
                                        loadedAddressSuggesterLib = false;
                                    }

                                    await $.getScript('https://www.google.com/recaptcha/api.js', function() {});
                                }

                                if ($('.next-step').attr('data-cached-step') == 'true') {
                                    switch($('.next-step').attr('data-current-step')) {
                                        case 'third':
                                            initThirdStepLogic();
                                            break;
                                        case 'fourth':
                                            initFourthStepLogic();
                                            break;
                                    }
                                }

                                $(document).on('click', '.step.first .register-claim', async function() {
                                    $('#dentist-register-email').closest('.field-parent').find('.error-handle').remove();
                                    $('#dentist-register-email').closest('.field-parent').find('.alert-success').remove();

                                    $(this).unbind();
                                    var claim_email_response = await dcnGateway.dcnGatewayRequests.claimEmail({
                                        email: $('#dentist-register-email').val().trim()
                                    });

                                    if (claim_email_response.success) {
                                        dcnGateway.utils.customSuccessHandle($('#dentist-register-email').closest('.field-parent'), claim_email_response.message);
                                    } else {
                                        dcnGateway.utils.customErrorHandle($('#dentist-register-email').closest('.field-parent'), 'Something went wrong, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.');
                                    }
                                });

                                //DENTIST REGISTERING FORM
                                $('.dentacoin-login-gateway-container .dentist .form-register .next-step').click(async function() {
                                    var this_btn = $(this);

                                    switch(this_btn.attr('data-current-step')) {
                                        case 'first':
                                            var first_step_inputs = $('.dentacoin-login-gateway-container .dentist .form-register .step.first .form-field');
                                            var errors = false;
                                            $('.dentacoin-login-gateway-container .dentist .form-register .step.first').parent().find('.error-handle').remove();
                                            $('#dentist-register-email').closest('.field-parent').find('.alert-success').remove();

                                            for(var i = 0, len = first_step_inputs.length; i < len; i+=1) {
                                                if (first_step_inputs.eq(i).attr('type') == 'email' && !dcnGateway.utils.validateEmail(first_step_inputs.eq(i).val().trim())) {
                                                    dcnGateway.utils.customErrorHandle(first_step_inputs.eq(i).closest('.field-parent'), 'Please use valid email address.');
                                                    errors = true;
                                                } else if (first_step_inputs.eq(i).attr('type') == 'email' && dcnGateway.utils.validateEmail(first_step_inputs.eq(i).val().trim())) {
                                                    //coredb check if email is free
                                                    var check_email_if_free_response = await dcnGateway.dcnGatewayRequests.checkIfFreeEmail({
                                                        email: first_step_inputs.eq(i).val().trim(),
                                                        for_register: true
                                                    });

                                                    if (check_email_if_free_response.success == false) {
                                                        dcnGateway.utils.customErrorHandle(first_step_inputs.eq(i).closest('.field-parent'), check_email_if_free_response.errors.email);
                                                        errors = true;
                                                    }
                                                }

                                                if (first_step_inputs.eq(i).val().trim() == '') {
                                                    dcnGateway.utils.customErrorHandle(first_step_inputs.eq(i).closest('.field-parent'), 'This field is required.');
                                                    errors = true;
                                                }
                                            }

                                            var password = $('.dentacoin-login-gateway-container .dentist .form-register .step.first .form-field.password').val().trim();
                                            if (!dcnGateway.utils.validatePassword(password)) {
                                                dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .step.first .form-field.repeat-password').closest('.field-parent'), 'Password must contain between 8 and 30 symbols with at least one uppercase letter, one lowercase letter and a number or a special character.');
                                                errors = true;
                                            }

                                            if (password != $('.dentacoin-login-gateway-container .step.first .form-field.repeat-password').val().trim()) {
                                                dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .step.first .form-field.repeat-password').closest('.field-parent'), 'Both passwords don\'t match.');
                                                errors = true;
                                            }

                                            if (!errors) {
                                                dcnGateway.utils.fireGoogleAnalyticsEvent('DentistRegistration', 'ClickNext', 'DentistRegistrationStep1');
                                                dcnGateway.utils.fireFacebookPixelEvent('DentistRegistrationStep1');

                                                $('.dentacoin-login-gateway-container .dentist .form-register .step').removeClass('visible');
                                                $('.dentacoin-login-gateway-container .dentist .form-register .step.second').addClass('visible');
                                                $('.dentacoin-login-gateway-container .prev-step').show();

                                                this_btn.attr('data-current-step', 'second');
                                                this_btn.val('Next');
                                            }
                                            break;
                                        case 'second':
                                            var second_step_inputs = $('.dentacoin-login-gateway-container .dentist .form-register .step.second .form-field.required');
                                            var errors = false;
                                            $('.dentacoin-login-gateway-container .dentist .form-register .step.second').find('.error-handle').remove();

                                            //check form-field fields
                                            for (var i = 0, len = second_step_inputs.length; i < len; i+=1) {
                                                if (second_step_inputs.eq(i).is('select')) {
                                                    //IF SELECT TAG
                                                    if (second_step_inputs.eq(i).val().trim() == '') {
                                                        dcnGateway.utils.customErrorHandle(second_step_inputs.eq(i).closest('.field-parent'), 'This field is required.');
                                                        errors = true;
                                                    }
                                                } else if (second_step_inputs.eq(i).is('input')) {
                                                    //IF INPUT TAG
                                                    if (second_step_inputs.eq(i).val().trim() == '') {
                                                        dcnGateway.utils.customErrorHandle(second_step_inputs.eq(i).closest('.field-parent'), 'This field is required.');
                                                        errors = true;
                                                    } else if (second_step_inputs.eq(i).attr('type') == 'email' && !dcnGateway.utils.validateEmail(second_step_inputs.eq(i).val().trim())) {
                                                        dcnGateway.utils.customErrorHandle(second_step_inputs.eq(i).closest('.field-parent'), 'Please use valid email address.');
                                                        errors = true;
                                                    }
                                                }
                                            }

                                            //check if latin name accepts only LATIN characters
                                            if (!/^[0-9a-z A-Z.&‘'-]+$/.test($('.dentacoin-login-gateway-container .dentist .form-register .step.second input[name="latin-name"]').val().trim())) {

                                                dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .dentist .form-register .step.second input[name="latin-name"]').closest('.field-parent'), 'This field should contain only latin characters.');
                                                errors = true;
                                            }

                                            //check if privacy policy checkbox is checked
                                            if (!$('.dentacoin-login-gateway-container .dentist .form-register .step.second #privacy-policy-registration').is(':checked')) {
                                                dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .dentist .form-register .step.second .privacy-policy-row'), 'Please agree with our <a href="//dentacoin.com/privacy-policy" target="_blank">Privacy Policy</a>.');
                                                errors = true;
                                            }

                                            if ($('.dentacoin-login-gateway-container .step.second .user-type-container [name="user-type"]').val() == '') {
                                                dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .step.second .user-type-container'), 'Please select which type you\'re - Dentist or Clinic.');
                                                errors = true;
                                            }

                                            // if dentist
                                            if ($('.dentacoin-login-gateway-container .step.second .user-type-container [name="user-type"]').val() == 'dentist') {
                                                if ($('.dentacoin-login-gateway-container .step.second [name="dentist-type"]:checked').val() == undefined) {
                                                    dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .step.second .dentist-type-checkboxes'), 'Please select one of the options.');
                                                    errors = true;
                                                }

                                                if ($('.dentacoin-login-gateway-container .step.second [name="dentist-type"]:checked').val() == 'work_at_practice') {
                                                    if ($('.dentacoin-login-gateway-container .step.second #practice-name').val().trim() == '') {
                                                        dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .step.second #practice-name').closest('.field-parent'), 'This field is required.');
                                                        errors = true;
                                                    } else if (!/^[0-9a-z A-Z.&‘'-]+$/.test($('.dentacoin-login-gateway-container .step.second #practice-name').val().trim())) {

                                                        dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .step.second #practice-name').closest('.field-parent'), 'This field should contain only latin characters.');
                                                        errors = true;
                                                    }

                                                    if ($('.dentacoin-login-gateway-container .step.second #practice-email').val().trim() == '') {
                                                        dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .step.second #practice-email').closest('.field-parent'), 'This field is required.');
                                                        errors = true;
                                                    } else if (!dcnGateway.utils.validateEmail($('.dentacoin-login-gateway-container .step.second #practice-email').val().trim())) {
                                                        dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .step.second #practice-email').closest('.field-parent'), 'Please use valid email address.');
                                                        errors = true;
                                                    } else {
                                                        var checkPracticeEmailResponse = await dcnGateway.dcnGatewayRequests.checkPracticeEmail($('.dentacoin-login-gateway-container form#dentist-register #dentist-register-email').val().trim(), $('.dentacoin-login-gateway-container .step.second #practice-email').val().trim());
                                                        if (checkPracticeEmailResponse.success) {
                                                            $('.step.third .prepend-notice-popup .alert-notice').remove();
                                                            if (checkPracticeEmailResponse.message) {
                                                                $('.step.third .prepend-notice-popup').prepend('<div class="alert alert-notice show">'+checkPracticeEmailResponse.message+'</div>');
                                                            }
                                                        } else if (!checkPracticeEmailResponse.success) {
                                                            dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .step.second #practice-email').closest('.field-parent'), checkPracticeEmailResponse.errors.clinic_email);
                                                            errors = true;
                                                        }
                                                    }
                                                }
                                            }

                                            // if clinic
                                            if ($('.dentacoin-login-gateway-container .step.second .user-type-container [name="user-type"]').val() == 'clinic') {
                                                if (!/^[a-z A-Z.&‘'-]+$/.test($('.dentacoin-login-gateway-container .dentist .form-register .step.second input[name="clinic-member-name"]').val().trim())) {

                                                    dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .dentist .form-register .step.second input[name="clinic-member-name"]').closest('.field-parent'), 'This field should contain only latin characters.');
                                                    errors = true;
                                                }

                                                if ($('.dentacoin-login-gateway-container .step.second [name="clinic-member-job-title"]').val() == '') {
                                                    dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .step.second [name="clinic-member-job-title"]').closest('.field-parent'), 'Please select job title.');
                                                    errors = true;
                                                }
                                            }

                                            if (!errors) {
                                                dcnGateway.utils.fireGoogleAnalyticsEvent('DentistRegistration', 'ClickNext', 'DentistRegistrationStep2');
                                                dcnGateway.utils.fireFacebookPixelEvent('DentistRegistrationStep2');
                                                // save incomplete account creation data
                                                await dcnGateway.dcnGatewayRequests.saveIncompleteRegistration(collectFirstAndSecondStepData());

                                                $('.dentacoin-login-gateway-container .dentist .form-register .step').removeClass('visible');
                                                $('.dentacoin-login-gateway-container .dentist .form-register .step.third').addClass('visible');

                                                await initThirdStepLogic();

                                                this_btn.attr('data-current-step', 'third');
                                                this_btn.val('Next');
                                            }
                                            break;
                                        case 'third':
                                            var third_step_inputs = $('.dentacoin-login-gateway-container .dentist .form-register .step.third .form-field.required');
                                            var errors = false;
                                            $('.dentacoin-login-gateway-container .dentist .form-register .step.third').find('.error-handle').remove();

                                            for(var i = 0, len = third_step_inputs.length; i < len; i+=1) {
                                                if (third_step_inputs.eq(i).is('select')) {
                                                    //IF SELECT TAG
                                                    if (third_step_inputs.eq(i).val().trim() == '') {
                                                        dcnGateway.utils.customErrorHandle(third_step_inputs.eq(i).closest('.field-parent'), 'This field is required.');
                                                        errors = true;
                                                    }
                                                } else if (third_step_inputs.eq(i).is('input')) {
                                                    //IF INPUT TAG
                                                    if (third_step_inputs.eq(i).val().trim() == '') {
                                                        dcnGateway.utils.customErrorHandle(third_step_inputs.eq(i).closest('.field-parent'), 'This field is required.');
                                                        errors = true;
                                                    }
                                                    if (third_step_inputs.eq(i).attr('type') == 'url' && !dcnGateway.utils.validateUrl(third_step_inputs.eq(i).val().trim())) {
                                                        dcnGateway.utils.customErrorHandle(third_step_inputs.eq(i).closest('.field-parent'), 'Please enter your website URL starting with http:// or https://.');
                                                        errors = true;
                                                    }
                                                }
                                            }

                                            var countryCode = $('.dentacoin-login-gateway-container .dentist .form-register .step.third select[name="country-code"]').val();
                                            var phoneNumber = $('.dentacoin-login-gateway-container .dentist .form-register .step.third input[name="phone"]').val().trim();
                                            if (countryCode != 'xk') {
                                                var validate_phone = await dcnGateway.dcnGatewayRequests.validatePhone(phoneNumber, countryCode);
                                                if (hasOwnProperty.call(validate_phone, 'success') && !validate_phone.success) {
                                                    dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .dentist .form-register .step.third input[name="phone"]').closest('.field-parent'), 'Please use valid phone.');
                                                    errors = true;
                                                }
                                            } else {
                                                if (!/^[0-9 -]+$/.test(phoneNumber) || phoneNumber.length > 12) {
                                                    dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .dentist .form-register .step.third input[name="phone"]').closest('.field-parent'), 'Please use valid phone.');
                                                    errors = true;
                                                }
                                            }

                                            if (stopThirdRegistrationStep == true) {
                                                errors = true;
                                            }

                                            if (!errors) {
                                                if ($('#dentist-country').attr('data-current-user-country-code') != undefined && $('#dentist-country').val() != $('#dentist-country').attr('data-current-user-country-code')) {
                                                    dcnGateway.utils.showPopup('Your IP thinks differently. Sure you\'ve entered the right country?', 'warning', async function() {
                                                        dcnGateway.utils.fireGoogleAnalyticsEvent('DentistRegistration', 'ClickNext', 'DentistRegistrationStep3');
                                                        dcnGateway.utils.fireFacebookPixelEvent('DentistRegistrationStep3');
                                                        // save incomplete account creation data
                                                        var thirdStepIncompleteRegistrationParams = collectFirstAndSecondStepData();
                                                        thirdStepIncompleteRegistrationParams.platform = params.platform;
                                                        thirdStepIncompleteRegistrationParams.email = $('.dentacoin-login-gateway-container form#dentist-register #dentist-register-email').val().trim();
                                                        thirdStepIncompleteRegistrationParams.country_id = $('.dentacoin-login-gateway-container .step.third [name="country-code"] option:selected').attr('data-id');
                                                        thirdStepIncompleteRegistrationParams.address = $('.dentacoin-login-gateway-container .step.third #dentist-register-address').val().trim();
                                                        thirdStepIncompleteRegistrationParams.website = $('.dentacoin-login-gateway-container .step.third #dentist-register-website').val().trim();
                                                        thirdStepIncompleteRegistrationParams.phone = $('.dentacoin-login-gateway-container .step.third #dentist-register-phone').val().trim();
                                                        await dcnGateway.dcnGatewayRequests.saveIncompleteRegistration(thirdStepIncompleteRegistrationParams);

                                                        $('.dentacoin-login-gateway-container .dentist .form-register .step').removeClass('visible');
                                                        $('.dentacoin-login-gateway-container .dentist .form-register .step.fourth').addClass('visible');

                                                        this_btn.attr('data-current-step', 'fourth');
                                                        this_btn.val('Create account');
                                                    });
                                                } else {
                                                    dcnGateway.utils.fireGoogleAnalyticsEvent('DentistRegistration', 'ClickNext', 'DentistRegistrationStep3');
                                                    dcnGateway.utils.fireFacebookPixelEvent('DentistRegistrationStep3');
// save incomplete account creation data
                                                    var thirdStepIncompleteRegistrationParams = collectFirstAndSecondStepData();
                                                    thirdStepIncompleteRegistrationParams.platform = params.platform;
                                                    thirdStepIncompleteRegistrationParams.email = $('.dentacoin-login-gateway-container form#dentist-register #dentist-register-email').val().trim();
                                                    thirdStepIncompleteRegistrationParams.country_id = $('.dentacoin-login-gateway-container .step.third [name="country-code"] option:selected').attr('data-id');
                                                    thirdStepIncompleteRegistrationParams.address = $('.dentacoin-login-gateway-container .step.third #dentist-register-address').val().trim();
                                                    thirdStepIncompleteRegistrationParams.website = $('.dentacoin-login-gateway-container .step.third #dentist-register-website').val().trim();
                                                    thirdStepIncompleteRegistrationParams.phone = $('.dentacoin-login-gateway-container .step.third #dentist-register-phone').val().trim();
                                                    await dcnGateway.dcnGatewayRequests.saveIncompleteRegistration(thirdStepIncompleteRegistrationParams);

                                                    $('.dentacoin-login-gateway-container .dentist .form-register .step').removeClass('visible');
                                                    $('.dentacoin-login-gateway-container .dentist .form-register .step.fourth').addClass('visible');

                                                    this_btn.attr('data-current-step', 'fourth');
                                                    this_btn.val('Create account');
                                                }

                                                await $.getScript('https://www.google.com/recaptcha/api.js', function() {});
                                            }
                                            break;
                                        case 'fourth':
                                            $('.dentacoin-login-gateway-container .dentist .form-register .step.fourth').find('.error-handle').remove();
                                            var errors = false;
                                            //checking if empty avatar
                                            if ($('.dentist .form-register .step.fourth #custom-upload-avatar').val().trim() == '') {
                                                dcnGateway.utils.customErrorHandle($('.step.fourth .step-errors-holder'), 'Please add a profile photo.');
                                                errors = true;
                                            }

                                            //checking if no specialization checkbox selected
                                            if ($('.dentacoin-login-gateway-container .dentist .form-register .step.fourth [name="specializations[]"]:checked').val() == undefined) {
                                                dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .step.fourth .step-errors-holder'), 'Please select specialization/s.');
                                                errors = true;
                                            }

                                            //checking if no specialization checkbox selected
                                            if (typeof(grecaptcha) != undefined && grecaptcha.getResponse().length == 0) {
                                                dcnGateway.utils.customErrorHandle($('.dentacoin-login-gateway-container .step.fourth .step-errors-holder'), 'Please prove that you\'re not a robot.');
                                                errors = true;
                                            }

                                            if (!errors) {
                                                $('.dentacoin-login-gateway-container form#dentist-register .step.fourth .step-errors-holder').html('');
                                                dcnGateway.utils.fireGoogleAnalyticsEvent('DentistRegistration', 'ClickNext', 'DentistRegistrationComplete');
                                                dcnGateway.utils.fireFacebookPixelEvent('DentistRegistrationComplete');

                                                var registerParams = {
                                                    'platform' : params.platform,
                                                    'grecaptcha' : grecaptcha.getResponse(),
                                                    'email' : $('.dentacoin-login-gateway-container form#dentist-register #dentist-register-email').val().trim(),
                                                    'password' : $('.dentacoin-login-gateway-container form#dentist-register #dentist-register-password').val().trim(),
                                                    'repeat-password' : $('.dentacoin-login-gateway-container form#dentist-register #dentist-register-repeat-password').val().trim(),
                                                    'latin-name' : $('.dentacoin-login-gateway-container form#dentist-register #dentist-register-latin-name').val().trim(),
                                                    'user-type' : $('.dentacoin-login-gateway-container .step.second .user-type-container [name="user-type"]').val(),
                                                    'country-code' : $('.dentacoin-login-gateway-container .step.third [name="country-code"]').val(),
                                                    'address' : $('.dentacoin-login-gateway-container .step.third #dentist-register-address').val().trim(),
                                                    'website' : $('.dentacoin-login-gateway-container .step.third #dentist-register-website').val().trim(),
                                                    'phone' : $('.dentacoin-login-gateway-container .step.third #dentist-register-phone').val().trim(),
                                                    'specializations' : $('.dentacoin-login-gateway-container form#dentist-register input[name="password"]').val().trim(),
                                                    'hidden-image' : $('.dentacoin-login-gateway-container form#dentist-register .step.fourth #hidden-image').val().trim()
                                                };

                                                var specializationsArr = [];
                                                for (var i = 0, len = $('.dentacoin-login-gateway-container form#dentist-register .step.fourth [name="specializations[]"]:checked').length; i < len; i+=1) {
                                                    specializationsArr.push($('.dentacoin-login-gateway-container form#dentist-register .step.fourth [name="specializations[]"]:checked').eq(i).val());
                                                }
                                                registerParams['specializations'] = JSON.stringify(specializationsArr);

                                                if ($('.dentacoin-login-gateway-container form#dentist-register #dentist-register-alternative-name').val().trim() != '') {
                                                    registerParams['alternative-name'] = $('.dentacoin-login-gateway-container form#dentist-register #dentist-register-alternative-name').val().trim();
                                                }

                                                if ($('.dentacoin-login-gateway-container .step.second .user-type-container [name="user-type"]').val() == 'dentist') {
                                                    registerParams['dentist-title'] = $('.dentacoin-login-gateway-container form#dentist-register select[name="dentist-title"]').val().trim();
                                                    registerParams['dentist_practice'] = $('.dentacoin-login-gateway-container .step.second [name="dentist-type"]:checked').val();

                                                    if (registerParams['dentist_practice'] == 'work_at_practice') {
                                                        registerParams['clinic_name'] = $('.dentacoin-login-gateway-container .step.second #practice-name').val().trim();
                                                        registerParams['clinic_email'] = $('.dentacoin-login-gateway-container .step.second #practice-email').val().trim();
                                                    }
                                                } else if ($('.dentacoin-login-gateway-container .step.second .user-type-container [name="user-type"]').val() == 'clinic') {
                                                    registerParams['worker_name'] = $('.dentacoin-login-gateway-container .step.second #clinic-member-name').val().trim();
                                                    registerParams['working_position'] = $('.dentacoin-login-gateway-container .step.second [name="clinic-member-job-title"]').val();

                                                    if (registerParams['working_position'] == 'other') {
                                                        registerParams['working_position_label'] = $('.dentacoin-login-gateway-container .step.second #clinic-member-job-title-other').val().trim();
                                                    }
                                                }

                                                if (environment == 'staging') {
                                                    registerParams.staging = true;
                                                }

                                                var registeringDentistResponse = await dcnGateway.dcnGatewayRequests.dentistRegistration(registerParams);
                                                if (registeringDentistResponse.success) {
                                                    $.event.trigger({
                                                        type: 'dentistRegisterSuccessResponse',
                                                        response_data: registeringDentistResponse.data,
                                                        platform_type: params.platform,
                                                        time: new Date()
                                                    });

                                                    dcnGateway.utils.hideGateway(true);
                                                } else if (registeringDentistResponse.error) {
                                                    if (typeof(registeringDentistResponse.message) === 'object' && registeringDentistResponse.message !== null) {
                                                        var error_popup_html = '';
                                                        for(var key in registeringDentistResponse.message) {
                                                            error_popup_html += registeringDentistResponse.message[key]+'<br>';
                                                        }
                                                        $('.dentacoin-login-gateway-container form#dentist-register .step.fourth .step-errors-holder').html('<div class="error-handle">'+error_popup_html+'</div>');
                                                    } else {
                                                        $('.dentacoin-login-gateway-container form#dentist-register .step.fourth .step-errors-holder').html('<div class="error-handle">'+registeringDentistResponse.message+'</div>');
                                                    }
                                                } else {
                                                    dcnGateway.utils.showPopup('Something went wrong, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.', 'alert');
                                                }
                                            }
                                            break;
                                    }
                                });
                                // ====================== /DENTIST LOGIN/ SIGNUP LOGIC ======================

                                $.event.trigger({
                                    type: 'dentacoinLoginGatewayLoaded',
                                    time: new Date()
                                });

                                return false;
                            } else {
                                console.error('Something failed, please contact developer.');
                                return false;
                            }
                        });
                    }

                    $(document).on('click', '.dentacoin-login-gateway-container', function(event) {
                        if (event.target.className == 'dentacoin-login-gateway-container') {
                            dcnGateway.utils.hideGateway(true);
                        }
                    });

                    $(document).on('click', '.dentacoin-login-gateway-close', function(event) {
                        dcnGateway.utils.hideGateway(true);
                    });

                    // bind gateway showing event
                    $(document).on('click', '.open-dentacoin-gateway', function() {
                        if ($(this).hasClass('patient-login')) {
                            showGateway('patient-login');
                        } else if ($(this).hasClass('patient-register')) {
                            showGateway('patient-register');
                        } else if ($(this).hasClass('dentist-login')) {
                            showGateway('dentist-login');
                        } else if ($(this).hasClass('dentist-register')) {
                            showGateway('dentist-register');
                        } else {
                            showGateway('patient-login');
                        }
                    });

                    $(document).on('openPatientLogin', function (event) {
                        showGateway('patient-login');
                    });

                    $(document).on('openPatientRegister', function (event) {
                        showGateway('patient-register');
                    });

                    $(document).on('openDentistLogin', function (event) {
                        showGateway('dentist-login');
                    });

                    $(document).on('openDentistRegister', function (event) {
                        showGateway('dentist-register');
                    });

                    if (hasOwnProperty.call(getParams, 'dcn-gateway-type')) {
                        if (['patient-login', 'patient-register', 'dentist-login', 'dentist-register'].indexOf(getParams['dcn-gateway-type']) == -1) {
                            console.error('Wrong dcn-gateway-type get parameter value in the url.');
                        } else {
                            showGateway(getParams['dcn-gateway-type']);
                        }
                    } else if (hasOwnProperty.call(getParams, 'inviter') || hasOwnProperty.call(getParams, 'show-patient-register')) {
                        showGateway('patient-register');
                    } else if (hasOwnProperty.call(getParams, 'show-login')) {
                        showGateway('patient-login');
                    } else if (hasOwnProperty.call(getParams, 'temp-data-key') && hasOwnProperty.call(getParams, 'temp-data-id')) {
                        showGateway('incompleted-dentist-register', {
                            key: getParams['temp-data-key'],
                            id: getParams['temp-data-id']
                        });
                    }
                });
            }
        }
    };
}