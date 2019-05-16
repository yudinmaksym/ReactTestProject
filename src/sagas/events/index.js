import { takeEvery, all, put, select } from 'redux-saga/effects';
import moment from 'moment';
import EventEmitter from '../../controllers/ee';
import { ActionsConst, TYPES } from '../../constants';
import { AppActions, EventsActions } from '../../actions';
import { databaseGet, databasePush, databaseRemove, databaseSet } from '../../controllers/firebase';
import history from '../../utils/history';
import * as Routes from '../../utils/routes';

function* loadState(payload) {
  yield put(AppActions.setLoaded(false));
  yield put(AppActions.setType(TYPES.EVENT));
  const { events } = yield select();
  const { value } = payload;

  if (!{}.hasOwnProperty.call(events, value)) {
    try {
      const data = yield databaseGet(`/${TYPES.EVENT}/${value}`);
      yield put(EventsActions.setList(value, data));
    } catch (error) {
      console.log(error);
    }
  }
  yield put(AppActions.setLoaded(true));
}

function* createArticle(payload) {
  yield put(AppActions.setLoaded(false));
  const { day, data } = payload;

  const mouthYear = moment(day, 'DD-MM-YYYY').format('MM-YYYY');
  const date = +moment(day, 'DD-MM-YYYY').format('x');

  try {
    yield databasePush(`/event/${mouthYear}`, {
      title: data.title,
      cost: +data.cost,
      places: {
        all: data.allPlaces,
        free: data.freePlaces,
      },
      date,
      time: {
        from: data.timeFrom,
        to: data.timeTo,
      },
      emcess: [],
      image: data.image,
      data: data.data,
    });
    const newList = yield databaseGet(`/${TYPES.EVENT}/${mouthYear}`);
    yield put(EventsActions.setList(mouthYear, newList));
    history.push(Routes.eventDaySingle(day));
  } catch (error) {
    console.log(error);
  }
}

function* removeArticle(payload) {
  const { day, id } = payload;
  const mouthYear = moment(day).format('MM-YYYY');
  const dayMouthYear = moment(day).format('DD-MM-YYYY');

  try {
    yield databaseRemove(`/${TYPES.EVENT}/${mouthYear}/${id}`);
    const newList = yield databaseGet(`/${TYPES.EVENT}/${mouthYear}`);
    yield put(EventsActions.setList(mouthYear, newList));
    history.push(Routes.eventDaySingle(dayMouthYear));
  } catch (error) {
    console.log(error);
  }
}

function* updateArticle(payload) {
  yield put(AppActions.setLoaded(false));
  const { id, day, data } = payload;

  const mouthYear = moment(day, 'DD-MM-YYYY').format('MM-YYYY');
  const date = +moment(day, 'DD-MM-YYYY').format('x');

  try {
    yield databaseSet(`/event/${mouthYear}/${id}`, {
      title: data.title,
      cost: +data.cost,
      places: {
        all: data.allPlaces,
        free: data.freePlaces,
      },
      date,
      time: {
        from: data.timeFrom,
        to: data.timeTo,
      },
      emcess: [],
      image: data.image,
      data: data.data,
    });
    const newList = yield databaseGet(`/${TYPES.EVENT}/${mouthYear}`);
    yield put(EventsActions.setList(mouthYear, newList));
    yield put(AppActions.setLoaded(true));
    EventEmitter.emit('EVENT_UPDATED');
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield all([
    yield takeEvery(ActionsConst.EVENTS_LOAD_STATE, loadState),
    yield takeEvery(ActionsConst.EVENTS_CREATE_ARTICLE, createArticle),
    yield takeEvery(ActionsConst.EVENTS_REMOVE_ARTICLE, removeArticle),
    yield takeEvery(ActionsConst.EVENTS_UPDATE_ARTICLE, updateArticle),
  ]);
}
