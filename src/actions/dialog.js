import { ActionsConst } from '../constants';

export const show = (value, params) => ({
  type: ActionsConst.DIALOG_SHOW,
  value,
  params,
});

export const hide = () => ({
  type: ActionsConst.DIALOG_HIDE,
});

export const setParams = params => ({
  type: ActionsConst.DIALOG_SET_PARAMS,
  params,
});
