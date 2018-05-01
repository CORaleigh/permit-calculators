export class Threshold {
    constructor(min: number, max:number, per: number, label: string, value: number, total: number) {
        this.min = min;
        this.max = max;
        this.per = per;
        this.label = label;
        this.value = value;
        this.total = total;

    }
    min: number;
    max: number;
    per: number;
    label: string;
    value: number;
    total: number;
}