const LOGINUSER=()=>{

    const LoginEmail=document.querySelector('.LoginEmail');

    const LoginPassword=document.querySelector('.LoginPassword');

    const LoginUser=document.querySelector('#LoginUser');

    CONDITION(!LoginEmail.value,

        ()=>MESSAGE('Enter User Email'),

        ()=>CONDITION(!LoginPassword.value,

            ()=>MESSAGE('Enter User Password'),
    
            ()=>CHECK(LoginEmail,(result)=>{

                LOADER(LoginUser);

                GETPACKAGE(LOGINAPI,'cors',(data)=>{

                    FINDER(data,'Email',LoginEmail.value,(user)=>{

                        CONDITION(!LoginEmail.value === user.Email ,

                            ()=>DECLARATION('#LoginUser',(ELEMENT)=>{

                                MESSAGE('Wrong Email');

                                ORIGIN(ELEMENT,'Login')

                            }),

                            ()=>CONDITION(!user.Password === LoginPassword.value,

                                ()=>DECLARATION('#LoginUser',(ELEMENT)=>{

                                    MESSAGE('Wrong Password');
    
                                    ORIGIN(ELEMENT,'Login')
    
                                }),

                                ()=>GETPACKAGE(DELETEACCOUNTGET,'cors',(data)=>{

                                    FINDER(data,'User',user.SecretCode,(result)=>{

                                        CONDITION(user.SecretCode === result.User,

                                            ()=>DECLARATION('#LoginUser',(ELEMENT)=>{

                                                MESSAGE('Something Went Wrong');
                
                                                ORIGIN(ELEMENT,'Login')
                
                                            }),

                                            ()=>EXTERNALJS('../project/HomePage/HomePage.js',()=>{HOMEPAGE(),STORE('local','User',user.SecretCode),STORE('local','UserData',JSON.stringify(user))})
                                        
                                        )

                                    })

                                })
                            
                            )
                        
                        )

                    })

                })

            })
    
        )

    )
    
}

export{LOGINUSER}