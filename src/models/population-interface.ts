// population-interface.ts
export namespace PopulationInterface {
    export interface params {
        country  : string;
    }

    export interface retval {
        count           : number;
        readable_format : string;
        country         : string    
    }

    export const name =  "population/country";


}


