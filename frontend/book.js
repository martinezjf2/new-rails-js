const booksBase = 'http://localhost:3000/books/'


class Book {
    static books = []
    constructor(id, title, author){
        this.title = title
        this.author = author
        this.id = id
        
    }
    static getBooks() {
        const list = document.querySelector('#list2')
        fetch(booksBase)
        .then(resp => resp.json())
        .then(books => {
            // console.log(books)
            books.forEach(book => {
                // console.log(book)
                const newBook
            })
        })
        // console.log(resp)


        }
        
    

}



/* <li id="userLi-48">
     <a href="#" data-id="48">Maisie Hermann</a>
</li> */