class Human {

        gender = 'Male'


    sayGender = () => {
        console.log(this.gender)
    }
}

class Person extends Human {


        name = 'aaaaaa';
        gender = 'Female'


    sayName = () => {
        console.log(this.name)
    }
}

const person = new Person();
person.sayName()
person.sayGender()