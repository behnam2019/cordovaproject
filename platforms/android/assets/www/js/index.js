document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage);
document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage);
document.getElementById("removeProjectFromLocalStorage").addEventListener
   ("click", removeProjectFromLocalStorage);
document.getElementById("getLocalStorageByKey").addEventListener
   ("click", getLocalStorageByKey);


document.addEventListener("volumeupbutton", callbackFunction, false);

function callbackFunction() {
   alert('Volume Up Button is pressed!')
}



var localStorage = window.localStorage;



function setLocalStorage() {
   localStorage.setItem("Name", "John");
   localStorage.setItem("Job", "Developer");
   localStorage.setItem("Project", "Cordova Project");
}

function showLocalStorage() {
   console.log(localStorage.getItem("Name"));
   console.log(localStorage.getItem("Job"));
   console.log(localStorage.getItem("Project"));
}


function removeProjectFromLocalStorage() {
   localStorage.removeItem("Project");
}


function getLocalStorageByKey() {
   console.log(localStorage.key(0));
}
