import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import TVIcon from '@material-ui/icons/Tv';
import WhatshotIcon from '@material-ui/icons/Whatshot'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position:'fixed',
    bottom:0,
    backgroundColor:'#2d313a',
    zIndex:100,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  useEffect(() => {
    if(value === 0)
      history.push('/');
    else if (value ===1 ) history.push("/movies");
    else if (value ===2 ) history.push("/series");
    else if (value ===3 ) history.push("/search");
    
  }, [value,history])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Trending"  icon={<WhatshotIcon />} style={{color:"white"}} />
      <BottomNavigationAction label="Movies"  icon={<MovieIcon />} style={{color:"white"}} />
      <BottomNavigationAction label="TV Series"  icon={<TVIcon />} style={{color:"white"}} />
      <BottomNavigationAction label="Search"icon={<SearchIcon />} style={{color:"white"}} />
    </BottomNavigation>
  );
}