import React from 'react'
import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options : [],
        selectedOption: undefined
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
    handleDeleteOptions = () => {                                      // but is most easy to use in
        this.setState(() => ({options : []} ))                   // the way on constructor(props)
        }                                                        // this is use ful for bind the functions in classes
                                                                 //In line bind is like this.props.handleRemoveAll.bind(this);
    handleDeleteOption = (optionToRemove) => {
         this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )} ));
        }                                                        
                                                                
    handlePick = () => {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randomNum];
            this.setState(() => ({
                selectedOption:option
            }))
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'enter valid item'

        } else if (this.state.options.indexOf(option) > -1) {
            return 'this item already exist'
        }
        
        this.setState((prevState) => ({options: prevState.options.concat([option])} ))
    }

    removeModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))

    }
    

    
    render() {
        const subtitle = 'Put your life in hands of computer'
        
        return (
            <div>
                <Header subtitle={subtitle}/>
                    <div className='container'>
                        <Action hasOptions={this.state.options.length > 0}
                            handlePick={this.handlePick}
                        />
                    <div className='widget'>
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption} 
                        />
                    </div>    
                    </div>
                        <OptionModal
                            selectedOption={this.state.selectedOption} 
                            removeModal={this.removeModal}/>
            </div>
        )
    }
}

export default IndecisionApp