import React from 'react'

const Navbar = (props) => {
    return (
        < nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">{props.nav}</span>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href={props.links.home}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={props.links.signup}>Signup</a>
                    </li>
                </ul>
            </div>
        </ nav>
    )
}

export default Navbar
