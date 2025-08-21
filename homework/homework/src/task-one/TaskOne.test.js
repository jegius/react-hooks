import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskOne from '../components/TaskOne';

describe('TaskOne component', () => {

 test('renders form inputs', () => {
   render(<TaskOne />);
   
   expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
   expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
   expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
   expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
   expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
 });

 test('shows validation error for empty first or last name', () => {
   render(<TaskOne />);
   
   fireEvent.change(screen.getByPlaceholderText('First Name'), { target: { value:'', } });
   fireEvent.change(screen.getByPlaceholderText('Last Name'), { target: { value:'', } });
   
   fireEvent.click(screen.getByText('Register'));
   
   expect(screen.getByText(/First name and Last name cannot be empty/)).toBeInTheDocument();
 });

 test('shows invalid email error', () => {
   render(<TaskOne />);
   
   fireEvent.change(screen.getByPlaceholderText('First Name'), { target:{ value:'John' } });
   fireEvent.change(screen.getByPlaceholderText('Last Name'), { target:{ value:'Doe' } });
   
   fireEvent.change(screen.getByPlaceholderText('Email'), { target:{ value:'invalidemail' } });
   
   fireEvent.click(screen.getByText('Register'));
   
   expect(screen.getByText(/Invalid email address/)).toBeInTheDocument();
 });

 test('shows password validation error', () => {
   render(<TaskOne />);
   
   
   fireEvent.change(screen.getByPlaceholderText('First Name'), { target:{ value:'John' } });
   fireEvent.change(screen.getByPlaceholderText('Last Name'), { target:{ value:'Doe' } });
   
   fireEvent.change(screen.getByPlaceholderText('Email'), { target:{ value:'john@example.com' } });
   
   
   fireEvent.change(screen.getByPlaceholderText('Password'), { target:{ value:'abcde' } });
   
   
   fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target:{ value:'abcde' } });
   
   fireEvent.click(screen.getByText('Register'));
   
   expect(
     screen.queryByText(/Password must be at least/)
     ).not.toBeInTheDocument(); 
   
 });

 test("successful form submission", () => {
     window.alert = jest.fn();

     render(<TaskOne />);

     fireEvent.change(screen.getByPlaceholderText("First Name"), { target:{ value:"Jane" } });
     fireEvent.change(screen.getByPlaceholderText("Last Name"), { target:{ value:"Doe" } });
     fireEvent.change(screen.getByPlaceholderText("Email"), { target:{ value:"jane@example.com" } });
     fireEvent.change(screen.getByPlaceholderText("Password"), { target:{ value:"passw0rd!" } });
     fireEvent.change(screen.getByPlaceholderText("Confirm Password"), { target:{ value:"passw0rd!" } });

     fireEvent.click(screen.getByText("Register"));

     expect(window.alert).toHaveBeenCalledWith(
       JSON.stringify({
         firstName:"Jane",
         lastName:"Doe",
         email:"jane@example.com",
         password:"passw0rd!",
         confirmPassword:"passw0rd!"
       })
     );
 });

});
