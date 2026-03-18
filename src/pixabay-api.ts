import axios from 'axios';
import type { PixabayResponse } from './types/pixabay';

export async function getImagesByQuery(query: string, page: number): Promise<PixabayResponse> {
  const response = await axios.get<PixabayResponse>('https://pixabay.com/api/', {
    params: { key: 'API_KEY', q: query, page, per_page: 12 }
  });
  return response.data;
}
