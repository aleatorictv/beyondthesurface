
function tile(x,y,z,w){
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w; //which wall

	this.geometry = new THREE.BoxGeometry( 1, 1 ,1);
	this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	this.ledPos = [];
	this.leds = [];
	this.left = [];
	this.top = [];
	this.right = [];
	this.bottom = [];
	this.allLeds = new THREE.Group();
	this.tile = new THREE.Group();

	for (var i=0;i<8;i++){
		this.ledPos.push(new Array(this.x,this.y+i*3, this.z));
	}
	for (var i=0;i<7;i++){
		this.ledPos.push(new Array(this.x,this.y+24,this.z+ i*3+3));
	}
	for (var i=0;i<8;i++){
		this.ledPos.push(new Array(this.x,this.y+21-i*3, this.z+24));
	}
	for (var i=0;i<7;i++){
		this.ledPos.push(new Array(this.x,this.y-3,this.z+i*3+3));
	}
	this.setpositions();
}
tile.prototype.changeColor = function(c){
	this.allLeds.material.color.setHex(c);
}

tile.prototype.setpositions = function(){
	for(var i =0;i<30;i++){
		this.leds.push(new THREE.Mesh(this.geometry, this.material ) );
		this.leds[i].position.set( this.ledPos[i][0], this.ledPos[i][1], this.ledPos[i][2]);
		this.allLeds.add(this.leds[i]);
	}
	this.tile.add(this.allLeds);
	this.allLeds.position.set(-.5,-12,-.5);
	this.allLeds.position.set(this.x,this.y,this.z);

	if(this.w==1) this.tile.rotateY(1.57);
	else if(this.w==2) this.tile.rotateY(3.14);
	else if(this.w==3) this.tile.rotateY(-1.57);
	else if(this.w==4) this.tile.rotateZ(1.57);
}
