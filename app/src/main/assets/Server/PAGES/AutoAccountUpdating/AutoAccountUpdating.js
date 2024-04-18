const AUTOACCOUNTUPDATING=()=>{

    GETPACKAGE(LOGINAPI,'cors',(data)=>{

        FINDER(data,'SecretCode',localStorage.getItem('User'),(user)=>{

            CONDITION(user.SecretCode === localStorage.getItem('User') ,

            ()=>CHECK(user,(result)=>{

                STORE('local','UserData',JSON.stringify(user))
            }),

            ()=>CHECK(user,(result)=>{

                REMOVESTORE('local','User'),REMOVESTORE('local','UserData');

                REMOVESTORE('local','Premium'),REMOVESTORE('local','PremiumUser');

                EXTERNALJS('../library/Connection/Connection.js',()=>{APPSTART()})
  
            })
        
            )

        })

    })

}

export{AUTOACCOUNTUPDATING}