


console.log('utils.js is runing');

export const add = (x, y) => x + y;

export const multiply = (x, y) => x * y;

const subtract = (x, y) => x - y;

export default subtract;




// there are 4 types of export

// 1)  export const multiply = (x, y) => x * y;
// 2) it is declare in end of page. export { variable or fuction name }
// 3) it is declare as default in end of the page so ( Only one funtion or vairable can set as default)
                        // export { add, multiply, subtract as default }
// 4) is to declare as default but show in end of page just like (gatsby)
