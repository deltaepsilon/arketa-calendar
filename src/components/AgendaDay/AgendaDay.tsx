import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core/styles';

import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { Reminder } from '../../redux/actions';
import { Reminders } from '../Reminders/Reminders';
import format from 'date-fns/format';

const styles = (theme: Theme) =>
  createStyles({
    remindersContainer: {
      minHeight: '250px',
      marginTop: '10px',
    },
    closeButton: {
      position: 'absolute',
      right: '10px',
      top: '10px',
    },
    toolbarButtonHidden: {
      visibility: 'hidden',
    },
    toolbarButtonVisible: {
      visibility: 'visible',
    },
  });

interface Props extends WithStyles<typeof styles> {
  addReminder: Reminder[];
  agendaStatus: {
    isOpen: boolean;
    date: Date;
  };
  onClose: () => void;
}

const AgendaDay = (props: Props) => {
  const { addReminder, classes, agendaStatus, onClose } = props;
  const dateTitle = agendaStatus.date ? format(agendaStatus.date, 'LLLL do, yyyy') : 'Closing';

  return (
    <Dialog
      open={agendaStatus.isOpen}
      onClose={onClose}
      aria-labelledby='form-dialog-title'
      fullWidth={true}
      maxWidth='md'
    >
      <DialogTitle id='form-dialog-title'>
        {dateTitle}
        <IconButton aria-label='Close' className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider light />
      <DialogContent className={classes.remindersContainer}>
        <Reminders reminders={addReminder} date={agendaStatus.date} />
      </DialogContent>
    </Dialog>
  );
};

export default withStyles(styles)(AgendaDay);
