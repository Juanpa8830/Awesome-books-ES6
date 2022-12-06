export default class Update {
  updatelist(library, htmlElement) {
    this.library = library;
    this.htmlElement = htmlElement;
    let tempString = '';

    for (let i = 0; i < library.length; i += 1) {
      const booktemplate = `
                   <div class="card">
                    <h2 class="title">${library[i].title} by ${library[i].author}</h2>
                    <button id="${library[i].id}" class="removebutton">Remove</button>
                    </div>
                    `;

      tempString += booktemplate;
    }

    htmlElement.innerHTML = tempString;
  }
}
