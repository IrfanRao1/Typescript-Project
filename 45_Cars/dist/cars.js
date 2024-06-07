"use strict";
// Cars: write a function that stores information about acar in a object.
Object.defineProperty(exports, "__esModule", { value: true });
function storeCareinfo(manufacturer, modelName, ...extraoption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraoption));
    return carInfo;
}
;
let answare = storeCareinfo('Honda', 'civic', { color: 'black' }, { feature: ['Navigation', 'Power window'] });
console.log(answare);
