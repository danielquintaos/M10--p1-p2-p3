import axios from 'axios';
import { Product } from '../hooks/useProducts';

export async function fetchProducts(page: number): Promise<Product[]> {
  const response = await axios.get('https://example.com/products', {
    params: { page },
  });
  return response.data;
}
