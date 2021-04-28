import logo from './logo.svg';
import './Styles/App.css';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link, useRouteMatch, useParams
} from "react-router-dom";
import Counter from './Components/Counter'
import TodoList from "./Components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: 1,
    }
  }

  testFunc= (data) => {
    this.setState({data: data})
  }

  render () {
    return (
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/lab1" className="nav-link">Counter</Link>
                </li>
                <li>
                  <Link to="/lab2" className="nav-link">Todo List</Link>
                </li>
                <li>
                  <Link to="/lab3" className="nav-link">API</Link>
                </li>
              </ul>
          </nav>
          <div className="container">
            <Switch>
              <Route path="/lab1">
                <div className="d-flex flex-column align-items-center">
                  <img src={logo} className="App-logo" alt="logo" />
                  <Counter initCount={4} parentFuc={ this.testFunc } />
                  <p>{this.state.data}</p>
                </div>

              </Route>
              <Route path="/lab2">
                <div className="d-flex justify-content-center">
                  <TodoList/>
                </div>
              </Route>
              <Route path="/lab3">
                <div className="d-flex justify-content-center">

                </div>
              </Route>
            </Switch>
          </div>
        </Router>
    );
}
}

export default App;
