import React from "react";
import useAuth from "./useAuth";
import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Affichage from "./components/Affichage";
import axios from "axios";
import Album from "./components/Widgets/Album";
import CreatePlaylist from "./components/Widgets/CreatePlaylist";



const spotifyApi = new SpotifyWebApi({
 clientId: "3b85071ba0c748ffac9596a312bfb0e3"
})

function Dashboard({code}) {

    const accessToken = useAuth(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState("")
    const [titre, setTitre] = useState([])
    const [artist, setArtist] = useState([])
    const [lyrics, setLyrics] = useState([])
    const [phraseTest, setPhraseTest] = useState("")
    const [dataFromApi, setDataFromApi] = useState("")
    const [putDataInApi, setPutDataInApi] = useState("")
    const [create, setCreate] = useState("")
    const [add, setAdd] = useState("")


    let track = new Object()
    track.titre = titre
    track.artists= artist
    track.uri  = playingTrack


   
    useEffect(() =>{
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])
    
    useEffect(() =>{
        if(!search) return setSearchResults([])
        if(!accessToken) return

        let cancel = false

        spotifyApi.searchTracks(search).then(res =>{
          if(cancel) return

      const searchInApi = res.body.tracks.items[0]
      
      console.log("data:", res)     //Affichage de l'API dans la console   
      setPlayingTrack(searchInApi.uri)
      setTitre(searchInApi.name)
      setArtist(searchInApi.artists[0].name) 

    })

   
      

      

  return () => cancel = true    
  }, [search, accessToken])
    

  


  useEffect(() => {
    if (!playingTrack) return

    let cancel = false

    axios
      .get("http://localhost:3001/lyrics", {
          params: {
               titre, 
               artist,
            },         
      })
      .then(res => {
        if(cancel) return
        setLyrics(res.data.lyrics)
   

      })
      
      return () => cancel = true    

  }, [titre, artist, lyrics, playingTrack])


    
  

        useEffect(() =>{    //TEST CALL NOTRE API
            axios
            .get("http://localhost:3001/home")     
            .then(res =>{
                setPhraseTest(res.data)
            })
        }, [])


         

    

    
        /* useEffect(() =>{

        axios
        .post('http://localhost:3001/api')
        .then(

            console.log("Hello")
        )
            
               
    })*/

    /*useEffect(() =>{          // Crée un playliste mais depuis dashboard il en crée 40
        if(!accessToken) return
      
        spotifyApi.createPlaylist('Playlist Test', { 'description': 'Lucas', 'public': true })
        .then(function(create) {
            setCreate(create)
          console.log('Created playlist!');
        }, function(err) {
          console.log('Something went wrong!', err);
        });        
    })*/

    useEffect(() =>{    //A chaque fois que tu cherches un son il va dans la playliste d'ID : 4cUpLlJKDre56KaeOE8Gn2
        spotifyApi.addTracksToPlaylist("6QncBoYdAZiHp4uQRvqdGl", [playingTrack])
    .then(function(add) { 
        setAdd(add) 
         console.log('Added tracks to playlist!');
    }, function(err) {
      console.log('Something went wrong!', err);
    });

    }, [playingTrack])
    
  
    
   
    return (
        <div>                  
      <Affichage  accessToken={accessToken} search={search} setSearch={setSearch} playingTrack={playingTrack} 
      titre={titre} artist={artist} lyrics={lyrics} />
      </div>
    )
      
}

export default Dashboard