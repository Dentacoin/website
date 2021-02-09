$('body').on('click', '.apple-custom-btn', function() {
    if (hasOwnProperty.call(window, 'cordova')) {
        if(document.cookie.indexOf('strictly_necessary_policy=') == -1 && !$(this).hasClass('mobile-app')) {
            customAppleEvent('cannotLoginBecauseOfMissingCookies', '');
        } else {
            var this_btn = $(this);

            //based on some logic and conditions you can add or remove this attribute, if custom-stopped="true" the apple login won't proceed
            if ($(this).attr('custom-stopper') && $(this).attr('custom-stopper') == 'true') {
                customAppleEvent('customCivicFbStopperTriggered', '');
                return false;
            }

            if (hasOwnProperty.call(window.cordova.plugins, 'SignInWithApple')) {
                window.cordova.plugins.SignInWithApple.signin(
                    { requestedScopes: [0, 1] },
                    function(success) {
                        // send token to backend
                        if (this_btn.hasClass('vanilla-js-event')) {
                            if (this_btn.hasClass('is-dcn-hub-app')) {
                                proceedWithAppleLogin(success, this_btn, 'desktop', 'vanilla-js-event', true);
                            } else {
                                proceedWithAppleLogin(success, this_btn, 'desktop', 'vanilla-js-event', false);
                            }
                        } else {
                            proceedWithAppleLogin(success, this_btn, 'desktop');
                        }
                    },
                    function(error) {
                        console.log(error, 'error');
                        alert('Something went wrong with the external login provider, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.');
                    }
                )
            } else {
                console.error('Missing Apple login cordova plugin, please install cordova-plugin-sign-in-with-apple.');
                alert('Something went wrong with the external login provider, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.');
            }
        }
    } else {
        console.error('Not a cordova project.');
        alert('Something went wrong with the external login provider, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.');
    }
});

function proceedWithAppleLogin(response, this_btn, type, event_type, is_dcn_hub_app) {
    customAppleEvent('receivedAppleToken', 'Received apple token successfully.', response, type, event_type);

    var register_data = {
        platform: this_btn.attr('data-platform'),
        auth_token: response.identityToken,
        social_network: 'apple',
        type: 'patient'
    };

    if (is_dcn_hub_app != undefined && is_dcn_hub_app) {
        register_data.is_dcn_hub_app = true;
    }

    if (getCookie('first_test') != '') {
        register_data.country_id = JSON.parse(decodeURIComponent(getCookie('first_test')))['location'];
    }

    if (this_btn.attr('data-inviter') != undefined) {
        register_data.invited_by = this_btn.attr('data-inviter');
    }

    if (this_btn.attr('data-inviteid') != undefined) {
        register_data.inviteid = this_btn.attr('data-inviteid');
    }

    //exchanging the token for user data
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: this_btn.attr('data-url'),
        data: register_data,
        success: function(data) {
            console.log(data, 'data');
            if (data.success) {
                if (data.deleted) {
                    var redirectUrl;
                    if (data.appeal) {
                        redirectUrl = 'https://account.dentacoin.com/blocked-account-thank-you?platform=' + this_btn.attr('data-platform');
                    } else {
                        redirectUrl = 'https://account.dentacoin.com/blocked-account?platform=' + this_btn.attr('data-platform') + '&key=' + encodeURIComponent(data.data.encrypted_id);
                    }

                    if (type == 'mobile') {
                        hideDcnGatewayLoader();
                        window.open(redirectUrl);
                    } else if (type == 'desktop') {
                        window.location.replace(redirectUrl);
                    }
                    return false;
                } else if (data.bad_ip || data.suspicious_admin) {
                    var on_hold_type = '';
                    if (data.bad_ip) {
                        on_hold_type = '&on-hold-type=bad_ip';
                    } else if (data.suspicious_admin) {
                        on_hold_type = '&on-hold-type=suspicious_admin';
                    }

                    var redirectUrl;
                    if (data.appeal) {
                        redirectUrl = 'https://account.dentacoin.com/account-on-hold-thank-you?platform=' + this_btn.attr('data-platform');
                    } else {
                        redirectUrl = 'https://account.dentacoin.com/account-on-hold?platform=' + this_btn.attr('data-platform') + '&key=' + encodeURIComponent(data.data.encrypted_id) + on_hold_type;
                    }

                    if (type == 'mobile') {
                        hideDcnGatewayLoader();
                        window.open(redirectUrl);
                    } else if (type == 'desktop') {
                        window.location.replace(redirectUrl);
                    }
                    return false;
                } else if (data.new_account) {
                    console.log('successfulApplePatientRegistration');
                    customAppleEvent('successfulApplePatientRegistration', '', null, type, event_type);
                } else {
                    console.log('successfulApplePatientLogin');
                    customAppleEvent('successfulApplePatientLogin', '', null, type, event_type);
                }

                if (data.data.email == '' || data.data.email == null) {
                    console.log('registeredAccountMissingEmail');
                    customAppleEvent('registeredAccountMissingEmail', '', data, type);
                } else {
                    if (type == 'mobile') {
                        console.log('patientAuthSuccessResponse');
                        customAppleEvent('hideGatewayLoader', '');
                        customAppleEvent('patientAuthSuccessResponse', 'Request to CoreDB-API succeed.', data, type, event_type);
                    } else if (type == 'desktop') {
                        console.log('patientProceedWithCreatingSession');
                        if (event_type) {
                            customAppleEvent('hideGatewayLoader', '');
                            customAppleEvent('patientAuthSuccessResponse', 'Request to CoreDB-API succeed.', data, type, event_type);
                        } else {
                            customAppleEvent('patientProceedWithCreatingSession', 'Request to CoreDB-API succeed.', data, type);
                        }
                    }
                }
            } else if (!data.success) {
                if (data.already_existing_patient_relation) {

                } else {
                    customAppleEvent('patientAuthErrorResponse', 'Request to CoreDB-API succeed, but conditions failed.', data, type, event_type);
                }
            } else {
                customAppleEvent('noCoreDBApiConnection', 'Request to CoreDB-API failed.', null, type, event_type);
            }
        },
        error: function() {
            //ajax to the external url is not working properly
            customAppleEvent('noCoreDBApiConnection', 'Request to CoreDB-API failed.', null, type, event_type);
        }
    });
}

//custom function for firing events
function customAppleEvent(type, message, response_data, event_type, vanilla_js_event) {
    console.log(vanilla_js_event, 'customAppleEvent');
    if ((event_type != undefined && event_type == 'mobile') || vanilla_js_event) {
        var event_obj = {
            message: message,
            platform_type: 'apple',
            time: new Date()
        };

        if (response_data != undefined) {
            event_obj.response_data = response_data;
        }

        const event = new CustomEvent(type, {
            detail: event_obj
        });
        document.dispatchEvent(event);
    } else {
        var event_obj = {
            type: type,
            message: message,
            platform_type: 'apple',
            time: new Date()
        };

        if (response_data != undefined) {
            event_obj.response_data = response_data;
        }
        $.event.trigger(event_obj);
    }
}

function getCookie(name) {
    name = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function hideDcnGatewayLoader() {
    if ($('.dentacoin-login-gateway-response-layer').length) {
        $('.dentacoin-login-gateway-response-layer').hide();
    }
}