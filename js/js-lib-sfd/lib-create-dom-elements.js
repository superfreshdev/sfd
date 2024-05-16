/* 

    lib-create-dom-elements.js 

    > functions which will be often used by creating 
    html dom elements by using java script , for example to creating an div container , .... 


*/


/* ------------------------------------------------------------------------------- */ 
// create div
/* ------------------------------------------------------------------------------- */

function createDiv ( strClassname , strId ) {

    const div = document.createElement('div');

    // set classname 
    if( !secureCheckValueIsEmpty( strClassname ) ) {
        div.className = strClassname;
    }
    // set id
    if( !secureCheckValueIsEmpty( strId ) ) {
        div.id = strId;
    }

    return div;
}

/* ------------------------------------------------------------------------------- */ 
// create span
/* ------------------------------------------------------------------------------- */

function createSpan ( strClassname , strId , strText ) {

    const span = document.createElement('span');

    // set classname 
    if( !secureCheckValueIsEmpty( strClassname ) ) {
        span.className = strClassname;
    }
    // set id
    if( !secureCheckValueIsEmpty( strId ) ) {
        span.id = strId;
    }
    // set text
    if( !secureCheckValueIsEmpty( strText ) ) {
        span.innerText = strText;
    }
    
    return span;

}

/* ------------------------------------------------------------------------------- */ 
// create select with options 
/* ------------------------------------------------------------------------------- */

function createSelectOptions ( strClassname , strId , strName , strArrayTextOptions , strArrayAttrValues ) {

    const select = document.createElement('select');

    // set classname 
    if( !secureCheckValueIsEmpty( strClassname ) ) {
        select.className = strClassname;
    }
    // set id
    if( !secureCheckValueIsEmpty( strId ) ) {
        select.id = strId;
    }
    // set name
    if( !secureCheckValueIsEmpty( strName ) ) {
        select.name = strName;
    }

    // set options ( text & value text )
    if( !secureCheckValueIsEmpty( strArrayTextOptions ) && !secureCheckValueIsEmpty( strArrayAttrValues )) {

        // Check is array ( only array allowed )
        if( secureCheckIsArrayObject( strArrayTextOptions ) && secureCheckIsArrayObject( strArrayAttrValues ) ) {

            console.log( "YES , Baby u are an ARRAY 😎" )

            // Generate Options Text with Values 
            for ( let i = 0; i < strArrayTextOptions.length; i++ ) {

                var opt = document.createElement('option');
                // add attr value text 
                opt.value = strArrayAttrValues[i];
                // add option text
                opt.innerText = strArrayTextOptions[i];

                select.appendChild(opt);

            }

        } else {

            console.log( "NO NO ARRAY 😒" )

        }
    }
    

    return select;


}

/* ------------------------------------------------------------------------------- */ 
// create img
/* ------------------------------------------------------------------------------- */

function createImg ( strSrc , strAlt , strClassname , strId  ) {

    const img = document.createElement('img');
    img.src = strSrc;
    img.alt = strAlt;

    // stretch img ( just for testing ) 
    // img.style.width = "100%";

    // set classname 
    if( !secureCheckValueIsEmpty( strClassname ) ) {
        img.className = strClassname;
    }
    // set id
    if( !secureCheckValueIsEmpty( strId ) ) {
        img.id = strId;
    }

    return img;
}






const divListOfDocCards = document.getElementById('list-of-doc-cards-container')



// create span 
// const domSpan = createSpan( "muschie", "penis", "Der Penis dringt in die Muschie ein. 🤣" );

// create select
// const domSelect = createSelectOptions( "class" , "id" , "name" , strOptionTexts , strOptionValues )

// create img 
// const domImg = createImg( "https://images.wallpaperscraft.com/image/single/forest_path_summer_125991_3840x2400.jpg" , "alt" , "class" , "id" )

// add dom Element to 'divListOfDocCards'
// divListOfDocCards.appendChild( domImg )



// list-of-doc-cards-container
// doc-card 


// ------------------------------------------------ //
// Secure Check - Function 
// ------------------------------------------------ //

function secureCheckValueIsEmpty ( value ) {

    if( value === "" || value == undefined || value == null ) {

        return true;

    } else {

        return false;

    }
}


function secureCheckIsArrayObject ( array ) {

    if( Array.isArray( array ) ) {
        
        return true;

    } else {

        console.log("[Error|secureCheckIsArrayObject] - Not Array Object found")
        return false;

    }

}


// console.log( secureCheckValueIsEmpty( strClassname ) )
// console.log( secureCheckValueIsEmpty( strId ) )

// console.log( " strClassname = " + strClassname )
// console.log( " strId = " + strId )



// const strOptionTexts = [

//     "option-1",
//     "option-2",
//     "option-3",
// ]

// const strOptionValues = [

//     "value-1",
//     "value-2",
//     "value-3",
// ]