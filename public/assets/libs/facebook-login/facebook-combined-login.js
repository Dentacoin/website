$.getScript('https://connect.facebook.net/bg_BG/sdk.js', function( data, textStatus, jqxhr ) {
    const fb_config = {
        //app_id: '299398824049604',
        app_id: '1906201509652855'
    };

    //application init
    window.fbAsyncInit = function () {
        FB.init({
            appId: fb_config.app_id,
            cookie: true,
            xfbml: true,
            version: 'v2.8'
        });
    };

    //binding click event for all the faceboon login btns
    $('body').on('click', '.facebook-custom-btn', function(rerequest){
        if(document.cookie.indexOf('strictly_necessary_policy=') == -1) {
            customFacebookEvent('cannotLoginBecauseOfMissingCookies', '');
        } else {
            var this_btn = $(this);
            customFacebookEvent('facebookCustomBtnClicked', 'Button #facebook-custom-btn was clicked.');

            //based on some logic and conditions you can add or remove this attribute, if custom-stopped="true" the facebook login won't proceed
            if ($(this).attr('custom-stopper') && $(this).attr('custom-stopper') == 'true') {
                customFacebookEvent('customCivicFbStopperTriggered', '');
                return false;
            }

            var obj = {
                //scope: 'email,first_name,last_name,user_gender,user_birthday,user_location'
                scope: 'email,public_profile,user_link',
                auth_type: 'rerequest'
            };

            FB.login(function (response) {
                if (response.authResponse && response.status == 'connected') {
                    //fbGetData();

                    //setTimeout(function() {
                    customFacebookEvent('receivedFacebookToken', 'Received facebook token successfully.', response);

                    var register_data = {
                        platform: this_btn.attr('data-platform'),
                        auth_token: response.authResponse.accessToken,
                        social_network: 'fb',
                        type: 'patient'
                    };

                    if (dcnGateway.utils.cookies.get('first_test') != '') {
                        register_data.country_id = JSON.parse(decodeURIComponent(dcnGateway.utils.cookies.get('first_test')))['location'];
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
                            if (data.success) {
                                console.log(data.data, 'data.data');
                                if (data.deleted) {
                                    console.log(data.data, 'data.data');
                                    setTimeout(function() {
                                        if (data.appeal) {
                                            window.location.replace('https://account.dentacoin.com/blocked-account-thank-you?platform=' + this_btn.attr('data-platform'));
                                        } else {
                                            window.location.replace('https://account.dentacoin.com/blocked-account?platform=' + this_btn.attr('data-platform') + '&key=' + encodeURIComponent(data.data.encrypted_id));
                                        }
                                        return false;
                                    }, 10000);
                                } else if (data.bad_ip) {
                                    if (data.appeal) {
                                        window.location.replace('https://account.dentacoin.com/account-on-hold-thank-you?platform=' + this_btn.attr('data-platform'));
                                    } else {
                                        window.location.replace('https://account.dentacoin.com/account-on-hold?platform=' + this_btn.attr('data-platform') + '&key=' + encodeURIComponent(data.data.encrypted_id));
                                    }
                                } else if (data.new_account) {
                                    customFacebookEvent('successfulFacebookPatientRegistration', '');
                                } else {
                                    customFacebookEvent('successfulFacebookPatientLogin', '');
                                }

                                if (data.data.email == '' || data.data.email == null) {
                                    customFacebookEvent('registeredAccountMissingEmail', '', data);
                                } else {
                                    customFacebookEvent('patientProceedWithCreatingSession', 'Request to CoreDB-API succeed.', data);
                                }

                            } else if (!data.success) {
                                customFacebookEvent('patientAuthErrorResponse', 'Request to CoreDB-API succeed, but conditions failed.', data);
                            } else {
                                customFacebookEvent('noCoreDBApiConnection', 'Request to CoreDB-API failed.');
                            }
                        },
                        error: function() {
                            //ajax to the external url is not working properly
                            customFacebookEvent('noCoreDBApiConnection', 'Request to CoreDB-API failed.');
                        }
                    });
                    //}, 5000);
                } else {
                    customCivicEvent('noExternalLoginProviderConnection', 'Request to Facebook failed while exchanging token for data.');
                }
            }, obj);
        }
    });

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
}).fail(function() {
    alert('Looks like your browser is blocking Facebook login. Please check and edit your privacy settings in order to login in Dentacoin tools.');
});

/*
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = '//connect.facebook.net/bg_BG/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
*/

//custom function for firing events
function customFacebookEvent(type, message, response_data) {
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