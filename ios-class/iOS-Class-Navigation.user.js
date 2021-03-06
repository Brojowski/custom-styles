// ==UserScript==
// @name     iOS KeyBindings
// @version  3
// @grant    none
// @include https://web.cs.kent.edu/~whaverst/Edu/Courses/IOS/Notes/*
// @updateURL https://raw.githubusercontent.com/Brojowski/config/master/ios-class/iOS-Class-Navigation.user.js
// ==/UserScript==

console.log('iOS Navigation Script: v2')

var links = document.getElementsByTagName('a')

var prev = null;
var next = null;
var up = null;

for (var i = 0; i < links.length; i++) {
    switch (links[i].innerHTML) {
        case 'prev':
            prev = links[i];
            break;
        case 'next':
            next = links[i];
            break;
        case 'up':
        case 'Notes':
            up = links[i];
            break;
    }
}

if (!up || !next || !prev) {
    console.error('keybindings broken');
}

document.onkeydown = function (event) {
    switch (event.which) {
        case 39: // Next
            next.click();
            break;
        case 37: // Prev
            prev.click();
            break;
        case 38: // Up
            up.click();
            break;
    }
};
