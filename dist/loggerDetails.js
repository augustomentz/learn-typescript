"use strict";
var loggerDetails = function (uid, item) {
    console.log("A product with " + uid + " has a title as " + item);
};
var loggerInfo = function (uid, user) {
    console.log("A user with " + uid + " has a name as " + user);
};
var renderPlatform = function (platform) {
    return platform;
};
renderPlatform('ios');
loggerDetails(123, 'sapato');
loggerDetails('123', 'sapato');
loggerInfo(123, 'sapato');
loggerInfo('123', 'sapato');
