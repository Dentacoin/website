var basic={cookies:{set:function(e,t){null==e&&(e="cookieLaw"),null==t&&(t=1);var o=new Date;o.setTime(o.getTime()+864e7);var a="expires="+o.toUTCString();document.cookie=e+"="+t+"; "+a+";domain=.dentacoin.com;path=/;secure","cookieLaw"==e&&$(".cookies_popup").slideUp()},erase:function(e){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"},get:function(e){if(null==e)e="cookieLaw";e+="=";for(var t=document.cookie.split(";"),o=0;o<t.length;o++){for(var a=t[o];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(e))return a.substring(e.length,a.length)}return""}},fixBodyModal:function(){$(".modal-dialog").length>0&&!$("body").hasClass("modal-open")&&$("body").addClass("modal-open")},fixZIndexBackdrop:function(){if(jQuery(".bootbox").length>1){var e=jQuery(".bootbox").eq(jQuery(".bootbox").length-2).css("z-index");jQuery(".bootbox").last().css({"z-index":e+2}).next(".modal-backdrop").css({"z-index":e+1})}},showAlert:function(e,t,o){basic.realShowDialog(e,"alert",t,null,null,o)},showConfirm:function(e,t,o,a){basic.realShowDialog(e,"confirm",t,o,null,a)},showDialog:function(e,t,o,a,n){void 0===o&&(o=null),void 0===n&&(n=null),basic.realShowDialog(e,"dialog",t,n,o,a)},realShowDialog:function(message,dialog_type,class_name,params,type,vertical_center){void 0===class_name&&(class_name=""),void 0===type&&(type=null),void 0===vertical_center&&(vertical_center=null);var atrs={message:message,animate:!1,show:!1,className:class_name};if("confirm"==dialog_type&&null!=params&&null==params.buttons&&(atrs.buttons={confirm:{label:"Yes",className:"btn-success"},cancel:{label:"No",className:"btn-danger"}}),null!=params)for(var key in params)console.log(key,"key"),atrs[key]=params[key],console.log(key,"key"),console.log(params[key],"params[key]");var dialog=eval("bootbox."+dialog_type)(atrs);dialog.on("hidden.bs.modal",function(){basic.fixBodyModal(),null!=type&&("media-inquries"==type?$(".press-center-container .subtitle .open-form").focus():$('.single-application figure[data-slug="'+type+'"]').parent().focus())}),dialog.on("shown.bs.modal",function(){null!=vertical_center&&basic.verticalAlignModal(),basic.fixZIndexBackdrop()}),dialog.modal("show")},verticalAlignModal:function(e){$("body .modal-dialog").each(function(){$(this).css("margin-top",Math.max(20,($(window).height()-$(this).height())/2))})},closeDialog:function(){bootbox.hideAll()},validateEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},validatePhone:function(e){return/^[\d\.\-]+$/.test(e)},validateUrl:function(e){return!!new RegExp("((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)},hasNumber:function(e){return/\d/.test(e)},hasLowerCase:function(e){return/[a-z]/.test(e)},hasUpperCase:function(e){return/[A-Z]/.test(e)},validatePassword:function(e){return e.trim().length>=8&&e.trim().length<=30&&basic.hasLowerCase(e)&&basic.hasUpperCase(e)&&basic.hasNumber(e)},isInViewport:function(e,t){if(null!=t)var o=$(e).offset().top+t;else o=$(e).offset().top;var a=o+$(e).outerHeight(),n=$(window).scrollTop(),i=n+$(window).height();return a>n&&o<i},isMobile:function(){var e=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(e=!0),e},getMobileOperatingSystem:function(){var e=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(e)?"Windows Phone":/android/i.test(e)?"Android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"iOS":/(Mac|iPhone|iPod|iPad)/.test(e)&&!window.MSStream?"Mac":"unknown"},addCsrfTokenToAllAjax:function(){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}})},isJsonString:function(e){try{JSON.parse(e)}catch(e){return!1}return!0},bytesToMegabytes:function(e){return e/Math.pow(1024,2)},property_exists:function(e,t){return!!e&&hasOwnProperty.call(e,t)},getGETParameters:function(){var e=window.location.search.substr(1);return null!=e&&""!=e?basic.transformToAssocArray(e):{}},transformToAssocArray:function(e){for(var t={},o=e.split("&"),a=0,n=o.length;a<n;a+=1){var i=o[a].split("=");t[i[0]]=i[1]}return t},stopMaliciousInspect:function(){document.addEventListener("contextmenu",function(e){e.preventDefault()}),document.onkeydown=function(e){return 123!=event.keyCode&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="I".charCodeAt(0))&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="C".charCodeAt(0))&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="J".charCodeAt(0))&&((!e.ctrlKey||e.keyCode!="U".charCodeAt(0))&&void 0))))}},customValidateWalletAddress:function(e){return/^(0x){1}[0-9a-fA-F]{40}$/i.test(e)},initCustomCheckboxes:function(e,t){null==typeof e?e="":e+=" ",null==t&&(t="prepend");for(var o=0,a=jQuery(e+".custom-checkbox-style").length;o<a;o+=1)jQuery(e+".custom-checkbox-style").eq(o).hasClass("already-custom-style")||(jQuery(e+".custom-checkbox-style").eq(o).find('input[type="checkbox"]').is(":checked")?"prepend"==t?jQuery(e+".custom-checkbox-style").eq(o).prepend('<label for="'+jQuery(e+".custom-checkbox-style").eq(o).find('input[type="checkbox"]').attr("id")+'" class="custom-checkbox">✓</label>'):"append"==t&&jQuery(e+".custom-checkbox-style").eq(o).append('<label for="'+jQuery(e+".custom-checkbox-style").eq(o).find('input[type="checkbox"]').attr("id")+'" class="custom-checkbox">✓</label>'):jQuery(e+".custom-checkbox-style").eq(o).prepend('<label for="'+jQuery(e+".custom-checkbox-style").eq(o).find('input[type="checkbox"]').attr("id")+'" class="custom-checkbox"></label>'),jQuery(e+".custom-checkbox-style").eq(o).addClass("already-custom-style"));jQuery(e+".custom-checkbox-style .custom-checkbox-input").unbind("change").on("change",function(){if(!jQuery(this).closest(".custom-checkbox-style").hasClass("predefined")&&(jQuery(this).is(":checked")?jQuery(this).closest(e+".custom-checkbox-style").find(".custom-checkbox").html("✓"):jQuery(this).closest(e+".custom-checkbox-style").find(".custom-checkbox").html(""),null!=jQuery(this).attr("data-radio-group")))for(var t=0,o=jQuery('[data-radio-group="'+jQuery(this).attr("data-radio-group")+'"]').length;t<o;t+=1)jQuery(this).is(jQuery('[data-radio-group="'+jQuery(this).attr("data-radio-group")+'"]').eq(t))||(jQuery('[data-radio-group="'+jQuery(this).attr("data-radio-group")+'"]').eq(t).prop("checked",!1),jQuery('[data-radio-group="'+jQuery(this).attr("data-radio-group")+'"]').eq(t).closest(e+".custom-checkbox-style").find(".custom-checkbox").html(""))})},dynamicSortArrayByKey:function(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(o,a){return(o[e]<a[e]?-1:o[e]>a[e]?1:0)*t}}};
