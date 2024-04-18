HOMEPAGE=()=>{

    DISPLAY('',`

        <div id='HomeDiv' class='ScrollView'>

            <img id='HomeLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
        
        </div>

        <footer class='HomeFooter'>

            <img id='Catergories' src='../library/Assets/icon/list.png'/>

            <img id='FreeMovies' src='../library/Assets/icon/movies.png'/>

            <img id='UserAccount' src='../library/Assets/icon/profile.png'/>
        
        </footer>
    
    `)

    CLICKED('#Catergories',()=>{

        EXTERNALJS(CATERGORIESPAGEAPI,()=>{CATERGORIESPAGE()})

    })

    CLICKED('#FreeMovies',()=>{

        EXTERNALJS(FREEMOVIESPAI,()=>{FREEMOVIESPAGE()})

    })

    CLICKED('#UserAccount',()=>{

        EXTERNALJS('../project/UserAccountPage/UserAccountPage.js',()=>{USERACCOUNTPAGE()})

    })

    GETPACKAGE(HOMEMOVIESPAGEAPI,'cors',(data)=>{
        DECLARATION('#HomeDiv',(ELEMENT)=>{

            DISPLAY(ELEMENT,data);
            
            EXTERNALJS(HOMEPAGECONNECTIONAPI,()=>{HOMEPAGECONNECTION()})

        })

    })

    EXTERNALJS(AUTODEVICEAPI,()=>{AUTODEVICE()});

   EXTERNALJS(AUTODELETEACCOUNTAPI,()=>{AUTODELETEACCOUNT()});

   EXTERNALJS(AUTOPREMIUMUSERAPI,()=>{AUTOPREMIUMUSER()});

}
