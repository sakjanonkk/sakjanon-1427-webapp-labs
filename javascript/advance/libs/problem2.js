function Book(title, author) {
  this.title = title;
  this.author = author;
}

var Library = {
  books: [],
  //add book func
  addBook: function (book) {
    this.books.push(book);
    var bookname = document.createElement("p");

    bookname.innerHTML = "Added: " + book.title;
    document.body.appendChild(bookname);
  },

  searchBooks: function (query) {
    var foundBooks = this.books.filter(function (book) {
      return (
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
      );
    });
    //create new div element
    var resultDiv = document.createElement("div");

    if (foundBooks.length > 0) {
      foundBooks.forEach(function (book) {
        var result = document.createElement("p");
        result.innerHTML = "Found:" + book.title + " By " + book.author;
        resultDiv.appendChild(result);
      });
    } else {
      var result = document.createElement("p");
      result.innerHTML = "Book with query " + query + " is not found.";
      resultDiv.appendChild(result);
    }

    document.body.appendChild(resultDiv);
  },
};

// Adding books to the library
Library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
Library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
Library.addBook(new Book("1984", "George Orwell"));
Library.addBook(new Book("Pride and Prejudice", "Jane Austen"));
Library.addBook(new Book("The Catcher in the Rye", "J.D. Salinger"));
Library.addBook(new Book("test", "test"));

var search1 = document.createElement("p");
search1.innerHTML = "<br>" + "Searching for the book with author 'Harper Lee':";
document.body.appendChild(search1);
Library.searchBooks("Harper Lee");

var search2 = document.createElement("p");
search2.innerHTML =
  "<br>" + "Searching for the book with title 'The Great Gatsby':";
document.body.appendChild(search2);
Library.searchBooks("The Great Gatsby");

var search3 = document.createElement("p");
search3.innerHTML =
  "<br>" + "Searching for the book with title 'Design Thinking':";
document.body.appendChild(search3);
Library.searchBooks("Design Thinking");

var books = Library.books;
var allBooksTitle = document.createElement("p");
allBooksTitle.innerHTML = "<br>" + "These are the books in the library:";
document.body.appendChild(allBooksTitle);
displayBooks();

function displayBooks() {
  books.forEach(function (book, index) {
    var bookInfo = document.createElement("p");
    bookInfo.innerHTML = index + 1 + ". " + book.title + " by " + book.author;
    document.body.appendChild(bookInfo);
  });
}
console.log(Book);
console.log(Library);
console.log(Library.books);
console.log(search1);
console.log(search2);
console.log(search3);
console.log(books);
console.log(Book);
