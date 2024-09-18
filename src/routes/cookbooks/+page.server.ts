import type { PageServerLoad } from './$types';
import { api } from '$lib/api';

export const load: PageServerLoad = async () => {
  const cookbookCategories = await api.getCookbookCategories();
  return { cookbookCategories };
};

