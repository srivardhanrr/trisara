import type { PageServerLoad } from './$types';
import { api } from '$lib/api';
import { VITE_API_URL } from '$env/static/private';

let apiUrl = VITE_API_URL;
apiUrl = apiUrl.slice(0, -4);

export const load: PageServerLoad = async ({params}) => {
  const post = await api.getBlogPost(params.slug);
  const updatedContent = post.content.replace(/src="\/media\//g, `src="${apiUrl}/media/`);
  return { post, updatedContent };
};

