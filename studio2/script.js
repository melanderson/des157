'use strict';

document.addEventListener('DOMContentLoaded', function() {
    console.log('reading script');

    //capture images into variables
    var hat = document.getElementById('hat');
    var headphones = document.getElementById('headphones');
    var necklace = document.getElementById('necklace');
    var keychain = document.getElementById('keychain');
    var hairties = document.getElementById('hairties');

    //capture closing variables
    var close1 = document.getElementById('close1');
    var close2 = document.getElementById('close2');
    var close3 = document.getElementById('close3');
    var close4 = document.getElementById('close4');
    var close5 = document.getElementById('close5');

    //---------
    //hat hover event listener
    hat.addEventListener('mouseover', function() {
        hat.style.opacity = 1;
        hat.src = 'images/hat.png';
    });
    //hat mouseout event listener
    hat.addEventListener('mouseout', function() {
        hat.style.opacity = 0;
        hat.src = 'images/hat.png';
    });
    //hat click
    hat.addEventListener('click', function() {
        hatInfo.style.opacity = 1;
    });
    //close info
    close1.addEventListener('click', function() {
        hatInfo.style.opacity = 0;
    });



    //---------
    //headphones hover event listener
    headphones.addEventListener('mouseover', function() {
        headphones.style.opacity = 1;
        headphones.src = 'images/headphones.png';
    });
    //headphones mouseout event listener
    headphones.addEventListener('mouseout', function() {
        headphones.style.opacity = 0;
        headphones.src = 'images/headphones.png';
    });

    //headphones click
    headphones.addEventListener('click', function() {
        headphonesInfo.style.opacity = 1;
    });
    //close info
    close2.addEventListener('click', function() {
        headphonesInfo.style.opacity = 0;
    });


    //---------
    //necklace hover event listener
    necklace.addEventListener('mouseover', function() {
        necklace.style.opacity = 1;
        necklace.src = 'images/necklace.png';
    });
    //necklace mouseout event listener
    necklace.addEventListener('mouseout', function() {
        necklace.style.opacity = 0;
        necklace.src = 'images/necklace.png';
    });
    //necklace click
    necklace.addEventListener('click', function() {
        necklaceInfo.style.opacity = 1;
    });
    //close info
    close3.addEventListener('click', function() {
        necklaceInfo.style.opacity = 0;
    });



    //---------
    //keychain hover event listener
    keychain.addEventListener('mouseover', function() {
        keychain.style.opacity = 1;
        keychain.src = 'images/keychain.png';
    });
    //keychain mouseout event listener
    keychain.addEventListener('mouseout', function() {
        keychain.style.opacity = 0;
        keychain.src = 'images/keychain.png';
    });
    //keychain click
    keychain.addEventListener('click', function() {
        keychainInfo.style.opacity = 1;
    });
    //close info
    close4.addEventListener('click', function() {
        keychainInfo.style.opacity = 0;
    });




    //---------
    //hairties hover event listener
    hairties.addEventListener('mouseover', function() {
        hairties.style.opacity = 1;
        hairties.src = 'images/hairties.png';
    });
    //keychain mouseout event listener
    hairties.addEventListener('mouseout', function() {
        hairties.style.opacity = 0;
        hairties.src = 'images/hairties.png';
    });
    //hairties click
    hairties.addEventListener('click', function() {
        hairtiesInfo.style.opacity = 1;
    });
    //close info
    close5.addEventListener('click', function() {
        hairtiesInfo.style.opacity = 0;
    });


});
