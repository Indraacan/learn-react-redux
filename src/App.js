import React from 'react';
import './App.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

conts store = createStore (reducer)
function App() {
  return (
    <Provider>
      <h1>aplikasi sekolah</h1>
      <div>ada navbar</div>
      <div>content dari guru</div>
      <div>content untuk siswa</div>
    </Provider>
  );
}

export default App;
