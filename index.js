var numbutton = document.querySelectorAll(".drum").length;

for(var i=0; i<numbutton;  i++)
{

document.querySelectorAll(".drum")[i].addEventListener("click",function()
 {
         
    var buttoninnerHtml = this.innerHTML;
    makesound(buttoninnerHtml);
     buttonAnimation(buttoninnerHtml);
       
 });
}


 document.addEventListener("keydown",function(event)
 {
     
     makesound(event.key);
     buttonAnimation(event.key);

       
 }); 

       function makesound(key)
            {
                switch (key) {
                    case 'w':
                          var tom1 = new Audio("./sounds/tom-1.mp3");
                          tom1.play();
                        break;
                    case 'a':
                            var tom2 = new Audio("./sounds/tom-2.mp3");
                            tom2.play();
                          break;
                    case 's':
                            var tom3 = new Audio("./sounds/tom-3.mp3");
                            tom3.play();
                          break;
                    case 'd':
                            var tom4 = new Audio("./sounds/tom-4.mp3");
                            tom4.play();
                          break;
                    case 'j':
                            var kick = new Audio("./sounds/kick-bass.mp3");
                            kick.play();
                          break;
                    case 'k':
                            var sn = new Audio("./sounds/snare.mp3");
                            sn.play();
                          break;
                   case 'l':
                            var crash = new Audio("./sounds/crash.mp3");
                            crash.play();
                          break;
                         
                    default:console.log(key);        
                
                    
              }
       }
   function  buttonAnimation(currentKey) 
   {
    var activebutton = document.querySelector("."+currentKey)
    activebutton.classList.add("pressed");
    
    setTimeout(function(){
      activebutton.classList.remove("pressed")
      
    },100);
   }
 