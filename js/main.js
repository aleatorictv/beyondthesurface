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
    camera.position.x= 225;
    camera.position.y= 600;
    camera.position.z= -35;

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
	wall1 = new THREE.Group();
	wall2 = new THREE.Group();
	wall3 = new THREE.Group();
	wall4 = new THREE.Group();
	wall5 = new THREE.Group();

  buildwalls();

  var walls = [wall1,wall2,wall3,wall4,wall5];

  var flmaterial = new THREE.MeshBasicMaterial( {wireframe: false, color: 0x777777,side: THREE.DoubleSide} );
  var floor = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000,10,10), flmaterial);

  floor.rotateX(1.57);
  var controls = new THREE.OrbitControls( camera, renderer.domElement );
  scene.add(floor);

for(tile t in wall1){
    t.changeColor(0xFFFFFF);
}
    function update () {
      // Draw!
      renderer.render(scene, camera);
      controls.update();

	  //console.log(camera.position);
      // Schedule the next frame.
      requestAnimationFrame(update);
    }

    // Schedule the first frame.
    requestAnimationFrame(update);
