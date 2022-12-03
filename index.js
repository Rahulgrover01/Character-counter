let myText= document.getElementById("mytext")
myText.addEventListener("input", ()=>{
   let count = (myText.value).length;
   document.querySelector(".count-result").innerHTML= `Total characters: ${count}`
});
