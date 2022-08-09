import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";

const cards = [1, 2, 3, 4];

const App = () => {
    const classes = useStyles();
    return(
        <>
            <CssBaseline />  {/*default CSS styling*/}
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Heeloooo everyone this is a photo album and im
                            trying to make this as long as possible.
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Grid Button
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="secondary">
                                        Secondary grid button
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                    {cards.map((card) => ( // {} ~~> JS logic block
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        This is a media card used to describe the
                                        media of the content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Button size="small" color="primary">View 1</Button>
                                <Button size="small" color="primary">View 2</Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="secondary">
                    Something here to give the footer a purpose
                </Typography>
            </footer>
        </>
    );
}

export default App;