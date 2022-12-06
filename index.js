import Library from './modules/Library.js';
import Refresh from './modules/Refresh.js';
import Update from './modules/Update.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

const collection = new Library();
const update = new Update();
const refresh = new Refresh();


collection.loadContent();
const parentlist = document.getElementById('bookcard');
update.updatelist(collection.getData(), parentlist);

// DOM events

const newform = document.getElementById('addform');
const submitBook = (e) => {
  const title = document.getElementById('bookname').value;
  const author = document.getElementById('bookauthor').value;
  let id = 0;
  if (collection.getData().length === 0 || collection.getData() === null) {
    id = 1;
  } else {
    id = collection.getData()[collection.getData().length - 1].id + 1;
  }
  collection.addBook({ id, title, author });
  update.updatelist(collection.getData(), parentlist);

  const form1 = document.getElementById('addform');
  refresh.reset(form1);
  e.preventDefault();
};
newform.addEventListener('submit', (e) => {
  submitBook(e);
});

document.getElementById('bookcard').addEventListener('click', (e) => {
  collection.removeBook(e.target);
  e.target.parentElement.remove();
});

setInterval(() => {
  const date = document.getElementById('dateTime');
  const {
    monthLong,
    day,
    year,
    hour,
    minute,
    second,
  } = DateTime.now();
  date.textContent = `${monthLong} ${day}th ${year}, ${hour}:${minute}:${second}`;
}, 1000);

const listbutton = document.querySelector('.navitem1');
const newbutton = document.querySelector('.navitem2');
const contactbutton = document.querySelector('.navitem3');
const list = document.getElementById('list');
const form = document.getElementById('form');
const contact = document.getElementById('contact');

listbutton.addEventListener('click', () => {
  list.style.display = 'flex';
  form.classList.replace('show', 'hide');
  contact.classList.replace('show', 'hide');
});

newbutton.addEventListener('click', () => {
  list.style.display = 'none';
  form.classList.replace('hide', 'show');
  contact.classList.replace('show', 'hide');
});

contactbutton.addEventListener('click', () => {
  list.style.display = 'none';
  form.classList.replace('show', 'hide');
  contact.classList.replace('hide', 'show');
});