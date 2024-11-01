import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

injectSpeedInsights();
inject();

export const prerender = false;


import type { LayoutServerLoad } from './$types';
import { api } from '$lib/api';

export const load: LayoutServerLoad = async () => {
    const [categories, cookbookCategories] = await Promise.all([
        api.getCategories(),
        api.getCookbookCategories(),
    ]);

    return {categories, cookbookCategories};
};
