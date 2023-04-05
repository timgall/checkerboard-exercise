const container = document.createElement('div');
container.style.display = "flex";
container.style.flexWrap= "wrap";
container.style.width = "800px";
container.style.height = "800px";
document.body.append(container)
function randomColor(){
  
  return Math.floor(Math.random()*255)
}
console.log(randomColor())

for(let i=0; i<8; i++){
  for(let j = 0; j<8; j++){
    var tile = document.createElement("div");
    tile.style.width = "12.5%";
    tile.style.width = "12.5%";
  
    if(i%2===j%2){
      tile.style.background=`rgb(${randomColor()},${randomColor()},${randomColor()})`
    }else{
        tile.style.background=`rgb(${randomColor()},${randomColor()},${randomColor()})`
    }
    container.appendChild(tile)
}
}


//instead of j do const row = Math.floor(i/8) and replace it where J is