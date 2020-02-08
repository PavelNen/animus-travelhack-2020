import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { makeStyles } from '@material-ui/core/styles'
import FavoriteIcon from '@material-ui/icons/Favorite'
import HomeIcon from '@material-ui/icons/Home'
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import routes from '../../Constants/routes'

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%'
  },
})

const pathMap = [
  routes.getHome(),
  routes.getFavorites(),
]

const LabelBottomNavigation = () => {
  const classes = useStyles()
  const { pathname } = useLocation()
  const [value, setValue] = React.useState(pathMap[0])

  useEffect(() => {
    const value = pathMap.indexOf(pathname)
    console.log(pathname, value)

    if (value > -1) {
      setValue(value)
    }
  }, [pathname])

  const handleChange = (event, newValue) => {
    // setValue(newValue)
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction
        to={routes.getHome()} label={'Главная'}
        icon={<HomeIcon/>} component={Link}/>
      <BottomNavigationAction
        to={routes.getFavorites()} label={'НЕ Главная'}
        icon={<FavoriteIcon/>} component={Link}/>
    </BottomNavigation>
  )
}

export default LabelBottomNavigation
