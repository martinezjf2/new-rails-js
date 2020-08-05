const usersBase = 'http://localhost:3000/users/'
const booksBase = 'http://localhost:3000/books/'

document.addEventListener("DOMContentLoaded", () =>{
    getUsers(),
})

function getUsers() {
    let list = document.querySelector('#list')
    fetch(usersBase)
    .then(rsp => rsp.json())
        .then(users => {
            users.forEach(user => {
                const newUser = new User(user);
                list.innerHTML += newUser.render();
            });
        })
    
}

