

const adult = (age) => {
    if (age >= 18) {
        return 'legal';
    } else {
        return 'not legal'
    }
}

const Drive = (age) => {
    if (age >= 21) {
        return 'legal';
    } else {
        return 'not legal'
    }
}

const isSenior = (age) => age >= 65;

export { adult, Drive }
export default isSenior

                //this all is for app.js (main file)
// import subtract, { add, multiply } from './utils.js' 
// console.log('app.js runing');
// console.log(add(1, 9))
// console.log(multiply(3, 5))
// console.log(subtract(100, 81))

// import isSenior, { adult, Drive } from './person.js'
// console.log(adult(18))
// console.log(Drive(20))
// console.log(isSenior(65))
