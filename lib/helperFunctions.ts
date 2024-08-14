export const sumUpCart = (products: { quantity: number }[]) => {
  return products.reduce((prev, curr) => curr.quantity + prev, 0);
};
