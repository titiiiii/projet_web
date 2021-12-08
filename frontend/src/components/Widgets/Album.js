import React from 'react';
import { useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import { useEffect } from 'react';
import Player from '../Player';


const spotifyApi = new SpotifyWebApi({
    clientId: "6bc52007f6114854ad75a84a1d119b23"    
   })
   


function Album({accessToken, search}) {    


    const [searchResults, setSearchResults] = useState([])
    const [image, setImage] = useState("https://i.scdn.co/image/ab67616d0000b273df55e326ed144ab4f5cecf95")
    const [titre, setTitre] = useState([])
    const [artist, setArtist] = useState([]) 
    const [playingTrack, setPlayingTrack] = useState()
    const [add, setAdd] = useState("")

    
    
     
    
    useEffect(() =>{
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])



    useEffect(() => {
        if(!search) return setSearchResults([])
        if(!accessToken) return ("Pas réussi a choper le token")   
        let cancel = false
        


        spotifyApi.searchTracks(search).then(res =>{
            if(cancel) return

        const searchInApi = res.body.tracks.items[0]
        
        console.log("data:", res)
        //console.log("la voila:", res.body.tracks.items[0].album.images[0].url)
        setImage(searchInApi.album.images[0].url)
        setArtist(searchInApi.artists[0].name)
        setTitre(searchInApi.name)
        setPlayingTrack(searchInApi.uri)
        
        })
        

    return () => cancel = true    
    }, [search, accessToken])

    useEffect(() =>{    //A chaque fois que tu cherches un son il va dans la playliste d'ID : 4cUpLlJKDre56KaeOE8Gn2
        spotifyApi.addTracksToPlaylist("6QncBoYdAZiHp4uQRvqdGl", [playingTrack])
    .then(function(add) { 
        setAdd(add) 
         console.log('Added tracks to playlist!');
    }, function(err) {
      console.log('Something went wrong!', err);
      console.log("its", playingTrack)
    });

    }, [playingTrack])
    

  
   

return (
        <div> 
            <div className="titre">
                    POCHETTE DE L'ALBUM
                <img 
                width="350" 
                height="350"
                src={image}
                alt="Song" 
                className="center"                            
                />                
            </div> 
                  
        </div>
    )


}

export default Album;