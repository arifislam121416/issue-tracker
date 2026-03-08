function logingBtn() {
const userName =document.querySelector("#username").value;
const password = document.querySelector("#password").value;
if(userName === "admin" && password === "admin123"){
    window.location.href = "main.html";
}else{
    alert("Wrong Username or Password");
}

}

