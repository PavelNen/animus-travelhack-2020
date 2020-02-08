import { put, call } from 'redux-saga/effects'
import UserActions from 'Stores/User/Actions'
// import { userService } from 'Services/userService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function * fetchUser () {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(UserActions.fetchUserLoading())
  try {
    // yield call(userService.fetchUser)
    yield put(UserActions.fetchUserSuccess())
  } catch (e) {
    yield put(
      UserActions.fetchUserFailure('There was an error while fetching user informations.')
    )
  }
}

