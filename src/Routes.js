
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import StockData from "./components/StockData";
import ManagerData from "./components/ManagerData";
import CompanyData from "./components/CompanyData";
import InvestorData from "./components/InvestorData";
import AdminData from "./components/AdminData";
import Header from "./components/Header";
import Home from './components/Home';
import Login from "./components/Login";
import Logout from './components/Logout';
import Page404 from './components/Page404';
import Register from "./components/Register";

const Routes = () => {

    let [loginStatus, setLoginStatus] = useState(false);
    let [role, setRole] = useState('ADMIN');


    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
        setRole(sessionStorage.getItem('role'))

    }, []);

    if (loginStatus) {
        if (role === 'ADMIN') {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                            <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                               
                                <Route path="/admin"> <AdminData /> </Route>
                                <Route path="/logout"> <Logout /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        

        );
    }
    
    else if(role === 'MANAGER'){
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                        <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                               
                                <Route path="/manager"> <ManagerData /> </Route>
                                
                                <Route path="/logout"> <Logout /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        

        );
    }
    else if(role === 'COMPANY'){
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                        <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                               
                                <Route path="/company"> <CompanyData /> </Route>
                                <Route path="/stock"> <StockData /> </Route>
                                
                                <Route path="/logout"> <Logout /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        

        );
    }
    else if(role === 'INVESTOR'){
        return (
            <div>
                <Router>
                    <div>
                       
                        <Header />
                        <div>
                        <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                               
                                <Route path="/investor"> <InvestorData /> </Route>
                               
                                <Route path="/logout"> <Logout /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        

        );
    }
    else{return null}








}
    else {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                            <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                <Route path="/register"> <Register /> </Route>
                                <Route path="/login"> <Login /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
}


export default Routes;