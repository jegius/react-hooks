import React, {useState, useCallback} from 'react';
import './TaskOne.css';

function useForm(callback) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmitHandle = useCallback(
        (event) => {
            event.preventDefault();

            if (firstName === '' || lastName === '') {
                setError('First name and last name are required');
                return;
            }

            if (!/\S+@\S+\.\S+/.test(email)) {
                setError('Invalid email address');
                return;
            }

            if (password.length < 5 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
                setError('Password must be at least 5 characters long and contain special characters');
                return;
            }

            if (password !== confirmPassword) {
                setError('Passwords do not match');
                return;
            }

            callback({
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
            });

            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        },
        [firstName, lastName, email, password, confirmPassword, callback]
    )

    return {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        error,
        onSubmitHandle,
    };
}

function TaskOne() {
    const submitForm = useForm((data) => {
        alert(JSON.stringify(data));
    });

    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        error,
        onSubmitHandle,
    } = submitForm;

    return (
        <div className="form-container">
            <div className="error-message">{error}</div>
            <form onSubmit={onSubmitHandle}> {/* Измените здесь на submitForm, когда он будет готов */}
                <input type="text" name="firstName" placeholder="First Name" className="form-input"
                       onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                <input type="text" name="lastName" placeholder="Last Name" className="form-input"
                       onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                <input type="email" name="email" placeholder="Email" className="form-input"
                       onChange={(e) => setEmail(e.target.value)} value={email}/>
                <input type="password" name="password" placeholder="Password" className="form-input"
                       onChange={(e) => setPassword(e.target.value)} value={password}/>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-input"
                       onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                <button type="submit" className="form-button">Register</button>
            </form>
        </div>
    );
}

export default TaskOne;