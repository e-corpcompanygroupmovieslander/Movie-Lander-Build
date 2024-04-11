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

        EXTERNALJS('../project/CatergoryPage/CatergoriesPage.js',()=>{CATERGORIESPAGE()})

    })

    CLICKED('#FreeMovies',()=>{

        EXTERNALJS('../project/FreeMoviesPage/FreeMoviesPage.js',()=>{FREEMOVIESPAGE()})

    })

    CLICKED('#UserAccount',()=>{

        EXTERNALJS('../project/UserAccountPage/UserAccountPage.js',()=>{USERACCOUNTPAGE()})

    })

    STORE('','Updates','HomePage')

    MODULE(`${Onlink}`,'CONNECTION',(CONNECTION)=>{CONNECTION()})

}
