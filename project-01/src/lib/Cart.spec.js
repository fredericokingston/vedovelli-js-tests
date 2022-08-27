import Cart from "./Cart";

describe("Cart", () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it("should return 0 when getTotal() is executed in a new created instance", () => {
    expect(cart.getTotal()).toEqual(0);
  });

  it("should multiply quantity and price and receive de total amount", () => {
    const item = {
      product: {
        price: 35388,
      },
      quantity: 2,
    };

    cart.add(item);

    expect(cart.getTotal()).toEqual(70776);
  });
});
