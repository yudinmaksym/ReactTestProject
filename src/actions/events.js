import { ActionsConst } from '../constants';

export const loadState = value => ({
  type: ActionsConst.EVENTS_LOAD_STATE,
  value,
});

export const setList = (month, list) => ({
  type: ActionsConst.EVENTS_SET_LIST,
  month,
  list,
});

export const createArticle = (day, data) => ({
  type: ActionsConst.EVENTS_CREATE_ARTICLE,
  day,
  data,
});

export const removeArticle = (day, id) => ({
  type: ActionsConst.EVENTS_REMOVE_ARTICLE,
  day,
  id,
});


export const updateArticle = (id, day, data) => ({
  type: ActionsConst.EVENTS_UPDATE_ARTICLE,
  id,
  day,
  data,
});
