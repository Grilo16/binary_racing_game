import "./RaceDisplay.css"


const RaceDisplay = function({selectedTrack, selectedCar, race, raceResult}){

    const handleClick = function(){
        race(selectedCar, selectedTrack)
    };
    return (
        <div className="race-display" >
        <div className="selected-car-track">
            <div className="display-selected">
        <h3>Selected car</h3>
            <p>{selectedCar.name}</p>

            </div>
            <div className="display-selected">
        <h3>Selected track</h3>
            <p>{selectedTrack.track}</p>
            </div>
        </div>
        <div className="race-progress">
            <h3>I may put an animation here maybe?</h3>
                <p>{raceResult}</p>
        </div>
        <button onClick={handleClick}>Race</button>
        


    </div>
    )
};
export default RaceDisplay