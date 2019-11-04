import React, { useState, useMemo } from 'react';
import {
  Card, CardImg, CardBody, CardTitle,
} from 'reactstrap';
import UserModel from '../modules/users';

// eslint-disable-next-line react/prefer-stateless-function
function UserPage(props) {
  const [state] = useState({ username: props.match.params.username });

  const user = useMemo(() => UserModel.getUserByUsername(state.username), [state.username]);

  const { profile } = user;
  return (
    <div>
      <Card>
        <CardImg style={{ width: 200, height: 200 }} className="avatar" src={profile.avatar} />
        <CardBody>
          <CardTitle>{profile.firstName}</CardTitle>
          <CardTitle>{profile.lastName}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default UserPage;
