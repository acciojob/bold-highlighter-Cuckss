 const strongList=document.getElementsByTagName("strong");
function highlight() {
   
	for(let i=0;i<strongList.length;i++){
		strongList[i].style.color="green";
	}


}


function return_normal() {
  for(let i=0;i<strongList.length;i++){
		strongList[i].style.color="black";
	}

    
}
