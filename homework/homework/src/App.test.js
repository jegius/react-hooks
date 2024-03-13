import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import React from 'react';
import TaskOne from './task-one/TaskOne';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('TaskOne', () => {
  test('renders form and handles submission', () => {
    const { getByPlaceholderText, getByText } = render(<TaskOne />);

    const firstNameInput = getByPlaceholderText('First Name');
    const lastNameInput = getByPlaceholderText('Last Name');
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');
    const submitButton = getByText('Submit');

    fireEvent.change(firstNameInput, { target: { value: 'Sergey' } });
    fireEvent.change(lastNameInput, { target: { value: 'Tregubov' } });
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'pass123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'pass123' } });
    fireEvent.click(submitButton);

  
    expect(firstNameInput.value).toBe('');
    expect(lastNameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
    expect(confirmPasswordInput.value).toBe('');
  });
});