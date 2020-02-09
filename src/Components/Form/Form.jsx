import * as React from 'react'
import './style.scss'

import 'date-fns'
import { format } from 'date-fns'
import DateFnsUtils from '@date-io/date-fns'

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers'

/* Material UI Components */
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

import { useDispatch } from 'react-redux'
import PonaminaluActions from 'Stores/Ponaminalu/Actions'

export const Form = () => {
  const dispatch = useDispatch()
  /* Hooks for time slider */
  const [time, setTime] = React.useState([11, 13])
  const handleTimeChange = (event, newValue) => {
    setTime(newValue)
  }

  const timeLabelFormat = time => {
    return `${time}:00`
  }

  const [budget, setBudget] = React.useState([0, 100])
  const handleBudgetChange = (event, newValue) => {
    setBudget(newValue)
  }

  const budgetLabelFormat = budget => {
    return (budget === 0 ? 'Free' : `${budget} ₽`)
  }

  const [categoryId, setCategoryId] = React.useState(null)
  const handleCategoryId = event => {
    setCategoryId(event.target.value)
  }

  React.useEffect(() => {
    dispatch(PonaminaluActions.setFilters(
      budget[0],
      budget[1],
      `2020-02-09T${time[0]}:00:00`,
      `2020-02-09T${time[1]}:00:00`,
      categoryId,
    ))
  })

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
    <Slider
      value={budget}
      min={0}
      max={100000}
      step={1000}
      aria-labelledby="range-slider"
      onChange={handleBudgetChange}
      valueLabelDisplay="auto"
      valueLabelFormat={budgetLabelFormat}
    />

    <h2 style={{ color: 'grey' }}>Категории</h2>
    <FormControl component="fieldset">
    <RadioGroup value={categoryId} onChange={handleCategoryId}>
      {CategoricalData.map(category => (
        <FormControlLabel
          key={category.id}
          value={category.id}
          control={<Radio color="primary"/>}
          label={category.title}
        />
      ))}
    </RadioGroup>
    </FormControl>

  </React.Fragment>
}

const CategoricalData = [
  {
    "id": '10',
    "title": "Концерты",
    "alias": "concerts",
  },
  {
    "id": '89',
    "title": "Музеи",
    "alias": "museum",
  },
  {
    "id": '6',
    "title": "Театр",
    "alias": "theatre",
  }
]
