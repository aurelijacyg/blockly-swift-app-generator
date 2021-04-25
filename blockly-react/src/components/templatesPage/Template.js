import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    content: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        marginTop: theme.spacing(3)
    },
}));

const Template = (props) => {
    const classes = useStyles();
    const { template } = props;

    return (
        <div className={classes.content}>
            <Typography component="h1" variant="h5" align="center" color="textSecondary" gutterBottom>
                {template.title}
            </Typography>
        </div>
    );
}

Template.propTypes = {
    template: PropTypes.object,
};

export default Template;