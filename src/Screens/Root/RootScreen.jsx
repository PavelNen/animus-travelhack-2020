import Header from 'Components/Header'
import routes from 'Constants/routes'
import React, { Fragment, lazy, Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import { navigationService } from 'Services/navigationService'
import ponaminaluActions from '../../Stores/Ponaminalu/Actions'

const HomeScreen = lazy(() => import('Screens/Home/HomeScreen'))
const FavoritesScreen = lazy(() => import('Screens/Favorites/FavoritesScreen'))

const RootScreen = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  navigationService.setTopLevelNavigator(history)

  useEffect(() => {
    dispatch(ponaminaluActions.checkUserSession())
  }, [])

  useEffect(() => {
    const scriptId = 'pnwidget-loader'
    const init = () => {
      // eslint-disable-next-line no-undef
      pnwidget.init({
        affiliate: true,
        hideHeader: true,
        hideFooter: true,
        init: { session: '' },
        customStyle: true
      })
    }

    if (document.getElementById(scriptId)) {
      init()
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://widget3.cultserv.ru/static/js/pnwidget_loader.js'
    script.async = true
    script.onload = init
    document.body.appendChild(script)
  }, [])

  return <Fragment>
    <Header/>
    <Suspense fallback={'Loading....'}>
      <Switch>
        <Route exact path={['/:id', routes.getHome()]} component={HomeScreen}/>
        <Route path={routes.getFavorites()} component={FavoritesScreen}/>
      </Switch>
    </Suspense>
    {/* <BottomNavigation/> */}
  </Fragment>
}

export default RootScreen
