import React from 'react';
import Counter from './components/Counter';

class App extends React.Component {
  state = {
    count: 0,
  };

  handleIncrementButtonClick = () =>
    this.setState(({ count }) => ({ count: count + 1 }));

  render() {
    return (
      <React.Fragment>
        <h1>Welcome to React With Parcel</h1>
        <Counter
          onClick={this.handleIncrementButtonClick}
          count={this.state.count}
        />
      </React.Fragment>
    );
  }
}

export default App;
