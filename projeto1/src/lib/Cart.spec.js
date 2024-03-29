import Cart from './Cart';

describe('Cart ', () => {
  let cart;
  let product = {
    title: 'Adidas running shoes - men',
    price: 35388,
  };

  let product2 = {
    title: 'Adidas running shoes - women',
    price: 41872,
  };

  beforeEach(() => {
    cart = new Cart();
  });

  describe('getTotal', () => {
    it('should return 0 when getTotal() is executed in a newly created instance', () => {
      expect(cart.getTotal()).toEqual(0);
    });

    it('should multiply quantify and price and receive the total amount', () => {
      expect(cart.getTotal()).toEqual(0);
    });

    it('should ensure no more than on product exists at a time', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product,
        quantity: 1,
      });

      expect(cart.getTotal()).toEqual(35388);
    });

    it('should update total when a product gets includded and the removed', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 1,
      });

      cart.remove(product);

      expect(cart.getTotal()).toEqual(41872);
    });
  });

  describe('checkout()', () => {
    it('should return an object with the total and the list of items', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 3,
      });

      expect(cart.checkout()).toMatchSnapshot(`
Object {
  "items": Array [
    Object {
      "product": Object {
        "price": 35388,
        "title": "Adidas running shoes - men",
      },
      "quantity": 2,
    },
    Object {
      "product": Object {
        "price": 41872,
        "title": "Adidas running shoes - women",
      },
      "quantity": 3,
    },
  ],
  "total": 196392,
}
`);
    });
  });
});
