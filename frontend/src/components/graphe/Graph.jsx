import React from 'react'
import Album from '../Widgets/Album'
import Lyrics from '../Widgets/Lyrics'
import "./graph.css"
import Graphique from './Graphique'

export default function Graph({accessToken, search, setSearch, lyrics}) {

    return (
        <div className="graph">
            <div className="FeatureItem5">
                <span className="titre"><Album accessToken={accessToken} search={search} lyrics = {lyrics}/></span>
            </div>
            <div className="FeatureItem6">
                <span className="titre">Nombres albums</span>
                <span className="graph">
                    <Graphique/>
                </span>
            </div>
        </div>
    )
}
