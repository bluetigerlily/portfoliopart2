var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

function submitClick() {
 
    var database = firebase.database();

    
var firebaseRef = firebase.database().ref();
firebaseRef.child("Text").set("Some Value");

}