import React from "react";
import { Link } from 'react-router-dom'

// import Container from './Container'

import "./Nav.css"
// import Button from "../Button";
// {/* <Button className="Home" text="Home" se={false} /> */}

function Nav() {

    return (
        <nav>
                <Link to="/">
                    Money focus
                </Link>
                <Link to="/">Home</Link>
                <Link to="/">Saldo</Link>
                <Link to="/">Extrato</Link>
                <Link to="/">Home</Link>
                <Link to="/">Home</Link>
                <Link to="/">Home</Link>
        </nav>
    )
}

export default Nav