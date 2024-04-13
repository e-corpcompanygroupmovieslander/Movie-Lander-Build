import { PREMIUMPAGE } from "./PremiumPage.js";

const PAYMENTPAGE = () => {

    DISPLAY('', `
    
        <header class='AppHeader'>

            <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>
            
            <h1 class='Titles'>Payments</h1>

        </header>
    
        <div id='DataDiv' class='ScrollView'>

            <img id='HomeLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>

            <iframe id='PaymentFrame' class='Payment' src='${sessionStorage.getItem('Link')}'></iframe>
        
        </div>
    `);

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

    DECLARATION('.BackIcon', (ELEMENT) => {
        EVENT(ELEMENT, 'click', () => {
            REMOVESTORE('', 'Link');
            PREMIUMPAGE();
        });
    });
};

export { PAYMENTPAGE };
