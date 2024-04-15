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

        GETPACKAGE(MOVIIEREQUESTEDAPI,'cors',(data)=>{

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

                            STYLED(TITLE,'color','teal')

                            DECLARATION('.MyData',(TITLE)=>{

                                STYLED(TITLE,'color','teal')
    
                            })

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

                    DEJSON('local','UserData',(data)=>{

                        LOADER(ELEMENT);

                        const DATA={
                            "Movie": localStorage.getItem('User'),
                            "Commentor":data.UserName,
                            "Comment":DELETEINPUT.value,
                            "Date":new Date()
                        }
    
                        POSTPACKAGE(MOVIIEREQUESTAPI,'no-cors',DATA,(data)=>{

                            DECLARATION('#DeleteAccountPolicy',(ELEMENT)=>{

                                GETPACKAGE(MOVIIEREQUESTAPI,'cors',(data)=>{

                                    DECLARATION('.DeleteButton',(ELEMENT)=>{
                                        ORIGIN(ELEMENT,'Request');
                                    })
                        
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

                        })

                    })

                })

            })
        
        )

    })

}

export{MOVIEREQUESTPAGE}