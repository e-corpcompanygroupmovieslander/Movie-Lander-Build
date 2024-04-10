//ALERT BOX
const ALERTBOX=(DATA)=>{

    VIBRATION(500);

    CREATEELEMENT('div','AlertBox',(ELEMENT)=>{

        STYLED(ELEMENT,'background',localStorage.getItem('AppColour'));

        DISPLAY(ELEMENT,`

            <h1 class='AlertTitle'>Alert</h1>

            <h2 id='AlertMessage' class='MessageTitle'>${DATA}</h2>

            <div class='AlertBoxOptions'>

            <h2 onclick='CloseAlert()' class='MessageTitle'>Cancel</h2>

            <h2 onclick='CloseAlert()' class='MessageTitle'>Agree</h2>

            </div>
        
        `)

        CloseAlert=()=>{

            STYLED(ELEMENT,'display','none');

        }

        ADD('',ELEMENT);

        }

    )

}

//ALERT BOX
const CONFIRMBOX=(DATA,callback)=>{

    VIBRATION(500);

    CREATEELEMENT('div','AlertBox',(ELEMENT)=>{

        STYLED(ELEMENT,'background',localStorage.getItem('AppColour'));

        DISPLAY(ELEMENT,`

            <h1 class='AlertTitle'>Confirm</h1>

            <h2 id='AlertMessage' class='MessageTitle'>${DATA}</h2>

            <div class='AlertBoxOptions'>

            <h2 onclick='CloseAlert()' class='MessageTitle'>Cancel</h2>

            <h2 onclick='ConfirmAlert()' class='MessageTitle'>Agree</h2>

            </div>
        
        `)

        CloseAlert=()=>{

            STYLED(ELEMENT,'display','none');

            return callback(false);

        }

        ConfirmAlert=()=>{

            STYLED(ELEMENT,'display','none');

            return callback(true);

        }

        ADD('',ELEMENT);

        }

    )

}

//MESSAGE DISPLAY
const MESSAGE=(DATA)=>{

    VIBRATION(500);

    CREATEELEMENT('div','MessageDiv',(ELEMENT)=>{

        DISPLAY(ELEMENT,`

            <h2 class='MessageTitle'>${DATA}</h2>
        
        `)

        setTimeout(() => {

            STYLED(ELEMENT,'display','none')
            
        }, 2000);


        ADD('',ELEMENT);

        }

    )

}

//ALERT BOX
const PROMPTBOX=(DATA,callback)=>{

    VIBRATION(500);

    CREATEELEMENT('div','AlertBox',(ELEMENT)=>{

        STYLED(ELEMENT,'background',localStorage.getItem('AppColour'));

        DISPLAY(ELEMENT,`

            <h1 class='AlertTitle'>Prompt</h1>

            <h2 id='AlertMessage' class='MessageTitle'>${DATA}</h2>

            <input class='PromptboxInput' type='text' placeholder='Enter Your Option' />
         
            <div class='AlertBoxOptions'>
            
            <h2 onclick='CloseAlert()' class='MessageTitle'>Cancel</h2>

            <h2 onclick='ConfirmAlert()' class='MessageTitle'>Agree</h2>

            </div>
        
        `)

        CloseAlert=()=>{

            STYLED(ELEMENT,'display','none');

            return callback(false);

        }

        ConfirmAlert=()=>{

            const PromptboxInput=document.querySelector('.PromptboxInput');

            STYLED(ELEMENT,'display','none');

            return callback(PromptboxInput.value);

        }

        ADD('',ELEMENT);

        }

    )

}


//ADD LOADING ICON TO ANY PART OF THE APP
const LOADER=(ELEMENT,CLASS)=>{

    DISPLAY(ELEMENT,`

    <img id='${CLASS}' src='../library/Assets/icon/loading.png' class='LoadingIcon' />
    
    `)

}

//TAKE BACK SOME PART OF THE APP TO ITS ORIGINAL FORM
const ORIGIN=(ELEMENT,DATA)=>{

    DISPLAY(ELEMENT,DATA)

}