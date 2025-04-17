import { Product } from "./Product";

export class Drink extends Product {
    private volume: number;

    constructor(id: number, name: string, price: number, volume: number) {
        super(id, name, price);
        if (volume <= 0) throw new Error("Unexpected volume");
        this.volume = volume;
    }

    getVolume() {
        return this.volume;
    }

    override getDetails(): string[] {
        return [
            `Id: ${this.getID()}`,
            `Name: ${this.getName()}`,
            `Price: ${this.getPrice()}`,
            `Volume: ${this.getVolume()}ml`
        ];
    }

    override getType(): string {
        return "Drink";
    }
}
