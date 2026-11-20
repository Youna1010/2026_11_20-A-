const box = document.createElement("div");

box.style.width = "150px";
box.style.height = "150px";
box.style.backgroundColor = "skyblue";

box.addEventListener("click", function() {
    box.style.display = "none";
});

document.body.appendChild(box);