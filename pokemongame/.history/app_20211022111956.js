
let friend_json = `{ 
    "friend_one" : [
        {
        "name": "Haley",
        "type": "Water",
        "rarity": "Legendary",
        "gender": "Female" 
        }
                 ]
    }`;

    const obj = JSON.stringify(friend_json);
    console.log(obj.friend_one.name;