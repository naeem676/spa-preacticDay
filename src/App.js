
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetai/FriendDetail';


function App() {
 
  return (
    <Router>
      <Switch>
        <Route path='/home'>
        <Home/>

        </Route>
        <Route exact path='/'>
        <Home/>

        </Route>
        <Route path='/friend/:friendId'>
        <FriendDetail/>

        </Route>
        <Route path='*'>
           <NoMatch/>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
