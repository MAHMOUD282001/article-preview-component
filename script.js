
let shareIcon = document.querySelector(".share");

let links = document.querySelector(".links");

let char = document.querySelector(".char");

let lastContent = document.querySelector(".last-content");





setInterval(()=>{
    let width = window.innerWidth;
    
    if(width > 480){
        char.classList.remove("active")
        lastContent.classList.remove("active")
    }
    
    else{
    if(links.classList.contains("active")){
        char.classList.add("active")
        lastContent.classList.add("active")
    }
}
    
},1)




shareIcon.addEventListener("click", ()=>{

if(window.innerWidth > 480){
        links.classList.toggle("active")
        char.classList.remove("active")
        
}

else{
        char.classList.toggle("active")
        links.classList.toggle("active")
        lastContent.classList.toggle("active")
        
        
}
})




