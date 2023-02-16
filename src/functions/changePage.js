import { current } from '../index';
import { loadAbout } from '../pageModules/about';
import { loadMenu } from '../pageModules/menu';
import { loadContact } from '../pageModules/contact';

export { changeActive };

function changeActive(page){
    current.classList.remove('active');//might have to adjust
    current = page;
    page.classList.add('active');
    let body = document.querySelector('.mainContent');
    while(body.firstChild){ 
        body.removeChild(body.firstChild);
    }

    if(page.textContent == 'About Us'){
        loadAbout(body);
    }else if(page.textContent == 'Menu'){
        loadMenu(body);
    }else {
        loadContact(body);
    }
}