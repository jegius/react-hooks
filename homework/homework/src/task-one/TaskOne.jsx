import React from 'react';
import './TaskOne.css';
import useForm from "./useForm";

function TaskOne() {
    const onSubmitHandle = (formData) => {
        alert(JSON.stringify(formData));
    };
    const {
        firstName, setFirstName,
        lastName, setLastName,
        email, setEmail,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        error, handleSubmit
    } = useForm(onSubmitHandle);

    return (
        <div className="form-container">
            <div className="error-message">{error}</div>
            <form onSubmit={handleSubmit}>
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