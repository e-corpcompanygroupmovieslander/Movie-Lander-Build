CREATEACCOUNTPAGE=()=>{

    DISPLAY('',`

        <img class='AppLogo' src='../library/Assets/images/movie lander logo.png'/>

        <input type='text' placeholder='Enter User Name'/>

        <input type='email' placeholder='Enter Email'/>

        <input type='password' placeholder='Enter Password'/>

        <input type='text' placeholder='Enter Date Of Birth'/>

        <input type='text' placeholder='Enter Location'/>

        <input type='tel' placeholder='Enter Telephone'/>

        <button>Create Account</button>

        <button id='Login' >LogIn</button>

    `);

    CLICKED('#Login',()=>{

        EXTERNALJS('../project/LoginPage/loginPage.js',()=>{LOGINPAGE()});

    })

}