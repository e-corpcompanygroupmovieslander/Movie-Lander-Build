CREATEACCOUNTPAGE=()=>{

    REMOVESTORE('','Code');

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

        <div class='CountriesDiv'>

            <h2 class='CountryMessage'>Select Country</h2>

            <button id='CloseButtonCountry' >Close</button>

            <div class='DivData'><div>
        
        </div>

    `);


    CLICKED('#Login',()=>{

        EXTERNALJS('../project/LoginPage/loginPage.js',()=>{LOGINPAGE()});

    })

    
    CLICKED('#CreateUser',()=>{

        EXTERNALJS('../project/CreateAccount/CreateUserAccount.js',()=>{CREATEUSERACCOUNT()});
        
    })

    CLICKED('#UserLocation',()=>{

        EXTERNALJS('../project/CreateAccount/CountrySelectionCode.js',()=>{SELECTCOUNTRY()});

    })

    CLICKED('#UserDate',()=>{

        DECLARATION('#UserDate',(ELEMENT)=>{
            ELEMENT.type='date'
        })

    })


}