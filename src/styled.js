import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  margin: 0 auto;
  width: 100vw;
}`;

export const StyledMenu = styled.nav`
  background: #444;
  // box-shadow: 0px 1px 10px 10px #ddd;
  height: auto;
  text-align: center;
  width: 100%;
  li {
    display: inline-block;
  }

  @media (max-width: 768px) {
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }

    li {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: ${({ theme }) => theme.primaryDark};
      transition: color 0.3s linear;
      list-style: none;

      @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
        text-align: center;
      }

      &:hover {
        color: ${({ theme }) => theme.primaryHover};
      }
    }
  }
`;
export const RouterLink = styled(Link)`
  color: #fff;
  display: inline-block;
  height: 60px;
  line-height: 60px;
  margin: 0px;
  padding: 0px 15px;
  text-decoration: none;
  transition: color 0.3s ease-in;
  &:hover {
    color: #fcd000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1),
      inset 0 0 1px rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.1);
  }
  @media (max-width: 768px) {
    color: black;
  }
`;
export const SearchBox = styled.div`
  position: absolute;
  top: -10px;
  left: 20px;
  // float: right;
  transform: translate(-50%, 50%);
  height: 40px;
  border-radius: 40px;
  padding: 10px;
  input {
    font-family: 'Inconsolata', monospace;
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
    // border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background: crimson;
    color: white;
    text-shadow: 0 0 10px crimson;
    padding: 0 80px 0 20px;
    border-radius: 30px;
    box-shadow: 0 0 25px 0 crimson,
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
    // box-shadow: inset 0 0 25px 0 rgba(0, 0, 0, 0.5);
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
      background: #151515;
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
        background: white;
        border-radius: 0%;
        transform: rotate(-45deg);
      }
    }
    &::placeholder {
      color: white;
      opacity: 0.5;
      font-weight: bolder;
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 10px;
    left: 80px;
    &:focus {
      width: 100px;
    }
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
    background: crimson;
    border-radius: 50%;
    transition: all 1s;
    z-index: 4;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
    // box-shadow: 0 0 25px 0 crimson;
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
      background: white;
      transform: rotate(45deg);
      transition: all .5s;
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
      border: 2px solid white;
      transition: all .5s;
    }
    
`;
