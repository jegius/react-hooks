import { useState } from 'react';

function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => {
    setValues({ ...values, [field]: e.target.value });
  };

  const validate = () => {
    const { firstName, lastName, email, password, confirmPassword } = values;

    if (!firstName.trim() || !lastName.trim()) {
      setError('First name and Last name cannot be empty');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email address');
      return false;
    }

    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=$$$${};':"\\|,.<>\/?]).{5,}$/;
    if (!passwordPattern.test(password)) {
      setError('Password must be at least 5 characters and include numbers and special symbols');
      return false;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(values);
      setValues(initialValues);
    }
  };

  return {
    values,
    error,
    handleChange,
    handleSubmit,
  };
}

export default useForm;

