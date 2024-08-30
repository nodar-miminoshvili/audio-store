interface MetadataConfig {
  [key: string]: {
    title: string;
    description: string;
  };
}
const metadataDetails: MetadataConfig = {
  rootLayout: {
    title: 'AUDIOPHILE',
    description:
      'Explore our premium audio tech store, offering top-quality headphones, speakers, and earphones. Discover a wide selection of high-performance audio products designed for exceptional sound and style. Shop now to elevate your audio experience with our curated collection of cutting-edge technology.',
  },

  errorPage: {
    title: 'Oops! Something went Wrong',
    description: 'Oops! Something went wrong. Please try reloading the page or come back later.',
  },
  homepage: {
    title: 'AUDIOPHILE | Home',
    description:
      'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.',
  },
  headphones: {
    title: 'AUDIOPHILE | Headphones',
    description:
      'Discover our premium collection of headphones designed for the ultimate audio experience. Featuring superior sound quality, advanced noise-canceling technology, and exceptional comfort, our range caters to both audiophiles and casual listeners. Shop now to find the perfect pair that combines style, performance, and innovation.',
  },
  speakers: {
    title: 'AUDIOPHILE | Speakers',
    description:
      "Explore our premium selection of speakers, engineered for unparalleled audio performance. From crystal-clear highs to deep, resonant bass, our speakers deliver exceptional sound quality and innovative features for any space. Whether you're an audiophile or simply love great sound, find the perfect speaker to elevate your listening experience.",
  },
  earphones: {
    title: 'AUDIOPHILE | Earphones',
    description:
      'Browse our premium range of earphones, crafted for superior audio clarity and comfort. Featuring advanced noise isolation, ergonomic designs, and high-fidelity sound, our earphones are perfect for on-the-go listening. Discover the ideal pair to enhance your music experience and enjoy exceptional quality anytime, anywhere',
  },
  orders: {
    title: 'AUDIOPHILE | Orders',
    description:
      'Access and review your recent orders with ease on our order management page. Track purchased items, total cost, delivery status, and shipping address all in one place. Stay informed and manage your orders efficiently with detailed, up-to-date information.',
  },
  successfulPurchase: {
    title: 'Successful Purchase!',
    description:
      'Thank you for your purchase! Your order was successful. Check your order details, total amount, and estimated delivery date. We’ll keep you updated on your order’s progress.',
  },
};

export default metadataDetails;
