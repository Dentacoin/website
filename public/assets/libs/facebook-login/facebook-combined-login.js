//binding click event for all the facebook login btns
$('body').on('click', '.facebook-custom-btn', function(rerequest){
    if(document.cookie.indexOf('strictly_necessary_policy=') == -1 && !$(this).hasClass('mobile-app')) {
        customFacebookEvent('cannotLoginBecauseOfMissingCookies');
    } else {
        var this_btn = $(this);
        const fb_config = {
            app_id: '1906201509652855'
        };
        customFacebookEvent('facebookCustomBtnClicked', 'Button #facebook-custom-btn was clicked.');

        //based on some logic and conditions you can add or remove this attribute, if custom-stopped="true" the facebook login won't proceed
        if ($(this).attr('custom-stopper') && $(this).attr('custom-stopper') == 'true') {
            customFacebookEvent('customCivicFbStopperTriggered', '');
            return false;
        }

        var obj = {
            //scope: 'email,first_name,last_name,user_gender,user_birthday,user_location'
            scope: 'email',
            auth_type: 'rerequest'
        };

        if (this_btn.hasClass('mobile-app')) {
            // loading facebook from mobile app

            if (typeof(facebookConnectPlugin) != 'undefined') {
                console.log('Facebook login type - facebookConnectPlugin');
                facebookConnectPlugin.login(['email'],
                    function(response) {
                        console.log('response: ', response);
                        proceedWithFacebookLogin(response, this_btn, 'mobile');
                    },
                    function loginError (error) {
                        console.log(error);
                        alert('Something went wrong with the external login provider, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.');
                    }
                );
            } else if (typeof(openFB) != 'undefined') {
                console.log('Facebook login type - openFB');
                openFB.init({appId: fb_config.app_id});

                openFB.login(
                    function(response) {
                        console.log(response, 'response');
                        proceedWithFacebookLogin(response, this_btn, 'mobile');
                    },
                    obj
                );
            } else {
                alert('Something went wrong with the external login provider, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.');
            }
        } else {
            // loading facebook from browser

            if (typeof(FB) != 'object') {
                $.getScript('https://connect.facebook.net/bg_BG/sdk.js', function( data, textStatus, jqxhr ) {
                    proceedWithFacebookInstanceCreating();
                }).fail(function() {
                    alert('Looks like your browser is blocking Facebook login. Please check and edit your privacy settings in order to login in Dentacoin tools.');
                });
            } else {
                proceedWithFacebookInstanceCreating();
            }

            async function proceedWithFacebookInstanceCreating() {
                //application init
                window.fbAsyncInit = await function () {
                    FB.init({
                        appId: fb_config.app_id,
                        cookie: true,
                        xfbml: true,
                        version: 'v2.8'
                    });
                };

                FB.login(function (response) {
                    console.log(response, 'response');
                    // class vanilla-js-event is used when we are using the facebook combined login library without going thru the Dentacoin gateway
                    if (this_btn.hasClass('vanilla-js-event')) {
                        proceedWithFacebookLogin(response, this_btn, 'desktop', 'vanilla-js-event');
                    } else {
                        proceedWithFacebookLogin(response, this_btn, 'desktop');
                    }
                }, obj);
            }
        }
    }
});

