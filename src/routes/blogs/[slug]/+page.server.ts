import type { PageServerLoad } from './$types';
import { api } from '$lib/api';
import { VITE_API_URL } from '$env/static/private';

export const load: PageServerLoad = async ({params}) => {
  const post = await api.getBlogPost(params.slug);
  return { post };
};

