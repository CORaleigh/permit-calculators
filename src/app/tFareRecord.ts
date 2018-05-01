import { Landuse } from "./landuse";

export class TFareRecord {
    constructor(landuse: Landuse, value: number, total:number ) {
        this.landuse = landuse;
        this.value = value;
        this.total = total;

    }
    landuse: Landuse;
    value:number;
    total: number;

}