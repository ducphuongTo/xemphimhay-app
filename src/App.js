import "./App.css";
import Header from './components/Header/Header';
import SimpleBottomNavigation from "./components/MainNav"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Container } from "@material-ui/core";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";

function App(){
    return(
        <BrowserRouter>
        
            <Header/>
            <div className="app">
                <Container>
                    <Switch>
                        <Route path='/' component={Trending} exact/>
                        <Route path='/movies' component={Movies} exact/>
                        <Route path='/series' component={Series} exact/>
                        <Route path='/search' component={Search} exact/>
                    </Switch>
                </Container>
            </div>
            <SimpleBottomNavigation/>
            
          

        </BrowserRouter>
    )
}

export default App;