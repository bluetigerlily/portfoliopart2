
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

    const obj = JSON.parse(friend_json);
    console.log(obj/name);