export default class Library {
  loadContent() {
    const content = JSON.parse(localStorage.getItem('Books'));
    if (content === 0 || content === null) {
      localStorage.setItem('Books', JSON.stringify(this.library));
    } else {
      this.library = content;
    }
  }

  addBook(book) {
    this.library.push(book);
    localStorage.setItem('Books', JSON.stringify(this.library));
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
