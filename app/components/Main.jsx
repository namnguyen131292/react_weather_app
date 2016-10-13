import React, { Component } from 'react';

// eslint-disable-next-line
import Nav from 'Nav';


const Main = () => (
  <div>
    <Nav />
    <h2>Main Component</h2>
    {this.props.children}
  </div>
);

export default Main;
