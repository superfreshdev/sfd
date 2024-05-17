/* 

    lib-api.js

    > defines functions which use often apis for example 
    getting data like fetch api json files etc. ...


*/

function countMaxPdfDocs ( objDocCategories ) {

    return  objDocCategories.frontend.length +  objDocCategories.backend.length +  objDocCategories.tools.length;
}

function getCorrectDocPath ( objDocCategoryPathes , strChoosenCategory ) {

    switch( strChoosenCategory ) {

        case "frontend": 
            return objDocCategoryPathes.pathFrontend;

        case "backend":
            return objDocCategoryPathes.pathBackend;

        case "tools":
            return objDocCategoryPathes.pathTools;

        default:
            return false;

    }

}

function printSelectOptions( strDefaultOption,  strArray ) {

    let resultDisplayArray = [];

    // add bitte auswählen 
    resultDisplayArray += `<option value="">${ strDefaultOption }</option>`;

    for( let i=0; i < strArray.length; i++ ) {

        resultDisplayArray += `<option value="">${strArray[i].optionText }</option>`;
 
    }

    return resultDisplayArray;

}

/* ------------------------------------------------------------ */ 
/* Asyn Function ( asynchrone process )
/* ------------------------------------------------------------ */ 

const inventory = [
    { name: "complete", type: "vegetables", quantity: 5 },
    { name: "planning", type: "fruit", quantity: 0 },
    { name: "complete", type: "meat", quantity: 23 },
    { name: "planning", type: "fruit", quantity: 5 },
    { name: "complete", type: "meat", quantity: 22 },
  ];



// const result = Object.groupBy(inventory, ({ name }) => name);

// console.log( result )

async function createDocCardList( jsonRessourceRequest , jsonDataRequest , strChoosenDocTopic ) {

    try {

        // get default ressource data from json 
        const ressourceResponse = await fetch( jsonRessourceRequest );
        const dataRessource = await ressourceResponse.json();
        // get data from choosen doc topic 
        const dataResponse = await fetch( jsonDataRequest )
        const data = await dataResponse.json();

        // set choosen topic 
        var strDocTopic = strChoosenDocTopic;

        /* ---------------------------------------------------------------------- */
        /* Step 0 | Secure Check 
        /* ---------------------------------------------------------------------- */

        if( data.hasOwnProperty( strChoosenDocTopic) ) {

            if( data[strChoosenDocTopic].length != undefined || data[strChoosenDocTopic].length.length != null  ) {

                const result = Object.groupBy(data[strChoosenDocTopic], ({ status }) => status);
                console.log( result )

                console.log( " OOO = " + result.complete[0].pathFilesFolder )
                console.log( " OOO = " + result.planning[0].pathFilesFolder )

                // for( let i = 0; i < result.length; i++ ) {

                //     console.log( i + " = " + result[i].imgDefaultFilename )
                // }


            } else {

                console.log( "ERROR - createDocCardList | no data doc entries 🤐")
            }
           
            

            /* ---------------------------------------------------------------------- */
            /* Tempalte | Doc Card 
            /* ---------------------------------------------------------------------- */

            var layoutDocCard = ``;

            /* ---------------------------------------------------------------------- */
            /* Tempalte | In Progress Doc Card  
            /* ---------------------------------------------------------------------- */

            var layoutInProgressDocCard = ``;

            

        } else {

            console.log("ERROR - createDocCardList | wrong given doc topic 🥱")
        }

        console.log( "### - Start - ###")



      

        

        console.log( "### - Ende - ###")

        
        /* ---------------------------------------------------------------------- */
        /* Step 1 | Descide Card Process Type ( complete , planning )
        /* ---------------------------------------------------------------------- */




    } catch {
        console.log( "ERROR - createDocCardList | Problem by fetch proceess 😥" )
    }
}


createDocCardList( "media/json/doc-cards/data-default-doc-card-ressources.json" , "media/json/doc-cards/data-doc-card-frontend.json" , "frontend" )

