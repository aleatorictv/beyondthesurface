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
	
    _wall1 = [];
    for (var i=0;i<7;i++){
      var ii= ((i%2==0)? 4 : 5);
      for(var j=0;j<ii;j++){
       if( ii==4)  _wall1.push(new tile(0, 30+i*15, j*30,0));
       else  _wall1.push(new tile(0, 30+i*15, -15+j*30,0));
      }
    }
    for(var i=0;i<_wall1.length;i++){
       wall1.add(_wall1[i].tile);
    }    
	
	wall1.position.set(200,0,-30);	
	scene.add(wall1);
	
	_wall2 = [];
    for (var i=0;i<7;i++){
      var ii= ((i%2==0)? 4 : 5);
      for(var j=0;j<ii;j++){
       if( ii==4)  _wall2.push(new tile(0, 30+i*15, j*30,0));
       else  _wall2.push(new tile(0, 30+i*15, -15+j*30,0));
      }
    }
    for(var i=0;i<_wall2.length;i++){
       wall2.add(_wall2[i].tile);
    }
	wall2.rotateY(1.57);
	wall2.position.set(-60,0,-100);
	scene.add(wall2);
	
	_wall3 = [];
    for (var i=0;i<7;i++){
      var ii= ((i%2==0)? 4 : 5);
      for(var j=0;j<ii;j++){
       if( ii==4)  _wall3.push(new tile(0, 30+i*15, j*30,0));
       else  _wall3.push(new tile(0, 30+i*15, -15+j*30,0));
      }
    }
    for(var i=0;i<_wall3.length;i++){
       wall3.add(_wall3[i].tile);
    }
	wall3.rotateY(3.14);
	wall3.position.set(-100,0,170);
	scene.add(wall3);

	wall4 = [];
    for (var i=0;i<7;i++){
      var ii= ((i%2==0)? 1 : 2);
      for(var j=0;j<ii;j++){
       if( ii==1	)  wall4.push(new tile(125,  30+i*15, 15+ j*30,3));
       else  		wall4.push(new tile(125,     30+i*15, 0+j*30,3));
      }
    }
    for (var i=0;i<7;i++){
      var ii= ((i%2==0)? 1 : 2);
      for(var j=0;j<ii;j++){
       if( ii==1	)  wall4.push(new tile(125,  30+i*15, -75+j*30,3));
       else  		wall4.push(new tile(125, 30+i*15, -90+j*30,3));
      }
    }
    for(var i=0;i<wall4.length;i++){
      scene.add(wall4[i].tile);
    }	
	_wall5 = [];
    for (var i=0;i<11;i++){
      var ii= ((i%2==0)? 3 : 4);
      for(var j=0;j<ii;j++){
       if( ii==3)  _wall5.push(new tile(0, 30+i*15, j*36,0));
       else  _wall5.push(new tile(0, 	30+i*15, -18+j*36,0));
      }
    }
    for(var i=0;i<_wall5.length;i++){
       wall5.add(_wall5[i].tile);
    }
	wall5.rotateZ(1.57);
	wall5.rotateX(1.57);
	wall5.position.set(-30,275,-150);
	scene.add(wall5);
  var flmaterial = new THREE.MeshBasicMaterial( {wireframe: false, color: 0x777777,side: THREE.DoubleSide} );
  var floor = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000,10,10), flmaterial);

  floor.rotateX(1.57);
  var controls = new THREE.OrbitControls( camera, renderer.domElement );
  scene.add(floor);


    // Finally, add the sphere to the scene.
    //scene.add(sphere);

    function update () {
      // Draw!
      renderer.render(scene, camera);
      controls.update();
	  console.log(camera.position);
      // Schedule the next frame.
      requestAnimationFrame(update);
    }

    // Schedule the first frame.
    requestAnimationFrame(update);
