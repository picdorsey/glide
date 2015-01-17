/* jslint browser: true */

/*
    Glide - A slick JS scroll-to component.
    Copyright (c) 2015 Piccirilli Dorsey, Inc.
 */

'use strict';

var TWEEN = require('tween.js');
var getComputedStyle = require('./lib/getComputedStyle');

module.exports = function(el, offset) {
    if ("undefined" != typeof window) {

        var c;
        c = null !== window.pageYOffset ? window.pageYOffset : null !== document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;

        var r = document.getElementById(el);
        var t = (parseInt(getComputedStyle(r, "margin-top"), 10), parseInt(getComputedStyle(r, "padding-top"), 10), r.offsetTop - offset);

        new TWEEN.Tween({
            y: c
        }).to({
                y: t
            }, 600).easing(TWEEN.Easing.Exponential.InOut).onUpdate(function() {
                window.scrollTo(0, this.y);
            }).start();

        var animate = function(e) {
            TWEEN.update(e);
            requestAnimationFrame(animate);
        };

        animate();
    }
};