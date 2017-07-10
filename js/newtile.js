function newtile(x,y,z){
	this.x = x;
	this.y = y;
	this.z = z;
	this.geometry = new THREE.BoxGeometry( 1, 1 ,1);
	this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	this.ledPos = [];
	for (var i=0;i<8;i++){
		this.ledPos.push(new Array(0,i*3,0));
	}
	for (var i=0;i<7;i++){
		this.ledPos.push(new Array(0,24,i*3+3));
	}
	for (var i=0;i<8;i++){
		this.ledPos.push(new Array(0,21-i*3,24));
	}
	for (var i=0;i<7;i++){
		this.ledPos.push(new Array(0,-3,i*3+3));
	}
}
