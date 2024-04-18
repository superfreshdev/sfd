console.log("### windowsOnLoad.js ")


/* ---------------------------------------------------------------------- */
/* add | checkboxes & audio files of read text                            */
/* ---------------------------------------------------------------------- */

// checkboxes of read text 
const strIdsOfReadTextCheckbox = [

    "chk-about-me",
    "chk-my-hobbies",
    "chk-what-does-my-website-stand-for",
    "chk-why-do-i-call-myself-superfreshdev"
]

// audio files of read text 
const strIdsOfReadTextAudioFiles = [
   
    "audio-about-me",
    "audio-my-hobies",
    "audio-what-does-my-website-stand-for",
    "audio-why-do-i-call-myself-superfreshdev"
]

/* ---------------------------------------------------------------------- */
/* add | label style of read text ( checkbox )                            */
/* ---------------------------------------------------------------------- */

// img ressources
const strImgRessourcesOfReadText = [

    "media/img/png/main/icons/speaker-light-grey.png",
    "media/img/png/main/icons/stop-other-grey.png",
    "media/img/png/main/icons/speaker-other-gray.png"

]

// text ressources
const strTextRessourcesOfReadText = [

    "Read Text",
    "Stop Audio",

]

// css class ressources 
const strCssStyleRessourcesOfReadText = [

    "lbl-read-text-audio lbl-read-text-audio-checked",
    "lbl-read-text-audio lbl-read-text-audio-no-checked"

]












window.addEventListener("load", () => {

    console.log("### Start");

    /* -------------------------------------------------------------------------------------- */
    /* Adding Handlings on existing DomElements                                               */
    /* -------------------------------------------------------------------------------------- */

        /* ---------------------------------------------------------------------- */
        /* add - onChange Event Hanlder | Read Text / Stop Audio                  */
        /* ---------------------------------------------------------------------- */

    
        // idsOfCheckboxesReadText
        var idDomElementsOfReadTextCheckboxes = [];
        idDomElementsOfReadTextCheckboxes = getArrayOfSingleDomElements( strIdsOfReadTextCheckbox , "id" );

        console.log("Test => " + idDomElementsOfReadTextCheckboxes.length )

        

        const indexOfCheckedCheckbox = null;

        for( let i=0; i < idDomElementsOfReadTextCheckboxes.length; i++ ) {

            /* ---------------------------------------------------------------------
                Default Logic if nothing clicked but u defined at the beginning 
            --------------------------------------------------------------------- */ 

                if( idDomElementsOfReadTextCheckboxes[i].checked == true ) {

                    // check is another audio/s actualy playing ? 
                    // if audio end of playing (thread) must change too
                    for( j = 0; j < idDomElementsOfReadTextCheckboxes.length; j++ ) {

                        // dont check which u like to check
                        if( j != i ) {

                            // unset all which audio was setted checked
                            // u can do this by set that in html by checked 
                            if( idDomElementsOfReadTextCheckboxes[j].checked == true ) {

                                // unset this Audio
                                // stopPlayAudio
                                // setLayoutForLabelReadText()
                                console.log(j + " unset Playing this Audio")
                            }
                        } 

                    }


                    // setPlayAudio
                    // setLayoutForLabelReadText()
                    console.log(i + " Stop Audio Label ")
                    
    
                } else {
    
                    // default , no Read Text Audio is checked
                    console.log(i + " Read Text Label ")
                    // stopPlayAudio
                    // setLayoutForLabelReadText()
    
                }

            /* ---------------------------------------------------------------------
                Inside AddEventLister change Logic
            /* ---------------------------------------------------------------------*/
           
            // idDomElementsOfReadTextCheckboxes[i].addEventListener( "change" , ()=> {

            //     if( idDomElementsOfReadTextCheckboxes[i].checked == true ) {

            //         // check is another audio/s actualy playing ? 
            //         // if audio end of playing (thread) must change too
            //         for( j = 0; j < idDomElementsOfReadTextCheckboxes.length; j++ ) {

            //             // dont check which u like to check
            //             if( j != i ) {

            //                 // unset all which audio was setted checked
            //                 // u can do this by set that in html by checked 
            //                 if( idDomElementsOfReadTextCheckboxes[j].checked == true ) {

            //                     // unset this Audio
            //                     // stopPlayAudio
            //                     // setLayoutForLabelReadText()
            //                     console.log(j + " unset Playing this Audio")
            //                 }
            //             } 

            //         }


            //         // setPlayAudio
            //         // setLayoutForLabelReadText()
            //         console.log(i + " Stop Audio Label ")
                    
    
            //     } else {
    
            //         // default , no Read Text Audio is checked
            //         console.log(i + " Read Text Label ")
            //         // stopPlayAudio
            //         // setLayoutForLabelReadText()
    
            //     }

            // } )

         

        }


        // console.log("Index => " + getArray( strIdsReadTextAudioGroup ).length )

        /* ---------------------------------------------------------------------- */
        /* add - onChange Event Hanlder | Open / Close Content                    */
        /* ---------------------------------------------------------------------- */

        /* ---------------------------------------------------------------------- */
        /* add - onChange Event Hanlder | Gallery Img Sliders                     */
        /* ---------------------------------------------------------------------- */

        console.log("### Ende");

});




