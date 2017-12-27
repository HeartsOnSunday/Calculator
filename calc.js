/* global $ */

var runningTotal = 0;

//ajax call each button
$("#one").click(function(){
	if(runningTotal > -1){
  $("<span>1</span>").appendTo("#printHere");
      runningTotal++;
  }
});

$("#two").click(function(){
	if(runningTotal > -1){
  $("<span>2</span>").appendTo("#printHere");
      runningTotal++;
  }
});

$("#three").click(function(){
	if(runningTotal > -1){
  $("<span>3</span>").appendTo("#printHere");
      runningTotal++;
  }
});

$("#four").click(function(){
	if(runningTotal > -1){
  $("<span>4</span>").appendTo("#printHere");
      runningTotal++;
  }
});

$("#five").click(function(){
	if(runningTotal > -1){
  $("<span>5</span>").appendTo("#printHere");
      runningTotal++;
  }
});

$("#six").click(function(){
	if(runningTotal > -1){
  $("<span>6</span>").appendTo("#printHere");
      runningTotal++;
  }
});

$("#seven").click(function(){
	if(runningTotal > -1){
  $("<span>7</span>").appendTo("#printHere");
      runningTotal++;
  }
});
$("#eight").click(function(){
	if(runningTotal > -1){
  $("<span>8</span>").appendTo("#printHere");
      runningTotal++;
  }
});

$("#nine").click(function(){
	if(runningTotal > -1){
  $("<span>9</span>").appendTo("#printHere");
      runningTotal++;
  }
});

$("#zero").click(function(){
	if(runningTotal > -1){
  $("<span>0</span>").appendTo("#printHere");
      runningTotal++;
  }
});

$("#decimal").click(function(){
	if(runningTotal > -1){
  $("<span>.</span>").appendTo("#printHere");
      runningTotal++;
  }
});

$("#equals").click(function(){
	if(runningTotal > -1){
  $("<span>=</span>").appendTo("#printHere");
      runningTotal++;
  }
});

$("#plus").click(function(){
	if(runningTotal > -1){
  $("<span>+</span>").appendTo("#printHere");
      runningTotal++;
  }
});

$("#minus").click(function(){
	if(runningTotal > -1){
  $("<span>-</span>").appendTo("#printHere");
      runningTotal++;
  }
});

$("#multiply").click(function(){
	if(runningTotal > -1){
  $("<span>*</span>").appendTo("#printHere");
      runningTotal++;
  }
});

$("#divide").click(function(){
	if(runningTotal > -1){
  $("<span>/</span>").appendTo("#printHere");
      runningTotal++;
  }
});

$("#clear").click(function(){
	($("#printHere").text(" "));
      runningTotal++;
});