import { put, call } from 'redux-saga/effects'
import PonaminaluActions from 'Stores/Ponaminalu/Actions'

import { ponaminaluService } from 'Services/ponaminaluService'

export function * checkUserSession () {
  yield put(PonaminaluActions.checkUserSessionLoading())
  try {
    yield call(ponaminaluService.checkUserSession)
    yield put(PonaminaluActions.checkUserSessionSuccess())
  } catch (e) {
    yield put(
      PonaminaluActions.checkUserSessionFailure(
        'There was an error while check user session.')
    )
  }
}

export function * fetchEvents () {
  yield put(PonaminaluActions.fetchEventsLoading())
  try {
    const events = yield call(ponaminaluService.getEventsList, {})
    console.log()
    yield put(PonaminaluActions.fetchEventsSuccess(events))
  } catch (e) {
    console.error(e)
    yield put(
      PonaminaluActions.fetchEventsFailure(
        'There was an error while check events.')
    )
  }
}
