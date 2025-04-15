import React from 'react';
import './TaskOne.css';
import useForm from './useForm';

function TaskOne() {
    const onSubmitHandle = (data) => {
        alert(JSON.stringify(data));
    };

    const { values, error, handleChange, handleSubmit } = useForm(onSubmitHandle);

    return (
        <div className="form-container">
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" className="form-input"
                       onChange={handleChange} value={values.firstName} />
                <input type="text" name="lastName" placeholder="Last Name" className="form-input"
                       onChange={handleChange} value={values.lastName} />
                <input type="email" name="email" placeholder="Email" className="form-input"
                       onChange={handleChange} value={values.email} />
                <input type="password" name="password" placeholder="Password" className="form-input"
                       onChange={handleChange} value={values.password} />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-input"
                       onChange={handleChange} value={values.confirmPassword} />
                <button type="submit" className="form-button">Register</button>
            </form>
        </div>
    );
}

export default TaskOne;
