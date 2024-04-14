LOGINEMAIL=()=>{

    DEJSON('local','VERIFIEDCODE',(data)=>{

        const DATA=data;

        DISPLAY('',`

            <img class='AppLogo' src='../library/Assets/images/playstore.png'/>

            <h3>Email Verification Code</h3>

            <p> Your Code Was  Sent To <br><br> ${data.Email}</p>

            <input id='Pin'  type='text' placeholder='Enter Verfication Code'/>

            <h1 id='ForgotPin' class='Forgot'>Resend Code?</h1>

            <button  id='Unlock'>Verify</button>

            <button id='BackVerification' class='LoginUser'>Cancel</button>
        
        `);

        
        CLICKED('#BackVerification',()=>{

            REMOVESTORE('local','VERIFIEDCODE');

            CONDITION(sessionStorage.getItem('FromApp') === 'Direct' ,

                ()=>EXTERNALJS('../project/LoginPage/loginPage.js',()=>{LOGINPAGE()}),

                ()=>EXTERNALJS('../project/CreateAccount/CreateAccountPage.js',()=>{CREATEACCOUNTPAGE()})
        
            )

        })

        CLICKED('#ForgotPin',()=>{

            var EMAILDATA = {
                recipientEmail: data.Email,
                subject: "Movie Lander Login",
                body: `Dear ${data.UserName},\n\nThank you for using our service. To complete your registration, please use the following verification code:\n\nVerification Code: ${data.SecretCode}\n\nThis code will expire in 30 minutes. If you did not request this code, please ignore this email.\n\nBest regards, Movie Lander Team\n${WebsiteContact}`
            };

            DECLARATION('#ForgotPin',(ELEMENT)=>{

                LOADER(ELEMENT)

                POSTPACKAGE(EMAILSENDERAPI,'no-cors',EMAILDATA,(data)=>{

                    MESSAGE('Code Sent To Email');
    
                    EXTERNALJS('../project/CreateAccount/LoginEmail.js',()=>{LOGINEMAIL()})
    
                })
                
            })

        })

        CLICKED('#Unlock',()=>{

            DECLARATION('#Unlock',(ELEMENT)=>{

                const PIN=document.querySelector('#Pin')

                CONDITION(PIN.value,

                    ()=>DECLARATION('#Unlock',(ELEMENT)=>{

                        CONDITION(data.SecretCode === PIN.value,

                            ()=>DECLARATION('#Unlock',(DES)=>{
        
                                LOADER(ELEMENT);

                                GETPACKAGE(LOGINAPI,'cors',(user)=>{

                                    CONDITION( user.Email ===  data.Email ,

                                        ()=>DECLARATION('#Unlock',(ELEMENT)=>{
        
                                            MESSAGE('Email Taken ')

                                            ORIGIN(ELEMENT,'Verify')
                    
                                        }),

                                        ()=>POSTPACKAGE(CREATEACCOUNTAPI,'no-cors',DATA,(users)=>{

                                            const DEVICEDATA={

                                                "User":DATA.SecretCode,
                                                "Device": getBrowserVersion(),
                                               "Date":new Date()
                                            }
                                        
                                            // Functions to get browser and OS information
                                            function getBrowserName() { return navigator.appName; }
                                            function getBrowserVersion() { return navigator.appVersion; }
                                            function getOSName() { return navigator.platform; }
                                            function getOSVersion() { return navigator.userAgent; }

                                            POSTPACKAGE(DEVICELOGINAPI,'no-cors',DEVICEDATA,(data)=>{

                                                EXTERNALJS('../project/HomePage/HomePage.js',()=>{HOMEPAGE(),STORE('local','User',DATA.SecretCode),STORE('local','UserData',JSON.stringify(DATA)),REMOVESTORE('local','VERIFIEDCODE')})

                                            })

                                        })
                                    
                                    )

                                })
        
                            }),
        
                            ()=>DECLARATION('#Unlock',(ELEMENT)=>{
        
                                MESSAGE('Wrong Verification Code ')
        
                            })
                        
                        )

                    }),

                    ()=>DECLARATION('#Unlock',(ELEMENT)=>{

                        MESSAGE('Enter Verification Code ')

                    })
                
                )

            })

        })

    })

}
