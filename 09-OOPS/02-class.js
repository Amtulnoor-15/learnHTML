class person{
    constructor(name, age, email, password){
        this.name=name;
        this.age=age;
        this.password=password;
        this.hobby=[];
        this.email=email;
    }
    printName(){
        console.log({
            name: this.name,
            age: this.age,
            hobby: this.hobby
        });
    }
    insertHobby(){
        this.hobby.push(hobby);

    }
}

const amtul = new person('amtulnoor', 24, 'hasanaat00@gmail.com', '428042')
amtul.printName();

amtul.insertHobby('understanding Psyche');
amtul.printName();