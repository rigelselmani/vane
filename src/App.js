import {BrowserRouter, Route, Switch } from "react-router-dom";
//pages & components
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";
import Home from './pages/home/Home';
import About from './pages/about/About';

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
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
