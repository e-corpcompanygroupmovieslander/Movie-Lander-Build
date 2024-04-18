CATERGORIESSELECTIONPAGE=()=>{

    DEJSON('','MoviesData',(data)=>{

        DISPLAY('',`

            <header class='AppHeader'>

                <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

                <h1 class='Titles'>${data.Sections}</h1>
            
            </header>

            <div id='DataDiv' class='ScrollView'>

                <img id='HomeLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
        
            </div>
    
        `)

        CLICKED('#BackIcon',()=>{

            CONDITION(sessionStorage.getItem('Path') === 'SeeMore',

            ()=>EXTERNALJS('../project/HomePage/HomePage.js',()=>{HOMEPAGE()}),

            ()=>EXTERNALJS('../project/CatergoryPage/CatergoriesPage.js',()=>{CATERGORIESPAGE()})
        
            )
    
        })

        DECLARATION('#DataDiv',(ELEMENT)=>{

            GETPACKAGE(data.link,'cors',(data)=>{
    
                DISPLAY(ELEMENT,'');
    
                REDUX(data,(element)=>{
    
                    CREATEELEMENT('div','FreeMoviesHolder',(MOVIESHOLDER)=>{
    
                        DISPLAY(MOVIESHOLDER,`
    
                            <img class='FreeMoviesImages' src='${MOVIESPATH + element.MovieImage}'/>
                        
                        `);
    
                        EVENT(MOVIESHOLDER,'click',()=>{

                            STORE('','MovieData',JSON.stringify(element));
    
                            EXTERNALJS(MOVIEDETAILSPAGEAPI,()=>{MOVIESDETAILSPAGE()})
                            
                        })
    
                        ADD(ELEMENT,MOVIESHOLDER);
    
                    })
    
                })
    
            })
    
        })
    })

}