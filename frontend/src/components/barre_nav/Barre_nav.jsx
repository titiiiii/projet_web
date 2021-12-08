import React from 'react'
import "./barre_nav.css";
import logo from './logo_spotify.png'

export default function barre_nav() {
    return (
        <div className="Barre_nav">
            <div className="Wrapper">
                <div className="Menu">
                    <img src={logo} width="40" height="40"/>
                    <h3 className="titre">Dashboard</h3>
                    <ul className="liste">
                        <li className="item active">Home</li>
                        <li className="item1">Back</li>
                    </ul>
                </div>
            </div> 
        </div>
    )
}
