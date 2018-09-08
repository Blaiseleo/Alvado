$(document).ready(function () {

    var form = $(".subscribe-more__form");

    var telInput = $("#phone"),
        telInputHidden = $("#phone-hidden"),
        errorMsg = $("#phone-error");

    telInput.intlTelInput({
        nationalMode: false,
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/js/utils.js',
        preferredCountries: ['ru', 'us', 'gb', 'my', 'jp', 'kr']
        //initialCountry: 'auto',
        //geoIpLookup: function (callback) {
          //  callback('');

            // $.getJSON('https://ipinfo.io')
            //     .always(function (data) {
            //         var countryCode = (data && data.country) ? data.country : "";
            //         callback(countryCode);
            //     });
        //}
    });

    var reset = function () {
        errorMsg.addClass("hide");
    };

    // on blur: validate
    telInput.blur(function () {
        reset();

        if ($.trim(telInput.val())) {
            if (telInput.intlTelInput("isValidNumber")) {
                var val = telInput.intlTelInput("getNumber");
                telInputHidden.val(val);
            } else {
                errorMsg.removeClass("hide");
            }
        }else{
            errorMsg.removeClass("hide");
        }
    });

    form.on('submit', function () {
        return telInput.intlTelInput("isValidNumber");
    });
});
