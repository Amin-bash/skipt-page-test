import { configureStore } from '@reduxjs/toolkit';
import skipReducer from '../services/skips/skipSlice';

export const store = configureStore({
  reducer: {
    skipSelection: skipReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
