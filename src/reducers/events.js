import { ActionsConst } from '../constants';

export default function events(
  state = [],
  action = {},
) {
  const { type, month, list } = action;

  switch (type) {
    case ActionsConst.EVENTS_SET_LIST: {
      return { ...state, [month]: list };
    }

    default:
      return state;
  }
}
