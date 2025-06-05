import axios from 'axios';
import { Product } from '../hooks/useProducts';

const API_URL = 'http://localhost:3000';
const PAGE_SIZE = 100;
const MAX_ITEMS = 10000;

export async function fetchProducts(page: number): Promise<Product[]> {
  const start = page * PAGE_SIZE;
  if (start >= MAX_ITEMS) return [];

  const response = await axios.get<Product[]>(`${API_URL}/products`, {
    params: {
      _start: start,
      _limit: PAGE_SIZE,
    },
  });
  return response.data;
}
