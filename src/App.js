// 
import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Hi from './simpleCase/Hello';
import MediaCard from './simpleCase/MediaCard';
import { hydrate } from 'react-dom';

class App extends Component {
  state = {
    persons:[],
  };
  render() {
    const name='Bob';
    const bodyContext=<div>Hi~<strong>{name}</strong>! It's a story about golden bricks.</div>;
    return (
      <div className="container">
        <Hi name="Bob"/>
        <hr/>
        <MediaCard card={
          {
            title:'Golden bricks', 
            body:bodyContext, 
            imageUrl:'https://p0.meituan.net/travelcube/a6a14eb539cbb7cd39e707b035a49dd848291.jpg',
            isOpen:false,
          }
          }/> 
        <hr/>
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