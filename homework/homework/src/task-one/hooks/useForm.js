import { useState } from 'react';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
export const useForm = (onValidSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState('');

  const validate = () => {
    const { firstName, lastName, email, password, confirmPassword } = values;

    if (!firstName.trim() || !lastName.trim()) {
      return 'First name and last name can not be empty';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const normalizedEmail = email.trim();
    if (!emailRegex.test(normalizedEmail)) {
      return 'Invalid email';
    }

    const hasMinLen = password.length >= 5;
    const hasDigit = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>_\-+=\\[\]/~`]/.test(password);
    if (!hasMinLen || !hasDigit || !hasSpecial) {
      return 'Password: should be at least 5 chars with 1 special symbol and 1 digit';
    }

    if (confirmPassword !== password) {
      return 'Confirm Password must match Password';
    }

    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setError('');
  };

  const submitForm = (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    const payload = {
      ...values,
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim(),
    };

    setError('');
    if (typeof onValidSubmit === 'function') {
      onValidSubmit(payload);
    }
    setValues(initialValues);
  };
  return {
    values,
    error,
    handleChange,
    submitForm,
  };
};
