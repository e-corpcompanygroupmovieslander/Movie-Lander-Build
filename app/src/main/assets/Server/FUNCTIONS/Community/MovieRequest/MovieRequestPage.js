const MOVIEREQUESTPAGE=()=>{

    DISPLAY('',`

        <header class='AppHeader'>

            <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

            <h1 class='Titles'>Movie Request</h1>
        
        </header>

        <div id='DeleteAccountPolicy' class='ScrollView'>

            <img id='HomeLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>

        </div>

        <input class='DeleteAccountInput' type='text' placeholder='Ask For Your Movie'/>

        <button id='AppLockbtn' class='DeleteButton'>Request</button>
    `)

    CLICKED('#BackIcon',()=>{

        EXTERNALJS('../project/CommunityPage/CommunityPage.js',()=>{COMMUNITYPAGE()});

    })

    DECLARATION('#DeleteAccountPolicy',(ELEMENT)=>{

        GETPACKAGE(MOVIIEREQUESTAPI,'cors',(data)=>{

            DISPLAY(ELEMENT,'');

            REDUX(data,(element)=>{

                CREATEELEMENT('button','MyDataButton',(button)=>{

                    DISPLAY(button,`

                        <h1 class='mytitle'>${element.Commentor}</h1>

                        <img class='myIcon' src='../library/Assets/icon/user.png'/>
                    
                        <h1 class='MyData'>${element.Comment}</h1>
                    
                    `)

                    ADD(ELEMENT,button)

                    CHECK(element.Commentor === 'Admin',(result)=>{

                        DECLARATION('.mytitle',(TITLE)=>{

                            STYLED(TITLE,'color','blue')

                        })

                        DECLARATION('.myIcon',(TITLE)=>{

                            TITLE.src='../library/Assets/icon/profile.png'

                        })

                    } )

                })

            })
            

        })

    })

    const DELETEINPUT=document.querySelector('.DeleteAccountInput');

    CLICKED('.DeleteButton',()=>{

        CONDITION(!DELETEINPUT.value,

            ()=>MESSAGE('Enter Your Movie Request'),

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

export{MOVIEREQUESTPAGE}