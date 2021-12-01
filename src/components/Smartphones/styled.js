import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-content: space-between;
  width: 100vw;
`;

export const FormWrapper = styled.div`
  background-color: #caf0f8;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #9e606f;
  padding: 10px;
  @media (max-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const Form = styled.div`
  position: relative;
  display: block;
  margin: 0;
  padding: 20px 0;
  border-top: 1px solid lighten($gray, 10%);
`;

export const RadioGroupDiv = styled.div`
  position: relative;
`;
export const Image = styled.img`
  min-height: 100vh;
  object-fit: cover;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
