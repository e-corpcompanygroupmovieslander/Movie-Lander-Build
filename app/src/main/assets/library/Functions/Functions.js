//APPENDING DATA TO ELEMENT
const ADD=(ELEMENT,ELEMENT1)=>{
    CONDITION(ELEMENT,
        ()=>ELEMENT.append(ELEMENT1),
        ()=>document.body.append(ELEMENT1)        
    )  
}

//APPCOLOR
const APPCOLOR=(ELEMENT,COLOR)=>{
    CONDITION(ELEMENT,
        ()=>STYLED(ELEMENT,'color',COLOR),
        ()=>document.body.style.color=COLOR
    )
}

//APPMODE
const APPMODE = (ELEMENT, IMG,DEFAULT) => {

    if (IMG === 'Image') {

        document.body.style.backgroundImage = `url(${ELEMENT})`;

        document.body.style.backgroundRepeat = 'no-repeat';

        document.body.style.backgroundPosition = 'center';
        
        document.body.style.backgroundSize = 'cover';

    } else {

        if (ELEMENT) {
           
            localStorage.setItem('AppColour',ELEMENT);

            document.body.style.background = ELEMENT;
            
        } else {
           
            localStorage.setItem('AppColour',DEFAULT);

            document.body.style.background = DEFAULT;
            
        }
        
    }

};

//CHECK DATA COMPARE
const CHECK = (ELEMENT, ACTION) => {
    const result = ELEMENT ;
    return ACTION(result ? result : false);
};

//CLEAR
const CLEAR=(ELEMENT)=>{
    CONDITION(ELEMENT,
        ()=>DISPLAY(ELEMENT,''),
        ()=>DISPLAY(document.body,'')
    )
}

//CLICKED
const CLICKED=(ELEMENT,callback)=>{
    
    const ELEMENT1=document.querySelector(ELEMENT);

    EVENT(ELEMENT1,'click',()=>{
        callback();
    })

}

//CONDITION
const CONDITION = (CONDITION,ACTION,ACTION1) => {
    if (CONDITION) {
      return  ACTION();
    } else {
      return  ACTION1();
    } 
};

//CREATE ELEMENT
const CREATEELEMENT=(ITEM,CLASS,callback)=>{
    const ELEMENT=document.createElement(ITEM);
    if (CLASS) {   
        ELEMENT.classList.add(CLASS)
    }
    return callback(ELEMENT);
}

//DEJSON
const DEJSON = (STORAGE, KEY, callback) => {
    let JSONDATA = '';
    // Assuming CONDITION function handles asynchronous retrieval of data
    CONDITION(STORAGE,
        () => {
            JSONDATA = localStorage.getItem(KEY);
            return JSONDATA;
        },
        () => {
            JSONDATA = sessionStorage.getItem(KEY);
            return JSONDATA;
        }
    );
    // Check if JSONDATA is not empty before parsing
    if (JSONDATA) {
        let data = JSON.parse(JSONDATA);
        return callback(data);
    } else {
        console.error('No data found in storage');
        return null;
    }
}

//DECLARATION
const DECLARATION=(CLASS,callback)=>{
    const ELEMENT=document.querySelector(CLASS);
    return callback(ELEMENT);
}

//DISPLAY DATA
const DISPLAY=(ELEMENT,ELEMENT1)=>{
    CONDITION(ELEMENT,
        ()=>ELEMENT.innerHTML=ELEMENT1,
        ()=>document.body.innerHTML=ELEMENT1   
    )
}

//ENVIRONMENT
const ENVIRONMENT=(TEXT)=>{
    if (TEXT) {
        localStorage.setItem('Environment','Test');
        document.body.style.top='0';
        document.body.style.bottom='0';
    } else {
        localStorage.setItem('Environment','Production');
        document.body.style.top='30px';
    }
}

//ADD EVENT LISTENER
const EVENT = (ELEMENT, FUNCTION, callback) => {
    ELEMENT.addEventListener(FUNCTION, callback);
}

//EXTERNAL JS
const EXTERNALJS = (PATH, callback) => {
    // Create a new script element
    var script = document.createElement('script');
    // Set the source attribute to your JavaScript file
    script.src = PATH;
    // Optionally, you can set other attributes if needed
    script.async = true; // Set async attribute to load asynchronously
    script.onload = function() {
        // Code to execute after the script has loaded (optional)
        console.log('Script loaded successfully');
        // If a callback function is provided, call it
        if (typeof callback === 'function') {
            callback();
        }
    };
    // Append the script element to the head of the document
    document.head.appendChild(script);
    
};

//OPEN FACEBOOK
const FACEBOOK = (usernameOrProfileId) => {
    var facebookLink = 'https://www.facebook.com/' + encodeURIComponent(usernameOrProfileId);
    window.open(facebookLink);
}

//DATA FINDER
const FINDER = (DATA, ELEMENT, ELEMENT1, ACTION) => {
    const user = DATA.find(item => item[ELEMENT] === ELEMENT1);
    return ACTION(user ? user : false);
};

//CREATE FILES
const FILES = (callback) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';
    fileInput.addEventListener('change', function() {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = function(event) {
        const fileData = event.target.result;
        callback(fileData); // Pass the file data to the callback function
      };
      reader.readAsDataURL(file); // Read file data as a data URL
    });
    fileInput.click();
};

