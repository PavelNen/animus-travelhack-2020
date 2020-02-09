import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'
import SavedCard from '../SavedCard'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function SavedTickets () {
  const classes = useStyles()
  const savedTickets = JSON.parse(localStorage.getItem('saved_tickets')) || []
  const [tickets, setTickets] = useState(savedTickets)

  useEffect(() => {
    setTickets(savedTickets)
  }, [savedTickets.length])

  console.log(tickets)

  function handleRemove (index) {
    const newTickets = tickets.filter((item, id) => item.id !== index)
    setTickets(newTickets)
    localStorage.setItem('saved_tickets', JSON.stringify(newTickets))
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Сохранённое</ListSubheader>
        </GridListTile>
        {tickets.map((card, index) => (
          <SavedCard key={card.id} card={card} index={index} handleRemove={handleRemove}/>
        ))}
      </GridList>
    </div>
  )
}
