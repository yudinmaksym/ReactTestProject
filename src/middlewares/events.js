import { ActionsConst, EVENT_DEFAULT } from '../constants';

export default store => next => action => {
  const { type, month, list } = action;

  switch (type) {
    case ActionsConst.EVENTS_SET_LIST: {
      const arr = Object.keys(list).map((e) => {
        const item = list[e];
        return Object.assign({}, EVENT_DEFAULT, item, {
          id: e,
        });
      });
      next({
        type,
        month,
        list: arr,
      });
      break;
    }

    default:
      next(action);
  }
};
