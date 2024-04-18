/* ------------------------------------------------------------------------------------------ */
/* [File] - [JS Component] - gallery-img-slider.js 
/* ------------------------------------------------------------------------------------------ */
/*  
    > define the logic to handle all your added gallery img sliders.
    You only should put ur string ids of each gallery img slider in the 
    correct array variable & thats it.

/* ------------------------------------------------------------------------------------------ */
console.log("### JS - galler-img-spinner");


/* ------------------------------------------------------------------------------------------------------ */
/* [1/3] - Variable's / Dom Element/s  
/* ------------------------------------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------------------------------------ */
/* [2/3] - Execute ( going in action )
/* ------------------------------------------------------------------------------------------------------ */




// dom id arrays 
const domIdsOfGalleryImgSliders = [

    document.getElementById('gallery-img-spinner-about-x'),
    document.getElementById('gallery-img-spinner-project-web'),
    document.getElementById('gallery-img-spinner-project-java'),
    document.getElementById('gibt es nicht')

]

// String Arrays 
const strIdsOfGalleryImgSliders = [

    'gallery-img-spinner-about-x',
    'gallery-img-spinner-project-web',
    'gallery-img-spinner-project-java'
]

// Variable 
const constA = "const-fuck-you";
const constB = 122;

let domId = document.getElementById("body-layout-sfd");

// Arrays 
// const strIdsOfGalleryImgSpinners = [

//     'gallery-img-spinner-about-x',
//     'gallery-img-spinner-project-web',
//     'gallery-img-spinner-project-java',
//     'gallery-img-spinner-project-java'

// ]

let arr1 = []; // 0
let arr2 = ['',' ','Pirat']


// Data Objects 

const objCar = {type:"Fiat", model:"500", color:"white"};
// console.log( car.color )

const objPerson = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

// Fake 
// const strIdsOfGalleryImgSpinnersFake = [

//     'gallery-img-spinner-about-x',
//     'gallery-img-spinner-project-java',
//     'gallery-img-spinner-project-java',
//     document.getElementsByClassName("AdolfU"),
// ]


console.log("### Start ##############")

/* ------------------------------------------------------------------------------------------- */
/* Stage 01 / 04 | Check Correct 'Input Form' of Gallery Img Sliders 
/* ------------------------------------------------------------------------------------------- */
/*
    - is array & elements are not data types of DomElements
    - array has minimum length of 1 
    - array elements are unique

    >> return true / false
*/

if( checkCorrectInputFormOfGalleryImgSliders( strIdsOfGalleryImgSliders )  ) {

    console.log("[Stage 01/04 | gallery-img-sliders] = true");

    /* ------------------------------------------------------------------------------------------- */
    /* Stage 02 / 04 | Check Exist Input & Create 'Inputs' of Gallery Img Sliders 
    /* ------------------------------------------------------------------------------------------- */
    /*
        - check unique Array String Elements as exist DomElements with given correct strDomType e.g ( "id" , ... )
        - if minimum 1 Element exist as DomElement return array of DomElements
        - if no Element exist as DomElement return array of DomElement = 0, then check failed 

        >> return array of domElements ( failed > length = 0 , not failed > length > 0 )

    */

    // try to create Array of DomElements by using given String Array
    let existDomElementsOfGalleryImgSliders = [];
    existDomElementsOfGalleryImgSliders = getCreateArrayOfDomElementsByStringArray( strIdsOfGalleryImgSliders , "id" );

    if( existDomElementsOfGalleryImgSliders.length > 0 ) {

        // Minimum 1 DomElement was found from Array String
        console.log("[existDomElementsOfGalleryImgSliders] length = " + existDomElementsOfGalleryImgSliders.length )
        // Output of exist DomElements 
        consoleLogArray( existDomElementsOfGalleryImgSliders )

        console.log("[Stage 02/04 | gallery-img-sliders] = true");

        /* ------------------------------------------------------------------------------------------- */
        /* Stage 03 / 04 | Check 'Inputs' on having correct 'html pattern' of Gallery Img Sliders 
        /* ------------------------------------------------------------------------------------------- */
        /*

        */


        /* ------------------------------------------------------------------------------------------- */
        /* Stage 04 / 04 | Define 'logic & handlings' on ever Gallery Img Slider
        /* ------------------------------------------------------------------------------------------- */
        /*

        */

    } 
    else {

        // all given Array String had no existing domElement
        console.log("[Error] - Your given String Array had no existing DomElements. Your String Array must have minimum 1x domElement.")
        console.log("[Stage 02/04 | gallery-img-sliders] = Check failed.");
    }

} 
else {

    console.log("[Stage 01/04 | gallery-img-sliders] = Check failed.");
}


