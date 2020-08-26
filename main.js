let myLibrary = ["fuck"];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
};

function addBookToLibrary() {
    myLibrary.append()
}

function render() {
    var body = document.querySelector('#container');
    for (currBook in myLibrary) {
        var currCard = document.createElement("div");
        currCard.classList.add("card");
        var descriptionCard = document.createElement("div");
        descriptionCard.classList.add("description");
        var author = document.createElement("h4");
        author.textContent = currBook.author;
        descriptionCard.appendChild
        currCard.appendChild(descriptionCard);
        body.appendChild(currCard);
    }
}

render();