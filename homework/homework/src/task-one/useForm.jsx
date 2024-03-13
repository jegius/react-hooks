import { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  error: "",
};

export default function useForm() {
  const [formState, setFormState] = useState(initialState);

  function updateState(curKey, value) {
    setFormState((prevState) => ({ ...prevState, [`${curKey}`]: value }));
  }

  const onSubmitHandle = (
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  ) => {
    setFormState((prev) => initialState);

    alert(
      JSON.stringify({ firstName, lastName, email, password, confirmPassword })
    );
  };

  return {
    state: {
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,
      password: formState.password,
      confirmPassword: formState.confirmPassword,
      error: formState.error,
    },
    updateState,
    onSubmitHandle,
  };
}
