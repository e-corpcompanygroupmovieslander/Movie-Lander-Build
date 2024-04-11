USERSETTINGSACCOUNTPAGE=()=>{

    STORE('','Updates','PremiumPage');

    DEJSON('local','UserData',(data)=>{

        DISPLAY('',`

            <header class='AppHeader'>

                <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

                <h1 class='Titles'>Account Settings</h1>
            
            </header>

            <div id='DataDiv' class='ScrollView'>

                <button class='MyDataButton'>

                    <h1 class='mytitle'>User Name</h1>

                    <img class='myIcon' src='../library/Assets/icon/user.png'/>
                
                    <h1 class='MyData'>${data.UserName}</h1>

                </button>

                <button class='MyDataButton'>

                    <h1 class='mytitle'>Subscription Plan</h1>

                    <img class='myIcon' src='../library/Assets/icon/subscription.png'/>
                
                    <h1 id='SubPlan' class='MyData'></h1>

                </button>

                <button class='MyDataButton'>

                    <h1 class='mytitle'>Expiration Date</h1>

                    <img class='myIcon' src='../library/Assets/icon/subscription.png'/>
                
                    <h1 id='ExSubPlan' class='MyData'>Null</h1>

                </button>

                <button id='LogOut' class='Button'>

                    <h1 class='Buttontitle'>Upgrade plan</h1>

                    <img class='ButtonIcon' src='../library/Assets/icon/upload.png'/>
                
                </button>

            </div>

        `)

        CLICKED('#BackIcon',()=>{

            EXTERNALJS('../project/UserAccountPage/UserAccountPage.js',()=>{USERACCOUNTPAGE()})

        })

        DECLARATION('#SubPlan',(ELEMENT)=>{

            CONDITION(localStorage.getItem('Premium'),

                ()=>DISPLAY(ELEMENT,'Premium'),

                ()=>DISPLAY(ELEMENT,'Basic')
        
            )

        })

        DECLARATION('#LogOut',(ELEMENT)=>{

            DEJSON('local','PremiumUser',(data)=>{

                CONDITION(data.AmountPaid === 'YEARLY' ,
    
                    ()=>STYLED(ELEMENT,'display','none'),
    
                    ()=>STYLED(ELEMENT,'display','block')
        
                )
    
            })

        })

        DECLARATION('#ExSubPlan',(ELEMENT)=>{

            DEJSON('local','PremiumUser',(data)=>{

                CONDITION(data.ExpiryDate,
    
                    ()=>DISPLAY(ELEMENT,data.ExpiryDate),
    
                    ()=>DISPLAY(ELEMENT,'No SubScription')
        
                )
    
            })

        })

        
          
    })

}