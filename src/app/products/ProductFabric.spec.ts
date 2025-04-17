import { ProductFabric } from './ProductFabric';
import { Ticket } from './Ticket';
import { Drink } from './Drink';
import { Popcorn } from './Popcorn';
import { Glasses } from './Glasses';
import { iProduct } from './iProduct';

describe('ProductFabric', () => {
  it('should create a Ticket', () => {
    const data = {
      type: 'ticket',
      id: 1,
      name: 'Movie Ticket',
      price: 10,
      row: 5,
      place: 10,
      hall: 7,
      date: '2025-04-01',
    };

    const ticket: iProduct = ProductFabric.getProduct(data);

    expect(ticket).toBeInstanceOf(Ticket);
    expect(ticket.getID()).toBe(1);
    expect(ticket.getName()).toBe('Movie Ticket');
    expect(ticket.getPrice()).toBe(10);
  });

  it('should create a Drink', () => {
    const data = {
      type: 'drink',
      id: 2,
      name: 'Cola',
      price: 3,
      volume: 500,
    };

    const drink: iProduct = ProductFabric.getProduct(data);

    expect(drink).toBeInstanceOf(Drink);
    expect(drink.getID()).toBe(2);
    expect(drink.getName()).toBe('Cola');
    expect(drink.getPrice()).toBe(3);

  });

  it('should create Popcorn', () => {
    const data = {
      type: 'popcorn',
      id: 3,
      name: 'Salted Popcorn',
      price: 5,
      size: 'Large',
    };

    const popcorn: iProduct = ProductFabric.getProduct(data);

    expect(popcorn).toBeInstanceOf(Popcorn);
    expect(popcorn.getID()).toBe(3);
    expect(popcorn.getName()).toBe('Salted Popcorn');
    expect(popcorn.getPrice()).toBe(5);
  });

  it('should create Glasses', () => {
    const data = {
      type: 'glasses',
      id: 4,
      name: 'Sunglasses',
      price: 20,
      color: 'Black',
      size: 'Medium',
    };

    const glasses: iProduct = ProductFabric.getProduct(data);

    expect(glasses).toBeInstanceOf(Glasses);
    expect(glasses.getID()).toBe(4);
    expect(glasses.getName()).toBe('Sunglasses');
    expect(glasses.getPrice()).toBe(20);
  });

  it('should throw an error for unknown product type', () => {
    const data = {
      type: 'unknown',
      id: 5,
      name: 'Unknown Product',
      price: 0,
    };

    expect(() => ProductFabric.getProduct(data)).toThrowError('Unknown type: unknown');
  });
});
