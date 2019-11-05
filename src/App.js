import React from 'react';
import './App.css';
import Login from './LoginComponent';
import DashBoard from './DataComponent';
import {data} from './actions';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom' 


class App extends React.Component{

render(){
  return(<Router>
  <div>
    <Switch>
      <Route exact path="/">
      <Login/>
      </Route>
      <Route path="/DataComponent">
      <DashBoard/>
      </Route>
  <Login/>
    </Switch>
    </div>
    </Router>
  )

    
}

}

export default App;
