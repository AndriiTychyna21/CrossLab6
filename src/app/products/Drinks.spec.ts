import { Drink } from './Drink';

describe('Drink testing', () => {
    let drink: Drink;
    beforeEach(() => {
        drink = new Drink(5, "Pepsi", 30, 500);
    });
    it('should be created', () => {
        expect(drink).toBeTruthy();
    });
    it('Unexpected volume', () => {
            expect(() => new Drink(5, "Pepsi", 30, -500)).toThrow(new Error("Unexpected volume"));
        });
    it('getName', () => {
        expect(drink.getName()).toBe("Pepsi");
    });
    it('getID', () => {
        expect(drink.getID()).toBe(5);
    });
    it('getPrice', () => {
        expect(drink.getPrice()).toBe(30);
    });
    it('getVolume', () => {
        expect(drink.getVolume()).toBe(500);
    });
    it('getType', () => {
        expect(drink.getType()).toBe("Drink");
    });
    it('getDetails', () => {
        expect(drink.getDetails()).toEqual([`Id: 5`, `Name: Pepsi`, `Price: 30`, `Volume: 500ml`]);
    });
});
