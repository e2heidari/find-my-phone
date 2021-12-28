import styled from "styled-components";

export const SearchBox = styled.div`
  transform: translate(-50%, 50%);
  height: 40px;
  border-radius: 40px;
  padding: 10px;
  input {
    font-family: "Inconsolata", monospace;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 40px;
    outline: none;
    border: none;
    background: black;
    color: white;
    padding: 0 80px 0 20px;
    border-radius: 30px;
    box-shadow: 0 0 25px 0 white, 0 20px 25px 0 rgba(0, 0, 0, 0.2);
    transition: all 1s;
    opacity: 0;
    z-index: 5;
    font-weight: bolder;
    letter-spacing: 0.1em;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      width: 270px;
      opacity: 1;
      cursor: text;
    }
    &:focus ~ button {
      right: -500px;
      background: white;
      z-index: 6;
      &::before {
        top: 0;
        left: 0;
        width: 25px;
      }
      &::after {
        top: 0;
        left: 0;
        width: 25px;
        height: 2px;
        border: none;
        background: black;
        border-radius: 0%;
        transform: rotate(-45deg);
      }
    }
    &::placeholder {
      color: white;
      font-weight: bolder;
    }
  }
  button {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 50%;
    transition: all 1s;
    z-index: 4;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: "";
      position: absolute;
      margin: auto;
      top: 22px;
      right: 0;
      bottom: 0;
      left: 22px;
      width: 12px;
      height: 2px;
      background: black;
      transform: rotate(45deg);
      transition: all 0.5s;
    }
    &::after {
      content: "";
      position: absolute;
      margin: auto;
      top: -5px;
      right: 0;
      bottom: 0;
      left: -5px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 2px solid black;
      transition: all 0.5s;
    }
  }
`;
export const ListContainer = styled.div`
  position: absolute;
  top: 50%;
  left: -150%;
  padding: 8px;
  width: 300px;
  ul {
    li {
      text-decoration: none;
    }
  }
`;
