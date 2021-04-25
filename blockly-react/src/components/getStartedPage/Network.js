import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    networkGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

const networks = [
    {
        title: "Github",
        icon: <GitHubIcon fontSize="large" color="disabled"/>,
        web: "https://github.com/aurelijacyg/blockly-swift-app-generator"
    },
    {
        title: "Email",
        icon: <MailOutlineIcon fontSize="large" color="disabled"/>,
        web: "https://mail.google.com/mail/?view=cm&fs=1&to=cygaurelija@gmail.com&su=Support.Doably"
    },
    {
        title: "LinkedIn",
        icon: <LinkedInIcon fontSize="large" color="disabled"/>,
        web: "https://www.linkedin.com/in/aurelija-čygaitė-2aa74a160/"
    },
];

const Network = () => {
    const classes = useStyles();

    return (
        <Container className={classes.networkGrid} maxWidth="md">
            <Grid container spacing={4}>
                {networks.map((network) => (
                    <Grid item key={network} xs={12} sm={6} md={4}>
                        <Link display="block" variant="body1" href={network.web}>
                            <Grid container direction="column" spacing={1} alignItems="center">
                                <Grid item>
                                    {network.icon}
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5" color="textSecondary" paragraph>
                                        {network.title}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Network;