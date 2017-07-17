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
tile.prototype.left = function(c){
	for(var i =0; i < 8; i++){
		this.allLeds.children[i].material.color = c;
	}
}
tile.prototype.top = function(c){
	for(var i =8; i < 15; i++){
		this.allLeds.children[i].material.color = c;
	}
}
tile.prototype.right = function(c){
	for(var i =15; i < 22; i++){
		this.allLeds.children[i].material.color = c;
	}
}
tile.prototype.bottom = function(c){
	for(var i =22; i < 30; i++){
		this.allLeds.children[i].material.color = c;
	}
}
tile.prototype.side = function(s,c){
	if(s==0) this.left(c);
	else if(s==1) this.top(c);
	else if(s==2) this.right(c);
	else if(s==3) this.bottom(c);
}
tile.prototype.pixelBySide = function(s,n,c){
	if(s==0 && n<8) this.allLeds.children[n].material.color = c;
	else if(s==1 && n<7) this.allLeds.children[n+7].material.color = c;
	else if(s==2 && n<8) this.allLeds.children[n+15].material.color = c;
	else if(s==3 && n<7) this.allLeds.children[n+22].material.color = c;
	
}
tile.prototype.pixelByNum = function(n,c){
	this.allLeds.children[n].material.color = c;
	
}
tile.prototype.setpositions = function() {
	for (var i = 0; i < 30; i++) {
		this.leds.push(new THREE.Mesh(this.geometry, new THREE.MeshBasicMaterial({color:0x000000}) ));
		this.leds[i].position.set(this.ledPos[i][0], this.ledPos[i][1] - 10.5, this.ledPos[i][2] - 13.5);
		this.allLeds.add(this.leds[i]);
	}
	this.tile.add(this.allLeds);
	//var orig = new THREE.Mesh(this.geometry, this.material ) ;
	//orig.position.set(this.x,this.y,this.z);
	//this.tile.add( orig);
	this.allLeds.position.set(this.x, this.y, this.z);

}
