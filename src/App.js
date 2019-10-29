import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import UserProfilePage from './pages/UserProfilePage';
import LoginFormPage from './pages/LoginFormPage';
import FeedPage from './pages/FeedPage';
import NotFoundPage from './pages/NotFoundPage';
import MainLayout from './layouts/MainLayout';
import AuthorLayout from './layouts/AuthorLayout';

const App = () => (
  <Router>
    <Switch>
      <Route
        path="/login"
        render={(props) => (
          <AuthorLayout>
            <LoginFormPage isLogin {...props} />
          </AuthorLayout>
        )}
      />
      <Route
        path="/sign-up"
        render={(props) => (
          <AuthorLayout>
            <LoginFormPage isLogin={false} {...props} />
          </AuthorLayout>
        )}
      />
      <Route path="/feed" render={(props) => <MainLayout {...props}><FeedPage {...props} /></MainLayout>} />
      <Route path="/profile" exact render={(props) => <MainLayout {...props}><UserProfilePage {...props} /></MainLayout>} />
      <Route path="/profile/:id" exact render={(props) => <MainLayout {...props}><UserProfilePage {...props} /></MainLayout>} />
      <Redirect from="/" to="/feed" exact />
      <Route render={(props) => (
        <MainLayout {...props}>
          <NotFoundPage />
        </MainLayout>
      )}
      />
    </Switch>
  </Router>
);

export default App;
