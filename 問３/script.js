const pages = document.querySelectorAll(".page");
function showPage(pageId) {
  pages.forEach(function(page) {
    page.style.display = "none";
  });

  document.getElementById(pageId).style.display = "flex";
}

document.getElementById("btn1").addEventListener("click", function() {
  showPage("page1");
});

document.getElementById("btn2").addEventListener("click", function() {
  showPage("page2");
});

document.getElementById("btn3").addEventListener("click", function() {
  showPage("page3");
});

document.getElementById("btn4").addEventListener("click", function() {
  showPage("page4");
});

document.getElementById("btn5").addEventListener("click", function() {
  showPage("page5");
});