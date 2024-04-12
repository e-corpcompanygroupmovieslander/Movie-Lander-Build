const LOGINUSER=()=>{

    const LoginEmail=document.querySelector('.LoginEmail');

    const LoginPassword=document.querySelector('.LoginPassword');

    CONDITION(LoginEmail.value,

        ()=>CONDITION(LoginPassword.value,

            ()=>DECLARATION('#LoginUser',(ELEMENT)=>{

                LOADER(ELEMENT);

                GETPACKAGE(LOGINAPI,'cors',(data)=>{

                    FINDER(data,'Email',LoginEmail.value,(user)=>{

                        CONDITION( user.Email === LoginEmail.value ,

                            ()=>CONDITION( user.Password === LoginPassword.value,

                                ()=>DECLARATION('#LoginUser',(ELEMENT)=>{

                                    GETPACKAGE(DELETEACCOUNTGET,'cors',(data)=>{

                                        FINDER(data,'User',user.SecretCode,(users)=>{

                                            CONDITION(users.User === user.SecretCode ,

                                                ()=>DECLARATION('#LoginUser',(ELEMENT)=>{
            
                                                    MESSAGE('Something Went Wrong');
                    
                                                    ORIGIN(ELEMENT,'Login')
                    
                                                }),
            
                                                ()=>EXTERNALJS('../project/HomePage/HomePage.js',()=>{HOMEPAGE(),STORE('local','User',user.SecretCode),STORE('local','UserData',JSON.stringify(user))})
                                            
                                            )


                                        })

                                    })

                                }),

                                ()=>DECLARATION('#LoginUser',(ELEMENT)=>{

                                    MESSAGE('Wrong  User Password');
            
                                    ORIGIN(ELEMENT,'Login')
            
                                }),

                            ),

                            ()=>DECLARATION('#LoginUser',(ELEMENT)=>{

                                MESSAGE('Wrong User Email');
            
                                ORIGIN(ELEMENT,'Login')
            
                            })
                        
                        )

                    })

                })

            }),

            ()=>MESSAGE('Enter User Password')
    
        ),

        ()=>MESSAGE('Enter User Email')
    
    )

}

export{LOGINUSER}
