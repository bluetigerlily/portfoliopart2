var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
var database = firebase.database();

function submitClick(usedId, name, email, imageUrl) {
    
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
    }) (error) => {
        if (error) {
          // The write failed...
        } else {
          // Data saved successfully!
        }
}