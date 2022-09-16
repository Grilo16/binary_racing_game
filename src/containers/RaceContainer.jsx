import CarList from "../components/carComponents/CarList";
import RaceDisplay from "../components/raceComponents/RaceDisplay";
import TrackList from "../components/trackComponents/TrackList";
import "./RaceContainer.css"

const RaceContainer = function({cars, tracks, selectTrack, selectedTrack, selectCar, selectedCar, race, raceResult}){


    

    return(
        <div className="race-container">
        <h3>this will be the race page</h3>
        <div className="flex-container" >
            
        
        <div className ="select-containers">
        <div className="select-car-container">
        <CarList selectCar={selectCar} cars={cars}/>
        </div>

        <div className="select-track-container" >
        <TrackList selectTrack={selectTrack} tracks={tracks}/>
        </div>

        </div>

        <RaceDisplay selectedCar={selectedCar} selectedTrack={selectedTrack} race={race} raceResult={raceResult}/>
        </div>
        </div>
    )
};

export default RaceContainer