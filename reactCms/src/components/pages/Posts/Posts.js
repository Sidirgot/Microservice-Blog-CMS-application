// React
import React from "react";
import { Link } from "react-router-dom";

// Styles
import styled from "styled-components";
import { PageTitle, FlexBetweenRow } from "#root/styles/shared/page";

// Custom Components
import Table, { TBodyRow } from "#root/components/shared/table";
import {
  NewEntryBtn,
  ShowBtn,
  EditBtn,
  DeleteBtn,
} from "#root/components/shared/buttons";

const Wrapper = styled.div`
  padding: 1rem;
  border-radius: 0.2rem;
`;

const Posts = () => {
  const head = [
    "Title",
    "Category",
    "Status",
    "Created At",
    "Updated At",
    "Actions",
  ];
  const posts = [
    {
      id: 1,
      title: "some title",
      category: "category",
      status: "draft",
      createdAt: "20 Nov, 2020",
      updatedAt: "27 Nov, 2020",
    },
  ];

  const Body = () => {
    return (
      <>
        {posts.length > 0 &&
          posts.map((post) => (
            <TBodyRow key={post.id}>
              <td>{post.title}</td>
              <td>{post.category}</td>
              <td>{post.status}</td>
              <td>{post.createdAt}</td>
              <td>{post.updatedAt}</td>
              <td>
                <ShowBtn />
                <EditBtn />
                <DeleteBtn />
              </td>
            </TBodyRow>
          ))}

        {posts.length <= 0 && (
          <TBodyRow>
            <td colSpan={head.length}>No posts found.</td>
          </TBodyRow>
        )}
      </>
    );
  };

  return (
    <Wrapper>
      <FlexBetweenRow>
        <div>
          <PageTitle>Posts</PageTitle>
        </div>
        <Link to="/admin/posts/show">
          <NewEntryBtn />
        </Link>
      </FlexBetweenRow>

      <div>
        <Table headFields={head} body={<Body />} />
      </div>
    </Wrapper>
  );
};

export default Posts;
