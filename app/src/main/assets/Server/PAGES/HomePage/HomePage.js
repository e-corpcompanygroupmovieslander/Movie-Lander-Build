import { HOMEANIMATION } from "../HomeAnimations/HomeAnimations.js";
import { HOMEMARATHONS } from "../HomeMarathons/HomeMarathons.js";
import { HOMEMOVIES } from "../HomeMovies/HomeMovies.js";
import { HOMESERIES } from "../HomeSeries/HomeSeries.js";

const HOMEPAGE=()=>{

    DECLARATION('#HomeDiv',(ELEMENT)=>{

        DISPLAY(ELEMENT,`

            <div id='homeHolder' class='View'>

                <header class='AppHeader'>

                    <h1 class='SectionName' >Animations</h1>

                    <img id='BackIcon' class='SeeMoreIcon' src='../library/Assets/icon/arrow.png'/>
                
                </header>

                <div id='Animations' class='View'>

                    <img id='AnimationsLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
            
                </div>
            
            </div>

            <div id='homeHolder' class='View'>

                <header class='AppHeader'>

                    <h1 class='SectionName' >Movies</h1>

                    <img id='BackIcon' class='SeeMoreIcon' src='../library/Assets/icon/arrow.png'/>
                
                </header>

                <div id='Movies' class='View'>

                    <img id='AnimationsLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
            
                </div>
            
            </div>

            <div id='homeHolder' class='View'>

                <header class='AppHeader'>

                    <h1 class='SectionName' >Marathons</h1>

                    <img id='BackIcon' class='SeeMoreIcon' src='../library/Assets/icon/arrow.png'/>
                
                </header>

                <div id='Marathons' class='View'>

                    <img id='AnimationsLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
            
                </div>
            
            </div>

            <div id='homeHolder' class='View'>

                <header class='AppHeader'>

                    <h1 class='SectionName' >Series</h1>

                    <img id='BackIcon' class='SeeMoreIcon' src='../library/Assets/icon/arrow.png'/>
                
                </header>

                <div id='Series' class='View'>

                    <img id='AnimationsLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
            
                </div>

            </div>

            <br><br><br>

        `)

        HOMEANIMATION();

        HOMEMOVIES();

        HOMEMARATHONS();

        HOMESERIES();

    })
    
}

export{HOMEPAGE}