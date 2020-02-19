import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Grid, Button } from '@material-ui/core';

const Home = () => {
    const classes = styles();
    return (
        <Grid container justify="center" alignItems="center" className={classes.page}>
            <Grid item className={classes.titleSpacing}>
                <Typography className={classes.mainTitle} variant="h2" color="primary" component="p">
                    <span>Ready to </span>
                    <span>land your </span>
                    <span>dream </span>
                    <span>internship?</span>
                </Typography>
            </Grid>
            <Grid component="form" item container direction="column" xs={10} sm={2} spacing={2}>
                <Grid item>
                    <TextField id="username" label="Username" variant="outlined" fullWidth size="small" />
                </Grid>
                <Grid item>
                    <TextField id="fullName" label="Full Name" variant="outlined" fullWidth size="small" />
                </Grid>
                <Grid item>
                    <TextField id="email" label="Email" variant="outlined" fullWidth size="small" />
                </Grid>
                <Grid item>
                    <TextField id="password" type="password" label="Password" variant="outlined" fullWidth size="small" />
                </Grid>
                <Grid item justify="flex-end" container>
                    <Button variant="outlined" color="primary" size="small">Create Account</Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

const styles = makeStyles(theme => ({
    mainTitle: {
        display: 'inline-block',
        '& span': {
            display: 'block'
        }
    },
    titleSpacing: {
        marginRight: '80px',
        [theme.breakpoints.down('xs')]: {
            marginRight: 'unset'
        }
    },
    page: {
        minHeight: '100vh'
    }
}));

export default Home;