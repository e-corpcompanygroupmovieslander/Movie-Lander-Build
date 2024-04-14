//NOTIFICATIONS PLUGIN
const NOTIFICATIONS=(TITLE,MESSAGE)=>{

    if (localStorage.getItem('Environment')==='Production') {

        VIBRATION(500)
           
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

                VIBRATION(500)

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

    
    CONDITION(localStorage.getItem('Device')==='Android',

        ()=>CONDITION(localStorage.getItem('Environment')==='Production',

            ()=>Android.vibrate(TIME),

            ()=>navigator.vibrate(TIME)
            
        ),
            
        ()=>console.log('Vibration Is On',TIME)   

    )


}