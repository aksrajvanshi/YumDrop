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
import SuccessfulRegistration from './SuccessfulRegistration';
import './Map';
import './FileLocation';
import userRegistration from './userRegistration';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import restaurantRegistration from './restaurantRegistration';
import errorForRestaurantRegistration from './errorForRestaurantRegistration';
import Map from "./Map";
import FileLocation from "./FileLocation";

const initialState = {
    test: "",
    test1: "",
    test2: ""
}

const reducer = (state=initialState, action) => {

    if(action.type==="SET_TEST"){
        return {test: action.newTest, test1: action.newTest}
    }

    return state;
}

const reducers = combineReducers({
    testRed: reducer
})

const store = createStore(reducers)

const routing = (
    <Provider store={store}>
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
            <Route path="/SuccessfulRegistration" component={SuccessfulRegistration} />
            <Route path="/userRegistration" component={userRegistration} />
            <Route path="/restaurantRegistration" component={restaurantRegistration}/>
            <Route path="/errorForRestaurantRegistration" component={errorForRestaurantRegistration}/>
        </div>
    </Router>
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));