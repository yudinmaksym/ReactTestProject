import { ActionsConst } from '../constants';

export const login = data => ({
  type: ActionsConst.USER_LOGIN,
  data,
});

export const logout = () => ({
  type: ActionsConst.USER_LOGOUT,
});

export const set = data => ({
  type: ActionsConst.USER_SET,
  data,
});

export const checkAuth = () => ({
  type: ActionsConst.USER_CHECK_AUTH,
});
