import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../components/getStartedPage/Header';
import StepsList from '../components/getStartedPage/StepsList';
import Network from '../components/getStartedPage/Network';

const GetStartedPage = () => {
  return (
    <main>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} justify="center" alignItems="center">
          <Header />
        </Grid>
        <Grid item xs={12} justify="center" alignItems="center">
          <StepsList />
        </Grid>
        <Grid item xs={12} justify="center" alignItems="center">
          <Network />
        </Grid>
      </Grid>
    </main>
  );
}

export default GetStartedPage;