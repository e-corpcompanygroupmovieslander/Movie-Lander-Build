const CREATEACCOUNTPAGEDATA=()=>{

    CLICKED('#UserLocation',()=>{

        DECLARATION('#UserLocation',(ELEMENT)=>{

            ELEMENT.value='Uganda'

        })

    })

    console.log('createAccount Data Correction')

}

export{CREATEACCOUNTPAGEDATA}