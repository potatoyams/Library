let myLibrary = [new Book("fuck", "fuck", "fuck", "fuck")];

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
    for (currBookIndex in myLibrary) {
        const currBook = myLibrary[currBookIndex];

        // creating a new card to be displayed
        var currCard = document.createElement("div");
        currCard.classList.add("card");
        var descriptionCard = document.createElement("div");
        descriptionCard.classList.add("description");

        var bookTitle = document.createElement("h3");
        bookTitle.id = "title";
        bookTitle.textContent = currBook.title;

        var author = document.createElement("p");
        author.textContent = currBook.author;

        var pages = document.createElement("p");
        pages.textContent = currBook.pages;

        var read = document.createElement("p");
        read.textContent = currBook.read;
        
        descriptionCard.appendChild(bookTitle);
        descriptionCard.appendChild(document.createElement("hr"));
        descriptionCard.appendChild(author);
        descriptionCard.appendChild(pages);
        descriptionCard.appendChild(read);
        currCard.appendChild(descriptionCard);
        body.appendChild(currCard);
    }
}

var newBookButton = document.querySelector("#nbbutton");
newBookButton.addEventListener("click", () => {})

render();