FREEMOVIESWATCHPAGE=()=>{

    DEJSON('','MovieData',(data)=>{

        DISPLAY('',`

            <iframe src='${YOUTUBELINK+data.MoveTrailer}'/></iframe>

            <header class='AppHeader'>

                <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>
            
            </header>

        `)    

        CLICKED('#BackIcon',()=>{

            EXTERNALJS('../project/FreeMoviesPage/FreeMoviesPage.js',()=>{FREEMOVIESPAGE()})

        })

    })

}