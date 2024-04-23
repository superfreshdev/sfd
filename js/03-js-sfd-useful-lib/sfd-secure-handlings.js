/*

    [JS sfd Lib ] - sfd-secure-handlings.js

    > defines many useful functions which will be often use for 
    security checks , handlings , getting & settings datas , ... .
    This js-file helps you to dont repeat your code. 

    This file is perfect to add / modify useful js function which u often use.

*/
console.log("### [JS-Lib] - sfd-secure-handlings.js ");



/* ------------------------------------------------------------------------------------------- */ 
/* Check | DomElements & Data Type of DomElements
/* ------------------------------------------------------------------------------------------- */ 

// Check Exist - Given DomElement
function checkExistDomElement( domElement ) {

    if( domElement != undefined ) {

        // console.log("[domElement] - existiert")
        return true;

    } else {

        // console.log("[Error|checkExistDomElement] - Your given DomElement dont exist.")
        return false;

    }
}

// Check Exist - All DomElements ( only accept if all DomElements are existing )
function checkExistDomElements( domElements ) {

    console.log("lll = " + domElements )

    // Special Check - Single DomElement is not exist ( e.g id , class[0] )
    if( domElements == null && domElements == undefined ) {
        console.log( "[NotFound|checkExistDomElements] - domElement is ( undefined & null togehter) but it only shows value as = " + domElements )
        return false;
    }

    // Check - Single / Array DomElement is defined 
    if( checkExistDomElement( domElements ) ) {

        // Special Check - Single DomElement exist & had length = undefined 
        // ( e.g css id , css class[0] Element )
        if( domElements.length == undefined ) {

            // Single DomElement exist 
            console.log( "[Info| checkExistDomElements] - Single DomElement exist ( it has the length of undefined, it could be e.g an css id , css class[0] Element )  " )
            return true;

        }

        // Check - Given domElement is an Array of DomElements 
        if( domElements.length > 0 ) {

            // exist
            console.log( "[Info|checkAllowToHandleSingleDomElement] - Detecteting (Array of DomElements) , length = " + domElements.length )


            // Prüfung ? Was ist wenn es sich um reine Strings handelt ? 
            // console.log("ArrayString => " + strIdsOfGalleryImgSpinners1[0] )
            // console.log("DomArray => " + domIdsGalleryImgSpinners )

            let notFoundDomElements = [];

            // check every single Dom element on existing 
            for( let i=0; i < domElements.length; i++ ) {

                if( !checkExistDomElement( domElements[i] ) ) {

                    // actually domElement not exist
                    notFoundDomElements.push( domElements[i] )
                   
                }
            }

            // check - exists all domElements 
            if( notFoundDomElements.length === 0 ) {

                // all array of domElements exists
                return true;

            } 
            else {

                // minimum 1 domElement was not found
                console.log("[Error|checkAllowToHandleSingleDomElement] - Not Allow to handle ur DomElements if miniumum 1x DomElements is not exist");
                console.log("> " + notFoundDomElements.length + " DomElements cant found ")
                consoleLogArray( notFoundDomElements );
                return false;

            }

           
        } else {

            // length is 0 , dont exist
            console.log( "[NotFound| checkExistDomElements] - DomElement not exist , it has the length = " + domElements.length )
            return false;

        }
    } 
    else {

        // Single DomElement not exist ( is undefined )
        console.log( "[NotFound| checkExistDomElements] - DomElement not exist , value is = " + domElements )
        return false;

    }
   
}

// Check - DomElement is not null  
function checkDomElementIsNotNull( domElement ) {
    return ( domElement != null );
}

// Check - Given Element is 'Data Type' of DomElement ( e.g [object HTML] )
function checkElementIsDataTypeOfDomElement ( element ) {

    // console.log("DomElement DataType is = " + String(element) )

    // null Value is like data type of domElement
    if( String(element).includes( "[object HTML", 0 ) || element == null ) {

        // console.log("[Info|checkElementIsDataTypeOfDomElement] - is DomElement Type")
        return true;
    } 
    else {
        // console.log("[Error|checkElementIsDataTypeOfDomElement] - is not DomElement Type")
        return false;
    }

}

// Check - All given Elements are 'Data Types' of DomElement ( e.g [object HTML] )
function checkElementsAreDataTypeOfDomElements ( elements ) {

    for( let i=0; i < elements.length; i++ ) {

        // console.log("checkElements = " + elements[i] )

        if( checkElementIsDataTypeOfDomElement ( elements[i] ) == false ) {

             return false;

        }
    }

    // all elements have the data type of domElement
    return true;

}






/* ------------------------------------------------------------------------------------------- */ 
/* Check | Array Object , Data Object  
/* ------------------------------------------------------------------------------------------- */ 

// Check object is Array Object
function checkIsArrayObject ( array ) {

    if( Array.isArray( array ) ) {
        
        return true;

    } else {

        console.log("[Error|checkIsArrayObjectObject] - Not Array Object found")
        return false;

    }

}

