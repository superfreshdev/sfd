console.log("### handle.js ")

// chk
// chkAboutMeMyTechPassion

// audio-aboutMe-myTechPassion


/*

    changeAttributeOnDomElement( domElement ,  strAttr , strChangeValue )

*/

const strCssSelectorOfReadTextLabel = [

    "[for=\"chk-about-me\"] > img"
]

changeAttributeOnDomElement( document.querySelector("[for=\"chk-about-me\"] > img") , "src" , "media/img/png/main/icons/all/bike.png" )

function changeAttributeOnDomElement( domElement ,  strAttr , strChangeValue ) {

    // no secure handling checks !!! 

    switch( strAttr ) {

        case "id":
            break;

        case "class":
            break;

        case "src":
            
        console.log("src> " + document.querySelector("[for=\"chk-about-me\"] > img") );

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


/* ---------------------------------------------------------------------- */
/* Define Audio of Reading Text 
/* ---------------------------------------------------------------------- */

// string id of audio file & checkbox audio 
const strIdsOfReadingAudiosAndCheckboxes = [

    "audio-about-me;chk-about-me",
    "audio-my-hobies;chk-my-hobbies",
    "audio-what-does-my-website-stand-for;chk-what-does-my-website-stand-for",
    "audio-why-do-i-call-myself-superfreshdev;chk-why-do-i-call-myself-superfreshdev"

]

// img ressource - audio text play / stop
const imgRessourcesOfReadingAudio = [

    "media/img/png/main/icons/arrow-up-black.png",
    "media/img/png/main/icons/arrow-down-black.png"
]

// text - audio text play / stop
const txtReadingAudio = [

    "Read Text",
    "Stop Audio"
]


/* ---------------------------------------------------------------------- */
/* Define Audio of Playing Music 
/* ---------------------------------------------------------------------- */

// Optional 


/* ---------------------------------------------------------------------- */
/* Execute ( Action Part )
/* ---------------------------------------------------------------------- */

// defineHandlerAsAudioPlayStop - so muss das heißen

defineAudioPlayStopPrototyp( strIdsOfReadingAudiosAndCheckboxes )


function defineAudioPlayStopPrototyp( strIdsOfAudioFilesAndCheckboxes , strImgRessources , strReadingText ) {

    // get - audio files & checkbox 
    // get - optional - imgRessource & text 

    console.log("Proto => " + strIdsOfAudioFilesAndCheckboxes[0] )


}


/*

    1. Define Audio File & Checkbox Audio & Img + Text + class 

    2. Add ChangeListener 

        - checked
        - unchecked 

        - default hover ?
        - checked hover ?












*/





















// Objekt muss erst gefüllt werden 





// console.log("A = " + audioFileCheckBox.strIdCheckbox)


// defineAudioPlayStop( audioFileIdCheckBoxId );

function defineAudioPlayStop( audioFileIdCheckBoxId ) {


    // check exist given arguments ? 
    // existiert noch nicht -> muss noch gemacht werden

    var strIdAudioFile = [];
    var strIdCheckbox = [];

    for( let i=0; i < audioFileIdCheckBoxId.length; i++ ) {

        // get String & substring in 2 values by ';'
        strIdAudioFile.push( audioFileIdCheckBoxId[i].split(";")[0] )
        strIdCheckbox.push( audioFileIdCheckBoxId[i].split(";")[1] )

        // output what u get 
        console.log( strIdAudioFile[ i ] )
        console.log( strIdCheckbox[ i ] )

        // Add on changeListener to this given Audio & Checkbox 
        document.getElementById( strIdCheckbox[i] ).addEventListener( 'change', ( )=> {

            if( document.getElementById( strIdCheckbox[i] ).checked ) {

                // Play Audio
                console.log("Audio is checkend -> play Audio " + strIdAudioFile[i] )
                document.getElementById( strIdAudioFile[i] ).play();

                let a = document.getElementById( strIdAudioFile[i] ).currentTime;

                console.log(">Penis =>  " +  a )

                // Change Label Text ( by querySelector )
                document.querySelector( "[for="+strIdCheckbox[i]+"] > div:last-child").innerHTML = "Stop Audio";
                document.querySelector( "[for="+strIdCheckbox[i]+"] > div:last-child").style.color = "#7b0e0e";


            } else {

           
                // Stop Audio
                console.log("Audio is unchecked -> stop Audio ")
                document.getElementById( strIdAudioFile[i] ).pause();
                document.getElementById( strIdAudioFile[i] ).currentTime = 0;

                // Change Label Text ( by querySelector )
                document.querySelector( "[for="+strIdCheckbox[i]+"] > div:last-child").innerHTML = "Read Text";
                document.querySelector( "[for="+strIdCheckbox[i]+"] > div:last-child").style.color = "#7b7d7d";

            }

            

        } )

      

    }
    

}



