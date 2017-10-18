var answers = document.querySelectorAll("#questions .anime");
var questions = document.querySelectorAll("#questions h1")

// accordion
function question(param) {
	for (i = 0; i < answers.length; i++) {
		answers[i].style.height = "0";
		answers[i].style.minHeight = "0";
		questions[i].setAttribute("data-attr", '+');
	}
	console.log();
	param.nextElementSibling.style.height = param.nextElementSibling.querySelector("p").offsetHeight + "px";
	param.nextElementSibling.style.minHeight = param.nextElementSibling.querySelector("p").offsetHeight + "px";
	param.nextElementSibling.style.color = "#46d0fe";
	param.setAttribute("data-attr", '-');
}

// counter 
   var first=document.getElementById("firstCounter")
   var second=document.getElementById("secondcounter")
   var third=document.getElementById("thirdcounter")
   var fourth=document.getElementById("fourthcounter")
   // var scroll=document.getElementByClassName("scroll")
    k=0;



window.onscroll=function(){
    if(window.pageYOffset>500){
      
                document.getElementById("scroll").style.display = "block";
      
      if(window.pageYOffset>3500){
            var x = setInterval(function funksiya(){
             if(k<571){
                 first.innerHTML=k;
                 k=k+1;
               if(k<365){
                  second.innerHTML=k;
                 k=k+1;
                 if(k<19){
                 k=k+1;
                 third.innerHTML=k;
                 if(k<13){
                     fourth.innerHTML=k;
                
                 }
                 }
               }
            }
       },0)}
}

   else{
      document.getElementById("scroll").style.display = "none";
   }
}


// scroll

      document.getElementById("scroll").addEventListener("click",function(){
            var lala=setInterval(function(){
               if (document.body.scrollTop>0){
                document.body.scrollTop-=45;
                 if(document.body.scrollTop<700){
                     document.body.scrollTop-=1;
                 }
            }
            else{
               clearInterval(lala);
            }
         },0)


         })
// dropdown


document.getElementById("dropdownFirst").addEventListener("mouseover",function(){
   document.getElementById("rightFirst").style.display="block";
})

document.getElementById("rightFirst").addEventListener("mouseleave",function(){
   document.getElementById("rightFirst").style.display="none";
   // document.getElementById("staticElements").style.display="none";
})

document.getElementById("leftFirst").addEventListener("mouseover",function(){
   document.getElementById("staticElements").style.display="block";
})

document.getElementById("staticElements").addEventListener("mouseover",function(){
   document.getElementById("rightFirst").style.display="block";
})

document.getElementById("staticElements").addEventListener("mouseleave",function(){
   document.getElementById("rightFirst").style.display="none";
   document.getElementById("staticElements").style.display="none";
})

document.getElementById("leftSecond").addEventListener("mouseover",function(){
   document.getElementById("rightSecond").style.display="block";
   document.getElementById("staticElements").style.display="none";
})

document.getElementById("leftSecond").addEventListener("mouseleave",function(){
   document.getElementById("rightSecond").style.display="none";
   document.getElementById("staticElements").style.display="none";
})

  
  







   
 

   



   


