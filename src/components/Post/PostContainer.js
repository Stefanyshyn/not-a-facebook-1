/* eslint-disable react/no-unused-state */
import React, { useState } from 'react';
import Post from './Post';


function PostContainer(props) {
  const [state] = useState({
    id: props.id,
    createAt: props.createAt,
    body: props.body,
  });
  return (
    <Post
      handleClick={props.handleRemovePost}
      body={state.body}
    />
  );
}

export default PostContainer;
