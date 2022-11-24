import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App'; REPLACE WITH COMPONENT IMPORT

test('renders learn react link', () => {
    // render(<App />); REPLACE WITH COMPONENT
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

test('Can FetchRec Net Auto Complete', () => {

});

test('Can create Pill', () => {

});

test('Can write selection to Appstate', () => {

});

test('Can Fetch User Image Name Batch', () => {

});