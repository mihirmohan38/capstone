const axios = require('axios') ; 

async function sendNotification(medboxID){
    url = "https://gcm-http.googleapis.com/gcm/send" // see if you have to change this
    API_KEY = "ABCDEF123456789ABCDE--12A" ;  // change after getting the api key 
    var data = {
        "to" : "/medboxes/" + medboxID, 
        "notification" : {
            "body" : "messageBodyTest", 
            "title" : "messageTitleTest", 
            "icon" : "messageIconTest"
        }
    }

    var response = await axios.get(url, data, {
                        headers: {
                            'Authorization': "key="+MY_API_KEY, 
                            'Content-Type': 'application/json' 
                        }
                    }) ; 

    if (!response.message_id) { 
        return true  ; 
    } 

    return false ; 

}

module.exports = sendNotification ; 