/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Post from './Post';


class PostContainer extends Component {
  state = {
    id: '',
    createAt: '',
    body: '',
  }

  constructor(props) {
    super(props);
    const { id, createAt, body } = this.props;
    this.id = id;
    this.createAt = createAt;
    this.body = body;
  }

  render() {
    return (
      <Post
        handleClick={this.props.handleRemovePost}
        body={this.body}
      />
    );
  }
}

export default PostContainer;
