CREATEACCOUNTPAGE=()=>{

    DISPLAY('',`

        <img class='AppLogo' src='../library/Assets/images/playstore.png'/>

        <input id='UserName' type='text' placeholder='Enter User Name'/>

        <input id='UserEmail' type='email' placeholder='Enter Email'/>

        <input id='UserPassword' type='password' placeholder='Enter Password'/>

        <input id='UserDate' type='text' placeholder='Enter Date Of Birth'/>

        <input id='UserLocation' type='text' placeholder='Enter Location' readonly />

        <div class='NumberDisplay'>

            <h1 id='display' >+</h1>

            <input id='UserTelephone' maxlength='12' type='tel' placeholder='Enter Telephone'/>
        
        </div>

        <button id='CreateUser'>Create Account</button>

        <button id='Login'>LogIn</button>

        <div class='CountriesDiv'></div>

    `);

    CLICKED('#Login',()=>{

        EXTERNALJS('../project/LoginPage/loginPage.js',()=>{LOGINPAGE()});

    })

    
    CLICKED('#CreateUser',()=>{

        STORE('','Updates','CreateAccountPage');

        MODULE(`${Onlink}`,'CONNECTION',(CONNECTION)=>{CONNECTION()})
        
    })

    STORE('','Updates','CreateAccountPageUserFunction');

    MODULE(`${Onlink}`,'CONNECTION',(CONNECTION)=>{CONNECTION()})

}