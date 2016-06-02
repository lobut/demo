import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Course</Link>
      {" | "}
      <Link to="/about" activeClassName="active">Aboot</Link>
    </nav>
  );
};

export default Header;
