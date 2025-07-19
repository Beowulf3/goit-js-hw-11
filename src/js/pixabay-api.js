import axios from 'axios';
import { createGallery } from './render-functions';
import { showLoader, hideLoader } from './render-functions';
const PIXABAY_KEY = '51390103-e5f94b12a87f57c9fbe51ad97';

export function getImagesByQuery(query) {
  showLoader();
  return axios('https://pixabay.com/api/', {
    params: {
      key: PIXABAY_KEY,
      q: `${query}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(res => {
      createGallery(res.data.hits);
      return res.data.hits;
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
}
