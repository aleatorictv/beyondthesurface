function wall(w){
  this.w = w; //which wall 1 = left, 2 back, 3 right, 4 door, 5 ceiling
  this.tilePosArray = [];
  this.tiles = new THREE.Group();
    switch (w) {
      case 1: //left wal
        for (var i=0;i<7;i++){
          var ii= ((i%2==0)? 4 : 5);
          for(var j=0;j<ii;j++){
           if( ii==4)  this.tilePosArray.push(new tile(0, 30+i*15, j*30,0));
           else  this.tilePosArray.push(new tile(0, 30+i*15, -15+j*30,0));
          }
        }
        break;
      case 2: //back wall
        for (var i=0;i<7;i++){
          var ii= ((i%2==0)? 4 : 5);
          for(var j=0;j<ii;j++){
           if( ii==4)  this.tilePosArray.push(new tile(0, 30+i*15, j*30,0));
           else  this.tilePosArray.push(new tile(0, 30+i*15, -15+j*30,0));
          }
        }
        break;
      case 3: //right wall
        for (var i=0;i<7;i++){
          var ii= ((i%2==0)? 4 : 5);
          for(var j=0;j<ii;j++){
           if( ii==4)  this.tilePosArray.push(new tile(0, 30+i*15, j*30,0));
           else  this.tilePosArray.push(new tile(0, 30+i*15, -15+j*30,0));
          }
        }
        break;
      case 4: //door wall
        for (var i=0;i<7;i++){
          var ii= ((i%2==0)? 1 : 2);
          for(var j=0;j<ii;j++){
           if( ii==1	)  this.tilePosArray.push(new tile(125,  30+i*15, 15+ j*30,3));
           else  		this.tilePosArray.push(new tile(125,     30+i*15, 0+j*30,3));
          }
        }
        for (var i=0;i<7;i++){
          var ii= ((i%2==0)? 1 : 2);
          for(var j=0;j<ii;j++){
           if( ii==1	)  this.tilePosArray.push(new tile(125,  30+i*15, -75+j*30,3));
           else  		this.tilePosArray.push(new tile(125, 30+i*15, -90+j*30,3));
          }
        }
        break;
      case 5: //ceiling
        for (var i=0;i<11;i++){
          var ii= ((i%2==0)? 3 : 4);
          for(var j=0;j<ii;j++){
           if( ii==3)  this.tilePosArray.push(new tile(0, 30+i*15, j*36,0));
           else  this.tilePosArray.push(new tile(0, 	30+i*15, -18+j*36,0));
          }
        }
        break;
  }
  for(var i=0;i<this.tilePosArray.length;i++){
     this.tiles.add(this.tilePosArray[i].tile);
  }

  switch (w) {
    case 1:
      this.tiles.position.set(200,0,-30);

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    case 5:
     this.tiles.rotateZ(1.57);
     this.tiles.rotateX(1.57);
     this.tiles.position.set(-30,275,-150);

      break;

  }

}
