import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    content: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
}));

const BeginSection = ({ onCreateApp }) => {
    const classes = useStyles();

    const handleCreateAppBtn = () => {
        onCreateApp();
    }

    return (
        <div className={classes.content}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="primary" gutterBottom>
                    Doably
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Bring your imagination into the real world
                </Typography>
                &#160; &#160; &#160;
                <div>
                    <Grid container justify="center">
                        <Button 
                            variant="contained" 
                            color="primary" 
                            size="large"
                            onClick={() => handleCreateAppBtn()}
                        >
                            Create App
                        </Button>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default BeginSection;