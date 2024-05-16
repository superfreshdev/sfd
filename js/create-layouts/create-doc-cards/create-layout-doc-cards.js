/*

    create-layout-doc-cards.js 

    > define with an json object list of doc ressource views.
*/

console.log("[create] - create-layout-doc-cards.js ")

/* --------------------------------------------------------------- */
/* [Include] - Data - Doc Card 
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
/* [Include] - Layout Data - Doc Card 
/* --------------------------------------------------------------- */

// Start Add ID Container 
const domListOfDocCardsContainer = document.getElementById("list-of-doc-cards-container");


console.log("### Start ###")


createLayoutListOfDocCards( domListOfDocCardsContainer , 3 )



console.log("### Ende ### ")



function createLayoutListOfDocCards( domIdStart , docFilter ) {

    var domDocCard = createLayoutDocCard( "doc-card" );
    var domHeaderDocCard =  createLayoutHeaderDocCard( "header-doc-card" );
    // var domContentDocCard = "";
    // var domSelectSfd = "";
    // var domSelectedView = "";
    // var domDocLinkRessource = "";
    // var domLinkMediumButtonSfd = "";
    // var domSeperatorDocCard;

    // Add | 'header doc card ' to 'doc card'
    domDocCard.appendChild( domHeaderDocCard );

    // Add | 'doc card' to 'doc cards list container '
    domIdStart.appendChild( domDocCard )



    // for( let i=0; i < docFilter; i++ ) {

    //     // Create Single Doc Cards 


    // }

}

/* ------------------------------------------------------------------------------------------------------ */
/* Get JSON | Fetch API'./data-doc-cards.json'
/* ------------------------------------------------------------------------------------------------------ */

async function logMovies() {

    const response = await fetch("media/json/doc-cards/data-doc-cards.json");
    const movies = await response.json();

    return movies;
    // console.log(movies);

}

var objDataDocCard = "";
objDataDocCard = logMovies();

console.log( " Marko => " + logMovies() )

// function getJsonFileAsObject( strJsonFilePath ) {

//     var objJsonData = "";

//     fetch( 'media/json/doc-cards/data-doc-cards.json' )
//     .then( function (response) {

//         return response.json();
//         // wir erstellen aus der json Datei ein java script objekt ( promise )

//     }).then( function (obj) {

//         // mit obj können wir jetzt auf das java script objekt zugreifen 
//         // return obj;
//         console.log( "Marko = " + obj.foldersPath.imgIconsPath )
//         objJsonData = obj;

//     }).catch( function (error) {

//         console.error('Something went wrong with retriecing the people');

//     });

//     console.log(" Makro 2 = " + objJsonData.foldersPath.imgIconsPath )
 
// }

// var objDocCard = "";
// objDocCard = getJsonFileAsObject( "" );
// console.log(" Jetzt gehts los = " + objDocCard.foldersPath.imgIconsPath )
    
    // superHeroes["members"][1]["powers"][2];
    // console.log("[objDataDocCard] = " + objDataDocCard );

/* ------------------------------------------------------------------------------------------------------ */
/* Create Layouts | Doc Cards
/* ------------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------ */
/* Doc Card */
/* ------------------------------------------------------------ */

function createLayoutDocCard( strClassDocCard ) {

    var domDocCard = document.createElement('div');
    domDocCard.className = strClassDocCard;

    return domDocCard;

}

/* ------------------------------------------------------------ */
/* Header | Doc Card */
/* ------------------------------------------------------------ */

function createLayoutHeaderDocCard( strClassHeaderDocCard , objDataDocFiltered ) {

    var domHeaderDocCard = document.createElement('div');
    domHeaderDocCard.className = strClassHeaderDocCard;

    // Add 2 Spans 
    var span1 = document.createElement('span');
    span1.innerText = "Span 1";
    var span2 = document.createElement('span');
    span2.innerText = "Span 2";

    domHeaderDocCard.appendChild( span1 )
    domHeaderDocCard.appendChild( span2 )

    return domHeaderDocCard;

}



/* ------------------------------------------------------------ */
/* Content | Doc Card */
/* ------------------------------------------------------------ */

function createLayoutContentDocCard( strClassContentDocCard ) {


}


/* ------------------------------------------------------------ */
/* Select sfd */
/* ------------------------------------------------------------ */

function createLayoutSelectSfd( strClassSelectSfdf , objDataDocCard  ) {


}

/* ------------------------------------------------------------ */
/* Doc Selected View  */
/* ------------------------------------------------------------ */

function createLayoutDocSelectedView( strClassDocSelectedView ) {


}






/*

    // Welcher Doc Filter wurde gesetzt ? ( Handler )

        // Durchlaufe Karten der Doc Filter


        1. Erstelle Doc Card 
        2. Erstelle Seperator Doc Card wenn nicht letztes element ?

*/

