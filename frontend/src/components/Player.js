import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"
import React from "react"

 function Player({ accessToken, playingTrack}) {

  const [play, setPlay] = useState(false)

  useEffect(() => setPlay(true), [playingTrack])

  if (!accessToken) return null
  return (
    <SpotifyPlayer 
      width="50%"
      token={accessToken}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
       play={play}
       uris={playingTrack ? [playingTrack] : []}
    />
  )
}

export default Player