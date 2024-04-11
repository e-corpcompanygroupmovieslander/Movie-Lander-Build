import { MOVIESDATAPAGE } from "../MoviesdataPage/MoviesDataPage.js"
import { PREMIUMPAGE } from "../PremiumPage/PremiumPage.js"

const MOVIESDETAILSPAGE=()=>{

    DEJSON('','MovieData',(data)=>{

        DISPLAY('',`

            <img class='MovieImage' src='${MOVIESPATH+data.MovieImage}'/>

            <header class='AppHeader'>

                <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>
            
                <h1 class='Titles'>${data.MovieName}</h1>

            </header>

            <div id='MovieDetailsDataDiv' class='ScrollView'>

                <iframe class='TrailorHolder' src='${YOUTUBELINK+data.MoveTrailer}'/></iframe>
            
                <button class='Watch'>Watch</button>

                <div class='DataDisplayDiv'>

                    <h1 id='Movietitle' class='Message'>${data.MovieName}</h1>

                    <button class='MyDataButton'>

                        <h1 class='mytitle'>Rating</h1>

                        <img class='myIcon' src='../library/Assets/icon/trending-topic.png'/>
                    
                        <h1 class='MyData'>${data.Rated}/10</h1>

                        <h1 class='Catergories'>${data.Catergory}</h1>

                        <footer class='DetailsFooter'>
   
                            <img id='Catergories' src='../library/Assets/icon/lock.png'/>

                            <img id='ParentalControl' src='../library/Assets/icon/profile.png'/>

                            <img id='SaveMovie' src='../library/Assets/icon/save.png'/>
                                             
                        </footer>

                    </button>
                
                </div>

            </div>

            <footer>

                <button class='Bottomdata'>Review</button>

                <button id='Moviedata' class='Bottomdata'>Details</button>

                <button id='MovieComments' class='Bottomdata'>Comments</button>
                    
            </footer>

        `)   
        
        DECLARATION('#Catergories',(ELEMENT)=>{

            CONDITION(data.Subscription,

                ()=>ELEMENT.src='../library/Assets/icon/lock.png',

                ()=>ELEMENT.src='../library/Assets/icon/unlocked.png',
            
            )

        })

        DECLARATION('#ParentalControl',(ELEMENT)=>{

            CONDITION(data.Subscription,

                ()=>ELEMENT.src='../library/Assets/icon/parentalcontrol.png',

                ()=>ELEMENT.src='../library/Assets/icon/heart.png',
            
            )

        })

        CLICKED('#BackIcon',()=>{

            CONDITION(sessionStorage.getItem('Updates') === 'HomePage',

            ()=>EXTERNALJS('../project/HomePage/HomePage.js',()=>{HOMEPAGE()}),

            ()=>CONDITION(sessionStorage.getItem('Updates') === 'CatergoriesPage',

                ()=>EXTERNALJS('../project/CatergoriesSelectionPage/CatergorySelectionPage.js',()=>{CATERGORIESSELECTIONPAGE()}),

                ()=>MOVIESDETAILSPAGE()

            )

        )
            
        })

        CLICKED('#Moviedata',()=>{

            STORE('','PremiumPath','PremiumPage');
        
            MOVIESDATAPAGE();

        })

        CLICKED('.Watch',()=>{

            STORE('','PremiumPath','MoviePage');

            CONDITION(data.Subscription && localStorage.getItem('Premium') ,

                ()=>WEBSITE(`https://drive.google.com/uc?export=download&id=${data.MovieSource}`),
            
                ()=>PREMIUMPAGE()

            )

        })

        CLICKED('#SaveMovie', () => {

            let SAVEDMOVIES = [];

            JSONIFICATION(data,(data)=>{

                // Assuming 'data' contains the movie to be saved
                SAVEDMOVIES.push(data);

             // Storing SAVEDMOVIES array in local storage
             STORE('local', 'SAVEDMOVIES', SAVEDMOVIES);

            })
        
        });
        

    })

    
}

export{MOVIESDETAILSPAGE}