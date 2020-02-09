import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

/* Components */
import Geolocation from './Geolocation'

const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    padding: '0 16px',
    height: 60,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      height: 70
    }
  },
  logoComponent: {
    // margin: theme.spacing(1)
    height: 36
  },
  rightComponent: {
    // margin: theme.spacing(1)
  },
  buttonSignIn: {
    width: '100%',
    height: '50px',
    borderRadius: '4px',
    border: '2px solid #0070FF',
    marginBottom: '16px',
    fontWeight: 'bold'
  },
  buttonSignUp: {
    color: '#0070FF',
    marginBottom: 15,
    display: 'block',
    textAlign: 'center'
  },
  logo: {
    '& img': {
      width: 82,
      marginTop: 20,
      [theme.breakpoints.down('sm')]: {
        width: 60,
        marginTop: 10
      }
    }
  }
}))

const Header = props => {
  const classes = useStyles()

  // const body = document.getElementsByTagName("body")[0]
  // body.overflow = isMenuOpen ? 'hidden' : 'visible'

  return (
    <header className={classes.root}>
      <div className={classes.logoComponent}>
        <img src='/logoEz.png' style={{ height: '100%' }} alt='' />
      </div>
      <div className={classes.rightComponent}>
        <Geolocation />
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header
