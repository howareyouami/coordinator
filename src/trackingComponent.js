import React, {useEffect} from 'react';
import './App.css';
import * as handTrack from './handtrackjs/src/index';
 

function TrackingComponent(props) {

useEffect(()=>{
    const video = document.getElementById("myvideo");
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    let updateNote = document.getElementById("updatenote");


    let model = null;

    // video.width = 500
    // video.height = 400

    const modelParams = {
        flipHorizontal: true,   // flip e.g for video  
        maxNumBoxes: 1,        // maximum number of boxes to detect
        iouThreshold: 0.5,      // ioU threshold for non-max suppression
        scoreThreshold: 0.6,    // confidence threshold for predictions.
    }

    function runDetection() {
        video.height=window.innerHeight
        video.width=window.innerWidth
        model.detect(video).then(predictions => {
            console.log("Predictions: ", predictions);
            model.renderPredictions(predictions, canvas, context, video, props.setInputCoordiantes)
            requestAnimationFrame(runDetection);
        });
    }
    
    function startVideo() {
        handTrack.startVideo(video).then(function (status) {
            console.log("video started", status);
            if (status) {
                updateNote.innerText = "Video started. Now tracking"
                runDetection()
            } else {
                updateNote.innerText = "Please enable video"
            }
        });
    }

    handTrack.load(modelParams).then(lmodel => {
        // detect objects in the image.
        model = lmodel
        updateNote.innerText = "Loaded Model!"
    });

    updateNote.innerText = "Starting video"
    startVideo();

    return ()=>{
        updateNote.innerText = "Stopping video"
        handTrack.stopVideo(video)
    }
},[])

  return (
    <div>
        <h1>tracking</h1>
        <div id="updatenote"> loading model ..</div>
        <video autoPlay="autoplay" id="myvideo" style={{display:"none", width:"100%", height:"100%"}}></video>
        <canvas id="canvas"></canvas>
    </div>
  );
}

export default TrackingComponent;
