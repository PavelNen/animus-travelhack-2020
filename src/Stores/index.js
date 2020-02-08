import { combineReducers } from 'redux'
import rootSaga from 'Sagas'
import configureStore from './CreateStore'
import { reducer as TranslationReducer } from './Translation/Reducers'
import { reducer as PonaminaluReducer } from './Ponaminalu/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    translation: TranslationReducer,
    ponaminalu: PonaminaluReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
