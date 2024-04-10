DELETEACCOUNTPAGE=()=>{

    DISPLAY('',`

        <header class='AppHeader'>

            <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

            <h1 class='Titles'>Delete Account</h1>
        
        </header>

        <div id='DeleteAccountPolicy' class='ScrollView'>

            <img id='HomeLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
    
        </div>

        <input class='DeleteAccountInput' type='text' placeholder='Reason For Account Deletion'/>
    
        <button class='DeleteButton'>Delete</button>
    `)

    CLICKED('#BackIcon',()=>{

        EXTERNALJS('../project/AboutMePage/AboutMePage.js',()=>{ABOUTMEPAGE()})

    })

    DECLARATION('#DeleteAccountPolicy',(ELEMENT)=>{

        GETPACKAGE(DELETEACCOUNTPOLICY,'cors',(data)=>{

            DISPLAY(ELEMENT,data);

        })

    })

    const DELETEINPUT=document.querySelector('.DeleteAccountInput');

    CLICKED('.DeleteButton',()=>{

        CONDITION(!DELETEINPUT.value,

            ()=>MESSAGE('Enter Reason For Account Deletion'),

            ()=>DEJSON('local','UserData',(data)=>{

                DECLARATION('.DeleteButton',(ELEMENT)=>{

                    LOADER(ELEMENT);

                    const DATA={
                        "User":data.SecretCode,
                        "Message":DELETEINPUT.value,
                        "Terms":"ON",
                        "Date":new Date()
                    }
    
                    POSTPACKAGE(DELETEACCOUNTPOST,'cors',DATA,(data)=>{
    
                        REMOVESTORE('local','User');REMOVESTORE('local','UserData');
    
                        EXTERNALJS('../project/LoginPage/loginPage.js',()=>{LOGINPAGE()})
    
                    })

                })

            })
        
        )

    })

}