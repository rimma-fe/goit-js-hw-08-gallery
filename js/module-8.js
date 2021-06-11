import images from '/data/gallery-items.js';
console.log(images);
const GalleryContainer = document.querySelector('.js-gallery');
console.log(GalleryContainer);
function creategalleryItemMarkup(images) {
    return images
        .map(({ preview, original, descr }) => {
            return `
      <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${descr}"
        />
      </a>
    </li>
      `;
        })
        .join('');
}
const galleryMarkup = creategalleryItemMarkup(images);
GalleryContainer.innerHTML = galleryMarkup;


  

    