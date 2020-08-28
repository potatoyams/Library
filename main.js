let myLibrary = [new Book("a", "a", "a", "y")];

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
        var currBook = myLibrary[currBookIndex]
        var currCard = document.createElement("div");
        currCard.classList.add("card");
        var descriptionCard = document.createElement("div");
        descriptionCard.classList.add("description");
        var title = document.createElement("h4");
        console.log(currBook);
        title.textContent = currBook.title;
        alert(title.textContent);
        descriptionCard.appendChild(title);
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

var submitBtn = document.getElementsByName("submit")[0];
submitBtn.addEventListener("click", () => {
  var authName = document.getElementsByName("authorname")[0].value;
  var bookName = document.getElementsByName("booktitle")[0].value;
  var bookPage = document.getElementsByName("bookpage")[0].value;
  var readResp = document.getElementsByName("readresp")[0];
  readResp = readResp.options[readResp.selectedIndex].value;
  if (authName !== "" && bookName !== "" && bookPage !== "" && readResp !== "") {
    var newBook = new Book(bookName, authName, bookPage, readResp);
    myLibrary.push(newBook);
  }
  // console.log(authName);
  // console.log(bookName);
  // console.log(bookPage);
  // console.log(readResp.options[readResp.selectedIndex].value);
  // console.log(authName === "");
})