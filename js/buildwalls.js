function buildwalls(){
_wall1 = [];
for (var i=0;i<7;i++){
  var ii= ((i%2==0)? 4 : 5);
  for(var j=0;j<ii;j++){
   if( ii==4)  _wall1.push(new tile(0, 30+i*15, j*30,0));
   else  _wall1.push(new tile(0, 30+i*15, -15+j*30,0));
  }
}
for(var i=0;i<_wall1.length;i++){
   wall1.add(_wall1[i].tile);
}

wall1.position.set(200,0,-30);
scene.add(wall1);

_wall2 = [];
for (var i=0;i<7;i++){
  var ii= ((i%2==0)? 4 : 5);
  for(var j=0;j<ii;j++){
   if( ii==4)  _wall2.push(new tile(0, 30+i*15, j*30,0));
   else  _wall2.push(new tile(0, 30+i*15, -15+j*30,0));
  }
}
for(var i=0;i<_wall2.length;i++){
   wall2.add(_wall2[i].tile);
}
wall2.rotateY(1.57);
wall2.position.set(-60,0,-100);
scene.add(wall2);

_wall3 = [];
for (var i=0;i<7;i++){
  var ii= ((i%2==0)? 4 : 5);
  for(var j=0;j<ii;j++){
   if( ii==4)  _wall3.push(new tile(0, 30+i*15, j*30,0));
   else  _wall3.push(new tile(0, 30+i*15, -15+j*30,0));
  }
}
for(var i=0;i<_wall3.length;i++){
   wall3.add(_wall3[i].tile);
}
wall3.rotateY(3.14);
wall3.position.set(-100,0,170);
scene.add(wall3);

wall4 = [];
for (var i=0;i<7;i++){
  var ii= ((i%2==0)? 1 : 2);
  for(var j=0;j<ii;j++){
   if( ii==1	)  wall4.push(new tile(125,  30+i*15, 15+ j*30,3));
   else  		wall4.push(new tile(125,     30+i*15, 0+j*30,3));
  }
}
for (var i=0;i<7;i++){
  var ii= ((i%2==0)? 1 : 2);
  for(var j=0;j<ii;j++){
   if( ii==1	)  wall4.push(new tile(125,  30+i*15, -75+j*30,3));
   else  		wall4.push(new tile(125, 30+i*15, -90+j*30,3));
  }
}
for(var i=0;i<wall4.length;i++){
  scene.add(wall4[i].tile);
}
_wall5 = [];
for (var i=0;i<11;i++){
  var ii= ((i%2==0)? 3 : 4);
  for(var j=0;j<ii;j++){
   if( ii==3)  _wall5.push(new tile(0, 30+i*15, j*36,0));
   else  _wall5.push(new tile(0, 	30+i*15, -18+j*36,0));
  }
}
for(var i=0;i<_wall5.length;i++){
   wall5.add(_wall5[i].tile);
}
wall5.rotateZ(1.57);
wall5.rotateX(1.57);
wall5.position.set(-30,275,-150);
scene.add(wall5);
}
