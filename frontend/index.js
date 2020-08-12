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
    
}





function displayBooks() {
    let id = event.target.dataset.id;
    let listBooksDiv = document.getElementById('bookList'); 
    // console.log("ive been clicked")
    clearPage()
    fetch(`${usersBase}/${id}/books`)
    
    // console.log(booksBaseTwo + id)
    .then(resp => resp.json())
    // console.log(id)
    .then(books =>{
        for (let book of books){
            listBooksDiv.innerHTML += `
            <li class="bookList">${book.title}, ${book.author}</li>`
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
    // document.querySelector('#form').innerHTML = ""
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
        document.getElementById('list').innerHTML += `<li id="userLi-${student.id}">
        ${student.first_name} ${student.last_name} 
       <button class="show-books" data-id=${student.id} onclick="displayBooks()">Show Books</button><button id="delete" data-id=${student.id} onclick="deleteUser()">Delete</button>
       </li>`

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

// // delete users
// function deleteUser() {
//     let userID = parseInt(event.target.dataset.id)
//     fetch(`${BASE_URL}/users/${userID}`, {
//         method: 'DELETE'
//     })
//     event.target.previousElementSibling.remove()
//     event.target.remove()
//     alert("You are now deleted from the database")
//     hudUser.innerText = "Create A User"

// }