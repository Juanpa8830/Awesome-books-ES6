export default class Library {
  constructor() {
    this.library = [];
  }

  addBook(book) {
    this.library.push(book);
    localStorage.setItem('Books', JSON.stringify(this.library));
  }

  loadContent() {
    const content = localStorage.getItem('book') ? JSON.parse(localStorage.getItem('Books')) : null;
    if (content === 0 || content === null) {
      localStorage.setItem('Books', JSON.stringify(this.library));
    } else {
      this.library = content;
    }
  }

  removeBook(element) {
    if (element.textContent === 'Remove') {
      const { id } = element;
      this.library = this.library.filter((book) => book.id.toString() !== id);
      localStorage.setItem('Books', JSON.stringify(this.library));
    }
  }

  getData() {
    return this.library;
  }
}
