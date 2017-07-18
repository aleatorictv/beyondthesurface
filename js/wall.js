function wall(w) {
  this.w = w; //which wall 1 = left, 2 back, 3 right, 4 door, 5 ceiling
  this.tilePosArray = []; // 0 is bottom left facing inward, counts up to the right then up
  this.tiles = new THREE.Group();
  tilespacingY = 3;
  tilespacingX = 8;
  tilesize = 28;
  midptX = tilesize * 3 + tilespacingX * 3;
  midptY = tilesize * 3 + tilespacingY * 3;
  intervalY = tilesize + tilespacingY;
  intervalX = tilesize * 2 + tilespacingX * 2;
  offsetX = tilesize + tilespacingX;
  wallwidth = tilesize * 9 + tilespacingX * 8 + 20;

  switch (w) {
    case 1: //left wal
      for (var i = 0; i < 7; i++) {
        var ii = ((i % 2 == 0) ? 4 : 5);
        for (var j = 0; j < ii; j++) {
          if (ii == 4) this.tilePosArray.push(new tile(0, i * intervalY -
            midptY, j * intervalX - midptX));
<<<<<<< HEAD
          else {
			  this.tileArray.push(new tile(0, i * intervalY - midptY, 
           	   offsetX - j * intervalX + midptX));
			}
=======
          else this.tilePosArray.push(new tile(0, i * intervalY - midptY, -
            offsetX + j * intervalX - midptX));
>>>>>>> 2332712be811cf6591158b31ecb8836f343f417a
        }
      }
      break;
    case 2: //back wall
      for (var i = 0; i < 7; i++) {
        var ii = ((i % 2 != 0) ? 4 : 5);
        for (var j = 0; j < ii; j++) {
          if (ii == 4) this.tilePosArray.push(new tile(0, i * intervalY -
            midptY, j * intervalX - midptX));
<<<<<<< HEAD
          else this.tileArray.push(new tile(0, i * intervalY - midptY, 
            offsetX - j * intervalX + midptX));
=======
          else this.tilePosArray.push(new tile(0, i * intervalY - midptY, -
            offsetX + j * intervalX - midptX));
>>>>>>> 2332712be811cf6591158b31ecb8836f343f417a
        }
      }
      break;
    case 3: //right wall
      for (var i = 0; i < 7; i++) {
        var ii = ((i % 2 == 0) ? 4 : 5);
        for (var j = 0; j < ii; j++) {
          if (ii == 4) this.tilePosArray.push(new tile(0, i * intervalY -
            midptY, j * intervalX - midptX));
<<<<<<< HEAD
          else this.tileArray.push(new tile(0, i * intervalY - midptY, 
            offsetX - j * intervalX + midptX));
=======
          else this.tilePosArray.push(new tile(0, i * intervalY - midptY, -
            offsetX + j * intervalX - midptX));
>>>>>>> 2332712be811cf6591158b31ecb8836f343f417a
        }
      }
      break;
    case 4: //door wall
      for (var i = 0; i < 7; i++) {
        var ii = ((i % 2 != 0) ? 2 : 4);
        for (var j = 0; j < ii; j++) {
<<<<<<< HEAD
          if (ii == 2 && j==0) this.tileArray.push(new tile(0, i * intervalY -
            midptY, - midptX - j * intervalX +7));
          else if (ii == 2 && j==1) this.tileArray.push(new tile(0, i * intervalY -
            midptY, - midptX - (j-1) * intervalX +217));
          else if(ii==4 && j<2) this.tileArray.push(new tile(0, i * intervalY - midptY, 
            offsetX + midptX - j * intervalX));
          else if(ii==4 && j>=2) this.tileArray.push(new tile(0, i * intervalY - midptY, 
=======
          if (ii == 1) this.tilePosArray.push(new tile(0, i * intervalY -
            midptY, -midptX - j * intervalX));
          else this.tilePosArray.push(new tile(0, i * intervalY - midptY, -
            offsetX - midptX + j * intervalX));
        }
      }
      for (var i = 0; i < 7; i++) {
        var ii = ((i % 2 != 0) ? 1 : 2);
        for (var j = 0; j < ii; j++) {
          if (ii == 1) this.tilePosArray.push(new tile(0, i * intervalY -
            midptY, -midptX - j * intervalX + 210));
          else this.tilePosArray.push(new tile(0, i * intervalY - midptY, -
            offsetX - midptX + j * intervalX + 210));
>>>>>>> 2332712be811cf6591158b31ecb8836f343f417a
        }
      }

      break;
    case 5: //ceiling
      for (var i = 0; i < 7; i++) {
        var ii = ((i % 2 != 0) ? 3 : 4);
        for (var j = 0; j < ii; j++) {
          if (ii == 3) this.tilePosArray.push(new tile(0, i * 36 -
            (tilesize * 3.5 + tilespacingX * 3) + 15, j * (tilesize * 2 +
              7 * 2) - (tilesize * 3.5 + tilespacingX * 3) + offsetX + 20));
          else this.tilePosArray.push(new tile(0, i * 36 -
            (tilesize * 3.5 + tilespacingX * 3) + 15, j *
            (tilesize * 2 + 7 * 2) - (tilesize * 3.5 + tilespacingX * 3) +
            20));
        }
      }
      break;
  }
  for (var i = 0; i < this.tilePosArray.length; i++) {
    this.tiles.add(this.tilePosArray[i].tile);
  }

  switch (w) {
    case 1:
      this.tiles.position.set(0, 120, 0);
      this.tiles.position.set(wallwidth / 2, 120, 0);

      break;
    case 2:
      this.tiles.rotateY(-1.57);
      this.tiles.position.set(0, 120, wallwidth / 2);

      break;
    case 3:
      this.tiles.rotateY(3.14);
      this.tiles.position.set(-wallwidth / 2, 120, 0);

      break;
    case 4:
      this.tiles.rotateY(-1.57);
      this.tiles.position.set(0, 120, -wallwidth / 2);

      break;
    case 5:
      this.tiles.rotateZ(1.57);
      this.tiles.rotateX(1.57);
      this.tiles.position.set(0, 240, 0);

      break;

  }
	this.totalPix = this.tileArray.length * 30;

}
wall.prototype.changeAllTiles = function(c) {
  for (var i = 0; i < this.tilePosArray.length; i++) {
    this.tilePosArray[i].changeColor(c);
  }
}
wall.prototype.allOff = function() {
  this.changeAllTiles(black);
}

wall.prototype.tileColor = function(n, c) {
  this.tilePosArray[n].changeColor(c);
}
