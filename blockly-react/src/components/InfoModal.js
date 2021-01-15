import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #808080',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  fab: {
    marginLeft: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(3),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const InfoModal = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography gutterBottom variant="h5" color="textPrimary" component="h2">
        How to build your own app?
      </Typography>

      <Typography variant="body2" color="textSecondary" component="p">
        With this tool you can create an app for display information. For example, it could be your trip blog, recipe book, app advisor and etc..
        If you want to create an app, you need to...
      </Typography>

      <Button
        className={classes.button}
        variant="outlined"
        color="secondary"
        className={classes.button}
        onClick={handleClose}
       >
        Close
      </Button>
    </div>
  );

  return (
    <div>
      <Fab 
        variant="extended"
        color="primary"
        className={classes.fab}
        onClick={handleOpen}
      >
        <InfoIcon className={classes.extendedIcon} />
        How to build an app?
      </Fab>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default InfoModal;