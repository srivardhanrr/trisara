import type { PageLoad } from './$types';
import { api } from '$lib/api';

export const load: PageLoad = async ({ params }) => {
  const cookbook = await api.getCookbook(params.slug);
  return { cookbook };
};
