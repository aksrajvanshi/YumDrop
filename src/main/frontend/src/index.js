import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from "./LoginPage";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Route, BrowserRouter as Router} from 'react-router-dom';
import LoginDashBoard from "./LoginDashboard";
import OTPpage from "./OTPpage";
import errorPageForRegistration from "./errorPageForRegistration";
import MySettingsPage from "./MySettingsPage";
import OTPResetPassword from "./OTPResetPassword";
import ResetPassword from "./ResetPassword";
import loginErrorPAge from "./loginErrorPAge";
import UpdatePassword from "./UpdatePassword";

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
            <Route path="/MySettingsPage" component={MySettingsPage}/>
            <Route path="/OTPResetPassword" component={OTPResetPassword}/>
            <Route path="/ResetPassword" component={ResetPassword}/>
            <Route path="/loginErrorPAge" component={loginErrorPAge} />
            <Route path="/UpdatePassword" component={UpdatePassword} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));