import { getImagesByQuery } from './pixabay-api';
import { initRender, type RenderElements } from './render-functions';
import Pagination from './pagination';

const form = document.querySelector<HTMLFormElement>('#search-form')!;
const input = document.querySelector<HTMLInputElement>('#search-input')!;
const loadMoreBtn = document.querySelector<HTMLButtonElement>('#load-more')!;
const gallery = document.querySelector<HTMLDivElement>('.gallery')!;

const elements: RenderElements = { gallery, loadMoreBtn };
const render = initRender(elements);

const pagination = new Pagination();
let query: string = '';

form.addEventListener('submit', async (event: Event) => {
  event.preventDefault();
  query = input.value.trim();
  pagination.reset();
  render.clearGallery();
  await fetchAndRender();
});

loadMoreBtn.addEventListener('click', fetchAndRender);

async function fetchAndRender(): Promise<void> {
  if (!query) return;
  const data = await getImagesByQuery(query, pagination.currentPage);
  render.createGallery(data.hits);
  pagination.nextPage();
  loadMoreBtn.style.display = data.hits.length < pagination.itemsPerPage ? 'none' : 'block';
}
