import images from '/data/gallery-items.js';
console.log(images);

/*<li class="gallery__item">
      <a
        class="gallery__link"
        href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      >
        <img
          class="gallery__image"
          src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
          data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
          alt="Tulips"
        />
      </a>
    </li>*/



const GalleryContainer = document.querySelector('.js-gallery');
console.log(GalleryContainer);
const galleryMarkup = creategalleryItemMarkup(images);
GalleryContainer.insertAdjacentElement('beforeend', galleryMarkup);
console.log(creategalleryItemMarkup(images));
function creategalleryItemMarkup(images) {
    retun images.map(({preview, original, descr}) => {
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
  


  

    