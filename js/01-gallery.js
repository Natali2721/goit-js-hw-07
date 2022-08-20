import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

//var1 якщо елемент пустий, або переписується наново весь
//galleryContainer.innerHTML = galleryItemsMarkup;
galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

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
    .join("");
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();

  const srcTarget = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${srcTarget}" width="800" height="600">
`);
  instance.show();

  //const elem = instance.element();

    
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        //elem.remove();
        instance.close();
    }
  });
}


