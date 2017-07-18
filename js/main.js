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
    var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight,
      1, 2000);

    /*camera.position.x= 225;
    camera.position.y= 600;
    camera.position.z= -35;*/
    camera.position.x = -300;
    camera.position.y = 300;
    camera.position.z = -300;
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


    //var t = new tile(0,0,0);
    //scene.add(t.tile);

    // add to the scene
    scene.add(pointLight);
    wall1 = new wall(1);
    wall2 = new wall(2);
    wall3 = new wall(3);
    wall4 = new wall(4);
    wall5 = new wall(5);


    scene.add(wall1.tiles);
    scene.add(wall2.tiles);
    scene.add(wall3.tiles);
    scene.add(wall4.tiles);
    scene.add(wall5.tiles);

    //  wall2.changeTile(14, 0xFF0000);
    wall5.tileColor(1, new THREE.Color(0xFFFFFF));


    var flmaterial = new THREE.MeshBasicMaterial({
      wireframe: false,
      color: 0x777777,
      side: THREE.DoubleSide
    });
    var floor = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000, 10, 10),
      flmaterial);

    floor.rotateX(1.57);
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    scene.add(floor);

    var stp = 0;
    var col = new THREE.Color();
    var timer = setInterval(onTick, 400);
    var black = new THREE.Color(0x000000);

    function onTick() {
      col.setHSL(stp / 31, 1, .5);
      wall1.allOff();
      wall1.tileColor(stp, col);
      wall2.allOff();
      wall2.tileColor(stp, col);
      wall3.allOff();
      wall3.tileColor(stp, col);
      wall4.allOff();
      if (stp < wall4.tiles.children.length) wall4.tileColor(stp, col);
      wall5.allOff();
      if (stp < wall5.tiles.children.length) wall5.tileColor(stp, col);
      stp++;
      if (stp > 30) stp = 0;

    }

    function update() {
      // Draw!
      renderer.render(scene, camera);
      controls.update();

      //console.log(camera.position);
      // Schedule the next frame.
      requestAnimationFrame(update);
    }

    // Schedule the first frame.
    requestAnimationFrame(update);
