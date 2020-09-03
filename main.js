function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
};

function changeReadingStatus(BookObj) {
  if (BookObj.read === "y") {
    BookObj.read = "n";
  } else {
    BookObj.read = "y";
  }
}

function render() {
  let myLibrary = cacheUp();
  var body = document.querySelector('#container');

  while (body.firstChild) {
    body.firstChild.remove();
  }
  for (currBookIndex in myLibrary) {
    var currBook = myLibrary[currBookIndex]
    var currCard = document.createElement("div");
    currCard.classList.add("card");
    var descriptionCard = document.createElement("div");
    currCard.setAttribute("data-index", parseInt(currBookIndex) + 1);
    descriptionCard.classList.add("description");

    var title = document.createElement("h3");
    title.id = "title";
    title.textContent = currBook.title;

    var author = document.createElement("p");
    author.textContent = currBook.author;

    var pages = document.createElement("p");
    pages.textContent = currBook.pages;

    var read = document.createElement("p");
    if (currBook.read === "y") {
      read.textContent = "Read";
    } else {
      read.textContent = "Did Not Read";
    }

    var readingButton = document.createElement("button");
    readingButton.innerHTML = "Change Reading Status";
    readingButton.id = "reading-btn";



    descriptionCard.appendChild(title);
    descriptionCard.appendChild(document.createElement("hr"));
    descriptionCard.appendChild(author);
    descriptionCard.appendChild(pages);
    descriptionCard.appendChild(read);
    descriptionCard.appendChild(readingButton);

    var closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.classList.add("close-card");

    currCard.appendChild(closeBtn);
    currCard.appendChild(descriptionCard);
    body.appendChild(currCard);
  }

  var addCard = document.createElement("div");
  addCard.classList.add("card");
  addCard.id = "myBtn";

  var addText = document.createElement("p");
  addText.setAttribute("style", "display:flex; align-items: center; justify-content: center; height: 100%; margin: 0; font-weight: bold; font-size: 30px");
  addText.textContent = "+";
  addCard.appendChild(addText);

  body.appendChild(addCard);
  cardEventListener();
}

render();

// Get the modal


function updateIndex() {
  let index = 1;
  var bodyChilds = document.querySelector("#container").childNodes;
  for (let i = 1; i < bodyChilds.length; i++) {
    var currChild = bodyChilds[i];
    currChild.setAttribute("data-index", index);
    index++;
  }
}

function cardEventListener() {
  var readingButtons = document.querySelectorAll("#reading-btn");
  for (let currButton of readingButtons) {
    currButton.addEventListener("click", () => {
      var myLibrary = cacheUp();
      var currDescription = currButton.parentNode;
      var currCard = currDescription.parentNode;

      var currBookObj = myLibrary[parseInt(currCard.attributes["data-index"].value) - 1];
      changeReadingStatus(currBookObj);
      myLibrary[parseInt(currCard.attributes["data-index"].value) - 1] = currBookObj;
      localStorage['myLibrary'] = JSON.stringify(myLibrary);

      if (currBookObj.read === "y") {
        currDescription.childNodes[4].innerHTML = "Read";
      } else {
        currDescription.childNodes[4].innerHTML = "Did Not Read";
      }

    });
  }

  var deleteBtn = document.getElementsByClassName("close-card");
  for (let currButton of deleteBtn) {
    currButton.addEventListener("click", () => {
      console.log("fuck");
      var parentNode = currButton.parentNode;
      var currIndex = parseInt(parentNode.attributes['data-index'].value)
      var myLibrary = cacheUp();
      myLibrary.splice(currIndex - 1, 1);
      localStorage['myLibrary'] = JSON.stringify(myLibrary);
      //var currCard = document.querySelectorAll('[data-index=\"' + currIndex + '\"]')[0];
      //parentNode.parentNode.removeChild(parentNode.parentNode.childNodes[currIndex]); // removing the upper parent to remove the card, dirty code. Will need to rewrite.
      updateIndex();
      render();
    });
  }

  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];


  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
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
      document.getElementsByName("authorname")[0].value = '';
      document.getElementsByName("booktitle")[0].value = '';
      document.getElementsByName("bookpage")[0].value = '';
      document.getElementsByName("readresp")[0].value = '';
      var newBook = new Book(bookName, authName, bookPage, readResp);
      modal.style.display = "none";
      addLibraryBook(newBook);
      render();
    }
  });

}

function cacheUp() {
  if (!localStorage.getItem('myLibrary')) {
    localStorage['myLibrary'] = JSON.stringify([]);
  }
  return JSON.parse(localStorage.getItem('myLibrary'));
}

function addLibraryBook(newBook) {
  if (!localStorage.getItem('myLibrary')) {
    localStorage['myLibrary'] = JSON.stringify([]);
  }
  var newLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  newLibrary.push(newBook);
  localStorage['myLibrary'] = JSON.stringify(newLibrary);
}


