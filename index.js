/*jslint node: true */
exports.randomColor = function () {
    'use strict';
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};
