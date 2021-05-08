import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Admissions from "views/examples/admission.js";
import Learning from "views/IndexSections/Learning.js";
import Internship from "views/examples/internship.js";
import Login from "views/examples/Login.js";
import Projects from "views/examples/project.js";
import FirstYear from "./components/FirstYear/firstYear"
import { AuthProvider } from "./contexts/AuthContext"
// import Admissions from "views/examples/admission.js";
import PrivateRoute from "./PrivateRoute"
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import fire from "./fire.js"
function App() {
    // let history = useHistory();
    // const [user, setUser] = useState({});

    // const authListener = () => {
    //     fire.auth().onAuthStateChanged((user) => {
    //         if (user) {
    //             // console.log("appUSer",user)
    //             setUser({ user })
    //         } else {
    //             setUser(null)
    //         }
    //     })
    // }

    // useEffect(() => {
    //     authListener()
    //     // console.log("appUSer",user)
    // });

    return (
        <>
            {/* {user ? */}

            <BrowserRouter>
                <AuthProvider>
                    <Switch>
                        {/* {user ? ( */}
                        {/* <React.Fragment> */}
                        <Route path="/components" render={(props) => <Index {...props} />} />
                        <Route
                            path="/landing-page"
                            render={(props) => <LandingPage {...props} />}
                        />
                        <PrivateRoute
                            exact
                            path="/Learning"
                            component={Learning}
                        // render={(props) => <Learning {...props} />}
                        />
                        <PrivateRoute
                            exact
                            path="/Admissions"
                            // render={(props) => <Admissions {...props} />}
                            component={Admissions}
                        />
                        <PrivateRoute
                            exact
                            path="/Internship"
                            // render={(props) => <Internship {...props} />}
                            component={Internship}
                        />
                        <PrivateRoute
                            exact
                            path="/Projects"
                            // render={(props) => <Projects {...props} />}
                            component={Projects}
                        />
                        <Route
                            path="/register-page"
                            render={(props) => <RegisterPage {...props} />}
                        />
                        <Route
                            path="/profile-page"
                            render={(props) => <ProfilePage {...props} />}
                        />
                        <Route
                            path="/Login"
                            render={(props) => <Login {...props} />}
                        />
                          <Route
                            path="/firstYear"
                            render={(props) => <FirstYear {...props} />}
                        />
                        {/* <PrivateRoute exact path="/" component={Index} /> */}
                        <Route path="/" render={(props) => <Index {...props} />} />
                        {/* </React.Fragment> */}
                    </Switch>
                </AuthProvider>
            </BrowserRouter>

            {/* :
                <BrowserRouter>
                    <Switch>
                        <Route
                            path="/Login"
                            render={(props) => <Login {...props} />}
                        />
                         <Route
                            path="/register-page"
                            render={(props) => <RegisterPage {...props} />}
                        />
                    </Switch>
                </BrowserRouter>
            } */}
        </>
    )
}

export default App
