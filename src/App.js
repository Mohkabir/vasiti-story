import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Components/Home';
import ShareStories from './Components/ShareStories';
import ShareSuccessfull from './Components/ShareSuccessfull';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shareStories">
            <ShareStories />
          </Route>
          <Route exact path="/shareSuccessfull">
            <ShareSuccessfull />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
