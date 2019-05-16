import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Route, applyRouterMiddleware } from 'react-router';
import Overlay from './containers/Overlay';
import {
  root,
  pageNotFound,
} from './utils/routes';
import lang from './lang/en.json';
import history from './utils/history';

class Routing extends Component {
  static propTypes = {
    app: PropTypes.oneOfType([PropTypes.object]),
    dispatch: PropTypes.func,
    events: PropTypes.oneOfType([PropTypes.object]),
    user: PropTypes.oneOfType([PropTypes.object]),
  };

  static defaultProps = {
    app: {},
    dispatch() {},
    events: {},
    user: {},
  };

  static childContextTypes = {
    type: PropTypes.string,
    dispatch: PropTypes.func,
    lang: PropTypes.object,
    locale: PropTypes.string,
    history: PropTypes.object,
  };

  getChildContext() {
    return {
      type: this.props.app.type,
      dispatch: this.props.dispatch,
      lang,
      locale: this.props.app.locale,
      history,
    };
  }

  render() {
    const { events, app, user } = this.props;

    return (
      <div style={{ height: '100%' }}>
        <Router
          history={history}
          render={applyRouterMiddleware({
            renderRouteComponent: child => (
              React.cloneElement(child, { events, loaded: app.loaded, user })
            ),
          })}
        >
          <Route
            path={root()}
            getComponent={(nextState, cb) => {
              require.ensure([], (require) => {
                cb(null, require('./containers/Main').default);
              });
            }}
          />
          <Route
            path={pageNotFound()}
            exact
            getComponent={(nextState, cb) => {
              require.ensure([], (require) => {
                cb(null, require('./containers/PageNotFound').default);
              });
            }}
          />
        </Router>
        <Overlay {...this.props} />
      </div>
    );
  }
}

export default connect(state => state, null, null, { pure: false })(Routing);
