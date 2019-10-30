import React, { useState } from 'react';
import {
  Container,
} from 'reactstrap';

const AuthorLayout = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default AuthorLayout;
