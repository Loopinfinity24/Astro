import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../src/components/HomePage";
import About from "../src/components/Aboutus";
import Sunsigns from "../src/components/Sunsign";
import Expert_content from "../src/components/Expert_content";
import BlogScreen from "../src/components/BlogScreen";
import Blog from "../src/components/Blog";
import VideoScreen from "../src/components/videoscreen";
import ProductScreen from "../src/components/ProductsScreen";
import Products from '../src/components/Product'
import Services from '../src/components/Services'
import Servicepage from '../src/components/Servicespage'




function App(props) {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/sunsign/:id' component={Sunsigns} />
        <Route exact path='/content/:id' component={Expert_content} />
        <Route exact path='/blogs' component={BlogScreen} />
        <Route exact path='/blogs/:id' component={Blog} />
        <Route exact path='/video' component={VideoScreen} />
        <Route exact path='/product' component={ProductScreen} />
        <Route path='/products/:id' component={Products}/>
        <Route path='/services/:id' component={Services}/>
        <Route path='/servicedetails/:id' component={Servicepage}/>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
