const button = document.querySelector('#bit');

function toggleMode() {
    
    const menu = document.querySelector('.list');

    if(menu.classList.contains('menu-toggle')){
        menu.classList.remove('menu-toggle');
        
    }else {
        menu.classList.add('menu-toggle');
    }    
   
};