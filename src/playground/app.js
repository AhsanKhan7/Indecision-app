class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : []
        }
    }

componentDidMount() {                               //this default funtion is used for check all mount is mounted.
    try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
  
        if (options) {
          this.setState(() => ({ options }));
        }
      } catch (e) {
        // Do nothing at all
      }
}
componentDidUpdate(prevProps, prevState) {          //this default function show number of changer inside components.
    if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options',json)
    }
}
componentWillUnmount() {                            //if any funtion is not working yjis default function show in console. 
    console.log('component unmount')
}
                                                                 //there are two way of binding one way is to bind in-line
    handleDeleteOptions() {                                      // but is most easy to use in
        this.setState(() => ({options : []} ))                   // the way on constructor(props)
        }                                                        // this is use ful for bind the functions in classes
                                                                 //In line bind is like this.props.handleRemoveAll.bind(this);
    handleDeleteOption(optionToRemove) {
         this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )} ));
        }                                                        
                                                                
    handlePick () {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randomNum];
            alert(option);
    };

    handleAddOption(option) {
        if (!option) {
            return 'enter valid item'

        } else if (this.state.options.indexOf(option) > -1) {
            return 'this item already exist'
        }
        
        this.setState((prevState) => ({options: prevState.options.concat([option])} ))
    }
    

    
    render() {
        const subtitle = 'Put your tasks on computer'
        
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <Options
                 options={this.state.options}
                 handleDeleteOptions={this.handleDeleteOptions}
                 handleDeleteOption={this.handleDeleteOption}
                 />
                <AddOption
                handleAddOption={this.handleAddOption} 
                />
            </div>
        )
    }
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}
Header.defaultProps = { 
    title : 'Indecision App!'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                what Should i do
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Enter item to get started</p>}
            {
                props.options.map((option) => <Option
                 key={option}
                 optionText={option}
                 handleDeleteOption={props.handleDeleteOption} 
                 />
                )
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
                <button 
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText)
                    }}
                >
                    remove
                </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error } ))

        if (!error) {
            e.target.elements.option.value = ' ';
        }
        
    }
              
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


// const User = (props) => {                       this is called state-less function much like JS function
//     return (
//         <div>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//         </div>
//     )
// }



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))