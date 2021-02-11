import { types } from "../types/types";

export const startLoginEmailAndPassword = (email, password) => {};

export const login = (uid, email) => ({
  type: types.login,
  payload: { uid, email, }
});

export const logout = () => ({
  type: types.logout,
  payload: {}
})
