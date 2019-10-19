import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from "./LoginPage";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router} from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/LoginPage" component={LoginPage} />
            <Route path="/LoginForm" component={LoginForm} />
            <Route path="/RegisterForm" component={RegisterForm}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));