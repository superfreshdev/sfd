
/*

    [JS sfd Lib ] - sfd-useful-operations.js 

    > defines many useful functions / operations which 
    will be often use in different other functions for example
    concatinating of complex array strings , useful 
    show date functions , ... 

*/

console.log("### [JS Lib] - sfd-useful-operations.js ")


/* ------------------------------------------------------------- */
/* Show Actually Date ( english formatted )
/* ------------------------------------------------------------- */

// get english formatted date 
function getActuallyDate() {

    const todayDate = new Date(); 
    
    // Printing englisch Date Format 
    // getMonth 0-11, e.g april = 3 

    return getEnglischFormattedDate( todayDate.getDate() , ( todayDate.getMonth() + 1 ) )

}


// formatting correct english date text 
function getEnglischFormattedDate( day , month ) {

    strAddonToDay = "";
    strMonth = "";

    // console.log("Marko = " + day)

    switch ( day ) {

        case 1: 
            strAddonToDay = "st"
            break;
        case 2:
            strAddonToDay = "nd"
            break;
        case 3:
            strAddonToDay = "rd"
            break;
        default:
            strAddonToDay = "th"
            break;
    }

    switch( month ) {

        case 1:
            strMonth = "Jan"
            break;

        case 2:
            strMonth = "Feb"
            break;

        case 3:
            strMonth = "March"
            break;

        case 4:
            strMonth = "April"
            break;

        case 5:
            strMonth = "May"
            break;

        case 6:
            strMonth = "June"
            break;
            
        case 7:
            strMonth = "July"
            break;

        case 8:
            strMonth = "August"
            break;

        case 9:
            strMonth = "Sep"
            break;

        case 10:
            strMonth = "Oct"
            break;

        case 11:
            strMonth = "Nov"
            break;

        case 12:
            strMonth = "Dez"
            break;

    }

    // concatinating all togehter 
    return day+strAddonToDay + " " + strMonth;

}




/* -------------------------------------------------------------------------------------------- */
/* String Operations | 
/* -------------------------------------------------------------------------------------------- */

// concatinating string array by given an seperator e.g ';'
function getArraysOfConcatedString( strConcatCouple , strConcatChar ) {

    return strConcatCouple.split( strConcatChar );
}



/* ------------------------------------------------------------- */
/* Manipulating DomElements 
/* ------------------------------------------------------------- */

// set string to an id dom Element 
function setOnIdDomElementText( strIdDomElement, strTextContent ) {

    document.getElementById(strIdDomElement).innerHTML = strTextContent;
}

// change attribute value of DomElement
function changeAttributeOnDomElement( domElement ,  strAttr , strChangeValue ) {

    // no secure handling checks !!! 

    switch( strAttr ) {

        case "id":
            break;

        case "class":
            break;

        case "src":
        
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





/* ------------------------------------------------------------- */
/* Creating String Arrays to DomElement Array
/* ------------------------------------------------------------- */

// ( strDomType = [ "id" | "class" | "qs" | "qsa" ] )
function getDomElementArrayByArrayStrings( strArray , strDomType ) {
    
    let domElements = [];

    // check given strDomType 
    switch( strDomType ) {

        case "id":

            for( let i=0; i < strArray.length; i++ ) {

                // check if string Array exist as domElement
                if( checkExistDomElement( document.getElementById( strArray[i] )) ) {

                    domElements.push( document.getElementById( strArray[i] ) )

                }
               
            }

            break;

        case "class":

            for( let i=0; i < strArray.length; i++ ) {

                if( checkExistDomElement( document.getElementsByClassName( strArray[i])) ) {

                    domElements.push( document.getElementsByClassName( strArray[i] ) )

                }

                
            }

            break;

        case "qs":

            for( let i=0; i < strArray.length; i++ ) {

                if( checkExistDomElement( document.querySelector( strArray[i] )) ) {

                    domElements.push( document.querySelector( strArray[i] ) )

                }
                
            }

            break;
        
        case "qsa":

            for( let i=0; i < strArray.length; i++ ) {

                if( checkExistDomElement( document.querySelectorAll( strArray[i] )) ) {

                    domElements.push( document.querySelectorAll( strArray[i] ) )

                }

            }

            break;

        default: 

            console.log("[Error|createArrayOfDomElementsByStringArray] - Wrong strDomType , u given = " + strDomType )
            break;

    }

    return domElements;

}






/* ---------------------------------------------------------------------------------------------------------------- */
/* Console Outputs 
/* ---------------------------------------------------------------------------------------------------------------- */

// Array Output 
function consoleLogArray( array ) {

    if( array.length > 0 && array.length != undefined && array != null ) {

        for( let i=0; i <  array.length; i++ ) {
            console.log((i+1) + " - " + array[i] )
        }

    } else {

        console.log("[Error|consoleLogArray] - Cant Output of given array because of ( length = 0 / array is undefined / null). ")
    }

}


