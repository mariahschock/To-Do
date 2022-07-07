import Header from './Header';
import Auth from './Auth';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <nav>
          <div className="links">
            <Link to="/create">Create To-Do List</Link>
            <Link to="/list">View To-Do List</Link>
          </div>
        </nav>

        <Switch>
          <Auth />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