/*

    html pattern conditions in form as array

*/

const htmlPatternCondtionsOfGalleryImgSlider = [

    '',
    '',
    ''
]

// check html pattern

function checkCorrectHtmlPatternByUsingStrIds( strIds ) {

}















/* ------------------------------------------------------------------------------------------------------ */
/* [3/3] - Functions of 'gallery-img-slider'
/* ------------------------------------------------------------------------------------------------------ */


/* -------------------------------------------- */
/* Stage 01 / 04 
/* -------------------------------------------- */

function checkCorrectInputFormOfGalleryImgSliders( strIdsOfGalleryImgSliders ) {

    console.log("### checkCorrectInputFormOfGalleryImgSliders")

    // Step 1 - Check Array String as correct form
    if( checkOnlyAllowStringArrayElements( strIdsOfGalleryImgSliders ) ) {

        // Step 2 - Check Array String are unique
        if( checkStrArrayElementsOnRedundancy( strIdsOfGalleryImgSliders ) ) {

            // Failed Check - Array Elements not unique
            console.log("[FailedCheck|checkCorrectInputFormOfGalleryImgSliders] - Your given String Array had redundancy elements. This is not allowed.")
            return false;

        } else {

           // Check was correct - we have array with minimum length 1 & only unique elements 
           console.log("array string correct") 
           return true;
        }


    } else {

        // Failed Check - Given Array has not the correct form
        console.log("[FailedCheck|checkCorrectInputFormOfGalleryImgSliders] - Your given String Array had not correct form for gallery-img-slider")
        return false;
    }

   



}


/* -------------------------------------------- */
/* Stage 02 / 04 
/* -------------------------------------------- */

// function can be often used , thats why it is in universal.js 
// getCreateArrayOfDomElementsByStringArray( strArray , strDomType )


/* -------------------------------------------- */
/* Stage 03 / 04 
/* -------------------------------------------- */

// check correct HTML Pattern ?


/* -------------------------------------------- */
/* Stage 04 / 04 
/* -------------------------------------------- */

// create logic & handlings for every gallery img slider



console.log("### Ende ##############")






















/* ------------------------------------------ */
/* Alle was hier unten folgt kann in Zukunft weg 
/* ------------------------------------------ */




























// console.log("[secureHandlingOfGalleryImgSlider] = " + checkGivenStrIdsOfGalleryImgSliders ( strIdsOfGalleryImgSpinners , "id") )


/* 

    checkCorrectInputsOfGalleryImgSliders( strIdsOfGalleryImgSliders , strDomType )

    1. [Check] - Given String Array of Default Conditions to pass the process

    - is array & elements of are not data types of DomElements
    - given strDomType must be the form of our patterns 
    - array elements are unique & array elements has minimum 1 element 

    >> Return true / false

    2. [Check] - Exist Array Strings as DomElements & create Array of DomElements 
    - createArrayOfDomElementsByArrayString( strArray , "id")
    - minimum 1 of the array element must be exist as domElement , otherwise array is 0

    >> Return array with domElements or = 0;

    3. [Check] - html pattern of galler img slider to pass the process

    4. [Create] - Create logic & handlings to every existing gallery img sliders 

*/





function checkGivenStrIdsOfGalleryImgSliders  ( strArrayOfGalleryImgSliders , strDomType ) {

   
    /* 

        Step 1, 2 & 3 müssen in einer Funktion 
    */

    // Step 1 - Only Accept Array Object & Elements are not Data Type of DomElements 
    //          ( e.g not Data Type allowed like document.getElementById("...") )




    // Step 1 
    if( checkIsArrayObject( strArrayOfGalleryImgSliders ) && !checkElementsAreDataTypeOfDomElements( strArrayOfGalleryImgSliders ) ) {

      console.log("[ is Array ] , length = " + strArrayOfGalleryImgSliders.length )
      console.log("[ data type is not DomElement ]");

      // Step 2 
      if( checkStrArrayElementsOnRedundancy( strArrayOfGalleryImgSliders )  ) {

          console.log("[ Elements are unique ]");
          console.log("[ All DomElement exist ]");

          // Step 3 - Check exist string Elements as domElement
          if( checkStringArrayElementsExistAsDomElements( strArrayOfGalleryImgSliders , strDomType ) ) {

              console.log("[ Step 3 ] - true ");
          }
          

      }

  } else {

      console.log("[Error|secureHandlingOfGalleryImgSlider] - You given not Array Object or u given data types of domElements")
      return false;
      
  }

}

