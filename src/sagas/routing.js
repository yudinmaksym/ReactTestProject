import { fork, put } from 'redux-saga/effects';
import { router } from 'redux-saga-router';
import moment from 'moment';
import { AppActions, EventsActions } from '../actions';
import history from '../utils/history';
import * as Routes from '../utils/routes';

function* root() {
  yield put(AppActions.setType(''));
}

function* events({ day }) {
  let value = '';
  if (day) {
    value = moment(day, 'DD-MM-YYYY').format('MM-YYYY');
  } else {
    value = moment().format('MM-YYYY');
  }
  yield put(EventsActions.loadState(value));
}

const routes = {
  // [Routes.root()]: root,
  // [Routes.eventCalendar()]: events,
  // [Routes.eventDaySingle()]: events,
  // [Routes.eventArticleNew()]: events,
  // [Routes.eventArticle()]: events,
  // [Routes.eventInstructors()]: events,
};

export default function* () {
  yield fork(router, history, routes);
}
