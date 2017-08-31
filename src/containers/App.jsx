import React from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import Navigation from '../components/Navigation';
import { addTopic } from '../actions';

const mapStateToProps = ({ courses, topics }) => ({ courses, topics });
const mapDispatchToProps = { addTopic };

class App extends React.Component {
  render() {
    const { courses, topics, route } = this.props;

    return (
      <div>
        <Navigation />
        {renderRoutes(route.routes, { topics, courses })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
