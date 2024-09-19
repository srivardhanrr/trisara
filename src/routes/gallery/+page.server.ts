export let prerender = false;
import type { PageServerLoad } from './$types';
import { api } from '$lib/api';

export const load: PageServerLoad = async () => {
  const galleryItems = await api.getInstagramPosts();
  return { galleryItems };
};