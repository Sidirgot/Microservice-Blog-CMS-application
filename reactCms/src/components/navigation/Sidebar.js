import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.primary};
  position: fixed;
  top: 5rem;
  width: 15rem;
  padding: 1rem 0.5rem;
  bottom: 0;
  display: flex;
  justify-content: center;
  transition: all 300ms ease-in-out;
  @media (max-width: 768px) {
    margin-left: -20rem;
    opacity: 0;
  }
`;

const RouteLink = styled(NavLink)`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <div>
        <RouteLink to="/admin/posts">Posts</RouteLink>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
