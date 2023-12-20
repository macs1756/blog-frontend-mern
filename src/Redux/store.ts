import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import postSlice from './postSlice'
import authSlice from './authSlice'
import commentSlice from './commentSlice'

import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const persistedAuthSlice = persistReducer(persistConfig, authSlice)
const persistedpostSlice = persistReducer(persistConfig, postSlice)
const persistedCommentSlice = persistReducer(persistConfig, commentSlice)

export const store = configureStore({
  reducer: {
    auth: persistedAuthSlice,
    post: persistedpostSlice,
    comments: persistedCommentSlice,
  },
  devTools: { trace: true, traceLimit: 25 },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
