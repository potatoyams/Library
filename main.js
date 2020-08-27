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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

console.log(document.getElementsByClassName("close")[0]);

console.log(document.querySelector(".close"));

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}