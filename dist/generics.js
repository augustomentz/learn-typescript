"use strict";
// S => State
// T => Type
// K => Key
// V => Value
// E => Element
var useState = function () {
    var state;
    var getState = function () {
        return state;
    };
    var setState = function (newState) {
        state = newState;
    };
    return { getState: getState, setState: setState };
};
var newState = useState();
newState.setState('123');
console.log(newState.getState());
