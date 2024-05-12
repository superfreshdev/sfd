/*

    create-layout-doc-cards.js 

    > define with an json object list of doc ressource views.
*/

console.log("[create] - list of doc cards ")

/* --------------------------------------------------------------- */
/* [Data] - Doc Card 
/* --------------------------------------------------------------- */

const objDataDocCard  = {

    defaultFoldersPath : {

        imgIconsPath : "media/img/00_general/icons/01-general-icons/",
        imgDocsPath : "media/docs/",

        docCategoriesPath : {

            frontendPath : "frontend/",
            backendPath : "backend/",
            toolsPath : "tools/",

        },

        docFileTypesPath : {
    
            imgPath : "img/",
            pdfPath : "pdf/",
            odtPath : "odt/",
            
        },
    },
  
    defaultRessourcesPath : {

        imgFilenameNotSelected : "linker-pfeil.png",

        docLinksData : {

            pdfLinkText : "Lese PDF",
            imgPdfFilename : "pdf-datei.png",
            odtLinkText : "Download .odt",
            imgDownloadFilename : "download-dark-grey.png",
    
        },
    },
   
    
    docCategoryData : {

        /* ------------------------------------------- */ 
        /* Frontend | Category */
        /* ------------------------------------------- */ 
        "frontend" : [

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
            {
                cardDocPath : "typescript/",

                title : "Type Script",
                descriptionTitle : " - Grundlagen und kleine Coding Challanges mit Lösungen",

                
                selectText : [

                    "Bitte auswählen ...",
                    "01 | TypeScript - ",
                    "02 | ...",
                    "03 | ...",
                    "04 | ...",
                    "05 | ...",
                    "06 | ...",
                ],

                selectRessource : [

                    // Bitte auswählen 
                    {                       
                        imgFilename : "typescript-grundlagen.png",
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
            // JavaScript - Doc Card 
            /* --------------------------------------------- */
            {
                cardDocPath : "javascript/",

                title : "Java Script",
                descriptionTitle : " - Grundlagen und kleine Coding Challanges mit Lösungen",

                
                selectText : [

                    "Bitte auswählen ...",
                    "01 | Java Script -",
                    "02 | ...",
                    "03 | ...",
                    "04 | ...",
                    "05 | ...",
                    "06 | ...",
                ],

                selectRessource : [

                    // Bitte auswählen 
                    {                       
                        imgFilename : "typescript-grundlagen.png",
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
        ],

        /* ------------------------------------------- */ 
        /* Backend | Category */
        /* ------------------------------------------- */ 
        "backend" : [

            /* --------------------------------------------- */
            // NestJS - Doc Card 
            /* --------------------------------------------- */
            {
                cardDocPath : "nestjs/",

                title : "NestJS",
                descriptionTitle : " - Grundlagen im JS - Backend & kleine Anwendungsbeispiele ",

                
                selectText : [

                    "Bitte auswählen ...",
                    "01 | ...",
                    "02 | ...",
                    "03 | ...",
                    "04 | ...",
                    "05 | ...",
                    "06 | ...",
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
            // Database Basics - Doc Card 
            /* --------------------------------------------- */
            {
                cardDocPath : "db-grundlagen/",

                title : "Datenbanken Grundlagen",
                descriptionTitle : " - Datenbank Konzept , Design und SQL mit Beispielen und Lösungen ",

                
                selectText : [

                    "Bitte auswählen ...",
                    "01 | ...",
                    "02 | ...",
                    "03 | ...",
                    "04 | ...",
                    "05 | ...",
                    "06 | ...",
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
            // Docker - Doc Card 
            /* --------------------------------------------- */
            {
                cardDocPath : "docker-kubernetes-grundlagen/",

                title : "Docker & Kubernetes",
                descriptionTitle : " - Grundlagen im Umgang mit Docker & Kubernetes ",

                
                selectText : [

                    "Bitte auswählen ...",
                    "01 | ...",
                    "02 | ...",
                    "03 | ...",
                    "04 | ...",
                    "05 | ...",
                    "06 | ...",
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
            
        ],

        /* ------------------------------------------- */ 
        /* Tools | Category */
        /* ------------------------------------------- */ 
        "tools" : [

            /* --------------------------------------------- */
            // Docker - Doc Card 
            /* --------------------------------------------- */
            {
                cardDocPath : "git/",

                title : "Git",
                descriptionTitle : " - Grundlagen im Umgang per Befehlen , VSCode , IntelliJ & SourceTree ",

                
                selectText : [

                    "Bitte auswählen ...",
                    "01 | ...",
                    "02 | ...",
                    "03 | ...",
                    "04 | ...",
                    "05 | ...",
                    "06 | ...",
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
            
        ]

    },
     
}

/* --------------------------------------------------------------- */
/* [Layout] - Doc Card 
/* --------------------------------------------------------------- */

// Start Add ID Container 
const domListOfDocCardsContainer = document.getElementById("list-of-doc-cards-container");

// Layout Data of Doc Card 
const objLayoutDocCard  = {

    // Default - Seperator for Doc Card 
    classDocCardSeperator : "seperator-doc-card-container",
    // Default - Doc Card 
    classDocCard : "doc-card",

    /* ------------------------------ */
    // Header | Doc Card 
    /* ------------------------------ */
    classHeaderDocCard : "header-doc-card",

    /* ---------------------------------------- */
    // Content | Doc Card  
    /* ---------------------------------------- */
    classContentDocCard : "content-doc-card",

     
    /* ---------------------------------------- */
    // Select Chapter | Content Doc Card  
    /* ---------------------------------------- */
    classSelectChapterContainer : "select-chapter-contianer",
    classSelectChapter : "select-chapter",
    classSelectArrowDownContainer : "select-arrow-down-container",
    imgSelectArrowFilename : "runter-black.png",

    /* ---------------------------------------- */
    // Doc Choose View | Content Doc Card  
    /* ---------------------------------------- */
    classDocChooseViewContainer : "doc-chooses-view-container",

    /* -------------------------------------------------------- */
    // Doc Link Ressource Container | Content Doc Card  
    /* -------------------------------------------------------- */
    classDocLinkRessourceContainer : "doc-link-ressource-container",

    classLinkButtonMediumSfd : "link-button-medium-sfd"

}


/* ---------------------------------------------------------*/
/* Execution ( Action ) 
/* ---------------------------------------------------------*/

function createListOfDocCards ( domIdStart , objDataDocCategory , objData , objLayout ) {
 

    console.log( " Marko = " + objDataDocCategory.length )

    /* --------------------------------------------------------- */
    /* Create List of doc cards 
    /* --------------------------------------------------------- */
    for( let i=0; i < objDataDocCategory.length; i++ ) {

        /* ------------------------------------------------------------- */
        /* Step 1 | Create | Doc Card 
        /* ------------------------------------------------------------- */

        var domDocCard = createLayoutDocCard("doc-card");

        /* ------------------------------------------------------------- */
        /* Step 2 | Create Header | Doc Card 
        /* ------------------------------------------------------------- */
        var domHeaderDocCard = createLayoutHeaderDocCard( "header-doc-card" , objDataDocCategory[i].title , objDataDocCategory[i].descriptionTitle );

            // Add 'header' to 'doc card'
            domDocCard.appendChild( domHeaderDocCard );

        /* ------------------------------------------------------------- */
        /* Step 3 | Create Content | Doc Card 
        /* ------------------------------------------------------------- */
        var domContentDocCard = createLayoutContentDocCard( "content-doc-card" );

            /* -------------------------------------------- */
            // Create | select chapter container 
            /* -------------------------------------------- */
            var domSelectChapterContainer = createLayoutSelectChapterContainerDocCard( 
                "select-chapter-container" ,
                "select-chapter" , objDataDocCategory[i].selectText , 
                "select-arrow-down-container" , "media/img/00_general/icons/01-general-icons/runter-black.png" ) ;

            // Add 'select chapter container' to 'content-doc-card'
            domContentDocCard.appendChild( domSelectChapterContainer )

            /* -------------------------------------------- */
            // Create | doc choose view container 
            /* -------------------------------------------- */
            // Tipp: doc-choosen-view-container 

            var domDocChooseViewContainer = createLayoutDocChooseViewContainerDocCard
                ( "doc-choose-view-container" , "doc-link-ressource-container" , objData )

            // Add 'doc choose view container' to 'content-doc-card'
            domContentDocCard.appendChild( domDocChooseViewContainer )

            // Add 'content-doc-card' to 'doc card'
            domDocCard.appendChild( domContentDocCard )

        /* ------------------------------------------------------------- */
        /* Step 4 | Add Doc Card to 'domIdStart' 
        /* ------------------------------------------------------------- */

        domIdStart.appendChild( domDocCard );

    }



}


createListOfDocCards ( domListOfDocCardsContainer , objDataDocCard.docCategoryData.frontend , objDataDocCard , "" )
























































/* ---------------------------------------------------------*/
/* Create | Doc Card  
/* ---------------------------------------------------------*/

function createLayoutDocCard( strClassDocCard ) {

    var domDocCard = document.createElement('div');
    domDocCard.className = strClassDocCard;
    // domDocCard.style.cssText = `border: 1px solid red;`;

    return domDocCard;
}

/* ---------------------------------------------------------*/
/* Create | Header | Doc Card 
/* ---------------------------------------------------------*/

function createLayoutHeaderDocCard( strClassHeader , strHeaderTitle , strHeaderTitleDescription ) {

    console.log( "[create Header] - Doc Card " )
    // console.log( strHeaderTitle + " || " + strHeaderSubTitle )

    // create header container 
    var domHeader = document.createElement('div')
    domHeader.className = strClassHeader;
    
    // add titles to header
    var domHeaderTitles = [
        document.createElement('span'),
        document.createElement('span')
    ];

    domHeaderTitles[0].innerHTML = strHeaderTitle;
    domHeaderTitles[1].innerHTML = strHeaderTitleDescription;

    for( let i=0; i < domHeaderTitles.length; i++ ) {

        domHeader.appendChild( domHeaderTitles[i] )

    }
    
    return domHeader;

}

/* ---------------------------------------------------------*/
/* Create | Content | Doc Card 
/* ---------------------------------------------------------*/

function createLayoutContentDocCard( strClassContentDocCard ) {

    var domContentDocCard = document.createElement('div');
    domContentDocCard.className = strClassContentDocCard;

    return domContentDocCard;

}

/* ---------------------------------------------------------*/
/* Create | Select Chapter Container | Doc Card 
/* ---------------------------------------------------------*/

function createLayoutSelectChapterContainerDocCard( 
    strClassSelectChapterContainer ,
    strClassSelectChapter , objDataDocCardSelectText , 
    strClassArrowDownContainer , strImgSrcArrowDown ) {

    console.log( "[create Select Chapter Container ] - Doc Card " )

    /* ---------------------------------------- */ 
    // create | select chapter container 
    /* ---------------------------------------- */ 
    var domSelectChapterContainer = document.createElement( 'div' );
    domSelectChapterContainer.className = strClassSelectChapterContainer;

    /* ---------------------------------------- */ 
    // create | select chapter 
    /* ---------------------------------------- */ 
    var domSelectChapter = document.createElement( 'select' );
    domSelectChapter.className = strClassSelectChapter;

    // adding options from data to select chapter  
    for (var i = 0; i < objDataDocCardSelectText.length ; i++){
        
        var opt = document.createElement('option');
        opt.value = objDataDocCardSelectText[i];
        opt.innerHTML = objDataDocCardSelectText[i];
        domSelectChapter.appendChild(opt);

    }

    /* ------------------------------------------------------------- */ 
    // add | 'select chapter' to 'select chapter container'
    /* ------------------------------------------------------------- */ 

    domSelectChapterContainer.appendChild( domSelectChapter )

    /* ------------------------------------------------------ */ 
    // create | select arrow down container 
    /* ------------------------------------------------------ */ 

    var domSelectArrowDownContainer = document.createElement('div');
    domSelectArrowDownContainer.className = strClassArrowDownContainer;

    var domImgSelectArrowDown = document.createElement('img');
    domImgSelectArrowDown.src = strImgSrcArrowDown;
    domImgSelectArrowDown.alt = "img";

    /* ---------------------------------------------------- */ 
    // add | img to 'select arrow down container' 
    /* ---------------------------------------------------- */ 

    domSelectArrowDownContainer.appendChild( domImgSelectArrowDown );

    /* --------------------------------------------------------------------------- */ 
    // add | 'select arrow down container' to 'select chapter container'
    /* --------------------------------------------------------------------------- */ 
    domSelectChapterContainer.appendChild( domSelectArrowDownContainer )


    return domSelectChapterContainer;

}

/* ---------------------------------------------------------*/
/* Create | Doc Choose View Container | Doc Card 
/* ---------------------------------------------------------*/

function createLayoutDocChooseViewContainerDocCard( strClassDocChooseViewContainer , strClassDocLinkRessourceContainer , objData ) {

    var domDocChooseViewContainer = document.createElement('div');
    domDocChooseViewContainer.className = strClassDocChooseViewContainer;

    // Add doc img 
    var imgDoc = document.createElement('img');
    imgDoc.alt ="img";
    imgDoc.src = "media/docs/frontend/angular/img/angular-grundlagen.PNG";

    // objData.defaultFoldersPath.imgDocsPath + 
    // objData.defaultFoldersPath.docCategoriesPath.frontendPath + 
    // objData.defaultFoldersPath.docFileTypesPath.imgPath +
    // objData.docCategoryData.frontend

    domDocChooseViewContainer.appendChild( imgDoc )

    // Add doc link ressource container
    var domDocLinkRessourceContainer = document.createElement('div');
    domDocLinkRessourceContainer.className = strClassDocLinkRessourceContainer;

    var imgNotSelectedDoc = document.createElement('img')
    imgNotSelectedDoc.className = "img-arrow-to-show-to-select";
    imgNotSelectedDoc.alt = "img";
    imgNotSelectedDoc.src = "media/img/00_general/icons/01-general-icons/linker-pfeil.png";

    domDocLinkRessourceContainer.appendChild( imgNotSelectedDoc );

    domDocChooseViewContainer.appendChild( domDocLinkRessourceContainer )

    return domDocChooseViewContainer;

}




















































/* ---------------------------------------------------------*/
/* Execution ( Action ) 
/* ---------------------------------------------------------*/

// console.log("### Start ")

    /* ------------------------------------------ */ 
    // Create Doc Card Container 
    /* ------------------------------------------ */ 
    // var domDocCard = createLayoutDocCard("doc-card");

    /* ------------------------------------------ */ 
    // Add | Header | to Doc Card Container
    /* ------------------------------------------ */ 
    // domDocCard.appendChild( createLayoutHeaderDocCard( 
    // "header-doc-card" ,
    // objDataDocCard.docCategoryData.frontend[0].title ,
    // objDataDocCard.docCategoryData.frontend[0].descriptionTitle ) )

    /* ------------------------------------------ */ 
    // Create Content | Doc Card 
    /* ------------------------------------------ */
    // var domContentDocCard = createLayoutContentDocCard("content-doc-card");


        /* -------------------------------------------------------- */ 
        // Add | Select Chapter Container | to Content 
        /* -------------------------------------------------------- */ 
        // domContentDocCard.appendChild( createLayoutSelectChapterContainerDocCard( 
        //     "select-chapter-container" ,
        //     "select-chapter" ,
        //     objDataDocCard,
        //     "select-arrow-down-container",
        //     "media/img/00_general/icons/01-general-icons/runter-black.png" )  )

        // domDocCard.appendChild( domContentDocCard );

        /* -------------------------------------------------------- */ 
        // Add | Doc Choose View Container | to Content
        /* -------------------------------------------------------- */ 

        // domContentDocCard.appendChild( createLayoutDocChooseViewContainerDocCard( 
        //     "doc-choose-view-container",
        //     "doc-link-ressource-container" ,
        //     objDataDocCard ) )

        // domDocCard.appendChild( domContentDocCard )
        





/* --------------------------------------------------- */ 
// Add Doc Card to 'list of doc cards container'
/* --------------------------------------------------- */
// domListOfDocCardsContainer.appendChild( domDocCard )



// console.log("### Ende ")








/*

            1. Start Punkt 

            2. Process to add all doc cards by category

                1 - create doc card ( function )

                    2 - create header | doc card ( function )

                    3 - create content | doc card ( function )

                        3.1 - Select Chapter Container 
                        3.2 - Doc Choose View Container 
                            
                            3.2.1 - Doc Link Ressource Container 

*/

