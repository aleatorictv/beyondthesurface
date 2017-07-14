function wall(w){
  this.w = w; //which wall 1 = left, 2 back, 3 right, 4 door, 5 ceiling
  this.tilePosArray = [];
  this.tiles = new THREE.Group();
  tilespacingY = 3;
  tilespacingX = 8;
  tilespace=0;
  tilesize=28;
  midptX=  tilesize*3 + tilespacingX*3;
  midptY=  tilesize*3 + tilespacingY*3;
  intervalY = tilesize + tilespacingY;
  intervalX = tilesize*2 + tilespacingX*2;
  offsetX = tilesize + tilespacingX;
  wallwidth=tilesize*9 + tilespacingX*8 + 20;
  
    switch (w) {
      case 1: //left wal
        for (var i=0;i<7;i++){
          var ii= ((i%2==0)? 4 : 5);
          for(var j=0;j<ii;j++){
           if( ii==4)  this.tilePosArray.push(new tile(0, i*intervalY - midptY, j*intervalX - midptX));
           else  this.tilePosArray.push(new tile(0, i*intervalY - midptY, - offsetX + j*intervalX - midptX));
          }
        }
        break;
      case 2: //back wall
        for (var i=0;i<7;i++){
          var ii= ((i%2!=0)? 4 : 5);
          for(var j=0;j<ii;j++){
           if( ii==4)  this.tilePosArray.push(new tile(0, i*intervalY - midptY, j*intervalX - midptX));
           else  this.tilePosArray.push(new tile(0, i*intervalY - midptY, - offsetX + j*intervalX - midptX));
          }
        }
        break;
      case 3: //right wall
        for (var i=0;i<7;i++){
          var ii= ((i%2==0)? 4 : 5);
          for(var j=0;j<ii;j++){
           if( ii==4)  this.tilePosArray.push(new tile(0, i*intervalY - midptY, j*intervalX - midptX));
           else  this.tilePosArray.push(new tile(0, i*intervalY - midptY, - offsetX + j*intervalX - midptX));
          }
        }
        break;
      case 4: //door wall
        for (var i=0;i<7;i++){
          var ii= ((i%2==0)? 1 : 2);
          for(var j=0;j<ii;j++){
           if( ii==1	)  this.tilePosArray.push(new tile(0, i*intervalY - midptY, -midptX - j*intervalX));
           else  		this.tilePosArray.push(new tile(0, i*intervalY - midptY, -offsetX - midptX  + j*intervalX ));
          }
        }
        for (var i=0;i<7;i++){
          var ii= ((i%2==0)? 1 : 2);
          for(var j=0;j<ii;j++){
           if( ii==1	)  this.tilePosArray.push(new tile(0, i*intervalY - midptY, -midptX - j*intervalX+210));
           else  		this.tilePosArray.push(new tile(0, i*intervalY - midptY, -offsetX - midptX  + j*intervalX +210));
          }
        }
        break;
      case 5: //ceiling
        for (var i=0;i<11;i++){
          var ii= ((i%2==0)? 3 : 4);
          for(var j=0;j<ii;j++){
           if( ii==4)  this.tilePosArray.push(new tile(0, i*3 - midptY, j*intervalX - midptX ));
           else  this.tilePosArray.push(new tile(0, i*3 - midptY, - offsetX + j*intervalX - midptX));
          }
        }
        break;
  }
  for(var i=0;i<this.tilePosArray.length;i++){
     this.tiles.add(this.tilePosArray[i].tile);
  }

  switch (w) {
    case 1:
    	this.tiles.position.set(0,120,0);
  	   this.tiles.position.set(wallwidth/2,120,0);

      break;
    case 2:
	   this.tiles.rotateY(1.57);
  	   this.tiles.position.set(0,120,wallwidth/2);

      break;
    case 3:
	   this.tiles.rotateY(3.14);
  	   this.tiles.position.set(-wallwidth/2,120,0);

      break;
    case 4:
	   this.tiles.rotateY(-1.57);
  	   this.tiles.position.set(0,120,-wallwidth/2);

      break;
    case 5:
  	  this.tiles.rotateZ(1.57);
	  this.tiles.rotateX(1.57);
  	  this.tiles.position.set(0,240,0);

      break;

  }

}
