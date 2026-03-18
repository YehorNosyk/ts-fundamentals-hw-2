import type { PixabayImage } from './types/pixabay';
import SimpleLightbox from 'simplelightbox';

export type RenderElements = {
  gallery: HTMLDivElement;
  loadMoreBtn: HTMLButtonElement;
};

export type RenderAPI = {
  createGallery: (images: PixabayImage[]) => void;
  clearGallery: () => void;
  lightbox: SimpleLightbox;
};

export function initRender(elements: RenderElements): RenderAPI {
  const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' });

  function createGallery(images: PixabayImage[]): void {
    const markup = images.map(img => `<a href="${img.largeImageURL}"><img src="${img.webformatURL}" alt="${img.tags}" /></a>`).join('');
    elements.gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
  }

  function clearGallery(): void {
    elements.gallery.innerHTML = '';
  }

  return { createGallery, clearGallery, lightbox };
}
