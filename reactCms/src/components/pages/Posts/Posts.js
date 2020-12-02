import React from "react";
import styled from "styled-components";
import { BtnPrimary } from "#root/components/shared/buttons";
import { PageTitle } from "../../shared/page";
import { BtnSymbol } from "../../shared/buttons";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.primary};
  padding: 1rem;
  border-radius: 0.2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Posts = () => {
  return (
    <Wrapper>
      <Header>
        <div>
          <PageTitle>Posts</PageTitle>
        </div>
        <div>
          <BtnPrimary>
            New Post <BtnSymbol>&#43;</BtnSymbol>
          </BtnPrimary>
        </div>
      </Header>
    </Wrapper>
  );
};

export default Posts;
