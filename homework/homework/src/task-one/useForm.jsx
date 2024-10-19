import { useState } from 'react';

const useForm = (onSubmitHandle) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const validation = () => {
        if (firstName === '' || lastName === '') {
            setError('First name and last name are required');
            return false;
        }
        if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setError('Email is invalid');
            return false;
        }
        if (password.length < 5 || !password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,}$/) || password !== confirmPassword) {
            setError('Password is invalid');
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validation()) {
            onSubmitHandle({ firstName, lastName, email, password, confirmPassword });
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    };

    return {
        firstName, setFirstName,
        lastName, setLastName,
        email, setEmail,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        error, handleSubmit
    };
};

export default useForm;