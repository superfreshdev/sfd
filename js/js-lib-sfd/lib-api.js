/* 

    lib-api.js

    > defines functions which use often apis for example 
    getting data like fetch api json files etc. ...


*/


/* ------------------------------------------------------------ */ 
/* Asyn Function ( asynchrone process )
/* ------------------------------------------------------------ */ 


  // divListOfDocCards.appendChild( domImg )


async function getJsonFile( request ) {

    try {

        const response = await fetch( request ); 
        const data = await response.json();

        console.log( "getJsonFile = " + data.userData[0].username )

        data.userData.forEach(element => {
            
            console.log( "username: " + element.username )
            var domSpan = createSpan( "" , "" ,  element.username );

            divListOfDocCards.appendChild( domSpan )

        });

    } catch {

        console.log( error )

    }
       
}


getJsonFile( "user.json" )


// console.log( " objJsonData = " + objJsonData  )






// getJsonObject( objDataJson );

// async function getJsonObject( objDataJson ) {

//     if( await objDataJson != null ) {
//         console.log( "lib-api => " + objDataJson.userData[0].username  )
//     }
// }


// if( response.status == "404") {
//     console.log("FILE NOT FOUND - 😫")
// }

// if( response.status == "402") {
//     console.log("NOT AVAILABE ACCESS TOKEN - 😂")
// }
















// console.log( "lib-api => " + objJsonData.userData[0].username  )

/*

    to do 

    check is response correct ? 

    check is builiding data json object correct ? 

-----------------------

    onSucess 
    onError 

    - connection error ? 
    ( token , ... ? )

    - file not awailable ? 
    - no access rights to this file 

*/