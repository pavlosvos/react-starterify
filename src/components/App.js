import React from 'react';
import { Link } from 'react-router';
import { version } from '../../package.json';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


const App = ({ children }) => (
  <div>
    <header>
      <h1>React Starterify {version}</h1>
      <Link to="/about">About</Link>
      <Link to="/poweredby">Powered by</Link>
    </header>
    <section>
      {children || 'Welcome to React Starterify Dude'}
    </section>
    <div className="inputfield">
      <TodoInput/>
      <TodoList/>
    </div>

  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
