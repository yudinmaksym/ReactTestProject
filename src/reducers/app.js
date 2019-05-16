import { ActionsConst } from '../constants';

export default function app(
  state = {},
  action = {},
  ) {
  const { type, value } = action;

  switch (type) {
    case ActionsConst.APP_SET_TYPE: {
      return { ...state, type: value };
    }

    case ActionsConst.APP_SET_LOADED: {
      return { ...state, loaded: value };
    }

    default:
      return state;
  }
}
