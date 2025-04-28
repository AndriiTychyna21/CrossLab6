import { Injectable } from "@angular/core";
import { iProduct } from "./products/iProduct";
import { ProductFabric } from "./products/ProductFabric";
import { BehaviorSubject } from "rxjs";

const API_URL = 'https://api.jsonbin.io/v3/b/67e1965d8960c979a5779186';
const API_KEY_MASTER = 'Zt6J91Eemy7sLAmXQ7zWA670D7vzO4T25oVR6BSO3Xq';
const API_KEY_ACCESS = 'Zt6J91Eemy7sNoJafbOuJ1KXgW5ayZsY6bT6cTK';

@Injectable({
    providedIn: 'root'
})
export class ReadDataService {
    public products: iProduct[] = [];
    loaded$ = new BehaviorSubject<boolean>(false);

    addProduct(item: any) {
        let product = ProductFabric.getProduct(item)
        console.log(product);
        this.products.push(product);
    }

    constructor() {}

    public async load() {
        try {
            const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'X-Master-Key': API_KEY_MASTER, 
                'X-Access-Key': API_KEY_ACCESS,
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        const records = data.record
        console.log(records);
            
        this.products = [];
        records.map((item: any) => this.addProduct(item));
        this.loaded$.next(true);
        } catch (error) {
            console.error('Error loading products', error);
        } 
    }
}
