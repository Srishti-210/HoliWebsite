

const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalContainer = document.querySelector(".modal-container");

modalBtn.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

function randomcolor(){
    var colors=["#ee9b00", "#f72585", "#ae2012","#98f5e1","#7209b7","#48cae4","#52b788","#ffb703","#8ac926"];

    var random_color = colors[Math.floor(
        Math.random() * colors.length)];
  
var x = document.getElementById('g');
x.style.color = random_color;

}

