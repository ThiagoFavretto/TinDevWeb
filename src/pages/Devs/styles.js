import styled from "styled-components";

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 50px;

  li {
    display: flex;
    flex-direction: column;
  }

  li img {
    max-width: 100%;
    border-radius: 5px 5px 0 0;
  }
`;

export const Footer = styled.footer`
  flex: 1;
  background: #fff;
  border: 1px solid #eee;
  padding: 15px 20px;
  text-align: left;
  border-radius: 0 0 5px 5px;

  strong {
    font-weight: bold;
    font-size: 16px;
    color: #333;
  }

  p {
    font-size: 14;
    line-height: 20px;
    color: #999;
    margin-top: 5px;
  }
`;
export const ButtonContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

export const Button = styled.button`
  height: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;

  &:hover {
    img {
      transform: translateY(-5px);
      transition: all 0.2s;
    }
  }

  &:active {
    position: relative;
    top: 3px;
    box-shadow: none;
  }
`;

export const Vazio = styled.div`
  font-size: 32px;
  color: #999;
  margin-top: 300px;
  font-weight: bold;
`;
