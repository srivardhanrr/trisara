import {HOME_COLLECTION_1, HOME_COLLECTION_2} from "$env/static/private";

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

import type { PageServerLoad } from './$types';
import { api } from '$lib/api';

export const load: PageServerLoad = async () => {
    const [categories, products, series, collections, collection1, collection2, instagramPosts, blogPosts, heroImages] = await Promise.all([
        api.getCategories(),
        api.getProducts(),
        api.getSeries(),
        api.getCollections(),
        api.getCollection(HOME_COLLECTION_1),
        api.getCollection(HOME_COLLECTION_2),
        api.getInstagramPosts(),
        api.getBlogPosts(),
        api.getHeroImages(),
    ]);
    return {categories, products, series, collections, collection1, collection2, instagramPosts, blogPosts, heroImages};
};
