import './App.css';
import DisplayCarContainer from './containers/CarContainer';
import DisplayTrackContainer from './containers/TrackContainer';



function App() {
  return (
    <>
    <div>
      <DisplayCarContainer/>
    </div>
    <div>
      <DisplayTrackContainer/>
    </div>
    <h3>This is where a car can race</h3>
    </>
  );
}

export default App;
