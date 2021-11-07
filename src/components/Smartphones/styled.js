import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100vw;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Form = styled.div`
  background-color: #b2ffff;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #9e606f;
  padding: 10px;
`;
export const Image = styled.img`
  min-height: 100vh;
  object-fit: cover;
`;
