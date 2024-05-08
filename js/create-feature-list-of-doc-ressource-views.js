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
                            imgUrl : "media/docs/frontend/angular/img/angular-grundlagen.PNG",
                        },
                        // 01 | Das Ökosystem
                        {
                            imgUrl : "media/docs/frontend/angular/img/01-Das-Ökosystem.png",
                            pdfUrl : "media/docs/frontend/angular/pdf/01-Das-Ökosystem.pdf",
                            odtUrl : "media/docs/frontend/angular/odt/01-Das-Ökosystem.odt",    
                        },
                        // 02 | CLI & Projekt Setup                    
                        {
                            imgUrl : "media/docs/frontend/angular/img/02-cli-projekt-setup.png",
                            pdfUrl : "media/docs/frontend/angular/pdf/02-cli-project-setup.pdf",
                            odtUrl : "media/docs/frontend/angular/odt/02-cli-project-setup.odt",                           
                        },
                        // 03 | Module , Komponenten , Bindungen
                        {
                            imgUrl : "media/docs/frontend/angular/img/02-cli-projekt-setup.png",
                            pdfUrl : "media/docs/frontend/angular/pdf/02-cli-project-setup.pdf",
                            odtUrl : "media/docs/frontend/angular/odt/02-cli-project-setup.odt",       
                        },
                        // 04 | Dependency Injection , Direktiven , Pipes
                        {
                            imgUrl : "media/docs/frontend/angular/img/02-cli-projekt-setup.png",
                            pdfUrl : "media/docs/frontend/angular/pdf/02-cli-project-setup.pdf",
                            odtUrl : "media/docs/frontend/angular/odt/02-cli-project-setup.odt",       
                        },
                        // 05 | Erweiterte Komponenten 
                        {
                            imgUrl : "media/docs/frontend/angular/img/02-cli-projekt-setup.png",
                            pdfUrl : "media/docs/frontend/angular/pdf/02-cli-project-setup.pdf",
                            odtUrl : "media/docs/frontend/angular/odt/02-cli-project-setup.odt",       
                        },                      
                        // 06 | Erweiterte Komponenten 
                        {
                            imgUrl : "media/docs/frontend/angular/img/02-cli-projekt-setup.png",
                            pdfUrl : "media/docs/frontend/angular/pdf/02-cli-project-setup.pdf",
                            odtUrl : "media/docs/frontend/angular/odt/02-cli-project-setup.odt",       
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
        pdfIconRessource : "media/img/00_general/icons/01-general-icons/pdf-datei.png",
        odtLinkText : "Download .odt",
        downloadIconRessource : "media/img/00_general/icons/01-general-icons/pdf-datei.png",

    },
    
}

/* --------------------------------------------------------------- */
/* [Design Pattern ( CSS) ] - Doc Ressource
/* --------------------------------------------------------------- */
/*
    1. id - Docs Card Layout 
    2. card item 

*/

function createListOfDocFiles() {

    
}


console.log("### Start ")

console.log( "Ausgabe = " + objDataDocRessources.docLinks.odtLinkText )

console.log("### Ende ")