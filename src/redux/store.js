//Було//////////////////////////////////////////////////////////
// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { persistedReducer } from './contactsSlice';
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);
//Стало//////////////////////////////////////////////////////////

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
  },
});

// export default store;
