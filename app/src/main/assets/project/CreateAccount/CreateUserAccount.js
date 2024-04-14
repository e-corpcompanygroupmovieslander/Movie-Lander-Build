CREATEUSERACCOUNT=()=>{
   
    const USERNAME=document.querySelector('#UserName');
    const USEREMAIL=document.querySelector('#UserEmail');
    const USERPASS=document.querySelector('#UserPassword');
    const USERDATE=document.querySelector('#UserDate');
    const USERLOCATION=document.querySelector('#UserLocation');
    const USERTELEPHONE=document.querySelector('#UserTelephone');

    CONDITION(USERNAME.value,

        ()=>CONDITION(USEREMAIL.value,

            ()=>CONDITION(USERPASS.value,

                ()=>CONDITION(USERDATE.value,

                    ()=>CONDITION(USERLOCATION.value,

                        ()=>CONDITION(USERTELEPHONE.value,

                            ()=>DECLARATION('#CreateUser',(ELEMENT)=>{

                                const AGE = Math.floor((new Date() - new Date(USERDATE.value)) / (365 * 24 * 60 * 60 * 1000)); // Calculating age in years
                            
                                CONDITION(AGE >= 13,

                                    ()=>CHECK(USEREMAIL.value,()=>{
    
                                        LOADER(ELEMENT);
                        
                                        // Function to generate a random string of a given length
                                        function generateRandomString(length) {
                                            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                            let result = '';
                                            for (let i = 0; i < length; i++) {
                                                const randomIndex = Math.floor(Math.random() * characters.length);
                                                result += characters.charAt(randomIndex);
                                            }
                                            return result;
                                        }
                        
                                        const firstLetter = USEREMAIL.value.charAt(0).toUpperCase();
                                        const birthYear = USERDATE.value.slice(-4);
                                        const randomStringLength = 11 - 1 - 4;
                                        const randomString = generateRandomString(randomStringLength);
                                        const secretCode = `${firstLetter}${birthYear}${randomString}`.slice(0, 11);
                        
                                        const UserData = {
                                            "UserName": USERNAME.value,
                                            "Email": USEREMAIL.value,
                                            "Password": USERPASS.value,
                                            "Password2": USERPASS.value,
                                            "Date": USERDATE.value,
                                            "Telephone": sessionStorage.getItem('Code') + USERTELEPHONE.value,
                                            "Location": USERLOCATION.value,
                                            "CreatedOn": new Date(),
                                            "SecretCode": secretCode,
                                            "Premium": "TRUE",
                                            "AppVersion": CURRENTVERSION,
                                            "Device": {
                                                "Browser": {
                                                    "Name": getBrowserName(),
                                                    "Version": getBrowserVersion()
                                                },
                                                "OS": {
                                                    "Name": getOSName(),
                                                    "Version": getOSVersion()
                                                },
                                                "ScreenWidth": screen.width,
                                                "ScreenHeight": screen.height
                                            }
                                        };
                        
                                        // Functions to get browser and OS information
                                        function getBrowserName() { return navigator.appName; }
                                        function getBrowserVersion() { return navigator.appVersion; }
                                        function getOSName() { return navigator.platform; }
                                        function getOSVersion() { return navigator.userAgent; }
                    
                                        GETPACKAGE(LOGINAPI,'cors',(data)=>{
                    
                                            FINDER(data,'Email',USEREMAIL.value,(user)=>{
                    
                                                CONDITION(user.Email === USEREMAIL.value ,
                    
                                                    ()=>CHECK(data,(result)=>{
                                                        MESSAGE('User Email Taken'),
                                                        ORIGIN(ELEMENT,'Create Account')
                                                    }),
                                                    ()=>CHECK(data,(result)=>{

                                                        var EMAILDATA = {
                                                            recipientEmail: USEREMAIL.value,
                                                            subject: "Movie Lander Login",
                                                            body: `Dear ${USERNAME},\n\nThank you for using our service. To complete your registration, please use the following verification code:\n\nVerification Code: ${secretCode}\n\nThis code will expire in 30 minutes. If you did not request this code, please ignore this email.\n\nBest regards, Movie Lander Team\n${WebsiteContact}`
                                                        };
                                                        

                                                        POSTPACKAGE(EMAILSENDERAPI,'no-cors',EMAILDATA,(data)=>{

                                                            STORE('local','VERIFIEDCODE',JSON.stringify(UserData))

                                                            STORE('','FromApp','CreateAccount')

                                                            EXTERNALJS('../project/CreateAccount/LoginEmail.js',()=>{LOGINEMAIL()})
    
                                                        })
                                                        
                                                    }),
                                                    
                                                )
                    
                                            })
                    
                                        })
                        
                                    }),

                                    ()=>MESSAGE('User Must Be 13 Years and Above')

                                );

                            }),
                        
                            ()=>MESSAGE('Enter User Telephone')
                        
                        ),
                
                        ()=>MESSAGE('Enter User Location')
                    
                    ),
            
                    ()=>MESSAGE('Enter Date Of Birth')
                
                ),
        
                ()=>MESSAGE('Enter UserPassword')
            
            ),
    
            ()=>MESSAGE('Enter UserEmail')
        
        ),

        ()=>MESSAGE('Enter UserName')
    
    )

}