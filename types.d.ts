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

type PurchasedProductsRaw = {
  [key: string]: any;
  amount_subtotal: number;
  amount_total: number;
  currency: string;
  description: string;
  price: {
    [key: string]: any;
    id: string;
    active: boolean;
    billing_scheme: string;
    created: number;
    currency: string;
    product: string;
    unit_amount: number;
    unit_amount_decimal: string;
  };
  quantity: number;
};

type StripeProduct = {
  [key: string]: any;
  id: string;
  active: boolean;
  created: number;
  images: string[];
  metadata: {
    img: string;
    [key: string]: any;
  };
};

type Order = {
  id: number;
  user_id: string;
  details: {
    purchasedAt: number;
    total: number;
    isDelivered: boolean;
    additionalDetails: {
      name: string | null;
      email: string | null;
      phone: string | null;
      address: {
        city: string | null;
        line1: string | null;
        line2: string | null;
        state: string | null;
        country: string | null;
        postal_code: string | null;
      };
    };

    populatedProducts: {
      img: string;
      price: number;
      title: string;
      quantity: number;
    }[];
  };
};
