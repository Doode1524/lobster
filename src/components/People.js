import React, { useState, useEffect } from "react";
import PeopleCard from "./PeopleCard";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const People = () => {
  const classes = useStyles();
  const [people, setPeople] = useState([]);

  const fetchPeople = () => {
    fetch("https://randomuser.me/api/?results=9")
      .then((res) => res.json())
      .then((data) => setPeople(data.results));
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div>
      <Grid item container alignItems="center" justifyContent="center">
        {people &&
          people.map((person) => (
            <Grid item xs={4}>
              <PeopleCard
                first={person.name.first}
                last={person.name.last}
                picture={person.picture.medium}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default People;
