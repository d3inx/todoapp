import { combineReducers, configureStore } from '@reduxjs/toolkit'
 
import  todoReducer  from './slice/todoSlice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const rootReducer = combineReducers({
  todo : todoReducer 
})
 
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todo']
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
})

const persistor = persistStore(store)

 
export { store, persistor }