// let bluegreen=false,redyellow=false;
$(window).on('load',function(){
    var delayMs = 1000; 
    
    setTimeout(function(){
        $('#myModal').modal('show');
    }, delayMs);
    
      $("#myModal").on('click','.bg',function(){
 $('#myModal').modal('hide');
   console.log("Charu");
  //  bluegreen=true;
  bluegreen();
 });
 $("#myModal").on('click','.ry',function() {
  $('#myModal').modal('hide');
console.log("i");
// redyellow=true;
redyellow();
});
});    
function bluegreen(){
 $(".red1,.yellow1").css("display","none");
    $(".commentHead").css("font-size","2rem");
   $(".commentHead").html("PLAYER 1 Click on dice");
main1('bg');

 }
 function redyellow(){
 $(".green1,.blue1").css("display","none");
   $(".commentHead").css("font-size","2rem");
   $(".commentHead").html("PLAYER 1 Click on dice");
main1('ry');
}
let col;

function quit(){


var modal = document.getElementById("quit-myModal");

var btn = document.getElementById("quit-myBtn");


var span = document.getElementsByClassName("quit-close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
let a=0;

   

    function d(random){


document.querySelector("#G1").style.top= document.querySelector("#cell"+(random+1)).style.top;
   document.querySelector("#G1").style.left= document.querySelector("#cell"+(random+1)).style.left;}

   function main1(col){
  if(col=='bg'){
  let F1=0;   //Player1 starts
  // while(END!=true){
  if(F1==0){
   U(0,'G1');
    F1=1;
 }
if(F1==1){
  F1=0;
  U(1,'B1');

}}                                                 
if(col=='ry'){
 if(F1==0){
    U(0,'R1');
    F1=1;
 }
if(F1==1){
  F1=0;
  U(1,'Y1');

}}}
      
const GreenPath=[];
for(let i=1;i<=13;i++)
{
    var El = document.getElementById("Gre"+i);
    GreenPath.push(El);
}
const YellowPath=[];
for(let i=1;i<=13;i++)
{
    var El = document.getElementById("Yel"+i);
    YellowPath.push(El);
}
const BluePath=[];
for(let i=1;i<=13;i++)
{
    var El = document.getElementById("Blu"+i);
   BluePath.push(El);
}
const RedPath=[];
for(let i=1;i<=13;i++)
{
    var El = document.getElementById("Red"+i);
   RedPath.push(El);
}
const RedWinPath=[];
for(let i=1;i<=13;i++)
{
    var El = document.getElementById("Redwin"+i);
   RedWinPath.push(El);
}
const GreenWinPath=[];
for(let i=1;i<=13;i++)
{
    var El = document.getElementById("Grewin"+i);
   GreenWinPath.push(El);
}
const BlueWinPath=[];
for(let i=1;i<=13;i++)
{
    var El = document.getElementById("Bluwin"+i);
   BlueWinPath.push(El);
}
const YellowWinPath=[];
for(let i=1;i<=13;i++)
{
    var El = document.getElementById("Yelwin"+i);
   YellowWinPath.push(El);
}




// let n,color;
   function U(n,color){
  //PLAYER 1 F1=0  PLAYER F1=1
  let startPath;
  if(n==0 && color=='bg'){
  //green
  }
  if(n==1 && color=='bg'){
//blue
  }
  if(n==0 && color=='ry'){

  }
  if(n==1 && color=='ry'){

  }
$("#dice").click(function (){ 
let randomNumber1;
randomNumber1=Math.floor(Math.random()*6+1);           
console.log(randomNumber1);
switch(randomNumber1){
 case 1:
if(a>0)
    {    d(randomNumber1)}
    document.querySelectorAll("img")[0].setAttribute("src","dice1.png");
 break;

case 2:
if(a>0){  d(randomNumber1)}
document.querySelectorAll("img")[0].setAttribute("src","dice2.png");
break;
case 3:document.querySelectorAll("img")[0].setAttribute("src","dice3.png");
if(a>0){ d(randomNumber1)}
break;
case 4:document.querySelectorAll("img")[0].setAttribute("src","dice4.png");
if(a>0){ d(randomNumber1)}
break;
case 5:document.querySelectorAll("img")[0].setAttribute("src","dice5.png");
if(a>0){  d(randomNumber1)}
break;
case 6:document.querySelectorAll("img")[0].setAttribute("src","dice6.png");

if(a==0){
    a++;
    // document.querySelector("#Comments").innerHTML="Game started!!! Click on dice";
    document.querySelector("#Comments").classList.add("commentHead");
document.querySelector(`#${color}`).style.top= document.querySelector(`#${startPath}`).style.top;
   document.querySelector(`#${color}`).style.left= document.querySelector(`#${startPath}`).style.left;
}
else{
 d(randomNumber1)
}
break;

}

});}
    