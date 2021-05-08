import React, { useState } from 'react';
import Navbars from "../../components/Navbars/IndexNavbar";
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import fire from "../../fire"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useAuth()
    let history = useHistory();
    const handlechange = (val, type) => {
        if (type === "email") {
            console.log("email", val)
            setEmail(val)
        } else {
            console.log("pass", val)
            setPassword(val)
        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        try {
            // setError("")
            // setLoading(true)
            await login(email, password)
            history.push("/")
        } catch {
            console.log("Failed to create an account")
        }
        // fire.auth().signInWithEmailAndPassword(email,password).then((u)=>{
        //     console.log("user",u)
        //     var user = u.user;
        //     console.log("user",user)
        // }).catch((err)=>{
        //     console.log("errorrrr",err)
        // })
    }
    return (

        <div>
            <Navbars />
            <div class="container my-4 mt-5">

                <hr />

                <section id="register-form">


                    {/* <h2 class=" mb-4 ">
                        LOGIN
    </h2> */}


                    <p>
                    </p>


                    <div class="row mt-5">
                        <div class="col-md-2 mb-4"></div>

                        <div class="col-md-8 mb-4">


                            <h3 class="secondary-heading mb-3">

                            </h3>


                            <section>


                                <form class="text-center border border-light p-5">

                                    <h4 class="">LOGIN</h4>

                                    <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail" name="email" onChange={(e) => handlechange(e.target.value, "email")} />

                                    <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" name="password" onChange={(e) => handlechange(e.target.value, "password")} />
                                    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                                        At least 8 characters and 1 digit
                                        </small>
                                    <button class="btn btn-danger my-4 btn-block waves-effect waves-light" type="submit" onClick={handleSubmit}>LOGIN</button>

                                    <hr />


                                </form>


                            </section>

                        </div>


                    </div>


                </section>

            </div>
        </div>
    )
}

export default Login

