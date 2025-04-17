import { Product } from "./Product";

export class Popcorn extends Product {
    private size: string;

    constructor(id: number, name: string, price: number, size: string) {
        super(id, name, price);
        const allowedSizes = ["small", "medium", "large"];
        if (!allowedSizes.includes(size.toLowerCase())) throw new Error("Unexpected size");
        this.size = size;
    }

    getSize() {
        return this.size;
    }

    override getDetails(): string[] {
        return [
            `Id: ${this.getID()}`,
            `Name: ${this.getName()}`,
            `Price: ${this.getPrice()}`,
            `Size: ${this.getSize()}`
        ];
    }

    override getType(): string {
        return "Popcorn";
    }
}