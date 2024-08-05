import React from 'react';
import logo from './logo.svg';
import Button from './components/Button/button'
import './styles/index.scss'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Icon from './components/Icon/inon';

function App() {
  return (
    <div className="App">
      <h1>Button</h1>
      <div>
        <Button btnType="primary" size="lg" onClick={() => alert('click....')}>Primary Button</Button>
        <Button btnType="link" href="https://www.example.com">Link Button</Button>
        <Button disabled>Disabled Button</Button>
      </div>
      <h1>Icon</h1>  
      <div>
        <Icon icon={faCoffee} theme="success" />
      </div>
    </div>
  );
}

export default App;
