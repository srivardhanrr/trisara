import type { PageServerLoad } from './$types';
import { api } from '$lib/api';

export const load: PageServerLoad = async ({ params }) => {
	const cookbookCategory = await api.getCookbookCategory(params.slug);
	return { cookbookCategory };
};
