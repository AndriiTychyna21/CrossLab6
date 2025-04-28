import { Ticket } from "./Ticket";

describe('Ticket testing', () => {
    let ticket: Ticket;
    beforeEach(() => {
        ticket = new Ticket(42, "Movie A - Standart ticket", 200, 5, 4, 5, "01-04-2025, 12:40");
    });
    it('should be created', () => {
        expect(ticket).toBeTruthy();
    });
    it('Unexpected row', () => {
            expect(() => new Ticket(42, "Movie A - Standart ticket", 200, 40, 4, 5, "01-04-2025, 12:40")).toThrow(new Error("Unexpected row"));
    });
    it('Unexpected place', () => {
        expect(() => new Ticket(42, "Movie A - Standart ticket", 200, 5, 40, 5, "01-04-2025, 12:40")).toThrow(new Error("Unexpected place"));
    });
    it('Unexpected hall', () => {
        expect(() => new Ticket(42, "Movie A - Standart ticket", 200, 4, 4, -8, "01-04-2025, 12:40")).toThrow(new Error("Unexpected hall"));
    });
    it('getRow', () => {
        expect(ticket.getRow()).toBe(5);
    });
    it('getPlace', () => {
        expect(ticket.getPlace()).toBe(4);
    });
    it('getHall', () => {
        expect(ticket.getHall()).toBe(5);
    });
    it('getDate', () => {
        expect(ticket.getDate()).toBe("01-04-2025, 12:40");
    });
    it('getType', () => {
        expect(ticket.getType()).toBe("ticket");
    });
    it('getDetails', () => {
        expect(ticket.getDetails()).toEqual([`Id: 42`, `Name: Movie A - Standart ticket`, `Price: 200`, `Row: 5`, `Place: 4`, `Hall: 5`, `Date: 01-04-2025, 12:40`]);
    });
});
