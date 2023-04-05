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

function randomTransp(){
  return (Math.round(Math.random()*99)+1)+'%'
}
console.log(randomTransp())
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
  let intervalId;
// define a function that changes the color of each tile to a new random color
function changeTileColors() {
  const tiles = container.querySelectorAll("div");
  tiles.forEach((tile) => {
    tile.style.background = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
  });
}
// start the interval and store the ID in the intervalId variable
intervalId = setInterval(changeTileColors, 2000);
Animation

// animation-timing-function='ease-in-out'
//instead of j do const row = Math.floor(i/8) and replace it where J is