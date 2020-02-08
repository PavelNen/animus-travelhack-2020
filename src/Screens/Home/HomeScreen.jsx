import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React, { Fragment, useState } from 'react'
import ReactSwipe from 'react-swipe'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel'
import './styles.scss'
import { Form } from 'Components/Form/Form'
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
      <Carousel
        style={{
          'slide': {
            backgroundColor: 'none'
          }
        }}
        showThumbs={false}
        emulateTouch={true}
        selectedItem={1}
        showArrows={false}
        showStatus={false}
      >
        <div className={classes.containerScreen}>
          <Form />
        </div>
        <div className={classes.containerScreen}>
          <div
            style={{
              overflowY: 'scroll',
              position: 'absolute',
            }}
            className="container"
          >
            {/* <Headerrrr /> */}
            <CardList/>
          </div>
        </div>
        <div className={classes.containerScreen}>
          THREE
        </div>
      </Carousel>
      {/* <button onClick={() => reactSwipeEl.prev()}>Назад</button> */}
      {/* <button onClick={() => reactSwipeEl.next()}>Вперёд</button> */}
    </Fragment>
  )
}

HomeScreen.propTypes = {
  lang: PropTypes.string,
}

export default HomeScreen
