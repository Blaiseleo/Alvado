window.addEventListener('load', function () {
    function setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : "; expires=" + exdate.toUTCString()) + "; path=/";
    }

    function parseQuery(queryString) {
        var query = {};
        var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query;
    }

    var queryObj = parseQuery(window.location.search);

    if(queryObj.ref) {
        setCookie('REF', queryObj.ref, 5);
    }

    if(queryObj.utm_source) {
        setCookie('USOURCE', queryObj.utm_source, 5);
    }

    if(queryObj.utm_medium) {
        setCookie('UMEDIUM', queryObj.utm_medium, 5);
    }

    if(queryObj.utm_campaign) {
        setCookie('UCAMPAIGN', queryObj.utm_campaign, 5);
    }

    if(queryObj.utm_content) {
        setCookie('UCONTENT', queryObj.utm_content, 5);
    }

});