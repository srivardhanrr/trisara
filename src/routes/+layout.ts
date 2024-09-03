export const prerender = false;

import type {PageLoad} from './$types';
import {api} from '$lib/api';

export const load: PageLoad = async () => {
    const [categories, products, cookbookCategories] = await Promise.all([
        api.getCategories(),
        api.getProducts(),
        api.getCookbookCategories(),
    ]);

    return {categories, products, cookbookCategories};
};
