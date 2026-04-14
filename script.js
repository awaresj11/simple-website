function showMessage() {
    alert("Hello! Welcome to my website 😊");
}

function greetUser() {
    let name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("greeting").innerText = "Please enter your name!";
    } else {
        document.getElementById("greeting").innerText = "Hello " + name + "! 👋";
    }
}
