var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

function submitClick() {

var firebaseRef = firebase.database().ref();
firebaseRef.child("Text").set("Some Value");
https://fir-web-learn-84768-default-rtdb.firebaseio.com/

}