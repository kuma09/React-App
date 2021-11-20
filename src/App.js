import './App.css';
import Home from './Home';
import Addtask from './Addtask';
import Task from './Task';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
 
function App() {
  
  return (
    <Router>
      <div className="App">
        <Task/>
        <Switch>
          <Route path="/addtask">
            <Addtask/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
