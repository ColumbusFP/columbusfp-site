import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
});

export default function FeaturedEvent(props) {
  const classes = useStyles();
  const { event } = props;

  return (
    <Grid item xs={12} md={12}>
      <CardActionArea component='a' href={event.url}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component='h2' variant='h5'>
                {event.title}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                {event.date.format('MMMM DD, YYYY h:mm A')}
              </Typography>
              <Typography variant='subtitle1' color='primary'>
                {event.location}
              </Typography>
              <Typography variant='subtitle1' paragraph>
                {event.description}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                Speakers at this meeting:
                <ul>
                  {event.speakers.map(speaker => (
                    <li key={speaker.name}>
                      {speaker.title} - {speaker.name}
                    </li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedEvent.propTypes = {
  event: PropTypes.object
};
