function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

function Library() {
  this.books = []; 

  this.addBook = function(title, author, year, genre) {
    const newBook = new Book(title, author, year, genre);
    this.books.push(newBook);
  };

  this.editBook = function(index, title, author, year, genre) {
    if (index >= 0 && index < this.books.length) {
      this.books[index].title = title;
      this.books[index].author = author;
      this.books[index].year = year;
      this.books[index].genre = genre;
    }
  };

  this.deleteBook = function(index) {
    if (index >= 0 && index < this.books.length) {
      this.books.splice(index, 1);
    }
  };

  this.viewAllBooks = function() {
    console.log("Available books:");
    for (let i = 0; i < this.books.length; i++) {
      console.log(`Book ${i + 1}:`);
      console.log(`Title: ${this.books[i].title}`);
      console.log(`Author: ${this.books[i].author}`);
      console.log(`Year: ${this.books[i].year}`);
      console.log(`Genre: ${this.books[i].genre}`);
      console.log("--------------------");
    }
  };
}

const myLibrary = new Library();

myLibrary.addBook("jual beli kangkung", "kangkung", 1960, "Fiction");
myLibrary.addBook("das kapital", "bebek goreng h.slamet", 1949, "Dystopian");
myLibrary.viewAllBooks();