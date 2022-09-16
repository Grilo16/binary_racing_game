const DisplayTrack = ({track, selectTrack}) => {
    const handleClick = function(){
        selectTrack(track)
    };

    return (
        <li onClick={handleClick}  className="select-track">
        <h3>Track :</h3>
        <h4>{track.track}</h4>
        </li>
    )
};

export default DisplayTrack