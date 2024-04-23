/*

    stater-sfd-webapge.js

    > this file is important for initialization of 
    dynamically content for example to add all change EventHandler to handle 
    playing audios of read files or to generate acutally date of the day 
    and lots of other useful things which should be generate by the beginning on my
    webpage

*/

console.log("### stater-sfd-webapge.js ")


/* ----------------------------------------------------------------------- */
// First Page Load ( Window Load ) 
/* ----------------------------------------------------------------------- */

// domLoad ???

window.addEventListener("load", () => {


    //* ------------------------------------------------------------------------------- */
    /* define | default layouts & handlings
    /* --------------------------------------------------------------------------------*/

    // setFirstPage( strRadioHeaders , strImgSrcCouplesOfHeaderLabel )
    // console.log( document.getElementById("penis").getAttribute("src") );



        /* ------------------------------------------------------------------------------- */
        /* define | header handlings sfd
        /* --------------------------------------------------------------------------------*/

        /* ------------------------------------------------------------------------------- */
        /* define | audio play stop handlings sfd
        /* --------------------------------------------------------------------------------*/

        /* ------------------------------------------------------------------------------- */
        /* define | gallery img sliders handlings sfd
        /* --------------------------------------------------------------------------------*/

        /* ------------------------------------------------------------------------------- */
        /* define | open close container handlings sfd
        /* --------------------------------------------------------------------------------*/



    /* ------------------------------------------------------------------------------- */
    /* get | Actually Date 
    /* --------------------------------------------------------------------------------*/

    if( checkExistDomElement( document.getElementById("js-date") ) ) {

        setOnIdDomElementText( "js-date" , getActuallyDate() ) 

    }

       


})




