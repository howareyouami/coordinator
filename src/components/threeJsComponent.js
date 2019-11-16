import React, {useEffect,useState} from 'react';
var THREE = require('three');

/*
 * Convert2dTo3d is used to display in 3d
 */
function ThreeJsComponent(props) {
const [ourSourceSphere, setOurSourceSphere]=useState(null)
useEffect(()=>{
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 40, window.innerWidth/window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById("threejsarea").appendChild( renderer.domElement );

   // var texture = new THREE.TextureLoader().load( 'texture/square.png' );

    var geometry1 = new THREE.BoxGeometry( 5, 5, 5 );
    var material1 = new THREE.MeshBasicMaterial( { wireframe: true , transparent: true, opacity: .5, color: 0xffff00} );
    var cube1 = new THREE.Mesh( geometry1, material1 );
    
    //scene.add( cube1 );


    var geometry = new THREE.SphereGeometry( 1.5, 32, 32 );
    var material = new THREE.MeshBasicMaterial({ wireframe: true , transparent: false, opacity: 1, color: 0xffffff} );
    var sphere = new THREE.Mesh( geometry, material );
    //scene.add( sphere );

    var sourceGeometry = new THREE.SphereGeometry( .5, 32, 32 );
    var sourceMaterial = new THREE.MeshBasicMaterial({  wireframe: true, transparent: false, opacity: 100, color: 0xffffff});
    var sourceSphere = new THREE.Mesh( sourceGeometry, sourceMaterial );
    scene.add( sourceSphere );
    sourceSphere.position.set(5, 0, 0);
    setOurSourceSphere(sourceSphere)
    console.log("sourceSphere.position",sourceSphere.position)
    camera.position.z = 20;
    var animate = function () {
        requestAnimationFrame( animate );

        // cube1.rotation.x += .01;
        // cube1.rotation.y += .01;
        
        // sphere.rotation.x += .01;
        // sphere.rotation.y += .01;

        renderer.render( scene, camera );
    };

    animate();
},[])

useEffect(()=>{
  if(ourSourceSphere){
    ourSourceSphere.position.set(props.coordiantes.x,props.coordiantes.y,props.coordiantes.z)
  }
}, [props.coordiantes.z,props.coordiantes.x,props.coordiantes.y])


  return (
    <div>
        <h1>ThreeJsComponent</h1>
        <div id="threejsarea"></div>
    </div>
  );
}

export default ThreeJsComponent;
