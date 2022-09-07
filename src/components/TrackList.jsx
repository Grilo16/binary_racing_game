import DisplayTrack from "./DisplayTrack";

const TrackList = ({raceTracks}) => {
    const trackListHtml = raceTracks.map((track) =>{
        return(
            <DisplayTrack track={track} key={track.id} />
        )
    });
    return trackListHtml
};

export default TrackList