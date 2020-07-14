import React, { Component } from 'react';

class Table extends Component {
  render() {
    const {persons, removePerson} = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody persons={persons}
        removePerson={removePerson}/>

      </table>
    );
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Operation</th>
      </tr>
    </thead>
  );
}

const TableBody = props => {
  const rows = props.persons.map((row, index)=>{
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td><button onClick={()=>props.removePerson(index)}>Delete</button></td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

export default Table;