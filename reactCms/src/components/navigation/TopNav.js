import React from "react";
import styled from "styled-components";
import Logo from "#assets/logo.png";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.primary};
  box-shadow: 0 0.5rem 1rem 0 ${(props) => props.theme.secondary};
  padding: 0.5rem 0;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const LogoWrapper = styled.div`
  margin: 0 1rem;
`;

const TopNav = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <img width="60" height="60" src={Logo} alt="sidirgot logo" />
      </LogoWrapper>
    </Wrapper>
  );
};

export default TopNav;
