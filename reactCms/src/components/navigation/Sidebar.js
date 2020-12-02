import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.primary};
  position: fixed;
  top: 5rem;
  width: 15rem;
  padding: 0.5rem;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

const Sidebar = () => {
  return <Wrapper>sidebar</Wrapper>;
};

export default Sidebar;
