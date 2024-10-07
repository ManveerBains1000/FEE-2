// object prototypes 

var person1 = {
    name: "Manveer",
    age: 19
};

// person2 object person1  properly as a prototype
var person2 = Object.create(person1);

console.log(person2);

console.log(person2.__proto__ == person1);

var person3 = Object.create(person2);
console.log(person3);

person2.name = "Yash";
console.log(person2.name);
console.log(person1.name);


console.log(person1.hasOwnProperty("name"));
var a = 10;
console.log(a.prototype.__proto__ == Number.prototype);                                                                                                                              