function proceedWithFacebookLogin(response, this_btn, type, event_type) {
    if (response.authResponse && response.status == 'connected') {
        //fbGetData();

        //setTimeout(function() {
        customFacebookEvent('receivedFacebookToken', 'Received facebook token successfully.', response, type, event_type);

        var register_data = {
            platform: this_btn.attr('data-platform'),
            auth_token: response.authResponse.accessToken,
            social_network: 'fb',
            type: 'patient'
        };

        if (getCookie('first_test') != '') {
            register_data.country_id = JSON.parse(decodeURIComponent(getCookie('first_test')))['location'];
        }

        if (this_btn.attr('data-inviter') != undefined) {
            register_data.invited_by = this_btn.attr('data-inviter');
        }

        if (this_btn.attr('data-is-dentist-patient-relation-creation') != undefined) {
            register_data.is_dentist_patient_relation_creation = true;
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
                if (data.success) {
                    if (data.deleted) {
                        var redirectUrl;
                        if (data.appeal) {
                            customFacebookEvent('hideLoader', '', null, type, event_type);
                            redirectUrl = 'https://account.dentacoin.com/blocked-account-thank-you?platform=' + this_btn.attr('data-platform');
                        } else {
                            customFacebookEvent('hideLoader', '', null, type, event_type);
                            redirectUrl = 'https://account.dentacoin.com/blocked-account?platform=' + this_btn.attr('data-platform') + '&key=' + encodeURIComponent(data.data.encrypted_id);
                        }

                        if (type == 'mobile') {
                            hideDcnGatewayLoader();
                            var newWindow = window.open(redirectUrl);
                            // fix, because window.open not working on DV app for whatever reason
                            if (newWindow == null) {
                                window.cordova.InAppBrowser.open(redirectUrl);
                            }
                        } else if (type == 'desktop') {
                            window.location.replace(redirectUrl);
                        }
                        return false;
                    } else if (data.bad_ip || data.suspicious_admin) {
                        var on_hold_type = '';
                        if (data.bad_ip) {
                            console.log('bad_ip');
                            on_hold_type = '&on-hold-type=bad_ip';
                        } else if (data.suspicious_admin) {
                            console.log('suspicious_admin');
                            on_hold_type = '&on-hold-type=suspicious_admin';
                        }

                        var redirectUrl;
                        if (data.appeal) {
                            customFacebookEvent('hideLoader', '', null, type, event_type);
                            redirectUrl = 'https://account.dentacoin.com/account-on-hold-thank-you?platform=' + this_btn.attr('data-platform');
                        } else {
                            customFacebookEvent('hideLoader', '', null, type, event_type);
                            redirectUrl = 'https://account.dentacoin.com/account-on-hold?platform=' + this_btn.attr('data-platform') + '&key=' + encodeURIComponent(data.data.encrypted_id) + on_hold_type;
                        }

                        if (type == 'mobile') {
                            console.log('type mobile');
                            hideDcnGatewayLoader();
                            var newWindow = window.open(redirectUrl);
                            // fix, because window.open not working on DV app for whatever reason
                            if (newWindow == null) {
                                window.cordova.InAppBrowser.open(redirectUrl);
                            }
                        } else if (type == 'desktop') {
                            console.log('type desktop');
                            window.location.replace(redirectUrl);
                        }
                        return false;
                    } else if (data.rejected_manual_verification) {
                        customFacebookEvent('hideLoader', '', null, type, event_type);
                        var redirectUrl = 'https://account.dentacoin.com/blocked-account?platform=' + this_btn.attr('data-platform') + '&key=' + encodeURIComponent(data.data.encrypted_id);

                        if (type == 'mobile') {
                            hideDcnGatewayLoader();
                            var newWindow = window.open(redirectUrl);
                            // fix, because window.open not working on DV app for whatever reason
                            if (newWindow == null) {
                                window.cordova.InAppBrowser.open(redirectUrl);
                            }
                        } else if (type == 'desktop') {
                            window.location.replace(redirectUrl);
                        }
                        return false;
                    } else if (data.is_vpn) {
                        customFacebookEvent('hideLoader', '', null, type, event_type);
                        var redirectUrl = 'https://account.dentacoin.com/vpn-block?platform=' + this_btn.attr('data-platform');

                        if (type == 'mobile') {
                            hideDcnGatewayLoader();
                            var newWindow = window.open(redirectUrl);
                            // fix, because window.open not working on DV app for whatever reason
                            if (newWindow == null) {
                                window.cordova.InAppBrowser.open(redirectUrl);
                            }
                        } else if (type == 'desktop') {
                            window.location.replace(redirectUrl);
                        }
                        return false;
                    } else if (data.new_account) {
                        console.log('successfulFacebookPatientRegistration');
                        customFacebookEvent('successfulFacebookPatientRegistration', '', null, type, event_type);
                    } else {
                        console.log('successfulFacebookPatientLogin');
                        customFacebookEvent('successfulFacebookPatientLogin', '', null, type, event_type);
                    }

                    if (data.data.email == '' || data.data.email == null) {
                        console.log('registeredAccountMissingEmail');
                        customFacebookEvent('registeredAccountMissingEmail', '', data, type);
                    } else {
                        if (type == 'mobile') {
                            console.log('patientAuthSuccessResponse');
                            customFacebookEvent('hideGatewayLoader', '');
                            customFacebookEvent('patientAuthSuccessResponse', 'Request to CoreDB-API succeed.', data, type, event_type);
                        } else if (type == 'desktop') {
                            console.log('patientProceedWithCreatingSession');
                            if (event_type) {
                                customFacebookEvent('hideGatewayLoader', '');
                                customFacebookEvent('patientAuthSuccessResponse', 'Request to CoreDB-API succeed.', data, type, event_type);
                            } else {
                                customFacebookEvent('patientProceedWithCreatingSession', 'Request to CoreDB-API succeed.', data, type);
                            }
                        }
                    }
                } else if (!data.success) {
                    if (data.already_existing_patient_relation) {

                    } else {
                        customFacebookEvent('patientAuthErrorResponse', 'Request to CoreDB-API succeed, but conditions failed.', data, type, event_type);
                    }
                } else {
                    customFacebookEvent('noCoreDBApiConnection', 'Request to CoreDB-API failed.', null, type, event_type);
                }
            },
            error: function() {
                //ajax to the external url is not working properly
                customFacebookEvent('noCoreDBApiConnection', 'Request to CoreDB-API failed.', null, type, event_type);
            }
        });
        //}, 5000);
    } else {
        console.log('noExternalLoginProviderConnection');
        customFacebookEvent('noExternalLoginProviderConnection', 'Request to Facebook failed while exchanging token for data.', null, type);
    }
}

    //exchanging token for data
    /*function fbGetData() {
        FB.api('/me?fields=id,email,name,permissions,link', function (response) {
            FB.api(
                "/"+response.id+"/",
                function (second_response) {
                    console.log(second_response, 'second_response');
                }
            );
        });
    }*/

//custom function for firing events
function customFacebookEvent(type, message, response_data, device_type, event_type) {
    if ((device_type != undefined && device_type == 'mobile') || event_type == 'vanilla-js-event') {
        var event_obj = {
            message: message,
            platform_type: 'facebook',
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
            platform_type: 'facebook',
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