import { MOVIESDETAILSPAGE } from "../MoviesDetailsPage/MoviesDetailsPage.js";

const LATESTMOVIES=()=>{

    DECLARATION('#LatestMovies',(ELEMENT)=>{

        GETPACKAGE(MOVIESAPI,'cors',(data)=>{

            DISPLAY(ELEMENT,'');

            SINGLESHUFFLE(data,(element)=>{

                CREATEELEMENT('div','latestImageDiv',(ANIME)=>{

                    DISPLAY(ANIME,`

                        <img class='LatestImage' src='${MOVIESPATH + element.MovieImage}'/>
                        
                        <button class='About'>Watch</button>

                        <h1 class='UserName'>${element.MovieName}</h1>
                    `)

                    EVENT(ANIME,'click',()=>{

                        STORE('','Path','HomePage');

                        STORE('','MovieData',JSON.stringify(element));

                        MOVIESDETAILSPAGE()
                           
                    })

                    ADD(ELEMENT,ANIME);

                })


            })
            
            
        })

    })

}

export{LATESTMOVIES}