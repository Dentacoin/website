if("undefined"==typeof jQuery)console.error("Dentacoin hub requires the usage of jQuery.");else if(navigator.onLine)var fireHubAjax=!0,fireBigHubAjax=!0,dcnAdditionals={utils:{fireGoogleAnalyticsEvent:function(e,t,i,a){if("undefined"!=typeof gtag){var o={event_action:t,event_category:e,event_label:i};null!=a&&(o.value=a),gtag("event",i,o)}},cookies:{get:function(e){if(null==e)e="cookieLaw";e+="=";for(var t=document.cookie.split(";"),i=0;i<t.length;i+=1){for(var a=t[i];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(e))return a.substring(e.length,a.length)}return""},set:function(e,t){null==e&&(e="cookieLaw"),null==t&&(t=1);var i=new Date;i.setTime(i.getTime()+864e7);var a="expires="+i.toUTCString();"localhost"==location.hostname?document.cookie=e+"="+t+"; "+a+";domain="+location.hostname+";path=/;":"dentacoin.com"==location.hostname?document.cookie=e+"="+t+"; "+a+";path=/;":document.cookie=e+"="+t+"; "+a+";domain=."+location.hostname+";path=/;secure","cookieLaw"==e&&jQuery(".cookies_popup").slideUp()},erase:function(e){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"}},initCustomCheckboxes:function(e){null==typeof e?e="":e+=" ";for(var t=0,i=jQuery(e+".custom-checkbox-style").length;t<i;t+=1)jQuery(e+".custom-checkbox-style").eq(t).hasClass("already-custom-style")||(jQuery(e+".custom-checkbox-style").eq(t).find('input[type="checkbox"]').is(":checked")?jQuery(e+".custom-checkbox-style").eq(t).prepend('<label for="'+jQuery(e+".custom-checkbox-style").eq(t).find('input[type="checkbox"]').attr("id")+'" class="custom-checkbox">✓</label>'):jQuery(e+".custom-checkbox-style").eq(t).prepend('<label for="'+jQuery(e+".custom-checkbox-style").eq(t).find('input[type="checkbox"]').attr("id")+'" class="custom-checkbox"></label>'),jQuery(e+".custom-checkbox-style").eq(t).addClass("already-custom-style"));jQuery(e+".custom-checkbox-style .custom-checkbox-input").unbind("change").on("change",function(){if(!jQuery(this).closest(".custom-checkbox-style").hasClass("predefined")&&(jQuery(this).is(":checked")?jQuery(this).closest(e+".custom-checkbox-style").find(".custom-checkbox").html("✓"):jQuery(this).closest(e+".custom-checkbox-style").find(".custom-checkbox").html(""),null!=jQuery(this).attr("data-radio-group")))for(var t=0,i=jQuery('[data-radio-group="'+jQuery(this).attr("data-radio-group")+'"]').length;t<i;t+=1)jQuery(this).is(jQuery('[data-radio-group="'+jQuery(this).attr("data-radio-group")+'"]').eq(t))||(jQuery('[data-radio-group="'+jQuery(this).attr("data-radio-group")+'"]').eq(t).prop("checked",!1),jQuery('[data-radio-group="'+jQuery(this).attr("data-radio-group")+'"]').eq(t).closest(e+".custom-checkbox-style").find(".custom-checkbox").html(""))})}}},dcnHub={dcnHubRequests:{getHubData:async function(e){if(fireHubAjax){fireHubAjax=!1;var t=await jQuery.ajax({type:"POST",url:"https://dentacoin.com/combined-hub/get-hub-data/"+e,dataType:"json"});return fireHubAjax=!0,t}},getHubChildren:async function(e){if(fireHubAjax){fireHubAjax=!1;var t=await jQuery.ajax({type:"POST",url:"https://dentacoin.com/combined-hub/get-hub-children/"+e,dataType:"json"});return fireHubAjax=!0,t}},getPlatformMenu:async function(e){if(fireBigHubAjax){fireBigHubAjax=!1;var t=await jQuery.ajax({type:"POST",url:"https://dentacoin.com/combined-hub/get-platform-menu/"+e,dataType:"json"});return fireBigHubAjax=!0,t}},getBigHubHtml:async function(e,t,i){if(null==i&&(i="https://dentacoin.com"),fireBigHubAjax){fireBigHubAjax=!1;var a={type:"POST",url:i+"/combined-hub/get-big-hub-html/"+e,dataType:"json"};(null!=t||Object.keys(t).length>0)&&(a.data=t);var o=await jQuery.ajax(a);return fireBigHubAjax=!0,o}}},initBigHub:async function(e){if("object"!=typeof e&&void 0===e||!hasOwnProperty.call(e,"element_id_to_append")||!hasOwnProperty.call(e,"type_hub"))console.error("False params passed to Dentacoin hub.");else{var t=jQuery("#"+e.element_id_to_append);if(t.length){var i={};if(hasOwnProperty.call(e,"hub_title")&&(i.hubTitleParam=e.hub_title),hasOwnProperty.call(e,"local_environment"))var a=await dcnHub.dcnHubRequests.getBigHubHtml(e.type_hub,i,e.local_environment);else a=await dcnHub.dcnHubRequests.getBigHubHtml(e.type_hub,i);if(a.success){function o(e){if(e.getDate()<10)var t="0"+e.getDate();else t=e.getDate();if(e.getMonth()+1<10)var i="0"+(e.getMonth()+1);else i=e.getMonth()+1;return t+"/"+i+"/"+e.getFullYear()}t.html(a.data),"dentists"==e.type_hub&&t.find(".app-list").addClass("dark-blue-background"),$(".dcn-big-hub .right-arrow").click(function(){$(".dcn-big-hub .single-application.active").next().length?$(".dcn-big-hub .single-application.active").next().click():$(".dcn-big-hub .single-application").eq(0).click()}),$(".dcn-big-hub .left-arrow").click(function(){$(".dcn-big-hub .single-application.active").prev().length?$(".dcn-big-hub .single-application.active").prev().click():$(".dcn-big-hub .single-application").eq($(".dcn-big-hub .single-application").length-1).click()});var n=!1;t.find(".single-application.link").click(function(){var i="";if(t.find(".single-application.link").removeClass("active"),jQuery(this).addClass("active"),t.find(".info-section .logo img").attr("alt",jQuery(this).attr("data-image-alt")).attr("src",jQuery(this).attr("data-image")),t.find(".info-section .title").html(jQuery(this).attr("data-title")),null!=jQuery(this).attr("data-articles")){i+='<div class="extra-html"><div class="extra-title">Latest Blog articles:</div><div class="slider-with-tool-data">';for(var a=jQuery.parseJSON(jQuery(this).attr("data-articles")),c=0,s=a.length;c<s;c+=1){var l=a[c].post_title;l.length>35&&(l=l.substring(0,35)+"..."),i+='<a target="_blank" href="'+a[c].link+'"><div class="single-slide"><figure itemscope="" itemtype="http://schema.org/ImageObject"><img src="'+a[c].thumb+'" alt="" itemprop="contentUrl"/></figure><div class="content"><div class="slide-title">'+l+"</div><time>"+o(new Date(1e3*parseInt(a[c].date)))+"</time></div></div></a>"}i+='</div><div class="go-to-all"><a href="//blog.dentacoin.com/" class="dcn-big-hub-white-light-blue-btn on-blog-website-button-click-event-tracker" target="_blank">GO TO ALL</a></div></div>',t.find(".extra-html-content").html(i),jQuery(".slider-with-tool-data").slick({slidesToShow:2,infinite:!1,responsive:[{breakpoint:992,settings:{slidesToShow:1}}]})}else jQuery(".extra-html-content").html("");switch(t.find(".info-section .html-content").html(jQuery.parseJSON(jQuery(this).attr("data-html"))),$(".title-and-html .title").removeClass("text-center"),jQuery(this).attr("data-platform")){case"dentavox":t.find(".info-section .html-content").append('<div class="padding-top-15"><a class="dcn-big-hub-white-light-blue-btn on-vox-button-click-event-tracker" href="https://dentavox.dentacoin.com/" target="_blank">GO TO DENTAVOX</a></div>');break;case"trusted-reviews":t.find(".info-section .html-content").append('<div class="padding-top-15"><a class="dcn-big-hub-white-light-blue-btn on-trp-button-click-event-tracker" href="https://reviews.dentacoin.com/" target="_blank">SIGN UP NOW</a></div>');break;case"dentacare-oral-health-app":t.find(".info-section .html-content").append('<div class="padding-top-15"><a class="dcn-big-hub-white-light-blue-btn hide website-btn on-dentacare-website-button-click-event-tracker" href="https://dentacare.dentacoin.com/" target="_blank">GO TO DENTACARE</a><figure class="inline-block hide app-store-btn"><a href="https://itunes.apple.com/us/app/dentacare/id1274148338?mt=8" target="_blank" class="on-dentacare-ios-button-click-event-tracker"><img alt="Apple store button" src="//dentacoin.com/assets/images/apple-store-button.svg" width="180" /> </a></figure><figure class="inline-block hide google-play-btn"><a href="https://play.google.com/store/apps/details?id=com.dentacoin.dentacare&amp;hl=en" target="_blank" class="on-dentacare-google-button-click-event-tracker"><img alt="Google store button" src="//dentacoin.com/assets/images/google-store-button.svg" width="180" /> </a></figure></div>');break;case"jaws-of-battle":t.find(".info-section .html-content").append('<div class="padding-top-15"><a class="dcn-big-hub-white-light-blue-btn hide website-btn on-jaws-website-button-click-event-tracker" href="https://jawsofbattle.dentacoin.com/" target="_blank">GO TO JAWS OF BATTLE</a><figure class="inline-block hide app-store-btn on-jaws-ios-button-click-event-tracker"><a href="https://testflight.apple.com/join/hOg8An1t" target="_blank"><img alt="Apple store button" src="//dentacoin.com/assets/images/apple-store-button.svg" width="180" /> </a></figure><figure class="inline-block hide google-play-btn"><a class="on-jaws-google-button-click-event-tracker" href="https://play.google.com/store/apps/details?id=com.DentaCare.JawsOfBattle&amp;hl=en" target="_blank"><img alt="Google store button" src="//dentacoin.com/assets/images/google-store-button.svg" width="180" /> </a></figure></div>');break;case"wallet-dapp":t.find(".info-section .html-content").append('<div class="padding-top-15"><a class="dcn-big-hub-white-light-blue-btn hide website-btn on-wallet-website-button-click-event-tracker" href="https://wallet.dentacoin.com/" target="_blank">GO TO WEB WALLET</a><figure class="inline-block hide app-store-btn"><a class="on-wallet-ios-button-click-event-tracker" href="https://apps.apple.com/us/app/dentacoin-wallet/id1478732657" target="_blank"><img alt="Apple store button" src="//dentacoin.com/assets/images/apple-store-button.svg" width="180" /> </a></figure><figure class="inline-block hide google-play-btn"><a class="on-wallet-google-button-click-event-tracker" href="https://play.google.com/store/apps/details?id=wallet.dentacoin.com" target="_blank"><img alt="Google store button" src="//dentacoin.com/assets/images/google-store-button.svg" width="180" /> </a></figure></div>');break;case"assurance":t.find(".info-section .html-content").append('<div class="padding-top-15"><a class="dcn-big-hub-white-light-blue-btn on-assurance-button-click-event-tracker" href="https://assurance.dentacoin.com/" target="_blank">GO TO ASSURANCE</a></div>');break;case"dentacoin-blog":$(".title-and-html .title").addClass("text-center")}if("undefined"!=typeof basic&&(basic.isMobile()?"Android"==basic.getMobileOperatingSystem()?$(".google-play-btn").removeClass("hide"):"iOS"==basic.getMobileOperatingSystem()&&$(".app-store-btn").removeClass("hide"):$(".website-btn").removeClass("hide")),""!=jQuery(this).attr("data-video")){var r=function(e){var t=e.split("v=")[1],i=t.indexOf("&");-1!=i&&t.substring(0,i);return t}(jQuery(this).attr("data-video"));r&&($(".video-and-html-holder").removeClass("no-video"),t.find(".video-content").html('<iframe src="https://www.youtube.com/embed/'+r+'"></iframe>'))}else $(".video-and-html-holder").addClass("no-video"),t.find(".video-content").html("");function d(){var e=jQuery(".info-section").offset().top;jQuery("header.sticky-header").length&&(e-=jQuery("header.sticky-header").outerHeight()),jQuery("html").animate({scrollTop:e},{duration:500})}jQuery("body").addClass("overflow-hidden"),jQuery(window).width()<992?($(".hide-on-hub-open").length&&$(".hide-on-hub-open").addClass("hide"),"dentacoin"==e.type_hub&&"function"==typeof projectData.general_logic.data.hideStickySubpagesNav&&projectData.general_logic.data.hideStickySubpagesNav(),t.find(".app-list").hide(),t.find(".info-section").fadeIn(500),d()):n&&d(),jQuery("body").removeClass("overflow-hidden")}),jQuery("body").addClass("overflow-hidden"),jQuery(window).width()>992?(t.find(".single-application.link").eq(0).click(),n=!0):t.find(".info-section .close-application").click(function(){$(".hide-on-hub-open.hide").length&&$(".hide-on-hub-open").removeClass("hide"),t.find(".app-list").fadeIn(500),t.find(".info-section").hide(),$("#append-big-hub-dentacoin").length&&$("html, body").animate({scrollTop:$("#append-big-hub-dentacoin").offset().top},300),$("#append-big-hub-dentists").length&&$("html, body").animate({scrollTop:$("#append-big-hub-dentists").offset().top-$("header.sticky-header").outerHeight()},300),$("#append-big-hub-ids").length&&$("html, body").animate({scrollTop:$("#append-big-hub-ids").offset().top-$("header.sticky-header").outerHeight()},300),"dentacoin"==e.type_hub&&"function"==typeof projectData.general_logic.data.showStickySubpagesNav&&projectData.general_logic.data.showStickySubpagesNav()}),jQuery("body").removeClass("overflow-hidden")}}function c(){for(var e=0,i=t.find("img[data-defer-src]").length;e<i;e+=1)a=t.find("img[data-defer-src]").eq(e),o=void 0,n=void 0,c=void 0,s=void 0,o=jQuery(a).offset().top,n=o+jQuery(a).outerHeight(),c=jQuery(window).scrollTop(),s=c+jQuery(window).height(),n>c&&o<s&&null==t.find("img[data-defer-src]").eq(e).attr("src")&&t.find("img[data-defer-src]").eq(e).attr("src",t.find("img[data-defer-src]").eq(e).attr("data-defer-src"));var a,o,n,c,s}jQuery(document).on("click",".on-jaws-google-button-click-event-tracker",function(){dcnAdditionals.utils.fireGoogleAnalyticsEvent("Tools","Click","Jaws Google")}),jQuery(document).on("click",".on-jaws-ios-button-click-event-tracker",function(){dcnAdditionals.utils.fireGoogleAnalyticsEvent("Tools","Click","Jaws iOS")}),jQuery(document).on("click",".on-jaws-website-button-click-event-tracker",function(){dcnAdditionals.utils.fireGoogleAnalyticsEvent("Tools","Click","Jaws")}),jQuery(document).on("click",".on-assurance-button-click-event-tracker",function(){dcnAdditionals.utils.fireGoogleAnalyticsEvent("Tools","Click","Assurance")}),jQuery(document).on("click",".on-vox-button-click-event-tracker",function(){dcnAdditionals.utils.fireGoogleAnalyticsEvent("Tools","Click","Vox")}),jQuery(document).on("click",".on-trp-button-click-event-tracker",function(){dcnAdditionals.utils.fireGoogleAnalyticsEvent("Tools","Click","TRP")}),jQuery(document).on("click",".on-dentacare-website-button-click-event-tracker",function(){dcnAdditionals.utils.fireGoogleAnalyticsEvent("Tools","Click","Dentacare")}),jQuery(document).on("click",".on-dentacare-ios-button-click-event-tracker",function(){dcnAdditionals.utils.fireGoogleAnalyticsEvent("Tools","Click","Dentacare IOS")}),jQuery(document).on("click",".on-dentacare-google-button-click-event-tracker",function(){dcnAdditionals.utils.fireGoogleAnalyticsEvent("Tools","Click","Dentacare Google")}),jQuery(document).on("click",".on-wallet-ios-button-click-event-tracker",function(){dcnAdditionals.utils.fireGoogleAnalyticsEvent("Tools","Click","Wallet IOS")}),jQuery(document).on("click",".on-wallet-google-button-click-event-tracker",function(){dcnAdditionals.utils.fireGoogleAnalyticsEvent("Tools","Click","Wallet Google")}),jQuery(document).on("click",".on-wallet-website-button-click-event-tracker",function(){dcnAdditionals.utils.fireGoogleAnalyticsEvent("Tools","Click","Wallet Btn")}),jQuery(document).on("click",".on-blog-website-button-click-event-tracker",function(){dcnAdditionals.utils.fireGoogleAnalyticsEvent("Tools","Click","Blog")}),c(),t.find("img[data-defer-src]").length&&jQuery(window).on("scroll",function(){c()})}},initMiniHub:async function(e){if(("object"==typeof e||void 0!==e)&&hasOwnProperty.call(e,"element_id_to_bind")&&hasOwnProperty.call(e,"platform")&&hasOwnProperty.call(e,"log_out_link")){var t=[],i=jQuery("#"+e.element_id_to_bind);if(!i.length)return console.error("False element to bind passed to Dentacoin hub."),!1;{var a=!1;function o(){if(hasOwnProperty.call(e,"notifications_counter")&&e.notifications_counter){function t(){$.ajax({type:"POST",url:"/get-unseen-notifications-count",dataType:"json",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){e.success&&(parseInt(e.data)>1?($(".notifications-link").length&&$(".notifications-link").html('<img src="https://account.dentacoin.com/assets/uploads/notifications.png" alt="Notification icon"/><span class="unseen-notifications-count">'+e.data+"</span>"),$(".header-avatar").length&&($(".header-avatar .header-avatar-notifications-counter").length?$(".header-avatar .header-avatar-notifications-counter").html(e.data):($(".header-avatar").css({position:"relative"}),$(".header-avatar").append('<span style="position: absolute;text-align: center;top: 0;right: 0;z-index: 100;color: white;font-size: 12px;background-color: #f46464;width: 18px;height: 18px;-webkit-border-radius: 50%;-moz-border-radius: 50%;-ms-border-radius: 50%;border-radius: 50%;" class="header-avatar-notifications-counter">'+e.data+"</span>")))):($(".notifications-link").length&&$(".notifications-link").html('<img src="https://account.dentacoin.com/assets/uploads/notifications.png" alt="Notification icon"/>'),$(".header-avatar").length&&$(".header-avatar .header-avatar-notifications-counter").length&&$(".header-avatar .header-avatar-notifications-counter").remove()))}})}setInterval(function(){t()},3e3),t()}}function n(){var e=i.offset().top+i.outerHeight(),t=i.offset().left+i.outerWidth();jQuery(".dcn-hub-mini").offset({top:e+jQuery(".dcn-hub-mini .up-arrow").outerHeight(),left:t-jQuery(".dcn-hub-mini").outerWidth()+jQuery(".dcn-hub-mini .up-arrow").outerWidth()/2})}function c(t){jQuery(t.target).closest("#dcn-hub-mini").length||jQuery(t.target).closest("#"+e.element_id_to_bind).length||jQuery(t.target).hasClass("dcn-hub-mini-go-back-image")||jQuery(".dcn-hub-mini").removeClass("custom-show")}function s(){for(var e=jQuery(".dcn-hub-mini .list-with-apps .apps-wrapper:last-child .dcn-min-hub-application"),t=150,i=0,a=e.length;i<a;i+=1)l(e.eq(i),t),t+=150}function l(e,t){setTimeout(function(){e.addClass("dcn-min-hub-fade-in-animation")},t)}jQuery("body").addClass("overflow-hidden"),jQuery(window).width()<992&&(a=!0),jQuery("body").removeClass("overflow-hidden"),a?i.click(function(){jQuery(".dcn-hub-mini").addClass("custom-show"),n(),hasOwnProperty.call(e,"without_apps")||(jQuery("body").addClass("overflow-hidden"),window.scrollTo(0,0))}):i.hover(function(){jQuery(".dcn-hub-mini").addClass("custom-show"),n()}),async function(){if(hasOwnProperty.call(e,"without_apps")&&e.without_apps){var i="",a="";if("dentists"==e.platform)if(hasOwnProperty.call(e,"type_logged_in")&&"patient"==e.type_logged_in)a="//dentacoin.com/foundation";else{a="//dentists.dentacoin.com/home";var l=await dcnHub.dcnHubRequests.getPlatformMenu("dentists");l.success&&(i=l.data)}else"dentacoin"==e.platform&&(a="//dentacoin.com/foundation");var r='<div class="dcn-hub-mini without-apps" id="dcn-hub-mini"><span class="up-arrow">▲</span><div class="hidden-box"><div class="hidden-box-footer">'+i+'<div class="hidden-box-wrapper"><div class="home-btn"><a href="'+a+'"><img src="//dentacoin.com/assets/images/home-btn-dentacoin-hub.svg" alt="Home button"/></a></div><div class="logout-btn-parent"> <a href="'+e.log_out_link+'"><i class="fa fa-power-off" aria-hidden="true"></i> Log out</a> </div> <div class="my-account-btn-parent"><a href="//account.dentacoin.com?platform='+e.platform+'" class="my-account-link">My Account</a></div></div></div></div></div>';jQuery("body").append(r),o()}else if(hasOwnProperty.call(e,"type_hub")){r='<div class="dcn-hub-mini with-apps" id="dcn-hub-mini"><span class="up-arrow">▲</span><div class="hidden-box"> <div class="hidden-box-hub"><div class="dcn-hub-mini-close-btn"><a href="javascript:void(0)">Close <span>X</span></a></div><div class="list-with-apps"><div class="apps-wrapper">';var d=await dcnHub.dcnHubRequests.getHubData(e.type_hub);if(d.success){t.push(JSON.stringify(d.data));for(var u=0,p=d.data.length;u<p;u+=1)if("link"==d.data[u].type){var h="";d.data[u].link&&""!=d.data[u].link&&null!=d.data[u].link&&null!=d.data[u].link?(h=d.data[u].link).includes("hub.dentacoin.com")&&(h+="?platform=dentists"):h="javascript:alert('Coming soon!');",r+='<a href="'+h+'" target="_blank" class="dcn-min-hub-application"><figure itemtype="http://schema.org/ImageObject"><img src="//dentacoin.com/assets/uploads/'+d.data[u].media_name+'" itemprop="contentUrl" alt="'+d.data[u].alt+'"> <figcaption>'+d.data[u].title+"</figcaption></figure></a>"}else if("folder"==d.data[u].type)if(null==d.data[u].media_name){r+="<a href='javascript:void(0);' data-children='"+JSON.stringify(d.data[u].children)+"' class='dcn-min-hub-application inner "+d.data[u].type+"'><div class='hub-folder all-width'><div class='apps-in-folder-list'>";for(var b=0,f=d.data[u].children.length;b<f;b+=1)r+='<img src="//dentacoin.com/assets/uploads/'+d.data[u].children[b].media_name+'" alt="'+d.data[u].children[b].alt+'"/>';r+='</div></div><div class="folder-title">'+d.data[u].title+"</div></a></li>"}else r+="<a href='javascript:void(0);' data-children='"+JSON.stringify(d.data[u].children)+"' class='dcn-min-hub-application inner "+d.data[u].type+"'><figure itemtype='http://schema.org/ImageObject'><img src='//dentacoin.com/assets/uploads/"+d.data[u].media_name+"' itemprop='contentUrl' alt='"+d.data[u].alt+"'> <figcaption>"+d.data[u].title+"</figcaption></figure></a>"}r+="</div></div></div>";var g="";if("trusted-reviews"==e.platform&&$("#add-branches-popup-link").length){var m;if($("#clinic-branches").val()){var v=JSON.parse($("#clinic-branches").val());Object.keys(v).length&&(m=v)}if(g+='<div class="branches-container">',null!=m){for(var y of(g+='<div class="branches-list"><ul>',Object.keys(m)))console.log(m[y].notification,"branches[key].notification"),g+='<li class="'+(m[y].notification?"notification":"")+'"><a href="javascript:void(0);" class="switch-to-branch" data-id="'+y+'"><div class="img"><img src="'+m[y].avatar+'" alt=""/></div><span class="text">'+m[y].name+'</span><span class="switch-icon"></span></a></li>';g+="</ul></div>"}g+='<div><a href="'+$("#add-branches-popup-link").val()+'" class="add-new-branch" target="_blank"><img src="https://dentacoin.com/assets/libs/dentacoin-package/assets/add-new-icon.svg" alt="Add icon"/> <span>Add another branch</span></a></div><div class="line"><hr/></div></div>'}r+=g,r+='<div class="hidden-box-footer"><div class="logout-btn-parent"><a href="'+e.log_out_link+'"><i class="fa fa-power-off" aria-hidden="true"></i> Log out</a></div><div class="my-account-btn-parent"><a href="//account.dentacoin.com/notifications?platform='+e.platform+'" class="notifications-link inline-block"><img src="https://account.dentacoin.com/assets/uploads/notifications.png" alt="Notification icon"/></a><a href="//account.dentacoin.com?platform='+e.platform+'" class="my-account-link">My Account</a></div></div></div></div>',jQuery("body").append(r),o(),$(".switch-to-branch").length&&$(".switch-to-branch").click(function(){var e=$(this);$.ajax({type:"POST",url:"https://reviews.dentacoin.com/en/loginas/",data:{branch_id:e.attr("data-id")},dataType:"json",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){e.success?window.location.reload():e.error&&alert("Something went wrong with logging in, please try again a bit later. If the problem still appears please contact admin@dentacoin.com.")}})}),s(),jQuery(document).on("click",".go-back",function(){jQuery(".dcn-hub-mini .list-with-apps .apps-wrapper:last-child").remove(),jQuery(".dcn-hub-mini .list-with-apps .apps-wrapper:last-child").show()}),jQuery(document).on("click",".dcn-hub-mini .dcn-min-hub-application.folder",async function(){var e=jQuery(this),i=JSON.parse(e.attr("data-children"));t.push(e.attr("data-children"));for(var a="<div class='apps-wrapper'><a href='javascript:void(0);' class='go-back dcn-min-hub-application'><figure itemtype='http://schema.org/ImageObject'><img src='//dentacoin.com/assets/images/dcn-mini-hub-back-arrow.png' itemprop='contentUrl' alt='Go back icon' class='dcn-hub-mini-go-back-image'></figure></a>",o=0,n=i.length;o<n;o+=1)if("link"==i[o].type)a+='<a href="'+(i[o].link&&""!=i[o].link&&null!=i[o].link&&null!=i[o].link?i[o].link:"javascript:alert('Coming soon!');")+'" target="_blank" class="dcn-min-hub-application"><figure itemtype="http://schema.org/ImageObject"><img src="//dentacoin.com/assets/uploads/'+i[o].media_name+'" itemprop="contentUrl" alt="'+i[o].alt+'"> <figcaption>'+i[o].title+"</figcaption></figure></a>";else if("folder"==i[o].type){var l=await dcnHub.dcnHubRequests.getHubChildren(i[o].slug);if(l.success)if(null==i[o].media_name){a+="<a href='javascript:void(0);' data-children='"+JSON.stringify(l.data)+"' class='dcn-min-hub-application inner "+i[o].type+"'><div class='hub-folder all-width'><div class='apps-in-folder-list'>";for(var r=0,d=l.data[o].children.length;r<d;r+=1)a+='<img src="//dentacoin.com/assets/uploads/'+l.data[o].children[r].media_name+'" alt="'+l.data[o].children[r].alt+'"/>';a+='</div></div><div class="folder-title">'+i[o].title+"</div></a></li>"}else a+="<a href='javascript:void(0);' data-children='"+JSON.stringify(l.data)+"' class='dcn-min-hub-application inner "+i[o].type+"'><figure itemtype='http://schema.org/ImageObject'><img src='//dentacoin.com/assets/uploads/"+i[o].media_name+"' itemprop='contentUrl' alt='"+i[o].alt+"'> <figcaption>"+i[o].title+"</figcaption></figure></a>"}a+="</div>",jQuery(".dcn-hub-mini .list-with-apps .apps-wrapper").hide(),jQuery(".dcn-hub-mini .list-with-apps").append(a),jQuery(".dcn-hub-mini .list-with-apps .apps-wrapper:last-child").show(),s(),jQuery(document).unbind("click",c),jQuery(document).bind("click",c)})}jQuery(document).bind("click",c),jQuery(window).on("resize",function(){n()}),jQuery(window).on("scroll",function(){n()})}(),jQuery(document).on("click",".dcn-hub-mini-close-btn",function(){jQuery(".dcn-hub-mini").removeClass("custom-show"),jQuery("body").removeClass("overflow-hidden")}),jQuery(document).on("setHubPosition",async function(e){n()})}}else console.error("False params passed to Dentacoin hub.")}},dcnCookie={init:async function(e){"object"!=typeof e&&void 0===e?console.error("False params passed to Dentacoin cookie."):""==dcnAdditionals.utils.cookies.get("performance_cookies")&&""==dcnAdditionals.utils.cookies.get("functionality_cookies")&&""==dcnAdditionals.utils.cookies.get("marketing_cookies")&&""==dcnAdditionals.utils.cookies.get("strictly_necessary_policy")&&(jQuery("body").append('<div class="dcn-privacy-policy-cookie"><div class="dcn-cookie-wrapper"><div class="text">This site uses cookies. Find out more on how we use cookies in our <a href="https://dentacoin.com/privacy-policy" class="link" target="_blank">Privacy Policy</a>. | <a href="javascript:void(0);" class="link adjust-cookies">Adjust cookies</a></div><div class="button"><a href="javascript:void(0);" class="white-colorful-cookie-btn accept-all">Accept all cookies</a></div></div></div>'),jQuery(".dcn-privacy-policy-cookie .accept-all").click(function(){if(dcnAdditionals.utils.cookies.set("performance_cookies",1),dcnAdditionals.utils.cookies.set("functionality_cookies",1),dcnAdditionals.utils.cookies.set("marketing_cookies",1),dcnAdditionals.utils.cookies.set("strictly_necessary_policy",1),hasOwnProperty.call(e,"google_app_id")){function t(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],t("js",new Date),t("config",e.google_app_id)}var i,a,o,n,c,s;hasOwnProperty.call(e,"fb_app_id")&&(i=window,a=document,o="script",i.fbq||(n=i.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)},i._fbq||(i._fbq=n),n.push=n,n.loaded=!0,n.version="2.0",n.queue=[],(c=a.createElement(o)).async=!0,c.src="https://connect.facebook.net/en_US/fbevents.js",(s=a.getElementsByTagName(o)[0]).parentNode.insertBefore(c,s)),fbq("consent","grant"),fbq("init",e.fb_app_id),hasOwnProperty.call(e,"second_fb_app_id")&&fbq("init",e.second_fb_app_id),fbq("track","PageView")),jQuery(".dcn-privacy-policy-cookie").remove()}),jQuery(".dcn-privacy-policy-cookie .adjust-cookies").click(function(){jQuery(".dcn-privacy-policy-cookie .customize-cookies").remove();jQuery(".dcn-privacy-policy-cookie").append('<div class="customize-cookies"><button class="close-customize-cookies close-customize-cookies-popup">×</button> <div class="text-center"><img src="https://dentacoin.com/assets/images/cookie-icon.svg" alt="Cookie icon" class="cookie-icon"/></div><div class="text-center subtitle">Select cookies to accept:</div><div class="cookies-options-list"> <ul> <li> <div class="custom-checkbox-style predefined"><input type="checkbox" class="custom-checkbox-input" checked id="strictly-necessary-cookies"/> <label class="custom-checkbox-label" for="strictly-necessary-cookies">Strictly necessary</label><button class="tooltip-init info-button" type="button"><img src="https://dentacoin.com/assets/images/info.svg" alt="Info icon"/><div class="tooltip-label">Cookies essential to navigate around the website and use its features. Without them, you wouldn’t be able to use basic services like signup or login.</div></button></div></li><li> <div class="custom-checkbox-style"> <input type="checkbox" class="custom-checkbox-input" checked id="functionality-cookies"/> <label class="custom-checkbox-label" for="functionality-cookies">Functionality cookies</label><button class="tooltip-init info-button" type="button"><img src="https://dentacoin.com/assets/images/info.svg" alt="Info icon"/><div class="tooltip-label">These cookies allow users to customise how a website looks for them; they can remember usernames, preferences, etc.</div></button> </div></li></ul> <ul> <li> <div class="custom-checkbox-style"><input type="checkbox" class="custom-checkbox-input" checked id="performance-cookies"/> <label class="custom-checkbox-label" for="performance-cookies">Performance cookies</label><button class="tooltip-init info-button" type="button"><img src="https://dentacoin.com/assets/images/info.svg" alt="Info icon"/><div class="tooltip-label">These cookies collect data for statistical purposes on how visitors use a website, they don’t contain personal data and are used to improve user experience.</div></button> </div></li><li> <div class="custom-checkbox-style"><input type="checkbox" class="custom-checkbox-input" checked id="marketing-cookies"/> <label class="custom-checkbox-label" for="marketing-cookies">Marketing cookies</label><button class="tooltip-init info-button" type="button"><img src="https://dentacoin.com/assets/images/info.svg" alt="Info icon"/><div class="tooltip-label">Marketing cookies are used e.g. to deliver advertisements more relevant to you or limit the number of times you see an advertisement.</div></button> </div></li></ul> </div><div class="text-center actions"><a href="javascript:void(0);" class="colorful-white-cookie-btn close-customize-cookies-popup">CANCEL</a><a href="javascript:void(0);" class="white-colorful-cookie-btn custom-cookie-save">SAVE</a></div><div class="custom-triangle"></div></div>'),dcnAdditionals.utils.initCustomCheckboxes(".dcn-privacy-policy-cookie"),jQuery(".dcn-privacy-policy-cookie .close-customize-cookies-popup").click(function(){jQuery(".customize-cookies").remove()}),jQuery(".dcn-privacy-policy-cookie .custom-cookie-save").click(function(){var t,i,a,o,n,c;if(dcnAdditionals.utils.cookies.set("strictly_necessary_policy",1),jQuery(".dcn-privacy-policy-cookie #functionality-cookies").is(":checked")&&dcnAdditionals.utils.cookies.set("functionality_cookies",1),jQuery(".dcn-privacy-policy-cookie #marketing-cookies").is(":checked")&&(dcnAdditionals.utils.cookies.set("marketing_cookies",1),hasOwnProperty.call(e,"fb_app_id")&&(t=window,i=document,a="script",t.fbq||(o=t.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},t._fbq||(t._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],(n=i.createElement(a)).async=!0,n.src="https://connect.facebook.net/en_US/fbevents.js",(c=i.getElementsByTagName(a)[0]).parentNode.insertBefore(n,c)),fbq("consent","grant"),fbq("init",e.fb_app_id),hasOwnProperty.call(e,"second_fb_app_id")&&fbq("init",e.second_fb_app_id),fbq("track","PageView"))),jQuery(".dcn-privacy-policy-cookie #performance-cookies").is(":checked")&&(dcnAdditionals.utils.cookies.set("performance_cookies",1),hasOwnProperty.call(e,"google_app_id"))){function s(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],s("js",new Date),s("config",e.google_app_id)}jQuery(".dcn-privacy-policy-cookie").remove()})}))}};else console.error("Dentacoin hub requires internet connection.");
