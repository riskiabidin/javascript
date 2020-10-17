var person={
    firstName:'riski',
    lastName:'abidin',
    age:28,
    walk(){
        return "I am walking";
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.firstName+" "+person.lastName+" "+person.age);
console.log(person.walk());
console.log(person['firstName']);
console.log(person['lastName']);
