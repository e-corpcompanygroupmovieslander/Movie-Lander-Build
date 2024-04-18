import { MOVIESDETAILSPAGE } from "../MoviesDetailsPage/MoviesDetailsPage.js";

const LATESTROMANCE=()=>{

    DECLARATION('#LatestRomance',(ELEMENT)=>{

        GETPACKAGE(ROMANCEAPI,'cors',(data)=>{

            DISPLAY(ELEMENT,'');

            SINGLESHUFFLE(data,(element)=>{

                CREATEELEMENT('div','latestImageDiv',(ANIME)=>{

                    DISPLAY(ANIME,`

                        <img class='LatestImage' src='${MOVIESPATH + element.MovieImage}'/>
                        
                        <button class='About'>Watch</button>

                        <h1 id='LatestTitle' class='UserName'>${element.MovieName}</h1>
                    `)

                    EVENT(ANIME,'click',()=>{

                        STORE('','Path','HomePage');

                        STORE('','MovieData',JSON.stringify(element));

                        MOVIESDETAILSPAGE();
                           
                    })

                    ADD(ELEMENT,ANIME);

                })

            })
                
        })

    })

}

export{LATESTROMANCE}