import {BrowserRouter, Route, Switch } from "react-router-dom";

//pages & components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
