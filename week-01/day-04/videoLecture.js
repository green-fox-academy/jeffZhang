//user
class User {
  constructor(user, name) {
    this.user = user
    this.email = name
  }

  login(){
    console.log(this.email, 'login')
  }
  logout(){
    console.log(this.email, 'logout')
  }

}

let user1 = new User('e1','u1')
let user2 = new User('e2','u2')

console.log(user1)

//human
class Human{
    
}
