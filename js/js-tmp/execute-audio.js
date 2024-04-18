/* ------------------------------------------------------------------------------------------ */
/* [File] - [JS Function] - execute-audio.js 
/* ------------------------------------------------------------------------------------------ */
/*  
    > define the function to put audio file & domElement
    to play or stop.

/* ------------------------------------------------------------------------------------------ */
console.log("### execute-audio.js")

// Important: This 2 const Variable belongs together , that means
// 'strIdsOfAudioFiles' is the id of your audio file ressource and 
// 'strIdsOfDomElementToPlayStopAudio' to activate this audio to play or stop 

const strIdsOfAudioFiles = [

    'audio-violine-welcome-about',
    'audio-quote-welcome-about'
];

// Behind this domElement it must be exist 2 Divs ( 1xDiv Start , 2xDiv Stop )
// Otherwise it will be failed ( toDo in Future to make in more dynamically )
const strIdsOfDomElementToPlayStopAudio = [

    'lbl-chk-audio-violine-welcome-about',
    'lbl-chk-audio-quote-welcome-about'

]

/* -------------------------------- */
/* Execution Part
/* -------------------------------- */

playAudioAndStop( strIdsOfAudioFiles, strIdsOfDomElementToPlayStopAudio )


function playAudioAndStop( strIdsOfAudioFiles, strIdsOfDomElementToPlayStopAudio ) {

    // No Error Safety Function Handlings 
    // U must be clear what u put inside 
    // and these must be exist 
    // [toDo] - in future

    // Step 1 - Add ClickListener to playAudio 1xDiv , to stopAudio 2xDiv 

    for( let i=0; i < strIdsOfAudioFiles.length; i++ ) {

        console.log("TEST => " + "#"+strIdsOfDomElementToPlayStopAudio[i]+" " +"> "+"div:nth-of-type(1)" )

        // Add "clickListener" as Play DomElement
        document.querySelector("#"+strIdsOfDomElementToPlayStopAudio[i]+" " +"> "+"div:nth-of-type(1)").addEventListener( "click", () => {

            // execute to play this audio from 'strIdsOfAudioFiles'
            document.getElementById( strIdsOfAudioFiles[i] ).play();

        } )
        // Add "clickListener" as Stop DomElement
        document.querySelector("#"+strIdsOfDomElementToPlayStopAudio[i]+" " +"> "+"div:nth-of-type(2)").addEventListener( "click", () => {
            
            // execute to stop this audio from 'strIdsOfAudioFiles'
            document.getElementById( strIdsOfAudioFiles[i] ).pause();
            document.getElementById( strIdsOfAudioFiles[i] ).currentTime = 0;

        } )
    }


}