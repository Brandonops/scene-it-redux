import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import Home from './Pages/Home';
import Watchlist from './Pages/Watchlist';
function App() {
  return (
    <Router>
      <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/watchlist">Watchlist</Link>
          </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/watchlist" exact>
            <Watchlist />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
