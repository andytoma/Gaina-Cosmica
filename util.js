// biblioteca cu funvtii utile

function touch(el1, el2){
  //
  let rect1 = el1.getBoundingClientRect();
  let rect2 = el2.getBoundingClientRect();

if (!(

  rect1.x + rect1.width < rect2.x
  ||
  rect1.x > rect2.x + rect2.width
)
&&
!(
  rect1.y + rect1.height < rect2.y
  ||
  rect1.y > rect2.y + rect2.height
)
){
  return true;
}else {
  return false;
}
}


function random(min,max){
  return min + Math.round(Math.random() * (max-min) );
}
