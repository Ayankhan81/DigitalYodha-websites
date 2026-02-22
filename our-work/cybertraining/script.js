
let ourworkbtn=document.getElementById("ourworkbtn")
let menubar=document.getElementById("workmenu")

ourworkbtn.addEventListener("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    menubar.style.display=menubar.style.display==="block"?none:"block"

})
document.addEventListener("click",function(e){
    if(!ourworkbtn.contains(e.target)&&!menubar.contains(e.target))
        menubar.style.display="none"
})
