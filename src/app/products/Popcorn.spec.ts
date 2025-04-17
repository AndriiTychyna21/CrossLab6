import { Popcorn } from "./Popcorn";

describe('Drink testing', () => {
    let popcorn: Popcorn;
    beforeEach(() => {
        popcorn = new Popcorn(5, "Large Extra Cheese Popcorn", 100, "large");
    });
    it('should be created', () => {
        expect(popcorn).toBeTruthy();
    });
    it('Unexpected size', () => {
            expect(() => new Popcorn(5, "Large Extra Cheese Popcorn", 100, "big")).toThrow(new Error("Unexpected size"));
        });
    it('getName', () => {
        expect(popcorn.getName()).toBe("Large Extra Cheese Popcorn");
    });
    it('getID', () => {
        expect(popcorn.getID()).toBe(5);
    });
    it('getPrice', () => {
        expect(popcorn.getPrice()).toBe(100);
    });
    it('getSize', () => {
        expect(popcorn.getSize()).toBe("large");
    });
    it('getType', () => {
        expect(popcorn.getType()).toBe("Popcorn");
    });
    it('getDetails', () => {
        expect(popcorn.getDetails()).toEqual([`Id: 5`, `Name: Large Extra Cheese Popcorn`, `Price: 100`, `Size: large`]);
    });
});
