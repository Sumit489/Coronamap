import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container >
        <p>World Map With Covid-19 data</p>
        <ul  className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/page-2/">Protective Measures</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