function defineSfdReadTextAudioHandlers () {

}

function defineSfdOpenCloseContentHandlers () {

}

function defineSfdGalleryImgSliderHandlers () {


}














// only css selector are allowed ( id , qs)
function getArrayOfSingleDomElements( strArrayOfSingleDomElements , strCssSelector ) {

    // no secure handling of inputs | coming future

    const outputArrayOfDomElements = [];

    switch( strCssSelector ) {

        case "id":

            console.log("[choose] = id ") 

            for( let i=0; i < strArrayOfSingleDomElements.length; i++ ) {
                outputArrayOfDomElements.push( document.getElementById( strArrayOfSingleDomElements[i] ) )
            }   

            break;

        case "qs":
            
            console.log("[choose] = qs ")

            for( let i=0; i < strArrayOfSingleDomElements.length; i++ ) {
                outputArrayOfDomElements.push( document.querySelector( strArrayOfSingleDomElements[i] ) )
            }      

            break;

        default:

            console.log("[Error|getArrayOfDomElements] - Ur given strCssSelector isnt defined.")
            console.log("Only ( id , qs ) are allowed as css selector.")

            return false;

    }

    // output array of DomElements
    return outputArrayOfDomElements;

}


// default return Array of given Array
function getArray( arrayElement ) {

    const outputArrayElement = [];

    if( arrayElement.length > 0 ) {

        for( let i=0; i < arrayElement.length; i++ ) {

            outputArrayElement.push( arrayElement[i] )
        }

        // Output Array
        return outputArrayElement;

    } else {

        console.log("[Error|getArray] - Ur index of arrayElement had no index.")
        return false;
    }

    
}
































/* ---------------------------------------------------------------------------------------------------------------- */
/* Trash !!! Please Delete or Fuck Yourself   */
/* ---------------------------------------------------------------------------------------------------------------- */




const tmpLblDomElement = [];
const tmpChkDomElement = [];

