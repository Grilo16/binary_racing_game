import './App.css';
import TrackContainer from './containers/TrackContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePageContainer from './containers/HomePageContainer';
import NavigationList from './components/navigationComponents/NavigationList';
import CarContainer from "./containers/CarContainer";
import RaceContainer from './containers/RaceContainer';
import { useEffect, useState } from 'react';
import cars from './components/data/Cars';
import tracks from './components/data/Tracks';


function App() {

const routes = [
            {home:"/"}, 
            {tracks:"/track"}, 
            {cars:"/cars"},
            {race:"/race"}
          ]
const [selectedTrack, setSelectedTrack] = useState({})
const [selectedCar, setSelectedCar] = useState({})
const [raceResult, setRaceResult] = useState("")

const selectTrack = function(track){
    setSelectedTrack(track)
};

const selectCar = function(car){
  setSelectedCar(car)
};


const decidePoints = function(car, trackStep){
  
  const avgSpeed = parseFloat(((parseInt(car.topSpeed) + parseInt(car.acceleration))/2).toFixed(2))

  const avgCornering = parseFloat(((parseInt(car.cornering) + parseInt(car.breaking))/2).toFixed(2))
  
  if (avgSpeed > avgCornering){
    if (trackStep ==="1"){
      car.score++
    }else{
      car.score--
    }
  }else if (avgSpeed < avgCornering){
    if (trackStep ==="1"){
      car.score--
    }else{
      car.score++
  }
}
};

const race = function(car, track){

  track.track.split("").forEach((char) => decidePoints(car, char))
  const finalScore = car.score
  car.score = 0
  setRaceResult(finalScore)

};

    useEffect(()=>{
    },[])






  return (
  <>
  <NavigationList routes={routes} />
    <Router>
      <Routes>
        <Route path="/" element={<HomePageContainer/>}/>
        <Route path="/track" element={<TrackContainer tracks={tracks}/>}/>
        <Route path="/cars" element={<CarContainer cars={cars}/>}/>
        <Route path="/race" element={<RaceContainer race={race} selectTrack={selectTrack} selectedTrack={selectedTrack} selectCar={selectCar} selectedCar={selectedCar} cars={cars} tracks={tracks} raceResult={raceResult}/>}/>
      </Routes>
    </Router>
    {/* <div>
      <DisplayCarContainer/>
    </div>
    <div>
      <TrackContainer/>
    </div>
    <h3>This is where a car can race</h3> */}
    </>
  );
}

export default App;
