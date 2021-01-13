const person = {
    name: 'abcde'
};

const newPerson = {...person};

person.name = 'aaaaa'

console.log(newPerson.name)