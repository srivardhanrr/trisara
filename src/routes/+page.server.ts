import {HOME_COLLECTION_1} from "$env/static/private";

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;
// const homeCollection2 = import.meta.env.HOME_COLLECTION_2;


import type {PageLoad} from './$types';
import {api} from '$lib/api';

export const load: PageLoad = async () => {
    const [categories, products, collections, collection1] = await Promise.all([
        api.getCategories(),
        api.getProducts(),
        api.getCollections(),
        api.getCollection(HOME_COLLECTION_1),
    ]);

    return {categories, products, collections, collection1};
};
