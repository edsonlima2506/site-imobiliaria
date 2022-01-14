import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
import Houses from './pages/Houses';
import Apartments from './pages/Apartments';
import SelectedHouse from './pages/SelectedHouse';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Index } />
          <Route path="/casas" component={ Houses } />
          <Route path="/apartamentos" component={ Apartments } />
          <Route path="/imovel-selecionada" component={ SelectedHouse } />
          <Route path="/*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
