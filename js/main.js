    // Set the scene size.
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;

    // Set some camera attributes.
    const VIEW_ANGLE = 45;
    const ASPECT = WIDTH / HEIGHT;
    const NEAR = 0.1;
    const FAR = 10000;

    // Get the DOM element to attach to
    const container =
        document.querySelector('#container');

    // Create a WebGL renderer, camera
    // and a scene
    const renderer = new THREE.WebGLRenderer();
    var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 2000 );
    camera.position.x=-300;
    camera.position.y= 300;
    camera.position.z= 300;

    const scene = new THREE.Scene();

    // Add the camera to the scene.
    scene.add(camera);

    // Start the renderer.
    renderer.setSize(WIDTH, HEIGHT);
	  renderer.setClearColor(0x3399ff);

    // Attach the renderer-supplied
    // DOM element.
    container.appendChild(renderer.domElement);

    // create a point light
    const pointLight =
      new THREE.PointLight(0xFFFFFF);

    // set its position
    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;

    // add to the scene
    scene.add(pointLight);
    wall1 = [];
    for (var i=0;i<7;i++){
      var ii= ((i%2==0)? 4 : 5);
      for(var j=0;j<ii;j++){
       if( ii==4)  wall1.push(new tile(100, 30+i*15, j*30));
       else  wall1.push(new tile(100, 30+i*15, -15+j*30));
      }
    }
    for(var i=0;i<wall1.length;i++){
      scene.add(wall1[i].allLeds);
    }
    wall2 = [];
    for (var i=0;i<7;i++){
      var ii= ((i%2==0)? 4 : 5);
      for(var j=0;j<ii;j++){
       if( ii==4)  wall2.push(new tile( j*30,30+i*15,-100));
       else  wall2.push(new tile(-15+j*30,30+i*15,-100 ));
      }
    }
    for(var i=0;i<wall2.length;i++){
      wall2[i].allLeds.rotateY(-1.57);
      scene.add(wall2[i].allLeds);
    }
	//tile1= new tile(0,0,0,0);

  var flmaterial = new THREE.MeshBasicMaterial( {wireframe: true, color: 0xcccccc, side: THREE.DoubleSide} );
  var floor = new THREE.Mesh(new THREE.PlaneGeometry(1000, 1000,10,10), flmaterial);

  floor.rotateX(1.57);
  var controls = new THREE.OrbitControls( camera, renderer.domElement );
  scene.add(floor);


    // Finally, add the sphere to the scene.
    //scene.add(sphere);

    function update () {
      // Draw!
      renderer.render(scene, camera);
      controls.update();
      // Schedule the next frame.
      requestAnimationFrame(update);
    }

    // Schedule the first frame.
    requestAnimationFrame(update);