// Check object is Data Object 
function checkIsDataObject ( data ) {

    if( Object.prototype.toString.call( data ) === "[object Object]" ) {
        
        return true;

    } else {

        console.log("[Error|checkIsDataObject] - Your Input is not an Data Object")
        return false;

    }

}

// Check is Array Object & not had elements of type domElements & has length
function checkOnlyAllowStringArrayElements( strArray ) {

    // Step 1 - Check is array object & elements dont be data types of DomElements 
    if( checkIsArrayObject( strArray ) ) {

        // Step 2 - Check array has minimum length of 1
        if( hasArrayElements( strArray ) ) {

            // Step 3 - Check array elements are not type of DomElements
            if( checkElementsAreDataTypeOfDomElements( strArray ) ) {

                // Check is correct
                console.log("[ correct - no type of DomElements found ]")
                return true;    

            } 
            else {

               // Check failed
               console.log("[Error|checkOnlyAllrowStringArrayElements] - Your given Array has Elements which are types of DomElements." )
               console.log("This case is not allowed." )
               return false;
               
            }

        } else {

            // Check failed
            console.log("[Error|checkOnlyAllrowStringArrayElements] - Your given Array has no Index, length not > 0" )
            return false;

        }
        
    } else {

        // Check failed
        console.log("[Error|checkOnlyAllrowStringArrayElements] - Your given Array is not type of Array object" )
        return false;

    }
}






/* ------------------------------------------------------------------------------------------- */ 
/* Get | Array  
/* ------------------------------------------------------------------------------------------- */ 

// Get Max Array Index
function getMaxArrayIndex ( array ) {
    return array.length;
}

// Check Array has Elements 
function hasArrayElements ( array ) {
    return ( array.length > 0 )  
}






/* ------------------------------------------------------------------------------------------- */ 
/* Secure Operation | Array 
/* ------------------------------------------------------------------------------------------- */ 

// Check String Array on Rendundancy Elements  
function checkStrArrayElementsOnRedundancy ( strArray ) {

    // check - input is array & array minimum length = 1
    if( checkIsArrayObject( strArray ) && hasArrayElements( strArray ) ) {

        // Run string Array
        for(let i=0; i < strArray.length; i++ ) {
         
            // compare actually first index with the others index of strings
            for(let j=0; j < strArray.length; j++) {

                // dont use same index to compare
                if( i !== j ) {

                    // console.log("It would be compare:")
                    // console.log( strArray[i] + " with " + strArray[j] )

                    // console.log("i = " + i);
                    // console.log("j = " + j);

                    if( strArray[i] === strArray[j] ) {

                        console.log("[Error|checkStrArrayElementsOnRedundancy ] - Redundancy was found in your string array")                        
                        return true;

                    } 

                }
            }

        }

        // no rendundancy found
        return false;
       
    }
   

}

// check string array as existing DomElements by given css selector typ strDomType
function checkStrArrayElementsExistAsDomElements ( strArray , strDomType ) {

    let domElementsNotFound = [];

    // Step 2 - return array of domElements by given strDomType 
    switch( strDomType ) {

        case "id":

            for( let i=0; i < strArray.length; i++ ) {
                
                if( !checkExistDomElement( strArray[i] ) ) {
                    domElementsNotFound.push( document.getElementById( strArray[i] ) )
                }
            }

            break;

        case "class":

            for( let i=0; i < strArray.length; i++ ) {

                if( !checkExistDomElement( strArray[i] ) ) {
                    domElementsNotFound.push( document.getElementsByClassName( strArray[i] ) )
                }   
            }

            break;

        case "qs":

            for( let i=0; i < strArray.length; i++ ) {

                if( !checkExistDomElement( strArray[i] ) ) {
                    domElementsNotFound.push( document.querySelector( strArray[i] ) )
                }   
                
            }

            break;
        
        case "qsa":

            for( let i=0; i < strArray.length; i++ ) {

                if( !checkExistDomElement( strArray[i] ) ) {
                    domElementsNotFound.push( document.querySelectorAll( strArray[i] ) )
                }   
               
            }

            break;

        default: 

            console.log("[Error|getArrayOfDomElementsByStringArray] - Wrong strDomType , u given = " + strDomType )
            break;

    }

    /* ---------------------------------------------- */
    /* All Strings Found as DomElements ? 
    /* ---------------------------------------------- */

    if( domElementsNotFound.length === 0 ) {

        // all domElements exists
        return true;
    } 
    else {

        console.log("[NotFound|getArrayOfDomElementsByStringArray] " + domElementsNotFound.length + " - DomElements wasnt found." )
        consoleLogArray( domElementsNotFound )
        return false;

    }
   
  
}





/* ------------------------------------------------------------------------------------------- */ 
/* Get | Type of Element
/* ------------------------------------------------------------------------------------------- */ 

// Get Type of Element
function getTypeOfElement( element ) {
    return typeof element;
}







