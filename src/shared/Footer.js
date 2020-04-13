import React from "react";
import {
    Grid,
    Container,
    makeStyles,
    Typography,
    Link
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import logo from "assets/AdvanceLogo.png";

const Footer = () => {
    const classes = styles();

    return (
        <Grid className={classes.footer}>
            <Container className={classes.container}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item container className={classes.logoContainer}>
                        <img
                            src={logo}
                            alt="Footer Logo"
                            className={classes.logo}
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant="inherit">
                            Engineered with{" "}
                            <span role="img" aria-label="love">
                                💖
                            </span>{" "}
                            and{" "}
                            <span role="img" aria-label="coffee">
                                ☕
                            </span>{" "}
                            by{" "}
                            <Link component={RouterLink} to="/contributors">
                                these amazing people
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

const styles = makeStyles((theme) => ({
    footer: {
        background: theme.palette.grey[900],
        marginTop: 30,
        padding: "10px 0"
    },
    container: {
        maxWidth: 1500
    },
    logo: {
        height: "1em"
    },
    logoContainer: {
        width: "auto"
    }
}));

export default Footer;
