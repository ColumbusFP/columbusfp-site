import dayjs from 'dayjs';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';

const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  }
}));

class Event extends React.Component {
  componentDidMount() {
    const {
      event: { date }
    } = this.props;
    const filename = dayjs(date).format('YYMMDD');
    fetch(`/meetings/${filename}.md`).then(data => {
      this.setState({ eventString: data });
    });
  }

  render() {
    const classes = useStyles();
    const { title, event } = this.props;
    const { eventString } = this.state;

    return (
      <Grid item xs={12} md={8}>
        <Typography variant='h6' gutterBottom>
          {title}
        </Typography>
        <Divider />
        <Markdown className={classes.markdown} key={event.date.format()}>
          {eventString}
        </Markdown>
      </Grid>
    );
  }
}

Event.propTypes = {
  title: PropTypes.string,
  event: PropTypes.object
};

export default Event;
