import { Injectable } from "@angular/core";
import { iProduct } from "./products/iProduct";
import { ProductFabric } from "./products/ProductFabric";

const API_URL = 'https://api.jsonbin.io/v3/b/67e1965d8960c979a5779186';
const API_KEY_MASTER = 'Zt6J91Eemy7sLAmXQ7zWA670D7vzO4T25oVR6BSO3Xq';
const API_KEY_ACCESS = 'Zt6J91Eemy7sNoJafbOuJ1KXgW5ayZsY6bT6cTK';

@Injectable({
    providedIn: 'root'
})
export class ReadDataService {
    public products: iProduct[] = [];

    addProduct(item: any) {
        let product = ProductFabric.getProduct(item)
        console.log(product);
        this.products.push(product);
    }

    constructor() {}

    public async load() {
        fetch(API_URL, {
            method: 'GET',
            headers: {
                'X-Master-Key': API_KEY_MASTER, 
                'X-Access-Key': API_KEY_ACCESS,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            let data;
            data = json;
            data = data.record;
            console.log(data);
            
            this.products = [];
            data.map((item: any) => this.addProduct(item));
        });
    }
}
