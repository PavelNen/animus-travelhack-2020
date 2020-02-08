import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React, { Fragment, useState } from 'react'
import ReactSwipe from 'react-swipe'
import { CardList } from '../../Components/AppStore/CardList'
import { Form } from '../../Components/Form/Form'

const useStyles = makeStyles(theme => ({
  root: {
    height: '70vh',
    overflow: 'auto',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
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
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <Container maxWidth="md" className={classes.root}>
          <Form />
        </Container>
        <Container maxWidth="md" className={classes.root}>
          <div className="container">
            {/* <Header /> */}
            <CardList/>
          </div>
        </Container>
        <Container maxWidth="md" className={classes.root}>
          THREE
        </Container>
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.prev()}>Назад</button>
      <button onClick={() => reactSwipeEl.next()}>Вперёд</button>
      <CssBaseline/>

    </Fragment>
  )
}

HomeScreen.propTypes = {
  lang: PropTypes.string,
}

export default HomeScreen
