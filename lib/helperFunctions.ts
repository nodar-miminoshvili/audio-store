export const sumUpCartProductsQuantities = (products: PopulatedProduct[]) => {
  return products.reduce((prev, curr) => curr.quantity + prev, 0);
};
