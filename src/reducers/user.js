import { ActionsConst } from '../constants';

export default function dialog(
  state = {},
  action = {},
) {
  const { type, data } = action;

  switch (type) {
    case ActionsConst.USER_SET: {
      return { ...state, ...data };
    }

    default:
      return state;
  }
}
