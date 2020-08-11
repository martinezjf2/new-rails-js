const usersBase = 'http://localhost:3000/users'

class User {
    static users = []
    constructor(id, first_name, last_name){
        this.first_name = first_name
        this.last_name = last_name
        this.id = id
        User.users.push(this)
    }

    static async getUsers() {
        const list = document.querySelector('#list')
        const response = await fetch(usersBase)
        const users = await response.json()
        users.forEach (user => {
            const newUser = new User(user.id, user.first_name, user.last_name);
            list.innerHTML += newUser.render();
            // clickListeners()
        })
    }
    
    // static getUsers() {
    // const list = document.querySelector('#list')
    // fetch(usersBase)
    // .then(rsp => rsp.json())
    //     .then(users => {
    //         // console.log(users)
    //         users.forEach(user => {
    //             // console.log(user)
    //             const newUser = new User(user.id, user.first_name, user.last_name);
    //             // console.log(newUser)
    //             list.innerHTML += newUser.render();
                
    //             // console.log(list.innerHTML)
    //         });
    //     })
        

    // }
    
    render() {
        return `
        <li id="userLi-${this.id}">
         ${this.first_name} ${this.last_name} 
        <button class="show-books" data-id=${this.id} onclick="displayBooks()">Show Books</button>
        <button id="delete" data-id=${this.id} onclick="deleteUser()">Delete</button>
        </li>
        `

    }


   

    

    

}