// am Ende kriegst du Array DomElment länge = 0 oder > 0 z.B 1 

// getExistArrayDomElementsByStrArrayOfGalleryImgSlider

// 1. check basic | 2. check exist domElements | 3. generate Array of DomElements | 4. check html structure ...




function checkStrArrayOfExistDomElements ( strArray , strDomType ) {

    // Step 1 - Check is Array Object 
    if( checkIsArrayObject( strArray ) ) {

        // > Given Element is an Array Object 

        // Step 1 - Check has Array Object Element which are not Data Type of DomElements
        if( !checkElementsAreDataTypeOfDomElements( strArray ) ) {

            // > String Array Elements has not Data Type of DomElements 

            // Step 2 - Check String Array Elements on unique 
            if( !checkStrArrayElementsOnRedundancy( strArray ) ) {

                // String Array are unique

                // Step 3 - Check String Array Elements on Existing as DomElements by ID
                if( checkStringArrayElementsExistAsDomElements( strArray , strDomType ) ) {

                    // All String Array Elements Exist as DomElements b ID

                    // Achtung -> hier müssen nicht alle gefunden werden
                    // Wichtig ist nur das wir mindestens eins bekommen
                    // um damit weiter zu arbeiten
                    // d.h unsere Funktion muss uns idealerweise
                    // ein array von DomElementen by id zurück geben die existieren

                    // setze Array , entweder hat es mindestens length 1 oder 0
                }
            }

        }

    }

}





// checkGivenStrIdsOfGalleryImgSliders 

// createArrayOfDomElementsById ( strIds )



/* ------------------------------------------------------------------------------------------- */
/* Stage 02 / 03 | Create String Array Elements to Array of DomElements by ID
/* ------------------------------------------------------------------------------------------- */
/*
        Step 1 - ....
        
*/

  // generate strIdsOfGalleryImgSliders to array of domElements by id 
    // createDomIdElementsOfStringArray ()







/* ------------------------------------------------------------------------------------------- */
/* Stage 03 / 03 | Create logic to every Gallery Img Sliders
/* ------------------------------------------------------------------------------------------- */
/*
        Step 1 - use the correct array of DomElements by ID to defined functions & handlings
                 to ever gallery img slider which exist
*/


// createAllGalleryImgSliders( domIdElements );






















/* --------------------------------------------------------- */
/* Dump Variables
/* --------------------------------------------------------- */



/* 
    1. Möglichkeit - Direkte domElemente mit zugeben
    2. Möglichkeit - Strings angeben & in domElementen umwandeln und dann mit gebene

    && checkExistDomElements( strIdsOfGalleryImgSpinners1 ) 
*/


/* -------------------------------------------------------- */
/* Variables , Arrays , Data Objects 
/* -------------------------------------------------------- */


/* ------------------------------ */
// Case - ID String Array 
/* ------------------------------ */


// all exist | >> true 
// const strIdsOfGalleryImgSliders = [

//     'gallery-img-spinner-about-x',
//     'gallery-img-spinner-project-web',
//     'gallery-img-spinner-project-java'
// ]

// all not exist | >>
const strIdsOfGalleryImgSlidersNotExist = [

    'gallery-img-spinner-about-x-NotExist',
    'gallery-img-spinner-project-web-NotExist',
    'gallery-img-spinner-project-java-NotExist'
]

// one not exist | >>
const strIdsOfGalleryImgSlidersOne = [

    'gallery-img-spinner-about-x',
    'gallery-img-spinner-project-web-NotExist',
    'gallery-img-spinner-project-java-NotExist'
]


// just redundancy | >> false 
const strIdsOfGalleryImgSlidersRedundancy = [

    'gallery-img-spinner-about-x',
    'gallery-img-spinner-project-web',
    'gallery-img-spinner-project-java',
    'gallery-img-spinner-project-web',
    'gallery-img-spinner-about-x',
    'gallery-img-spinner-project-java',
]

/* ------------------------------ */
// Case - Dom ID Array 
/* ------------------------------ */



/* -------------------------------------------------------- */
/* DomElement/s 
/* -------------------------------------------------------- */












// if( checkStrArrayElementsOnRedundancy ( strIdsOfGalleryImgSliders ) && checkExistDomElements( strIdsOfGalleryImgSliders ) ) {

//     console.log(">>> Step 1 > true ");

// }













// ---------------------------------------------------------------------------------- // 

// const strSinlge = "Penis";
// const a = document.getElementById("gallery-img-spinner-about-x");


// // Type ? domElement 

