import React, { Component } from 'react';
import { Link } from "react-router-dom"
import ReactAudioPlayer from 'react-audio-player';

export default function song (){

    return (
        <div>
            song
            <h1>sorry for your ears</h1>
            <ReactAudioPlayer
            src="//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3"
            autoPlay
            controls
            />
        </div>
     );
}