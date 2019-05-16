import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routing from './routing';
import Store from './store';
import { UserActions } from './actions';
// import { databaseGet, databaseSet, databasePush } from './controllers/firebase';

// databaseGet('/event').then((res) => {
//   console.log(res);
// });

// databaseSet('/event', [])

// databasePush('/event/09-2017', {
//   title: 'Test 5',
//   cost: 15,
//   places: {
//     all: 10,
//     free: 8,
//   },
//   date: new Date().getTime(),
//   time: {
//     from: '14:00',
//     to: '15:00',
//   },
//   emcess: [],
//   image: 'https://eventcartel.com/media/news/October_Events_LA.jpeg',
//   data: 'This is article description',
// });

const root = document.getElementById('root');
Store.dispatch(UserActions.checkAuth());

render(
  <Provider store={Store}>
    <Routing />
  </Provider>,
  root,
);

if (module.hot) {
  module.hot.accept('./routing', () => {
    const NextRootContainer = require('./routing').default;
    render(
      <Provider store={Store}>
        <NextRootContainer />
      </Provider>,
      root,
    );
  });
}

if (process.env && process.env.NODE_ENV === 'development') {
  window.Store = Store;
}
