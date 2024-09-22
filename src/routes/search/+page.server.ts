import type { PageServerLoad } from './$types';
import { api } from '$lib/api';

export const load: PageServerLoad = async ({ url }) => {
	const searchTerm = url.searchParams.get('q');

	let searchResults = [];

	if (searchTerm) {
		searchResults = await api.getSearch(searchTerm);
	}
	return { searchTerm, searchResults };
};
