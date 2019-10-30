/* eslint-disable no-console */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import PostForm from './PostForm';
import { createPost } from '../../utils/creators';
import UsersModule from '../../modules/users';

function PostFormContainer(props) {
  const [state, setState] = useState({
    textAreaVisible: true,
    curUser: UsersModule.me(),
    body: '',
  });

  const toggleTextArea = useCallback(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setState((s) => ({ ...s, textAreaVisible: !s.textAreaVisible }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { curUser } = state;
    const { handleAddPost } = props;
    const post = createPost(e.target.body.value, curUser);
    handleAddPost(post);
    setState((s) => ({ ...s, body: '' }));
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value }));
  }, []);

  const { textAreaVisible, body } = state;
  return (
    <PostForm
      toggleTextArea={toggleTextArea}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      textAreaVisible={textAreaVisible}
      body={body}
    />
  );
}

PostFormContainer.propTypes = {
  handleAddPost: PropTypes.func.isRequired,
};

export default PostFormContainer;
