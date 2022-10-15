let myLibrary = [];
const btn = document.querySelector("#submit");
const container = document.querySelector(".container");
const deleteBtn = document.querySelector(".delete");
const modal = document.querySelector(".modal");
const modalbtn = document.querySelector(".modal-btn");
const closebtn = document.querySelector(".close");
const form = document.querySelector("#form");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not read yet"
    }`;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getBooksFromForm();
  resetForm();
});

function resetForm() {
  form.reset();
}

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let i = e.target.parentElement.dataset.index;
    e.target.parentElement.remove();
    myLibrary.splice(i, 1);
  }
  console.log(myLibrary);
});

addBookToLibrary(
  new Book("In Search of Lost Time", "Marcel Proust", 543, "read")
);
addBookToLibrary(new Book("Ulysses", "James Joyce", 1354, "not read"));
addBookToLibrary(new Book("Hamlet", "Shakespeare", 215, "not read"));

displayBooks();

function displayBooks() {
  container.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let p = document.createElement("p");
    p.dataset.index = `${i}`;
    p.innerHTML = `${myLibrary[i].title} <br> by ${myLibrary[i].author} <br> ${myLibrary[i].pages} pages <br> ${
      myLibrary[i].read == true ? "read" : "not read yet"
    } <button class="delete">delete</button>`;
    container.append(p);
  }
}

// document.querySelector("strong").style.display = "inline"
// document.querySelector("strong").style.color = "white"


function getBooksFromForm() {
  const title1 = document.getElementById("title").value;
  const author1 = document.getElementById("author").value;
  const pages1 = document.getElementById("pages").value;
  const read1 = document.getElementById("read").checked;

  addBookToLibrary(new Book(title1, author1, pages1, read1));
  displayBooks();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

modalbtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closebtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});