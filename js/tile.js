
function tile(){
	this.X = 0;
	this.y = 0;
	this.returnPos = getPos();
	this.geometry = new THREE.BoxGeometry( 10, 10 ,10);
	this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	this.cube = new THREE.Mesh(this.geometry, this.material );
}

function mycube(){
	return this.cube;
}

function getPos(){
	return this.X + " " + this.Y;
}