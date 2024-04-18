const AUTODEVICE=()=>{
      
    // Functions to get browser and OS information
    function getBrowserName() { return navigator.appName; }
    function getBrowserVersion() { return navigator.appVersion; }
    function getOSName() { return navigator.platform; }
    function getOSVersion() { return navigator.userAgent; }

    GETPACKAGE(DEVICELOGINAPI,'cors',(data)=>{

        REVERSE(data,(result)=>{

            FINDER(result,'User',localStorage.getItem('User'),(user)=>{

                JSONIFICATION(getBrowserVersion(),(data)=>{

                    // Split the text into an array of words
                    var words = user.Device.split(" ");

                    // Add key-value pairs to each word
                    var wordsWithKeyValue = words.map(function(word, index) {
                        return { word: word, key: index }; // You can define your own key here
                    });

                    // Convert the array into a JSON object
                    var jsonObject = { words: wordsWithKeyValue };

                    // Convert JSON object to string
                    var jsonText = JSON.stringify(jsonObject);

                    //FOR MY DEVICE

                    // Save the JSON string to localStorage
                    sessionStorage.setItem('wordList', jsonText);

                      // Split the text into an array of words
                      var words = data.split(" ");

                      // Add key-value pairs to each word
                      var wordsWithKeyValue = words.map(function(word, index) {
                          return { word: word, key: index }; // You can define your own key here
                      });
  
                      // Convert the array into a JSON object
                      var jsonObject = { words: wordsWithKeyValue };
  
                      // Convert JSON object to string
                      var jsonText = JSON.stringify(jsonObject);
  
                      // Save the JSON string to localStorage
                      sessionStorage.setItem('list', jsonText);

                })

                CONDITION(user.Device === getBrowserVersion(),
            
                    ()=>CHECK(getBrowserVersion(),(result)=>{
                        REMOVESTORE('','list');
                        REMOVESTORE('','wordList');
                    }),

                    ()=>CHECK(getBrowserVersion(),(result)=>{

                        // Retrieve the JSON string from localStorage
                        var storedJsonText = sessionStorage.getItem('wordList');

                        // Parse the JSON string to convert it back into a JavaScript object
                        var storedJsonObject = JSON.parse(storedJsonText);

                        // Access the desired key-value pair from the object
                        var keyValue = storedJsonObject.words[4].word; // Assuming you want to access the key-value pair at index 1

                        var keyValuer = storedJsonObject.words[5].word;

                        var ActiveVersion = storedJsonObject.words[2].word;

                        var Version = storedJsonObject.words[3].word;

                        //FOR MY DEVICE

                        // Retrieve the JSON string from localStorage
                        var storedJsonText = sessionStorage.getItem('list');

                        // Parse the JSON string to convert it back into a JavaScript object
                        var storedJsonObject = JSON.parse(storedJsonText);

                        // Access the desired key-value pair from the object
                        var keyValu = storedJsonObject.words[4].word; // Assuming you want to access the key-value pair at index 1

                        var keyValur = storedJsonObject.words[5].word  ;

                        DISPLAY('',`

                            <img class='AppLogo' src='../library/Assets/images/playstore.png'/>
                
                            <h1 class='VersionName'>Alert</h1>
                
                            <div class='VersionMessage'>

                                <h2>Choose Device</h2> 

                                <h1 class='Devices'>Active Device</h1>

                                <button id='' class='Button'>
                
                                    <h1 class='Buttontitle'>${keyValue} ${keyValuer}</h1>

                                    <h1 class='Titles'>${ActiveVersion} ${Version} </h1>
                                
                                </button>

                                <h1 class='Devices'>New Phone</h1>

                                <button id='oldaccount' class='Button'>
                
                                    <h1 class='Buttontitle'>${keyValu} ${keyValur}</h1>
                    
                                    <img class='SeeMoreIcon' src='../library/Assets/icon/arrow.png'/>
                                
                                </button>
                                
                            </div>
                
                            <button id='UpdateButton' class='Button'>
                
                                <h1 class='Buttontitle'>Sign Out All Devices</h1>
                
                                <img class='ButtonIcon' src='../library/Assets/icon/logout.png'/>
                            
                            </button>
                        
                        `);

                        CLICKED('#oldaccount',()=>{

                            CONFIRMBOX(`The New Phone Will Become The Active Account`,(data)=>{

                                CONDITION(data === true,
                
                                    ()=>DECLARATION('#oldaccount',(ELEMENT)=>{

                                        LOADER(ELEMENT);
                                     
                                        const DEVICEDATA={

                                            "User":localStorage.getItem('User'),
                                            "Device": getBrowserVersion(),
                                           "Date":new Date()
                                        }
                                    
                                        // Functions to get browser and OS information
                                        function getBrowserName() { return navigator.appName; }
                                        function getBrowserVersion() { return navigator.appVersion; }
                                        function getOSName() { return navigator.platform; }
                                        function getOSVersion() { return navigator.userAgent; }

                                        POSTPACKAGE(DEVICELOGINAPI,'no-cors',DEVICEDATA,(data)=>{

                                            EXTERNALJS('../project/HomePage/HomePage.js',()=>{HOMEPAGE()})

                                        })

                                    }),
                
                                    ()=>console.log('Still Device')
                                
                                )
                
                            })

                        })


                        CLICKED('#UpdateButton',()=>{

                            DECLARATION('#UpdateButton',(ELEMENT)=>{

                                const DEVICEDATA={

                                    "User":localStorage.getItem('User'),
                                    "Device": "",
                                "Date":new Date()
                                }
        
                                LOADER(ELEMENT)
        
                                POSTPACKAGE(DEVICELOGINAPI,'no-cors',DEVICEDATA,(data)=>{
        
                                    REMOVESTORE('local','User');

                                    REMOVESTORE('local','UserData');

                                    REMOVESTORE('local','Premium');
                                    
                                    REMOVESTORE('local','PremiumUser');

                                    EXTERNALJS('../project/LoginPage/loginPage.js',()=>{LOGINPAGE()})
                                
                                })
                            })       
                        })
                    })
                )
            })
        })
    })

}

export{AUTODEVICE}