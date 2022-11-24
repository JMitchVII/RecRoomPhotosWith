import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Can Async Thunk image list', () => {

});

test('Can add image to state', () => {

});

test('Can cache image collection to local storage.', () => {

});

test('Can create new friend pill', () => {

});

test('Can generate new cards', () => {

});