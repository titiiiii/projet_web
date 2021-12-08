import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
    clientId: "6bc52007f6114854ad75a84a1d119b23"
   })

function addTrackToPlaylist ({playingTrack}){


   

        spotifyApi.addTracksToPlaylist('4cUpLlJKDre56KaeOE8Gn2', playingTrack)
    .then(function(add) {  
         console.log('Added tracks to playlist!');
    }, function(err) {
      console.log('Something went wrong!', err);
    });

     

    
    return (
        <div>
            
        </div>
    );
};

export default addTrackToPlaylist;