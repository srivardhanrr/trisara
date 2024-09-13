import type { PageServerLoad } from './$types';
import { api } from '$lib/api';

export const load: PageServerLoad = async ({params}) => {
  const serie = await api.getSerie(params.slug);
  return { serie };
};

