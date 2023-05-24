const input = document.getElementById("myInput");
const infoDiv = document.getElementById("infoDiv");

input.addEventListener("focus", () => {
    infoDiv.style.display = "block";
});

input.addEventListener("blur", () => {
    infoDiv.style.display = "none";
});
