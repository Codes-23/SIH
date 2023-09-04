const elec1 = document.getElementById('ele1');
const elec0 = document.getElementById('ele0');
const wat1 = document.getElementById('wat1');
const wat0 = document.getElementById('wat0');
var goal = document.getElementById('inputgoal');
const gvalue = document.getElementById('gvalue');

const firebaseConfig = {
  apiKey: "AIzaSyDBGA8nDX39NXvhcjTCbhp7F4pkC19w7pA",
  authDomain: "testing-21fec.firebaseapp.com",
  databaseURL: "https://testing-21fec-default-rtdb.firebaseio.com",
  projectId: "testing-21fec",
  storageBucket: "testing-21fec.appspot.com",
  messagingSenderId: "955161641358",
  appId: "1:955161641358:web:b081a69d2210bdf69524df"
};

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Reference to the Firebase Realtime Database
    var FirebaseRef1 = firebase.database().ref("electricity");
    var FirebaseRef2 = firebase.database().ref("water");
    var FirebaseRef3 = firebase.database().ref("Incoming ELECT");
    var FirebaseRef4 = firebase.database().ref("Incoming WATER");
    const display = document.getElementById("data-display");
    const display2 = document.getElementById("data-display2");
    const display3 = document.getElementById("data-display3");
    const display4 = document.getElementById("data-display4");

    FirebaseRef1.once("value", function(snapshot){
        var data =  snapshot.val();
        display.textContent = "ELECTRICITY " + data;
    });
    FirebaseRef2.once("value", function(snapshot){
        var data =  snapshot.val();
        display2.textContent = "Water " + data;
    });
    FirebaseRef3.once("value", function(snapshot){
        var data2 = snapshot.val();
        display3.textContent = "INCOMING ELECTRICITY " + data2;
    });
    FirebaseRef4.once("value", function(snapshot){
        var data2 = snapshot.val();
        display4.textContent = "INCOMING WATER " + data2;
    });

    elec0.addEventListener('click',()=>{
      FirebaseRef1.set(0);
      elec0.style.background = "green";
      location.reload();
    });

    elec1.addEventListener('click',()=>{
      elec1.style.background = "green";
      FirebaseRef1.set(1);
      location.reload();
    });
    wat0.addEventListener('click',()=>{
      wat0.style.background = "green";
      FirebaseRef2.set(0);
      location.reload();
    });
    wat1.addEventListener('click',()=>{
      wat1.style.background = "green";
      FirebaseRef2.set(1);
      location.reload();
    });
    goal.addEventListener("change",()=>{
        var goalValue = goal.value;
        gvalue.textContent = "The Goal of the user for this month is " + `${goalValue}`;
        console.log("The Goal of the user for this month is " + goalValue);
    });
