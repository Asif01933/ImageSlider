
const ArrayImages=['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.png','19.jpg','20.jpg','21.png','22.png'];

const render_element=()=>{
  
  
  let div=document.createElement('div');
  div.className='imgdiv';
  
  document.querySelector(".container").appendChild(div);
  
  document.querySelector(".imgdiv").style.position="relative";
  for(var i=1;i<=22;i++){
     div= document.createElement("div");
      div.className="img";
      document.querySelector(".imgdiv").appendChild(div);
      
  }
  var cnt=0;
  var left=0,top=0;
  for(var i=0;i<22;i++){
      document.getElementsByClassName("img")[i].style.display="block";
      document.getElementsByClassName("img")[i].style.width="125px";
      document.getElementsByClassName("img")[i].style.height="125px";
      
      if(i<10){
        if(i==0){
            document.getElementsByClassName("img")[i].style.left="0px";
            document.getElementsByClassName("img")[i].style.top="0px";
        }
        if(i==1){
            document.getElementsByClassName("img")[i].style.left="125px";
            document.getElementsByClassName("img")[i].style.top="0px";
        }
        if(i==2){
            document.getElementsByClassName("img")[i].style.left="250px";
            document.getElementsByClassName("img")[i].style.top="0px";
        }
        if(i==3){
            document.getElementsByClassName("img")[i].style.left="375px";
            document.getElementsByClassName("img")[i].style.top="0px";
        }
        if(i==4){
            document.getElementsByClassName("img")[i].style.left="500px";
            document.getElementsByClassName("img")[i].style.top="0px";
        }
        if(i==5){
            document.getElementsByClassName("img")[i].style.left="625px";
            document.getElementsByClassName("img")[i].style.top="0px";
        }
        if(i==6){
            document.getElementsByClassName("img")[i].style.left="750px";
            document.getElementsByClassName("img")[i].style.top="0px";
        }
        if(i==7){
            document.getElementsByClassName("img")[i].style.left="875px";
            document.getElementsByClassName("img")[i].style.top="0px";
        }
        if(i==8){
            document.getElementsByClassName("img")[i].style.left="1000px";
            document.getElementsByClassName("img")[i].style.top="0px";
        }
        if(i==9){
            document.getElementsByClassName("img")[i].style.left="1125px";
            document.getElementsByClassName("img")[i].style.top="0px";
        }
        
        
      }
      else if(i==10){
        

        document.getElementsByClassName("img")[i].style.left="0px";
        document.getElementsByClassName("img")[i].style.top="125px";
        
      }
      else if(i==11){
        document.getElementsByClassName("img")[i].style.left="1125px";
        document.getElementsByClassName("img")[i].style.top="125px";
        left=0;
        top=250;
      }
      else{
        if(i==12){
            document.getElementsByClassName("img")[i].style.left="0px";
            document.getElementsByClassName("img")[i].style.top="250px";
        }
        if(i==13){
            document.getElementsByClassName("img")[i].style.left="125px";
            document.getElementsByClassName("img")[i].style.top="250px";
        }
        if(i==14){
            document.getElementsByClassName("img")[i].style.left="250px";
            document.getElementsByClassName("img")[i].style.top="250px";
        }
        if(i==15){
            document.getElementsByClassName("img")[i].style.left="375px";
            document.getElementsByClassName("img")[i].style.top="250px";
        }
        if(i==16){
            document.getElementsByClassName("img")[i].style.left="500px";
            document.getElementsByClassName("img")[i].style.top="250px";
        }
        if(i==17){
            document.getElementsByClassName("img")[i].style.left="625px";
            document.getElementsByClassName("img")[i].style.top="250px";
        }
        if(i==18){
            document.getElementsByClassName("img")[i].style.left="750px";
            document.getElementsByClassName("img")[i].style.top="250px";
        }
        if(i==19){
            document.getElementsByClassName("img")[i].style.left="875px";
            document.getElementsByClassName("img")[i].style.top="250px";
        }
        if(i==20){
            document.getElementsByClassName("img")[i].style.left="1000px";
            document.getElementsByClassName("img")[i].style.top="250px";
        }
        if(i==21){
            document.getElementsByClassName("img")[i].style.left="1125px";
            document.getElementsByClassName("img")[i].style.top="250px";
        }
      }
  }
  for(var i=0;i<22;i++){
    
        const img = document.createElement('img');
        img.src=ArrayImages[i];
        document.getElementsByClassName("img")[i].appendChild(img);
    
    
  }

  
  
  
  
}


render_element();
var x = document.querySelectorAll(".img");

