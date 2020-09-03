import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.scss';
import {Home, About, Contact, Skills, Error} from "./pages";
import SimpleReactLightbox from 'simple-react-lightbox'
import Header from "./components/Header";

function App() {
  return (
      <SimpleReactLightbox>
          <div className="app">
              <Header />
              <Switch>
                  <Route path='/' exact component={Home}/>
                  <Route path='/about' exact component={About}/>
                  <Route path='/skills' exact component={Skills}/>
                  <Route path='/contact' exact component={Contact}/>
                  <Route component={Error}/>
              </Switch>
          </div>
      </SimpleReactLightbox>
  );
}

export default App;
