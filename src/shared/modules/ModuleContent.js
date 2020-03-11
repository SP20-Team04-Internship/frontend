import React, { useState } from 'react'
import { makeStyles, Typography, Container, Grid, Divider } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';

const ModuleContent = ({ title, description }) => {
    let [raised, setRaised] = useState(false)
    const classes = styles()
    const match = useRouteMatch()
    return (
        <Container className={classes.container}>
            <Grid item>
                <Typography className={classes.title} variant="h3" component="h1" color="primary">{title}</Typography>
            </Grid>
            <Grid container
                spacing={0}
                alignItems="center"
                justify="center"
            >
                <Typography className={classes.description} variant="h5" color="#D8D8D8">{description}</Typography>
            </Grid>
            <Grid>
                <Divider variant="middle" />
            </Grid>
        </Container>
    );
}

const styles = makeStyles(theme => ({
    title: {
        margin: '20px 0',
        fontWeight: '300',
    },
    container: {
        maxWidth: 1500
    },
    description: {
        maxWidth: 1000,
        textAlign: 'center',
        fontWeight: '300',
        padding: theme.spacing(3),
    },
}))

export default ModuleContent;