import { createActions } from 'reduxsauce'

/**
 * We use reduxsauce's `createActions()` helper to easily create redux actions.
 *
 * Keys are action names and values are the list of parameters for the given action.
 *
 * Action names are turned to SNAKE_CASE into the `Types` variable. This can be used
 * to listen to actions:
 *
 * - to trigger reducers to update the state, for example in App/Stores/Example/Reducers.js
 * - to trigger sagas, for example in App/Sagas/ConnectFaceIDScreen.js
 *
 * Actions can be dispatched:
 *
 * - in React components using `dispatch(...)`, for example in App/App.js
 * - in sagas using `yield put(...)`, for example in App/Sagas/UserSaga.js
 *
 * @see https://github.com/infinitered/reduxsauce#createactions
 */
const { Types, Creators } = createActions({
  checkUserSession: null,
  checkUserSessionLoading: null,
  checkUserSessionSuccess: ['userSession'],
  checkUserSessionFailure: ['errorMessage'],

  fetchEvents: ['payload'],
  fetchEventsLoading: null,
  fetchEventsSuccess: ['events'],
  fetchEventsFailure: ['errorMessage'],

  setFilters: ['min_price', 'max_price', 'min_date', 'max_date', 'category_id'],
  setGeo: ['lat', 'lon']
})

export const PonaminaluTypes = Types
export default Creators
