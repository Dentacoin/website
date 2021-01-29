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
                        console.log(success, 'success');
                    },
                    function(error) {
                        console.log(error, 'error');
                    }
                )
            } else {
                console.error('Missing Apple login cordova plugin, please install cordova-plugin-sign-in-with-apple.');
                alert('Something went wrong with the external login provider, please try again later or contact <a href="mailto:admin@dentacoin.com">admin@dentacoin.com</a>.');
            }
        }
    } else {
        console.error('Not a cordova project.');
    }
});

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