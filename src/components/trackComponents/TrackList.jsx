import DisplayTrack from "./DisplayTrack";

const TrackList = ({tracks, selectTrack}) => {



    const trackListHtml = tracks.map((track) =>{
        return(
            <DisplayTrack selectTrack={selectTrack} track={track} key={track.id} />
        )
    });


    return (
        <ul className="select-track-list">
        {trackListHtml}

        </ul>
    )
    
};

export default TrackList