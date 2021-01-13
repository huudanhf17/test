const numbers = [1,2,3]
const newNumbers = [...numbers,4,5]

const person = {
    name: 'Abcde'
}

const newPerson = {
    ...person,
    age: 20,
    name: '????'
}

console.log(newPerson)

const filter = (...agrs) => {
    return agrs.filter(el=>el===1)
}

console.log(filter([1,2,3]))
