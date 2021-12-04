import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  margin: 0 auto;
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
