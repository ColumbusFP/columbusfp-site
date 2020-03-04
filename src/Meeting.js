import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from './Header';
import FeaturedEvent from './FeaturedEvent';
import Sidebar from './Sidebar';
import Footer from './Footer';
import dayjs from 'dayjs';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

const allEvents = [
  {
    title: 'CFP First Meeting',
    date: dayjs('2020-03-11T18:30:00-04:00'),
    url:
      'https://www.meetup.com/Columbus-Functional-Programmers/events/269144248/',
    description: 'Come out for a chance to win a free ticket to PyCon 2020!!',
    details:
      'Parking is located in the garage adjacent to Improving. Doors open at 6:30pm. Food and venue provided by Improving. Talks to begin at 7:00pm',
    speakers: [
      {
        name: 'Ben Beckwith',
        title: '5 Minute Fundamentals'
      },
      {
        name: 'Herman Singh',
        title: 'Functions As a Service with AWS Lambda'
      },
      {
        name: 'Peter Mueller',
        title: '(Maybe) Monthly Kata'
      }
    ],
    location: 'Improving, One Easton Oval Suite. 175, Columbus, OH 43219',
    locationURL: 'https://goo.gl/maps/JNjehA5GN19LmJrp6'
  }
];

const featuredEvents = [...allEvents];

const sidebar = {
  title: 'About ColumbusFP',
  description:
    'There are many ways to solve a problem. But more interestingly, it can be proven that two vastly different approaches to computer science are fundamentally equivalent. However, a overwhelming majority of us have been taught Object Oriented Programming (OOP) in school and likely practiced it at the workplace. Recently there has been a lot of efforts put into languages and frameworks that lend more towards a Functional Programming (FP) approach. ColumbusFP hopes to be a language agnostic space where we can share knowledge about these different perspectives and how they can change the way we program.',
  social: [
    {
      name: 'GitHub',
      icon: GitHubIcon,
      url: 'https://github.com/orgs/ColumbusFP'
    }
  ]
};

export default function Meeting() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header
          title={
            <img
              style={{ textAlign: 'center', padding: '1em', height: '6rem' }}
              src='/images/logo-purple.png'
              alt='Columbus Function Programmers'
            />
          }
        />
        <main>
          <Grid container spacing={4}>
            {featuredEvents.map(event => (
              <FeaturedEvent key={event.date.format()} event={event} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* <Main title='Past Events' events={allEvents} /> */}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
