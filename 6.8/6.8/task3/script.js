
var n = 0;

document.querySelector('#Lights').onclick = function() {
    
    if (n == 0){
        document.querySelector('#trafficLight1').style.background = "green" ;
        document.querySelector('#trafficLight3').style.background = "black" ;
    }
    else if (n == 1){
        document.querySelector('#trafficLight2').style.background = "yellow" ;
        document.querySelector('#trafficLight1').style.background = "black" ;
    }
    else if (n == 2){
        document.querySelector('#trafficLight3').style.background = "red" ;
        document.querySelector('#trafficLight2').style.background = "black" ;
    };



    if (n == 2){
        n = 0;
    }
    else{
        n += 1;
    };
    
  };
  