import type { PageServerLoad } from './$types';
import { api } from '$lib/api';

export const load: PageServerLoad = async ({ params }) => {
  const cookbook = await api.getCookbook(params.slug);
  return { cookbook };
};
