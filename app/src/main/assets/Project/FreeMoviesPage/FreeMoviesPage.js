FREEMOVIESPAGE=()=>{

    DISPLAY('',`

        <header class='AppHeader'>

            <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>
        
            <h1 class='Titles'>Free Watch</h1>

        </header>

        <div id='DataDiv' class='ScrollView'>

            <img id='HomeLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
    
        </div>
    
    `)

    CLICKED('#BackIcon',()=>{

        EXTERNALJS('../project/HomePage/HomePage.js',()=>{HOMEPAGE()})

    })

    DECLARATION('#DataDiv',(ELEMENT)=>{

        GETPACKAGE(FREEMOVIESAPI,'cors',(data)=>{

            DISPLAY(ELEMENT,'');

            REDUX(data,(element)=>{

                CREATEELEMENT('div','FreeMoviesHolder',(MOVIESHOLDER)=>{

                    DISPLAY(MOVIESHOLDER,`

                        <img class='FreeMoviesImages' src='${MOVIESPATH + element.MovieImage}'/>
                    
                    `);

                    EVENT(MOVIESHOLDER,'click',()=>{

                        STORE('','MovieData',JSON.stringify(element));

                        EXTERNALJS('../project/FreeMoviesPage/FreeMoviesWatchPage.js',()=>{FREEMOVIESWATCHPAGE()});

                    })

                    ADD(ELEMENT,MOVIESHOLDER);

                })

            })

        })

    })

}