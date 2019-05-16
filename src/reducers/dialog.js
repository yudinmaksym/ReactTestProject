import { ActionsConst } from '../constants';

export default function dialog(
  state = [],
  action = {},
) {
  const { type, value, params } = action;

  switch (type) {
    case ActionsConst.DIALOG_SHOW: {
      if (params) {
        return { ...state, name: value, params };
      }
      return { ...state, name: value };
    }

    case ActionsConst.DIALOG_HIDE: {
      return { ...state, name: '', params: {} };
    }

    case ActionsConst.DIALOG_SET_PARAMS: {
      return { ...state, params };
    }

    default:
      return state;
  }
}
