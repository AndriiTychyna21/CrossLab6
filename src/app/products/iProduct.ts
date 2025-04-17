export interface iProduct {
    getID(): number;
    getName(): string;
    getPrice(): number;
    getDetails(): string[];
    getType(): string;
    setID(ID: number): void;
}