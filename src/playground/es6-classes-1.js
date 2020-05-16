
class Person {
    constructor(name = 'Anonymus', age=22) {
    this.name = name;
    this.age = age;
    }
    Greeting() {
        return `Hi my name is ${ this.name }`
    }
}
class Student extends Person {
    constructor(name, age, major) {
        super(name, age)

        this.major = major;
    }
    hasMajor(){
        return !!this.major;               //you can check (instance) by boolean value.
    } 
    Description () {                          //you can over-write function;
        return `this is  ${this.name}`
    }
    getDescription () {                       //also render parent-class function;
        let bruhhh = super.Description();

            if (this.hasMajor()) {
                bruhhh += ` has choose subject ${ this.major } `             //Or bruhhh = bruhhh + `any string`
        }
        return bruhhh
    }
}
class Traveller extends Person {
    constructor(name, age, location) {
        super(name, age)
        this.location = location;
    }

    Greeting() {
        let chall = super.Greeting();
        
        if (this.location) {
        chall +=  ` and my location is ${ this.location }`
        }

        return chall
    }
}

let a = new Traveller('Ahsan', 22, 'karachi');
let b = new Traveller('koi', 44);
console.log(a.Greeting());
console.log(b.Greeting());

















// class Challenge {
//     constructor(name='Anonyums', Age=22) {
//         this.name = name;
//         this.Age = Age;
//     }
//     getDescription() {
//         return `Hi my name is ${ this.name } and iam ${ this.Age } year old`
//     }
// }

// let c = new Challenge('Ahsan', 26)
// let d = new Challenge()
// console.log(c.getDescription())
// console.log(d.getDescription())