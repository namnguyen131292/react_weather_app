import { Link, IndexLink } from 'react-router';

import React, { Component } from 'react';


const Nav = () => (<div>
  <h2>Nav Component</h2>
  <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
  <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
  <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
</div>);

module.exports = Nav;