// console.log("type Var String = " + strSinlge );


// console.log("1 type DomElement = " + a ); // 1 - HTMLDivElement 
// console.log("2 type DomElement = " + domIdsOfGalleryImgSliders );  // 3 - HTMLDivElement 

// console.log("3 type DomElement = " + getTypeOfElement( domIdsOfGalleryImgSliders ) ); 


// Type ? Array ? 

// ---------------------------------------------------------------------------------- // 


// Step 1 - Given Array of Gallery Img Sliders must be unique & all of them must be existing in dom

// Step 2 - Check all IDs of Gallery Img Slider for my defined html structure pattern
// ( if html structure of gallery img slider is wrong it will be not shown )

// Step 3 - Add to ever Gallery Img Slider the right functions & handlings 
// ( references to gallery-img-slider.js )













 











/* --------------------------------------------------- */
// Single Dom Elements: ( id , class , qs , qsa )
/* --------------------------------------------------- */



/* ----------------------- */
// #id
/* ----------------------- */

// [ 100 % ]
// css id exist -> length = undefined | exist = true;
// console.log("1 - [single css id] - " + checkExistDomElements( document.getElementById("body-layout-sfd") ) )

// [ 100 % ]
// css id not exist -> length = undefined | exist = null , false 
// console.log("2 - [single css id] - " + checkExistDomElements( document.getElementById("body-layout-sfd-fuck-you") ) )

// [ 100 % ]
// css qs id exist > length = undefined | exist = true
// console.log("2 - [single css qs id] - " + checkExistDomElements( document.querySelector("#body-layout-sfd") ) )

// [ 100 % ]
// css qs id not exist > length = undefined | exist = null , false
// console.log("2 - [single css qs id] - " + checkExistDomElements( document.querySelector("#body-layout-sfd-fuck-you") ) )


/* ----------------------- */
// .class
/* ----------------------- */

// [ 100 % ]
// css selector exist -> length = undefined | exist = true;
// console.log("1 - [single css class] - " + checkExistDomElements( document.getElementsByClassName("penis")[0] ) )

// [ ??? % ]
// css selector exist -> length = undefined | exist = true;
// console.log("1 - [single css class] - " + checkExistDomElements( document.getElementsByClassName("penis")[99] ) )





























































/* ------------------------------------------------------------- */
/* Product Clean
/* ------------------------------------------------------------- */



    




// [DomElements] - Array of imgContainers about business card 
// const domImgContainers = document.getElementsByClassName("js-trigger-about-galerie-slider")

// [DomElement] - Prev/Next Switch for imgContainers calerie 
// const domPrev = document.getElementById("js-prev-imgContainer-about");
// const domNext = document.getElementById("js-next-imgContainer-about");

// ids for prev & next switch img container galerie
const strIdprev = domPrev.getAttribute("id");
const strIdnext = domNext.getAttribute("id");


// Controll Handling for spinning img containers 
var settedIndexImgContainer = 0;
var maxCountImgContainer = 0;



setMaxCountedImgContainers( domImgContainers );

setDefaultFirstImgContainer( domImgContainers )

// Add Registration - AddEventlistener Click Prev/Next
if( checkExistDomElement( domPrev ) ) {

    // registration
    domPrev.addEventListener("click", () => { switchImgContainer( domPrev , strIdprev , strIdnext , maxCountImgContainer ) } );

}

if( checkExistDomElement( domNext ) ) {

    // console.log("Marko=>Next> " + maxCountImgContainer )

    // registration
    domNext.addEventListener("click", () => { switchImgContainer( domNext , strIdprev , strIdnext , maxCountImgContainer ) } );

}









































/* --------------------------------------------- */
/* Auslagern - gallery-img-slider
/* --------------------------------------------- */

function checkWhichSettedImgContainer( domImgContainers ) {

    // Exist dom element 
    if( checkExistDomElement( domImgContainers ) ) {

        // Check which number of imgContainer is not undefined 
        for( let i = 0; i<= (domImgContainers.length-1); i++) {

            // console.log("Dumy = " + imgContainers[0].getAttribute("id") )

            // console.log("var=" + settedIndexImgContainer)

            if( domImgContainers[i] != undefined ) {
                // imgContainers[i].style.display = "none";
                return i;
            }
        }

    }
}

function setCreateStringZeroNumbering( indexNumber ) {

    // just positive Values 
    if( indexNumber < 10 && indexNumber > 0 ) {
        return "0"+indexNumber;
    } else {
        return indexNumber;
    }

}
// setStrIndexAndMaxIndexToDomElement( 1 , 9 , domActuallyIndex, domMaxIndex );


