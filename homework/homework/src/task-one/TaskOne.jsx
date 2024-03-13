import React from "react";
import "./TaskOne.css";
import useForm from "./useForm";
import useSubmitForm from "./useSubmitForm";

function TaskOne() {
  const {
    state: { firstName, lastName, email, password, confirmPassword, error },
    updateState,
    onSubmitHandle,
  } = useForm();

  // TODO: реализуйте пользовательский хук для валидации
  const submitForm = useSubmitForm(onSubmitHandle, updateState);

  return (
    <div className="form-container">
      <div className="error-message">{error}</div>
      <form onSubmit={submitForm}>
        {" "}
        {/* Измените здесь на submitForm, когда он будет готов */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="form-input"
          onChange={(e) => updateState("firstName", e.target.value)}
          value={firstName}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="form-input"
          onChange={(e) => updateState("lastName", e.target.value)}
          value={lastName}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-input"
          onChange={(e) => updateState("email", e.target.value)}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-input"
          onChange={(e) => updateState("password", e.target.value)}
          value={password}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="form-input"
          onChange={(e) => updateState("confirmPassword", e.target.value)}
          value={confirmPassword}
        />
        <button type="submit" className="form-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default TaskOne;
