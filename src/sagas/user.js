import { takeEvery, all, put, call } from 'redux-saga/effects';
import { ActionsConst } from '../constants';
import EventEmitter from '../controllers/ee';
import { UserActions } from '../actions';
import { signIn, signOut, authStateChange } from '../controllers/firebase';
import history from '../utils/history';
import * as ROUTES from '../utils/routes';
import Store from '../store';

const onAuth = (user) => {
  Store.dispatch(UserActions.set({
    email: user.email,
  }));
};

const onNoAuth = () => {
  Store.dispatch(UserActions.set({
    email: '',
  }));
};

function* login(payload) {
  const { email, password } = payload.data;

  signIn(email, password)
    .then((res) => {
      Store.dispatch(UserActions.set({
        email: res.email,
      }));
      history.push(ROUTES.root());
    })
    .catch((error) => {
      const { message } = error;

      EventEmitter.emit('SIGNIN_ERROR', message);
    });
}

function* logout() {
  yield put(UserActions.set({
    email: '',
  }));
  signOut();
}

function* authChange() {
  yield call(authStateChange, onAuth, onNoAuth);
}

export default function* () {
  yield all([
    yield takeEvery(ActionsConst.USER_LOGIN, login),
    yield takeEvery(ActionsConst.USER_LOGOUT, logout),
    yield takeEvery(ActionsConst.USER_CHECK_AUTH, authChange),
  ]);
}
