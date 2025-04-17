import { Product } from "./Product";


export class Glasses extends Product {
    private color: string;
    private size: string;

    constructor(id: number, name: string, price: number, color: string, size: string) {
        super(id, name, price);
        const allowedSizes = ["small", "medium", "large"];
        if (!allowedSizes.includes(size.toLowerCase())) throw new Error("Unexpected size");
        this.color = color;
        this.size = size;
    }

    getColor() {
        return this.color;
    }

    getSize() {
        return this.size;
    }

    override getDetails(): string[] {
        return [
            `Id: ${this.getID()}`,
            `Name: ${this.getName()}`,
            `Price: ${this.getPrice()}`,
            `Color: ${this.getColor()}`,
            `Size: ${this.getSize()}`
        ];
    }

    override getType(): string {
        return "Glasses";
    }
}
