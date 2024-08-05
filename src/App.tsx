import React from 'react';
import logo from './logo.svg';
import Button from './components/Button/button'
import './styles/index.scss'

function App() {
  return (
    <div className="App">
            <Button btnType="primary" size="lg" onClick={()=>alert('click....')}>Primary Button</Button>
            <Button btnType="link" href="https://www.example.com">Link Button</Button>
            <Button disabled>Disabled Button</Button>
    </div>
  );
}

export default App;
