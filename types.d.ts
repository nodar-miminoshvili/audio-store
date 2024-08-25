type Theme = 'dark' | 'system' | 'light';

type ImageDetails = {
  width: number;
  height: number;
  quality: number;
  src: string;
};

type ImagesCommonDetails = {
  alt: string;
  sizes: string;
};

type Product = {
  id: number;
  category: string;
  title: string;
  price: string;
  details: {
    description: string;
    features: string;
    inTheBox: string[];
    newRelease?: boolean;
    productImages: {
      mobile: string[];
      tablet: string[];
      desktop: string[];
    };
    categoryImages: string[];
    suggestionImages: string[];
    cartImage: string;
    stripeInfo: {
      productId: string;
      priceId: string;
    };
  };
};

type CartProductRaw = {
  id: number;
  product_id: number;
  user_id: string;
  quantity: number;
};

interface PopulatedProduct extends Product {
  quantity: number;
}

type CartAction = 'INCREMENT' | 'DECREMENT' | 'CLEAR';
type ProductId = number;

type stripeProductInfoRaw = {
  productId: string;
  priceId: string;
};

interface stripeProductInfoPopulated extends stripeProductInfoRaw {
  quantity: number;
}
