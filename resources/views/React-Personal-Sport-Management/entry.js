import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <AppBar title="Sport Management 0-0" />
    </MuiThemeProvider>
);

let root = document.getElementById('root');
ReactDOM.render(<App />,root);