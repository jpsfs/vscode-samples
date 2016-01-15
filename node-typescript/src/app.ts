/**
 * ===== Node + Typescript Minmalist Example =====
 * 
 */
let separator = "===================================================";
let middleSeparator = "--------------------------------------------------";
import {AnimalGroup} from "./basic/enums";

// Showcase the generator functions

import {GeneratorDemo} from "./es6/generator";

let generatorDemoInstance = new GeneratorDemo();
let iter = generatorDemoInstance.getAnimalName();

console.log(separator);
console.log(" >> Generators Example");
console.log(middleSeparator);

let iterResult: IteratorResult<string>;
do{
    iterResult = iter.next();
    console.log(iterResult.value);
}while(!iterResult.done)

console.log(separator);

// Showcase the use of async functions

import {AsyncDemo} from "./es7/async";

let asyncDemoInstance = new AsyncDemo();
asyncDemoInstance.getAnimalGroup().then(function(result){
    console.log(separator);
    console.log(" >> Async Example");
    console.log(middleSeparator);
    console.log("Async Animal Group is '" + AnimalGroup[result] + "'");
    console.log(separator);
});