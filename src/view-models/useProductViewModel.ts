import {apis, baseUrl} from '../api';
import ProductItemModel from '../models/ProductItemModel';

const useProductViewModel = () => {
  async function fetchProducts(): Promise<ProductItemModel[]> {
    try {
      const response = await fetch(baseUrl + apis.getProducts);

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const products: ProductItemModel[] =  await response.json();

      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; // Rethrow the error for the caller to handle
    }
  }
  return {fetchProducts};
};

export default useProductViewModel;
