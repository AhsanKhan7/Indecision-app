// arguments object - no longer bound with arrow function
const arg1 = function (a, b) {
    console.log(arguments)
    return a + b;
};
const arg2 = (a, b ) => {            
    // console.log(arguments); // the arguments functions is not owrk without function name
    return a + b; // arguments function is not work with arrow function
};

// console.log(arg1(1, 2, 7));

//this keyword - no longer bound

// const user = {
//     name:'Ahsan',
//     cities: ['kar', 'que', 'lah'],
//     printlivedplaces: function () {
//         const that = this;

//         this.cities.forEach(function (city) {
//             console.log(that.name + ' has lived in ' + city);
//         });
//     }
// };

// const user = {
//     name:'Ahsan',
//     cities: ['kah', 'que', 'lah'],
//     printlivedplaces: function () {     //this called method

//         this.cities.forEach((city) => {
//         console.log(this.name + ' has lived in ' + city);
//     });
//   }
// }
// user.printlivedplaces();


const user = {
    name:'Ahsan',
    cities:['kah', 'lah', 'que'],
    print_cities() {

        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};

const user1 = {
    name: 'ahsan',
    cities: ['kah', 'lah', 'que'],
    print() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};


const multiplier = {
    array: [1,2,3],
    multiplyBY:2,
    ans() {
        return this.array.map((arr) => this.multiplyBY * arr );
    }
};



console.log(multiplier.ans());
