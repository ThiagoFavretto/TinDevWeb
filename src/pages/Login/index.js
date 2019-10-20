import React, { useState } from "react";
import { Container, FormLogin, InputLogin, Button } from "./styles";

import logo from "../../assets/logo.svg";

import api from "../../service/api";

export default function Login({ history }) {
  const [username, setUsername] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await api.post("/devs", {
      username
    });

    const { _id } = response.data;
    history.push(`/dev/${_id}`);
  };

  return (
    <Container>
      <FormLogin onSubmit={handleSubmit}>
        <img src={logo} alt="TinDev" />
        <InputLogin
          placeholder="Seu usúario no Github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
      </FormLogin>
    </Container>
  );
}
