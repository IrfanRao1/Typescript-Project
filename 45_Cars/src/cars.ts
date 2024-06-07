// Cars: write a function that stores information about acar in a object.

import { features } from "process";

function storeCareinfo(manufacturer:string,modelName: string, ...extraoption: { [key : string]: any } [] ):
object  {


    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraoption)
    }
    return carInfo;
};

let answare = storeCareinfo('Honda', 'civic', {color:'black'}, {feature: ['Navigation', 'Power window']})

console.log(answare)