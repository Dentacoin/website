<form method="POST" enctype="multipart/form-data" action="{{ route('submit-media-inquiries') }}">
    <div class="section-title">MEDIA INQUIRIES</div>
    <div class="popup-body">
        <div class="padding-bottom-15 field-parent">
            <div class="custom-google-label-style module" data-input-colorful-border="true">
                <label for="sender-name">Name:</label>
                <input type="text" id="sender-name" name="sender-name" maxlength="100" class="full-rounded required form-field"/>
            </div>
        </div>
        <div class="padding-bottom-15 field-parent">
            <div class="custom-google-label-style module" data-input-colorful-border="true">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" maxlength="100" class="full-rounded required form-field"/>
            </div>
        </div>
        <div class="padding-bottom-15 field-parent">
            <div class="custom-google-label-style module" data-input-colorful-border="true">
                <label for="media">Media:</label>
                <input type="text" id="media" name="media" maxlength="250" class="full-rounded required form-field"/>
            </div>
        </div>
        <div class="padding-bottom-15 field-parent">
            <select name="country" class="selectpicker required-select" data-live-search="true" title="Country">
                <option>Afghanistan</option>
                <option>Åland Islands</option>
                <option>Albania</option>
                <option>Algeria</option>
                <option>American Samoa</option>
                <option>Andorra</option>
                <option>Angola</option>
                <option>Anguilla</option>
                <option>Antarctica</option>
                <option>Antigua and Barbuda</option>
                <option>Argentina</option>
                <option>Armenia</option>
                <option>Aruba</option>
                <option>Australia</option>
                <option>Austria</option>
                <option>Azerbaijan</option>
                <option>Bahamas</option>
                <option>Bahrain</option>
                <option>Bangladesh</option>
                <option>Barbados</option>
                <option>Belarus</option>
                <option>Belgium</option>
                <option>Belize</option>
                <option>Benin</option>
                <option>Bermuda</option>
                <option>Bhutan</option>
                <option>Bolivia, Plurinational State of</option>
                <option>Bonaire, Sint Eustatius and Saba</option>
                <option>Bosnia and Herzegovina</option>
                <option>Botswana</option>
                <option>Bouvet Island</option>
                <option>Brazil</option>
                <option>British Indian Ocean Territory</option>
                <option>Brunei Darussalam</option>
                <option>Bulgaria</option>
                <option>Burkina Faso</option>
                <option>Burundi</option>
                <option>Cambodia</option>
                <option>Cameroon</option>
                <option>Canada</option>
                <option>Cape Verde</option>
                <option>Cayman Islands</option>
                <option>Central African Republic</option>
                <option>Chad</option>
                <option>Chile</option>
                <option>China</option>
                <option>Christmas Island</option>
                <option>Cocos (Keeling) Islands</option>
                <option>Colombia</option>
                <option>Comoros</option>
                <option>Congo</option>
                <option>Congo, the Democratic Republic of the</option>
                <option>Cook Islands</option>
                <option>Costa Rica</option>
                <option>Côte d'Ivoire</option>
                <option>Croatia</option>
                <option>Cuba</option>
                <option>Curaçao</option>
                <option>Cyprus</option>
                <option>Czech Republic</option>
                <option>Denmark</option>
                <option>Djibouti</option>
                <option>Dominica</option>
                <option>Dominican Republic</option>
                <option>Ecuador</option>
                <option>Egypt</option>
                <option>El Salvador</option>
                <option>Equatorial Guinea</option>
                <option>Eritrea</option>
                <option>Estonia</option>
                <option>Ethiopia</option>
                <option>Falkland Islands (Malvinas)</option>
                <option>Faroe Islands</option>
                <option>Fiji</option>
                <option>Finland</option>
                <option>France</option>
                <option>French Guiana</option>
                <option>French Polynesia</option>
                <option>French Southern Territories</option>
                <option>Gabon</option>
                <option>Gambia</option>
                <option>Georgia</option>
                <option>Germany</option>
                <option>Ghana</option>
                <option>Gibraltar</option>
                <option>Greece</option>
                <option>Greenland</option>
                <option>Grenada</option>
                <option>Guadeloupe</option>
                <option>Guam</option>
                <option>Guatemala</option>
                <option>Guernsey</option>
                <option>Guinea</option>
                <option>Guinea-Bissau</option>
                <option>Guyana</option>
                <option>Haiti</option>
                <option>Heard Island and McDonald Islands</option>
                <option>Holy See (Vatican City State)</option>
                <option>Honduras</option>
                <option>Hong Kong</option>
                <option>Hungary</option>
                <option>Iceland</option>
                <option>India</option>
                <option>Indonesia</option>
                <option>Iran, Islamic Republic of</option>
                <option>Iraq</option>
                <option>Ireland</option>
                <option>Isle of Man</option>
                <option>Israel</option>
                <option>Italy</option>
                <option>Jamaica</option>
                <option>Japan</option>
                <option>Jersey</option>
                <option>Jordan</option>
                <option>Kazakhstan</option>
                <option>Kenya</option>
                <option>Kiribati</option>
                <option>Korea, Democratic People's Republic of</option>
                <option>Korea, Republic of</option>
                <option>Kuwait</option>
                <option>Kyrgyzstan</option>
                <option>Lao People's Democratic Republic</option>
                <option>Latvia</option>
                <option>Lebanon</option>
                <option>Lesotho</option>
                <option>Liberia</option>
                <option>Libya</option>
                <option>Liechtenstein</option>
                <option>Lithuania</option>
                <option>Luxembourg</option>
                <option>Macao</option>
                <option>Macedonia, the former Yugoslav Republic of</option>
                <option>Madagascar</option>
                <option>Malawi</option>
                <option>Malaysia</option>
                <option>Maldives</option>
                <option>Mali</option>
                <option>Malta</option>
                <option>Marshall Islands</option>
                <option>Martinique</option>
                <option>Mauritania</option>
                <option>Mauritius</option>
                <option>Mayotte</option>
                <option>Mexico</option>
                <option>Micronesia, Federated States of</option>
                <option>Moldova, Republic of</option>
                <option>Monaco</option>
                <option>Mongolia</option>
                <option>Montenegro</option>
                <option>Montserrat</option>
                <option>Morocco</option>
                <option>Mozambique</option>
                <option>Myanmar</option>
                <option>Namibia</option>
                <option>Nauru</option>
                <option>Nepal</option>
                <option>Netherlands</option>
                <option>New Caledonia</option>
                <option>New Zealand</option>
                <option>Nicaragua</option>
                <option>Niger</option>
                <option>Nigeria</option>
                <option>Niue</option>
                <option>Norfolk Island</option>
                <option>Northern Mariana Islands</option>
                <option>Norway</option>
                <option>Oman</option>
                <option>Pakistan</option>
                <option>Palau</option>
                <option>Palestinian Territory, Occupied</option>
                <option>Panama</option>
                <option>Papua New Guinea</option>
                <option>Paraguay</option>
                <option>Peru</option>
                <option>Philippines</option>
                <option>Pitcairn</option>
                <option>Poland</option>
                <option>Portugal</option>
                <option>Puerto Rico</option>
                <option>Qatar</option>
                <option>Réunion</option>
                <option>Romania</option>
                <option>Russian Federation</option>
                <option>Rwanda</option>
                <option>Saint Barthélemy</option>
                <option>Saint Helena, Ascension and Tristan da Cunha</option>
                <option>Saint Kitts and Nevis</option>
                <option>Saint Lucia</option>
                <option>Saint Martin (French part)</option>
                <option>Saint Pierre and Miquelon</option>
                <option>Saint Vincent and the Grenadines</option>
                <option>Samoa</option>
                <option>San Marino</option>
                <option>Sao Tome and Principe</option>
                <option>Saudi Arabia</option>
                <option>Senegal</option>
                <option>Serbia</option>
                <option>Seychelles</option>
                <option>Sierra Leone</option>
                <option>Singapore</option>
                <option>Sint Maarten (Dutch part)</option>
                <option>Slovakia</option>
                <option>Slovenia</option>
                <option>Solomon Islands</option>
                <option>Somalia</option>
                <option>South Africa</option>
                <option>South Georgia and the South Sandwich Islands</option>
                <option>South Sudan</option>
                <option>Spain</option>
                <option>Sri Lanka</option>
                <option>Sudan</option>
                <option>Suriname</option>
                <option>Svalbard and Jan Mayen</option>
                <option>Swaziland</option>
                <option>Sweden</option>
                <option>Switzerland</option>
                <option>Syrian Arab Republic</option>
                <option>Taiwan, Province of China</option>
                <option>Tajikistan</option>
                <option>Tanzania, United Republic of</option>
                <option>Thailand</option>
                <option>Timor-Leste</option>
                <option>Togo</option>
                <option>Tokelau</option>
                <option>Tonga</option>
                <option>Trinidad and Tobago</option>
                <option>Tunisia</option>
                <option>Turkey</option>
                <option>Turkmenistan</option>
                <option>Turks and Caicos Islands</option>
                <option>Tuvalu</option>
                <option>Uganda</option>
                <option>Ukraine</option>
                <option>United Arab Emirates</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>United States Minor Outlying Islands</option>
                <option>Uruguay</option>
                <option>Uzbekistan</option>
                <option>Vanuatu</option>
                <option>Venezuela, Bolivarian Republic of</option>
                <option>Viet Nam</option>
                <option>Virgin Islands, British</option>
                <option>Virgin Islands, U.S.</option>
                <option>Wallis and Futuna</option>
                <option>Western Sahara</option>
                <option>Yemen</option>
                <option>Zambia</option>
                <option>Zimbabwe</option>
            </select>
        </div>
        <div class="padding-bottom-15 field-parent">
            <select name="reason" class="selectpicker required-select" data-live-search="true" title="Reason for contract">
                <option data-title="Please describe your idea in more details and let us know if you'd like to have an interview with a specific person from the team." data-action="long-text">I would like to have an interview with the Dentacoin team.</option>
                <option data-title="Please let us know what is the topic of your article and describe in detail the information needed." data-action="long-text">I am writing an article about Dentacoin and I need more information.</option>
                <option data-title="Please describe your offer and attach file/s if needed." data-action="long-text-and-attachments">I believe I have an interesting advertising opportunity for Dentacoin.</option>
                <option data-action="newsletter-register">I would like to receive regular press releases from Dentacoin.</option>
                <option data-title="Please specify your request." data-action="long-text">Other</option>
            </select>
        </div>
        <div class="waiting-for-action">

        </div>
        <div class="padding-bottom-15 fs-0 captcha-parent field-parent">
            <div class="inline-block fs-14 width-50">
                <div class="custom-google-label-style module" data-input-colorful-border="true">
                    <label for="captcha">Enter captcha:</label>
                    <input type="text" id="captcha" name="captcha" maxlength="5" class="full-rounded required form-field"/>
                </div>
            </div>
            <div class="inline-block width-50">
                <div class="captcha-container flex">
                    <span>{!! captcha_img() !!}</span>
                    <button type="button" class="refresh-captcha">
                        <i class="fa fa-refresh" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="padding-bottom-15 field-parent" data-valid-message="Please agree with our Privacy Policy.">
            <div class="custom-checkbox-style module">
                <input type="checkbox" class="custom-checkbox-input" id="privacy-policy"/>
                <label class="custom-checkbox-label" for="privacy-policy">I have read and agree with <a href="/privacy-policy" target="_blank">Privacy Policy</a></label>
            </div>
        </div>
        <div class="submit text-center">
            <input type="hidden" name="_token" value="{{csrf_token()}}">
            <input type="submit" value="SEND" class="white-bright-blue-btn"/>
        </div>
    </div>
</form>