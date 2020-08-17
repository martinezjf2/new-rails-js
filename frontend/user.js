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
    reappearNewStudentLink();

        const list = document.querySelector('#list')
        let users
        
        const response = await fetch(usersBase)
        if (response.ok){
            users = await response.json()
            console.log("Successful")
        } else {
            console.log("Unsuccessful")
        };
        console.log(users)
        users.forEach (user => {
            const newUser = new User(user.id, user.first_name, user.last_name);
            list.innerHTML += newUser.render();
            // clickListeners()
        })
    }
    
    // static getUsers() {
    // const list = document.querySelector('#list')
    // fetch(usersBase)
    // .then(resp => resp.json())
    // // .then(rsp => {
    // //     if (rsp.ok) {
    // //         rsp.json()
    // //         console.log("SUCCESSFUL")
    // //     } else {
    // //         console.log("NOT SUCCESSFUL")
    // //     };
    // // }
    // // )
    //     // Fix the syntax on previous line which is not making me go through thesecond promise
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
        <center>
        <li id="userLi-${this.id}">
         ${this.first_name} ${this.last_name} <br><br>
        <button class="show-books" data-id=${this.id} onclick="displayBooks()">Show Books</button>
        <button id="delete" data-id=${this.id} onclick="deleteUser()">Delete</button>
        </li>
        </center>
        <br>

        `

    }


   

    

    

}

