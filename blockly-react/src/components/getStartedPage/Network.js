import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Link, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    networkGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

const Network = ({ networks }) => {
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