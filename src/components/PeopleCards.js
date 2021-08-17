import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    peopleCard: {
        border: "1px solid",
        height: 100,
        width: 200,
        backgroundColor: "green",
        color: "white",
        textAlign: "center",
        margin: 20
    }
  }));



const PeopleCards = (props) => {

    const classes = useStyles();
    return (
        <div className={classes.peopleCard}>
            {props.children}
        </div>
    )
}

export default PeopleCards
