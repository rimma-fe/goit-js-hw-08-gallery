import images from '/data/gallery-items.js';
console.log(images);

const GalleryContainer = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const modalContent = document.querySelector('.lightbox__image');
const arrayImages =[];
const close = document.querySelector('.lightbox__button');
close.addEventListener('click', () => {
  modal.getElementsByClassName.display = 'none';

})



console.log(GalleryContainer);
console.log(modal);
console.log(modalContent);



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


document.addEventListener('keydown', (evt) => {
  let newIndex;
  const currentId = arrayImages.indexOf(modalContent.src);
  if(evt.key === 'ArrowLeft') {
    if(currentId > -1) {
      newIndex = currentId -1;
      if(newIndex == -1) {
        newIndex = arrayImages.length -1;
      }
    }
  }else if(evt.key === 'Arrowright') {
    newIndex = currentId +1;
  }
}) 

GalleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(e)  {
  console.log(e.target);
}




  

    