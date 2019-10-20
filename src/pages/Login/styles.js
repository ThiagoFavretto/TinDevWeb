import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormLogin = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

export const InputLogin = styled.input`
  margin-top: 20px;
  border: 2px solid #ddd;
  height: 50px;
  font-size: 18px;
  padding: 0 20px;
  border-radius: 10px 10px 0 10px;
  color: #666;

  &::placeholder {
    color: #999;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  border: 0;
  border-radius: 10px 0 10px 10px;
  height: 50px;
  font-size: 18px;
  background: #df4723;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;
