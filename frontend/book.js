// const booksBase = 'http://localhost:3000/books/'


// class Book {
//     static books = []
//     constructor(id, title, author){
//         this.title = title
//         this.author = author
//         this.id = id
        
//     }
//     static getBooks() {
//         const list = document.querySelector('#list2')
//         fetch(booksBase)
//         .then(resp => resp.json())
//         .then(books => {
//             // console.log(books)
//             books.forEach(book => {
//                 // console.log(book)
//                 const newBook = new Book(book.id, book.title, book.author)
//                 // console.log(newBook)
//                 list.innerHTML += newBook.renderBook();
//                 // show books that are associate with the user when the user is clicked
//             })
//         })
//         // console.log(resp)


//     }

//     renderBook() {
//         if (this.user_id === User.id) {
//         return `
//         <li id="bookLi-${this.id}">
//           ${this.title}, ${this.author}
//         </li>
//         `
//         }
//     }
        
    

// }



/* <li id="userLi-48">
     <a href="#" data-id="48">Maisie Hermann</a>
</li> */