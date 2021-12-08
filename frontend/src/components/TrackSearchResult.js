import React from 'react';

const TrackSearchResult = ({track, chooseTrack}) => {

    function handlePlay(){
        chooseTrack(track)
    }

    return (
        <div
          className="d-flex m-2 align-items-center"
          style={{ cursor: "pointer" }}
          onClick={handlePlay}
        >
            <div className="ml-3">
            <div>1: {track.titre}</div>
            <div className="text-muted">2: {track.artist}</div>
            <div>3: {lyrics}</div>
          </div>
        </div>
      )
};

export default TrackSearchResult;