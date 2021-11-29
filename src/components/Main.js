import { Switch, Route } from 'react-router-dom';

import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";



function Main() {
return (
    <div className="Main">
   
        <Switch>
    <Route exact path="/">
        <Home />
    </Route>
    <Route path="/about">
        <About />
    </Route>
    <Route path="/portfolio">
        <Portfolio />
    </Route>
    <Route path="/contact">
        <Contact />
    </Route>

        </Switch>
    
    </div>
    );
  }
  
  export default Main;
  