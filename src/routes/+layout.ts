export const prerender = false;

import type { LayoutLoad } from './$types';
import { api } from '$lib/api';

export const load: LayoutLoad = async () => {
    const [categories, cookbookCategories] = await Promise.all([
        api.getCategories(),
        api.getCookbookCategories(),
    ]);

    return {categories, cookbookCategories};
};
