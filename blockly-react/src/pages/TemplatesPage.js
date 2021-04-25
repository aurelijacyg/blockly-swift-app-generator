import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Template from '../components/templatesPage/Template';


const templates = [
  {
    title: 'Grid',
    image: "",
  },
  {
    title: 'Photo gallery',
    image: "",
  },
  {
    title: 'Photo gallery',
    image: "",
  },
  {
    title: 'Photo gallery',
    image: "",
  },
];

const TemplatesPage = () => {
  return (
    <main>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} justify="center" alignItems="center">
          <Typography gutterBottom variant="h5" color="primary" component="h2">
            Templates
          </Typography>
        </Grid>
        <Grid item xs={12} justify="center" alignItems="center">
          {templates.map((template) => (
            <Template key={template.title} template={template}/>
          ))}
        </Grid>
      </Grid>
    </main>
  );
}

export default TemplatesPage;