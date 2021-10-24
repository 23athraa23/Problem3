/*
Fridge Website 
*/

// setting up variables 
let theAdding  = document.querySelector("insert a new item to the fridge");
let theAddButton = document.querySelector("insert a new item to the fridge");
let itemContainer = document.querySelector("item contant");
let X = document.querySelector("no item");
let itemCount = document.querySelector("item count");
let itemCompleted = document.querySelector("item completed ");


//focus on input field 
window.onload = function(){
    theAdding .focus();};

     
    
     //adding the items
     
     theAddButton.onclick = function(){

     // if input is empty 

     if(theAdding .value === ' '){
        console.log(" No value ");

     } else{

          // remove the items 
         X.remove();
        
         // create  element 
         let mainitem  = document.createElement("itme");

         //create delete button 
         let deletElement = document.createElement("item");

         // create the item text 
         let text =document.createTextNode(theAdding .value);

         // create the delete button text 
         let deletetext =document.createTextNode("delete");

         // add text to fridge 
         mainitem .appendChild(text);

         //add class to fridge 
         mainitem .className='item box';

         // add text to delete button 

         deletElement.appendChild(deletetext);

         // add text to delete button
         deletElement.className='delete';

         // add delete button to main span 
         mainitem .appendChild(deletElement);

         //add the item to the container 
         itemContainer.appendChild(mainitem );
    }
};
