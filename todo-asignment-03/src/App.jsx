// import Landing from './components/Landing'
// import { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'



// function App() {
//   const [loading, setLoading] = useState(true)
//   const dispatch = useDispatch()
//   return (
//     <>
//     <Landing />
//     </>
//   )
// }

// export default App

import React from 'react';
import Counter from './components/Counter';
import Posts from './components/Posts';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}> {/* Wrap your component tree with Provider */}
      <div style={{ padding: '2rem' }}>
        <h1>React Redux & Local Storage Demo</h1>
        <Counter />
        <Posts />
      </div>
    </Provider>
  );
};

export default App;