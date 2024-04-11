const AUTODELETEACCOUNT=(DIV)=>{

    GETPACKAGE(DELETEACCOUNTGET,'cors',(data)=>{
        
        FINDER(data,'User',localStorage.getItem('User'),(user)=>{

            CONDITION(user.User === localStorage.getItem('User'),

            ()=>CHECK(user,(result)=>{

                REMOVESTORE('local','User'),REMOVESTORE('local','UserData');

                REMOVESTORE('local','Premium'),REMOVESTORE('local','PremiumUser');

                LOGINPAGE(DIV);
  
            }),

            ()=>CHECK(user,(result)=>{

                console.log('Account Not Deleted');
                
            })
            
            )

        })

    })

}

export{AUTODELETEACCOUNT}