//FETCH DATA FROM A SERVER
const GETPACKAGE = (URL, MODE, callback) => {
    fetch(URL, {
        method: "GET",
        mode: MODE
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
            return response.json(); // Return parsed JSON data
        } else {
            return response.text(); // Return response text
        }
    })
    .then((data) => {
        callback(data); // Call the callback function with the fetched data
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
        throw error; // Re-throw the error to handle it where you call GETPACKAGE
    });
};

//GET LOCAL STORAGE
const GETSTORE=(STORAGE,KEY)=>{
    CONDITION(STORAGE==='local',
    ()=>localStorage.getItem(KEY),
    ()=>sessionStorage.getItem(KEY),
    )
}

//OPEN GMAIL
const GMAIL = (emailAddress) => {
    var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress);
    window.open(mailtoLink);
}

//OPEN INSTAGRAME
const INSTAGRAM = (username) => {
    var instagramLink = 'https://www.instagram.com/' + encodeURIComponent(username);
    window.open(instagramLink);
}

//CONVERT DATA TO JSON
const JSONIFICATION=(DATA,callback)=>{

    // Convert data to JSON format
    const jsonData = JSON.stringify(DATA);

    return callback(jsonData)

}

//MODULES
const MODULE = (PATH, MODULE_NAME, callback) => {
    import(PATH).then(module => {
        callback(module[MODULE_NAME]); // Pass the imported function to the callback function
    }).catch(error => {
        console.error('Error importing module:', error);
    });
};

//DEHARSH PASSWORD
const PASSWORDDEHASH = async (hashedPassword, inputPassword, callback) => {
    try {
        // Convert input password string to ArrayBuffer
        const encoder = new TextEncoder();
        const inputData = encoder.encode(inputPassword);
        // Hash the input password using SHA-256 algorithm
        const inputHashBuffer = await crypto.subtle.digest('SHA-256', inputData);
        // Convert ArrayBuffer to hex string
        const inputHashArray = Array.from(new Uint8Array(inputHashBuffer));
        const inputHashHex = inputHashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        // Compare the hashed input password with the stored hashed password
        const match = hashedPassword === inputHashHex;
        // Invoke the callback with the result
        callback(match);
    } catch (error) {
        // If any error occurs, alert the error
        console.log(error);
    }
};

//PASSWORD HARSH
const PASSWORDHASH = async (password, callback) => {
    try {
        // Convert password string to ArrayBuffer
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        // Hash password using SHA-256 algorithm
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        // Convert ArrayBuffer to hex string
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        // Invoke the callback with the hashed password
        callback(hashHex);
    } catch (error) {
        // If any error occurs, alert the error
        console.log(error);
    }
};

//POST DATA TO A SERVER
const POSTPACKAGE = (URL, MODE, DATA, callback) => {
    fetch(URL, {
        method: 'POST',
        mode: MODE,
        body: JSON.stringify(DATA), // Assuming DATA is already a JSON object
    })
    .then(res => {
        const contentType = res.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
            return res.json(); // Return the parsed JSON
        } else {
            return res.text(); // Return the response body as text
        }
    })
    .then((data) => {
        callback(data); // Call the callback function with the fetched data
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
        throw error; // Re-throw the error to handle it where you call POSTPACKAGE
    });
};

//BREAK DOWN THE DATA
const REDUX = (DATA, ACTION) => {
    const modifiedData = [];
    DATA.forEach(element => {   
        modifiedData.push(ACTION(element));
    });
    return modifiedData;
};

//REMOVE LOCAL STORAGE
const REMOVESTORE=(STORAGE,KEY)=>{
    CONDITION(STORAGE==='local',
    ()=>localStorage.removeItem(KEY),
    ()=>sessionStorage.removeItem(KEY)
    )
}

//SWITCH
const ROUTER = (input, cases, defaultCase) => {
    const caseFunction = cases[input] || defaultCase;
    return caseFunction();
};

//PRODUCE A SINGLE OUT PUT
const SINGLESHUFFLE = (array, callback) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    const shuffledElement = array[randomIndex];
    callback(shuffledElement); 
};

//SHUFFLE DATA
const SHUFFLE = (array, callback) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    callback(array);
};

//SET LOCAL STORAGE
const STORE=(STORAGE,KEY,ELEMENT)=>{
    CONDITION(STORAGE==='local',
    ()=>localStorage.setItem(KEY,ELEMENT),
    ()=>sessionStorage.setItem(KEY,ELEMENT)
    )
}

//STYLE
const STYLED=(ELEMENT,PROPERTY,VALUE)=>{
    ELEMENT.style[PROPERTY]=VALUE;
}


//OPEN TELEGRAM
const TELEGRAM = (username) => {
    var telegramLink = 'https://t.me/' + encodeURIComponent(username);
    window.open(telegramLink);
}

//OPEN TWITTER
const TWITTER = (username) => {
    var twitterLink = 'https://twitter.com/' + encodeURIComponent(username);
    window.open(twitterLink);
}

//OPEN WEBSITE
const WEBSITE = (url) => {
    window.open(url);
}

//OPEN WHATSAPP
const WHATSAPP=(phoneNumber) => {
    var whatsappLink = 'https://wa.me/' + encodeURIComponent(phoneNumber);
    window.open(whatsappLink);
}

//OPEN YOUTUBE
const YOUTUBE = (query) => {
    var youtubeLink = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query);
    window.open(youtubeLink);
}

//ZOOM FUNCTION
const ZOOM=()=>{
    // Prevent default behavior for multi-touch and wheel events
    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });
    document.addEventListener('wheel', function (event) {
        if ((event.ctrlKey || event.metaKey) && !event.shiftKey) {
            event.preventDefault();
        }
    });
}