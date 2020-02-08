import React, { lazy, Suspense, Fragment } from 'react'
import { useHistory } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import BottomNavigation from 'Components/BottomNavigation'
import Header from 'Components/Header'
import routes from 'Constants/routes'
import { navigationService } from 'Services/navigationService'

const HomeScreen = lazy(() => import('Screens/Home/HomeScreen'))
const FavoritesScreen = lazy(() => import('Screens/Favorites/FavoritesScreen'))

const RootScreen = () => {
  const history = useHistory()
  navigationService.setTopLevelNavigator(history)

  return <Fragment>
    <Header />
    <Suspense fallback={'Loading....'}>
      <Switch>
        <Route exact path={routes.getHome()} component={HomeScreen}/>
        <Route path={routes.getFavorites()} component={FavoritesScreen}/>
      </Switch>
    </Suspense>
    {/*<BottomNavigation/>*/}
  </Fragment>
}

export default RootScreen
