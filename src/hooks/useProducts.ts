import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

export interface Product {
  id: number;
  name: string;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadMore();
  }, []);

  async function loadMore() {
    const newProducts = await fetchProducts(page);
    setProducts((p) => [...p, ...newProducts]);
    setPage(page + 1);
  }

  return { products, loadMore };
}
