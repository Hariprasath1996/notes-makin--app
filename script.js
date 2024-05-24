// select popupOverlay, popupBox , popupBtn 
let popupOverlay = document.getElementById("popup-overlay")
let popupBox=document.getElementById("popup-box")
let popupBtn =document.getElementById("popup-btn")
let btnAdd=document.getElementById("btn-add")
let btnRemove=document.getElementById("btn-remove")


let container=document.getElementById("container")

// bottom of right end button is this and  function created for that which want to show the popup
popupBtn.addEventListener ("click",  function (){
    popupOverlay.style.display="block"
    popupBox.style.display="block"
}
)
// create a function for remove the popup message to remove button 
btnRemove.addEventListener  ("click",function(){
    popupOverlay.style.display="none"
    popupBox.style.display="none"
}
) 
// add a notes on container box , so we want to  create a new items from this function to add button
btnAdd.addEventListener("click", function(){

})
