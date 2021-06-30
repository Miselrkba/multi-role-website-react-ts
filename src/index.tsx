import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './components/App';

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
