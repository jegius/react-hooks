import React from "react";

function useSubmitForm(onSubmitHandle, updateState) {
  function checkForm(event) {
    event.preventDefault();

    const {
      firstName: { value: firstName },
      lastName: { value: lastName },
      email: { value: email },
      password: { value: password },
      confirmPassword: { value: confirmPassword },
    } = event.target;

    if (!firstName.trim() || !lastName.trim()) {
      updateState("error", `fileds 'firstname' and 'lastname' can't be empty!`);
      return;
    }

    if (!email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
      updateState("error", "wrong mail!");
      return;
    }

    const passwordCheck =
      /^(?=.*[a-zA-Zа-яА-Я])(?=.*\d)(?=.*[!@#\$%\^\&*\)\(+=._-]).{5,}$/;

    if (password.trim().length < 5 || !passwordCheck.test(password)) {
      updateState(
        "error",
        "the password must contain at least 5 characters, including special symbols (%, $, @, etc.)"
      );
      return;
    }

    if (confirmPassword !== password) {
      updateState("error", "passwords don't match");
      return;
    }

    onSubmitHandle(firstName, lastName, email, password, confirmPassword);
  }

  return checkForm;
}

export default useSubmitForm;
