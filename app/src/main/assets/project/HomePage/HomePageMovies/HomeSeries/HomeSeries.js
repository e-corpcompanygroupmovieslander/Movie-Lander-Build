HOMESERIES=()=>{

    DECLARATION('#Series',(ELEMENT)=>{

        GETPACKAGE(SERIESAPI,'cors',(data)=>{

            DISPLAY(ELEMENT,'');

            SHUFFLE(data,(data)=>{

                REDUX(data,(element)=>{

                    CREATEELEMENT('div','AnimationsHolder',(ANIME)=>{

                        DISPLAY(ANIME,`

                            <img class='AnimationsImage' src='${MOVIESPATH + element.MovieImage}'/>
                        
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

    })

}
