/*

    create-feature-list-of-doc-ressource-views.js 

    > define with an json object list of doc ressource views.

    Tipp: 
    für Filter Nav

    filter nav action

*/

console.log("### create - feature list of doc ressource views ")


/* --------------------------------------------------------------- */
/* [Data] - Doc Ressource
/* --------------------------------------------------------------- */

const objDataDocRessources = {

    defaultPath : {

        imgIconPath : "media/img/00_general/icons/01-general-icons/",
        docPath : "media/docs/",

    },

    defaultCategoryPath : {

        frontendPath : "frontend/",
        backendPath : "backend/",
        toolsPath : "tools/",
    },

    defaultTypeFilePath : {

        imgPath : "img/",
        pdfPath : "pdf/",
        odtPath : "odt/",
        
    },

    docCategory : {

        /* ------------------------------------------- */ 
        /* Frontend | Category */
        /* ------------------------------------------- */ 
        frontend : {

            docCards : [

                /* --------------------------------------------- */
                // Angular - Doc Card 
                /* --------------------------------------------- */
                {
                    cardDocPath : "angular/",

                    title : "Angular 17",
                    descriptionTitle : " - Alte Grundlagen & Neue Features 2024",

                    
                    selectText : [

                        "Bitte auswählen ...",
                        "01 | Das Ökosystem",
                        "02 | CLI & Projekt Setup",
                        "03 | Module , Komponenten , Bindungen",
                        "04 | Dependency Injection , Direktiven , Pipes",
                        "05 | Erweiterte Komponenten",
                        "06 | Routing",
                    ],

                    selectRessource : [

                        // Bitte auswählen 
                        {                       
                            imgFilename : "angular-grundlagen.png",
                        },
                        // 01 | Das Ökosystem
                        {
                            imgFilename : "01-Das-Ökosystem.png",
                            pdfFilename : "01-Das-Ökosystem.pdf",
                            odtFilename : "01-Das-Ökosystem.odt",    
                        },
                        // 02 | CLI & Projekt Setup                    
                        {
                            imgFilename : "02-cli-projekt-setup.png",
                            pdfFilename : "02-cli-project-setup.pdf",
                            odtFilename : "02-cli-project-setup.odt",                           
                        },
                        // 03 | Module , Komponenten , Bindungen
                        {
                            imgFilename : "02-cli-projekt-setup.png",
                            pdfFilename : "02-cli-project-setup.pdf",
                            odtFilename : "02-cli-project-setup.odt",    
                        },
                        // 04 | Dependency Injection , Direktiven , Pipes
                        {
                            imgFilename : "02-cli-projekt-setup.png",
                            pdfFilename : "02-cli-project-setup.pdf",
                            odtFilename : "02-cli-project-setup.odt",      
                        },
                        // 05 | Erweiterte Komponenten 
                        {
                            imgFilename : "02-cli-projekt-setup.png",
                            pdfFilename : "02-cli-project-setup.pdf",
                            odtFilename : "02-cli-project-setup.odt",        
                        },                      
                        // 06 | Erweiterte Komponenten 
                        {
                            imgFilename : "02-cli-projekt-setup.png",
                            pdfFilename : "02-cli-project-setup.pdf",
                            odtFilename : "02-cli-project-setup.odt",          
                        },     

                    ]

                    
                },
                /* --------------------------------------------- */
                // TypeScript - Doc Card 
                /* --------------------------------------------- */

                /* --------------------------------------------- */
                // JavaScript - Doc Card 
                /* --------------------------------------------- */

            ]
                  
        },

        /* ------------------------------------------- */ 
        /* Backend | Category */
        /* ------------------------------------------- */ 
        backend : {
            
        },

        /* ------------------------------------------- */ 
        /* Tools | Category */
        /* ------------------------------------------- */ 
        tools : {
            
        }

    },
    
    docLinks : {

        pdfLinkText : "Lese PDF",
        imgPdfFilename : "pdf-datei.png",
        odtLinkText : "Download .odt",
        imgDownloadFilename : "download-dark-grey.png",

    },

    imgNotSelectedFilename : "linker-pfeil.png"
    
}

/* --------------------------------------------------------------- */
/* [Design Pattern ( CSS) ] - Doc Ressource
/* --------------------------------------------------------------- */

// 1. id - doc cards layout ( start point )
const dpDocCardsLayout = "doc-cards-layout";

// 2. class - doc card 
const objDpDocCard = {

    /* ------------------------------ */
    // Header Card 
    /* ------------------------------ */
    classDocCard : "doc-card",
    classHeaderDocCard : "doc-card-header",

    /* ---------------------------------------- */
    // Card Choose View Container  
    /* ---------------------------------------- */
    classCardChooseViewContainer : "doc-card-choose-view-container",
    
        /* ---------------------------------------- */
        // Filter Selection  
        /* ---------------------------------------- */
        classFilterSelectionContainer : "filter-selection-container",
  
        select : {

            idSelect : "select",
            nameSelect :  "name-",
            classSelect : "filter-selection",
            
        },

        classSelectionArrowContainer : "selection-arrow-container",
        srcSelectionArrowDown : "media/img/00_general/icons/01-general-icons/runter-black.png",

        /* ---------------------------------------- */
        // Doc Choose View  
        /* ---------------------------------------- */

        classDocChooseView : "doc-choose-view-container",
        classCardItemLinkContainer : "docs-card-item-link-container",
        classLinktButtonMediumSfd : "link-button-medium-sfd",


}

// 3. class - seperator 
const dpSeperator = [

    // div classname
    "seperator-doc-card-container",
    // img src
    "media/img/00_general/default-imgs/trenner.PNG"

]




function createListOfDocFiles() {

    
}


console.log("### Start ")

console.log( "Ausgabe = " + objDataDocRessources.docLinks.odtLinkText )

console.log("### Ende ")