

export class GeneratorDemo{
    
    public *getAnimalName(): Iterator<string>{
        for (var i = 0; i < 100; i++) {
            yield "CurrentFunction_" + i;
        }
    }
}