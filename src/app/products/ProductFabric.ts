import { iProduct } from "./iProduct";
import { Ticket } from "./Ticket";
import { Drink } from "./Drink";
import { Popcorn } from "./Popcorn";
import { Glasses } from "./Glasses";

export type ProductType = 'ticket' | 'drink' | 'popcorn' | 'glasses';
export const productType: ReadonlyArray<ProductType> = ["ticket", "drink", "popcorn", "glasses"];

export class ProductFabric {
    static getProduct(data: any): iProduct{
        switch(data.type) {
            case productType[0]:
                return new Ticket(data.id, data.name, data.price, data.row, data.place, data.hall, data.date);
            case productType[1]:
                return new Drink(data.id, data.name, data.price, data.volume);
            case productType[2]:
                return new Popcorn(data.id, data.name, data.price, data.size);
            case productType[3]:
                return new Glasses(data.id, data.name, data.price, data.color, data.size);
            default:
                throw new Error("Unknown type: " + data.type); 
        }
    }
}