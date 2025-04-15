import { useState } from 'react';

function useForm(onSubmit) {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const validate = () => {
        if (!values.firstName.trim()) return 'First name cannot be empty';
        if (!values.lastName.trim()) return 'Last name cannot be empty';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(values.email)) return 'Invalid email address';
        if (values.password.length < 5 || !/[0-9]/.test(values.password) || !/[!@#$%^&*]/.test(values.password)) {
            return 'Password must be at least 5 characters long and include a number and a special character';
        }
        if (values.password !== values.confirmPassword) return 'Passwords do not match';
        return '';
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationError = validate();
        if (validationError) {
            setError(validationError);
        } else {
            setError('');
            onSubmit(values);
            setValues({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
        }
    };

    return { values, error, handleChange, handleSubmit };
}

export default useForm;
