import { useState } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function useForm() {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);

    const validationError = validateField(name, value, newValues);
    setError(validationError);
  };

  const validateField = (name, value, currentValues) => {
    switch (name) {
      case "firstName":
        if (!value.trim()) {
          return "Имя не может быть пустым";
        }
        return "";

      case "lastName":
        if (!value.trim()) {
          return "Фамилия не может быть пустой";
        }
        return "";

      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Введите корректный email";
        }
        return "";

      case "password":
        if (value.length < 5) {
          return "Пароль должен содержать минимум 5 символов";
        }
        if (!/\d/.test(value)) {
          return "Пароль должен содержать цифру";
        }
        if (!/[!@#$%^&*]/.test(value)) {
          return "Пароль должен содержать специальный символ";
        }
        return "";

      case "confirmPassword":
        if (value !== currentValues.password) {
          return "Пароли не совпадают";
        }
        return "";
      default:
        return "";
    }
  };

  const submitForm = (event) => {
    event.preventDefault();

    const fields = [
      "firstName",
      "lastName",
      "email",
      "password",
      "confirmPassword",
    ];

    for (const field of fields) {
      const validationError = validateField(field, values[field], values);
      if (validationError) {
        setError(validationError);
        return;
      }
    }
    setError("");

    alert(JSON.stringify(values));

    setValues(initialValues);
  };

  return {
    values,
    error,
    handleChange,
    submitForm,
  };
}

export default useForm;
