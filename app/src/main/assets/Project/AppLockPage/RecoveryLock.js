LOCKRECOVERY=()=>{

    DISPLAY('',`

        <img class='AppLogo' src='../library/Assets/images/playstore.png'/>

        <input class='CreateUserName' type='text' placeholder='Enter User Name' />

        <input class='CreateEmail' type='email' placeholder='Enter User Email' />

        <input class='CreateLocation' type='text' placeholder='Enter User  Location' readonly />

        <div class='TelephoneHolder'>

            <h1 class='CountryCodeDisplay'>+</h1>

            <input maxlength='10' class='CreateTelephone' type='tel' placeholder='Enter User  Telephone' />

        </div>
   
        <button class='Recover'>Recover</button>

        <button class='LoginUser'>Cancel</button>

        <div class='CountryShower'>

            <button id='Close'>Close</button>

            <div id='CountryPlace' class='ScrollView'>

            <img id='HomeLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
        
            </div>
        
        </div>

    `)

    DECLARATION('.Recover',(ELEMENT)=>{

        EVENT(ELEMENT,'click',()=>{

            const USERNAME=document.querySelector('.CreateUserName');
            const USEREMAIL=document.querySelector('.CreateEmail');
            const USERLOCATION=document.querySelector('.CreateLocation');
            const USERTELEPHONE=document.querySelector('.CreateTelephone');

            CONDITION(USERNAME.value,

                ()=>CONDITION(USEREMAIL.value,

                    ()=>CONDITION(USERLOCATION.value,

                        ()=>CONDITION(USERTELEPHONE.value,

                            ()=>CHECK(USEREMAIL.value,(result)=>{

                                LOADER(ELEMENT)

                                GETPACKAGE(LOGINAPI,'cors',(data)=>{

                                    FINDER(data,'Email',USEREMAIL.value,(user)=>{

                                        CONDITION(user.UserName === USERNAME.value,

                                            ()=>CONDITION(user.Email === USEREMAIL.value,

                                                ()=>CONDITION(user.Location === USERLOCATION.value,

                                                    ()=>CONDITION("+"+user.Telephone === sessionStorage.getItem('Code') + USERTELEPHONE.value,

                                                        ()=>CHECK(user,(result)=>{

                                                            var EMAILDATA = {
                                                                recipientEmail: user.Email,
                                                                subject: "Movie Lander AppLock Recovery",
                                                                body: `Dear ${user.UserName},\n\nThank you for using Movie Lander. To Access Your Account, Your App Lock Pin Is:\n\nPin: ${localStorage.getItem('AppLock')}\n\nOpen Movie Lander And Enter The App Lock Pin Above .\n Don't Share Your App Lock Pin. If you did not request this code, please ignore this email.\n\nBest regards, Movie Lander Team\n${WebsiteContact}`
                                                            };

                                                            POSTPACKAGE(EMAILSENDERAPI,'no-cors',EMAILDATA,(data)=>{
                                                
                                                                DISPLAY('',`

                                                                <img class='AppLogo' src='../library/Assets/images/playstore.png'/>
       
                                                                <h3>App Lock Pin Recovery </h3>
    
                                                                <p> Your AppLock Pin Was  Sent To <br><br> ${user.Email}</p>
    
                                                                <button class='Login'>Back</button>   
                                                            
                                                                `);

                                                                DECLARATION('.Login',(ELEMENT)=>{

                                                                    EVENT(ELEMENT,'click',()=>{
                                                            
                                                                        APPSTART()
                                                            
                                                                    })
                                                            
                                                                })

                                                            })

                                                        }),
            
                                                        ()=>CHECK(data,(result)=>{
                                                            MESSAGE('Wrong User Telephon')
                                                            ORIGIN(ELEMENT,'Recover')
                                                        })
                                                        
                                                    )
                                                    ,
        
                                                    ()=>CHECK(data,(result)=>{
                                                        MESSAGE('Wrong User Location')
                                                        ORIGIN(ELEMENT,'Recover')
                                                    })
                                                    
                                                )
                                                ,
    
                                                ()=>CHECK(data,(result)=>{
                                                    MESSAGE('Wrong User Email')
                                                    ORIGIN(ELEMENT,'Recover')
                                                })
                                                
                                            )
                                            ,

                                            ()=>CHECK(data,(result)=>{
                                                MESSAGE('Wrong User Name')
                                                ORIGIN(ELEMENT,'Recover')
                                            })
                                            
                                        )

                                    })

                                })

                            }),
            
                            ()=>MESSAGE('Enter User Telephone')
                            
                        ),
        
                        ()=>MESSAGE('Enter User Location')
                        
                    ),
    
                    ()=>MESSAGE('Enter User Email')
                    
                ),

                ()=>MESSAGE('Enter User Name')
                
            )
            
        })
        
    })

    DECLARATION('.CreateLocation',(ELEMENT)=>{

        EVENT(ELEMENT,'click',()=>{

            DECLARATION('#Close',(ELEMENT)=>{

                EVENT(ELEMENT,'click',()=>{

                    DECLARATION('.CountryShower',(ELEMENT)=>{

                        STYLED(ELEMENT,'display','none');
    
                    })

                })

            })

            DECLARATION('.CountryShower',(ELEMENT)=>{

                STYLED(ELEMENT,'display','block');

                STYLED(ELEMENT,'background',localStorage.getItem('AppColour'));
        
                    DECLARATION('#CountryPlace',(HOLDER)=>{
        
                        DISPLAY(HOLDER,'')
        
                        REDUX(COUNTRYDATA,(element)=>{
        
                            CREATEELEMENT('button','Button',(THINGS)=>{
        
                                DISPLAY(THINGS,`
        
                                    <h1 class='Buttontitle'>${element.name}</h1>
            
                                    <img class='ButtonIcon' src='../library/Assets/icon/location.png'/>
                                            
                                `)
        
                                EVENT(THINGS,'click',()=>{
        
                                    STYLED(ELEMENT,'display','none');
        
                                    DECLARATION('.CreateLocation',(ELEMENT)=>{
                                        ELEMENT.value=element.name;
                                        STORE('','Code',element.phoneCode)
                                    })
        
                                    DECLARATION('.CountryCodeDisplay',(ELEMENT)=>{
                                        DISPLAY(ELEMENT,element.phoneCode)
                                    })
        
                                })
        
                            ADD(HOLDER,THINGS)
                        })
                            
                    })
        
        
                })
        
            })
            

        })

    })

    DECLARATION('.LoginUser',(ELEMENT)=>{

        EVENT(ELEMENT,'click',()=>{

            APPSTART()

        })

    })

}