class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility : false
        }
    }

    handleToggle() {
        this.setState((PrevState) => {
            return {
            visibility : !PrevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Toggle visibility</h1>
                    <button onClick={this.handleToggle}>
                        {this.state.visibility ? 'Hide Details' : 'Show Details'}
                    </button>
                <p>{this.state.visibility && 'HEY click to hide'}</p>
            </div>
        )
    }
}
ReactDOM.render(<Toggle />, document.getElementById('app'))


// let visibility = false;

// let toggleVisibility = () => { 
//     visibility = !visibility
//     render();    
// };

// const render = () => {
//     const jsx = (
//         <div>
//         <h1>Toggle visibility</h1>
//         <button onClick={toggleVisibility}>
//             {visibility ? 'Hide Details' : 'Show Details'}
//         </button>
//         <p>{visibility && 'hey click to hide'}</p>
//         </div>
//     )
// ReactDOM.render(jsx, document.getElementById('app'))
// }

// render();