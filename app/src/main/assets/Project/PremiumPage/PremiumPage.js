PREMIUMPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        CONDITION( data.Location === 'Uganda',

        ()=>EXTERNALJS(UGANDANPREMIUMPAGEAPI,()=>{UGANDANPREMIUMPAGE()}),

        ()=>EXTERNALJS(USPREMIUMPAGEAPI,()=>{USPREMIUMPAGE()})
    
        )

    })

}