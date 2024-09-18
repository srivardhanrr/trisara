import type { PageServerLoad } from './$types';
import { api } from '$lib/api';

export const load: PageServerLoad = async () => {
  const posts = await api.getBlogPosts();
  return { posts };
};

