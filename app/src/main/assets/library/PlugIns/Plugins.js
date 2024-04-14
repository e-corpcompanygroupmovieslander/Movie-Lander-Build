//CONTACT PLUGIN
const CONTACTS=(callback)=>{

     // Call the getContacts() method from the WebAppInterface
     var contactsJson = Android.getContacts();

     // Parse the JSON string into JavaScript object
     var contacts = JSON.parse(contactsJson);

     // Call the callback function with contacts data
     callback(contacts);

}

//NOTIFICATIONS PLUGIN
const NOTIFICATIONS=(TITLE,MESSAGE)=>{

    if (localStorage.getItem('Environment')==='Production') {
   
        Android.showNotification(`${TITLE}`, `${MESSAGE}`);

    } else {
        
        // Check if the browser supports the Notification API
        if ("Notification" in window) {
            // Request permission from the user
            Notification.requestPermission().then(function (permission) {
            // If the user grants permission
            if (permission === "granted") {
                // Display a notification
                var options = {
                body: MESSAGE,
                icon: "/app/src/main/res/drawable/app_icon.png"
                };

                var notification = new Notification(TITLE, options);    
            }
            });
        } else {
            console.log("This browser does not support notifications.");
        }
  
    }

}

//HIDE STATUSBAR PLUGIN
const HIDENAVIGATIONBAR=()=>{
    CONDITION(localStorage.getItem('Environment')==='Production',
    ()=>Android.hideNavigationBar(),
    ()=>console.log('Nav bar Hidden')
    )  
}

//SHOW STATUSBAR PLUGIN
const SHOWNAVIGATIONBAR=()=>{
    CONDITIONER(localStorage.getItem('Environment'),'Production',
    ()=>Android.showNavigationBar(),
    ()=>console.log('Nav bar Shown')
    ); 
}

//VIBRATION PLUGIN
const VIBRATION=(TIME)=>{
    
    CONDITION(localStorage.getItem('Environment')==='Production',

        ()=>Android.vibrate(TIME),
            
        ()=>console.log('Vibration Is On',TIME)   

    )

}