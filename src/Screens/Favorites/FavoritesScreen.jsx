import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TranslateText from 'Components/TranslateText'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  }
}))

const FavoritesScreen = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <CssBaseline/>
      <Container maxWidth="md" className={classes.root}>
        <Typography variant='h2'>
          <TranslateText point={'favorites_title'} />
        </Typography>
      </Container>
    </Fragment>

  )
}

FavoritesScreen.propTypes = {
  lang: PropTypes.string,
}

export default FavoritesScreen
