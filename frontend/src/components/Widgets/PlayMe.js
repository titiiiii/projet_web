import React, { useState } from "react";
import Player from "../Player";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";




 function PlayMe({accessToken, playingTrack}){  



  return(
    <div>
      <Player accessToken ={accessToken} playingTrack={playingTrack}/>
    </div>
  )
  
 }

 export default PlayMe;