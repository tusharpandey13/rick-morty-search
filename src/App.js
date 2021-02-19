import React, { useReducer } from 'react';
import { initialState, reducer } from './store';
import SearchBar from './components/searchbar';
import ResultsList from './components/resultslist';
import ScrollIntersectionHandler from './components/scrollIntersectionHandler';

import './App.css';

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='App'>
      <p>Rick and Morty Search</p>
      <SearchBar store={store} dispatch={dispatch}></SearchBar>
      <ResultsList store={store} dispatch={dispatch}></ResultsList>
      <ScrollIntersectionHandler store={store} dispatch={dispatch}></ScrollIntersectionHandler>
    </div>
  );
}

export default App;
