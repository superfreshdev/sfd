
console.log("### tmp-sfd-opearions.js ")


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

    switch ( day ) {

        case 1: 
            strAddonToDay = "st"
        case 2:
            strAddonToDay = "nd"
        case 3:
            strAddonToDay = "rd"
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

// Function to set id domElement text Content 
function setOnIdDomElementText( strIdDomElement, strTextContent ) {

    document.getElementById(strIdDomElement).innerHTML = strTextContent;
}



/* ------------------------------------------------------------- */
/* ???
/* ------------------------------------------------------------- */