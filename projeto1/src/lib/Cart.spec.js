import Cart from './Cart';

describe('Cart ', () => {
  let cart;
  const product = {
    title: 'Adidas running shoes - men',
    price: 35388, // 353.88
  };

  beforeEach(() => {
    cart = new Cart();
  });
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
});
