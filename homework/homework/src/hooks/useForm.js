import { useState } from "react";

export const useForm = (onSubmit) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!firstName.trim()) {
      return "First Name is required";
    }

    if (!lastName.trim()) {
      return "Last Name is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return "Invalid email";
    }

    const passwordPattern =
      /^(?=.*\d)(?=.*[%$@!#%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{5,}$/;

    if (!passwordPattern.test(password)) {
      return "Password must contain at least 5 characters, a number and a special character";
    }

    if (password !== confirmPassword) {
      return "Passwords do not match";
    }

    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    onSubmit({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
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
    handleSubmit,
  };
};
