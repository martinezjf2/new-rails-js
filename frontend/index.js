
window.addEventListener("load", () =>{
    User.getUsers()
    // Book.getBooks()
})

function clickListeners() {
    const studentList = document.querySelectorAll('li a')
    studentList.forEach (student => {
        student.addEventListener("click", displayBooks)
    console.log('I have been clicked')
    })

    document.getElementById('list').addEventListener("click", displayBooks)
    document.getElementById('allStudents').addEventListener("click", displayStudents)
    document.getElementById('newStudents').addEventListener("click", displayStudentForm)
}

function displayStudentForm() {
    let studentFormDiv = document.getElementById('studentForm')
    let html = `<form>
                <label>First Name:</label>
                <input type="text" id="firstName">
                <label>Last Name</label>
                <input type="text" id="lasttName">
                <input type="submit">
                </form>
                `
    studentFormDiv.innerHTML = html
    document.querySelector('form').addEventListener("submit", createStudent)
}



