import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        Prace Higher Order Comps
      </div>
    );
  }
}

function mapStateToProps({posts}) {
  return {posts}
}

export default connect(mapStateToProps)(App)


