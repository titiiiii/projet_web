import React, { Component } from 'react';
import Home from '../page/home/Home';
import './affichage.css';
import Barre_nav from "./barre_nav/Barre_nav";
import { useState } from 'react';





function Affichage({accessToken, search, setSearch, playingTrack, titre, artist, lyrics}) {

  return (
    <div>
      <div className="container">
        <Barre_nav/>
        <div className="main">
            <Home accessToken={accessToken} search={search} setSearch={setSearch} playingTrack={playingTrack} titre={titre} artist={artist} lyrics={lyrics}/>
        </div>
      </div>
    </div>
  );
}

export default Affichage;