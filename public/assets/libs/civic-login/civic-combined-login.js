(async function() {
    console.log('Civic library loaded');
    await $.getScript('https://dentacoin.com/assets/libs/civic-login/civic-config.js', function() {});

    //load civic lib CSS
    //$('head').append('<link rel="stylesheet" type="text/css" href="https://dentacoin.com/assets/libs/civic-login/civic/civic.min.css?v='+new Date().getTime()+'"/>');
    $('head').append('<link rel="stylesheet" type="text/css" href="https://hosted-sip.civic.com/css/civic-modal.min.css?v='+new Date().getTime()+'"/>');

    //load civic lib JS
    //await $.getScript('https://dentacoin.com/assets/libs/civic-login/civic/civic.min.js', function() {});
    await $.getScript('https://hosted-sip.civic.com/js/civic.sip.min.js?v='+new Date().getTime(), function() {});

    var civic_custom_btn;
    var civicApiVersion;
    var civicActionType;
    var civicAjaxUrl;
    var civic_event_type = 'jquery-event';
    var currentUrl = new URL(window.location.href);

    //init civic
    var civicSipObject = {};
    if ($('body').hasClass('mobile-app-loaded')) {
        if ($('body').hasClass('dentavox-app-loaded')) {
            civicSipObject = {
                appId: civic_config.app_id,
                mobileRedirectUrl: 'dentavoxapp://',
                skipMobileDetectedScreen: true
            };
        } else {
            civicSipObject = {
                appId: civic_config.app_id,
                mobileRedirectUrl: 'hubapp://',
                skipMobileDetectedScreen: true
            };
        }
    } else {
        civicSipObject = {
            appId: civic_config.app_id
        };
    }

    var civicSip = new civic.sip(civicSipObject);

    //bind click event for the civic button
    $('body').on('click', '.civic-custom-btn', function() {
        civic_custom_btn = $(this);
        if (civic_custom_btn.hasClass('type-login')) {
            civicActionType = 'login';
        } else if (civic_custom_btn.hasClass('type-register')) {
            civicActionType = 'register';
        }

        // class vanilla-js-event is used when we are using the facebook combined login library without going thru the Dentacoin gateway
        if (civic_custom_btn.hasClass('vanilla-js-event')) {
            civic_event_type = 'vanilla-js-event';
        }

        if (document.cookie.indexOf('strictly_necessary_policy=') == -1 && !civic_custom_btn.hasClass('mobile-app')) {
            civicCombinedLogin.utils.customCivicEvent('cannotLoginBecauseOfMissingCookies', '', undefined, civic_event_type);
        } else {
            civicCombinedLogin.utils.customCivicEvent('civicCustomBtnClicked', 'Button .civic-custom-btn was clicked.', undefined, civic_event_type);

            if (civic_custom_btn != undefined) {
                civicAjaxUrl = civic_custom_btn.attr('data-url');
                if (civic_custom_btn.attr('custom-stopper') && civic_custom_btn.attr('custom-stopper') == 'true') {
                    civicCombinedLogin.utils.customCivicEvent('customCivicFbStopperTriggered', '', undefined, civic_event_type);
                    return false;
                }
            }

            if (currentUrl.searchParams.get('inviter') != null) {
                window.localStorage.setItem('temp_inviter_data', currentUrl.searchParams.get('inviter'));
            }

            civicSip.signup({
                style: 'popup',
                scopeRequest: civicSip.ScopeRequests.BASIC_SIGNUP
            });
        }
    });

    civicCombinedLogin.utils.customCivicEvent('civicLibLoaded', '', undefined, civic_event_type);

    // Listen for data
    civicSip.on('auth-code-received', function (event) {
        var jwtToken = event.response;
        civicApiVersion = event.clientVersion;

        var get_params = civicCombinedLogin.utils.getGETParameters();
        if (civicCombinedLogin.utils.property_exists(get_params, 'environment_type') && civicCombinedLogin.utils.property_exists(get_params, 'auth_type')) {
            // running civic from mobile application
            if (get_params.environment_type == 'civic-from-mobile-app') {
                if (civicCombinedLogin.utils.property_exists(get_params, 'dev')) {
                    if (get_params.auth_type == 'login') {
                        civicAjaxUrl = 'https://dev-api.dentacoin.com/api/login';
                    } else if (get_params.auth_type == 'register') {
                        civicAjaxUrl = 'https://dev-api.dentacoin.com/api/register';
                    }
                } else {
                    if (get_params.auth_type == 'login') {
                        civicAjaxUrl = 'https://api.dentacoin.com/api/login';
                    } else if (get_params.auth_type == 'register') {
                        civicAjaxUrl = 'https://api.dentacoin.com/api/register';
                    }
                }

                $.ajax({
                    type: 'POST',
                    url: civic_config.url_exchange_token_for_data,
                    data: {
                        jwtToken: jwtToken
                    },
                    dataType: 'json',
                    success: function (ret) {
                        if (!ret.userId) {
                            civicCombinedLogin.utils.customCivicEvent('noUserIdReceived', null, ret, 'event-from-iframe-to-parent');
                        } else {
                            civicCombinedLogin.utils.customCivicEvent('userIdReceived', null, ret, 'event-from-iframe-to-parent');
                            var loginRegisterData = {
                                clientVersion: civicApiVersion,
                                auth_token: jwtToken,
                                social_network: 'civic',
                                type: 'patient'
                            };

                            if (civicCombinedLogin.utils.property_exists(get_params, 'environment_type') && get_params.environment_type == 'civic-from-mobile-app') {
                                loginRegisterData.redirectedFromCivicApp = true;
                            }

                            var currentPlatform;
                            if (get_params.platform_type == 'hubapp') {
                                currentPlatform = 'dentacoin';
                            } else if (get_params.platform_type == 'dentavox') {
                                currentPlatform = 'dentavox';
                            } else {
                                currentPlatform = 'dentacoin';
                            }
                            loginRegisterData.platform = currentPlatform;

                            if (currentUrl.searchParams.get('invite') != null && currentUrl.searchParams.get('inviteid') != null) {
                                loginRegisterData.invited_by = currentUrl.searchParams.get('invite');
                                loginRegisterData.inviteid = currentUrl.searchParams.get('inviteid');
                            }

                            $.ajax({
                                type: 'POST',
                                url: civicAjaxUrl,
                                dataType: 'json',
                                data: loginRegisterData,
                                success: async function(data) {
                                    if (data.success) {
                                        if (data.deleted) {
                                            if (currentPlatform != undefined) {
                                                if (data.appeal) {
                                                    civicCombinedLogin.utils.customCivicEvent('removeCivicIframeAndRedirectToAccountPage', null, {redirect: 'https://account.dentacoin.com/blocked-account-thank-you?platform=' + currentPlatform}, 'event-from-iframe-to-parent');
                                                } else {
                                                    civicCombinedLogin.utils.customCivicEvent('removeCivicIframeAndRedirectToAccountPage', null, {redirect: 'https://account.dentacoin.com/blocked-account?platform=' + currentPlatform + '&key=' + encodeURIComponent(data.data.encrypted_id)}, 'event-from-iframe-to-parent');
                                                }
                                            } else {
                                                if (data.appeal) {
                                                    civicCombinedLogin.utils.customCivicEvent('removeCivicIframeAndRedirectToAccountPage', null, {redirect: 'https://account.dentacoin.com/blocked-account-thank-you'}, 'event-from-iframe-to-parent');
                                                } else {
                                                    civicCombinedLogin.utils.customCivicEvent('removeCivicIframeAndRedirectToAccountPage', null, {redirect: 'https://account.dentacoin.com/blocked-account?key=' + encodeURIComponent(data.data.encrypted_id)}, 'event-from-iframe-to-parent');
                                                }
                                            }
                                            return false;
                                        } else if (data.bad_ip || data.suspicious_admin) {
                                            var on_hold_type = '';
                                            if (data.bad_ip) {
                                                on_hold_type = '&on-hold-type=bad_ip';
                                            } else if (data.suspicious_admin) {
                                                on_hold_type = '&on-hold-type=suspicious_admin';
                                            }

                                            if (currentPlatform != undefined) {
                                                if (data.appeal) {
                                                    civicCombinedLogin.utils.customCivicEvent('removeCivicIframeAndRedirectToAccountPage', null, {redirect: 'https://account.dentacoin.com/account-on-hold-thank-you?platform=' + currentPlatform}, 'event-from-iframe-to-parent');
                                                } else {
                                                    civicCombinedLogin.utils.customCivicEvent('removeCivicIframeAndRedirectToAccountPage', null, {redirect: 'https://account.dentacoin.com/account-on-hold?platform=' + currentPlatform + '&key=' + encodeURIComponent(data.data.encrypted_id) + on_hold_type}, 'event-from-iframe-to-parent');
                                                }
                                            } else {
                                                if (data.appeal) {
                                                    civicCombinedLogin.utils.customCivicEvent('removeCivicIframeAndRedirectToAccountPage', null, {redirect: 'https://account.dentacoin.com/account-on-hold-thank-you'}, 'event-from-iframe-to-parent');
                                                } else {
                                                    civicCombinedLogin.utils.customCivicEvent('removeCivicIframeAndRedirectToAccountPage', null, {redirect: 'https://account.dentacoin.com/account-on-hold?key=' + encodeURIComponent(data.data.encrypted_id) + on_hold_type}, 'event-from-iframe-to-parent');
                                                }
                                            }
                                            return false;
                                        } else if (data.rejected_manual_verification) {
                                            if (currentPlatform != undefined) {
                                                civicCombinedLogin.utils.customCivicEvent('removeCivicIframeAndRedirectToAccountPage', null, {redirect: 'https://account.dentacoin.com/blocked-account?platform=' + currentPlatform + '&key=' + encodeURIComponent(data.data.encrypted_id)}, 'event-from-iframe-to-parent');
                                            } else {
                                                civicCombinedLogin.utils.customCivicEvent('removeCivicIframeAndRedirectToAccountPage', null, {redirect: 'https://account.dentacoin.com/blocked-account?key=' + encodeURIComponent(data.data.encrypted_id)}, 'event-from-iframe-to-parent');
                                            }
                                            return false;
                                        } else if (data.is_vpn) {
                                            if (currentPlatform != undefined) {
                                                civicCombinedLogin.utils.customCivicEvent('removeCivicIframeAndRedirectToAccountPage', null, {redirect: 'https://account.dentacoin.com/vpn-block?platform=' + currentPlatform + '&key=' + encodeURIComponent(data.data.encrypted_id)}, 'event-from-iframe-to-parent');
                                            } else {
                                                civicCombinedLogin.utils.customCivicEvent('removeCivicIframeAndRedirectToAccountPage', null, {redirect: 'https://account.dentacoin.com/vpn-block'}, 'event-from-iframe-to-parent');
                                            }

                                            return false;
                                        } else if (data.new_account) {
                                            civicCombinedLogin.utils.customCivicEvent('successfulCivicPatientRegistration', null, null, 'event-from-iframe-to-parent');
                                        } else {
                                            civicCombinedLogin.utils.customCivicEvent('successfulCivicPatientLogin', null, null, 'event-from-iframe-to-parent');
                                        }

                                        if (data.data.email == '' || data.data.email == null) {
                                            civicCombinedLogin.utils.customCivicEvent('registeredAccountMissingEmail', null, data, 'event-from-iframe-to-parent');
                                        } else {
                                            if (civicActionType == 'login') {
                                                if (civicApiVersion == 'v2') {
                                                    // forbidden
                                                    civicCombinedLogin.utils.customCivicEvent('CivicLegacyAppForbiddenRegistrations', null, data, 'event-from-iframe-to-parent');
                                                } else {
                                                    civicCombinedLogin.utils.customCivicEvent('patientProceedWithCreatingSession', null, data, 'event-from-iframe-to-parent');
                                                }
                                            } else {
                                                civicCombinedLogin.utils.customCivicEvent('patientProceedWithCreatingSession', null, data, 'event-from-iframe-to-parent');
                                            }
                                        }

                                    } else if (!data.success) {
                                        civicCombinedLogin.utils.customCivicEvent('patientAuthErrorResponse', null, data, 'event-from-iframe-to-parent');
                                    } else {
                                        civicCombinedLogin.utils.customCivicEvent('noCoreDBApiConnection', null, data, 'event-from-iframe-to-parent');
                                    }
                                },
                                error: function() {
                                    civicCombinedLogin.utils.customCivicEvent('noCoreDBApiConnection', null, null, 'event-from-iframe-to-parent');
                                }
                            });
                        }
                    },
                    error: function (ret) {
                        console.log(ret, 'ret');
                        civicCombinedLogin.utils.customCivicEvent('noExternalLoginProviderConnection', null, null, 'event-from-iframe-to-parent');
                    }
                });
            }
        } else {
            // running civic from desktop or mobile device, but not mobile application

            if (civicActionType == undefined) {
                civicCombinedLogin.utils.customCivicEvent('civicRead', '', undefined, civic_event_type);

                // overriding civicAjaxUrl is civic library is called from one of the DEV environments
                if (location.hostname == 'dev.dentacoin.com' || location.hostname == 'urgent.dentavox.dentacoin.com' || location.hostname == 'urgent.reviews.dentacoin.com') {
                    civicAjaxUrl = 'https://dev-api.dentacoin.com/api/login';
                } else {
                    civicAjaxUrl = 'https://api.dentacoin.com/api/login';
                }

                proceedWithDentacoinAuth(jwtToken, true);
            } else {
                if (civicActionType == 'register') {
                    if (civicApiVersion == 'v2') {
                        // forbidden
                        civicCombinedLogin.utils.customCivicEvent('CivicLegacyAppForbiddenRegistrations', 'Registering via Civic Legacy App is forbidden.', undefined, civic_event_type);
                    } else if (civicApiVersion == 'v3') {
                        proceedWithDentacoinAuth(jwtToken);
                    }
                } else if (civicActionType == 'login') {
                    proceedWithDentacoinAuth(jwtToken);
                }
            }
        }
    });

    function proceedWithDentacoinAuth(jwtToken, redirectedFromCivicApp) {
        var get_params = civicCombinedLogin.utils.getGETParameters();
        
        $.ajax({
            type: 'POST',
            url: civic_config.url_exchange_token_for_data,
            data: {
                jwtToken: jwtToken
            },
            dataType: 'json',
            success: function (ret) {
                if (!ret.userId) {
                    civicCombinedLogin.utils.customCivicEvent('noUserIdReceived', 'No userId found after civic token/data exchange.', ret, civic_event_type);
                } else {
                    civicCombinedLogin.utils.customCivicEvent('userIdReceived', 'UserId found after civic token/data exchange.', ret, civic_event_type);
                    var loginRegisterData = {
                        clientVersion: civicApiVersion,
                        auth_token: jwtToken,
                        social_network: 'civic',
                        type: 'patient'
                    };

                    if (redirectedFromCivicApp || (civicCombinedLogin.utils.property_exists(get_params, 'environment_type') && get_params.environment_type == 'civic-from-mobile-app')) {
                        loginRegisterData.redirectedFromCivicApp = true;
                    }

                    var currentPlatform;
                    if (civic_custom_btn != undefined) {
                        currentPlatform = civic_custom_btn.attr('data-platform');
                        loginRegisterData.platform = currentPlatform;
                    } else {
                        // civic popup called by library get param condition and not, because of Dentacoin login call
                        if (location.hostname == 'dentacoin.com' || location.hostname == 'dev.dentacoin.com') {
                            currentPlatform = 'dentacoin';
                        } else if (location.hostname == 'reviews.dentacoin.com' || location.hostname == 'urgent.reviews.dentacoin.com') {
                            currentPlatform = 'trusted-reviews';
                        } else if (location.hostname == 'dentavox.dentacoin.com' || location.hostname == 'urgent.dentavox.dentacoin.com') {
                            currentPlatform = 'dentavox';
                        } else if (location.hostname == 'dentists.dentacoin.com') {
                            currentPlatform = 'dentists';
                        } else if (location.hostname == 'assurance.dentacoin.com') {
                            currentPlatform = 'assurance';
                        }
                        loginRegisterData.platform = currentPlatform;
                    }

                    if (typeof(dcnGateway) != 'undefined') {
                        if (dcnGateway.utils.cookies.get('first_test') != '') {
                            loginRegisterData.country_id = JSON.parse(decodeURIComponent(dcnGateway.utils.cookies.get('first_test')))['location'];
                        }
                    }

                    if ($('.patient .form-register').length) {
                        if ($('.patient .form-register [name="user_patient_type[]"]:checked').val() != 'undefined') {
                            var tempArr = [];
                            for (var i = 0, len = $('.patient .form-register [name="user_patient_type[]"]:checked').length; i < len; i+=1) {
                                tempArr.push($('.patient .form-register [name="user_patient_type[]"]:checked').eq(i).val());
                            }

                            loginRegisterData.user_patient_type = JSON.stringify(tempArr);
                        }
                    }

                    if (civic_custom_btn != undefined && civic_custom_btn.attr('data-inviter') != undefined) {
                        loginRegisterData.invited_by = civic_custom_btn.attr('data-inviter');
                    } else if (window.localStorage.getItem('temp_inviter_data') != null) {
                        loginRegisterData.invited_by = window.localStorage.getItem('temp_inviter_data');
                        window.localStorage.removeItem('temp_inviter_data');
                    }

                    if (civic_custom_btn != undefined && civic_custom_btn.attr('data-inviteid') != undefined) {
                        loginRegisterData.inviteid = civic_custom_btn.attr('data-inviteid');
                    }

                    $.ajax({
                        type: 'POST',
                        url: civicAjaxUrl,
                        dataType: 'json',
                        data: loginRegisterData,
                        success: async function(data) {
                            if (data.success) {
                                if (data.deleted) {
                                    if (currentPlatform != undefined) {
                                        civicCombinedLogin.utils.customCivicEvent('hideLoader', '', null, civic_event_type);
                                        if (data.appeal) {
                                            window.location.replace('https://account.dentacoin.com/blocked-account-thank-you?platform=' + currentPlatform);
                                        } else {
                                            // type, message, response_data, event_type
                                            window.location.replace('https://account.dentacoin.com/blocked-account?platform=' + currentPlatform + '&key=' + encodeURIComponent(data.data.encrypted_id));
                                        }
                                    } else {
                                        civicCombinedLogin.utils.customCivicEvent('hideLoader', '', null, civic_event_type);
                                        if (data.appeal) {
                                            window.location.replace('https://account.dentacoin.com/blocked-account-thank-you');
                                        } else {
                                            window.location.replace('https://account.dentacoin.com/blocked-account?key=' + encodeURIComponent(data.data.encrypted_id));
                                        }
                                    }
                                    return false;
                                } else if (data.bad_ip || data.suspicious_admin) {
                                    var on_hold_type = '';
                                    if (data.bad_ip) {
                                        on_hold_type = '&on-hold-type=bad_ip';
                                    } else if (data.suspicious_admin) {
                                        on_hold_type = '&on-hold-type=suspicious_admin';
                                    }

                                    if (currentPlatform != undefined) {
                                        civicCombinedLogin.utils.customCivicEvent('hideLoader', '', null, civic_event_type);
                                        if (data.appeal) {
                                            window.location.replace('https://account.dentacoin.com/account-on-hold-thank-you?platform=' + currentPlatform);
                                        } else {
                                            window.location.replace('https://account.dentacoin.com/account-on-hold?platform=' + currentPlatform + '&key=' + encodeURIComponent(data.data.encrypted_id) + on_hold_type);
                                        }
                                    } else {
                                        civicCombinedLogin.utils.customCivicEvent('hideLoader', '', null, civic_event_type);
                                        if (data.appeal) {
                                            window.location.replace('https://account.dentacoin.com/account-on-hold-thank-you');
                                        } else {
                                            window.location.replace('https://account.dentacoin.com/account-on-hold?key=' + encodeURIComponent(data.data.encrypted_id) + on_hold_type);
                                        }
                                    }
                                    return false;
                                } else if (data.rejected_manual_verification) {
                                    civicCombinedLogin.utils.customCivicEvent('hideLoader', '', null, civic_event_type);
                                    if (currentPlatform != undefined) {
                                        window.location.replace('https://account.dentacoin.com/blocked-account?platform=' + currentPlatform + '&key=' + encodeURIComponent(data.data.encrypted_id));
                                    } else {
                                        window.location.replace('https://account.dentacoin.com/blocked-account?key=' + encodeURIComponent(data.data.encrypted_id));
                                    }
                                    return false;
                                } else if (data.is_vpn) {
                                    civicCombinedLogin.utils.customCivicEvent('hideLoader', '', null, civic_event_type);
                                    if (currentPlatform != undefined) {
                                        window.location.replace('https://account.dentacoin.com/vpn-block?platform=' + currentPlatform + '&key=' + encodeURIComponent(data.data.encrypted_id));
                                    } else {
                                        window.location.replace('https://account.dentacoin.com/vpn-block');
                                    }
                                    return false;
                                } else if (data.new_account) {
                                    civicCombinedLogin.utils.customCivicEvent('successfulCivicPatientRegistration', '', undefined, civic_event_type);
                                } else {
                                    civicCombinedLogin.utils.customCivicEvent('successfulCivicPatientLogin', '', undefined, civic_event_type);
                                }

                                if (data.data.email == '' || data.data.email == null) {
                                    civicCombinedLogin.utils.customCivicEvent('registeredAccountMissingEmail', '', data, civic_event_type);
                                } else {
                                    if (civicActionType == 'login') {
                                        if (civicApiVersion == 'v2') {
                                            // forbidden
                                            civicCombinedLogin.utils.customCivicEvent('CivicLegacyAppForbiddenRegistrations', 'Registering via Civic Legacy App is forbidden.', undefined, civic_event_type);
                                        } else {
                                            if (civic_event_type == 'vanilla-js-event') {
                                                civicCombinedLogin.utils.customCivicEvent('hideGatewayLoader', '');
                                                civicCombinedLogin.utils.customCivicEvent('patientAuthSuccessResponse', 'Request to CoreDB-API succeed.', data, civic_event_type);
                                            } else {
                                                civicCombinedLogin.utils.customCivicEvent('patientProceedWithCreatingSession', 'Request to CoreDB-API succeed.', data, civic_event_type);
                                            }
                                        }
                                    } else {
                                        if (civic_event_type == 'vanilla-js-event') {
                                            civicCombinedLogin.utils.customCivicEvent('hideGatewayLoader', '');
                                            civicCombinedLogin.utils.customCivicEvent('patientAuthSuccessResponse', 'Request to CoreDB-API succeed.', data, civic_event_type);
                                        } else {
                                            civicCombinedLogin.utils.customCivicEvent('patientProceedWithCreatingSession', 'Request to CoreDB-API succeed.', data, civic_event_type);
                                        }
                                    }
                                }

                            } else if (!data.success) {
                                civicCombinedLogin.utils.customCivicEvent('patientAuthErrorResponse', 'Request to CoreDB-API succeed, but conditions failed.', data, civic_event_type);
                            } else {
                                civicCombinedLogin.utils.customCivicEvent('noCoreDBApiConnection', 'Request to CoreDB-API failed.', undefined, civic_event_type);
                            }
                        },
                        error: function() {
                            civicCombinedLogin.utils.customCivicEvent('noCoreDBApiConnection', 'Request to CoreDB-API failed.', undefined, civic_event_type);
                        }
                    });
                }
            },
            error: function (ret) {
                console.log(ret, 'ret');
                civicCombinedLogin.utils.customCivicEvent('noExternalLoginProviderConnection', 'Request to Civic NodeJS API failed while exchanging token for data.', undefined, civic_event_type);
            }
        });
    }

    civicSip.on('user-cancelled', function (event) {
        civicCombinedLogin.utils.customCivicEvent('civicUserCancelled', '');
    });

    civicSip.on('read', function (event) {
        civicCombinedLogin.utils.customCivicEvent('civicRead', '', undefined, civic_event_type);
    });

    civicSip.on('civic-sip-error', function (error) {
        civicCombinedLogin.utils.customCivicEvent('civicSipError', '', undefined, civic_event_type);
    });
})();

var civicCombinedLogin = {
    utils: {
        customCivicEvent: function(type, message, response_data, event_type) {
            if (event_type == 'vanilla-js-event') {
                var event_obj = {
                    message: message,
                    platform_type: 'civic',
                    time: new Date()
                };

                if (response_data != undefined) {
                    event_obj.response_data = response_data;
                }

                const event = new CustomEvent(type, {
                    detail: event_obj
                });
                document.dispatchEvent(event);
            } else if (event_type == 'event-from-iframe-to-parent') {
                window.parent.postMessage(
                    {
                        event_id: type,
                        data: response_data
                    },
                    "*"
                );
            } else {
                var event_obj = {
                    type: type,
                    message: message,
                    platform_type: 'civic',
                    time: new Date()
                };

                if (response_data != undefined) {
                    event_obj.response_data = response_data;
                }

                $.event.trigger(event_obj);
            }
        },
        getGETParameters: function() {
            var prmstr = window.location.search.substr(1);
            return prmstr != null && prmstr != "" ? civicCombinedLogin.utils.transformToAssocArray(prmstr) : {};
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
        property_exists: function(object, key) {
            return object ? hasOwnProperty.call(object, key) : false;
        }
    }
};