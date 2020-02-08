import { all, takeLatest } from 'redux-saga/effects'
import { PonaminaluTypes } from '../Stores/Ponaminalu/Actions'
import { checkUserSession, fetchEvents } from './PonaminaluSaga'
// import { fetchUser } from './UserSaga'

export default function * root () {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // takeLatest(UserTypes.FETCH_USER, fetchUser),

    takeLatest(PonaminaluTypes.CHECK_USER_SESSION, checkUserSession),
    takeLatest(PonaminaluTypes.FETCH_EVENTS, fetchEvents),
  ])
}
