import React, {useState} from 'react';
import './App.css';
import TrackingComponent from './trackingComponent'

function App() {
const[isTracking,setIsTracking]=useState(false)
  return (
    <div>
      <button onClick={()=>setIsTracking(!isTracking)}>{isTracking?"STOP":"START"}</button>
      {isTracking&&<TrackingComponent/>}
    </div>
  );
}

export default App;
