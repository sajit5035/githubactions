// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the heading text', () => {
  render(<App />);
  const headingElement = screen.getByText(/this is react app for github action/i);
  expect(headingElement).toBeInTheDocument();
});
