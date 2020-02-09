import { useEffect, Fragment, useState } from 'react'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, useHistory, useParams } from 'react-router-dom'
import { Card } from './Card'
import PonaminaluActions from 'Stores/Ponaminalu/Actions'
import Snackbar from 'Components/SnackBar'
import './style.scss'

const List = () => {
  const { events, filters } = useSelector(state => state.ponaminalu)
  const [open, setOpen] =useState(false)
  const dispatch = useDispatch()
  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    dispatch(PonaminaluActions.fetchEvents({
      ...filters
    }))
  },[filters])

  return (
    <Fragment>
      <Snackbar open={open} setOpen={setOpen} />
      <ul className="card-list">
      {events.length !== 0 ? events.map(card => (
        <Card
          key={card.id}
          id={card.id}
          isSelected={params.id == card.id}
          history={history}
          openSnackbar={() => setOpen(true)}
          card={card}
        />
      ))
      :
        <>
          Никаких мероприятий по заданным параметрам нет. Свайпни влево для
          того, чтобы задать параметры, а затем вернись сюда.
        </>
      }
    </ul>
    </Fragment>
  )
}

export const CardList = () => (
    <List />
)
