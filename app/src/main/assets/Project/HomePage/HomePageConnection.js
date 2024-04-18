HOMEPAGECONNECTION=()=>{

    EXTERNALJS(LATESTANIMATIONAPI,()=>{HOMELATESTANIMATION()});
    EXTERNALJS(HOMEANIMATIONAPI,()=>{HOMEANIMATION()});
    EXTERNALJS(HOMEMOVIESAPI,()=>{HOMEMOVIES()});
    EXTERNALJS(LATESTMOVIESAPI,()=>{LATESTMOVIES()});
    EXTERNALJS(HOMEMARATHONSAPI,()=>{HOMEMARATHONS()});
    EXTERNALJS(HOMESERIESAPI,()=>{HOMESERIES()});
    EXTERNALJS(LATESTNIGERIANAPI,()=>{LATESTNIGERIAN()});
    EXTERNALJS(HOMEADVENTUREAPI,()=>{HOMEADVENTURE()});
    EXTERNALJS(HOMEHORRORAPI,()=>{HOMEHORROR()});
    EXTERNALJS(LATESTROMANCEAPI,()=>{LATESTROMANCE()})

    //MORE SECTIONS CLICKED
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
