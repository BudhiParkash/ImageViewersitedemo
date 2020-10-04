var popup = document.getElementById("popup");

function viewImage(id){
    var image = document.getElementById(id)
    popup.style.display = "flex";
    document.getElementById("popupImage").src = image.src;
}

function closeImage(event){
    if(event.ctrlKey){
        popup.style.display = "none"
    }
}