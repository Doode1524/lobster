import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navbar: {
        color: 'white',
        backgroundColor: "green"
    }
  }));


const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.navbar}>
            <Typography>Yooooo</Typography>
      </AppBar>
    )
}

export default Navbar
