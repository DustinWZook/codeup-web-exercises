"use strict";

let codeKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
}
let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

let enteredCodePosition = 0;

$(document).keydown(function(e){
    let code = codeKeys[e.keyCode];

    let cheatCodeInput = konamiCode[enteredCodePosition];

    if (code == cheatCodeInput){
        enteredCodePosition++
        if(enteredCodePosition == konamiCode.length){
            konamiCodeUnlocked();
        }
    }else{
        enteredCodePosition = 0;
    }
})

function konamiCodeUnlocked(){
    alert("you have 30 lives");
    $('body').css('background-color', '#006e90')
    $('.container').prepend('<img class="w-100" id="konamiCode" src="img/konami_code_hero_fixed.webp" />');
    $('#evil-laugh').prepend('<audio id="sound"><source src="audio/laugh.wav" type="audio/mpeg"/></audio>');
    $('audio#sound')[0].play();
}
