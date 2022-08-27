import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

//var1 якщо елемент пустий, або переписується наново весь
//galleryContainer.innerHTML = galleryItemsMarkup;
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup); // додали в розмітку

galleryContainer.addEventListener('click', onGalleryContainerClick);

let instance;

function createGalleryItemsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
    })
    .join('');
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();

  //console.log(evt.target.classList.value);

  // if (event.target.nodeName !== "IMG") {
  //  return;
  //}
  if (evt.target.classList.value !== 'gallery__image') {
    return;
  }

  const srcTarget = evt.target.dataset.source;

  instance = basicLightbox.create(
    `<img src="${srcTarget}" width="800" height="600">`
  );

  instance.show();

  document.addEventListener('keydown', onEscapeClick);
}

function onEscapeClick(event) {
  console.log('esc');
  if (event.code == 'Escape') {
    instance.close();
    document.removeEventListener('keydown', onEscapeClick);
  }
}
