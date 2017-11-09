import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import theme from './theme';

ReactDOM.render(
  
<MuiThemeProvider theme={theme}>
	<App />
</MuiThemeProvider>,
document.getElementById('root'));
registerServiceWorker();