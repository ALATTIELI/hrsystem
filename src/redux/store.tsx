import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartslice';
import breakReducer from './breakSlice';  // import the new break reducer

const store = configureStore({
  reducer: {
    cart: cartReducer,
    break: breakReducer,   // add the break reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;


export default store;
