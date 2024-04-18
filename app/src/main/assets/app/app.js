APPMODE(localStorage.getItem('AppColour'),'','#121212')
APPCOLOR('','#ffffff');

const CURRENTVERSION='0.0.3';

const APPSTART=()=>{

    CONDITION(navigator.onLine,

        ()=>MODULE('../Project/Connection/Connection.js','CONNECTION',(CONNECTION)=>{CONNECTION()}),
    
        ()=>CHECK('',(result)=>{

            WIDGET(`
    
            <img class='AppLogo' src='../Library/Images/app_icon.png'/>

            <img class='OfflineImage' src='../Library/Icons/no-wifi.png'/>
    
            <h1>Your Offline</h1>
    
            <button class='forestgreen'>Retry</button>
            
            `);

            MESSAGE('Check Your Internet Connection')

            DECLARATION('.forestgreen',(ELEMENT)=>{

                CLICKED('.forestgreen',()=>{

                    LOADER(ELEMENT);

                    setTimeout(() => {
                        
                        APPSTART()

                    }, 2000);
                    
                    }
                )

            })

        })
    
    )

}

APPSTART();

