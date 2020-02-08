import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React, { Fragment, useState } from 'react'
import ReactSwipe from 'react-swipe'
import { CardList } from 'Components/AppStore/CardList'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100vw',
  },
  containerScreen: {
    height: '100%',
    padding: theme.spacing(2),
  }
}))

const HomeScreen = () => {
  const classes = useStyles()
  const [step, setStep] = useState(1)
  let reactSwipeEl

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePreviousStep = () => {
    setStep(step - 1)
  }

  return (
    <Fragment>
      <CssBaseline/>
      <ReactSwipe
        className={`${classes.root}`}
        style={{
          container: {
            overflow: 'hidden',
            visibility: 'hidden',
            position: 'relative'
          },
          wrapper: {
            overflow: 'hidden',
            height: '100%',
            position: 'relative'
          },
          child: {
            float: 'left',
            width: '100%',
            position: 'relative',
            transitionProperty: 'transform'
          }
        }}
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div className={classes.containerScreen}>
          ONE
        </div>
        <div className={classes.containerScreen}>
          <div className="container">
            {/* <Headerrrr /> */}
            <CardList/>
          </div>
        </div>
        <div className={classes.containerScreen}>
          THREE
        </div>
      </ReactSwipe>
      {/* <button onClick={() => reactSwipeEl.prev()}>Назад</button> */}
      {/* <button onClick={() => reactSwipeEl.next()}>Вперёд</button> */}
    </Fragment>
  )
}

HomeScreen.propTypes = {
  lang: PropTypes.string,
}

export default HomeScreen
