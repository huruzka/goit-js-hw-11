export function renderImageList(images) {
  return images
    .map(
      image => `
      <li class="image-card">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </li>
    `
    )
    .join('');
}

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(image => {
      return `
        <li class="gallery-item">
          <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${image.likes}</p>
            <p><b>Views:</b> ${image.views}</p>
            <p><b>Comments:</b> ${image.comments}</p>
            <p><b>Downloads:</b> ${image.downloads}</p>
          </div>
        </li>
      `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);


  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}