const randomfunc=()=>{
    let random=Math.random();
    let variable=Math.ceil(random*22);
    variable--;
    
    var topp,leftt;
    
    if(variable===1 || variable===0){
        variable=1;
        
        leftt=parseInt(x[variable].style.left);
        if(leftt===125){
            $(x[variable]).animate({left: "0px"});
            $(x[variable-1]).animate({left: "125px"});
        }
        else{
            $(x[variable]).animate({left: "125px"});
            $(x[variable-1]).animate({left: "0px"});
        }

    }
    else if(variable===2 || variable===3){
        variable=3;
        leftt=parseInt(x[variable].style.left);
        if(leftt===250){
            $(x[variable]).animate({left: "375px"});
            $(x[variable-1]).animate({left: "250px"});
        }
        else{
            $(x[variable]).animate({left: "250px"});
            $(x[variable-1]).animate({left: "375px"});
        }
    }
    else if(variable===4 || variable===5){
        variable=5;
        leftt=parseInt(x[variable].style.left);
        if(leftt===625){
            $(x[variable]).animate({left: "500px"});
            $(x[variable-1]).animate({left: "625px"});
        }
        else{
            $(x[variable]).animate({left: "625px"});
            $(x[variable-1]).animate({left: "500px"});
        }
    }
    else if(variable===7 || variable===6){
        variable=7;
        leftt=parseInt(x[variable].style.left);
        if(leftt===875){
            $(x[variable]).animate({left: "750px"});
            $(x[variable-1]).animate({left: "875px"});
        }
        else{
            $(x[variable]).animate({left: "875px"});
            $(x[variable-1]).animate({left: "750px"});
        }

    }
    else if(variable===9 || variable==8){
        variable=8;
        leftt=parseInt(x[variable].style.left);
        if(leftt===1000){
            $(x[variable]).animate({left: "1125px"});
            $(x[variable+1]).animate({left: "1000px"});
        }
        else{
            $(x[variable]).animate({left: "1000px"});
            $(x[variable+1]).animate({left: "1125px"});
        }

    }
    
    else if(variable===12 || variable===10){
        variable=12;
        topp=parseInt(x[variable].style.top);
        if(topp===250){
            $(x[variable]).animate({top: "125px"});
            $(x[variable-2]).animate({top: "250px"});
        }
        else{
            $(x[variable]).animate({top: "250px"});
            $(x[variable-2]).animate({top: "125px"});
        }

    }

    else if(variable===21 || variable===11){
        variable=21;
        topp=parseInt(x[variable].style.top);
        if(topp===250){
            $(x[variable]).animate({top: "125px"});
            $(x[variable-10]).animate({top: "250px"});
        }
        else{
            $(x[variable]).animate({top: "250px"});
            $(x[variable-10]).animate({top: "125px"});
        }

    }
    else if(variable===13 || variable===14){
        variable=13;
        leftt=parseInt(x[variable].style.left);
        if(leftt===125){
            $(x[variable]).animate({left: "250px"});
            $(x[variable+1]).animate({left: "125px"});
        }
        else{
            $(x[variable]).animate({left: "125px"});
            $(x[variable+1]).animate({left: "250px"});
        }

    }
    else if(variable===16 || variable===15){
        variable=15;
        leftt=parseInt(x[variable].style.left);
        if(leftt===375){
            $(x[variable]).animate({left: "500px"});
            $(x[variable+1]).animate({left: "375px"});
        }
        else{
            $(x[variable]).animate({left: "375px"});
            $(x[variable+1]).animate({left: "500px"});
        }
    }
    else if(variable===17 || variable===18){
        variable=17;
        leftt=parseInt(x[variable].style.left);
        if(leftt===625){
            $(x[variable]).animate({left: "750px"});
            $(x[variable+1]).animate({left: "625px"});
        }
        else{
            $(x[variable]).animate({left: "625px"});
            $(x[variable+1]).animate({left: "750px"});
        }

    }
    else if(variable===19 || variable===20){
        variable=19;
        leftt=parseInt(x[variable].style.left);
        if(leftt===875){
            $(x[variable]).animate({left: "1000px"});
            $(x[variable+1]).animate({left: "875px"});
        }
        else{
            $(x[variable]).animate({left: "875px"});
            $(x[variable+1]).animate({left: "1000px"});
        }

    }
    

    

    
    /*function(){
        $("div").animate({left: '250px'});
      }*/
      
    
  
  }
  randomfunc();
  setInterval(randomfunc,3000);
  var parent = 0;
 
  var ch=x[1].style.left;
  





