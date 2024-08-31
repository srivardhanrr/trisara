import type { PageLoad } from './$types';
import { api } from '$lib/api';

export const load: PageLoad = async () => {
  const cookbookCategories = await api.getCookbookCategories();
  return { cookbookCategories };
};

