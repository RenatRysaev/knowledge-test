export const authFetchingSelector = state => state.authReducer.isFetch;
export const authSelector = state => state.authReducer.isAuth;
export const userIdSelector = state => state.authReducer.userId;
