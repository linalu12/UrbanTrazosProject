'use script';

const root = document.documentElement;

var btnElems = document.getElementsByTagName('h3');
for(var i = 0; i < btnElems.length; i++){
    btnElems[i].addEventListener('click', buttonClick);
}

function buttonClick(event){
    var btn = event.target;
    btn.classList.toggle('open');
    root.style.setProperty('--contentheight', btn.nextElementSibling.scrollHeight + 'px');
    
    var btnSib = btn.nextElementSibling;
    btnSib.classList.toggle('open');

    var buttons = document.querySelectorAll('.accordion-label'); 
    buttons.forEach(button=> {
        if(button !== btn && button.classList.contains('open')){
            button.classList.remove('open');
            button.nextElementSibling.classList.remove('open');
        }
    });

    
}