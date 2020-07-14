import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    
    this.initialState={
      name:'',
      job:''
    }
    // set initial data
    this.state = this.initialState;
  }

  render() {
    const {name, job} = this.state;
    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label>Job</label>
        <input
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange}
        />
        <input 
          type="button"
          value="Submit"
          onClick={this.submitForm}
        />
      </form>
    );
  }

  // listened by onChange of input
  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name] : value
    })
  }

  // submit user input
  submitForm = () => {
    this.props.handleSubmit(this.state);
    // clear input 
    this.setState(this.initialState);
  }
}


export default Form;