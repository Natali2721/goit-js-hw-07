import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

//var1 якщо елемент пустий, або переписується наново весь
//galleryContainer.innerHTML = galleryItemsMarkup;
galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup); // додали в розмітку

function createGalleryItemsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
  <a class=class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});

gallery.on("show.simplelightbox", function () {});

const slideDescr = document.querySelector(".sl-caption");
