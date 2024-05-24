// select popupOverlay, popupBox , popupBtn 
let popupOverlay = document.getElementById("popup-overlay")
let popupBox=document.getElementById("popup-box")
let popupBtn =document.getElementById("popup-btn")
let btnRemove=document.getElementById("btn-remove")

// bottom of right end button is this and  function created for that which want to show the popup
popupBtn.addEventListener("click",  function (){
    popupOverlay.style.display="block"
    popupBox.style.display="block"
}
)
// create a function for remove the popup message to remove button 


btnRemove.addEventListener("click",function(e){
    e.preventDefault()
    popupOverlay.style.display="none"
    popupBox.style.display="none"
}
) 
// select  add-book-input , add-author-input , add - description-input and add button 
let btnAdd=document.getElementById("btn-add")
let addBookName= document.getElementById("book-title-input")
let addAuthorName = document.getElementById("author-name-input")
let description = document.getElementById("description")
// select container box and  add a notes on container box , so we want to  create a new items from this function to add button

let container=document.querySelector(".container")

// create a div element below on selected container box
btnAdd.addEventListener("click",function(e){
    e.preventDefault()
    let div = document.createElement("div")
    div.setAttribute('style', `
    color: white;
    `);
    div.setAttribute("class","book-container")
    div.innerHTML =` <h1 >${addBookName.value}</h1>
    <h3 >${addAuthorName.value}</h3>
    <p >${description.value}</p>
    <button class="delete-btn" onclick="deleteBook(event)" >Delete</button>
`
    container.append(div)
    popupOverlay.style.display="none"
    popupBox.style.display="none"
})

// create delete book function to created above book method was deleted to click this function 
function deleteBook(event){
    event.target.parentElement.remove()
}