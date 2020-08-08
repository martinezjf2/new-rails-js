class Book {
    static books = []
    constructor(id, title, author){
        this.title = title
        this.author = author
        this.id = id
        
    }
    static getBooks() {
        const getListElement = document.getElementById(`userLi-${User.id}`);
        getListElement.addEventListener("click", () => {
            console.log("I have been clicked!")
            })
    }

}




{/* <li id="userLi-48">
     <a href="#" data-id="48">Maisie Hermann</a>
</li> */}