
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line


import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);




const galleryEl = document.querySelector(".gallery");

const items = galleryItems
  .map(
    (
      item
    ) => `<a class="gallery__item" href="${item.original}" onclick="event.preventDefault()">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>`
  )
  .join("");

galleryEl.innerHTML = items;


  var lightbox = new SimpleLightbox(".gallery a", {
    captionSelector: "img",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
    scrollZoom: false,
  });