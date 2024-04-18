import { MOVIESDETAILSPAGE } from "../MoviesDetailsPage/MoviesDetailsPage.js"

const MOVIESDATAPAGE=()=>{

    DEJSON('','MovieData',(data)=>{

        DISPLAY('',`

            <header class='AppHeader'>

                <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>
            
                <h1 class='Titles'>Details</h1>

            </header>

            <div id='DataDiv' class='ScrollView'>${data.MovieDetails}</div>

        `)   
        
        CLICKED('#BackIcon',()=>{

            MOVIESDETAILSPAGE();
            
        })

    })

    
}

export{MOVIESDATAPAGE}