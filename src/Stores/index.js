import { combineReducers } from 'redux'
import rootSaga from 'Sagas'
import configureStore from './CreateStore'
import { reducer as TranslationReducer } from './Translation/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    translation: TranslationReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
