import React, { useState } from 'react';
import './TaskOne.css';

function TaskOne() {

    function useForm() {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [error, setError] = useState('');

        const validateEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        const handleSubmit = (event) => {
            event.preventDefault();


            if (!firstName || !lastName) {
                setError('Please enter your first and last name.');
                return;
            }

            if (!validateEmail(email)) {
                setError('Please enter a valid email address.');
                return;
            }

            if (password.length < 5 || !/[^\w\s]/.test(password)) {
                setError('Please enter a password with at least 5 characters and special characters.');
                return;
            }

            if (password !== confirmPassword) {
                setError('Passwords do not match.');
                return;
            }
            alert(JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
            }));

            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setError('');
        };

        return {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            error,
            setFirstName,
            setLastName,
            setEmail,
            setPassword,
            setConfirmPassword,
            setError,
            handleSubmit,

        };
    };

    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        error,
        setFirstName,
        setLastName,
        setEmail,
        setPassword,
        setConfirmPassword,
        handleSubmit,
    } = useForm();


    return (
        <div className="form-container">
            <div className="error-message">{error}</div>
            <form onSubmit={handleSubmit}> {useForm}
                <input type="text" name="firstName" placeholder="First Name" className="form-input"
                    onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                <input type="text" name="lastName" placeholder="Last Name" className="form-input"
                    onChange={(e) => setLastName(e.target.value)} value={lastName} />
                <input type="email" name="email" placeholder="Email" className="form-input"
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="password" name="password" placeholder="Password" className="form-input"
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-input"
                    onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                <button type="submit" className="form-button">Register</button>
            </form>
        </div>
    );
}


export default TaskOne;