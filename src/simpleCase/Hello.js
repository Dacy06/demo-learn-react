import React from 'react';
import './Hello.css';

function Hi(props) {
  return (
    <div className="person-info">
      Hello <strong>{props.name}</strong>!
      <ul>
        <li>{10+5}-years-old</li>
        <li>female</li>
      </ul>
    </div>
  );
}

export default Hi;