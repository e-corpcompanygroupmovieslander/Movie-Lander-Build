HOMELATESTANIMATION=()=>{

    DECLARATION('#LatestAnimation',(ELEMENT)=>{

        GETPACKAGE(ANIMATIONAPI,'cors',(data)=>{

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

                        EXTERNALJS(MOVIEDETAILSPAGEAPI,()=>{MOVIESDETAILSPAGE()})
                        
                           
                    })

                    ADD(ELEMENT,ANIME);

                })


            })
            
            
        })

    })

}