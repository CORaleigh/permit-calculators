import { Threshold } from './threshold';
export class Landuse {
    constructor(category: string, landuse:string, measure: string, measureLabel: string, selected: boolean, value: null, total: null, per?: number, thresholds?:Array<Threshold>) {
        this.category = category;
        this.landuse = landuse;
        this.per = per;
        this.measure = measure;
        this.measureLabel = measureLabel;
        this.selected = selected;
        this.thresholds = thresholds;
        this.total = total;
        this.value = value;
    }
    category: string;
    landuse: string;
    per: number;
    measure: string;
    measureLabel: string;
    selected:boolean;
    thresholds:Array<Threshold>;
    total: number;
    value: number;
}