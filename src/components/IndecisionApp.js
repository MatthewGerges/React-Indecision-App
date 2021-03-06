import React from 'react';
import AddOption from './AddOption';
//by default will grab things ending in .js
import Action from './Action';
import Header from './Header';
import Options from './Options.js';
import OptionModal from './OptionModal';

// Grab the add function from the add.js file in the utils folder
// Grab React from the react npm module
// add(2, 4)

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
      };
    // constructor(props) {
    //   super(props);
    //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //   this.handlePick = this.handlePick.bind(this);
    //   this.handleAddOption = this.handleAddOption.bind(this);
    //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //   this.state = {
    //     options: []
    //   };
    // }
    componentDidMount = () => {
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
    handleDeleteOptions = () => {
      this.setState(() => ({ options: [] }));
    }
    handleDeleteOption = (optionToRemove) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }));
    }
    handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      //alert(option);
      //this.setState(() => ({selectedOption: option}));
      this.setState(() => ({ selectedOption: option }));

    }
    handleAddOption = (option) => {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
  
      this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }));
    }
    handleClear = () => {
            this.setState(() => ({ selectedOption: undefined}));
    }
    //no need to make componentdidmount and update to arrow functions
    componentDidUpdate (prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
          const json = JSON.stringify(this.state.options);
          localStorage.setItem('options', json);
        }
      }
      componentWillUnmount() {
        console.log('componentWillUnmount');
      }
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <div className='container'>
            <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            />
            <div className = "widget">
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
          selectedOption = {this.state.selectedOption}
          handleClear = {this.handleClear}
          />
        </div>
      );
    }
  }

  export default IndecisionApp;