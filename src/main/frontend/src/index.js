import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from "./LoginPage";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import LoginDashBoard from "./LoginDashboard";
import OTPpage from "./OTPpage";
import errorPageForRegistration from "./errorPageForRegistration";
const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/LoginPage" component={LoginPage} />
            <Route path="/LoginForm" component={LoginForm} />
            <Route path="/RegisterForm" component={RegisterForm}/>
            <Route path="/LoginDashBoard" component={LoginDashBoard}/>
            <Route path="/OTPpage" component={OTPpage}/>
            <Route path="/errorPageForRegistration" component={errorPageForRegistration} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));