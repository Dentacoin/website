<div class="text-center enrich-profile-container" data-type="clinic">
    <button class="close-custom-popup cancel-custom-popup">×</button>
    <svg class="check-icon" version="1.1" id="Layer_1" xmlns:x="&ns_extend;" xmlns:i="&ns_ai;" xmlns:graph="&ns_graphs;"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 82"style="enable-background:new 0 0 64 82;" xml:space="preserve"><style type="text/css">.st1{fill-rule:evenodd;clip-rule:evenodd;}</style><metadata><sfw  xmlns="&ns_sfw;"><slices></slices><sliceSourceBounds  bottomLeftOrigin="true" height="82" width="64" x="18" y="34"></sliceSourceBounds></sfw></metadata><g transform="translate(0,-952.36218)"><g><path class="gateway-platform-fill" d="M31.7,952.4c-0.1,0-0.3,0.1-0.4,0.1l-30,11c-0.8,0.3-1.3,1-1.3,1.9v33c0,7.8,4.4,14.3,10.3,20c5.9,5.7,13.5,10.7,20.5,15.7c0.7,0.5,1.6,0.5,2.3,0c7-5,14.6-10,20.5-15.7c5.9-5.7,10.3-12.2,10.3-20v-33c0-0.8-0.5-1.6-1.3-1.9l-30-11C32.4,952.4,32,952.3,31.7,952.4z M32,956.5l28,10.3v31.6c0,6.3-3.5,11.8-9.1,17.1c-5.2,5-12.2,9.7-18.9,14.4c-6.7-4.7-13.7-9.4-18.9-14.4c-5.5-5.3-9.1-10.8-9.1-17.1v-31.6L32,956.5z"/></g></g><g><g><path class="st1 gateway-platform-fill" d="M50.3,25.9c0.6,0.6,1.2,1.2,1.8,1.8c0.9,0.9,0.9,2.5,0,3.4C45.6,37.5,39.1,44,32.6,50.5c-3.3,3.3-3.5,3.3-6.8,0c-3.3-3.3-6.7-6.7-10-10c-0.9-0.9-0.9-2.5,0-3.4c0.6-0.6,1.2-1.2,1.8-1.8c0.9-0.9,2.5-0.9,3.4,0c2.7,2.7,5.4,5.4,8.2,8.2c5.9-5.9,11.7-11.7,17.6-17.6C47.8,25,49.3,25,50.3,25.9z"/></g></g></svg>
    <h2 class="lato-bold dentacoin-login-gateway-fs-30 popup-title">CLINIC PROFILE VERIFICATION</h2>
    <div class="padding-top-20 padding-bottom-15 dentacoin-login-gateway-fs-20">Thank you for submitting your registration form! Our onboarding team will now assess the data you provided to ensure that it represents a real clinic.</div>
    <div class="padding-bottom-35 dentacoin-login-gateway-fs-20 {{--border-bottom--}}">You will receive an email as soon as the verification process is completed.</div>
    <h2 class="lato-bold dentacoin-login-gateway-fs-30 above-form-title lato-bold dentacoin-login-gateway-fs-30">While waiting, why don’t you enrich your profile?</h2>
    {{--<form method="POST" action="{{ route('invite-your-clinic') }}" id="invite-your-clinic">
        <h3 class="line-crossed margin-bottom-20 dentacoin-login-gateway-fs-0"><span class="dentacoin-login-gateway-fs-16">Invite your clinic to join.</span></h3>
        <div class="padding-bottom-20 field-parent">
            <div class="custom-google-label-style module" data-input-colorful-border="true">
                <label for="invite-clinic-name">Name:</label>
                <input class="full-rounded form-field" name="invite-clinic-name" maxlength="250" id="invite-clinic-name" type="text"/>
            </div>
        </div>
        <div class="padding-bottom-20 field-parent">
            <div class="custom-google-label-style module" data-input-colorful-border="true">
                <label for="invite-clinic-email">Email:</label>
                <input class="full-rounded form-field" name="invite-clinic-email" maxlength="50" id="invite-clinic-email" type="email"/>
            </div>
        </div>
        <div class="padding-bottom-20 field-parent">
            <div class="custom-google-label-style module" data-input-colorful-border="true">
                <label for="invite-clinic-address">Address:</label>
                <input class="full-rounded form-field" name="invite-clinic-address" maxlength="250" id="invite-clinic-address" type="text"/>
            </div>
        </div>
        <div class="padding-bottom-20 field-parent">
            <div class="custom-google-label-style module" data-input-colorful-border="true">
                <label for="invite-clinic-website">Website:</label>
                <input class="full-rounded form-field" name="invite-clinic-website" maxlength="500" id="invite-clinic-website" type="url"/>
            </div>
        </div>
        <div class="padding-bottom-20 field-parent">
            <div class="custom-google-label-style module" data-input-colorful-border="true">
                <label for="invite-clinic-phone">Phone:</label>
                <input class="full-rounded form-field" name="invite-clinic-phone" maxlength="20" id="invite-clinic-phone" type="number"/>
            </div>
        </div>
        <div class="btn-container padding-top-10 padding-bottom-30 margin-bottom-30 border-bottom text-center">
            <input type="button" class="margin-top-xs-10 blue-green-white-btn min-width-200" value="CLOSE"/>
            <input type="submit" class="margin-top-xs-10 white-blue-green-btn min-width-200" value="INVITE"/>
        </div>
    </form>--}}
    <form method="POST" id="enrich-profile">
        <div class="form-row">
            <textarea rows="4" id="description" maxlength="512" placeholder="Add short description (max. 512 characters)"></textarea>
            <div class="dentacoin-login-gateway-fs-14 calibri-light">This will make your profile stand out and improve your positions in Google.</div>
        </div>
        <div class="btn-container text-center padding-bottom-30 padding-top-30">
            <input type="submit" class="platform-button gateway-platform-background-color-important dentacoin-login-gateway-fs-20" value="SAVE"/>
        </div>
    </form>
</div>