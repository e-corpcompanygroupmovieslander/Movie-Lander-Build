LOGINPAGE=()=>{

    REMOVESTORE('','FromApp');

    REMOVESTORE('','VERIFIEDCODE');

    DISPLAY('',`

        <img class='AppLogo' src='../library/Assets/images/playstore.png'/>

        <input class='LoginEmail' type='email' placeholder='Enter Email'/>

        <input class='LoginPassword' type='password' placeholder='Enter Password'/>

        <h1  class='Forgot'>Forgot Password?</h1>

        <button id='LoginUser'>Login</button>

        <button id='CreateAccount'>Create Account</button>
    
    `);

    CLICKED('#LoginUser',()=>{

        EXTERNALJS('../project/LoginPage/LoginUser.js',()=>{LOGINUSER()})
          
    })

    CLICKED('#CreateAccount',()=>{
        
        EXTERNALJS('../project/CreateAccount/CreateAccountPage.js',()=>{CREATEACCOUNTPAGE()})

    })

    CLICKED('.Forgot',()=>{

        EXTERNALJS('../project/ForgotPassword/ForgotPassword.js',()=>{FORGOTPASSWORDPAGE()})

    })

}