const TRENDINGPAGE=()=>{

    DISPLAY('',`

        <header class='AppHeader'>

            <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

            <h1 class='Titles'>Trends</h1>
        
        </header>

        <div id='DataDiv' class='ScrollView'>

            <img id='HomeLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>

        </div>

    `)

    CLICKED('#BackIcon',()=>{

        EXTERNALJS('../project/CommunityPage/CommunityPage.js',()=>{COMMUNITYPAGE()});

    })

    GETPACKAGE(MOVIESAPI,'cors',(data)=>{

        DECLARATION('#DataDiv',(ELEMENT)=>{

            DISPLAY(ELEMENT,'')

            SHUFFLE(data,(data)=>{

                REDUX(data,(element)=>{

                    CREATEELEMENT('div','View',(MOVIEHOLDER)=>{

                        DISPLAY(MOVIEHOLDER,`

                            <img class='AnimationImage' src='${MOVIESPATH + element.MovieImage}'/>
                        
                        `)

                        ADD(ELEMENT,MOVIEHOLDER)

                    })
    
                })
    
            })

        })

    })

}

export{TRENDINGPAGE}