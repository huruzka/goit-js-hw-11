
import { fetchImages } from './js/pixabay-api.js';
import { renderImageList, renderGallery, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('#gallery');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements.query.value.trim();

  if (!searchQuery) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  try {
    const data = await fetchImages(searchQuery);

    if (data.hits.length === 0) {
      iziToast.info({
        title: 'Info',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      gallery.innerHTML = ''; 
      return;
    }

    const markup = renderImageList(data.hits);
    gallery.innerHTML = markup;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });
  }
});

const loader = document.querySelector('.loader');


form.addEventListener('submit', async event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements.query.value.trim();

  if (!searchQuery) {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await fetchImages(searchQuery);

    if (data.hits.length === 0) {
      iziToast.warning({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      renderGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
    form.reset();
  }
});

function showLoader() {
  loader.classList.remove('hidden'); 
}

function hideLoader() {
  loader.classList.add('hidden');
}

