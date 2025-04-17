import { iProduct } from "./iProduct";

export abstract class Product implements iProduct {
    private id: number;
    private name: string;
    private price: number;
    constructor(id: number, name: string, price: number
    ){
        if (id < 0) throw new Error("Negative product ID");
        if (name.length == 0) throw new Error("Nameless product");
        if (price <= 0) throw new Error("Non-positive price");
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getID(): number{
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number{
        return this.price
    }

    abstract getDetails(): string[];
    abstract getType(): string;
}