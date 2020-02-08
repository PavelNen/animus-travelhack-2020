/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { UserTypes } from './Actions'

export const fetchUserLoading = (state) => ({
  ...state,
  isLoading: true,
  errorMessage: null,
})

export const fetchUserSuccess = (state, { user }) => ({
  ...state,
  user: { ...user, avatar: user.avatar ? 'data:image/jpeg;base64,' + user.avatar : undefined },
  isLoading: false,
  errorMessage: null,
})

export const fetchUserFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  isLoading: false,
  errorMessage: errorMessage,
})

export const fetchUserReset = (state) => ({
  ...state,
  user: {},
  isLoading: false,
  errorMessage: null,
})

export const updateUserLoading = (state) => ({
  ...state,
  isSubmitting: true,
  isUpdated: false,
  errorMessage: null,
})

export const updateUserSuccess = (state) => ({
  ...state,
  isSubmitting: false,
  isUpdated: true,
  errorMessage: null,
})

export const updateUserFailure = (state, { errorMessage }) => ({
  ...state,
  isSubmitting: false,
  isUpdated: false,
  errorMessage: errorMessage,
})

export const updateUserReset = (state) => ({
  ...state,
  isSubmitting: false,
  isUpdated: false,
  errorMessage: null,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.FETCH_USER_LOADING]: fetchUserLoading,
  [UserTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [UserTypes.FETCH_USER_FAILURE]: fetchUserFailure,
  [UserTypes.FETCH_USER_RESET]: fetchUserReset,

  [UserTypes.UPDATE_USER_LOADING]: updateUserLoading,
  [UserTypes.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [UserTypes.UPDATE_USER_FAILURE]: updateUserFailure,
  [UserTypes.UPDATE_USER_RESET]: updateUserReset,
})
