import { Glasses } from './Glasses';

describe('Glasses testing', () => {
    let glasses: Glasses;
    beforeEach(() => {
        glasses = new Glasses(5, "Medium Blue Glasses", 50, "Blue", "medium");
    });
    it('should be created', () => {
        expect(glasses).toBeTruthy();
    });
    it('Unexpected ID', () => {
        expect(() =>new Glasses(-2, "Medium Blue Glasses", 50, "Blue", "medium")).toThrow(new Error("Negative product ID"));
    });
    it('Unexpected Name', () => {
        expect(() =>new Glasses(5, "", 50, "Blue", "medium")).toThrow(new Error("Nameless product"));
    });
    it('Unexpected price', () => {
        expect(() =>new Glasses(5, "Medium Blue Glasses", 0, "Blue", "medium")).toThrow(new Error("Non-positive price"));
    });
    it('Unexpected size', () => {
        expect(() =>new Glasses(5, "Medium Blue Glasses", 50, "Blue", "big")).toThrow(new Error("Unexpected size"));
    });
    it('getName', () => {
        expect(glasses.getName()).toBe("Medium Blue Glasses");
    });
    it('getID', () => {
        expect(glasses.getID()).toBe(5);
    });
    it('getPrice', () => {
        expect(glasses.getPrice()).toBe(50);
    });
    it('getColor', () => {
        expect(glasses.getColor()).toBe("Blue");
    });
    it('getSize', () => {
        expect(glasses.getSize()).toBe("medium");
    });
    it('getType', () => {
        expect(glasses.getType()).toBe("Glasses");
    });
    it('getDetails', () => {
        expect(glasses.getDetails()).toEqual([`Id: 5`, `Name: Medium Blue Glasses`, `Price: 50`, `Color: Blue`, `Size: medium`]);
    });
});
