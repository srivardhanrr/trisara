const API_URL = import.meta.env.VITE_API_URL;

async function fetchAPI(endpoint: string) {
    const response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

export const api = {
    getCategories: () => fetchAPI('/categories/'),
    getCategory: (slug: string) => fetchAPI(`/categories/${slug}/`),
    getProducts: () => fetchAPI('/products/'),
    getProduct: (slug: string) => fetchAPI(`/products/${slug}/`),
    getCollections: () => fetchAPI('/collections/'),
    getCollection: (slug: string) => fetchAPI(`/collections/${slug}/`),
    getCookbooks: () => fetchAPI('/cookbooks/'),
    getCookbook: (slug: string) => fetchAPI(`/cookbooks/${slug}/`),
    getCookbookCategories: () => fetchAPI('/cookbook-categories/'),
    getCookbookCategory: (slug: string) => fetchAPI(`/cookbook-categories/${slug}/`),
};
