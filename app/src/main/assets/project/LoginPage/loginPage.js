LOGINPAGE=()=>{

    STORE('','Updates','LoginPage')

    DISPLAY('',`

        <img class='AppLogo' src='../library/Assets/images/movie lander logo.png'/>

        <input class='LoginEmail' type='email' placeholder='Enter Email'/>

        <input class='LoginPassword' type='password' placeholder='Enter Password'/>

        <h1 class='Forgot'>ForgotPassword?</h1>

        <button id='LoginUser'>LogIn</button>

        <button id='CreateAccount'>Create Account</button>
    
    `);

    CLICKED('#LoginUser',()=>{
        
        EXTERNALJS('../project/LoginPage/LoginUser.js',()=>{LOGINUSER()})

    })

    CLICKED('#CreateAccount',()=>{
        
        EXTERNALJS('../project/CreateAccount/CreateAccountPage.js',()=>{CREATEACCOUNTPAGE()})

    })

}