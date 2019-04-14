import { applyMiddleware, createStore, compose } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistReducer, persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers'
import createSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const persisConfig = {
  key: 'redux-state',
  version: 1.0,
  storage: AsyncStorage,
  blacklist: ['app'],
  whitelist: ['photos', 'albums'],
}

export default function configureStore(initialState = {}) {
  const middlewares = [sagaMiddleware]
  const enhancers = [applyMiddleware(...middlewares)]

  const persistedReducer = persistReducer(
    persisConfig,
    createReducer(initialState),
  )
  console.log(persistedReducer)
  const composeEnhancers =
    __DEV__ &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(...enhancers),
  )

  const persistor = persistStore(store)

  sagaMiddleware.run(createSagas)

  return { store, persistor }
}
