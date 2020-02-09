import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { ponaminaluService } from 'Services/ponaminaluService'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto auto 8px auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}))

function SavedCard ({
  card,
  index,
  handleRemove,
}) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex"
                src={ponaminaluService.getImage(200, 200, card.event.image)}/>
            </ButtonBase>
          </Grid>
          <Grid item xs sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {card.title}
                </Typography>
                <img
                  src="https://partners.ponominalu.ru/img/banners/buttons/btn-alt-partner-r@2x.png"
                  alt='Buy ticket'
                  width="200px" style={{ cursor: 'pointer' }}
                  // eslint-disable-next-line no-undef
                  onClick={() => pnwidget.show({
                    init: { referral_auth: 'ybtn4rc0dhusja78orrozvz62ls4ihho' },
                    event: { alias: card.alias },
                    tickets_show: true,
                    exclude_dates: true,
                    customStyle: true,
                    hideHeader: false,
                    closeButton: true
                  })}
                />
                <Typography variant="body2" color="textSecondary">
                  {card.categories[0].title || ''}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{`${card.event.min_price} — ${card.event.max_price} ₽`}</Typography>
              </Grid>
              <Grid item onClick={() => handleRemove(card.id)}>
                <Button variant="body2" style={{ cursor: 'pointer' }}>
                  Удалить
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

SavedCard.propTypes = {
  card: PropTypes.any,
}

export default SavedCard
