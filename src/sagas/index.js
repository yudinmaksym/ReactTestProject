import { all } from 'redux-saga/effects';
import Routing from './routing';
import Events from './events';
import User from './user';

export default function* () {
  yield all([
    Events(),
    Routing(),
    User(),
  ]);
}
