import React, {useState} from 'react';
import './App.css';
import TrackingComponent from './trackingComponent'
import ThreeJsComponent from './threeJsComponent'

function App() {
const[isTracking,setIsTracking]=useState(false)
const[inputCoordiantes,setInputCoordiantes]=useState({
  radius:0
})

//radius we get from the handtrack is changed into z coordinate
const inputCoordiantesLimits = {
  radius: {
    max:368,
    min:41
  }
}

const outputCoordiantesLimits = {
  z: {
    max:+18,
    min:-2
  }
}

const findOutputCoordiantes =()=>{
  const inputScale = inputCoordiantesLimits.radius.max-inputCoordiantesLimits.radius.min
  const outputScale = outputCoordiantesLimits.z.max-outputCoordiantesLimits.z.min
  const ratio = inputCoordiantes.radius/inputScale
  const outputValueInScale = ratio*outputScale 
  const outputValue = outputValueInScale + outputCoordiantesLimits.z.min //making integer
  console.log("---------outputValue---------",outputValue)
  return {z:outputValue}
}

  return (
    <div>
      <button onClick={()=>setIsTracking(!isTracking)}>{isTracking?"STOP":"START"}</button>
      {isTracking&&<TrackingComponent setInputCoordiantes={setInputCoordiantes}/>}
      {isTracking&&<ThreeJsComponent outputCoordiantes={findOutputCoordiantes()}/>}
    </div>
  );
}

export default App;
