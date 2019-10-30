import React, { useState, useCallback } from 'react';
import Feed from '../components/Feed';
import PostForm from '../components/PostForm';
import PostsModel from '../modules/posts';
// import posts from '../__mocks__/posts';

function FeedPage() {
  const [posts, setState] = useState(PostsModel.get());

  const handleAddPost = useCallback((post) => {
    PostsModel.add(post);
    const _posts = PostsModel.get();
    setState(() => _posts);
  }, []);

  const handleRemovePost = useCallback((post) => {
    PostsModel.remove(post);
    const _posts = PostsModel.get();
    setState(() => _posts);
  }, []);

  return (
    <>
      <PostForm handleAddPost={handleAddPost} />
      <Feed posts={posts} handleRemovePost={handleRemovePost} />
    </>

  );
}

export default FeedPage;
