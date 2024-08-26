import type { PageLoad } from './$types';
import { api } from '$lib/api';

export const load: PageLoad = async () => {
  const products = await api.getProducts();
  return { products };
};

