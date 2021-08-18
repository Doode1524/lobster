import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  peopleCard: {
    borderRadius: "8px",
    height: 150,
    margin: "1rem",
    backgroundColor: "green",
    color: "white",
    textAlign: "center",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.7)",
    marginTop: 50,
  },
  picture: {
    borderRadius: "40px",
    zIndex: 3,
    position: "relative",
    top: "-25%",
  },
  name: {
    fontSize: "12px",
    fontWeight: "bold",
  },
}));

const PeopleCard = (props) => {
  const classes = useStyles();
  const { first, last, picture } = props;

  return (
    <div className={classes.peopleCard}>
      <img src={picture} className={classes.picture} />
      <br />
      <p className={classes.name}>
        {first} {last}
      </p>
    </div>
  );
};

export default PeopleCard;
