import { useState } from "react";
import { useLogin } from "./useLogin";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRowVertical from "../../ui/FormRowVertical";

import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";

const ErrorDiv = styled.div`
  color: red;
  margin-top: 1rem;
`;

function LoginForm() {
  const [email, setEmail] = useState("roman.example@gmail.com");
  const [password, setPassword] = useState("qwe123");

  const { login, isPending: isLoading, error } = useLogin();

  const [localError, setLocalError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setPassword("");
          if (error)
            setLocalError(error.message || "Invalid email or password");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      {error && (
        <ErrorDiv>{localError || "Invalid email or password"}</ErrorDiv>
      )}

      <FormRowVertical>
        <Button disabled={isLoading} size="large">
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
