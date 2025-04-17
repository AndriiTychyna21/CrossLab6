import { iProduct } from "./iProduct";
import { Ticket } from "./Ticket";
import { Drink } from "./Drink";
import { Popcorn } from "./Popcorn";
import { Glasses } from "./Glasses";

export class ProductFabric {
    static getProduct(data: any): iProduct{
        switch(data.type) {
            case "ticket" :
                return new Ticket(data.id, data.name, data.price, data.row, data.place, data.hall, data.date);
            case "drink":
                return new Drink(data.id, data.name, data.price, data.volume);
            case "popcorn":
                return new Popcorn(data.id, data.name, data.price, data.size);
            case "glasses":
                return new Glasses(data.id, data.name, data.price, data.color, data.size);
            default:
                throw new Error("Unknown type: " + data.type); 
        }
    }
}