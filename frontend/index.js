
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



