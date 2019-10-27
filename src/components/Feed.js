import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Card, CardImg, CardHeader, CardBody, Button,
} from 'reactstrap';

// eslint-disable-next-line no-unused-vars
const Post = ({ profile, post, handleRemovePost }) => (
  <div className="post-form">
    <Card className="post-card" outline color="secondary">
      {
        /*
      <CardImg src={profile.avatar} alt="AvAtAr" />
      <CardHeader>{profile.firstName + profile.lastName}</CardHeader>
        */
      }
      <CardBody>
        <p className="text-muted">{post.body}</p>
        <Button color="danger" onClick={handleRemovePost}>remove</Button>
        {' '}
      </CardBody>
    </Card>
  </div>
);

const Feed = ({ posts, handleRemovePost }) => (
  <div>
    {posts.map((post) => (
      <Post
        post={post}
        handleRemovePost={() => handleRemovePost({ id: post.id })}
      />
    ))}
  </div>
);

export default Feed;
