export class SpreadDemo{
    
    /**
     * Prints all the parameters given.
     * 
     * @param args Arguments to be printed
     */
    public print(...args: string[]){
        args.forEach(function print(arg){
            console.log(arg);
        });
    }
    
}