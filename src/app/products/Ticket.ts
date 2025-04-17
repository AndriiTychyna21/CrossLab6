import { Product } from "./Product";

export class Ticket extends Product {
    private row: number;
    private place: number;
    private hall: number;
    private date: string;

    constructor(id: number, name: string, price: number, r: number, p: number, h: number, date: string) {
        super(id, name, price);
        if (r < 1 || r > 10 || !Number.isInteger(r)) throw new Error("Unexpected row");
        if (p < 1 || p > 10 || !Number.isInteger(p)) throw new Error("Unexpected place");
        if (h < 1 || h > 10 || !Number.isInteger(h)) throw new Error("Unexpected hall");
        this.row = r;
        this.place = p;
        this.hall = h;
        this.date = date;
    }

    getRow() {
        return this.row;
    }

    getPlace() {
        return this.place;
    }

    getHall() {
        return this.hall;
    }

    getDate() {
        return this.date;
    }

    override getDetails(): string[] {
        return [
            `Id: ${this.getID()}`,
            `Name: ${this.getName()}`,
            `Price: ${this.getPrice()}`,
            `Row: ${this.getRow()}`,
            `Place: ${this.getPlace()}`,
            `Hall: ${this.getHall()}`,
            `Date: ${this.getDate()}`
        ];
    }

    override getType(): string {
        return "ticket";
    }
}
