import * as React from 'react'
import './style.scss'

/* Material UI Components */
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { useDispatch } from 'react-redux'
import PonaminaluActions from 'Stores/Ponaminalu/Actions'

const CategoricalButton = ({ text }) => {
  const [isClicked, setClicked] = React.useState(false)
  const handleClick = () => setClicked(!isClicked)

  return <Button
    variant={isClicked ? 'contained' : 'outlined' }
    color='primary'
    onClick={handleClick}
  >
    {text}
  </Button>
}

export const Form = () => {
  const dispatch = useDispatch()
  /* Hooks for time slider */
  const [time, setTime] = React.useState([11, 13])
  const handleTimeChange = (event, newValue) => {
    setTime(newValue)
    dispatch(PonaminaluActions.setFilters(undefined, undefined, `2020-02-09T${newValue[0]}:00:00`, `2020-02-09T${newValue[1]}:00:00`))
  }
  const timeLabelFormat = time => {
    return `${time}:00`
  }

  return <React.Fragment>
    <h1 style={{ color: 'grey' }}>Form</h1>
    <h2 style={{ color: 'grey' }}>Time {`${time[0]}:00`}-{`${time[1]}:00`}</h2>

    <Slider
      value={time}
      min={0}
      max={23}
      aria-labelledby="range-slider"
      onChange={handleTimeChange}
      valueLabelDisplay="auto"
      valueLabelFormat={timeLabelFormat}
    />

    <h2 style={{ color: 'grey' }}>Бюджет</h2>
    <Slider />

    <h2 style={{ color: 'grey' }}>Категории</h2>
    {CategoricalData.map(category => (
      <CategoricalButton key={category} text={category} />
    ))}

  </React.Fragment>
}

const CategoricalData = [
  'Театр',
  'Кино',
  'Музыка',
  'Мюзикл',
]
