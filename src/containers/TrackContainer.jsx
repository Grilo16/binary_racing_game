import TrackList from "../components/TrackList";

const DisplayTrackContainer = () => {

    const raceTracks = [
        {track: "111000110101101011", id : 0},
        {track: "000000000000000000", id : 1},
        {track: "111111111111111111", id : 2},
    ]

    return (
        <>
        <h3>Tracks will be displayed here</h3>
        <ul>
        <TrackList raceTracks={raceTracks}/>
        </ul>
        <hr />
        </>
    )

};

export default DisplayTrackContainer