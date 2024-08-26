import type { PageLoad } from './$types';
import { api } from '$lib/api';

export const load: PageLoad = async ({params}) => {
  const collection = await api.getCollection(params.slug);
  return { collection };
};

