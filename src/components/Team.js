import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br />
      <br />
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://content.olympics.com.au/public/styles/portrait_preview_section/s3/2021-06/Website%20Bio%20Headshot%20Swimming%20FIN%20%281%29Ariarne%20Titmus.jpg?h=4949d41c&itok=f7mCqCD0"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <strong>Ariana Titmus</strong>
                  <br />
                  President and Chief Executive Officer
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Ariana Titmus is the President and Chief Executive Officer of
                  The Foundation Source and is responsible for the vision,
                  strategy, and growth of The Foundation.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <br />
      <br />
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://content.olympics.com.au/public/styles/portrait_preview_section/s3/2021-06/Website%20Bio%20Headshot%20Swimming%20FIN%20%281%29Kyle%20Chalmers.jpg?h=4949d41c&itok=0AAc9DPL"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <strong>Kyle Chalmers</strong>
                  <br />
                  Chief Operating Officer
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Kyle Chalmers is the Chief Operating Officer of The Foundation
                  and is responsible for the smooth running of The Foundation.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <br />
      <br />
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://content.olympics.com.au/public/styles/portrait_preview_section/s3/2021-06/Website%20Bio%20Headshot%20Swimming%20FIN%20%281%29Emma%20McKeon.jpg?h=4949d41c&itok=Y2WS_VAZ"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <strong>Emma McKeon</strong>
                  <br />
                  Board Member
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Emma McKeon with her vast experience and passion at
                  nonprofits, brings to the table freshness and levelheadedness.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <br />
      <br />
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://content.olympics.com.au/public/styles/portrait_preview_section/s3/2021-04/Website%20Bio%20Headshot%20Athletics%20FINPeter%20Bol.jpg?h=811a21f8&itok=zybpOS_R"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <strong>Peter Bol</strong>
                  <br />
                  Board Member
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Peter Bol brings to The Foundation his flair and pzazz in management from the
                  corporate world.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <br />
      <br />
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://content.olympics.com.au/public/styles/portrait_preview_section/s3/2021-06/Website%20Bio%20Headshot%20Swimming%20FIN%20Kai%20Edwards.jpg?h=4949d41c&itok=8l4t2aud"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <strong> Kai Edwards</strong>
                  <br />
                  Treasurer
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Kai Edwards is the treasurer of The Foundation.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <br />
      <br />
    </div>
  );
}
