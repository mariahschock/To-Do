import Header from './Header';
import Auth from './Auth';
import List from './List';
import { useState } from 'react';
import { client } from './services/client';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import { logOut } from './services/fetch-utils';
import Create from './Create';

function App() {
  const [user, setUser] = useState(client.auth.user());

  async function handleLogOut() {
    await logOut();

    setUser('');
  }

  return (
    <Router>
      <Header />
      <div className="App">
        <nav>
          <div className="links">
            <Link to="/create">Create To-Do List</Link>
            <Link to="/list">View To-Do List</Link>
            {user &&
            <button onClick={handleLogOut}>Log Out</button>}
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            {
              !user
                ? <Auth setUser={setUser}/>
                : <Redirect to="create" />
            }
          </Route>
          <Route exact path="/create">
            {
              user
                ? <Create />
                : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/list">
            {
              user
                ? <List /> 
                
                : <Redirect to="/" />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
