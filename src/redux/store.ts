import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
// import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)