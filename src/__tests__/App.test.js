import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from 'react-testing-library';
import App from '../App';

describe('App', () => {
  afterEach(cleanup);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should render the right content', () => {
    const { getByText } = render(<App />);
    const headingText = 'Welcome to React With Parcel';
    const heading = getByText(headingText);
    expect(heading.nodeName).toBe('H1');
    expect(heading.textContent).toBe(headingText);
    expect(headingText.parentElement);
  });

  it('should render a counter button', () => {
    const { getByText } = render(<App />);
    const counterButton = getByText('+');
    expect(counterButton.nodeName).toBe('BUTTON');
    const countDiv = counterButton.previousSibling;
    expect(countDiv.textContent).toEqual('You Clicked Me 0 times');
  });

  it('should increment count on button click', () => {
    const { getByText } = render(<App />);
    const counterButton = getByText('+');
    counterButton.click();
    const countDiv = counterButton.previousSibling;
    expect(countDiv.textContent).toEqual('You Clicked Me 1 times');
  });
});
