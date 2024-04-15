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