//   addAllChangeHa( strIdsReadTextAudioGroup , ";" , strImgRessourcesOfReadText , strTxtsOfReadText , strCssStyleOfReadText )




  // strIdsGroup - string concat Array Type
  function addAllChangeHandlersForReadTextAudioPlayStop( strIdsGroup , strSplitter , strImgResources , strTextRessources, strCssClasses ) {


    // no secure handling !!! future 

   

    // Step 1 - set Default Text Layout by given values
    for( let i=0; i < strIdsGroup.length; i++) {

        // inside concat split , e.g 2 elements and get the id of checkbox binded with label 
        tmpLblDomElement.push( getOneDomElementOfArraySplit( strIdsGroup , i , 1, strSplitter , "for" ) );

        console.log("[lbl-chk] => " + tmpLblDomElement[i] );

        // add default img ressource
        tmpLblDomElement[i].querySelector("img:nth-of-type(1)").src = strImgResources[0];
        // add default text ressource
        tmpLblDomElement[i].querySelector("div:nth-of-type(1)").innerHTML = strTextRessources[0];

        // check is id of checkbox is checked ? 
        tmpChkDomElement.push( getOneDomElementOfArraySplit( strIdsGroup , i , 1, strSplitter , "id" ) );

        console.log("[chk-lbl] => " + tmpChkDomElement[i].checked );

        if( tmpChkDomElement[i].checked == true ) {

            // style as red 
            console.log(" this is checked ")
            tmpLblDomElement[i].className = strCssClasses[0];
            tmpLblDomElement[i].querySelector("img:nth-of-type(1)").src = strImgResources[1];
            tmpLblDomElement[i].querySelector("div:nth-of-type(1)").innerHTML = strTextRessources[1];
        
        } else {
        
            // style as default
            console.log(" this is not checked ")
            tmpLblDomElement[i].className = strCssClasses[1];
            tmpLblDomElement[i].querySelector("img:nth-of-type(1)").src = strImgResources[0];
            tmpLblDomElement[i].querySelector("div:nth-of-type(1)").innerHTML = strTextRessources[0];
        }

        tmpChkDomElement[i].addEventListener( "change", ()=> {

            
            if( tmpChkDomElement[i].checked == true ) {

                // style as red 
                // console.log(" this is checked ")
                tmpLblDomElement[i].className = strCssClasses[0];
                tmpLblDomElement[i].querySelector("img:nth-of-type(1)").src = strImgResources[1];
                tmpLblDomElement[i].querySelector("div:nth-of-type(1)").innerHTML = strTextRessources[1];
                // alert("is checked")
    
            } else {
    
                // style as default
                // console.log(" this is not checked ")
                tmpLblDomElement[i].className = strCssClasses[1];
                tmpLblDomElement[i].querySelector("img:nth-of-type(1)").src = strImgResources[0];
                tmpLblDomElement[i].querySelector("div:nth-of-type(1)").innerHTML = strTextRessources[0];
                // alert("is not checked")
            }


        })

        

    
    }

    
    



  }







  function getLabelAsAttrSelector( strAttrFor ) {


  }
  

/* ------------------------------------------------------------- */
/* Operation | get One DomElement by splitting string Array 
/* ------------------------------------------------------------- */

// strIdsGroup
function getOneDomElementOfArraySplit( strIdArray , strIdArrayIndex , strIdArraySplitIndex , strSplitterChar , strAttrTypOfDomElement ) {
  
      // no secure handling , future implementation !!!

      switch( strAttrTypOfDomElement ) {

        // Remember these attribute are unique 

        case "id":

            console.log(">> id ");
            return document.getElementById( strIdArray[ strIdArrayIndex ].split( strSplitterChar )[ strIdArraySplitIndex ] )
           
            

        case "for":

            console.log(">> for ")
            return document.querySelector("[for=\""+strIdArray[ strIdArrayIndex ].split( strSplitterChar )[ strIdArraySplitIndex ]+"\"]");

        default:

            console.log("[Error|getOneDomElementOfArraySplit] - given strAttrTypOfDomElement is not defined.")
            return false;
    }
      
     
  
}
  
























function changeAttributeOnDomElement( domElement ,  strAttr , strChangeValue ) {

    // no secure handling checks !!! 

    switch( strAttr ) {

        case "id":
            break;

        case "class":
            break;

        case "src":
            
        console.log("src> " + domElement );

        // change value of src attribute to given strChangeValue
        domElement.src = strChangeValue;


            break;
        
        case "href":
            break;

        case "alt":
            break;

        default:
            console.log("[Error|changeAttributeOnDomElement] - given strAttr is not defined.")
            return false;
    }

}


 // strIdArray , strIdArrayIndex , strIdArraySplitIndex , strSplitterChar || return as id - element or as querySelector , attrTypeOfDomElement "id,for,.."
    // console.log("Marko => " + getOneDomElementOfArraySplit( strIdsReadTextAudioGroup , 0 , 1, ";" , "for" ).querySelector("img").getAttribute("src")  ) 

    // getOneDomElementOfArraySplit( strIdsReadTextAudioGroup , 0 , 1, ";" , "for" ).querySelector("img").src = "media/img/png/main/icons/all/chrome.png";
