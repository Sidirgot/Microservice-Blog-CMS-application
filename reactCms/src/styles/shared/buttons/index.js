import styled from "styled-components";

export const BtnPrimary = styled.button`
  background-color: ${(props) => props.theme.button_primary};
  outline: none;
  border: none;
  border-radius: 0.2rem;
  padding: 0.5rem;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  user-select: none;
  transition: opacity 300ms ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`;

export const BtnSymbol = styled.span`
  background-color: ${(props) => props.theme.blue_darker};
  border-radius: 10rem;
  padding: 0 0.3rem;
  margin: 0 0.2rem;
  font-size: 18px;
`;

export const NoBG = styled(BtnPrimary)`
  background-color: transparent;
  font-size: 25px;
  color: ${(props) => (props.type === "show" ? props.theme.blue : "")};
  color: ${(props) => (props.type === "edit" ? props.theme.yellow : "")};
  color: ${(props) => (props.type === "delete" ? props.theme.red : "")};
`;
