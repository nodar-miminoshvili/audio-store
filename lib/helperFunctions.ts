export const sumUpCartProductsQuantities = (products: PopulatedProduct[]) => {
  return products.reduce((prev, curr) => curr.quantity + prev, 0);
};

export const sumUpCartProductsPrices = (products: PopulatedProduct[]) => {
  return products.reduce((prev, curr) => curr.quantity * Number(curr.price) + prev, 0);
};

export const formatPrice = (price: string | number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return typeof price === 'string'
    ? formatter.format(Number(price)).slice(1)
    : formatter.format(price).slice(1);
};
