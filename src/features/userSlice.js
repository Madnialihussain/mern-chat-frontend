import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user', 
  initialState: null,
  reducers: {
    addNotifications: (state, {payload}) => {},
    resetNotifications: (state, {payload}) => {},
  },

  extraReducers: (builder) => {
    //Save User After signup
    builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled, (state, {payload}) => payload);

    //Save User After Login
    builder.addMatcher(appApi.endpoints.loginUser.matchFulfilled, (state, {payload}) => payload);

    // logout destroy user session
    builder.addMatcher(appApi.endpoints.logoutUser.matchFulfilled, () => null );

  },
});

export const {addNotifications, resetNotifications} = userSlice.actions;
export default userSlice.reducer;

 