const usersBase = 'http://localhost:3000/users'

class User {
    static users = []
    constuctor(user){
        this.first_name = user.first_name
        this.last_name = user.last_name
        this.id = user.id
        User.users.push(this)
        }

    static getUsers() {
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
    
    render() {
        return `<li id="userLi-${this.id}">
        <a href="#" data-id="${this.id}">${this.first_name} ${this.last_name}</a></li>`
    }
    

}

