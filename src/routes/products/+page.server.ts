export let prerender = false;
import type { PageServerLoad } from './$types';
import { api } from '$lib/api';

export const load: PageServerLoad = async () => {
  const products = await api.getProducts();
  return { products };
};

