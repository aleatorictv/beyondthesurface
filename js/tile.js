function tile(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;

	this.geometry = new THREE.BoxGeometry(1, 1, 1);
	this.material = new THREE.MeshBasicMaterial({
		color: 0x000000
	});
	this.ledPos = [];
	this.leds = [];
	this.left = [];
	this.top = [];
	this.right = [];
	this.bottom = [];
	this.allLeds = new THREE.Group();
	this.tile = new THREE.Group();
	
	for (var i = 0; i < 5; i++) {
		this.ledPos.push(new Array(0, -3, i * 3 + 3.5));
	}
	for (var i = 0; i < 8; i++) {
		this.ledPos.push(new Array(0, i * 3, 0));
	}
	for (var i = 0; i < 8; i++) {
		this.ledPos.push(new Array(0, 24, i * 3 + 3));
	}
	for (var i = 0; i < 8; i++) {
		this.ledPos.push(new Array(0, 21 - i * 3, 27));
	}

	this.ledPos.push(new Array(0, -3, 24));
	
	this.setpositions();
}
tile.prototype.changeColor = function(c) {
	for (var i = 0; i < this.allLeds.children.length; i++) {
		this.allLeds.children[i].material.color = c;
	}
}

tile.prototype.setpositions = function() {
	for (var i = 0; i < 30; i++) {
		this.leds.push(new THREE.Mesh(this.geometry, this.material));
		this.leds[i].position.set(this.ledPos[i][0], this.ledPos[i][1] - 10.5, this.ledPos[
			i][2] - 13.5);
		this.allLeds.add(this.leds[i]);
	}
	this.tile.add(this.allLeds);
	//var orig = new THREE.Mesh(this.geometry, this.material ) ;
	//orig.position.set(this.x,this.y,this.z);
	//this.tile.add( orig);
	this.allLeds.position.set(this.x, this.y, this.z);

}
