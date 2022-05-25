// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import galleryItem from '../templates/gallery-item.hbs'
console.log(galleryItems);
console.log(galleryItem);




const gallery = document.querySelector('.gallery');
const picturesMarkup =  createPicturesMarkup(galleryItems);


gallery.insertAdjacentHTML('beforeend', picturesMarkup);



function createPicturesMarkup(pictures) {
  return pictures.map(galleryItem).join('');
}


var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

  



