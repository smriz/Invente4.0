import React from 'react';
import ReactDOM from 'react-dom';
import './res/style.css';
import 'holi/lib/holi.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
