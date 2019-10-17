import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from "./LoginPage";
import RegistrationSuccessPage from './components/RegistrationSuccessPage';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router} from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/Login" component={LoginPage} />
            <Route path="/RegistrationSuccess" component={RegistrationSuccessPage} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


