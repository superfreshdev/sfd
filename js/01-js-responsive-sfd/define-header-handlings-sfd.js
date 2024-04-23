/*

    define-header-handlings-sfd.js

    > add Change EventLister on header nav page labels to 
    handle switching page container like about page , docs page , .. 


*/

console.log("### [JS] - define-header-handlings-sfd.js ")

/* ------------------------------------------------------- */
/* Data Storage | Header Content Handlings
/* ------------------------------------------------------- */

const imgDomElementOfPageSettedInfoBoxSfd = document.getElementById("img-page-setted-info-box-sfd");

const defaultImgSrcHeaderNavlabel = "media/img/01_header/";

const objDataHeaderPageNavigation = [
        
    {

        idRadioBox: "radio-page-about",
        idHeaderLabel: "",

        idImgHeaderLabel: "js-img-about-header-nav-label",

        srcImgHeaderLabel: {
                
                imgSrcGrey: "about-grey.png",
                imgSrcBlack: "about-black.png"

        },
       
        pageContainer: "page-about-container"

    },

    {

        idRadioBox: "radio-page-news",
        idHeaderLabel: "",

        idImgHeaderLabel: "js-img-news-header-nav-label",

        srcImgHeaderLabel: {
            
            imgSrcGrey: "news-grey.png",
            imgSrcBlack: "news-black.png"

        },

        pageContainer: "page-news-container"
    
    },

    {

        idRadioBox: "radio-page-docs",
        idHeaderLabel: "",

        idImgHeaderLabel: "js-img-docs-header-nav-label",

        srcImgHeaderLabel: {
            
            imgSrcGrey: "docs-grey.png",
            imgSrcBlack: "docs-black.svg"

        },

        pageContainer: "page-docs-container"
    
    },

    {

        idRadioBox: "radio-page-projects",
        idHeaderLabel: "",

        idImgHeaderLabel: "js-img-projects-header-nav-label",

        srcImgHeaderLabel: {
            
            imgSrcGrey: "project-grey.png",
            imgSrcBlack: "project-black.svg"

        },

        pageContainer: "page-projects-container"

    }

]

/* -------------------------------------------------------------------------------------------- */
/* create | domElements of Data Storage   */
/* -------------------------------------------------------------------------------------------- */

// radio DomElements 
var radioDomElements = [];
// radioDomElements = getDomElementArrayByArrayStrings( strRadioHeaders , "id");

// page Container DomElements 
var pageContainerDomElements = [];
// pageContainerDomElements = getDomElementArrayByArrayStrings( strPageContainers , "id") 

// img Header Nav Label DomElements 
// var imgHeaderNavLabelDomElements = getDomElementArrayByArrayStrings( strHeaderLabels , "id") 




/* -------------------------------------------------------------------------------------------- */
/* Execution |                                                                                  */
/* -------------------------------------------------------------------------------------------- */

defineStartFirstPage ();



/* -------------------------------------------------------------------------------------------- */
/* Step 1 | define Start First Page  */
/* -------------------------------------------------------------------------------------------- */

function defineStartFirstPage () {

    console.log("### defineStartFirstPage ");

        for( let i=0; i < objDataHeaderPageNavigation.length; i++ ) {

        
            if( document.getElementById( objDataHeaderPageNavigation[i].idRadioBox ).checked == true ) {

                console.log( objDataHeaderPageNavigation[i].idRadioBox  + " is checked")

                // set img black
                document.getElementById( objDataHeaderPageNavigation[i].idImgHeaderLabel ).src = defaultImgSrcHeaderNavlabel+objDataHeaderPageNavigation[i].srcImgHeaderLabel.imgSrcBlack;
                // set mobile img black 
                imgDomElementOfPageSettedInfoBoxSfd.src = defaultImgSrcHeaderNavlabel+objDataHeaderPageNavigation[i].srcImgHeaderLabel.imgSrcBlack;

                // set page
                document.getElementById( objDataHeaderPageNavigation[i].pageContainer ).style.display = "grid";
                

            } else {

                // set img grey
                document.getElementById( objDataHeaderPageNavigation[i].idImgHeaderLabel ).src = defaultImgSrcHeaderNavlabel+objDataHeaderPageNavigation[i].srcImgHeaderLabel.imgSrcGrey;

                // set unshown pages
                document.getElementById( objDataHeaderPageNavigation[i].pageContainer ).style.display = "none";

            }

          
        }

    console.log("#########################");
} 



/* -------------------------------------------------------------------------------------------- */
/* Step 2 | define change listener on header nav labels  */
/* -------------------------------------------------------------------------------------------- */

























// defineHeaderHandlingsSfd()

function defineHeaderHandlingsSfd() {


    // Step 1 - set default first page 
    setPage( radioDomElements , pageContainerDomElements )

}


function setPage( radioDomElements , pageContainerDomElements ) {

    // consoleLogArray ( pageContainerDomElements );
    
    for ( let i=0; i < radioDomElements.length; i++ ) {

        if( radioDomElements[i].checked == true ) {

            // console.log( radioDomElements[i] + " is checked ")

            /*------------------------- */
            /* Default Sets 
            /*------------------------- */

            // img src of checked header nav label 
            changeAttributeOnDomElement( imgsHeanderNavLabelDomElements[i] , "src", "media/img/01_header/about-black.png" )
            
            // show page 
            pageContainerDomElements[i].style.display = "grid";

        } else {

            // console.log( radioDomElements[i] + " not checked ")

            /*------------------------- */
            /* Default Sets 
            /*------------------------- */

            // default show img grey of unchecked header n av labels
            changeAttributeOnDomElement( imgsHeanderNavLabelDomElements[i] , "src", "media/img/01_header/about-grey.png" )

            // default unshown page
            pageContainerDomElements[i].style.display = "none";

        }

    }


}






























// starter sfd webpage 
// set first page -> decide mobile / desktop & set header nav labesl and hamburger


window.addEventListener("load", () => {


    // Set first Page 
    // setFirstPage( strRadioHeaders , strImgSrcCouplesOfHeaderLabel )

    // console.log( document.getElementById("penis").getAttribute("src") );
  
})

























