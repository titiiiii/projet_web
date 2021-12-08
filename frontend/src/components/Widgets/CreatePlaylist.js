import React from 'react';
import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
    clientId: "6bc52007f6114854ad75a84a1d119b23"    
   })


function CreatePlaylist({accessToken}){

    useEffect(() =>{
        if(!accessToken) return
      
        spotifyApi.createPlaylist('Playlist Test', { 'description': 'Lucas', 'public': true })
        .then(function(data) {
          console.log('Created playlist!');
        }, function(err) {
          console.log('Something went wrong!', err);
        });        
    })

    return (
        <div>
            
        </div>
    );
};

export default CreatePlaylist;