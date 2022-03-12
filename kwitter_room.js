var firebaseConfig = {
    apiKey: "AIzaSyCB8NkkfzO-7HNXt1fqOHEztlj2WxDoUIw",
    authDomain: "kwitter1-b703a.firebaseapp.com",
    databaseURL: "https://kwitter1-b703a-default-rtdb.firebaseio.com",
    projectId: "kwitter1-b703a",
    storageBucket: "kwitter1-b703a.appspot.com",
    messagingSenderId: "939854111602",
    appId: "1:939854111602:web:73a9081e861b70c6d4f3eb",
    measurementId: "G-PXSR6QNSRB"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name_1 = localStorage.setItem(user_name).value;
document.getElementById("user_name").innerHTML = "Welcome "+user_name_1+"!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
            purpose : "adding room"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "Kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {ChildKey = childSnapshot.key;
    Room_names = childKey;
    row = "<div class='room_name' id="+Room_names+"onclick = redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    });});
}
getData;

function redirectToRoomName(name)
{
    localStorage.setItem("room_name", name)
    window.location = "Kwitter_page.html"
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}