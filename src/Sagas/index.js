import { all, takeLatest } from 'redux-saga/effects'
import { UserTypes } from 'Stores/User/Actions'
import { fetchUser, updateUser } from './UserSaga'

export default function * root () {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    takeLatest(UserTypes.FETCH_USER, fetchUser),
    // takeLatest(UserTypes.UPDATE_USER, updateUser),
  ])
}
