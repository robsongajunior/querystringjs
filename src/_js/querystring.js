(function(qsUrl) {
    'use strict';

    if(window.querystringjs) {
        console.error(
            new Error('querystringjs library has already been loaded!\nLoading the library twice might cause unexpected problems!')
        );
        return;
    }


    if (!Array.isArray(qsUrl)) {
        return {};
    }

    var qs = {};

    for (var i = 0; i < qsUrl.length; ++i) {
        var p = qsUrl[i].split('=', 2);

        if (p.length == 1) {
            qs[p[0]] = [];
        } else {
            if(!qs[p[0]]) {
                qs[p[0]] = [];
            }

            qs[p[0]].push(decodeURIComponent(p[1].replace(/\+/g, ' ')));
        }
    }

    window.querystringjs = qs;

    return window.querystringjs;
})(window.location.search.substr(1).split('&'));
