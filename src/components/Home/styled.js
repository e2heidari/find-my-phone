import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: whitesmoke;
  //   box-sizing: border-box;
  background-image: url("https://images.unsplash.com/photo-1638035966446-b2954fdf3525?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
export const Main = styled.div`
  font-size: 40px;
  font-weight: 200;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;
