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
    var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.x=-50;
    camera.position.y=50;
    camera.position.z= 50;

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
	tile1= new tile(0,10,0,new Vector3(0,1,0));
  for(var i=0; i < tile1.leds.length;i++){
	   scene.add(tile1.leds[i]);
  }

  var flmaterial = new THREE.MeshBasicMaterial( {wireframe: true, color: 0xcccccc, side: THREE.DoubleSide} );
  var floor = new THREE.Mesh(new THREE.PlaneGeometry(100, 100,10,10), flmaterial);

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
