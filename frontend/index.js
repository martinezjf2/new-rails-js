const booksBaseTwo = 'http://localhost:3000/books/'
const usersBaseTwo = 'http://localhost:3000/users/'


// window.addEventListener('load', () => {
//     User.getUsers()
//     // Book.getBooks()
// })

document.addEventListener("DOMContentLoaded",() => {
    User.getUsers()
    clickListeners()
    // deleteUser()
    // displayStudentForm()
})






function clickListeners() {
    // event.preventDefault();
    const studentList = document.querySelectorAll('li a')
    studentList.forEach (student => {
        student.addEventListener("click", displayBooks)
    console.log('I have been clicked')
    })

    // document.getElementById('list').addEventListener("click", displayBooks);
    document.getElementById('allStudents').addEventListener("click", displayStudents);
    document.getElementById('newStudents').addEventListener("click", displayStudentForm);
    document.getElementById('newBook').addEventListener("click", displayBookForm);
    
}
// Only show if it is within the student "show books"
function displayBookForm() {
    let bookFormDiv = document.getElementById('bookForm');
    let form = `<br>
    <center>
            <fieldset>
            <legend>New Book?</legend>
                <form>
                <label>Title: </label>
                <input type="text" id="title" required>
                <br>
                <br>
                <label>Author: </label>
                <input type="text" id="author" required> 
                <br>
                <br>
                <input type="submit"><br>
                </form>
                
                </fieldset>
                </center>
                <br>
                `
                // debugger;
    bookFormDiv.innerHTML = form;
    document.querySelector('form').addEventListener("submit", createBook);
}

    function createBook() {
        event.preventDefault();
        // const book = {
        //     title: document.getElementById('title').value,
        //     author: document.getElementById('author').value
        // }
    
        // fetch(`${usersBase}/${book.user_id}/books`,  {
        //     method: "POST",
        //     body: JSON.stringify(book),
        //     headers: {
        //         'Content-Type' : 'application/json',
        //         'Accept' : 'application/json'
        //     }
        // })
        
        // .then(resp => console.log(resp))
        // .then(book => {
        //     document.getElementById('bookList').innerHTML += `
        //     <br>
        //     <center>
        //     <li id="bookList">
        //     ${book.title} ${book.author} <br>
        //    </li>
        //    </center>
        //    `
    
        //     clickListeners()
        //     document.getElementById('bookForm').reset()
        //     clearForm()
            
        // })
    }


function hideNewStudentslink() {
    document.getElementById('newStudents').style.visibility = 'hidden';
    // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
    
}

function reappearNewStudentLink() {
    document.getElementById('newStudents').style.visibility = 'visible';

}



function displayBooks() {
    clearPage();
    
    let id = event.target.dataset.id;
    let listBooksDiv = document.getElementById('bookList'); 
    hideNewStudentslink();
    // console.log("ive been clicked")
    clearPage()
    fetch(`${usersBase}/${id}/books`)
    
    // console.log(booksBaseTwo + id)
    .then(resp => resp.json())
    // resolved means server is done with the server
    // console.log(id)

    .then(books =>{
        // let studentFormLink = document.getElementById('newStudents')
        // studentFormLink.className = "hidden";
        for (let book of books){
            listBooksDiv.innerHTML += `<center>
            <li class="bookList">${book.title}, ${book.author}</li>
            </center>
            <br>`
        }
    })
        // debugger
}




function clearPage() {
    let show = document.querySelector('#list')
    show.innerHTML = ""
    const ul = document.querySelector('#list2')
    ul.innerHTML = ""
    let bookLi = document.querySelector('#bookList')
    bookLi.innerHTML = ""
    document.getElementById('bookForm').innerHTML = ""
    document.getElementById('studentForm').innerHTML = ""
  }




function displayStudents() {
clearPage()
User.getUsers()
clearForm()

}




 function clearForm() {
    let studentFormDiv = document.getElementById('studentForm')
    studentFormDiv.innerHTML = ""
  }
 





function displayStudentForm() {
// debugger;
    let studentFormDiv = document.getElementById('studentForm');
    let form = `<br>
    <center>
            <fieldset>
            <legend>New Student?</legend>
                <form>
                <label>First Name: </label>
                <input type="text" id="first_name" required>
                <br>
                <br>
                <label>Last Name: </label>
                <input type="text" id="last_name" required> 
                <br>
                <br>
                <input type="submit"><br>
                </form>
                
                </fieldset>
                </center>
                <br>
                `
                // debugger;
    studentFormDiv.innerHTML = form;
    document.querySelector('form').addEventListener("submit", createStudent);
}





function createStudent() {
    event.preventDefault()
    const student = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value
    }

    fetch(usersBaseTwo, {
        method: "POST",
        body: JSON.stringify(student),
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }
    })
    
    .then(resp => resp.json())
    .then(student => {
        document.getElementById('list').innerHTML += `
        <br>
        <center>
        <li id="userLi-${student.id}">
        ${student.first_name} ${student.last_name} <br>
       <button class="show-books" data-id=${student.id} onclick="displayBooks()">Show Books</button>
       <button id="delete" data-id=${student.id} onclick="deleteUser()">Delete</button>
       </li>
       </center>
       `

        clickListeners()
        document.querySelector('form').reset()
        clearForm()
        
    })
    
}

function deleteUser() {
    event.preventDefault();
    let id = event.target.dataset.id
    fetch(`${usersBaseTwo}/${id}`, {
        method: 'DELETE' 
    })
    // debugger;
    event.target.parentElement.remove()
    // this.location.reload()
}