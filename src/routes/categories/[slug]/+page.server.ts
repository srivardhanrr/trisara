import type { PageLoad } from './$types';
import { api } from '$lib/api';

export const load: PageLoad = async ({params}) => {
  const category = await api.getCategory(params.slug);
  return { category };
};

