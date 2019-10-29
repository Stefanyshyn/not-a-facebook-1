import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { Redirect } from 'react-router-dom';
import UsersModel from '../modules/users';
// import posts from '../__mocks__/posts';

class UserProfilePage extends Component {
  state = {
    currentUser: null,
  }

  constructor(props) {
    super(props);
    const user = UsersModel.getUserById(props.match.params);
    this.state.currentUser = user;
  }

  render() {
    const { currentUser } = this.state;
    return (
      <>
        { !currentUser ? (<Redirect to="/login" />) : (
          <>
            <Image src={`${currentUser.profile.avatar}`} height="200px" />
            <div>{ `${currentUser.profile.firstName} ${currentUser.profile.lastName}` }</div>
          </>
        )}
      </>
    );
  }
}

export default UserProfilePage;
