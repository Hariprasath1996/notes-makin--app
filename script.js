// select popupOverlay, popupBox , popupBtn 
let popupOverlay = document.getElementById("popup-overlay")
let popupBox=document.getElementById("popup-box")
let popupBtn =document.getElementById("popup-btn")
let btnAdd=document.getElementById("btn-add")
let btnRemove=document.getElementById("btn-remove")


let container=document.getElementById("container")


popupBtn.addEventListener ("click",  function (){
    popupOverlay.style.display="block"
    popupBox.style.display="block"
}
)
btnRemove.addEventListener  ("click",function(){
    popupOverlay.style.display="none"
    popupBox.style.display="none"
}
) 
btnAdd.addEventListener("click", function(){
    
})
