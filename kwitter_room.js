
  var firebaseConfig = {
    apiKey: "AIzaSyCYgqP_8g8EP1plTf5Mehhy0nQaYkmO_e0",
    authDomain: "chatter-2ab10.firebaseapp.com",
    databaseURL: "https://chatter-2ab10-default-rtdb.firebaseio.com",
    projectId: "chatter-2ab10",
    storageBucket: "chatter-2ab10.appspot.com",
    messagingSenderId: "612970191770",
    appId: "1:612970191770:web:f10ec58d737022f43df823"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }