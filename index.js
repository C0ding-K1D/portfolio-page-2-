const navLink = document.querySelector('.navigation_list');
const navBG = document.querySelector('.navigation-background');
const nav = document.querySelector('.navigation');
const checkBox = document.querySelector('.navigation-button');
const fullYear = document.querySelector('.year');

const year = new Date().getFullYear();
fullYear.textContent = year;

function toggleCheckbox() {
    let checkbox = document.getElementById('navi-toggle');
    checkbox.checked= !checkbox.checked;
};

(function(){
        
    function apply_viewport(){
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)   ) {
    
            let ww = window.screen.width;
            let mw = 540; // min width of site
            let ratio =  ww / mw; //calculate ratio
            let viewport_meta_tag = document.getElementById('viewport');
            if( ww < mw){ //smaller than minimum size
            viewport_meta_tag.setAttribute('content', 'initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=no, width=' + mw);
            }
            else { //regular size
            viewport_meta_tag.setAttribute('content', 'initial-scale=1.0, maximum-scale=1, minimum-scale=1.0, user-scalable=yes, width=' + ww);
            }
        }
    }
    
        //ok, i need to update viewport scale if screen dimentions changed
        window.addEventListener('resize', function(){
        apply_viewport();
        });
    
        apply_viewport();
    
    }());