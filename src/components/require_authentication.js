import React, {Component} from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      this.validate();
    }

    componentDidUpdate() {
      this.validate();
    }

    validate() {
      if (!this.props.authenticated) {
        this.props.history.push('/');
      }
    }

    render() {
      console.log(this.context);
      return <ComposedComponent {...this.props}/>
    }
  }

  function mapStateToProps({authenticated}) {
    return {authenticated}
  }
  return connect(mapStateToProps)(Authentication);
}

