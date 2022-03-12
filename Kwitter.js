user_name = document.getElementById("user_name").value;
enter_password = document.getElementById("enter_password").value;


function addUser()
{
    localStorage.getItem("user_name", user_name);
    localStorage.getItem("enter_password", enter_password);
    window.location = "Kwitter_room.html";
}