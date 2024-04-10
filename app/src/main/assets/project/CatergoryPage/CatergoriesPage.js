CATERGORIESPAGE=()=>{

    DISPLAY('',`

        <header class='AppHeader'>

            <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

            <h1 class='Titles'>Collections</h1>
        
        </header>

        <div id='DataDiv' class='ScrollView'>

            <img id='HomeLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
    
        </div>
    
    `)

    CLICKED('#BackIcon',()=>{

        EXTERNALJS('../project/HomePage/HomePage.js',()=>{HOMEPAGE()})

    })

    DECLARATION('#DataDiv',(ELEMENT)=>{

        GETPACKAGE(CATERGORYAPI,'cors',(data)=>{

            DISPLAY(ELEMENT,'');

            REDUX(data,(element)=>{

                CREATEELEMENT('div','CatergoriesMoviesHolder',(MOVIESHOLDER)=>{

                    DISPLAY(MOVIESHOLDER,`

                        <img class='FreeMoviesImages' src='${CATERGORIESPATH + element.Image}'/>

                        <button class='CatergoriesSections'>${element.Sections}</button>
                    
                    `);

                    EVENT(MOVIESHOLDER,'click',()=>{

                        STORE('','MoviesData',JSON.stringify(element));

                        EXTERNALJS('../project/CatergoriesSelectionPage/CatergorySelectionPage.js',()=>{CATERGORIESSELECTIONPAGE()});

                    })

                    ADD(ELEMENT,MOVIESHOLDER);

                })

            })

        })

    })

    
}