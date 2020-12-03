import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BtnPrimary } from "#root/styles/shared/buttons";
import { BackBtn } from "#root/components/shared/buttons";

const Wrapper = styled.div``;

const ShowPost = () => {
  return (
    <Wrapper>
      <Link to="/admin/posts">
        <BackBtn />
      </Link>
    </Wrapper>
  );
};

export default ShowPost;
