(function () {

    function changeViewportMeta() {
        if ($(window).width() < 395) {
            var scale = $(window).width() / 395;

            $('meta[name=viewport]').attr('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', width=395, user-scalable=no');
        } else if ($(window).width() < 1100) {
            var scaleM = $(window).width() / 1100;

            $('meta[name=viewport]').attr('content', 'initial-scale=' + scaleM + ', maximum-scale=' + scaleM + ', width=1100, user-scalable=no');
        } else {
          $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1');
        }
    }

    changeViewportMeta();

    $(window).on('orientationchange', changeViewportMeta);
}());
