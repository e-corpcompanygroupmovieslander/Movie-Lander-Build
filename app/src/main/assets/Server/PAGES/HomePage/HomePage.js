import { HOMEADVENTURE } from "../HomAdventure/HomeAdventure.js";
import { HOMEANIMATION } from "../HomeAnimations/HomeAnimations.js";
import { HOMEHORROR } from "../HomeHorror/HomeHorror.js";
import { HOMEMARATHONS } from "../HomeMarathons/HomeMarathons.js";
import { HOMEMOVIES } from "../HomeMovies/HomeMovies.js";
import { HOMESERIES } from "../HomeSeries/HomeSeries.js";
import { LATESTANIMATION } from "../LatestAnimation/LatestAnimation.js";
import { LATESTMOVIES } from "../LatestMovies/LatestMovies.js";
import { LATESTNIGERIAN } from "../LatestNigerian/LatestNigerian.js";
import { LATESTROMANCE } from "../LatestRomance/LatestRomance.js";

const HOMEPAGE=()=>{

        DECLARATION('#HomeDiv',(ELEMENT)=>{

            DISPLAY(ELEMENT,`

                <div id='LatestAnimation' class='View'>

                    <img id='AnimationsLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
                
                </div>

                <div id='homeHolder' class='View'>

                    <header class='AppHeader'>

                        <h1 class='SectionName' >Animations</h1>

                        <img id='MoreAnimations' class='SeeMoreIcon' src='../library/Assets/icon/arrow.png'/>
                    
                    </header>

                    <div id='Animations' class='View'>

                        <img id='AnimationsLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
                
                    </div>
                
                </div>

                <div id='homeHolder' class='View'>

                    <header class='AppHeader'>

                        <h1 class='SectionName' >Action</h1>

                        <img id='MoreMovies' class='SeeMoreIcon' src='../library/Assets/icon/arrow.png'/>
                    
                    </header>

                    <div id='Movies' class='View'>

                        <img id='AnimationsLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
                
                    </div>
                
                </div>

                <div id='LatestMovies' class='View'>

                    <img id='AnimationsLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
                
                </div>

                <div id='homeHolder' class='View'>

                    <header class='AppHeader'>

                        <h1 class='SectionName' >Marathons</h1>

                        <img id='MoreMarathons' class='SeeMoreIcon' src='../library/Assets/icon/arrow.png'/>
                    
                    </header>

                    <div id='Marathons' class='View'>

                        <img id='AnimationsLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
                
                    </div>
                
                </div>

                <div id='homeHolder' class='View'>

                    <header class='AppHeader'>

                        <h1 class='SectionName' >Series</h1>

                        <img id='MoreSeries' class='SeeMoreIcon' src='../library/Assets/icon/arrow.png'/>
                    
                    </header>

                    <div id='Series' class='View'>

                        <img id='AnimationsLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
                
                    </div>

                </div>

                <div id='LatestNigerian' class='View'>

                    <img id='AnimationsLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
                
                </div>

                <div id='homeHolder' class='View'>

                    <header class='AppHeader'>

                        <h1 class='SectionName' >Adventure</h1>

                        <img id='MoreAdventure' class='SeeMoreIcon' src='../library/Assets/icon/arrow.png'/>
                    
                    </header>

                    <div id='Adventure' class='View'>

                        <img id='AnimationsLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
                
                    </div>

                </div>

                <div id='homeHolder' class='View'>

                    <header class='AppHeader'>

                        <h1 class='SectionName' >Horror</h1>

                        <img id='MoreHorror' class='SeeMoreIcon' src='../library/Assets/icon/arrow.png'/>
                    
                    </header>

                    <div id='Horror' class='View'>

                        <img id='AnimationsLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
                
                    </div>

                </div>

                <div id='LatestRomance' class='View'>

                    <img id='AnimationsLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
                
                </div>

                <br><br><br>
                    
            `)

        })

        LATESTANIMATION();

        HOMEANIMATION();

        HOMEMOVIES();

        LATESTMOVIES();

        HOMEMARATHONS();

        HOMESERIES();

        LATESTNIGERIAN();

        HOMEADVENTURE();

        HOMEHORROR();

        LATESTROMANCE();

        CLICKED('#MoreAnimations',()=>{

            const DATA={
                "Sections":"Animations",
                "link":ANIMATIONAPI,
            }

            JSONIFICATION(DATA,(data)=>{

                STORE('','Path','SeeMore')

                STORE('','MoviesData',data);

                EXTERNALJS('../project/CatergoriesSelectionPage/CatergorySelectionPage.js',()=>{CATERGORIESSELECTIONPAGE()});

            })

        })

        CLICKED('#MoreMovies',()=>{

            const DATA={
                "Sections":"Action",
                "link":MOVIESAPI,
            }

            JSONIFICATION(DATA,(data)=>{

                STORE('','Path','SeeMore')

                STORE('','MoviesData',data);

                EXTERNALJS('../project/CatergoriesSelectionPage/CatergorySelectionPage.js',()=>{CATERGORIESSELECTIONPAGE()});

            })

        })

        CLICKED('#MoreMarathons',()=>{

            const DATA={
                "Sections":"Marathons",
                "link":MARATHONAPI,
            }

            JSONIFICATION(DATA,(data)=>{

                STORE('','Path','SeeMore')

                STORE('','MoviesData',data);

                EXTERNALJS('../project/CatergoriesSelectionPage/CatergorySelectionPage.js',()=>{CATERGORIESSELECTIONPAGE()});

            })

        })

        CLICKED('#MoreSeries',()=>{

            const DATA={
                "Sections":"Series",
                "link":SERIESAPI,
            }

            JSONIFICATION(DATA,(data)=>{

                STORE('','Path','SeeMore')

                STORE('','MoviesData',data);

                EXTERNALJS('../project/CatergoriesSelectionPage/CatergorySelectionPage.js',()=>{CATERGORIESSELECTIONPAGE()});

            })

        })

        CLICKED('#MoreAdventure',()=>{

            const DATA={
                "Sections":"Adventure",
                "link":ADVENTUREAPI,
            }

            JSONIFICATION(DATA,(data)=>{

                STORE('','Path','SeeMore')

                STORE('','MoviesData',data);

                EXTERNALJS('../project/CatergoriesSelectionPage/CatergorySelectionPage.js',()=>{CATERGORIESSELECTIONPAGE()});

            })

        })

        
        CLICKED('#MoreHorror',()=>{

            const DATA={
                "Sections":"Horror",
                "link":HORRORAPI,
            }

            JSONIFICATION(DATA,(data)=>{

                STORE('','Path','SeeMore')

                STORE('','MoviesData',data);

                EXTERNALJS('../project/CatergoriesSelectionPage/CatergorySelectionPage.js',()=>{CATERGORIESSELECTIONPAGE()});

            })

        })
            
}

export{HOMEPAGE}