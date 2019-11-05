import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Trying from "./Trying";
import LoginPage from "./LoginPage";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import AddItemToMenu from "./AddItemToMenu";
import { Route, BrowserRouter as Router} from 'react-router-dom';
import LoginDashBoard from "./LoginDashboard";
import OTPpage from "./OTPpage";
import errorPageForRegistration from "./errorPageForRegistration";
import MySettingsPage from "./MySettingsPage";
import OTPResetPassword from "./OTPResetPassword";
import ResetPassword from "./ResetPassword";
import loginErrorPAge from "./loginErrorPAge";
import SuccessfulRegistration from './SuccessfulRegistration';
import Home from './Home';
import MyCurrentLocation from "./MyCurrentLocation";
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import RestaurantDashboard from "./RestaurantDashboard";
import ErrorPageForRestaurantRegistration from "./ErrorPageForRestaurantRegistration";
import RestaurantRegister from "./RestaurantRegister";
import DeliveryAgentDashboard from "./DeliveryAgentDashboard";
import DeliveryAgentOTPpage from "./DeliveryAgentOTPpage";
import RestaurantLogin from "./RestaurantLogin";
import successfullyChangedPasswordPage from "./successfullyChangedPasswordPage";

const initialState = {
    latitude: null,
    longitude: null
}

const reducer = (state=initialState, action) => {

    if(action.type==="setLocation"){
        return {latitude: action.newLatitude, longitude: action.newLongitude}
    }

    return state;
}

const store = createStore(reducer)

const routing = (

    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/ErrorPageForRestaurantRegistration" component={ErrorPageForRestaurantRegistration}/>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/LoginPage" component={LoginPage} />
                <Route exact path="/LoginForm" component={LoginForm} />
                <Route exact path="/RegisterForm" component={RegisterForm}/>
                <Route exact path="/LoginDashBoard" component={LoginDashBoard}/>
                <Route exact path="/OTPpage" component={OTPpage}/>
                <Route exact path="/DeliveryAgentOTPpage" component={DeliveryAgentOTPpage}/>
                <Route exact path="/errorPageForRegistration" component={errorPageForRegistration} />
                <Route exact path="/MySettingsPage" component={MySettingsPage}/>
                <Route exact path="/OTPResetPassword" component={OTPResetPassword}/>
                <Route exact path="/ResetPassword" component={ResetPassword}/>
                <Route exact path="/loginErrorPAge" component={loginErrorPAge} />
                <Route exact path="/SuccessfulRegistration" component={SuccessfulRegistration} />
                <Route exact path="/MyCurrentLocation" component={MyCurrentLocation}/>
                <Route exact path="/RestaurantDashboard" component={RestaurantDashboard}/>
                <Route exact path="/Trying" component={Trying}/>
                <Route exact path="/AddItemToMenu" component={AddItemToMenu}/>
                <Route exact path="/RestaurantRegister" component={RestaurantRegister} />
                <Route exact path="/DeliveryAgentDashboard" component={DeliveryAgentDashboard}/>
                <Route exact path="/RestaurantLogin" component={RestaurantLogin}/>
                <Route exact path="/successfullyChangedPasswordPage" component={successfullyChangedPasswordPage}/>
            </div>
        </Router>
    </Provider>

)

ReactDOM.render(routing, document.getElementById('root'));