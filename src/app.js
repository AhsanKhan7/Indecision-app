import ReactDOM from 'react-dom'
import React from 'react'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/style.scss'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))


// class OldSyntax {
//     constructor() {
//     this.name = "Ahsan"
//     this.Greeting = this.Greeting.bind(this)
//     }
//     Greeting() {
//         return `Hi your name is ${this.name}`
//     }
// }
// const oldSyntax = new OldSyntax();
// const Greetingnew = oldSyntax.Greeting()
// console.log(Greetingnew)


// // -----------------


// class NewSyntax {
//     name = "Ali"
//     getGreeting = () => {
//         return `Hi your name is ${this.name}`
//     }
// }
// const newSyntax = new NewSyntax()
// const newGreeting = newSyntax.getGreeting()
// console.log(newGreeting)

// new syntax is work and look simple by installing and using babel plugin named  "transform-class-properties"
