import { error } from "@sveltejs/kit";

const API_URL = import.meta.env.VITE_API_URL;

async function fetchAPI(endpoint: string) {
    const response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) {
        const err = await response.text();
        throw error(response.status, err);
    }
    return await response.json();
}

export const api = {
    getHomePageSettings: () => fetchAPI('/home-page-settings/'),
    getCategories: () => fetchAPI('/categories/'),
    getCategory: (slug: string) => fetchAPI(`/categories/${slug}/`),
    getSeries: () => fetchAPI('/series/'),
    getSerie: (slug: string) => fetchAPI(`/series/${slug}/`),
    getProducts: () => fetchAPI('/products/'),
    getProduct: (slug: string) => fetchAPI(`/products/${slug}/`),
    getCollections: () => fetchAPI('/collections/'),
    getInstagramPosts: () => fetchAPI('/instagram/'),
    getCollection: (slug: string) => fetchAPI(`/collections/${slug}/`),
    getCookbooks: () => fetchAPI('/cookbooks/'),
    getCookbook: (slug: string) => fetchAPI(`/cookbooks/${slug}/`),
    getCookbookCategories: () => fetchAPI('/cookbook-categories/'),
    getCookbookCategory: (slug: string) => fetchAPI(`/cookbook-categories/${slug}/`),
    getBlogPosts: () => fetchAPI('/blogs/'),
    getBlogPost: (slug: string) => fetchAPI(`/blogs/${slug}/`),
    getHeroImages: () => fetchAPI('/hero-images/'),
    getSearch: (query: string) => fetchAPI(`/products/?search=${encodeURIComponent(query)}`)
};
