import type { PageLoad } from './$types';
import { api } from '$lib/api';

export const load: PageLoad = async ({ params }) => {
  const product = await api.getProduct(params.slug);
  const collection = await api.getCollection("newly-arrived");
  return { product, collection };
};
