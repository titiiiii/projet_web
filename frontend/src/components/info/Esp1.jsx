import React from 'react'
import Album from '../Widgets/Album';
import Artist from '../Widgets/Artist';
import PlayMe from '../Widgets/PlayMe';
import TimeWidget from '../Widgets/TimeWidget';
import Titre from '../Widgets/Titre';
import "./esp1.css";

export default function Esp1({accessToken, search,setSearch, setPlaylist,nom, playingTrack, titre, artist}) {
    



    return (
        <div className="feature">           
            <div className="FeatureItem1">
                <span className="titre1">Titre en cours</span>
                <div className="ArgentContainer">
                    <span className="argent"><Titre titre={titre} /></span>
                </div>
            </div>
            <div className="FeatureItem2">
                <span className="titre1">Artiste</span>
                <div className="ArgentContainer">
                    <span className="argent"><Artist artist={artist} /></span>
                </div>
            </div>
            <div className="FeatureItem3">
                <div className="search">
                    <form id="searchbox" method="get" action="/search" autoComplete="off">
                        <input name="q" type="text" size="20" placeholder="Search Songs/Artists"
                            value={search}
                            onChange = {e => setSearch(e.target.value)} />
                    </form> 
                </div>
                <div className="ArgentContainer">
                    <span className="playMe"><PlayMe accessToken={accessToken} search={search} playingTrack={playingTrack} /></span>
                </div>
            </div>
        </div>
    )
}
