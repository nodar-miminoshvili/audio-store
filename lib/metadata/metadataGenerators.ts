import { validateStripeSession, fetchSingleProduct, fetchProductsByCategory } from '../actions';
import metadataDetails from './metadataDetails';

export const OrdersPageMetadataGenerator = async (searchParams: {
  [key: string]: string | undefined;
}) => {
  try {
    if (searchParams.session_id) await validateStripeSession(searchParams.session_id);

    if (!searchParams.success && !searchParams.session_id) return metadataDetails.orders;
    return metadataDetails.successfulPurchase;
  } catch {
    return metadataDetails.errorPage;
  }
};
export const ProductPageMetadataGenerator = async (params: {
  product: string;
  category: string;
}) => {
  try {
    const product = await fetchSingleProduct(params.product, params.category);
    return {
      title: product.title,
      description: product.details.description,
    };
  } catch {
    return metadataDetails.errorPage;
  }
};

export const CategoryPageMetadataGenerator = async (params: { category: string }) => {
  let isValidCategory: boolean;
  try {
    isValidCategory = !!(await fetchProductsByCategory(params.category));
  } catch {
    isValidCategory = false;
  }
  return isValidCategory ? metadataDetails[params.category] : metadataDetails.errorPage;
};
