import React from 'react';

const Counter = ({ count, onClick }) => (
  <React.Fragment>
    <div>You Clicked Me {count} times</div>
    <button onClick={onClick}>+</button>
  </React.Fragment>
);

export default Counter;
