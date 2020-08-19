import React from 'react';
import Link from './Link';
import logo from './logo.svg';
import './App.css';
import Route from './Route';
import { BrowserRouter } from './BrowserRouter'

function User() {
  return 'User';
}
function Home() {
  return 'Home';
}
function About() {
  return 'About';
}
function App() {
  return (
    <BrowserRouter>
      <div>
        <li>
          <Link to="/user">user</Link>
        </li>
        <li><Link to="/about">about</Link></li>
        <Route path="/user" component={User} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
