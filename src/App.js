import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Get a data from albums
import dataAlbum1 from './util/dataAlbum1';
import dataAlbum2 from './util/dataAlbum2';
import dataAlbum3 from './util/dataAlbum3';
import dataAlbum4 from './util/dataAlbum4';
import dataAlbum5 from './util/dataAlbum5';

// Components
import Navigation from './components/layout/Navigation';

// Pages
import home from './components/pages/home/home';
import Album1 from './components/layout/albums/Album1';
import Album2 from './components/layout/albums/Album2';
import Album3 from './components/layout/albums/Album3';
import Album4 from './components/layout/albums/Album4';
import Album5 from './components/layout/albums/Album5';
import FavouriteList from './components/layout/FavouriteList';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  
    return (
          <Provider store={store}>
            <Router>
            <Navigation/>
              <div className="container">
                  <Switch>
                    <Route exact path="/" component={home}/>
                    <Route exact path="/album1">
                      <Album1 data={dataAlbum1}/> 
                    </Route>
                    <Route exact path="/album2">
                      <Album1 data={dataAlbum2}/> 
                    </Route>
                    <Route exact path="/album3">
                      <Album1 data={dataAlbum3}/> 
                    </Route>
                    <Route exact path="/album4">
                      <Album1 data={dataAlbum4}/> 
                    </Route>
                    <Route exact path="/album5">
                      <Album1 data={dataAlbum5}/> 
                    </Route>
                    <Route exact path="/favourite">
                      <FavouriteList /> 
                    </Route>
                  </Switch>
              </div>
            </Router>
          </Provider>
    )
}

export default App;
