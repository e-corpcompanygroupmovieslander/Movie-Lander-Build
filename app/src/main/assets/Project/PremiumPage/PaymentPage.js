PAYMENTPAGE = () => {

    DISPLAY('', `
    
        <header class='AppHeader'>

            <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>
            
            <h1 class='Titles'>Payments</h1>

        </header>
    
        <div id='DataDiv' class='ScrollView'>

            <img class='AppLogo' src='../library/Assets/icon/caution.png'/>

            <h1>Please Read</h1>

            <p>
            After You Have Made Payments 

            <br><br>
            Please be patient Until This Page Below Appears .
            <br><br>
            Thank You.
            <br><br>
            Movie Lander Team

            </p>

            <div id='PaymentImgeDiv' class='View'>

            <img class='LatestImage' src='https://e-corpcompanygroupmovieslander.github.io/Movie-Lander-Build/app/src/main/assets/library/Assets/images/PaymentImages/paymentimage.png'/>
            
            </div>

            <button id='LogOut' class='Continue'>Pay</button>

        </div>
    `);

    CLICKED('.Continue',()=>{

        DECLARATION('#DataDiv',(ELEMENT)=>{
            DISPLAY(ELEMENT,`
                <iframe id='PaymentFrame' class='Payment' src='${sessionStorage.getItem('Link')}'></iframe>
                <img id='HomeLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
            
            `)
        })

        DECLARATION('.Payment', (ELEMENT) => {
            // Access data from local storage
            var localStorageData = localStorage.getItem('UserData');
    
            // Pass data to the iframe
            ELEMENT.onload = function() {
                ELEMENT.contentWindow.postMessage(localStorageData, '*');
                // Once loaded, remove the loading message
                document.getElementById('HomeLoader').style.display = 'none';
            };
        });

    })

    DECLARATION('.BackIcon', (ELEMENT) => {
        EVENT(ELEMENT, 'click', () => {
            REMOVESTORE('', 'Link');
            EXTERNALJS(PREMIUMPAGEAPI,()=>{PREMIUMPAGE()});
        });
    });
};


