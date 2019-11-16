import React, { useState } from "react";
import TrackingComponent from "./trackingComponent";
import ThreeJsComponent from "./threeJsComponent";
import {
  inputCoordiantesLimits,
  outputCoordiantesLimits
} from "../constants/cordinatesLimits";

/*
 * Convert2dTo3d is used to convert and display coordinates in 2d to 3d
 */
function Convert2dTo3d() {
  const [videoStarted, setVideoStarted] = useState(false);
  const [coordiantes, setCoordiantes] = useState({
    radius: 0,
    x: 0,
    y:0
  });

  const onCoordiantesChange= (newCoordinates)=>{
    setCoordiantes(newCoordinates)
  }

  const convertCoordinatesForThreeJs = () => {
    const inputScaleRadius =
      inputCoordiantesLimits.radius.max - inputCoordiantesLimits.radius.min;
    const outputScaleRadius =
      outputCoordiantesLimits.z.max - outputCoordiantesLimits.z.min;
    const ratio = coordiantes.radius / inputScaleRadius;
    const outputValueInScaleRadius = ratio * outputScaleRadius;
    const outputValueRadius = outputValueInScaleRadius + outputCoordiantesLimits.z.min; //making integer
    return { z: outputValueRadius, x:0, y:0 }; //now z is only calculated, start working from here
  };

  return (
    <div>
      <button onClick={() => setVideoStarted(!videoStarted)}>
        {videoStarted ? "STOP" : "START"}
      </button>
      {videoStarted && <TrackingComponent onCoordiantesChange={onCoordiantesChange} />}
      {videoStarted && <ThreeJsComponent coordiantes={convertCoordinatesForThreeJs()} />}
    </div>
  );
}

export default Convert2dTo3d;
