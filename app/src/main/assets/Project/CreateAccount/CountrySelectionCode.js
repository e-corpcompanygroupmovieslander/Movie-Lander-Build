SELECTCOUNTRY=()=>{

    DECLARATION('.CountriesDiv',(ELEMENT)=>{

        STYLED(ELEMENT,'display','block')

        STYLED(ELEMENT,'background',localStorage.getItem('AppColour'))

        REDUX(COUNTRYDATA,(element)=>{

            DECLARATION('.DivData',(DATA)=>{

                CREATEELEMENT('button','Button',(Button)=>{

                    DISPLAY(Button,`
                        
                        <h1 class='Buttontitle'>${element.name}</h1>

                        <img class='ButtonIcon' src='../library/Assets/icon/location.png'/>
                
                    `)

                    ADD(DATA,Button);

                    EVENT(Button,'click',()=>{

                        const CODEDISPLAY=document.querySelector('#display');

                        DISPLAY(CODEDISPLAY,element.phoneCode);

                        const COUNTRYDISPLAY=document.querySelector('#UserLocation');

                        COUNTRYDISPLAY.value=element.name;

                        STORE('','Code',element.phoneCode)
                        
                        STYLED(ELEMENT,'display','none');

                    })

                })
    
            })

        })

        CLICKED('#CloseButtonCountry',()=>{

            STYLED(ELEMENT,'display','none');

        })
    })

}