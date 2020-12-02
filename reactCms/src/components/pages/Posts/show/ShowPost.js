import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BtnPrimary } from "#root/components/shared/buttons";

const Wrapper = styled.div``;

const BackBtn = styled(BtnPrimary)`
  padding: 0.5rem;
`;

const ShowPost = () => {
  return (
    <Wrapper>
      <Link to="/admin/posts">
        <BackBtn>Back</BackBtn>
      </Link>
    </Wrapper>
  );
};

export default ShowPost;
