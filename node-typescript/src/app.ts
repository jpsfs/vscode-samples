/**
 * ===== Node + Typescript Minmalist Example =====
 * 
 */
let separator = "===================================================\n\n\n\n\n\n";
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

// Showcase spread operator

import {SpreadDemo} from "./es6/spread";

let spreadDemoInstance = new SpreadDemo();

console.log(" >> First Example - 'Argument1' ");
spreadDemoInstance.print("Argument1");

console.log(middleSeparator);
console.log(" >> Second Example - 'Argument1', 'Argument2'");
spreadDemoInstance.print("Argument1", "Argument2");

console.log(middleSeparator);
console.log(" >> Third Example - ['Argument1', 'Argument2']");
spreadDemoInstance.print(...["Argument1", "Argument2"]);

console.log(separator);

// Showcase Decorators

import * as MyDecorators from "./es7/decorators";

let myDecoratedClassInstance = new MyDecorators.MyDecoratedClass();
let metadata: MyDecorators.ClassDecoratorArgs = Reflect.getMetadata(MyDecorators.METADATA_KEY, myDecoratedClassInstance.constructor);

console.log(">> Class Decorator: Name | Number");
console.log(middleSeparator);

console.log(metadata.name + " | " + metadata.number);

console.log(middleSeparator);

let multipliedBy10 = myDecoratedClassInstance.add(1, 1);
console.log(">> Method decorator: " + multipliedBy10);

console.log(middleSeparator);