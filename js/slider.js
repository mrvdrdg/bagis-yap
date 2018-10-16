"use strict";

// forEach FIX for IE 
(function () {
    if ( typeof NodeList.prototype.forEach === "function" ) return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();


// Slider prototype object
function Slider(element, imageSelector) {
    //Image selector class or default
    this.imageClass = imageSelector || '.slider__image';
    
    //Array with images in slider
    this.images = element.querySelectorAll(this.imageClass);

    //Previous image
    this.previous = function() {
        this.images.forEach( function img(elem,index) {
            var Index = parseInt(elem.getAttribute('data-index')), IN, addClass;
            if (Index < 5){ IN = Index + 1; } 
            else { IN = 1; }
            addClass = 'image--'+IN;
            elem.className = elem.className.replace(/image--[0-9]/,'');
            elem.setAttribute('data-index', IN);
            elem.classList.add(addClass);
            
            if (addClass == 'image--1') { elem.classList.add('active'); } 
            else { elem.classList.remove('active'); }
        });
    };

    //Next image
    this.next = function() {
        this.images.forEach(function (elem, index) {
            var Index = parseInt(elem.getAttribute('data-index')), IN, addClass;
            if(Index > 1){ IN = Index - 1; } 
            else { IN = 5; }
            addClass = 'image--'+IN;
            elem.className = elem.className.replace(/image--[0-9]/,'');
            elem.setAttribute('data-index', IN);
            elem.classList.add(addClass);

            if(addClass=='image--1'){ elem.classList.add('active'); } 
            else { elem.classList.remove('active'); }
        });
    };
    
};

var d = document,
    slider = d.getElementById('slider'),    //Slider container
    next = d.getElementById('next'),        //Next slide button 
    prev = d.getElementById('prev'),        //Previous slide button
    isWheel;                                //Global var for setTimeout

//Creating carousel
var carousel = new Slider(slider);

//Button 
next.addEventListener('click', function(e) { carousel.next(); });
prev.addEventListener('click', function(e) { carousel.previous(); });




