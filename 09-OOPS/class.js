// OOPS - Object Oriented Programming

class User{
    constructor(username, email){
        this.user=username
        this.email=email
    }
    //methods
    printUser(){
        console.log(this.user);
    }

        printemail(){
            console.log(this.email)
        }
    }


const amtul = new User('keen observer', 'amtulnoor@gmail.com');
const hasanaat = new User('high EQ', 'hasanaat00@gmail.com');

amtul.printUser();
hasanaat.printemail();
