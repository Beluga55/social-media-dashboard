const checkBox = document.getElementById("checkbox");
const body = document.querySelector("body");

checkBox.addEventListener('click', function() {
    if(this.checked) {
        body.classList.add("dark-theme");
    }
    else {
        body.classList.remove("dark-theme");
    }
})