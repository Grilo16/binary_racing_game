import TrackList from "../components/trackComponents/TrackList";

const TrackContainer = ({tracks}) => {



    return (
        <>
        <h3>Tracks will be displayed here</h3>
        <ul>
        <TrackList tracks={tracks}/>
        </ul>
        <hr />
        </>
    )

};

export default TrackContainer