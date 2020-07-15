var load = document.querySelector(".load");
var main = document.querySelector(".main");
console.log("hello stan is here again")
document.body.style.overflowY = "hidden";
//window.load = loader();
function loade() {
    if(load){
      document.body.style.overflowY = "auto";
      load.style.display = "none";
      main.style.display = "block";
    }else{
        load.style.display = "none";
        main.style.display = "block";
    }
  }
   // var submits = document.querySelector(".submit");
   // submits.addEventListener("click" , prevent(event));
   // function prevent(e){
   //   e.preventDefault();
   // }