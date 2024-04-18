APPMODE('','','#5C829A')

// Function to extract data from URL parameters and save to local storage
function extractDataAndSaveToLocalStorage() {
    // Get the URL parameters
    var urlParams = new URLSearchParams(window.location.search);

    // Initialize an object to store extracted data
    var extractedData = {};

    // Iterate over URL parameters and store them in the object
    for (const [key, value] of urlParams) {
        extractedData[key] = value;
    }

    // Convert the extracted data object to JSON string
    var extractedDataJSON = JSON.stringify(extractedData);

    // Save the JSON string to local storage
    localStorage.setItem('extractedData', extractedDataJSON);
}

// Call the function to extract data from URL parameters and save to local storage
extractDataAndSaveToLocalStorage();

DEJSON('local','extractedData',(data)=>{

    // Calculate the expiry date as one day from the PayDate
    var payDate = new Date(); // Assuming newDate is defined elsewhere
    var expiryDate = new Date(payDate);
    expiryDate.setMonth(payDate.getMonth() + 1); // Incrementing the month by 1
    
    // Create MYDATA object with corrected values
    const MYDATA = {
        "User": data.MyData,
        "AmountPaid": "MONTHLY",
        "PaidTo": "MovieLander",
        "PayeeName":"Movie Lander",
        "TRANSACTIONID": data.OrderMerchantReference,
        "PayDate": payDate,
        "ExpiryDate": expiryDate,
        "Message":"Monthly Payment Made For"+data.MyData+" on "+ payDate + "under transactionid for" + data.OrderMerchantReference + data.OrderTrackingId+"Paid by "+data.MyData + "expiring on " +expiryDate
    };


    // Output MYDATA object
    console.log(MYDATA);

    
    DISPLAY('',`

        <img class='AppLogo' src='../../../library/Assets/images/playstore.png'/>

        <h2>Receipt Of Payment</h2>

        <p>Movie Lander Daily Recieved</p>

        <button class='Button'>

        <img class='LoadingIcon'  src='../../../library/Assets/icon/loading.png'/>   

        </button>

        <h1>SubscriptionPlan</h1>

        <p>Monthly</p>

        <h1>Expires On</h1>

        <p>${expiryDate}</p>

    `)

    POSTPACKAGE(MTNPREMIUMPAY,'no-cors',MYDATA,(data)=>{

        DISPLAY('',`

        <img class='AppLogo'  src='../../../library/Assets/icon/check.png'/>   

        <h1>Payment Completed</h1>

        <p>Thank You For Supporting Us</p>

        <button>Back To App</button>
        
        `)

    })

})