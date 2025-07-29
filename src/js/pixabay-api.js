import axios from 'axios';

const API_KEY = '51535484-ce6dacd6a97960c9e0e55a6bc';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images: ' + error.message);
  }
}
