import { writable } from 'svelte/store';
import {api} from '$lib/api';


export const cookbookCategories = writable([]);

export const fetchCookbookMenu = async () => {
    try {
        const response = await api.getCookbookCategories();
        const data = await response.json();
        cookbookCategories.set(data);
    } catch (error) {
        console.error('Error fetching cookbook menu:', error);
    }
};
