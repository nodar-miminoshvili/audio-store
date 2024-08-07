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
    inTheBox: string;
    newRelease?: boolean;
    productImages: {};
    categoryImages: string[];
  };
};
