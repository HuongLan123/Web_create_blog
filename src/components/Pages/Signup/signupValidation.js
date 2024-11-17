function Validation1(values) {
  let error = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.Name === "") {
    error.Name = "Name should not be empty";
  } else {
    error.Name = ""; // No error
  }

  if (values.Email === "") {
    error.Email = "Email should not be empty";
  } else if (!email_pattern.test(values.Email)) {
    error.Email = "Invalid email format";
  } else {
    error.Email = ""; // No error
  }

  if (values.Password === "") {
    error.Password = "Password should not be empty";
  } else if (!password_pattern.test(values.Password)) {
    error.Password =
      "Password must be at least 8 characters, include one uppercase letter, one lowercase letter, and one number.";
  } else {
    error.Password = ""; // No error
  }

  return error;
}

export default Validation1;
