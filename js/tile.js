
function tile(x,y,z,w){
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w; //which wall

	this.geometry = new THREE.BoxGeometry( 1, 1 ,1);
	this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	this.cube = new THREE.Mesh(this.geometry, this.material );
	this.ledPos = [];
	this.leds = [];

	this.allLeds = new THREE.Group();

	for (var i=0;i<8;i++){
		this.ledPos.push(new Array(this.x,this.y+i*3, this.z));
		this.leds.push(new THREE.Mesh(this.geometry, this.material ) );
	}
	for (var i=0;i<7;i++){
		this.ledPos.push(new Array(this.x,this.y+24, this.z+i*3+3));
		this.leds.push(new THREE.Mesh(this.geometry, this.material ) );
	}
	for (var i=0;i<8;i++){
		this.ledPos.push(new Array(this.x,this.y+21- i*3, this.z + 24));
		this.leds.push(new THREE.Mesh(this.geometry, this.material ) );
	}
	for (var i=0;i<7;i++){
		this.ledPos.push(new Array(this.x,this.y-3, this.z + i*3+3));
		this.leds.push(new THREE.Mesh(this.geometry, this.material ) );
	}
	this.setlights();
	this.xyz(this.x,this.y,this.z);
	if(w==1) this.allLeds.rotateY(1.57);
	if(w==2) this.allLeds.rotateY(3.14);
	if(w==3) this.allLeds.rotateY(-1.57);
	if(w==4) this.allLeds.rotateZ(1.57);
}

tile.prototype.setlights = function(){
	for(var i =0;i<30;i++){
		this.leds[i].position.x = this.ledPos[i][0];
		this.leds[i].position.y = this.ledPos[i][1];
		this.leds[i].position.z = this.ledPos[i][2];
		this.allLeds.add(this.leds[i]);
	}
}

tile.prototype.xyz = function(x,y,z){
	this.x=x;
	this.y=y;
	this.z=z;
	this.allLeds.position.x = x;
	this.allLeds.position.y = y;
	this.allLeds.position.z = z;
}
tile.prototype.turn= function(v){

}
