export const authFetchingSelector = state => state.authReducer.isfetch;
export const authSelector = state => state.authReducer.isAuth;
export const userIdSelector = state => state.authReducer.userId;
export const authErrorSelector = state => state.authReducer.error;
