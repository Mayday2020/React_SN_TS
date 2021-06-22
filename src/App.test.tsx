import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import state, {addPost} from "./Redux/state";

test('renders learn react link', () => {
  //@ts-ignore
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
