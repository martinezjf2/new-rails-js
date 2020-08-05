
class User {
    static users = []
    constuctor(user)
    this.first_name = user.first_name
    this.last_name = user.last_name
    this.id = user.id
    User.users.push(this)
}