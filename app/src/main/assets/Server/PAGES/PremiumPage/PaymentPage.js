import { PREMIUMPAGE } from "./PremiumPage.js";

const PAYMENTPAGE=()=>{

    DISPLAY('',`

        <header class='AppHeader'>

            <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

            <h1 class='Titles'>Payments</h1>

        </header>
    
        <div id='DataDiv' class='ScrollView'>

            <iframe class='Payment' src='${sessionStorage.getItem('Link')}'/>
    
        </div>
        
    `)

    DECLARATION('.Payment',(ELEMENT)=>{

        // Access data from local storage
        var localStorageData = localStorage.getItem('UserData');

        // Pass data to the iframe
        
        ELEMENT.onload = function() {
            ELEMENT.contentWindow.postMessage(localStorageData, '*');
        };
           
    })

    DECLARATION('.BackIcon',(ELEMENT)=>{
    
        EVENT(ELEMENT,'click',()=>{

        REMOVESTORE('','Link')

        PREMIUMPAGE()

        })

    })
    
}

export{PAYMENTPAGE}