// React
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// API
// Actions
// components

// Internal Styling
require("../style/home.less");

class Home extends Component {

  render() {
      return (
        <div className="home">
          <p>Progic Home</p>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {}
}
// API requirements
Home.propTypes = {
};

export default connect(mapStateToProps)(Home);
