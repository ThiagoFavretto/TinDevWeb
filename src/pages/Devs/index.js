import React, { useState, useEffect } from "react";
import {
  Container,
  List,
  Footer,
  ButtonContainer,
  Button,
  Vazio
} from "./styles";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";

import api from "../../service/api";

export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get("/devs", {
        headers: {
          user: match.params.id
        }
      });
      console.log(response.data);
      setUsers(response.data);
    };

    loadUsers();
  }, [match.params.id]);

  const handleLike = async id => {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id }
    });
    setUsers(users.filter(user => user._id !== id));
  };
  const handleDisLike = async id => {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id }
    });

    setUsers(users.filter(user => user._id !== id));
  };
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="TinDev" />
      </Link>
      {users.length > 0 ? (
        <List>
          {users.map((user, i) => (
            <li key={i}>
              <img src={user.avatar} alt={user.name} />
              <Footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </Footer>
              <ButtonContainer>
                <Button type="button" onClick={() => handleDisLike(user._id)}>
                  <img src={dislike} alt="Dislike" />
                </Button>
                <Button type="button" onClick={() => handleLike(user._id)}>
                  <img src={like} alt="Like" />
                </Button>
              </ButtonContainer>
            </li>
          ))}
        </List>
      ) : (
        <Vazio>Vazio ;-;</Vazio>
      )}
    </Container>
  );
}
