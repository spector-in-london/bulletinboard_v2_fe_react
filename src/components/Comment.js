import React from "react";
import styled from "styled-components";

const CommentWrapper = styled.div`
  margin-bottom: 1em;
`;

const CommentHeader = styled.div`
  border-bottom: 1px solid #ffbc05;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`

const Comment = () => {
  return (
    <CommentWrapper>
      <CommentHeader>
        <div>Header Left</div>
        <div>Date</div>
      </CommentHeader>
      <div>Body</div>
  </CommentWrapper>
  );
}

export default Comment;
