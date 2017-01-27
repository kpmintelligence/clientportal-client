import React, { Component , PropTypes }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

class Home extends Component {
  render() {
    return (
      <h1 id="header">
        React-Redux-Seed
      </h1>
    );
  }
}

export default connect(state => ({ headerStr: state.headerStr }))(Home)
