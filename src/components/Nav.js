import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id='Logo' to='/'>
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link className='link' to='/'>
            1. About Us
          </Link>
        </li>
        <li>
          <Link className='link' to='/work'>
            2. Our Work
          </Link>
        </li>
        <li>
          <Link className='link' to='/contact'>
            3. Contact Us
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  .link {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: lighter;
  }
  #Logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
