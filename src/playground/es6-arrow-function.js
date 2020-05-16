//function in ES5
const square = function (x) {
    return x * x;
};

const ES5 = function (name) {
    return name.split(' ')[0];
};

//function in ES6
const squareArrow = (x) => {
    return x * x;
}

const getfirstname = (name) => {
    return name.split(' ')[0]
};

const ahss = (x) => x * x;

const getfirstname2 = (name) => name.split(' ')[0]

console.log(ES5('Ahsan naseem'));