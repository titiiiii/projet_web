import React from 'react'
import Album from '../Widgets/Album'
import Lyrics from '../Widgets/Lyrics'
import './graph.css'
import Graphique from './Graphique'

export default function Lyric({accessToken, search, setSearch, lyrics}) {
    return (
        <div className="graph">
            <div className="FeatureItem7">
            <span className="titre">Lyrics</span>
                <span className="lyric"><Lyrics lyrics={lyrics} /></span>
            </div>
        </div>
    )
}
