
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './utils/theme';

// import Button from '@material-ui/core/Button';
import Calc from './components/Calc';
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

  const App=() => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme} >
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Rep Counter
          </Typography>
        </Toolbar>
      </AppBar>
      <Calc/>
    </div>
    </MuiThemeProvider>
  );
}

export default withTheme(App);
