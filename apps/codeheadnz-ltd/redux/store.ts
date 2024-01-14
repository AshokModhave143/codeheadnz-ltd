import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import appConfigSlice from '@common/redux/appConfigSlice';

export const store = configureStore({
  reducer: {
    appConfig: appConfigSlice.reducer,
    // other reducers will go here
  },
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
