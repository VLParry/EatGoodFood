import * as React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    "&:visited":{
      color:"#c0ffee"
    },
    "&:hover":{
      color:"papayawhip"
    },

    },
  green: {
    backgroundColor: "green"
  }
}));


const NavBar = () => {
  const classes = useStyles();
  return (


<div>

<AppBar position="static" className={classes.green}>
        <Toolbar>
        
          <Typography variant="h6" className={classes.title} to="/" component= { Link }>
            Eat.Good.Food.
          </Typography>
          <Button color="inherit" to="recipes" component= { Link }>All Recipes</Button>
          <Button color="inherit" to="favorites" component= { Link }>Favorites</Button>
        </Toolbar>
      </AppBar>
</div>

  );
}


export default NavBar