/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { TranslationTypes } from './Actions'

export const setLang = (state) => ({
  ...state,
  lang: state.lang === 'RU' ? 'EN' : 'RU'
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [TranslationTypes.SET_LANG]: setLang,
})
