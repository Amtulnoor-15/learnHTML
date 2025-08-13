class User {
    constructor(username, email){
        this.username=username;
        this.email=email;
    }
    getPermissions(){
        console.log('Regular user permissions');
    }
}

class admin extends User{
    getPermissions(){
        console.log('Admin privileges: full access');
    }
}

class fakeUser extends User{
    getPermissions(){
        console.log('No access!');
    }

}
const hasanaat = new User('amtulnoor', 'hasanaat00@gmail.com');
hasanaat.getPermissions();
console.log(hasanaat);

const admin0 = new admin('abdulGhaniKhan', 'abdulghanikhan85@gmail.com');
admin0.getPermissions();
console.log(admin0);

const rafiya = new fakeUser('effath', 'effath.dev');
rafiya.getPermissions();
console.log(rafiya);
