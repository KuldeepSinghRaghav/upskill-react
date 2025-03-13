import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
import Login from './pages/Login';
import Landing from './components/Landing';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Todo from './pages/Todo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
