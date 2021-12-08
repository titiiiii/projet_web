import React, { useState } from 'react';
import Esp1 from '../../components/info/Esp1';
import Graph from '../../components/graphe/Graph';
import Lyric from '../../components/graphe/Lyric';
import "./home.css";
import { Form } from 'react-bootstrap';
import addTrackToPlaylist from '../../components/Widgets/addTrackToPlaylist';


function Home({accessToken, search, setSearch, playingTrack, titre, artist, lyrics}) {
    
    return (      
        <div className="home">
        <Esp1 accessToken={accessToken} search={search} setSearch={setSearch} playingTrack={playingTrack} titre={titre} artist={artist} />
            <Graph accessToken={accessToken} search={search} setSearch={setSearch} lyrics={lyrics}/>    
            <Lyric accessToken={accessToken} search={search} setSearch={setSearch} lyrics={lyrics}/> 
        </div>
    )
}

export default Home
