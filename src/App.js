import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, AddCA, EditCA, CAList, Profile, Login } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/add" exact component={AddCA} />
          <Route path="/edit/:id" exact component={EditCA} />
          <Route path="/list" exact component={CAList} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/login" exact component={Login} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
