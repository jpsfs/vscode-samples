import {Animal} from "../basic/interfaces";
import {AnimalGroup} from "../basic/enums";

export class AsyncDemo{
    public getAnimal(): Promise<Animal> {
        
        return new Promise<Animal>(function callServiceHandler(resolve, reject){
           setTimeout(function() {
               resolve({
                   group: AnimalGroup.Mammal,
                   weight: 100,
                   height: 175
               });
           }, 1000); 
        });
    }
    
    public async getAnimalGroup(): Promise<AnimalGroup>{
        let animal = await this.getAnimal();
        
        return animal.group;
    }
}