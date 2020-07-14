// 
import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    persons:[],
  };
  render() {
    return (
      <div className="container">
        <Table persons={this.state.persons}
        removePerson={this.removePerson}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
  handleSubmit = person => {
    this.setState({
      persons:[...this.state.persons, person]
    });
  }
  removePerson = index => {
    const { persons } = this.state;
    this.setState({
      persons:persons.filter((person,i)=>{
        return i!== index;
      })
    })
  }
}
// 导出组件
export default App;