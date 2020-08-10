const booksBaseTwo = 'http://localhost:3000/books/'
const usersBaseTwo = 'http://localhost:3000/users/'


// window.addEventListener('load', () => {
//     User.getUsers()
//     // Book.getBooks()
// })

document.addEventListener("DOMContentLoaded",() => {
    User.getUsers()
    clickListeners()
    // displayStudentForm()
})






function clickListeners() {
    // event.preventDefault();
    const studentList = document.querySelectorAll('li a')
    studentList.forEach (student => {
        student.addEventListener("click", displayBooks)
    console.log('I have been clicked')
    })

    document.getElementById('list').addEventListener("click", displayBooks);
    document.getElementById('allStudents').addEventListener("click", displayStudents);
    document.getElementById('newStudents').addEventListener("click", displayStudentForm);
}

function displayBooks() {
    let id = event.target.dataset.id;
    // console.log("ive been clicked")
    clearPage()
    let listBooksDiv = document.getElementById('bookList');
    fetch(booksBaseTwo + id)
    // console.log(booksBaseTwo + id)
    .then(resp => resp.json())
    // console.log(id)
    .then(book => {
            listBooksDiv.innerHTML += `
            <li>${book.title}, ${book.author}</li>
            `
        })
    
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
}



function displayStudentForm() {
// debugger;
    let studentFormDiv = document.getElementById('studentForm');
    let form = `<form>
                <label>First Name:</label>
                <input type="text" id="first_name">
                <label>Last Name</label>
                <input type="text" id="last_name">
                <input type="submit">
                </form>
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
        <li><a href="#" data-id="${student.id}">${student.first_name} ${student.last_name}</a></li>
        `
        clickListeners()
        document.querySelector('form').reset()
        
    })
}

