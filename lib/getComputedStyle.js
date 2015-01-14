'use strict';

var getComputedStyle = function(e, t) {
    var u = 9 == e.nodeType ? e : e.ownerDocument || e.document;
    if (u.defaultView && u.defaultView.getComputedStyle) {
        var o = u.defaultView.getComputedStyle(e, null);
        if (o) {
            return o[t] || o.getPropertyValue(t) || '';
        }
    }
    return '';
};

module.exports = getComputedStyle;