import React, { useState, useContext } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import UserContext from '../Context/UserContext';


const Signup = () => {
    const history = useHistory();
    const [userLogin, setuserLogin] = useState({
        name: "",
        email: "",
        password: "",
        userName: "",
    });
    const { setUserData } = useContext(UserContext);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userPost = await axios.post("/api", userLogin);
            localStorage.setItem("userId", userPost.data._id);
            setUserData({ userId: userPost.data._id })
            history.push("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input onChange={(e) => setuserLogin({ ...userLogin, name: e.target.value })} type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter first and last name" />
                        <small id="nameHelp" className="form-text text-muted">We'll never share your personal info with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input onChange={(e) => setuserLogin({ ...userLogin, email: e.target.value })} type="text" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => setuserLogin({ ...userLogin, password: e.target.value })} type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input onChange={(e) => setuserLogin({ ...userLogin, userName: e.target.value })} type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter a unique username" />
                    </div>
                    <hr />
                    <button className="btn btn-success" id="signupbtn" type="submit">
                        Signup
                </button><span> or <a href="/login">Login</a></span>
                </form>
            </div>

        </div>
    )
}

export default Signup;
