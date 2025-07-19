import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery } from './js/render-functions';
import xmark from './img/xmark.png';

const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  clearGallery();
  getImagesByQuery(input.value.trim()).then(data => {
    if (!data.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#fafafb',
        messageSize: 16,
        messageLineHeight: 24,
        position: 'topRight',
        displayMode: 'replace',
        closeOnEscape: true,
        closeOnClick: true,
        iconUrl: xmark,
        theme: 'dark',
        backgroundColor: '#ef4040',
        maxWidth: 432,
      });
    }
  });
});
