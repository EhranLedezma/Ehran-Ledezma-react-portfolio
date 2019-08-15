import React, { Component } from 'react';
import { Link } from "react-router-dom"

export default function  NoMatch (){


    return (
        <div>
            <h2>We Couldn't Find That Page. :'(</h2>
            <Link to="/">Return to hompage</Link>
        </div>
     );
}