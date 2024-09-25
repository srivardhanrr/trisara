import {HOME_COLLECTION_1, HOME_COLLECTION_2} from "$env/static/private";

export const prerender = false;

import type { PageServerLoad } from './$types';
import { api } from '$lib/api';

export const load: PageServerLoad = async () => {
    const [categories, products, series, collections, instagramPosts, blogPosts] = await Promise.all([
        api.getCategories(),
        api.getProducts(),
        api.getSeries(),
        api.getCollections(),
        api.getInstagramPosts(),
        api.getBlogPosts(),
    ]);
    const homePageSettings = await api.getHomePageSettings();
    return {categories, products, series, collections, instagramPosts, blogPosts, homePageSettings};
};

