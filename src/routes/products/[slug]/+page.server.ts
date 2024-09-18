import type { PageServerLoad } from './$types';

export const prerender = false;

import { api } from '$lib/api';
import { HOME_COLLECTION_1 } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
  const product = await api.getProduct(params.slug);
  const collection = await api.getCollection(HOME_COLLECTION_1);
  return { product, collection };
};
