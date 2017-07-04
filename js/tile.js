
function tile(x,y,z){
	this.x = x;
	this.y = y;
	this.z = z;
	this.geometry = new THREE.BoxGeometry( 1, 1 ,1);
	this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	this.cube = new THREE.Mesh(this.geometry, this.material );
	this.ledPos = [];
	this.leds = [];
	for (var i=0;i<8;i++){
		this.ledPos.push(new Array(this.x,this.y+i*3, this.z));
		this.leds.push(new THREE.Mesh(this.geometry, this.material ) );
		this.leds[i].position.x = this.ledPos[i][0];
		this.leds[i].position.y = this.ledPos[i][1];
		this.leds[i].position.z = this.ledPos[i][2];
	}
	for (var i=0;i<7;i++){
		this.ledPos.push(new Array(this.x,this.y+24, this.z+i*3+3));
		this.leds.push(new THREE.Mesh(this.geometry, this.material ) );
		this.leds[i+8].position.x = this.ledPos[i+8][0];
		this.leds[i+8].position.y = this.ledPos[i+8][1];
		this.leds[i+8].position.z = this.ledPos[i+8][2];
	}
	for (var i=0;i<8;i++){
		this.ledPos.push(new Array(this.x,this.y+21- i*3, this.z + 24));
		this.leds.push(new THREE.Mesh(this.geometry, this.material ) );
		this.leds[i+15].position.x = this.ledPos[i+15][0];
		this.leds[i+15].position.y = this.ledPos[i+15][1];
		this.leds[i+15].position.z = this.ledPos[i+15][2];
	}
	for (var i=0;i<7;i++){
		this.ledPos.push(new Array(this.x,this.y-3, this.z + i*3+3));
		this.leds.push(new THREE.Mesh(this.geometry, this.material ) );
		this.leds[i+23].position.x = this.ledPos[i+23][0];
		this.leds[i+23].position.y = this.ledPos[i+23][1];
		this.leds[i+23].position.z = this.ledPos[i+23][2];
	}
}
tile.prototype.xyz = function(x,y,z){
	this.x=x;
	this.y=y;
	this.z=z;
	for(var i =0;i<8;i++){
		this.ledPos[i][0]+=x;
		this.ledPos[i][1]+=y;
		this.ledPos[i][2]+=z;

	}
}
