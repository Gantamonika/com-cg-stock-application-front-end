import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Header = () => {

    let [loginStatus, setLoginStatus] = useState(false);
    let [role, setRole] = useState(true);


    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
        setRole(sessionStorage.getItem('role'))

    }, []);

    if (loginStatus) {
        if (role === 'ADMIN') {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTy5aLsdBgw-F-pgOPFmMniSyirkhgEOIY7A&usqp=CAU"
                                height="60px" alt="Capgemini" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                            <li className="nav-item">
                                    <Link className="nav-link" to="/admin" >Admin</Link>
                                </li>
                               
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout" >Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
        }
        else if(role === 'MANAGER'){
            return (

               
                <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTy5aLsdBgw-F-pgOPFmMniSyirkhgEOIY7A&usqp=CAU"
                                height="60px" alt="Capgemini" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                           
                                <li className="nav-item">
                                    <Link className="nav-link" to="/manager" >Manager</Link>
                                </li>
                               
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout" >Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            );

        }
        else if(role === 'INVESTOR'){
            return (

               
                <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTy5aLsdBgw-F-pgOPFmMniSyirkhgEOIY7A&usqp=CAU"
                                height="60px" alt="Capgemini" />
                        </Link>
                       
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                           
                                <li className="nav-item">
                                    <Link className="nav-link" to="/investor" >Investor</Link>
                                </li>
                               
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout" >Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            );

        }
        else if(role === 'COMPANY'){
            return (

               
                <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTy5aLsdBgw-F-pgOPFmMniSyirkhgEOIY7A&usqp=CAU"
                                height="60px" alt="Capgemini" />
                        </Link>
                       
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                           
                                <li className="nav-item">
                                    <Link className="nav-link" to="/company" >Company</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/stock" >Stock</Link>
                                </li>
                               
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout" >Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            );

        }
        // else {
        //     return (
        //         <p>this is null section</p>
        //     );
        // }








    }
    else {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTy5aLsdBgw-F-pgOPFmMniSyirkhgEOIY7A&usqp=CAU"
                                height="60px" alt="Capgemini" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/register" >Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" >Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

}

export default Header;



