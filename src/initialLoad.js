import { makeElem } from './functions/makeElement';
import { append } from "./functions/appendElement";
import { changeActive } from './functions/changePage';
import { current } from '.';

export { initialLoad };


function initialLoad(){
    let content = makeElem('div','pageContainer');
    let headerContainer = makeElem('div','headerContainer');
    let header = makeElem('div','header','The Food Restaurant');
    append(headerContainer,header);
    
    let sideContainer = makeElem('div','sideContainer');
    let sideBar = makeElem('ul','sidebar');
    let about = makeElem('li','navMenu','About Us');
    about.addEventListener('click',()=>{changeActive(about)});
    current = about;
    
    let menu = makeElem('li','navMenu','Menu');
    menu.addEventListener('click',()=>{changeActive(menu)});
    
    let contact = makeElem('li','navMenu','Contact Us');
    contact.addEventListener('click',()=>{changeActive(contact)});
    
    append(sideBar,[about,menu,contact]);
    append(sideContainer,sideBar);
    
    let bodyContainer = makeElem('div','bodyContainer');
    let mainContent = makeElem('div','mainContent');
    
    append(bodyContainer,mainContent);
    
    let footerContainer = makeElem('div','footerContainer');
    let url = makeElem('a','flaticon','Github icons created by Bombasticon Studio - Flaticon');
    url.href = 'https://www.flaticon.com/free-icons/github';
    let image = makeElem('img','githubUrl');
    let footer = makeElem('a','footer');
    footer.href = 'https:github.com/KKeyfun';
    append(footer,image);
    append(footerContainer,[footer,url]);
    
    append(content,[headerContainer,sideContainer,bodyContainer,footerContainer]);
    
    document.querySelector('body').appendChild(content);

    changeActive(current);
}
