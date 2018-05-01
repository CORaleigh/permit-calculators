import { TFareRecord } from "./tFareRecord";
import { Landuse } from "./landuse";

export class TFareCategory {
    constructor(category: string, landuses:Array<Landuse>) {
        this.category = category;
        this.landuses = landuses;
    }
    category: string;
    landuses: Array<Landuse>;

}