ABOUTMEPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        DISPLAY('',`

            <header class='AppHeader'>

                <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

                <h1 class='Titles'>Bio Data</h1>
            
            </header>

            <div id='DataDiv' class='ScrollView'>

                <button class='MyDataButton'>

                    <h1 class='mytitle'>User Name</h1>

                    <img class='myIcon' src='../library/Assets/icon/user.png'/>
                
                    <h1 class='MyData'>${data.UserName}</h1>

                </button>

                <button class='MyDataButton'>

                    <h1 class='mytitle'>Email</h1>

                    <img class='myIcon' src='../library/Assets/icon/gmail.png'/>
                
                    <h1 class='MyData'>${data.Email}</h1>

                </button>

                <button class='MyDataButton'>

                    <h1 class='mytitle'>Location</h1>

                    <img class='myIcon' src='../library/Assets/icon/location.png'/>
                
                    <h1 class='MyData'>${data.Location}</h1>

                </button>

                <button class='MyDataButton'>

                    <h1 class='mytitle'>Contact</h1>

                    <img class='myIcon' src='../library/Assets/icon/phone.png'/>
                
                    <h1 class='MyData'>+${data.Telephone}</h1>

                </button>

                <button class='MyDataButton'>

                    <h1 class='mytitle'>Reference Code</h1>

                    <img class='myIcon' src='../library/Assets/icon/secretCode.png'/>
                
                    <h1 class='MyData'>${data.SecretCode}</h1>

                </button>

                <button id='LogOut' class='Button'>

                    <h1 class='Buttontitle'>Log Out</h1>

                    <img class='ButtonIcon' src='../library/Assets/icon/logOut.png'/>
                
                </button>

                <button id='DeleteAccount' class='Button'>

                    <h1 class='Buttontitle'>Delete My Account</h1>

                    <img class='ButtonIcon' src='../library/Assets/icon/delete.png'/>
                
                </button>

            </div>

        `)

        CLICKED('#BackIcon',()=>{

            EXTERNALJS('../project/UserAccountPage/UserAccountPage.js',()=>{USERACCOUNTPAGE()})

        })

        CLICKED('#LogOut',()=>{

            REMOVESTORE('local','User');

            REMOVESTORE('local','UserData');

            EXTERNALJS('../project/LoginPage/loginPage.js',()=>{LOGINPAGE()})

        })

        CLICKED('#DeleteAccount',()=>{

            EXTERNALJS('../project/DeleteAccountPage/DeleteAccountPage.js',()=>{DELETEACCOUNTPAGE()})

        })

    })

}