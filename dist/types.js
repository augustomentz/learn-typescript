"use strict";
throw new Error('error');
// Boolean (true, false)
var isOpen;
isOpen = true;
// String ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// Number (int, float, hex, binary) 
var total;
total = 0xff0;
// Array (type[], Array<type>)
var items;
items = ['foo', 'bar'];
var values;
values = [1, 2, 3];
// Tuple
var title;
title = [1, "foo"];
// Enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// Any (everything) IS NOT COOL
var thing;
thing = true; // 2, 'true'
// Void
var logger = function () {
    console.log('foo');
};
// Never
var error = function () {
    throw new Error('error');
};
// Object
var cart;
cart = {
    key: 'foo'
};
// Type Inference
var msg = 'Defined message';
msg = 'New message';
window.addEventListener('click', function (e) {
    console.log(e.target);
});
