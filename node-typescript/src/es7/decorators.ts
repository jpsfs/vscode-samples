import "reflect-metadata";

export const METADATA_KEY: string = "ClassDecorator";

export interface ClassDecoratorArgs{
    name: string,
    number: number
}

export function ClassDecorator(value: ClassDecoratorArgs){
    return function(target: Function){
        Reflect.defineMetadata(METADATA_KEY, value, target);
    }
}

/**
 * Function Decorator Example
 * Multiplies the result of a function by the value given as parameter
 */
export function MultiplyBy(value: number){
    
    return function(target: Object, key: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => number>) {
        var originalClassMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            var result = originalClassMethod.apply(this, args);
            return result * value;
        };
        
        return descriptor;                                           
    };
}

@ClassDecorator({
    name: "MyDecoratedClassName",
    number: 100
})
export class MyDecoratedClass{
    
    @MultiplyBy(10)
    public add(a: number, b:number){
        return a + b;
    }
}