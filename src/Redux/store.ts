import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
// import { shadekoApi } from '../RTK_Query/index'
import authSlice from './authSlice'

import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const persistedAuthSlice = persistReducer(persistConfig, authSlice)
// const persistedBasketReducer = persistReducer(persistConfig, basketReducer)

export const store = configureStore({
  reducer: {
    // [shadekoApi.reducerPath]: shadekoApi.reducer,
    auth: persistedAuthSlice,
  },
  devTools: { trace: true, traceLimit: 25 },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
    // .concat(shadekoApi.middleware)

})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