/* --------------------------------------------------------------------- */
/* Functions - gallery-img-slider 
/* --------------------------------------------------------------------- */

function setDefaultFirstImgContainer ( domImgContainers ) {

    /*
        1. check exist - domImgContainers
    */

    if( checkDomElementIsNotNull(domImgContainers) ) {
        // do
    
        for( let i = 0; i<= (domImgContainers.length-1); i++) {

            if(i === 0 ) {
                // console.log("> WE can go for it ")
                domImgContainers[i].style.display = 'block';
                settedIndexImgContainer = 0;
            } else {
                // console.log("Setze | display:none;")
                domImgContainers[i].style.display = 'none';
            }    

        }
    }
}

function switchImgContainer( domSwitchPrevNextClicked , strIdprev , strIdnext , maxCountImgContainer ) {

    // Check prev / next clicked 
    if( domSwitchPrevNextClicked.getAttribute("id") === strIdprev ) {


        console.log("Es wurde Prev geklickt")

        console.log("-----------------------------")
        console.log("settedIndexImgContainer=>" + settedIndexImgContainer );
        console.log("maxCountImgContainer=>" + maxCountImgContainer );
        console.log("-----------------------------")

        
        if( (settedIndexImgContainer-1) > -1 ) {

            // unshown actually img container 
            domImgContainers[settedIndexImgContainer].style.display = 'none';

            // set new index & new img container  
            settedIndexImgContainer--;
            domImgContainers[settedIndexImgContainer].style.display = 'block';

            // unshow settedIndexImgContainer + 1 (tmp) ??? getht das was ist wenn das max ist ? | settedIndexImgContainer alt
            // show -1 (das nehmen) | settedIndexImgContainer-- neu
            console.log("NormalCasePrev(-1) = " + settedIndexImgContainer )

        } else {
            // Special Case - Set 0 to Max Counted ImgContainer

            // unshown 0 img container 
            domImgContainers[settedIndexImgContainer].style.display = 'none';

            // set new last img container 
            settedIndexImgContainer = (maxCountImgContainer - 1);
            domImgContainers[settedIndexImgContainer].style.display = 'block';

            console.log("SpecialCasePrev = " + settedIndexImgContainer )
   
        }
     
        
    }


    if( domSwitchPrevNextClicked.getAttribute("id") === strIdnext ) {

        console.log("Es wurde Next geklickt")

        console.log("-----------------------------")
        console.log("settedIndexImgContainer=>" + settedIndexImgContainer );
        console.log("maxCountImgContainer=>" + maxCountImgContainer );
        console.log("-----------------------------")

        if( (settedIndexImgContainer+1) < maxCountImgContainer ) {

            console.log("NormalCasePrev(+1) before = " + settedIndexImgContainer )

            // unshown actually img  container 
            domImgContainers[settedIndexImgContainer].style.display = 'none';

            // set new index & new img container  
            settedIndexImgContainer++;
            domImgContainers[settedIndexImgContainer].style.display = 'block';

            console.log("NormalCasePrev(+1) after = " + settedIndexImgContainer )
        
        } else {
            // Special Case - Set Max Counted ImgContainer to First 0

            // unshown Max Counted img container 
            domImgContainers[settedIndexImgContainer].style.display = 'none';

            // set new first img container 
            settedIndexImgContainer = 0;
            domImgContainers[settedIndexImgContainer].style.display = 'block';

            console.log("SpecialCaseNext = " + settedIndexImgContainer )
    
        }

     
    }

  


}


function setStrIndexAndMaxIndexToDomElement( index , maxIndex , domElementActually , domElementMax ) {

    // console.log("# setStrIndexAndMaxIndexToDomElement");

    // Create TextNode - actually Index
    const txtNode = document.createTextNode( setCreateStringZeroNumbering( index ) );
    domElementActually.appendChild( txtNode );

    // Create TextNode - max Index
    const txtNode2 = document.createTextNode( setCreateStringZeroNumbering( maxIndex ) );
    domElementMax.appendChild( txtNode2 );

}

function setMaxCountedImgContainers( domImgContainers ) {

 

    if( checkExistDomElement( domImgContainers ) ) {
        // e.g domImgContainers  = 3 = maxCountImgContainer
        maxCountImgContainer = domImgContainers.length;
        return maxCountImgContainer;
    }

}

function setMaxIndexByDomElements( domElements ) {

    // useful.js | check exist all dom elements ? 
    console.log("Feedback ? => " + checkExistDomElements( domElements ) );
    
}
