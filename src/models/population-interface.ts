// population-interface.ts
export namespace PopulationInterface {
    export interface Params {
        coutry  : string | null;
    }

    export interface Retval {
        count           : number;
        readable_format : string;
        country         : string    
    }
    
    export interface PopulationIntProps{
        
        population    : number ;  
        error         : string;
    }

    export const name =  "population/country";

}


