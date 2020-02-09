import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'

export default function ({
  open,
  setOpen,
}) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      style={{
        position: 'relative',
        left: 'unset',
        right: 'unset',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Добавлен в планер"
      action={
        <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small"/>
          </IconButton>
        </React.Fragment>
      }
    />
  )
}
