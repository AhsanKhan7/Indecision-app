class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        }
    }

componentDidMount() {
        const json = localStorage.getItem('count')
        const count = parseInt(json)

    if (!isNaN(count)) {
        this.setState(() => ( {count} ))
    }
}

componentDidUpdate(PrevState) {
    if (PrevState.count !== this.state.count) {
        localStorage.setItem('count', this.state.count)
    }
}

    addOne() {
    //     this.setState((PrevState) => {
    //         return {                         //this is old technique
    //             count : PrevState.count + 1
    //         }
    //     })
    // }
    this.setState({
        count: this.state.count + 1            //this is new technique
    });
    }

    minusOne() {
    //     this.setState((PrevState) => {            //instead of (PrevState) you can make any name of variable the
    //         return {                              //goal is just to setState by - 1
    //         count : PrevState.count - 1
    //         }
    //     })
    // }
    this.setState({
        count: this.state.count - 1
    })
    }

    reset() {
    //     this.setState((PrevState) => {
    //         return {
    //             count : PrevState.count = 0
    //         }
    //     })
    // }
    this.setState({
        count : this.state.count = 0
    })
    }

    render() {
        return (
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.addOne}>+1</button>
            <button onClick={this.minusOne}>-1</button>
            <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'))
// ReactDOM.render(<Counter count={10}/>, document.getElementById('app')) //instead of above code you can run this W/O counter.defaultProps

















// function getlocation (location) {
//     if (location) {
//         return <p>location : {user.location}</p>
//     }
// };
// const user =  {
//      name: 'ahsan',
//      age: 22,
//      location:''
// };
// const templatetwo = (
//     <div>
//     <h1>{user.name ? user.name : 'koi or'}</h1>
//     {user.age >= 18 && <p>Age : {user.age}</p>}
//     {getlocation(user.location)}
//     </div>
// );







// let count = 0;
// const addOne = () => {
//     count++ ;
//     appCounter();
// };

// const minusOne = () => {
//     count = count - 1 ;
//     appCounter();
// };

// const Reset = () => {
//     count = 0;
//     appCounter();
// };

// const appCounter = () => {
//     const templatetwo = (
//     <div>
//         <h1>Count : {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={Reset}>Reset</button>
//     </div>
//     )
// ReactDOM.render(templatetwo, document.getElementById('app'));
// }

// appCounter();