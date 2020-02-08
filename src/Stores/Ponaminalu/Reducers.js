/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { PonaminaluTypes } from './Actions'

export const checkUserSessionLoading = (state) => ({
  ...state,
  isLoading: true,
  errorMessage: null,
})

export const checkUserSessionSuccess = (state, { userSession }) => ({
  ...state,
  userSession: userSession,
  isLoading: false,
  errorMessage: null,
})

export const checkUserSessionFailure = (state, { errorMessage }) => ({
  ...state,
  userSession: '',
  isLoading: false,
  errorMessage: errorMessage,
})

export const fetchEventsLoading = (state) => ({
  ...state,
  eventsIsLoading: true,
  eventsErrorMessage: null,
})

export const fetchEventsSuccess = (state, { events }) => {
  console.log(typeof events)
  return ({
    ...state,
    events: events,
    eventsIsLoading: false,
    eventsErrorMessage: null,
  })
}

export const fetchEventsFailure = (state, { errorMessage }) => ({
  ...state,
  events: [],
  eventsIsLoading: false,
  eventsErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [PonaminaluTypes.CHECK_USER_SESSION_LOADING]: checkUserSessionLoading,
  [PonaminaluTypes.CHECK_USER_SESSION_SUCCESS]: checkUserSessionSuccess,
  [PonaminaluTypes.CHECK_USER_SESSION_FAILURE]: checkUserSessionFailure,

  [PonaminaluTypes.FETCH_EVENTS_LOADING]: fetchEventsLoading,
  [PonaminaluTypes.FETCH_EVENTS_SUCCESS]: fetchEventsSuccess,
  [PonaminaluTypes.FETCH_EVENTS_FAILURE]: fetchEventsFailure,
})
