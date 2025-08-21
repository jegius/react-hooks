import React from 'react';
import './styles.css'; 
import useForm from './useForm';

function TaskOne() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = (formData) => {
    alert(JSON.stringify(formData));
  };

  const { values, error, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  return (
    <div className="form-container">
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          className="form-input"
          value={values.firstName}
          onChange={handleChange('firstName')}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="form-input"
          value={values.lastName}
          onChange={handleChange('lastName')}
        />
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          value={values.email}
          onChange={handleChange('email')}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          value={values.password}
          onChange={handleChange('password')}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="form-input"
          value={values.confirmPassword}
          onChange={handleChange('confirmPassword')}
        />
        <button type="submit" className="form-button">Register</button>
      </form>
    </div>
  );
}

export default TaskOne;