async function createDocCardList2( jsonRequest , strChoosenDocTopic ) {

    try {


        // Create List of Doc Cards on programming way 
        // future we can use js template engines like ejs may better than
        // js literals , there we see that frameworks will be a good choice 

        const resp = await fetch( jsonRequest );
        const jsonData = await resp.json();


        /* ----------------------------------------------------------------------------- */
        // Step 1 | check exist choosen Doc Topic in json Object
        /* ----------------------------------------------------------------------------- */

        if( jsonData.docCategoryData.hasOwnProperty( strChoosenDocTopic ) ) {

            // console.log( "Yes, Baby - Ur choosen Doc Topic exist " )
            // console.log( "Länge an Werten von Frontend " + jsonData.docCategoryData[strChoosenDocTopic].length )

            /* ----------------------------------------------------------------------------- */
            // Step 2 | check on has entries of choosen doc 
            /* ----------------------------------------------------------------------------- */

            if( jsonData.docCategoryData[strChoosenDocTopic].length != null || jsonData.docCategoryData[strChoosenDocTopic].length != undefined ) {
    
                /* ----------------------------------------------------------------------------- */
                // Step 3 | set default folder pathes
                /* ----------------------------------------------------------------------------- */

                var pathChoosenDoc = getCorrectDocPath( jsonData.folderPathes.pathDocCatgegory , strChoosenDocTopic )
                document.getElementById("js-pdf-doc-count").innerText = "+ " + countMaxPdfDocs( jsonData.docCategoryData ) ;
                // console.log( " pathChoosenDoc = " + pathChoosenDoc )

                /* ----------------------------------------------------------------------------- */
                // Step 4 | create / replace list of choosen doc cards 
                /* ----------------------------------------------------------------------------- */

                jsonData.docCategoryData[strChoosenDocTopic].forEach( element => {

                    var layoutDocCard = `
                    
                        <div class="doc-card">
                      
                            <div class="header-doc-card">
                                <span>${element.docTitle}</span>
                                </span>${element.docDescriptionTitle}</span>
                            </div>


                            <div class="content-doc-card">

                                <select class="select-sfd" id="select-doc-${element.cardDocPath.replace("/", "")}" name="name-select-doc-${element.cardDocPath.replace("/", "")}" >
                                    
                                    ${ printSelectOptions( jsonData.ressourcesData.selectFirstText , element.selectEntriesRessources ) }
                                
                                </select>

                                <div class="doc-selected-view-container">

                                    <img src="${pathChoosenDoc}${element.cardDocPath}${jsonData.folderPathes.pathImg}${element.imgDefaultFilename}" alt="img">

                                    <div class="doc-link-ressource-container">

                                        <img src="${jsonData.folderPathes.pathIcons}${jsonData.ressourcesData.imgFilenameNotSelected}" class="img-arrow-to-show-to-select" alt="img">
                                                                                 
                                    </div>

                                </div>

                            </div>  

                        </div>

                        <div class="seperator-content-container">
                                    <img src="media/img/default/small-imgs/trenner.png" alt="img">
                                </div>


                    `;

                    // better innerHTML because we want replace 
                    divListOfDocCards.insertAdjacentHTML("beforeend" , layoutDocCard )

                    // divListOfDocCards.innerHTML( layoutDocCard )  cardDocPath

                    /*
  element.selectEntriesRessources.forEach( entries => {   ${jsonData.mediaDocsPath}${strChoosenDocTopic}/${element.cardDocPath}${jsonData.docFileTypesPath.imgPath}${element.imgDefaultFilename}
                                    
                                    console.log( " Entries " + entries )

                                    `<option value="">${entries.optionText}</option>`

                                })
                                    
                    */

                       // for( let i= 0; i < element.selectEntriesRessources.length; i++ ) {

                                    //     <option value="">${element.selectEntriesRessources[i].optionText}</option>
                                    // } <option value="">${element.selectEntriesRessources[0].optionText}</option

                })

                // "docTitle" : "Angular 18 ",
                // "docDescriptionTitle" : "- Alte Grundlagen & Neue Features 2024",

                // jsonData.userData.forEach( element => {

                //     var templateDocCard = `

                        // <div class="doc-card">

                        //     <div class="header-doc-card">
                        //         <span>${element.username}</span>
                        //         </span>${element.highscore}</span>
                        //     </div>

                        // </div>

                //     `;

                //     divListOfDocCards.insertAdjacentHTML("beforeend" , templateDocCard )

                // })

            } else {

                console.log( "[Error|createDocCardList] - Ur entries of ur choosen doc topic are empty" )

            }

        } else {

            console.log( "[Error|createDocCardList] - Ur given doc topic didnt exist" )

        }

        // console.log("e = " + jsonData.docCategoryData[0].length )

        // console.log( " strChoosenDocTopic = " + strChoosenDocTopic )
        // console.log( " jsonData = " + jsonData.docCategoryData.frontend[0].cardDocPath )

    

    } catch {

        console.log( "Error| FetchAPI | createDocCardList" + error )

    }

}

createDocCardList2( "media/json/doc-cards/data-doc-cards.json" , "frontend" )

// divListOfDocCards.appendChild( domImg )








/*
    {

    "classDocCard" : "doc-card",
    "classHeaderDocCard" : "header-doc-card",

    "classContentDocCard" : "content-doc-card",

    "classSelectSfd" : "select-sfd",
    "classDocSelectedView" : "doc-selected-view-container",

    "classDocLinkRessource" : "doc-link-ressource-container",
    "classLinkMediumButtonSfd" : "link-mediumbutton-sfd",
    
    "classSeperatorDocCard" : "seperator-content-container"

}
*/





















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