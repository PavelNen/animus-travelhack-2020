import * as React from 'react'
import './style.scss'

/* Material UI Components */
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const CategoricalButton = ({text}) => {
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
  /* Hooks for time slider */
  const [time, setTime] = React.useState([11, 13])
  const handleTimeChange = (event, newValue) => setTime(newValue)
  const timeLabelFormat = time => {
    return `${time}:00`
  }

  return <React.Fragment>
    <h1 style={{color: 'grey'}}>Form</h1>
    <h2 style={{color: 'grey'}}>Time {`${time[0]}:00`}-{`${time[1]}:00`}</h2>

    <Slider
      value={time}
      min={0}
      max={23}
      aria-labelledby="range-slider"
      onChange={handleTimeChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      valueLabelFormat={timeLabelFormat}
    />

    <h2 style={{color: 'grey'}}>Бюджет</h2>
    <Slider />

    <h2 style={{color: 'grey'}}>Категории</h2>
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
