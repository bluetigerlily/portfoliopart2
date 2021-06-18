var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

function submitClick(usedId, name, email, imageUrl) {
    
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
    })
}