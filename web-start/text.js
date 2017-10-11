curl -H "Content-Type: application/json" \
     -H "Authorization: key=AAAAdCe4G6s:APA91bE8zFuvQZCH_5OCmc6V9x0dfk12yeglwNYpMUDeURB2PNq77_GFP39dZSLFGQYP78YuRYA-2wxwWfv9cdskO_5c_vs34sjOkkLgRSsuwh708a9DFgreVIchWTVgSHRdJT6jgZQ0" \
     -d '{
           "notification": {
             "title": "New chat message!",
             "body": "There is a new message in FriendlyChat",
             "icon": "/images/profile_placeholder.png",
             "click_action": "http://localhost:5000"
           },
           "to": "ehd15Pd8qqs:APA91bHXNSgcyidMCf_fYGhztYD6lch2AgPh_TL2i5fzbLPNckfb9fu9oS8BHA9JMkHB6x-ckEEO5kN-RpCa2IzosTBUwWFJPXmdAi8V_xcKkZ2FC-5C0HhTzzriRp3-IY45gqYFqlIU"
         }' \
     https://fcm.googleapis.com/fcm/send



     firebase.json
     {
  "hosting": {
    "public": "./",
    "ignore": [
      "firebase.json",
      "database-rules.json",
      "storage.rules",
      "functions"
    ],
    "headers": [{
      "source" : "**/*.@(js|html)",
      "headers" : [ {
        "key" : "Cache-Control",
        "value" : "max-age=0"
      } ]
    }]
  }
}
